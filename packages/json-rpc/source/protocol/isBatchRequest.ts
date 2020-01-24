import { Batch } from './Batch'
import { isRequest } from './isRequest'
import { Request } from './Request'

export function isBatchRequest(batch: Batch): batch is ReadonlyArray<Request<any, any>> {
  return batch.every(isRequest)
}
