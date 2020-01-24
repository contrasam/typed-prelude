import { Message } from './Message'

export function isV2(message: Message) {
  return message.jsonrpc === '2.0'
}
