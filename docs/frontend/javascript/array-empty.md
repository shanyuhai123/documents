---
title: 数组空位
---

## 介绍

数组空位，指数组的该位置没有任何值，而非 `undefined`。

可由以下方式得到他们：

```js
Array(5);
// [empty × 5]

[,,];
// [empty × 2] // 可见最后一个逗号被丢弃
```

通过 [in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符可得知空位没有任何值：

```js
0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false
```



## 处理空位

### 1. ES5

`ES5` 中一些方法对数组空位的处理为忽略：

- `forEach()`、`filter()`、 `reduce()`、 `every()` 和 `some()` 都会跳过空位。
- `map()` 会跳过空位，但会保留这个值。
- `join()` 和 `toString()` 会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串。

```js
// forEach
[,'a'].forEach((x,i) => console.log(i)); // 1

// filter
['a',,'b'].filter(x => true) // ['a','b']

// every
[,'a'].every(x => x==='a') // true

// reduce
[1,,2].reduce((x,y) => x+y) // 3

// some
[,'a'].some(x => x !== 'a') // false

// map
[,'a'].map(x => 1) // [,1]

// join
[,'a',undefined,null].join('#') // "#a##"

// toString
[,'a',undefined,null].toString() // ",a,,"
```

### 2. ES6

ES6(新增的方法) 则是明确将空位转为 `undefined`。

```js
// Array.from
Array.from(['a',,'b']) // [ "a", undefined, "b" ]

// 扩展运算符
[...['a',,'b']] // [ "a", undefined, "b" ]

// copyWithin
[,'a','b',,].copyWithin(2,0) // [,"a",,"a"]

// fill
new Array(3).fill('a') // ["a","a","a"]

// for...of
for (const el of [,,]) {
  console.log(el); // undefined
}

// entries
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys
[...[,'a'].keys()] // [0,1]

// values
[...[,'a'].values()] // [undefined,"a"]

// find
[,'a'].find(x => true) // undefined

// findIndex
[,'a'].findIndex(x => true) // 0
```

