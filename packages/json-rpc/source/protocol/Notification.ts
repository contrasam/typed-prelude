import { StructuredJson } from './StructuredJson'

export type Method = string

export interface Notification<
  A extends Method = Method,
  Params extends StructuredJson = StructuredJson
> {
  readonly jsonrpc: '2.0'
  readonly method: A
  readonly params: Params
}

export type NotificationParams<A> = A extends Notification<any, StructuredJson>
  ? A['params']
  : never
export type NotificationMethod<A extends Notification<string, any>> = A extends Notification<
  infer R,
  StructuredJson
>
  ? R
  : never
