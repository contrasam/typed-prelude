import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda'
import { createReadStream } from 'fs'

export function* readFile(
  ...args: ArgsOf<typeof import('fs').createReadStream>
): Effect<never, Either<Error, Buffer>> {
  return yield* Effect.fromEnv(
    Future.create<never, Error, Buffer>((reject, resolve) => {
      const buffers: Buffer[] = []
      const stream = createReadStream(...args)

      stream.on('data', (data: any) => buffers.push(data))
      stream.on('error', reject)
      stream.on('close', () => resolve(Buffer.concat(buffers)))

      return {
        dispose() {
          stream.close()
        },
      }
    }),
  )
}
