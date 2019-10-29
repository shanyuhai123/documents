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

`try...catch` 包裹函数。

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



## curry

**FUNCTION：**

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
```

**CONCEPTS：**   

函数柯里化。

**EXAMPLES：**

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```