import { Id } from './Id'
import { Method, Notification } from './Notification'
import { StructuredJson } from './StructuredJson'

export interface Request<A extends Method = Method, B extends StructuredJson = StructuredJson>
  extends Notification<A, B> {
  readonly id: Id
}
