import { Include } from '../../../lambda/esm'
import { Method, Notification, NotificationMethod, Request, Response } from '../protocol'

export type ServiceMessages = ReadonlyArray<
  Notification<any, any> | readonly [Request<any, any>, Response<any, any>]
>

export type Service<
  Name extends string = string,
  I extends ServiceMessages = ServiceMessages,
  O extends ServiceMessages = ServiceMessages
> = {
  readonly name: Name
  readonly incoming: I
  readonly outgoing: O
}

export type ServiceName<A> = A extends Service<infer R, any, any> ? R : never
export type ServiceIncomingMessages<A> = A extends Service<any, infer R, any> ? R : never
export type ServiceOutgoingMessages<A> = A extends Service<any, any, infer R> ? R : never

export type Notifications<A extends ServiceMessages> = A extends []
  ? never
  : Exclude<ArrayValue<A>, readonly [Request<any, any>, Response<any, any>]>

export type RequestResponsePairs<A extends ServiceMessages> = A extends []
  ? never
  : Exclude<ArrayValue<A>, Notification<any, any>>

type ArrayValue<A> = A extends ReadonlyArray<infer R> ? R : never

export type Requests<A extends ServiceMessages> = RequestResponsePairs<A>[0]
export type Responses<A extends ServiceMessages> = RequestResponsePairs<A>[1]

export type FindRequestResponsePair<A extends ServiceMessages, B extends Method> = Include<
  {
    [K in keyof A]: A[K] extends readonly [Request<B, any>, Response<any, any>] ? A[K] : never
  }[keyof A],
  [Request<B, any>, Response<any, any>]
>

export type FindNotification<A extends ServiceMessages, B extends Method> = {
  [K in keyof A]: A[K] extends Notification<B, any> ? A[K] : never
}[keyof A]

export type FindRequest<A extends ServiceMessages, B extends Method> = Include<
  {
    [K in keyof A]: A[K] extends readonly [Request<B, any>, Response<any, any>] ? A[K][0] : never
  }[keyof A],
  Request<B, any>
>

export type FindResponse<
  A extends ServiceMessages,
  B extends Request<any, any>
> = FindRequestResponsePair<A, NotificationMethod<B>[1]>

export type ServerIncoming<A extends Service> =
  | Notifications<ServiceIncomingMessages<A>>
  | Requests<ServiceIncomingMessages<A>>
  | Responses<ServiceOutgoingMessages<A>>
  | ReadonlyArray<Notifications<ServiceIncomingMessages<A>>>
  | ReadonlyArray<Requests<ServiceIncomingMessages<A>>>
  | ReadonlyArray<Responses<ServiceOutgoingMessages<A>>>

export type ServerOutgoing<A extends Service> =
  | Responses<ServiceIncomingMessages<A>>
  | Notifications<ServiceOutgoingMessages<A>>
  | Requests<ServiceOutgoingMessages<A>>
  | ReadonlyArray<Responses<ServiceIncomingMessages<A>>>
  | ReadonlyArray<Notifications<ServiceOutgoingMessages<A>>>
  | ReadonlyArray<Requests<ServiceOutgoingMessages<A>>>

export type ClientIncoming<A extends Service> = ServerOutgoing<A>
export type ClientOutgoing<A extends Service> = ServerIncoming<A>

export type NotificationMethods<A extends ServiceMessages> = NotificationMethod<Notifications<A>>
export type RequestMethods<A extends ServiceMessages> = NotificationMethod<Requests<A>>

export type NotificationLookup<A extends ServiceMessages> = {
  [K in keyof NotificationMethods<A>]: K extends string ? FindNotification<A, K> : never
}

export type RequestResponseLookup<A extends ServiceMessages> = {
  readonly [K in RequestMethods<A>]: K extends string ? FindRequestResponsePair<A, K> : never
}
