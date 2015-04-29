## M.getHrefAndTarget(target)

根据 target 元素得到有 `data-href` 或者 `href` 的 target （过程是一直往父级元素查找 直至 body ）。

### 参数

* `target`: 当前 target 元素 ，必须参数

### 返回值

是一个对象，包含如下信息：

* `href`: 找到的目标元素的 href 值

* `target`: 找到的目标元素