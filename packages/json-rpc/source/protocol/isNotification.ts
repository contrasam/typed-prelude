import { isNull, isString, isUndefined, or } from '@typed/logic'
import { isV2 } from './isV2'
import { isValidParams } from './isValidParams'
import { Message } from './Message'
import { Method, Notification } from './Notification'
import { Request } from './Request'

const isNullOrUndefined = or(isNull, isUndefined)

export function isNotification(message: Message): message is Notification<Method, any> {
  return (
    isV2(message) &&
    isString((message as Notification).method) &&
    isNullOrUndefined((message as Request).id) &&
    isValidParams(message)
  )
}
