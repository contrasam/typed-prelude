import { Batch } from './Batch'
import { isResponse } from './isResponse'
import { Response } from './Response'

export function isBatchResponse(batch: Batch): batch is ReadonlyArray<Response<any, any>> {
  return batch.every(isResponse)
}
