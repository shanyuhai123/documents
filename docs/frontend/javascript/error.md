---
title: Error 类型
---

## EvalError

代表了一个关于 `eval` 函数的错误，但不在当前 ECMAScript 规范中使用，因此不会被 JavaScript 抛出，但是 EvalError 对象仍然保持兼容。



## InternalError

表示出现在 JavaScript 引擎内部的错误，尚未成为任何规范的一部分。

+ "too many switch cases"（过多`case`子句）；
+ "too many parentheses in regular expression"（正则表达式中括号过多）；
+ "array initializer too large"（数组初始化器过大）；
+ "too much recursion"（递归过深）。



## RangeError

当一个值不在其允许的范围或集合中，则抛出该错误。

### 1. 示例

```js
Array(Infinity); // RangeError: Invalid array length
(666).toFixed(6666); // RangeError: toFixed() digits argument must be between 0 and 100
```



## ReferenceError

当一个不存在的变量被引用时，则抛出该错误。

### 1. 示例

```js
console.log(foo); // ReferenceError: foo is not defined

// 一个更为常见的错误
(function () {
  'use strict';
  foo = 'bar'; // ReferenceError: foo is not defined
})();
```



## SyntaxError

当解析时发现不合规范的代码，则抛出该错误。

### 1. 示例

语法错误的时候非常多。

```js
if ('foo' = 'bar'); // SyntaxError: Invalid left-hand side in assignment
```



## TypeError

> 所有的错误，其最让人印象深刻，也是最日常碰到的。

表示值的类型非预期类型时，则抛出该错误。

### 1. 示例

```js
undefined.foo; // TypeError: Cannot read property 'foo' of undefined
undefined(); // TypeError: undefined is not a function
```



## URIError

当向全局 URI 处理函数传递一个不合法的 URI 时，则抛出该错误。

### 1. 示例

```js
decodeURIComponent("%"); // URIError: URI malformed at decodeURIComponent
```

