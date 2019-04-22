import { Arity1, id } from '@typed/lambda'
import { ascend } from '../ascend'
import { chain } from '../chain'
import { groupBy } from '../groupBy'

/**
 * Order a list into groups and subgroups
 * @param sortFns :: [(a -> PropertyKey)]
 * @param list :: [a]
 * @returns :: [a]
 */
export function multiSort<A>(sortFns: Array<Arity1<A, PropertyKey>>, list: ReadonlyArray<A>): A[] {
  if (sortFns.length === 0 || list.length === 0) {
    return list.slice()
  }

  const initialObject = groupBy(sortFns[0], list)
  const initialKeys = Object.keys(initialObject).sort(ascend(id))
  const innerSortFns = sortFns.slice(1)
  const result = initialKeys.reduce(
    (acc, key) => {
      acc[key] = multiSort(innerSortFns, initialObject[key])

      return acc
    },
    {} as Record<string, A[]>,
  )

  return chain(x => result[x], initialKeys)
}
