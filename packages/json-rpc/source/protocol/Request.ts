import { MergeObjects } from '@typed/objects'
import { Id } from './Id'
import { Method, Notification } from './Notification'
import { StructuredJson } from './StructuredJson'

export type Request<A extends Method = Method, B extends StructuredJson = never> = Readonly<
  MergeObjects<{ readonly id: Id }, Notification<A, B>>
>
