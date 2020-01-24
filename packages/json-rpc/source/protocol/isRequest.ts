import { isNumber, isString, or } from '@typed/logic'
import { isV2 } from './isV2'
import { isValidParams } from './isValidParams'
import { Message } from './Message'
import { Method } from './Notification'
import { Request } from './Request'

const isStringOrNumber = or(isString, isNumber)

export function isRequest(message: Message): message is Request<Method, any> {
  return (
    isV2(message) &&
    isString((message as Request).method) &&
    isStringOrNumber((message as Request).id) &&
    isValidParams(message)
  )
}
