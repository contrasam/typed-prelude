# Typed [![CircleCI](https://circleci.com/gh/TylorS/typed-prelude/tree/master.svg?style=svg)](https://circleci.com/gh/TylorS/typed-prelude/tree/master) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)


> Reliable, Standards-oriented software for browsers & Node. Designed for TypeScript and progressive web applications.

Typed is TypeScript toolkit composed of many à-la-carte single purposed libraries to help build applications
that work in both browsers & Node. All Typed libraries have no non-Typed dependencies, are side-effect free, and provide a tree-shakable API around functions. While many of these libraries individually 
should support many *different* use-cases, the general purpose of the whole is to streamline progressive web app development.

Only modern environments are supported out of the box. The last 2 major versions of Chrome, Firefox, Safari, and Edge are supported, as well as the lastest stable and long-term-support releases for Node.

## Packages

All Typed Packages have no non-typed dependencies, with the exception of [`@typed/dom`](./packages/dom/readme.md) having a node-only peer dependency.

| Package | Dependencies | DevDependencies | PeerDependencies | Minified | Gzipped |
| ------- | ------------ | --------------- | ---------------- | -------- | ------- |
| [AsyncIterable](./packages/asynciterable/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/asynciterable) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/asynciterable) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/asynciterable) | ![Minified](https://badgen.net/bundlephobia/min/@typed/asynciterable) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/asynciterable) |
| [Disposable](./packages/disposable/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/disposable) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/disposable) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/disposable) | ![Minified](https://badgen.net/bundlephobia/min/@typed/disposable) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/disposable) |
| [DOM](./packages/dom/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/dom) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/dom) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/dom) | ![Minified](https://badgen.net/bundlephobia/min/@typed/dom) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/dom) |
| [Either](./packages/either/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/either) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/either) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/either) | ![Minified](https://badgen.net/bundlephobia/min/@typed/either) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/either) |
| [Env](./packages/env/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/env) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/env) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/env) | ![Minified](https://badgen.net/bundlephobia/min/@typed/env) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/env) |
| [History](./packages/history/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/history) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/history) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/history) | ![Minified](https://badgen.net/bundlephobia/min/@typed/history) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/history) |
| [Hooks](./packages/hooks/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/hooks) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/hooks) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/hooks) | ![Minified](https://badgen.net/bundlephobia/min/@typed/hooks) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/hooks) |
| [HTTP](./packages/http/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/http) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/http) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/http) | ![Minified](https://badgen.net/bundlephobia/min/@typed/http) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/http) |
| [Iterable](./packages/iterable/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/iterable) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/iterable) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/iterable) | ![Minified](https://badgen.net/bundlephobia/min/@typed/iterable) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/iterable) |
| [Lambda](./packages/lambda/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/lambda) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/lambda) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/lambda) | ![Minified](https://badgen.net/bundlephobia/min/@typed/lambda) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/lambda) |
| [List](./packages/list/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/list) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/list) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/list) | ![Minified](https://badgen.net/bundlephobia/min/@typed/list) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/list) |
| [Logger](./packages/logger/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/logger) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/logger) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/logger) | ![Minified](https://badgen.net/bundlephobia/min/@typed/logger) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/logger) |
| [Logic](./packages/logic/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/logic) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/logic) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/logic) | ![Minified](https://badgen.net/bundlephobia/min/@typed/logic) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/logic) |
| [Map](./packages/map/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/map) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/map) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/map) | ![Minified](https://badgen.net/bundlephobia/min/@typed/map) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/map) |
| [Math](./packages/math/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/math) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/math) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/math) | ![Minified](https://badgen.net/bundlephobia/min/@typed/math) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/math) |
| [Maybe](./packages/maybe/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/maybe) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/maybe) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/maybe) | ![Minified](https://badgen.net/bundlephobia/min/@typed/maybe) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/maybe) |
| [NewType](./packages/new-type/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/new-type) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/new-type) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/new-type) | ![Minified](https://badgen.net/bundlephobia/min/@typed/new-type) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/new-type) |
| [Objects](./packages/objects/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/objects) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/objects) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/objects) | ![Minified](https://badgen.net/bundlephobia/min/@typed/objects) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/objects) |
| [Promises](./packages/promises/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/promises) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/promises) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/promises) | ![Minified](https://badgen.net/bundlephobia/min/@typed/promises) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/promises) |
| [RemoteData](./packages/remote-data/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/remote-data) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/remote-data) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/remote-data) | ![Minified](https://badgen.net/bundlephobia/min/@typed/remote-data) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/remote-data) |
| [Routing](./packages/routing/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/routing) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/routing) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/routing) | ![Minified](https://badgen.net/bundlephobia/min/@typed/routing) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/routing) |
| [Set](./packages/set/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/set) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/set) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/set) | ![Minified](https://badgen.net/bundlephobia/min/@typed/set) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/set) |
| [Storage](./packages/storage/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/storage) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/storage) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/storage) | ![Minified](https://badgen.net/bundlephobia/min/@typed/storage) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/storage) |
| [Strings](./packages/strings/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/strings) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/strings) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/strings) | ![Minified](https://badgen.net/bundlephobia/min/@typed/strings) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/strings) |
| [Subscription](./packages/subscription/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/subscription) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/subscription) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/subscription) | ![Minified](https://badgen.net/bundlephobia/min/@typed/subscription) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/subscription) |
| [Timer](./packages/timer/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/timer) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/timer) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/timer) | ![Minified](https://badgen.net/bundlephobia/min/@typed/timer) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/timer) |
| [Tuple](./packages/tuple/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/tuple) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/tuple) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/tuple) | ![Minified](https://badgen.net/bundlephobia/min/@typed/tuple) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/tuple) |
| [UUID](./packages/uuid/readme.md) | ![Deps](https://badgen.net/david/dep/TylorS/typed-prelude/packages/uuid) |![DevDeps](https://badgen.net/david/dev/TylorS/typed-prelude/packages/uuid) | ![PeerDeps](https://badgen.net/david/peer/TylorS/typed-prelude/packages/uuid) | ![Minified](https://badgen.net/bundlephobia/min/@typed/uuid) | ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/uuid) |


## Helpful information

Typed is designed to work in modern browsers and Node. This means that there are some code paths that are not used in one or the other. This is more important when making bundles for the browser as every byte parsed is impacting your time to load. To get around this you can use a plugin for your particular bundler to replace some of the conditionals used with `true/false` values to ensure unused code paths are removed.

| Conditional | Replace for Browser | Replace for Node | Packages |
| ----------- | ------------------- | ---------------- | -------- |
| `typeof window !== 'undefined' && typeof document !== 'undefined'` | `true` | `false` | `dom`, `env`, `history`, `http`, `timer` |
| `typeof crypto !== 'undefined'` | `true` | `false` | `uuid` |
| `typeof process !== 'undefined'` | `false` | `true` | `dom` |

Here's some examples of a replace plugin

| Bundler | Replace Plugin |
| ------- | -------------- |
| Rollup | https://github.com/rollup/rollup-plugin-replace |
| Webpack | https://www.npmjs.com/package/webpack-plugin-replace |
