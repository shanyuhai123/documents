---
title: typeof
---

## 判断类型

`typeof` 操作符会返回数据类型的字符串。

JavaScript 数据类型分为原始类型（值类型）和引用类型，其中原始类型包含：`Number`、`String`、`Boolean`、`Undefined`、`Null`、`Symbol`、`BigInt`（以后可能还会扩展）。


```js
typeof 1 // "number"
typeof "1" // "string"
typeof true // "boolean"
typeof aaa // "undefined"
typeof null // "object"
typeof Symbol("1") // "symbol"
typeof 42n // "bigint"

typeof {} // "object"
typeof [] // "object"
typeof new Date() // "object"
typeof /regex/ // "object"
typeof new Map() // "object"

typeof function() {} // "function"
typeof class App {} // "function"
```

综上 `typeof` 可以得到除 `Null` 之外的所有原始类型，后续再追加原始类型也一样；对于所有的引用类型可以识别出 `"function"`，其余不再细分统一为 `"object"`。



## 注意事项

### 1. new 操作符

`new` 操作符不总是返回 `"object"`。

```js
typeof new String("123") // "object"
typeof new Number(123) // "object"

typeof new Function("console.log('hello world')") // "function"
```

### 2. 安全操作

在以往 `typeof` 总是能对任何操作的数据返回一个字符串，所以常常利用其该特性进行判断是否为 `undefined`，在加入块级作用域后，该特性失效。

```js
typeof aaa // Uncaught ReferenceError: Cannot access 'aaa' before initialization

const aaa = "hello world";
```