---
title: 对象
sidebarDepth: 2
---

## 绑定

### 1. bindAll

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const bindAll = (obj, ...fns) =>
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );
```

**EXAMPLES：**

```js
const view = {
  label: 'docs',
  click: function() {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.
```



## 拷贝

### 1. shallowClone

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const shallowClone = obj => Object.assign({}, obj);
```

**EXAMPLES：**

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

### 2. deepClone（深）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
```

**EXAMPLES：**

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```



## 冻结

### 1. deepFreeze（深）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(v[prop]);
  });
  return Object.freeze(obj);
};
```

**EXAMPLES：**

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```



## 合并

### 1. nest

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id, link) }));
```

**EXAMPLES：**

```js
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```



## 转换

### 1. objectFromPairs

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

**EXAMPLES：**

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
```

### 2. objectToEntries

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

**EXAMPLES：**

```js
objectToEntries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

### 3. objectToPairs

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const objectToPairs = obj => Object.entries(obj);
```

**EXAMPLES：**

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

### 4. objectToQueryString

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
      const symbol = queryString.length === 0 ? '?' : '&';
      queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
      return queryString;
    }, '')
    : '';
};
```

**EXAMPLES：**

```js
objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'
```

### 5. transform

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

**EXAMPLES：**

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```



## 相等

### 1. equals（深）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};
```

**EXAMPLES：**

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
```

### 2. matches

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

**EXAMPLES：**

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```

### 3. matchesWith

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(key =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
```

**EXAMPLES：**

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```



## omit/pick

### 1. omit

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

目前学到最秀的 `reduce` 用法。

**FUNCTION：**

```js
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

**EXAMPLES：**

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```

### 2. omitBy

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

目前学到最秀的 `reduce` 用法。

**FUNCTION：**

```js
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

**EXAMPLES：**

```js
omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
```

### 3. pick

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

目前学到最秀的 `reduce` 用法。

**FUNCTION：**

```js
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
```

**EXAMPLES：**

```js
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```

### 4. pickBy

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

目前学到最秀的 `reduce` 用法。

**FUNCTION：**

```js
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

**EXAMPLES：**

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
```



## 查询

### 1. deepGet（手动）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

目前学到最秀的 `reduce` 用法。

**FUNCTION：**

```js
const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
```

**EXAMPLES：**

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
```

### 2. dig（自动）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

深度遍历优先。

**FUNCTION：**

```js
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);
```

**EXAMPLES：**

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```

### 3. findKey

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

深度遍历优先。

**FUNCTION：**

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
```

**EXAMPLES：**

```js
findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```

### 4. findLastKey

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

深度遍历优先。

**FUNCTION：**

```js
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
```

**EXAMPLES：**

```js
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'pebbles'
```

### 5. get

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

有趣的正则替换。

**FUNCTION：**

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
```

**EXAMPLES：**

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```

### 6. hasKey（拥有）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

有趣的正则替换。

**FUNCTION：**

```js
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};
```

**EXAMPLES：**

```js
let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
};
hasKey(obj, ['a']); // true
hasKey(obj, ['b']); // true
hasKey(obj, ['b', 'c']); // true
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['c']); // false
hasKey(obj, ['b', 'f']); // false
```

### 7. size（长度）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

有趣的正则替换。

**FUNCTION：**

```js
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
      ? val.size || val.length || Object.keys(val).length
      : typeof val === 'string'
        ? new Blob([val]).size
        : 0;
```

**EXAMPLES：**

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```



## 修改

### 1. mapValues（value）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
```

**EXAMPLES：**

```js
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```

### 2. deepMapKeys（key）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const deepMapKeys = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map(val => deepMapKeys(val, fn))
    : typeof obj === 'object'
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : val;
        return acc;
      }, {})
    : obj;
```

**EXAMPLES：**

```js
const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/
```

### 3. flattenObject（扁平）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
```

**EXAMPLES：**

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```

### 4. unflattenObject（扁平）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
```

**EXAMPLES：**

```js
unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```

### 5. merge（合并）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
```

**EXAMPLES：**

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

### 6. orderBy（排序）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
```

**EXAMPLES：**

```js
const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
orderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```



## 修改 key

### 1. mapKeys（key）

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
```

**EXAMPLES：**

```js
mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
```

### 2. renameKeys

**FROM**

[30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

**EXAMPLES：**

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```