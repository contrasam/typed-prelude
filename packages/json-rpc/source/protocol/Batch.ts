import { ImmutableArray } from '@typed/objects'
import { Notification } from './Notification'
import { Request } from './Request'
import { Response } from './Response'

export type Batch =
  | ImmutableArray<Notification<any, any>>
  | ImmutableArray<Request<any, any>>
  | ImmutableArray<Response<any, any>>
