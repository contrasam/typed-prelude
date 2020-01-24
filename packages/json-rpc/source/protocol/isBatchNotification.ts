import { Batch } from './Batch'
import { isNotification } from './isNotification'
import { Notification } from './Notification'

export function isBatchNotification(batch: Batch): batch is ReadonlyArray<Notification<any, any>> {
  return batch.every(isNotification)
}
