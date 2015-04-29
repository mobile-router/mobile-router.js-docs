## M.Base

`M.Base` 是一个简单的自定义事件对象。理所当然的会有如下方法：

* `on`: `M.Base.on(name, func)` ， `name` 就是事件名，`func`就是事件回调函数

* `off`: `M.Base.off(name[, func])` ， `name` 就是事件名，`func`就是对应的需要取消掉的事件回调函数，如果没有`func` ，那么就会移除所有的 `name` 事件的回调函数

* `trigger`: `M.Base.trigger(name[, args...])` ， `name` 就是事件名，剩余的就是传入事件回调函数的参数（一个一个按照顺序单独传入）
