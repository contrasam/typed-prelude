import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { createHookEnvironment, HookEnvironment, HooksManager, WithHookEnvs } from '@typed/hooks'
import { Subscription } from '@typed/subscription'
import {
  Batch,
  Id,
  Message,
  Notification,
  NotificationParams,
  Request,
  Response,
  ResponseError,
  ResponseResult,
} from '../protocol'
import { NotificationLookup, RequestResponseLookup, ServiceMessages } from './Service'

export interface Transport {
  readonly onConnection: (fn: (connection: Connection) => Disposable) => Disposable
}

export interface Connection {
  readonly id: Id
  readonly incoming: Subscription<Message | Batch>
  readonly outgoing: Subscription<Message | Batch>
}

export type ServerOptions<E = never> = {
  readonly hooksManager: HooksManager
  readonly transport: Transport
  readonly resources: E
}

export function createServer<E = never>(
  onConnection: (connection: Connection) => Effect<WithHookEnvs<E>, any, any>,
  options: ServerOptions<E>,
) {
  const { hooksManager, transport, resources = {} } = options
  const environments = new WeakMap<Connection, HookEnvironment>()
  const getOrCreateEnvironment = (connection: Connection) => {
    if (environments.has(connection)) {
      return environments.get(connection)!
    }
    const env = createHookEnvironment(hooksManager)

    environments.set(connection, env)

    return env
  }
}

export type NotificationHandlers<E, A extends ServiceMessages> = {
  readonly [K in keyof NotificationLookup<A>]: K extends string
    ? NotificationHandler<E, NotificationLookup<A>[K]>
    : never
}

export type NotificationHandler<E, A extends Notification> = (
  params: NotificationParams<A>,
) => Effect<WithHookEnvs<E>, void, any>

export type RequestHandlers<E, A extends ServiceMessages> = {
  readonly [K in keyof RequestResponseLookup<A>]: K extends string
    ? RequestHandler<E, RequestResponseLookup<A>[K]>
    : never
}

export type RequestHandler<E, A extends readonly [Request<any, any>, Response<any, any>]> = (
  params: NotificationParams<A[0]>,
) => Effect<WithHookEnvs<E>, RequestHandlerResult<A[1]>, any>

export type RequestHandlerResult<A extends Response<any, any>> = Either<
  ResponseError<A>,
  ResponseResult<A>
>
