import { unpack } from '@typed/either'
import { chain, Env, Resume } from '@typed/env'
import { Capabilities, Effect, IteratorResultOf, Return } from '../Effect'
import { Failure } from '../failures/Failure'
import { startEffect } from './startEffect'

export const runEffect = <A extends Effect<any, any>>(effect: A): Env<Capabilities<A>, Return<A>> =>
  chain(
    iterator => runEffectGenerator<A>(iterator, iterator.next() as IteratorResultOf<A>),
    startEffect<A>(effect),
  )

const runEffectGenerator = <A extends Effect<any, any>>(
  generator: A,
  result: IteratorResultOf<A>,
): Env<Capabilities<A>, Return<A>> =>
  result.done
    ? (_: Capabilities<A>) => Resume.of(result.value)
    : chain(
        value =>
          runEffectGenerator<A>(
            generator,
            (value instanceof Failure
              ? unpack(
                  e => generator.throw(e),
                  a => generator.return(a),
                  value.toEither(),
                )
              : generator.next(value)) as IteratorResultOf<A>,
          ),
        result.value,
      )
