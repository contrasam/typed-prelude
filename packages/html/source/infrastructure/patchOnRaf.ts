import { DomEnv } from '@typed/dom'
import { getEnvironmentByKey, HookEffects, HooksManagerEnv, runWithHooks } from '@typed/hooks'
import { patch, PatchEnv, raf, RafEnv } from '@typed/render'
import { EnvOf, VNode } from '../domain'
import { elementToVNode } from './elementToVNode'
import { PatchFailure } from './PatchFailure'

export function* patchOnRaf<E, A extends VNode>(
  fn: () => HookEffects<E, A>,
  rootElement: HTMLElement,
): HookEffects<
  E &
    EnvOf<A> &
    RafEnv &
    PatchEnv<VNode, A, DomEnv & PatchFailure> &
    DomEnv &
    PatchFailure &
    HooksManagerEnv,
  never
> {
  const initial = yield* elementToVNode(rootElement)
  const env = yield* getEnvironmentByKey(rootElement)

  let previous = yield* patch(initial, yield* runWithHooks(fn(), env))

  while (true) {
    yield* raf()

    if (env.updated) {
      previous = yield* patch(previous, yield* runWithHooks(fn(), env))
    }
  }
}
