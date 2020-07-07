---
title: 全局属性 undefined
---

## 描述

::: danger 要考的

`undefined` 是全局对象的一个属性。也就是说，它是全局作用域的一个变量。`undefiled` 的最初始值就是原始数据类型 `undefiled`。

:::

一个没有被赋值的变量的类型是 `undefiled`。如果方法或者语句中操作的变量没有赋值，则会返回 `undefiled`（[语句完成值](/frontend/javascript/statements-and-expressions.html#%E8%AF%AD%E5%8F%A5%E5%AE%8C%E6%88%90%E5%80%BC)）。

```js
function test(a) {
  console.log(typeof a); // undefined
  return a;
}

test(); // undefined
```



## 变量名

由于 `undefiled` 不是一个保留字，所以它可能在非全局作用域中被当作变量名来使用。

```js
var undefined = "a";
console.log(undefined); // undefined

(function() {
	var undefined = "a";
  console.log(undefined, typeof undefined); // a string
})();
```

