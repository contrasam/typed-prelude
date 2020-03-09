import { CombineResources } from '@typed/env'
import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Future } from './Future'
import { map } from './map'

export const ap = curry(__ap) as {
  <E1, E2, A, B, C>(fn: Future<E1, A, Arity1<B, C>>, value: Future<E2, A, B>): Future<
    CombineResources<E1, E2>,
    A,
    C
  >

  <E1, A, B, C>(fn: Future<E1, A, Arity1<B, C>>): <E2>(
    value: Future<E2, A, B>,
  ) => Future<CombineResources<E1, E2>, A, C>
}

function __ap<E1, E2, A, B, C>(
  fn: Future<E1, A, Arity1<B, C>>,
  value: Future<E2, A, B>,
): Future<CombineResources<E1, E2>, A, C> {
  return chain(f => map(f, value), fn)
}
