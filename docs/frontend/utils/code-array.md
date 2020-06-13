---
title: 数组
---

## 判断

### 1. all/none/any

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

利用 `every`、`some` 包裹一层。

**FUNCTION：**

```js
const all = (arr, fn = Boolean) => arr.every(fn);
const none = (arr, fn = Boolean) => !arr.some(fn);
const any = (arr, fn = Boolean) => arr.some(fn);
```

**EXAMPLES：**

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

### 2. allEqual（全等）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

判断数组中的所有元素是否相等。将数组中所有参数与第一个数据作对比。

**FUNCTION：**

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

**EXAMPLES：**

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

### 3. haveSameContents（内容相等）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length) return false;
  return true;
};
```

**EXAMPLES：**

```js
haveSameContents([1, 2, 4], [2, 4, 1]); // true
```

### 3. includesAll（包含）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const includesAll = (arr, values) => values.every(v => arr.includes(v));
```

**EXAMPLES：**

```js
includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false
```

### 3. includesAny（包含）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

可利用 `any` 方法替代。

```js
const any = (arr, fn = Boolean) => arr.some(fn);

any([2, 9], v => [1, 2, 3, 4].includes(v)); // true
any([8, 9], v => [1, 2, 3, 4].includes(v));
// false
```

**FUNCTION：**

```js
const includesAny = (arr, values) => values.some(v => arr.includes(v));
```

**EXAMPLES：**

```js
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
```



## 格式转换

### 1. arrayToCSV

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

对二维数组做了两次 map 映射，内层映射确定分隔符，外层映射添加换行符，针对字符串中双引号作处理。

**FUNCTION：**

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
```

**EXAMPLES：**

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415'
```



## 生成

### 1. initialize2DArray（2维）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

**EXAMPLES：**

```js
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```

### 2. initializeNDArray（n维）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
```

**EXAMPLES：**

```js
initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
```

### 3. initializeArrayWithRange（连续范围）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
```

**EXAMPLES：**

```js
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
```

### 4. initializeArrayWithRangeRight（连续范围右）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

**EXAMPLES：**

```js
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]
```

### 5. initializeArrayWithValues（连续相同）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

对 [empty](/frontend/javascript/array-empty) 的处理。

**FUNCTION：**

```js
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
```

**EXAMPLES：**

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```



## 分组

### 1. aperture（指定长度）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

对二维数组做了两次 map 映射，内层映射确定分隔符，外层映射添加换行符，针对字符串中双引号作处理。

严格的指定长度，不满足时则返回 `[]`。

**FUNCTION：**

```js
const aperture = (n, arr) =>
  n > arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
```

**EXAMPLES：**

```js
R.aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]
R.aperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]
R.aperture(5, [1, 2, 3, 4]); // []
```

### 2. chunk（指定长度）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

相对于 `aperture` 会尽可能保留长度。

**FUNCTION：**

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
```

**EXAMPLES：**

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

### 3. chunkIntoN（指定个数）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

尽可能保持分组中的 `size` 一致。

**FUNCTION：**

```js
const chunkIntoN = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}
```

**EXAMPLES：**

```js
chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1,2], [3,4], [5,6], [7]]
```

### 4. bifurcate（2 组）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

根据 `filter` 分成两组。

**FUNCTION：**

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
```

**EXAMPLES：**

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

### 5. bifurcateBy（by）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

`bifurcate` 的进阶，更为自由。

**FUNCTION：**

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
```

**EXAMPLES：**

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ["boop", "foo"], ["beep", "bar"]]
```



## 分类

### 1. groupBy（by）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

与 `countBy` 实现相似。

**FUNCTION：**

```js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
```

**EXAMPLES：**

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
```



## 移除

### 1. compact（falsy）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

利用了隐式转换概念。移除 “无效” 值。

**FUNCTION：**

```js
const compact = arr => arr.filter(Boolean);
```

**EXAMPLES：**

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

### 2. drop（从左开始）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const drop = (arr, n = 1) => arr.slice(n);
```

**EXAMPLES：**

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

### 3. dropRight（从右开始）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

**EXAMPLES：**

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```

