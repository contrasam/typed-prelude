import { BubblingEventHandler, EventHandler, EventHandlerWithOptions, TagName } from '../model'

export const isEventHandlerWithOptions = <
  E extends {},
  A extends TagName,
  Map extends {},
  K extends keyof Map
>(
  handler: EventHandler<E, A, Map, K>,
): handler is EventHandlerWithOptions<E, A, Map, K> => Array.isArray(handler)

export const isBubblingEventHandler = <
  E extends {},
  A extends TagName,
  Map extends {},
  K extends keyof Map
>(
  handler: EventHandler<E, A, Map, K>,
): handler is BubblingEventHandler<E, A, Map, K> => !isEventHandlerWithOptions(handler)
