import { DropNever } from './DropNever'
import { Id } from './Id'
import { Json } from './Json'

export type Response<A extends Json = never, B extends Json = Json> = Failure<A> | Success<B>

export type Failure<A extends Json = Json | never> = {
  readonly jsonrpc: '2.0'
  readonly id: Id | null
  readonly error: JsonRpcError<A>
}

export type JsonRpcError<A = never> = DropNever<{
  readonly code: number
  readonly message: string
  readonly data: A
}>

export type Success<A extends Json = Json> = {
  readonly jsonrpc: '2.0'
  readonly id: Id
  readonly result: A
}

export type ResponseResult<A> = A extends Response<infer R, Json> ? R : never
export type ResponseError<A> = A extends Response<Json | never, infer R> ? R : never
