---
title: 30s code adapter
---

> [30 seconds of code (Adapter)](https://www.30secondsofcode.org/tag/adapter)



## ary

**FUNCTION：**

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

**CONCEPTS：**   

限定函数接受的参数（按序）。

**EXAMPLES：**

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```


## call

**FUNCTION：**

```js
const call = (key, ...args) => context => context[key](...args);
```

**CONCEPTS：**   

call 方法的实现。主要是利用了高阶函数来传参。

**EXAMPLES：**

```js
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
```


## collectInto

**FUNCTION：**

```js
const collectInto = fn => (...args) => fn(args);
```

**CONCEPTS：**   

没想到具体的作用场景。

**EXAMPLES：**

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
```


## flip

**FUNCTION：**

```js
const flip = fn => (first, ...rest) => fn(...rest, first);
```

**CONCEPTS：**   

将第一个参数变为最后一个参数。主要使用了参数的解构。

**EXAMPLES：**

```js
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
```


## over

**FUNCTION：**

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

**CONCEPTS：**   

综合性函数。主要是利用闭包保存状态，在最后执行。

**EXAMPLES：**

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```