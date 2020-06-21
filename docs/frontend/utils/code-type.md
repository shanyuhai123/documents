---
title: 类型判断处理
sidebarDepth: 2
---

## 判断

### 1. is（指定类型）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

**EXAMPLES：**

```js
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```

### 2. isArrayLike（类数组）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

**EXAMPLES：**

```js
isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

### 3. typeof

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isString = val => typeof val === 'string';
const isSymbol = val => typeof val === 'symbol';
const isUndefined = val => typeof val === 'undefined';
```

**EXAMPLES：**

```js
isBoolean(null); // false
isBoolean(false); // true
isFunction('x'); // false
isFunction(x => x); // true
isString('10'); // true
isSymbol(Symbol('x')); // true
isUndefined(); // true
```

### 4. isEmpty

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
```

**EXAMPLES：**

```js
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```

### 5. isNil

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isNil = val => val === undefined || val === null;
```

**EXAMPLES：**

```js
isNil(null); // true
isNil(undefined); // true
isNil(''); // false
```

### 6. isNull/isUndefined

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isNull = val => val === null;
const isUndefined = val => val === undefined;
```

**EXAMPLES：**

```js
isNull(null); // true
isUndefined(undefined); // true
```

### 7. isNumber

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isNumber = val => typeof val === 'number' && val === val;
```

**EXAMPLES：**

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```

### 8. isObjectLike

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

**EXAMPLES：**

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

### 9. isPlainObject（普通对象）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

**EXAMPLES：**

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

### 10. isValidJSON（JSON）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**DETAIL：**

判断是否为有效 JSON。利用 `try...catch` 来处理错误。

**FUNCTION：**

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

**EXAMPLES：**

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```











## 处理

### 1. getType（获取类型）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const getType = v => (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);
```

**EXAMPLES：**

```js
getType(new Set([1, 2, 3])); // 'Set'
```

### 2. castArray（转为数组）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**FUNCTION：**

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

**EXAMPLES：**

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```

### 3. coalesceFactory（指定返回类型）

**FROM**

[30 seconds of code (Type)](https://www.30secondsofcode.org/js/t/type/a/1)

**DETAIL：**

自定判断函数，`includes` 方法果然好用。

**FUNCTION：**

```js
const coalesceFactory = valid => (...args) => args.find(valid);
```

**EXAMPLES：**

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```
