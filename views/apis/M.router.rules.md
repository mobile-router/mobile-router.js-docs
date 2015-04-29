本篇来详述下在路由规则，他是一个字符串，__必须__以 / 开始，它可以在每个 / 后直接接冒号，表示这之后到下一个斜线或末尾是一个参数。它也可以使用花括号表示里面的内容也一个参数。斜钱风格是来自 backbone 与 express 的，花括号风格是来自 ui-router 。花括号风格更为强大些，因此它可以指定更详细的匹配规则。

path 的值可以设置为如下：

* `'/hello/'` - 匹配 '/hello/' 或 '/hello'
* `'/user/:id'` - 匹配 '/user/bob' 或 '/user/1234!!!' 或 '/user/' 但不匹配 '/user' 与 '/user/bob/details'
* `'/user/{id}'` - 同上
* `'/user/{id:[^/]*}'` - 同上
* `'/user/{id:[0-9a-fA-F]{1,8}}'` - 要求 `id` 匹配 `/[0-9a-fA-F]{1,8}/` 这个子正则
* `'/files/{path:.*}'` - 匹配任意以 '/files/' 开头并且会将 `path` 参数赋值为余下的 path 的值
* `'/files/*path'` - 同上

再说下花括号风格：

```
"/ddd/:dddID/"
"/ddd/{dddID}/"
"/ddd/{dddID:[0-9]{4}}/"
"/ddd/{dddID:int}/"
```

默认提供了四个参数匹配器，分别是 `date`, `string`, `bool`, `int`

```js
$types: {
	date: {
		pattern: '[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])',
		decode: function(val) {
			return new Date(val.replace(/\-/g, '/'));
		}
	},
	string: {
		pattern: '[^\\/]*'
	},
	bool: {
		pattern: '0|1',
		decode: function(val) {
			return parseInt(val, 10) === 0 ? false : true;
		}
	},
	int: {
		pattern: '\\d+',
		decode: function(val) {
			return parseInt(val, 10);
		}
	}
}
```

`decode` 方法是用来将我们从地址栏抽取出来的那些小字符串转换为想要的类型或格式。如果你想要更多效果，还可以自己添加，如 `M..router.$types.d4 = { pattern: '[0-9]{4}', decode: Number }`，然后就可以指定 path 为 `"/ddd/{dddID:d4}/"` 。

_注：路由规则和司徒正美的 [mmRouter](https://github.com/RubyLouvre/mmRouter) 中的路由规则一样，所以这里就主要参考了大神的文档。_