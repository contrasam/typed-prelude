import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { NotificationMethod, Request } from '../protocol'
import { NotificationHandler, RequestHandler } from './createServer'
import {
  FindRequestResponsePair,
  FindResponse,
  Notifications,
  Requests,
  Service,
  ServiceIncomingMessages,
  ServiceMessages,
  ServiceOutgoingMessages,
} from './Service'

export interface Server<A extends Service, E = never> {
  readonly registerNotification: <B extends Notifications<ServiceIncomingMessages<A>>>(
    method: NotificationMethod<B>,
    handler: NotificationHandler<E, B>,
  ) => Disposable
  readonly registerRequest: <B extends Requests<ServiceIncomingMessages<A>>>(
    method: NotificationMethod<B>,
    handler: RequestHandler<
      E,
      FindRequestResponsePair<ServiceIncomingMessages<A>, NotificationMethod<B>>
    >,
  ) => Disposable

  readonly sendNotifications: (
    ...notification: ReadonlyArray<Notifications<ServiceOutgoingMessages<A>>>
  ) => Effect<Pure, void, any>
  readonly sendRequests: <A extends ReadonlyArray<Request>>(
    ...requests: A
  ) => Effect<Pure, FindResponses<ServiceOutgoingMessages<A>, A>, any>
}

export type FindResponses<A extends ServiceMessages, B extends ReadonlyArray<Request>> = {
  readonly [K in keyof B]: B[K] extends Request ? FindResponse<A, B[K]> : never
}
