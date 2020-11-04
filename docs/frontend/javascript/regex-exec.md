---
title: 正则 exec
---

## 关于 exec

`exec` 方法在一个指定字符串中执行一个搜索匹配，返回一个结果数据或 `null`。

在设置了 `global` 或 `sticky` 标志位的情况下（如 `/foo/g` 或 `/foo/y`），`Regex` 对象是有状态的。他们会将上次成功匹配后的位置记录在 `lastIndex` 属性中。使用此特性，`exec` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下，`String.prototype.match` 只会返回匹配到的结果。

> 稍微测试下大概会保留 10s+。



## 语法

### 1. 示例

```js
const reg = /foo*/g;
const str1 = "table football, foosball";
let arr;

while (arr = reg.exec(str1)) {
	console.log(`Found ${arr[0]}. Next starts at ${reg.lastIndex}.`);
}

// "Found foo. Next starts at 9."
// "Found foo. Next starts at 19."
```

### 2. 返回值

如果匹配成功，则返回一个数组，并更新正则对象的 `lastIndex` 属性。

如果匹配失败，`exec` 方法返回 `null`，并将 `lastIndex` 重置为 0。

> 被提到这么多次的 `lastIndex` 是什么？它是下一次匹配开始的位置。这就是匹配到 `null` 的原因。