import { Batch } from './Batch'
import { Message } from './Message'

export function isBatch(messageOrBatch: Message | Batch): messageOrBatch is Batch {
  return Array.isArray(messageOrBatch)
}
