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