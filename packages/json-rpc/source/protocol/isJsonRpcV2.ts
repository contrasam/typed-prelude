import { isObject } from '@typed/logic'
import { Batch } from './Batch'
import { isBatch } from './isBatch'
import { isBatchNotification } from './isBatchNotification'
import { isBatchRequest } from './isBatchRequest'
import { isBatchResponse } from './isBatchResponse'
import { isNotification } from './isNotification'
import { isRequest } from './isRequest'
import { Message } from './Message'

export function isJsonRpcV2(x: any): x is Message | Batch {
  return isBatch(x)
    ? isBatchNotification(x) || isBatchRequest(x) || isBatchResponse(x)
    : isObject(x) && (isNotification(x) || isRequest(x) || isRequest(x))
}
