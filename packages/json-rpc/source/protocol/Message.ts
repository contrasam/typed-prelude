import { Notification } from './Notification'
import { Request } from './Request'
import { Response } from './Response'

export type Message = Notification<any, any> | Request<any, any> | Response<any, any>
