declare module "domdiff" {
  export type DomDiffOptions = {
    before?: Node| null
    compare?: (a: Node | null, b: Node | null) => boolean,
  }

  const domDiff: (parentNode: Node, currentNodes: Node[], futureNodes: Node[], options?: DomDiffOptions) =>  Node[]

  export default domDiff
}
