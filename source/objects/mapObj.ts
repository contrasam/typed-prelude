import { curry } from '@typed/lambda'
import { mapObj as __mapObj } from '../common/mapObj'

/**
 * Map over values contained in an object.
 */
export const mapObj = curry(__mapObj) as {
  <A, B, C extends Record<PropertyKey, A>>(
    fn: <K extends keyof C>(key: K, value: C[K]) => B,
    obj: C,
  ): { [K in keyof C]: B }

  <A, B, C extends Record<PropertyKey, A>>(fn: <K extends keyof C>(key: K, value: C[K]) => B): (
    obj: C,
  ) => { [K in keyof C]: B }
}
