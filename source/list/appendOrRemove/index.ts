import { curry, id } from '../../lambda'
import { fromJust, isNothing } from '../../maybe'
import { append } from '../append/append'
import { findIndex } from '../findIndex'
import { remove } from '../remove'

export const appendOrRemove: {
  <A>(item: A, items: A[]): A[]
  <A>(item: A): (items: A[]) => A[]
} = curry(<A>(item: A, items: A[]): A[] => __appendOrRemove(item, items, id))

export const appendOrRemoveBy: {
  <A, B = A>(item: A, items: A[], comparison: (value: A) => B): A[]
  <A>(item: A, items: A[]): <B = A>(comparison: (value: A) => B) => A[]
  <A>(item: A): {
    <B = A>(items: A[], comparison: (value: A) => B): A[]
    (items: A[]): <B = A>(comparison: (value: A) => B) => A[]
  }
} = curry(__appendOrRemove)

function __appendOrRemove<A, B = A>(item: A, items: A[], comparison: (value: A) => B): A[] {
  const b = comparison(item)
  const index = findIndex(a => comparison(a) === b, items)

  if (isNothing(index)) {
    return append(item, items)
  }

  return remove(fromJust(index), 1, items)
}