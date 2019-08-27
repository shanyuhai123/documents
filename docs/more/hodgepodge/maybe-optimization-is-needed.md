---
title: 可能需要优化的 JavaScript 代码
---

## 介绍

JavaScript 存在一些更优美的写法，但是否是更佳的选择还是未知的。此处内容区别于 [JavaScript 规范](/more/clean/javascript.html)。



## 示例

### 1. 使用 `object` 替代 `switch`

在写一些业务时常常需要判断状态，当状态只有两三个时推荐使用 `if else` 来处理，并且尽早返回结果。当状态更多时会倾向于用 `switch` 进行判断：

```js
// Switch
let requset = null;
switch (requsetMethod ) {
  case "post":
    request = () => console.log("post");
    break;
  case "put":
    request = () => console.log("put");
    break;
  case "delete":
    request = () => console.log("delete");
    break;
  default:
    request = () => console.log('get');
}

request(); // get
```

替代方案

```js
// Object literal
const requsetMethods = {
  post: () => console.log("post"),
  put: () => console.log("put"),
  delete: () => console.log("delete"),
  default: () => console.log("get")
};

const requset = requsetMethods[requsetMethod] || requsetMethods['default'];
requset(); // get
```

替代方案优点

+ 不必要担心忘记书写 `case` 或者 `break`；
+ 更容易理解发生了什么；
+ 更容易书写、扩展；
+ 更少的代码。



## 资料来源

[5 Programming Patterns I Like](https://www.johnstewart.dev/five-programming-patterns-i-like/)