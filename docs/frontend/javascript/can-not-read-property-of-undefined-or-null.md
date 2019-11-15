---
title: 无法访问 undefined、null 的属性
---

## 介绍

经常会遇到报错信息：

```js
Uncaught TypeError: Cannot read property 'xxx' of null
Uncaught TypeError: Cannot read property 'xxx' of undefined
```

而访问另外三个原始类型（Number、String、Number）则不会存在问题。



## 包装对象

> `.` 符号可用来访问一个对象的属性。

当原始类型访问属性时就会调用各自对应的构造函数方法，如：

1. Number：`new Number(n)`；
2. String：`new String(s)`；
3. Boolean：`new Boolean(b)`。

即可得到根本原因：

```js
const N = new Number();
const S = new String();
const B = new Boolean();
typeof N === typeof S === typeof B === "object"
```



> 引申：
>
> ```js
> typeof null; // object
> ```
>
> 按照 JavaScript 中类型的划分应当返回为 `null`，这是 JavaScript 中一直存在的 bug，但永远都不会修复了，因为有太多已经在运行代码依赖于这个 bug。

