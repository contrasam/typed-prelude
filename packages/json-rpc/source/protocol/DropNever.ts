export type DropNever<A> = { readonly [K in Exclude<keyof A, DropNeverKeys<A>>]: A[K] }

export type DropNeverKeys<A> = { readonly [K in keyof A]: A[K] extends never ? K : never }[keyof A]
