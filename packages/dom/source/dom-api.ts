import { and, complement, isBool, isNotNull, isNotUndefined } from '@typed/logic'
import domdiff from 'domdiff'

const shouldNotRender = and(and(isNotNull, complement(isBool)), isNotUndefined)

export function insertNodesBefore(
  parent: Node,
  start: Node | null,
  end: Node | null = null,
  before: Node | null = null,
): void {
  while (start !== end) {
    const next = start!.nextSibling
    parent.insertBefore(start!, before)
    start = next
  }
}

export function removeNodes(container: Node, start: Node | null, end: Node | null = null): void {
  while (start !== end) {
    const next = start!.nextSibling
    container.removeChild(start!)
    start = next
  }
}

export function updateChildren(
  container: Node,
  currentNodes: ReadonlyArray<Node | null | undefined | boolean>,
  updatedNodes: ReadonlyArray<Node | null | undefined | boolean>,
): Node[] {
  return domdiff(
    container,
    currentNodes.filter(shouldNotRender) as Node[],
    updatedNodes.filter(shouldNotRender) as Node[],
  )
}