### 4. dropWhile（从左开始）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
```

**EXAMPLES：**

```js
dropWhile([3, 1, 2, 4], n => n < 3); // [1, 2, 4]
```

### 5. dropRightWhile（从右开始）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};
```

**EXAMPLES：**

```js
dropRightWhile([3, 1, 2, 4], n => n < 3); // [3, 1, 2]
```

### 6. initial（移除最后）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const initial = arr => arr.slice(0, -1);
```

**EXAMPLES：**

```js
initial([1, 2, 3]); // [1,2]
```



## 插入

### 1. insertAt

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

对象展开符。

**FUNCTION：**

```js
const insertAt = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
```

**EXAMPLES：**

```js
let myArray = [1, 2, 3, 4];
insertAt(myArray, 2, 5); // myArray = [1, 2, 3, 5, 4]

let otherArray = [2, 10];
insertAt(otherArray, 0, 4, 6, 8); // otherArray = [2, 4, 6, 8, 10]
```



## 反序

### 1. forEachRight（forEach）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

`slice` 浅拷贝。

**FUNCTION：**

```js
const forEachRight = (arr, callback) =>
  arr
    .slice()
    .reverse()
    .forEach(callback);
```

**EXAMPLES：**

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```



## 过滤

### 1. everyNth（取模）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

**EXAMPLES：**

```js
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```



## 去重

### 1. filterNonUnique

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

**EXAMPLES：**

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```

### 2. filterNonUniqueBy（by）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

**EXAMPLES：**

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```



## 查询

### 1. findLast（元素）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
```

**EXAMPLES：**

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

### 2. findLastIndex（下标）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];
```

**EXAMPLES：**

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
findLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)
```

### 3. head（头部）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const head = arr => (arr && arr.length ? arr[0] : undefined);
```

**EXAMPLES：**

```js
head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
```

### 4. indexOfAll（所有下标）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
```

**EXAMPLES：**

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
indexOfAll([1, 2, 3], 4); // []
```



## 统计[频率]

### 1. countOccurrences（指定）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

统计数组中某个值出现次数。

**FUNCTION：**

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

**EXAMPLES：**

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

### 2. frequencies（所有）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

统计数组中某个值出现次数。

**FUNCTION：**

```js
const frequencies = arr =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});
```

**EXAMPLES：**

```js
frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }
```

### 3. countBy（by）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

更为灵活。

**FUNCTION：**

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
```

**EXAMPLES：**

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
countBy(['a', 'b', 'a', 'c', 'a', 'a', 'b'], str => str.slice()); // {a: 4, b: 2, c: 1}
```



## 展平

### 1. flatten（指定深度）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
```

**EXAMPLES：**

```js
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```

### 2. deepFlatten（全部）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

暂无。

**FUNCTION：**

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

**EXAMPLES：**

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
```



## 区分

### 1. difference

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

仅暴露了 a 的差异而忽略的 b 的差异。

**FUNCTION：**

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

**EXAMPLES：**

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

### 2. differenceBy（by）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

利用 map 导致返回值仅保留 `by` 的数据。

**FUNCTION：**

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
```

**EXAMPLES：**

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```

### 3. differenceWith（with）

**FROM**

