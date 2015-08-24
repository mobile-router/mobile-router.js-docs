## M.router.add(path[, callback] [, opts])

添加一个路由规则。

### 参数

* `path`: 必须参数，[路由规则](/M.router.rules)

* `callback`: 可选参数，一个函数，当 view 页显示之后的回调函数，可以理解为 `controller`

* `opts`: 可选参数，配置对象，可以配置 `cacheTemplate`, `animation`, `aniClass`, `getTemplate`, `onDestroy`, `children` ，详见 [M.router.init](/M.router.init) 中的 routes 配置