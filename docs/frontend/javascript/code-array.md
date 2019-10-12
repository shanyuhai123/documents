---
title: 30s code array
---

> [30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)



## all

**FUNCTION：**

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

**CONCEPTS：**   
判断数组中所有元素是否均符合规则。简单封装了 Array.prototype.every 方法。

**EXAMPLES：**

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```


## allEqual

**FUNCTION：**

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

**CONCEPTS：** 

判断数组中的所有元素是否相等。将数组中所有参数与第一个数据作对比。

**EXAMPLES：**

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```


## any

**FUNCTION：**

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

**CONCEPTS：** 

判断数组中至少有一个元素符合规则。简单封装了 Array.prototype.some 方法。

**EXAMPLES：**

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```


## arrayToCSV

**FUNCTION：**

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
```

**CONCEPTS：** 

将二维数组转为 CSV 格式。对二维数组做了两次 map 映射，内层映射确定分隔符，外层映射添加换行符，针对字符串中双引号作处理。

**EXAMPLES：**

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415'
```


## bifurcate

**FUNCTION：**

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, cur, i) => (acc[filter[i] ? 0 : 1].push(cur), acc), [[], []]);
```

**CONCEPTS：** 

对数组中的数据进行分类。filter 具有下标，可判断为数组，再配合三元运算符进行分类，核心是利用 reduce 和 `,` 对返回结果进行累积，`,` 操作符总是对每个操作求值，并返回最后一个（push 方法会返回数组的长度，不符合要求）。

**EXAMPLES：**

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```


## bifurcateBy

**FUNCTION：**

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, cur, i) => (acc[fn(cur, i) ? 0 : 1].push(cur), acc), [[], []]);
```

**CONCEPTS：** 

对数组中的数据进行分类。相对于 bifurcate，提供了过滤用函数。

**EXAMPLES：**

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
// 感觉上面可以优化下，速度不一定快，但是语义更好了
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x.startsWith('b')); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```


## chunk

**FUNCTION：**

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
```

**CONCEPTS：** 

对数组进行切片（分块）。利用 Array.from 的第二个参数 map 函数对每个分块进行映射。

**EXAMPLES：**

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```


## compact

**FUNCTION：**

```js
const compact = arr => arr.filter(Boolean);
// 个人之前使用，提供 Boolean 更直观
const compactSelf = arr => arr.filter(a => a);
```

**CONCEPTS：** 

移除数组中 “无效” 值。主要是利用 JavaScript 的隐式转换概念。

**EXAMPLES：**

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```


## countBy

**FUNCTION：**

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => 
    ((acc[val] = (acc[val] || 0) + 1), acc), {});
```

**CONCEPTS：** 

对数组中的数据进行分组并计数。对原函数进行修改，贯彻 `,` 操作符， typeof 处理了非函数。

**EXAMPLES：**

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
```


## countOccurrences

**FUNCTION：**

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

**CONCEPTS：** 

对数组中某个值进行计数。简单的利用了 reduce 方法。

**EXAMPLES：**

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```


## deepFlatten

**FUNCTION：**

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// MDN 同样提供了该方法
const deepFlatten = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
```

**CONCEPTS：** 

展开数组。数组中可能嵌套数组，利用了递归。

**EXAMPLES：**

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```


## difference

**FUNCTION：**

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

**CONCEPTS：** 

返回两个数组之差（差异），其中存在的问题是，仅暴露了 a 的差异而忽略的 b 的差异，利用该方法找相同倒是完美。核心利用了 Set 结构。

**EXAMPLES：**

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```


## differenceBy

**FUNCTION：**

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
```

**CONCEPTS：** 

两个数组格式化后之间的差异。一般数据会有较为复杂的结构，往往需要先处理数据。

**EXAMPLES：**

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```


## differenceWith

**FUNCTION：**

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
```

**CONCEPTS：** 

两个区间范围的差异。除了复杂的数据结构，还需要监听异常的数据（非范围内）。

**EXAMPLES：**

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```


## drop

**FUNCTION：**

```js
const drop = (arr, n = 1) => arr.slice(n);
```

**CONCEPTS：** 

删除数组前侧（左侧）的元素。简单使用了 slice 方法，slice 方法同样支持字符串，需要注意的是表象是删除，其实是提取指定位置的元素。

**EXAMPLES：**

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
drop("hello world", 5); // " world"
```


## dropRight

**FUNCTION：**

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

**CONCEPTS：** 

删除数组后侧（右侧）的元素。

**EXAMPLES：**

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```