---
title: 函数
sidebarDepth: 2
---

## 高阶

### 1. ary（限制参数）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

**EXAMPLES：**

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```

### 2. spreadOver（展开）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

**EXAMPLES：**

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```

### 3. attempt

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

**EXAMPLES：**

```js
const elements = attempt(selector => document.querySelectorAll(selector)
, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```

### 4. binary

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const binary = fn => (a, b) => fn(a, b);
```

**EXAMPLES：**

```js
['2', '1', '0'].map(binary(Math.max)); // [2, 1, 2]
```

### 5. complement（取反）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const complement = fn => (...args) => !fn(...args);
```

**EXAMPLES：**

```js
const isEven = num => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true
```

### 6. converge（先聚合再处理）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
```

**EXAMPLES：**

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```

### 7. partial

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
```

**EXAMPLES：**

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, 'Hello');
greetHello('John'); // 'Hello John!'
```

### 8. partialRight

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

**EXAMPLES：**

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```

### 9. rearg（排序）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

**EXAMPLES：**

```js
const rearged = rearg(
  (...args) => [...args],
  [2, 0, 1]
);
rearged(...['b', 'c', 'a']); // ['a', 'b', 'c']
```



## 对象

### 1. checkProp（属性）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);
```

**EXAMPLES：**

```js
const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1, 2, 3, 4]); // true
lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)

const session = { user: {} };
const validUserSession = checkProp(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```



## 函数

### 1. functionName（名称）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const functionName = fn => (console.debug(fn.name), fn);
```

**EXAMPLES：**

```js
functionName(Math.max); // max (logged in debug channel of console)
```

### 2. hz（频率/秒）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};
```

**EXAMPLES：**

```js
// 10,000 element array
const numbers = Array(10000)
  .fill()
  .map((_, i) => i);

// Test functions with the same goal: sum up the elements in the array
const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

// `sumForLoop` is nearly 10 times faster
Math.round(hz(sumReduce)); // 572
Math.round(hz(sumForLoop)); // 4784
```

### 3. times（执行）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

**EXAMPLES：**

```js
let output = '';
times(5, i => (output += i));
console.log(output); // 01234
```

### 4. timeTaken（耗时）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

无侵入。

**FUNCTION：**

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

**EXAMPLES：**

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```



## 组合

### 1. both（&&）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const both = (f, g) => (...args) => f(...args) && g(...args);
```

**EXAMPLES：**

```js
const isEven = num => num % 2 === 0;
const isPositive = num => num > 0;
const isPositiveEven = both(isEven, isPositive);
isPositiveEven(4); // true
isPositiveEven(-2); // false
```

### 2. either（||）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const either = (f, g) => (...args) => f(...args) || g(...args);
```

**EXAMPLES：**

```js
const isEven = num => num % 2 === 0;
const isPositive = num => num > 0;
const isPositiveOrEven = either(isPositive, isEven);
isPositiveOrEven(4); // true
isPositiveOrEven(3); // true
```

### 3. over

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

**EXAMPLES：**

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```

### 4. compose（从右到左）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

仅第一个执行的函数（即右一）可传递多个参数，其余仅允许一个参数。

**FUNCTION：**

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

**EXAMPLES：**

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```

### 5. composeAsync

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const composeAsync = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
```

**EXAMPLES：**

```js
const sum = composeAsync(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async() => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

### 6. composeRight（从左到右）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

仅左一允许多个参数。

**FUNCTION：**

```js
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

**EXAMPLES：**

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = composeRight(
  multiply,
  add5
);
multiplyAndAdd5(5, 2); // 15
```



## 延时

### 1. delay

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
```

**EXAMPLES：**

```js
delay(console.log, 1000, 'later'); // Logs 'later' after one second.
```

### 2. sleep

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

**EXAMPLES：**

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```

### 3. defer

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

**EXAMPLES：**

```js
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```

### 4. runPromisesInSeries（按序执行）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```

**EXAMPLES：**

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```

### 5. debounce（防抖）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

**EXAMPLES：**

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

### 6. throttle（节流）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

**EXAMPLES：**

```js
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```



## 缓存

### 1. memoize

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
```

**EXAMPLES：**

```js
// See the `anagrams` snippet.
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
```



## 闭包

### 1. once（单次调用）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};
```

**EXAMPLES：**

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click
```



## 链式

### 1. chainAsync（异步）

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};
```

**EXAMPLES：**

```js
chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
    setTimeout(next, 1000);
  },
  () => {
    console.log('2 second');
  }
]);
```



## 柯里化

### 1. curry

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
```

**EXAMPLES：**

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```

### 2. uncurry

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
```

**EXAMPLES：**

```js
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```



## 原生模拟

### 1. bind

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);
```

**EXAMPLES：**

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```

### 2. call

**FROM**

[30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const call = (key, ...args) => context => context[key](...args);
```

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
