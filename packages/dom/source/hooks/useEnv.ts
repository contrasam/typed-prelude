import { Env, handle, Pure, runPure } from '@typed/env'
import { Maybe, Nothing } from '@typed/maybe'
import { useState } from '../tagged'
import { useDisposable } from './useDisposable'

export function useEnv<A>(env: Pure<A>): Maybe<A>
export function useEnv<E, A>(env: Env<E, A>, resources: E): Maybe<A>

export function useEnv<E, A>(env: Env<E, A>, resources?: E) {
  const [state, setState] = useState<Maybe<A>>(Nothing)

  useDisposable(
    () => runPure(x => setState(Maybe.of(x)), handle(resources || {}, env) as Pure<A>),
    [env, resources],
  )

  return state
}
