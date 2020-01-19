import { DropNever } from './DropNever'
import { StructuredJson } from './StructuredJson'

export type Method = string

export type Notification<
  A extends Method = Method,
  Params extends StructuredJson = never
> = DropNever<{
  readonly jsonrpc: '2.0'
  readonly method: A
  readonly params: Params
}>
