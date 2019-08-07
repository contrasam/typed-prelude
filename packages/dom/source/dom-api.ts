import domdiff from 'domdiff'

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
  currentNodes: Node[],
  updatedNodes: Node[],
): Node[] {
  return domdiff(container, currentNodes, updatedNodes)
}
