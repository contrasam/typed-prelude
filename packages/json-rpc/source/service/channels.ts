import { createChannel } from '@typed/hooks'
import { Connection } from './createServer'

export const ConnectionChannel = createChannel<Connection>({
  id: 'Be sure to provide your own connect',
  incoming,
})
