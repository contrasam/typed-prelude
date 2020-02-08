import { Disposable } from '@typed/disposable'
import { Either, fromRight, isLeft } from '@typed/either'
import { Future } from '@typed/future'
import { Maybe, Nothing } from '@typed/maybe'
import { ItemEffect } from '../AsyncStorage'
import { getValue } from './getValue'

export function* removeValue<A>(key: string, store: IDBObjectStore): ItemEffect<Maybe<A>> {
  const value = yield* getValue(key, store)
  const either = (yield Future.create<never, Error, Maybe<A>>((reject, resolve) => {
    const request = store.delete(key)
    const disposable = Disposable.lazy()

    request.onerror = ev =>
      disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () =>
      disposable.addDisposable(resolve(isLeft(value) ? Nothing : fromRight(value)))

    return disposable
  })) as Either<Error, Maybe<A>>

  return either
}
