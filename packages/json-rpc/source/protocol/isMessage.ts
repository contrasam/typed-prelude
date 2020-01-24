import { Batch } from './Batch'
import { Message } from './Message'

export function isMessage(messageOrBatch: Message | Batch): messageOrBatch is Message {
  return !Array.isArray(messageOrBatch)
}
