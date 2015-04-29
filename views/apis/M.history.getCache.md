## M.history.getCache()

得到缓存信息。

### 返回值

一个对象，该对象包含如下信息：

* `urlCache`: 所有的 url 缓存信息，类型 `Array` ，每一项是一个 url

* `stateCache`: 所有的状态 state 缓存，类型 `Object` ，该对象的 key 是 url， 值就是 state 对象（参见 [M.history.getCurrentState](/M.history.getCurrentState) 中的 state 对象）。
