---
title: 30s code object
---

> [30 seconds of code (Object)](https://www.30secondsofcode.org/tag/object)



## bindAll

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

**CONCEPTS：**

绑定对象方法到自身。

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



## deepClone

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

**CONCEPTS：**

深拷贝。

**EXAMPLES：**

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```



## deepFreeze

**FUNCTION：**

```js
const deepFreeze = obj =>
  Object.keys(obj).forEach(prop =>
    !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);
```

**CONCEPTS：**

深冻结。

**EXAMPLES：**

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```



## deepGet

**FUNCTION：**

```js
const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
```

**CONCEPTS：**

获取对象的值。利用 keys 数组获取指定属性。

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



## deepMapKeys

**FUNCTION：**

```js
const deepMapKeys = (obj, f) =>
  Array.isArray(obj)
    ? obj.map(val => deepMapKeys(val, f))
    : typeof obj === 'object'
      ? Object.keys(obj).reduce((acc, current) => {
        const val = obj[current];
        acc[f(current)] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, f) : (acc[f(current)] = val);
        return acc;
      }, {})
      : obj;
```

**CONCEPTS：**

深度映射对象的 key。

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



## dig

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

**CONCEPTS：**

返回对象属性的值。深度优先，是由于 `Object.values` 排序了。

**EXAMPLES：**

```js
// 为了验证深度优先，修改示例
const data = {
  level1: {
    level2: {
      level3: {
        level5: 'level5x'
      }
    },
    level6: {
      level5: 'level5'
    }
  }
};
dig(data, 'level3'); // {level5: "level5x"}
dig(data, 'level5'); // 'level5'
dig(data, 'level4'); // undefined
```



## equals

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

**CONCEPTS：**

深度相等。对于多种边界的处理值得学习。

**EXAMPLES：**

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```



## findKey/findLastKey

**FUNCTION：**

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
```

**CONCEPTS：**

找到符合规则的属性名。

**EXAMPLES：**

```js
const people = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
};

findKey(
  people,
  o => o['active']
); // 'barney'
findLastKey(
  people,
  o => o['active']
); // 'pebbles'
```



## flattenObject

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

**CONCEPTS：**

扁平化对象。

**EXAMPLES：**

```js
// 修改
flattenObject({ a: { b: { c: 1 }, e: 1 }, d: 1 }); // {a.b.c: 1, a.e: 1, d: 1}
```



## forOwn/forOwnRight

**FUNCTION：**

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));
```

**CONCEPTS：**

获取对象的第一层。

**EXAMPLES：**

```js
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
```



## functions

**FUNCTION：**

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
```

**CONCEPTS：**

返回可继承的函数名的数组。

**EXAMPLES：**

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```



## get

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

**CONCEPTS：**

获取对象指定属性值。相对于 [deepGet](/frontend/javascript/code-object.html#deepget) 方法数组形式更直观。

**EXAMPLES：**

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```



## hasKey

**FUNCTION：**

```js
const hasKey = (obj, keys) => {
  return (keys.length > 0) && keys.every(key => {
    if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
    obj = obj[key];
    return true;
  });
};
```

**CONCEPTS：**

检测对象是否具有对应属性。

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
// 调整位置
hasKey(obj, ['c']); // false
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['b', 'f']); // false
```



## invertKeyValues

**FUNCTION：**

```js
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
```

**CONCEPTS：**

反转 key、values 并归类。

**EXAMPLES：**

```js
invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```



## lowercaseKeys

**FUNCTION：**

```js
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

**CONCEPTS：**

小写对象 keys（浅层）。

**EXAMPLES：**

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith', other: { tName: 'John' } };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```



## mapKeys/mapValues

**FUNCTION：**

```js
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
```

**CONCEPTS：**

对象 keys、values 映射（浅层）。

**EXAMPLES：**

```js
mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```



## matches

**FUNCTION：**

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

**CONCEPTS：**

对象之间是否包含。

**EXAMPLES：**

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```



## matchesWith

**FUNCTION：**

```js
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(key =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
```

**CONCEPTS：**

对象之间是否包含。按照之前的关系，`By` 为统一映射，`With` 可分别处理。

**EXAMPLES：**

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```



## merge

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

**CONCEPTS：**

合并对象。区别于 `Object.assign` 的属性覆盖。

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



## objectFromPairs/objectToPairs

**FUNCTION：**

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

**CONCEPTS：**

对象、数组（规定格式）互转。

**EXAMPLES：**

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```