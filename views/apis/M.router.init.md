## M.router.init([routes] [, options])

初始化路由。

### 参数

* `routes`: [路由规则](/M.router.rules) 对象组成数组，可选参数；每一个路由项可以包含如下信息：

	* `path`: `String` 类型值，路由规则

	* `cacheTemplate`: `Boolean` 类型值，针对于当前的route，是否缓存模板

	* `animation`: `Boolean` 类型值，针对于当前的route，是否有动画

	* `aniClass`: `String` 类型值，针对于当前的route，动画类型（效果）

	* `getTemplate`: 一个函数，用于得到模板字符串；如果需要异步获取模板，那么这个函数要带有一个参数，这个参数是一个函数，在得到模板之后调用他，当然参数就是得到的模板字符串

	* `callback`: 一个函数，当 view 页显示之后的回调函数，可以理解为 `controller`

	* `onDestroy`: 一个函数，当这个 view 被销毁的时候，也就是从文档中移除的时候会调用；你可以处理一些解绑操作，销毁和 DOM 关联等事情

* `options`: 配置参数，可选参数，它包含如下信息：

	* `cacheTemplate`: `Boolean` 类型值，是否缓存模板

	* `viewsSelector`: `String` 类型值，views 容器选择器，如果为空，或者没有符合元素，那么 views 的容器元素就为 body 了

	* `viewClass`: `String` 类型值，每个 view 需要增加的其他 class ，例如 `"page-view2 page-view3"` ，因为每一个page view 默认会有 `page-view` 的 class 

	* `animation`: `Boolean` 类型值，是否有动画

	* `aniClass`: `String` 类型值，有动画的话，动画的类型

	* `maskClass`: `String` 类型值，蒙层 class 主要是显示 loading 时的蒙层

	* `showLoading`: `Boolean` 类型值，是否显示 loading

	* `cacheViewsNum`: `Number` 类型值，缓存 view 数量

	* `error`: 一个函数，当不能匹配到任何路由的时候的回调，一般会利用 [M.router.navigate](/M.router.navigate) 导航到默认路由
