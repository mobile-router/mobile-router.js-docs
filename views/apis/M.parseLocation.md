## M.parseLocation([, loc])

解析 `location` 或者 `a` 元素信息。

### 参数

* `loc`: 可选参数，如果没有默认为 `location` 

### 返回值

是一个对象，包含如下信息：

* url: 完整 url

* rurl: 去除hash的 url

* host: host

* hash: hash 不带#

* protocol: 协议

* origin: origin

* pathname: path

* search: search

* port: 端口
