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



## overArgs

**FUNCTION：**

```js
const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
```

**CONCEPTS：**   

尚不能理解作用。

**EXAMPLES：**

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
```



## pipeAsyncFunctions

**FUNCTION：**

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
```

**CONCEPTS：**   

从左到右执行异步函数。

**EXAMPLES：**

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```



## pipeFunctions

**FUNCTION：**

```js
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

**CONCEPTS：**   

组合函数。

**EXAMPLES：**

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```



## promisify

**FUNCTION：**

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```

**CONCEPTS：**   

尚不能理解。

**EXAMPLES：**

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
```



## rearg

**FUNCTION：**

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

**CONCEPTS：**   

尚不能理解作用。

**EXAMPLES：**

```js
const rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```



## spreadOver

**FUNCTION：**

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

**CONCEPTS：**   

展开参数操作。主要还是使用了扩展运算符。

**EXAMPLES：**

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```



## unary

**FUNCTION：**

```js
const unary = fn => val => fn(val);
```

**CONCEPTS：**   

限定函数单参数。类似 map 等方法会传递多个（三个）参数，导致部分可以接受多参数的方法产生问题，见下方示例。

**EXAMPLES：**

```js
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
['6', '8', '10'].map(parseInt); // [6, NaN, 2]
// map 方法传递进来三个参数 value,key,array。也就是实际上执行的是： 
parseInt('6', 0); // 6
parseInt('8', 1); // NaN
parseInt('10', 2); // 2
```