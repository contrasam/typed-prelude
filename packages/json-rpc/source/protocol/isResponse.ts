import { isNumber, isString, or } from '@typed/logic'
import { isV2 } from './isV2'
import { Json } from './Json'
import { Message } from './Message'
import { Failure, JsonRpcError, Response, Success } from './Response'

const isStringOrNumber = or(isString, isNumber)

export function isResponse(message: Message) {
  return (
    isV2(message) &&
    isStringOrNumber((message as Response<any, any>).id) &&
    (message.hasOwnProperty('result')
      ? isJson((message as Success<Json>).result)
      : isResponseError((message as Failure<Json>).error))
  )
}

function isResponseError(error: JsonRpcError<any>) {
  if (error.hasOwnProperty('data') && !isJson((error as JsonRpcError<Json>).data)) {
    return false
  }

  return isNumber(error.code) && isString(error.message)
}

function isJson(x: any) {
  try {
    JSON.stringify(x)

    return true
  } catch {
    return false
  }
}
