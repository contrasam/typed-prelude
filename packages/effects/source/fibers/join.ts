import { Disposable } from '@typed/disposable'
import { Either, fromLeft, fromRight, isRight, Left, Right } from '@typed/either'
import { Resume } from '@typed/env'
import { Effects } from '../Effect'
import { fail } from '../failures'
import { Fiber, FiberFailure, FiberState } from './Fiber'

export type Join = { readonly join: <A>(fiber: Fiber<A>) => Resume<Either<Error, A>> }

export const Join: Join = {
  join<A>(fiber: Fiber<A>): Resume<Either<Error, A>> {
    const { info } = fiber

    if (info.state === FiberState.Returned) {
      return Resume.of(Either.of(info.value))
    }

    if (info.state === FiberState.Error) {
      return Resume.of(Left.of<Error>(info.error))
    }

    return Resume.create(cb => {
      const disposable = Disposable.lazy()

      fiber.addDisposable(disposable)

      info.promise.then(
        value => disposable.addDisposable(cb(Right.of(value))),
        error => disposable.addDisposable(cb(Left.of(error))),
      )

      return disposable
    })
  },
}

export function* join<A>(f: Fiber<A>): Effects<Join & FiberFailure, A> {
  const either: Either<Error, A> = yield (c: Join & FiberFailure) => c.join(f)

  if (isRight(either)) {
    return fromRight(either)
  }

  return yield* fail(FiberFailure, fromLeft(either)) as any
}
