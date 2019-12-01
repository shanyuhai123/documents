---
title: 30s code type
---

> [30 seconds of code (Type)](https://www.30secondsofcode.org/tag/type)



## getType

**FUNCTION：**

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
```

**CONCEPTS：**

获取类型。

**EXAMPLES：**

```js
getType(new Set([1, 2, 3])); // 'set'
```



## is

**FUNCTION：**

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

**CONCEPTS：**

判断类型。`[,null].includes()` 方法用的很精髓。

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



## isArrayLike

**FUNCTION：**

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

**CONCEPTS：**

判断是否为 类数组。

**EXAMPLES：**

```js
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```



## typeof

**FUNCTION：**

```js
const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isString = val => typeof val === 'string';
const isSymbol = val => typeof val === 'symbol';
const isUndefined = val => typeof val === 'undefined';
```

**CONCEPTS：**

typeof 判断操作。

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



## isEmpty

**FUNCTION：**

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
```

**CONCEPTS：**

判断是否为空值。Number 和 Boolean 类型无法判断。

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



## isNil

**FUNCTION：**

```js
const isNil = val => val === undefined || val === null;
// 一般利用隐式转换、更简洁
const isNilSelf = val => val == null;
```

**CONCEPTS：**

判断是否为 undefined 和 null。

**EXAMPLES：**

```js
isNil(null); // true
isNil(undefined); // true
```



## isNumber

**FUNCTION：**

```js
const isNumber = val => typeof val === 'number' && val === val;
```

**CONCEPTS：**

判断是否为数字。利用了 NaN 不等于 NaN 进一步判断。

**EXAMPLES：**

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```



## isObject/isNull

**FUNCTION：**

```js
const isObject = obj => obj === Object(obj);
const isNull = val => val === null;
```

**CONCEPTS：**

判断是否为对象。这种思路还是第一次遇到。

**EXAMPLES：**

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
isNull(null); // true
```



## isPlainObject

**FUNCTION：**

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

**CONCEPTS：**

判断是否为对象。利用了 constructor。

**EXAMPLES：**

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```



## isPromiseLike

**FUNCTION：**

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
```

**CONCEPTS：**

判断是否为类 Promise。

**EXAMPLES：**

```js
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```



## isValidJSON

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

**CONCEPTS：**

判断是否为有效 JSON。利用 `try...catch` 来处理错误。

**EXAMPLES：**

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```