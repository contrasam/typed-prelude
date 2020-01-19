import { ImmutableArray, ImmutableObject } from '@typed/objects'

export type Json = JsonPrimitive | JsonArray | JsonObject

export type JsonPrimitive = string | number | boolean | null

export interface JsonArray extends ImmutableArray<Json> {}

export interface JsonObject extends ImmutableObject<Record<string, Json>> {}
