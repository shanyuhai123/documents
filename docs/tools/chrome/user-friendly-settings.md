---
title: 人性化设置
---

## 介绍

Chrome 浏览器总是会提供一些 “人性化” 设置，所以我们需要去关闭它。



## 设置

在浏览器地址栏输入 `chrome://flags/`。

### 1. www

问题：地址栏无法显示 `www` 部分。

搜索 `Omnibox UI Hide Steady-State URL Scheme and Trivial Subdomains`，设置为 Disabled。

> 在 Linux 的 78.0.3904.70 版本已经无法找到对应设置项。
>
> 找到解决[方案](https://www.v2ex.com/t/613776#r_8097631)。

在 chrome://flags 页面打开控制台（F12），输入：

```js
[
'omnibox-ui-hide-steady-state-url-path-query-and-ref',
'omnibox-ui-hide-steady-state-url-scheme',
'omnibox-ui-hide-steady-state-url-trivial-subdomains'
].forEach(function(f) {
chrome.send('enableExperimentalFeature', [f + '@2', 'true']);
});
// 代码中 `@2` 对应的是 Disabled。`@0` 和 `@1` 分别对应 Default 和 Enabled。
```



### 2. tab hover

问题：悬浮在标签栏时，有一个大大的丑丑的 card。

搜索 `tab-hover-cards`，设置为 Disabled。