[30 seconds of code (Array)](https://www.30secondsofcode.org/tag/array)

**DETAIL：**

相对于 `by` 会保留数据信息。

**FUNCTION：**

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
```

**EXAMPLES：**

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
differenceWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x); // [{x: 2}]
```









## intersection/similarity

**FUNCTION：**

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

**CONCEPTS：**

两数组之间的交集。

**EXAMPLES：**

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```



## intersectionBy

**FUNCTION：**

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};
```

**CONCEPTS：**

两数组之间映射后的交集。

**EXAMPLES：**

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```



## isSorted

**FUNCTION：**

```js
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
```

**CONCEPTS：**

判断是否排序。

**EXAMPLES：**

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```



## join

**FUNCTION：**

```js
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
```

**CONCEPTS：**

指定分隔符拼接数组。

**EXAMPLES：**

```js
join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"
```



## head/last/nthElement

**FUNCTION：**

```js
const head = arr => arr[0];
const last = arr => arr[arr.length - 1];
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
```

**CONCEPTS：**

指定位置元素。

**EXAMPLES：**

```js
head([1, 2, 3]); // 1
last([1, 2, 3]); // 3
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```



## longestItem

**FUNCTION：**

```js
const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));
```

**CONCEPTS：**

返回最长元素。

**EXAMPLES：**

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```



## mapObject

**FUNCTION：**

```js
const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
```

**CONCEPTS：**

数组映射为对象。

**EXAMPLES：**

```js
const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
```



## maxN/minN

**FUNCTION：**

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
```

**CONCEPTS：**

返回最大、最小值组。

**EXAMPLES：**

```js
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```



## offset

**FUNCTION：**

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
```

**CONCEPTS：**

数组偏移。

**EXAMPLES：**

```js
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```



## partition

**FUNCTION：**

```js
// 优化
const partition = (arr, fn) =>
  arr.reduce(
    (acc, cur, i, arr) => (acc[fn(cur, i, arr) ? 0 : 1].push(cur), acc),
    [[], []]
  );
```

**CONCEPTS：**

分组。与 [bifurcateBy](/frontend/javascript/code-array.html#bifurcateby) 一致。

**EXAMPLES：**

```js
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
partition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```



## permutations

**FUNCTION：**

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};
```

**CONCEPTS：**

排列组合。字符串类型参考 [stringPermutations](/frontend/javascript/code-string.html#stringpermutations)。

**EXAMPLES：**

```js
permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```



## pull

**FUNCTION：**

```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

**CONCEPTS：**

过滤掉数组中指定数据。

**EXAMPLES：**

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```



## pullAtIndex

**FUNCTION：**

```js
const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
```

**CONCEPTS：**

过滤掉数组中指定下标的数据。

**EXAMPLES：**

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```



## pullAtValue

**FUNCTION：**

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
```

**CONCEPTS：**

过滤掉数组中指定数据，并返回过滤的数据。其实这种形式偏多余了。

**EXAMPLES：**

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```



## pullBy

**FUNCTION：**

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

**CONCEPTS：**

过滤掉数组中指定格式数据。便于处理后端未定格式数据。

**EXAMPLES：**

```js
let myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]
```



## reduceWhich

**FUNCTION：**

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
```

**CONCEPTS：**

返回数组中最大、最小值。

**EXAMPLES：**

```js
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
  (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}
```



## reducedFilter <Badge text="important" type="error"/>

**FUNCTION：**

```js
// 优化
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => (acc[key] = el[key], acc), {})
  );
```

**CONCEPTS：**

返回限定的数组对象。配合后台时常用的方法。

**EXAMPLES：**

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```



## reject

**FUNCTION：**

```js
const reject = (pred, array) => array.filter((...args) => !pred(...args));
```

**CONCEPTS：**

过滤数据。这样的参数形式更符合喜欢的函数式编程规范。

**EXAMPLES：**

```js
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']
```



## remove

**FUNCTION：**

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
```

**CONCEPTS：**

在原数组上过滤数据。

**EXAMPLES：**

```js
remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
```



## sample

**FUNCTION：**

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
```

**CONCEPTS：**

数组中返回一个随机元素。

**EXAMPLES：**

```js
sample([3, 7, 9, 11]); // 9
```



## sampleSize

**FUNCTION：**

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

**CONCEPTS：**

数组中返回 n 个随机元素。其中利用了经典的数据交换位置 `[i,j] = [j,i]` 方法。

**EXAMPLES：**

```js
sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```



## shank

**FUNCTION：**

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```

**CONCEPTS：**

实现了 splice 方法。

**EXAMPLES：**

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```



## shuffle

**FUNCTION：**

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```

**CONCEPTS：**

打乱数组。

**EXAMPLES：**

```js
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```



## sortedIndex/sortedLastIndex

**FUNCTION：**

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

**CONCEPTS：**

元素在序列的数组中的位置。

**EXAMPLES：**

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
sortedLastIndex([10, 20, 30, 30, 40], 30); // 4
```



## sortedIndexBy/sortedLastIndexBy

**FUNCTION：**

```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

**CONCEPTS：**

元素根据某一元素在序列的数组中的位置。

**EXAMPLES：**

```js
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
```



## stableSort

**FUNCTION：**

```js
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
```

**CONCEPTS：**

数组排序。直接使用 sort 会修改原数组。

**EXAMPLES：**

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```



## symmetricDifference

**FUNCTION：**

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

**CONCEPTS：**

数组之间的差异（不过滤重复值）。完善了 [difference](/frontend/javascript/code-array.html#difference) 方法。

**EXAMPLES：**

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```



## symmetricDifferenceWith

**FUNCTION：**

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

**CONCEPTS：**

数组之间的差异（不过滤重复值）。完善了 [difference](/frontend/javascript/code-array.html#differenceWith) 方法。

**EXAMPLES：**

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```



## symmetricDifferenceWith

**FUNCTION：**

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

**CONCEPTS：**

数组之间的差异（不过滤重复值）。完善了 [difference](/frontend/javascript/code-array.html#differenceWith) 方法。

**EXAMPLES：**

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```



## take/takeRight

**FUNCTION：**

```js
const take = (arr, n = 1) => arr.slice(0, n);
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
```

**CONCEPTS：**

切割数组。

**EXAMPLES：**

```js
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```



## takeWhile/takeRightWhile

**FUNCTION：**

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

**CONCEPTS：**

切割过滤规则数组。

**EXAMPLES：**

```js
takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]
takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]
```



## toHash

**FUNCTION：**

```js
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
```

**CONCEPTS：**

尚未理解使用场景。

**EXAMPLES：**

```js
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:
let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
```



## union

**FUNCTION：**

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
```

**CONCEPTS：**

合并数组。

**EXAMPLES：**

```js
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```



## unionBy/unionWith

**FUNCTION：**

```js
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};
const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
```

**CONCEPTS：**

合并数组。直到现在才明白 `by` 是对两个数组执行同一操作，`with` 可以执行不同操作。

**EXAMPLES：**

```js
unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2, 1.5, 3, 0, 3.9]
```



## uniqueElements

**FUNCTION：**

```js
const uniqueElements = arr => [...new Set(arr)];
```

**CONCEPTS：**

去重。

**EXAMPLES：**

```js
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```



## uniqueElementsBy/uniqueElementsByRight

**FUNCTION：**

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);'
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

**CONCEPTS：**

根据元素某属性去重。

**EXAMPLES：**

```js
uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]
```



## uniqueSymmetricDifference

**FUNCTION：**

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];
```

**CONCEPTS：**

数组之间的差异（过滤重复值）。区别于 [symmetricDifference](/frontend/javascript/code-array.html#symmetricDifference) 方法。

**EXAMPLES：**

```js
uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]
```



## unzip/zip

**FUNCTION：**

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
```

**CONCEPTS：**

解压、打包数组。

**EXAMPLES：**

```js
unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]
unzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]
zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```



## unzipWith/zipWith

**FUNCTION：**

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])
  );
};
```

**CONCEPTS：**

解压、打包时并进行处理。

**EXAMPLES：**

```js
unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]
zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
); // [111, 222, '3bc']
```



## without

**FUNCTION：**

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v));
```

**CONCEPTS：**

不包含的数组。

**EXAMPLES：**

```js
without([2, 1, 2, 3], 1, 2); // [3]
```



## xProd

**FUNCTION：**

```js
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
```

**CONCEPTS：**

排列数组（即无视前后顺序）。

**EXAMPLES：**

```js
xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```



## zipObject

**FUNCTION：**

```js
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
```

**CONCEPTS：**

数组打包为对象。

**EXAMPLES：**

```js
zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
```