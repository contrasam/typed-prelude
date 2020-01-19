import { Notification, Request, Response } from '../protocol'

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
  : Exclude<ArrayValue<A>, ReadonlyArray<any>>

export type RequestResponsePairs<A extends ServiceMessages> = A extends []
  ? never
  : Exclude<ArrayValue<A>, Notification<any, any>>

type ArrayValue<A> = A extends ReadonlyArray<infer R> ? R : never

export type Requests<A extends ServiceMessages> = RequestResponsePairs<A>[0]
export type Responses<A extends ServiceMessages> = RequestResponsePairs<A>[1]

export type Server<A extends Service> = {
  readonly name: ServiceName<A>
  readonly incoming: ServerIncoming<A>
  readonly outgoing: ServerOutgoing<A>
}

export type ServerIncoming<A extends Service> =
  | Notifications<ServiceIncomingMessages<A>>
  | Requests<ServiceIncomingMessages<A>>
  | Responses<ServiceOutgoingMessages<A>>

export type ServerOutgoing<A extends Service> =
  | Responses<ServiceIncomingMessages<A>>
  | Notifications<ServiceOutgoingMessages<A>>
  | Requests<ServiceOutgoingMessages<A>>

export type Client<A extends Service> = {
  readonly name: ServiceName<A>
  readonly incoming: ClientIncoming<A>
  readonly outgoing: ClientOutgoing<A>
}

export type ClientIncoming<A extends Service> = ServerOutgoing<A>
export type ClientOutgoing<A extends Service> = ServerIncoming<A>
