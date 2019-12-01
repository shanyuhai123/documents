---
title: 30s code function
---

> [30 seconds of code (Function)](https://www.30secondsofcode.org/tag/function)



## attempt

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

**CONCEPTS：**

`try...catch` 包裹函数。抛出异常或结果。

**EXAMPLES：**

```js
const elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```



## bind

**FUNCTION：**

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);
```

**CONCEPTS：**

实现 bind 方法。

**EXAMPLES：**

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```



## bindKey

**FUNCTION：**

```js
const bindKey = (context, fn, ...boundArgs) => (...args) =>
  context[fn].apply(context, [...boundArgs, ...args]);
```

**CONCEPTS：**

对于使用场景存在迷惑。

**EXAMPLES：**

```js
const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!')); // 'hi fred!'
```



## chainAsync

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

**CONCEPTS：**

"链式" 调用异步函数。

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



## checkProp

**FUNCTION：**

```js
const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);
```

**CONCEPTS：**

检查属性。

**EXAMPLES：**

```js
const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1,2,3,4]); // true
lengthIs4(new Set([1,2,3,4])); // false (Set uses Size, not length)

const session = { user: {} };
const validUserSession = checkProps(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```



## compose/composeRight

**FUNCTION：**

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

**CONCEPTS：**

组合函数，从右、左执行。

**EXAMPLES：**

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```



## converge

**FUNCTION：**

```js
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
```

**CONCEPTS：**

用函数处理一堆函数。

**EXAMPLES：**

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```



## curry/uncurry

**FUNCTION：**

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
```

**CONCEPTS：**

（取消）函数柯里化。

**EXAMPLES：**

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```



## debounce

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

**CONCEPTS：**

函数防抖。

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



## defer

**FUNCTION：**

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

**CONCEPTS：**

函数延迟。setTimeout 附加参数会作为参数传递给 Function。

**EXAMPLES：**

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```



## delay

**FUNCTION：**

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
```

**CONCEPTS：**

延迟执行函数。

**EXAMPLES：**

```js
// 按照上例修改
delay(
  console.log,
  1000,
  'later'
); // Logs 'later' after one second.
```



## functionName

**FUNCTION：**

```js
const functionName = fn => (console.debug(fn.name), fn);
```

**CONCEPTS：**

函数名。

**EXAMPLES：**

```js
// 按照上例修改
functionName(Math.max); // max (logged in debug channel of console)
```



## hz

**FUNCTION：**

```js
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};
```

**CONCEPTS：**

返回函数执行的频率。关于 `performance.now` 和 `Date.now` 区别可参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now) 和 [SO](https://stackoverflow.com/questions/30795525/performance-now-vs-date-now)，表现为 `performance.timing.navigationStart + performance.now() 约等于 Date.now()`

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



## memoize

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

**CONCEPTS：**

缓存函数。利用 Map 结构来进行存储，在很多优秀的代码（Webpack、Vue）中都有类似的操作，对于命中命名，更喜欢 hit 而非 cached。

**EXAMPLES：**

```js
// See the `anagrams` snippet.
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
```



## negate

**FUNCTION：**

```js
const negate = func => (...args) => !func(...args);
```

**CONCEPTS：**

对函数去反。作用可能是为了更好的语义化？

**EXAMPLES：**

```js
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```



## once

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

**CONCEPTS：**

一次性函数。利用闭包保存了函数的状态。

**EXAMPLES：**

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click
```



## partial/partialRight

**FUNCTION：**

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

**CONCEPTS：**

预拼接函数。区别于 compose，更倾向于字符串？

**EXAMPLES：**

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, 'Hello');
greetHello('John'); // 'Hello John!'
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```



## sleep

**FUNCTION：**

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

**CONCEPTS：**

睡眠（阻塞）。相对于 delay 不执行任何操作。

**EXAMPLES：**

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```



## sleep

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

**CONCEPTS：**

函数节流。

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



## times

**FUNCTION：**

```js
// 修改 fn、n 位置，更加函数式？
const times = (fn, n, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

**CONCEPTS：**

函数执行 n 次。

**EXAMPLES：**

```js
let output = '';
times(i => (output += i), 5);
console.log(output); // 01234
```



## unfold

**FUNCTION：**

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
```

**CONCEPTS：**

尚未理解使用场景。

**EXAMPLES：**

```js
const f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```



## when

**FUNCTION：**

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```

**CONCEPTS：**

两种执行情况。

**EXAMPLES：**

```js
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
```