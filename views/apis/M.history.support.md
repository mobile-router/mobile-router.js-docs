## M.history.support

当前浏览器是否支持 [history](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history)、[window.onpopstate](https://developer.mozilla.org/en-US/docs/WindowEventHandlers.onpopstate)以及`hashchange`。

对于不支持`pushState`或者支持不够好的浏览器来说，自动回退到`hashbang`模式，如果`hashbang`也不支持的话，就退回到`abstract`模式了；`abstract`模式能够正常匹配对应`route`，但是不会产生历史记录。