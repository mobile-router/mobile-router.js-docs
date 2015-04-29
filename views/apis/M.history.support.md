## M.history.support

当前浏览器是否支持 [history](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history)、[window.onpopstate](https://developer.mozilla.org/en-US/docs/WindowEventHandlers.onpopstate)。

然后对于不支持的浏览器，你可以选择去设置`enablePushState`为`false`，这样的结果就是可以进行切换之类的操作，但是浏览器地址栏不会发生变化了。当然，你也可以选择什么都不做，那点击url之后直接刷新页面。