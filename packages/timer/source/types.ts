import { Disposable } from '@typed/disposable'
import { Arity1, IO } from '@typed/lambda'

/**
 * Generic Clock interface used to get the current time
 */
export interface Clock {
  readonly currentTime: IO<number>
}

/**
 * An extension of Clock useful for testing
 */
export interface VirtualClock extends Clock {
  readonly timePast: (delayMS: number) => void
}

/**
 * An extension of Clock used for scheduling delayed tasks.
 */
export interface Timer extends Clock {
  readonly delay: (fn: Arity1<number>, delayMs: number) => Disposable
}

/**
 * An extension of Timer useful for testing
 */
export interface VirtualTimer extends Timer, VirtualClock {}