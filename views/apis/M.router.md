## M.router

`M.router` 是用来管理路由的，通过 [M.extendByBase](/M.extendByBase) 扩展了自身，使其具备 [M.Base](/M.Base) 的能力。

`M.router` 会触发一些事件：

* `routeChangeStart`: 路由切换开始的时候触发，此时还没有调用 `getTemplate` 得到模板内容

* `routeChangeEnd`: 路由切换结束时触发，此时元素已经显示出来了（如果有动画效果的话，已经完成动效了）
