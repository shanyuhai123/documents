---
title: 隐式转换
---

## 等价性

> 推荐在任何情景下摒弃 `==` 操作符，使用 `===` 替代。

示例：

```js
// 故意混淆视野的取反操作，其实比较容易理解
[] == 0 // true
![] == 0 // true
[] == [] // false
[] == ![] // true
// 如果上面的解决了，那这个呢？
0 == null // false
```

::: tip 默认的 falsy

+ `""` （空字符串）
+ `0`、`-0`、`NaN` （非法的 `Number`）
+ `null`、`undefined`
+ `false`

:::



## 非等价性

`<`、`>`、`<=` 和 `>=` 用于非等价性比较（关系比较）。

当比较的双方都为 `String` 时按照字典顺序（typical alphabetic rules）比较，当其中一方为 `Number` 时则均转为 `Number` 再比较：

```js
"aba" > "abb"; // false
"43" > "42"; // true
"43" > 42; // true
```

当不同类型的值进行比较时：

```js
"aba" > 42; // false
"aba" < 42; // false
"aba" == 42; // false

// 参考下方的解析，是由于 "aba" 转为数字时结果为 NaN
Number("aba"); // NaN
```



## 解析

关于这一部分 ECMA 有规范的说明：[5.1](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3) 版、[6.0](http://www.ecma-international.org/ecma-262/6.0/#sec-7.2.12) 版。

偷懒，借用一下阮一峰的翻译：

1. 如果 `x` 不是正常值（比如抛出一个错误），中断执行。
2. 如果 `y` 不是正常值，中断执行。
3. 如果 `Type(x)` 与 `Type(y)` 相同，执行严格相等运算 `x === y`。
4. 如果 `x` 是 `null`，`y` 是 `undefined`，返回 `true`。
5. 如果 `x` 是 `undefined`，`y` 是 `null`，返回 `true`。
6. 如果 `Type(x)` 是数值，`Type(y)` 是字符串，返回 `x == ToNumber(y)` 的结果。
7. 如果 `Type(x)` 是字符串，`Type(y)` 是数值，返回 `ToNumber(x) == y` 的结果。
8. 如果 `Type(x)` 是布尔值，返回 `ToNumber(x) == y` 的结果。
9. 如果 `Type(y)` 是布尔值，返回 `x == ToNumber(y)` 的结果。
10. 如果 `Type(x)` 是字符串或数值或 `Symbol` 值，`Type(y)` 是对象，返回 `x == ToPrimitive(y)` 的结果。
11. 如果 `Type(x)` 是对象，`Type(y)` 是字符串或数值或 `Symbol` 值，返回 `ToPrimitive(x) == y` 的结果。
12. 返回 `false`。

根据上述规则则可以得到：

```js
// 不符合以上 11 种条件，返回 false
0 == null // false
```



## ToPrimitive

对于以上的规则其中比较难以理解的为该部分了，对象转为原始值需要考虑三种（Boolean、String、Number）情况。

### 1. Number

所有对象（包括数组、函数）都转为 true。

### 2. String

对象转为 **String** 经历以下步骤：

1. 如果对象具有 `toString()` 方法，则调用这个方法。如果它返回一个原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。
2. 如果对象没有 `toString()` 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 `valueOf()` 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。
3. 否则，JavaScript 无法从 `toString()` 或 `valueOf()` 获得一个原始值，因此这时它将抛出一个类型错误异常。

### 3. Number

对象转为 **Number** 顺序有些区别：

1. 如果对象具有 `valueOf()` 方法，后者返回一个原始值，则 JavaScript 将这个原始值转为数字（如果需要的话），并返回这个数字。
2. 否则，如果对象具有 `toString()` 方法，后者返回一个原始值，则 JavaScript 将其转换并返回。
3. 否则，JavaScript 抛出一个类型错误异常。