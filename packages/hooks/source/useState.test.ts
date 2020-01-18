import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { increment } from '../../math/source'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManager } from './createHooksManager'
import { useState } from './useState'
import { withHooks } from './withHooks'

export const test = describe(`useState`, [
  given(`an initial state`, [
    it(`returns a current state and updater fn`, ({ equal }, done) => {
      const manager = createHooksManager()
      const hooksEnv = createHookEnvironment(manager)
      const expectedValues = [1, 2, 3]
      const test = withHooks(function*() {
        const [getX, updateX] = yield* useState(1)
        const expected = expectedValues.shift()
        const actual = getX()

        if (!expected) {
          return done()
        }

        try {
          equal(expected, actual)
          yield* updateX(increment)
        } catch (error) {
          done(error)
        }
      })

      runEffects(test(), hooksEnv)
      runEffects(test(), hooksEnv)
      runEffects(test(), hooksEnv)
      runEffects(test(), hooksEnv)
    }),
  ]),
])