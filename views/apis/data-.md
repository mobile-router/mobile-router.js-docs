在目标导航元素上还可以设置一些 `data-xx` 的属性，有一些是有特殊含义的：

* `data-rel="back"`: 动画方向是相反方向，场景：假设第一次进入的是详情页，通过点击“返回”按钮，希望会倒着返回到列表页，这时候就需要加上它来实现；否则的话就是正向切换到列表页

* `data-href`: 利用它可以实现不更新浏览器地址但却可以根据其值来更新路由的目的，如果用 `href` 的话会更新浏览器地址（注意：`data-href`的优先级要比`href`的高，也就是说回优先使用`data-href`的值）。当然说的这种情况是基于 [M.history.start](/M.history.start) 中的 `pushstate` 为 `true` 的情况下

* `data-title="新的title"`: 当导航到目标元素的地址的时候，文档的title的值，如果没有的话取得的就是当前title的值