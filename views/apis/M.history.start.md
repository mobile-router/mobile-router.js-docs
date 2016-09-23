## M.history.start(options)

启动历史管理。这一步骤需要你在适当的时候手工调用。

### 参数 options

* `base`: base path，默认值是页面中 `base` 元素的 `href` 属性的值，如果没有则默认 '/'

* `enablePushState`: 是否启用`pushstate`，用来更新浏览器地址（2.x之前）

* `history`: 利用`pushstate`，用来更新浏览器地址（2.x+）

* `hashbang`: 利用`hash`更新（`#!`），用来更新浏览器地址（2.x+）

* `abstract`: 不会更新浏览器地址（2.x+）
