## M.history

`M.history` 主要管理和 history 相关的一些信息，通过 [M.extendByBase](/M.extendByBase) 扩展了自身，使其具备 [M.Base](/M.Base) 的能力。

`M.history` 其中一项任务就是负责监听 `document` 的 `click` 事件，然后找到带有 `href` 以及 `data-href` 的目标元素，取得他们的值，然后去通过 [history](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) 的 API 去更新浏览器地址。

`M.history` 会触发一些事件：

* `inited`: 在 [start](/M.history.start) 之后触发

* `change`: 在每次历史发生改变时触发

* `back`: 后退方向发生改变

* `forward`: 前进方向发生改变

