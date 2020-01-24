import { isArray, isObject } from '@typed/logic'
import { Message } from './Message'
import { Notification } from './Notification'

export function isValidParams(message: Message): boolean {
  return message.hasOwnProperty('params')
    ? isArray((message as Notification<any, {}>).params) ||
        isObject((message as Notification<any, {}>).params)
    : true
}
