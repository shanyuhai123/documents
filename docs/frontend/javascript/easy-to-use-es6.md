---
title: ES6 的简单使用
sidebarDepth: 2
---

> 作为一个前端，你需要牢记 ES6 的每个 API，尤其是数组、对象、字符串。



## 基础语法

### 1. 从箭头函数开始

认识 ES6 便被箭头函数的简洁所惊艳了。

但在使用中也有一些注意事项。

#### 返回对象

```js
const foo = () => ({ bar: 'baz' });
```

由于语法解析的问题，大括号会被解释为代码块，直接返回对象时需小括号进行包裹。

#### 禁止构造函数

箭头函数都没有自己的 `this`、`arguments`、`super` 和 `new.target`，你是要搞哪样？



## 数组方法

### 1. 转化为数组

字符串转化，其实只要是类数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）都行：

```js
// 不要对 split 念念不忘了
Array.from('foo');  // ["f", "o", "o"]
```

### 2. 生成连续值

```js
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

range(0, 4, 1);
// [0, 1, 2, 3, 4] 

range(1, 10, 2); 
// [1, 3, 5, 7, 9]

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### 3. 修改方法

需要小心一部分方法会修改原数组对象：

+ `Array.prototype.copyWithin`
+ `Array.prototype.fill`
+ `Array.prototype.pop`
+ `Array.prototype.push`
+ `Array.prototype.shift`
+ `Array.prototype.unshift`
+ `Array.prototype.reverse`
+ `Array.prototype.sort`
+ `Array.prototype.splice`



## 对象方法

在 ES5 时存在三种：

1. `native object`（原生对象），指语义完全由规范定义且不掺杂任何宿主环境定义的对象。
2. `built-in object` （内置对象），如 Math、Date 等。
3. `host object` （宿主对象），由执行环境提供，如浏览器的 window 和 V8 的 global。

而 ES6 时划分更细，更新为四种：

1. `ordinary object` （普通对象），需要具备了对象的所有基本内置方法。
2. `exotic object` （外来对象），与“普通对象”相反，所以一个对象不是“普通对象”，就是“外来对象”。
3. `standard object` （标准对象），规范定义的对象（？）。
4. `built-in object` （内置对象），同 ES5。



## 字符串方法

### 1. 字符串补全

补全很简单，使用 `padStart` 和 `padEnd` 即可：

```js
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
'abc'.padStart(4);          // " abc"
'abc'.padStart(10);         // "       abc"

// `padEnd` 在末尾添加
```

### 2. 获取字符及对应的Unicode

字符串取值与数组一致，都是根据索引：

```js
const anyString = "Brave new world";

anyString.charAt(); // "B"
anyString.charAt(0); // "B"
anyString.charAt(1); // "r"
anyString.charAt(999); // ""

anyString.charCodeAt(); // 66
anyString.charCodeAt(1); // 114
anyString.charCodeAt(999); // NaN

// 比 charCodeAt 更强
anyString.codePointAt(); // 66
anyString.codePointAt(1); // 114
anyString.codePointAt(999); // undefined
```

