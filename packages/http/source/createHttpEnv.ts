import { isBrowser } from '@typed/common'
import { Disposable, disposeAll } from '@typed/disposable'
import { noOp } from '@typed/lambda'
import { hasOwnProperty } from '@typed/objects'
import { IncomingMessage } from 'http'
import { HttpCallbacks, HttpEnv, HttpOptions } from './types'
import { withHttpManagement, WithHttpManagementOptions } from './withHttpManagement'

const IS_HTTPS = /https/

/**
 * Creates an Http Environment that works in browser and node.
 */
export function createHttpEnv(options?: WithHttpManagementOptions): HttpEnv {
  const env: HttpEnv = { http: httpRequest }

  return options ? withHttpManagement(options, env) : env
}

function httpRequest(url: string, options: HttpOptions, callbacks: HttpCallbacks) {
  return isBrowser
    ? browserHttpRequest(url, options, callbacks)
    : nodeHttpRequest(url, options, callbacks)
}

function nodeHttpRequest(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
  const { success, failure, onStart } = callbacks
  const { method = 'GET', headers, body } = options
  const protocol = IS_HTTPS.test(url) ? 'https:' : 'http:'
  const http = protocol === 'https:' ? require('https') : require('http')
  const disposables: Disposable[] = []

  const request = http.request(
    url,
    { method, headers: { 'Accept-Encoding': 'br,gzip,deflate', ...headers }, protocol },
    (response: IncomingMessage) => {
      const data: string[] = []

      if (onStart) {
        disposables.push(onStart())
      }

      switch (response.headers['content-encoding']) {
        case 'br':
          response = response.pipe(require('zlib').createBrotliDecompress())
          break
        case 'gzip':
          response = response.pipe(require('zlib').createGunzip())
          break
        case 'deflate':
          response = response.pipe(require('zlib').createInflate())
          break
      }

      response.on('data', chunk => data.push(chunk.toString()))
      response.on('error', error => disposables.push(failure(error)))
      response.on('close', () => {
        const headersMap: Record<string, string | undefined> = {}

        for (const header in response.headers) {
          if (hasOwnProperty(header, response.headers)) {
            const value = response.headers[header]

            headersMap[header] = Array.isArray(value) ? value.join(': ') : value
          }
        }

        disposables.push(
          success({
            responseText: data.join(''),
            status: response.statusCode!,
            statusText: response.statusMessage!,
            headers: headersMap,
          }),
        )
      })
    },
  )

  if (body) {
    request.write(body)
  }

  request.end()

  disposables.push({ dispose: () => request.abort() })

  return disposeAll(disposables)
}

function browserHttpRequest(
  url: string,
  options: HttpOptions,
  callbacks: HttpCallbacks,
): Disposable {
  const { success, failure, onStart } = callbacks
  const { method = 'GET', headers, body } = options
  const request = new XMLHttpRequest()

  const disposables: Disposable[] = [{ dispose: () => request.abort() }]

  request.onerror = () => disposables.push(failure(new Error(request.statusText)))
  request.onloadstart = onStart ? () => disposables.push(onStart()) : noOp

  request.addEventListener('load', () => {
    const headers = request.getAllResponseHeaders()

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/)

    // Create a map of header names to values
    const headerMap: Record<string, string> = {}
    arr.forEach((line: string) => {
      const parts = line.split(': ')
      const header = parts.shift()!
      const value = parts.join(': ')
      headerMap[header] = value
    })

    disposables.push(
      success({
        responseText: request.responseText,
        status: request.status,
        statusText: request.statusText,
        headers: headerMap,
      }),
    )
  })

  request.open(method, url)

  if (headers) {
    Object.keys(headers).forEach(header => {
      request.setRequestHeader(header, headers[header] || '')
    })
  }

  request.send(body)

  return disposeAll(disposables)
}