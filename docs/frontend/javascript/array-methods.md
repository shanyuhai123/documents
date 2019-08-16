---
title: 数组方法
---

## 介绍

虽然 **MDN** 已经很详细了，但还是需要记录一下。掌握这些方法虽然是必须的，但更重要的是学习如何写作，为一个方法添加语法、描述、示例，清晰而又明了。其中的 Polyfill 价值很高，之后单独拆分出来进行理解。

> 1. 示例部分会引用英文版本的介绍。
> 2. 部分方法并不会产生返回值，为了减少描述，省略 `console` 步骤。



## Array.from

用于从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。

### 1. 语法

::: danger
Array.from(arrayLike[, mapFn[, thisArg]])
:::

参数：

+ arrayLike：想要转换成数组的类数组对象或可迭代对象；
+ mapFn（可选参数）：如果制定了该参数，新数组中的每个元素都会执行该回调函数；
+ thisArg（可选参数）：执行回调函数 mapFn 时 this 对象。

返回值：

一个新的数组实例。

### 2. 描述

`Array.from()` 可以通过以下方式来创建数组对象：

+ 类数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）；
+ 可迭代对象（可以获取对象中的元素，如 Map 和 Set 等）。

`Array.from()` 方法有一个可选参数 `mapFn`，可以在生成的数组上再执行一次 `map` 方法后返回。也就是说 `Array.from(obj, mapFn, thisArg)` 就相当于 `Array.from(obj).map(mapFn, thisArg)`，除非创建的是不可用的中间数组。

`from()` 的 length 属性为 1，即 `Array.from.length === 1` 。

在 ES2015 中，`Class` 语法允许我们为内置类型（比如 Array）和自定义类新建子类（比如叫 SubArray）。这些子类也会继承父类的静态方法，比如 `SubArray.from()`，调用该方法后会返回子类 `SubArray` 的一个实例，而不是 `Array` 的实例。

> 个人在日常开发中常用场景：
>
> 1. 将获取的 DOM 类数组转为数组；
> 2. 将一串字符串转为数组；
> 3. 将 Map 类数组转为数组。

### 3. 示例

+ Array from a String

  ```js
  Array.from('foo');  // ["f", "o", "o"]
  ```

+ Array from a Set

  ```js
  let s = new Set(['foo', window]); 
  Array.from(s);  // ["foo", window]
  ```

+ Array from a Map

  ```js
  let m = new Map([[1, 2], [2, 4], [4, 8]]);
  Array.from(m);  // [[1, 2], [2, 4], [4, 8]]
  ```

+ Array from an Array-like object (arguments)

  ```js
  function f() {
    return Array.from(arguments);
  }
  
  f(1, 2, 3); // [1, 2, 3]
  ```

+ Using arrow functions and Array from

  ```js
  Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
  Array.from({length: 5, 0: 'a'}); //  ["a", undefined, undefined, undefined, undefined]
  Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
  ```

+ Sequence generator (range)

  > 这是一个非常有意思的写法，很值得学习。

  ```js
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  
  range(0, 4, 1);
  // [0, 1, 2, 3, 4] 
  
  range(1, 10, 2); 
  // [1, 3, 5, 7, 9]
  
  range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
  // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  ```

  

## Array.of

用于创建一个具有可变数量参数的新数组实例，而不需要考虑参数的数量或类型。与 Array 方法的区别是当处理单个参数且该参数为正整数类型时（负整数 Array 会报错），Array 方法会创建对应长度的空数组（空数组是指对应长度空位“empty”的数组），该行为会影响 map 方法无法生效。

> 其实我一直很好奇为什么被命名为 of

### 1. 语法

::: danger
Array.of(element0[, element1[, ...[, elementN]]])
:::

参数：

- elementN：任意个参数，将按顺序称为返回数组中的元素。

返回值：

一个新的数组实例。

### 2. 描述

此函数是 ECMAScript 2015 标准的一部分。

> 个人在日常开发中常用场景：
>
> + 尚未使用过。

### 3. 示例

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
Array.of(1, [2]); // [1, [2]]
Array.of(1, {a: "1"}); // [1, {a: "1"}]
```



## Array.prototype.concat

### 1. 语法

::: danger
arr.concat(value1[, value2[, ...[, valueN]]])
:::

参数：

+ valueN：数组或值。

返回值：

一个新的数组实例。

### 2. 描述

`concat` 方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会低轨道嵌套数组参数中。

`concat` 方法不会改变 this 或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。

> 个人在日常开发中常用场景：
>
> - 偶尔需要拼接数组时会使用。

### 3. 示例

+ concatenating two arrays

  ```js
  const letters = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  letters.concat(numbers); // ['a', 'b', 'c', 1, 2, 3]
  ```

+ concatenating three arrays

  ```js
  const num1 = [1, 2, 3];
  const num2 = [4, 5, 6];
  const num3 = [7, 8, 9];
  
  num1.concat(num2, num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

+ concatenating values to an array

  ```js
  const letters = ['a', 'b', 'c'];
  
  letters.concat(1, [2, 3]); // ['a', 'b', 'c', 1, 2, 3]
  ```

+ concatenating nested arrays

  ```js
  const num1 = [[1]];
  const num2 = [2, [3]];
  
  num1.concat(num2); // [[1], 2, [3]]
  num1[0].push(4); // [[1, 4], 2, [3]]
  ```




## Array.prototype.copyWithin

### 1. 语法

::: danger
arr.copyWithin(target[, start[, end]])
:::

参数：

+ target：索引（复制序列到该位置）。如果是负数，则从末尾开始，若大于等于 `arr.length`，则不发生拷贝；
+ start：索引（开始复制元素的起始位置），负数同上，默认为 0；
+ end：索引（开始复制元素的结束位置），负数同上，默认为 `arr.length`。

返回值：

改变后的数组。

### 2. 描述

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

参数 `target`、`start`、`end` 必须为整数。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

```js
let numbers = [1, 2, 3, 4, 5];

// target
numbers.copyWithin(2); // [1, 2, 1, 2, 3]
numbers.copyWithin(-3); //  [1, 2, 1, 2, 1]
// target、start
numbers.copyWithin(0, 3); //  [2, 1, 1, 2, 1]
numbers.copyWithin(2, -2); //  [2, 1, 2, 1, 1]
// target、start、end
numbers.copyWithin(-2, -4, -2); //   [2, 1, 2, 1, 2]

// 类数组
[].copyWithin.call({length: 5, 3: 1}, 0, 3); // {0: 1, 3: 1, length: 5}

let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2); // Int32Array [3, 4, 5, 4, 5]

[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4); // Int32Array [4, 2, 3, 4, 5]
```



## Array.prototype.entries

### 1. 语法

::: danger
arr.entries()
:::

返回值：

一个新的 Array 迭代器对象。

### 2. 描述

`entries()` 方法返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ array iterator

  ```js
  const arr = ['a', 'b', 'c'];
  const iterator = arr.entries();
  
  console.log(iterator); // Array Iterator {}
  ```

+ iterator.next

  ```js
  const arr = ['a', 'b', 'c'];
  const iterator = arr.entries();
  
  console.log(iterator.next()); // Object { value: Array [0, "a"], done: false }
  console.log(iterator.next()); // Object { value: Array [1, "b"], done: false }
  console.log(iterator.next()); // Object { value: Array [2, "c"], done: false }
  console.log(iterator.next()); // Object { value: undefined, done: true }
  console.log(iterator.next()); // Object { value: undefined, done: true }
  ```

+ iterating with index and elements

  ```js
  const a = ['a', 'b', 'c'];
  
  for (const [index, element] of a.entries()) {
    console.log(index, element);
  }
  
  // 0 'a' 
  // 1 'b' 
  // 2 'c'
  ```



## Array.prototype.every

### 1. 语法

::: danger
arr.every(callback[, thisArg])
:::

参数：

+ callback：回调函数；
  + element：当前值；
  + index：当前值的索引；
  + array：当前数组。
+ thisArg：执行 callback 时使用的 `this` 值。

返回值：

返回一个布尔值。

### 2. 描述

`every()` 方法为数组中的每个元素都执行一次 `callback` 函数，直到找到一个返回 `false` 的元素。如果找到一个这样的元素则立即返回 false，否则返回 true。

> 个人在日常开发中常用场景：
>
> - 多用于判断多种状态是否符合，传递给变量，交由 if 处理。

### 3. 示例

+ testing size of all array elements

  ```js
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
  ```

+ using arrow functions

  ```js
  [12, 5, 8, 130, 44].every(x => x >= 10); // false
  [12, 54, 18, 130, 44].every(x => x >= 10); // true
  ```



## Array.prototype.fill

### 1. 语法

::: danger
arr.fill(value[, start[, end]])
:::

参数：

+ value：用来填充数组元素的值；
+ start：起始索引，默认 0；
+ end：终止索引，默认 `this.length`。

返回值：

修改后的数组。

### 2. 描述

`fill` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素，但不包括终止索引。

`fill` 方法故意被设计为通用方法，该方法不要求 `this` 是数组对象。

> 个人在日常开发中常用场景：
>
> + 尚未使用过。

### 3. 示例

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```



## Array.prototype.filter

### 1. 语法

::: danger
arr.filter(callback(element[, index[, array]])[, thisArg])
:::

参数：

+ callback：回调函数；
  - element：当前值；
  - index：当前值的索引；
  - array：当前数组。
+ thisArg：执行 callback 时使用的 `this` 值。

返回值：

一个新的数组实例。

### 2. 描述

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 通过回调函数返回 true 的元素会包含到新数组中。`filter` 遍历的元素范围在第一次调用 `callback` 时之前就已经确定了，之后添加元素不会被遍历到。

> 个人在日常开发中常用场景：
>
> - 所有需要被过滤的数据都会使用该方法。

### 3. 示例

+ filtering invalid values

  ```js
  const arr = [1, 0, "", "2", false, undefined, null, {}, {a: "hi"}];
  arr.filter(a => a); // [1, "2", {  }, { a: "hi" }]
  ```

+ filtering out all small values

  ```js
  function isBigEnough(value) {
    return value >= 10;
  }
  
  [12, 5, 8, 130, 44].filter(isBigEnough); // [12, 130, 44]
  ```

+ filtering invalid entries from JSON

  ```js
  const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  let invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  arr.filter(filterByID);
  // Filtered Array [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  //  invalidEntries 5
  ```

+ searching in array

  ```js
  const fruits =  ['apple', 'banana', 'grapes', 'mango', 'orange'];
  
  function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  
  filterItems(fruits, 'ap'); // ['apple', 'grapes']
  filterItems(fruits, 'an'); // ['banana', 'mango', 'orange']
  ```



## Array.prototype.find

### 1. 语法

::: danger
arr.find(callback[, thisArg])
:::

参数：

- callback：回调函数；
  - element：当前值；
  - index：当前值的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 `this` 值。

返回值：

返回一个满足回调函数的值，否则返回 undefined。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 返回对象组成的数组中的对应对象。

### 3. 示例

+ find an object in an array by one of its properties

  ```js
  const inventory = [
      {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
      {name: 'cherries', quantity: 5}
  ];
  
  inventory.find(fruit => fruit.name === 'cherries'); //  { name: 'cherries', quantity: 5 }
  ```

+ find a prime number in an array

  ```js
  function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  [4, 6, 8, 12].find(isPrime); // undefined
  [4, 5, 8, 12].find(isPrime); // 5
  ```



## Array.prototype.findIndex

### 1. 语法

::: danger
arr.findIndex(callback[, thisArg])
:::

参数：

- callback：回调函数；
  - element：当前值；
  - index：当前值的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 `this` 值。

返回值：

返回对应值的下标，否则返回 -1。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 较少使用该方法，首先考虑能否使用 includes，若不支持才会考虑该项。

### 3. 示例

参考 find 的[示例](/frontend/javascript/array-methods.html#_3-示例-9)即可。



## Array.prototype.flat

### 1. 语法

::: danger
arr.flat(depth)
:::

参数：

- depth：指定要提取嵌套数组的结构深度，默认值为 1，Infinity 表示无限层级。

返回值：

一个包含将数组与子数组中所有元素的新数组。

### 2. 描述

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。方法很美丽，但是兼容性很差，所以提供了替代方案。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ flattening nested arrays

  ```js
  const arr = [1, 2, [3, 4]];
  arr.flat();  // [1, 2, 3, 4]
  
  const  arr = [1, 2, [3, 4, [5, 6]]];
  arr.flat(); // [1, 2, 3, 4, [5, 6]]
  
  const arr = [1, 2, [3, 4, [5, 6]]];
  arr.flat(2); // [1, 2, 3, 4, 5, 6]
  ```

+ flattening and array holes

  ```js
  const arr = [1, 2, , 4, 5];
  arr.flat(); // [1, 2, 4, 5]
  ```

### 4. 替代方案

使用 reduce 和 concat：

+ flat single level array

  ```js
  const arr = [1, 2, [3, 4]];
  arr.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]
  [].concat(...arr); // [1, 2, 3, 4]
  ```

+ enable deep level flatten use recursion with reduce and concat

  ```js
  const arr = [1,2,3,[1,2,3,4, [2,3,4]]];
  
  function flattenDeep(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  }
  
  flattenDeep(arr); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
  ```

+ non recursive flatten deep using a stack

  ```js
  let arr = [1,2,3,[1,2,3,4, [2,3,4]]];
  function flatten(input) {
    const stack = [...input];
    const res = [];
    
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    
    return res.reverse();
  }
  flatten(arr); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
  ```



## Array.prototype.flatMap

### 1. 语法

::: danger
arr.flatMap(function callback(currentValue[, index[, array]]) {

​	    // return element for new_array

}[, thisArg])
:::

参数：

- callback：回调函数；
  - currentValue：当前值；
  - index：当前值的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 `this` 值。

返回值：

 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为 1。

### 2. 描述

相当于执行 `map` 方法后，对返回值组成的数组执行 `flat` 方法。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ map and flatMap

  ```js
  const arr = [1, 2, 3, 4];
  
  arr.map(x => [x * 2]); // [[2], [4], [6], [8]]
  arr.flatMap(x => [x * 2]); // [2, 4, 6, 8]
  arr.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]
  ```

+ a list of sentences

  ```js
  let arr = ["今天天气不错", "", "早上好"];
  
  arr.map(s => s.split("")); // [["今", "天", "天", "气", "不", "错"],[""],["早", "上", "好"]]
  
  arr.flatMap(s => s.split('')); // ["今", "天", "天", "气", "不", "错", "早", "上", "好"]
  ```



## Array.prototype.forEach

### 1. 语法

::: danger
arr.forEach(callback[, thisArg])
:::

参数：

- callback：回调函数；
  - currentValue：当前值；
  - index：当前值的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 `this` 值。

返回值：

 undefined。

### 2. 描述

`forEach` 方法按升序为数组中含有效值的每一项执行一次 callback 函数，那些已删除或未初始化的项将被跳过（例如稀疏数组）。

如之前的方法一致，`forEach` 遍历的范围在第一次调用 callback 前就会确定。调用 callback 后添加到数组中的项不会被 callback 访问到。但是，如果已经存在的值被改变，则传递给 callback 的值是  `forEach` 遍历到它们那一刻的值。参见下方示例。

你无法终止跳出 `forEach` 循环，除了抛出一个异常。如果你需要这样做，使用 `forEach` 方法是错误的，请使用其余循环方法。

> 个人在日常开发中常用场景：
>
> - ~~所有使用 for 循环的场景（今天才改正过来……）。~~
> - 不需要终止 for 循环的场景。

### 3. 示例

+ no opeartion for uninitialized values(sparse arrays)

  ```js
  // 跳过无效值
  const arraySparse = [1, 3,,7];
  let numCallbackRuns = 0;
  
  arraySparse.forEach(el => {
    console.log(el);
    // 1
  	// 3
  	// 7
    numCallbackRuns++;
  });
  
  console.log("numCallbackRuns: ", numCallbackRuns); // numCallbackRuns: 3
  ```

+ printing the contents of an array

  ```js
  function logArrayElements(elements, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
  [2, 5, , 9].forEach(logArrayElements);
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
  ```

+ using thisArg

  ```js
  function Counter() {
    this.sum = 0;
    this.count = 0;
  }
  
  Counter.prototype.add = function(array) {
    array.forEach(entry => {
      this.sum += entry;
      ++this.count;
    }, this);
  }
  
  const obj = new Counter();
  obj.add([2, 5, 9]);
  obj.count;
  // 3 
  obj.sum;
  // 16
  ```

+ an object copy function

  ```js
  function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    
    propNames.forEach(name => {
      const desc = Object.getOwnPropertyDescriptor(obj, name);
      Object.defineProperty(copy, name, desc);
    });
    
    return copy;
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = copy(obj1); // obj2 looks like obj1 now
  ```

+ if the array is modified during iteration, other elements might be skipped

  ```js
  let words = ['one', 'two', 'three', 'four'];
  words.forEach(word => {
    console.log(word);
    if (word === 'two') {
      words.shift();
    }
  });
  
  // one
  // two
  // four
  ```

+ flatten an array

  ```js
  function flatten(arr) {
    const result = [];
    
    arr.forEach(i => {
      Array.isArray(i) ? result.push(...flatten(i)) : result.push(i);
    });
    
    return result;
  }
  
  const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```




## Array.prototype.includes

### 1. 语法

::: danger
arr.includes(valueToFind[, fromIndex])
:::

参数：

- valueToFind：需要查找的元素；
- fromIndex：从 fromIndex 索引处开始查找 valueToFind，可为负值。

返回值：

 一个布尔值。

### 2. 描述

includes 方法用来判断一个数组是否包含一个指定的值，包含返回 true，否则返回 false。

> 个人在日常开发中常用场景：
>
> - 常用于替代多个连续的 && 操作。

### 3. 示例

+ fromIndex is greater than or equal to the array length

  ```js
  const arr = ['a', 'b', 'c'];
  
  arr.includes('c', 3); // false
  arr.inclueds('c', 100); // false
  ```

+ computed index is less than o

  ```js
  const arr = ['a', 'b', 'c'];
  
  arr.includes('a', -100); // true
  arr.includes('b', -100); // true
  arr.includes('c', -100); // true
  arr.includes('a', -2); // false // 3 + (-2) = 1
  ```

+ includes() used as a generic method

  ```js
  (function() {
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
  })('a','b','c');
  ```



## Array.prototype.indexOf

### 1. 语法

::: danger
arr.indexOf(searchElement[, fromIndex = 0])
:::

参数：

- searchElement：要查找的元素；
- fromIndex：开始查找的位置。

返回值：

首个被找到的元素在数组中的索引位置，若没有找到则返回 -1。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 查找索引，判断元素是否存在。

### 3. 示例

+ finding all the occurrences of an element

  ```js
  let indices = [];
  const array = ['a', 'b', 'a', 'c', 'a', 'd'];
  const element = 'a';
  let idx = array.indexOf(element);
  
  while (idx !== -1) {
    indices.push(idx); // [0, 2, 4]
    idx = array.indexOf(element, idx + 1);
  }
  ```

+ finding if an element exists in the array or not and updating the array

  ```js
  function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
      veggies.push(veggie);
      console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
  		console.log(veggie + ' already exists in the veggies collection.');
  	}
  }
  
  let veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
  updateVegetablesCollection(veggies, 'spinach'); 
  // New veggies collection is : potato,tomato,chillies,green-pepper,spinach
  updateVegetablesCollection(veggies, 'spinach'); 
  // spinach already exists in the veggies collection.
  ```



## Array.prototype.join

### 1. 语法

::: danger
arr.join([separator])
:::

参数：

- separator：指定一个字符串来分隔数组的每个元素，默认为 `,`。

返回值：

一个所有数组元素连接的字符串，如果 `arr.length` 为0，则返回空字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 字符串拆分重组。

### 3. 示例

+ joining an array four different ways

  ```js
  const a = ['Wind', 'Water', 'Fire'];
  a.join(); // 'Wind,Water,Fire'
  a.join(', '); // 'Wind, Water, Fire'
  a.join(' + '); // 'Wind + Water + Fire'
  a.join(''); // 'WindWaterFire'
  ```

+ joining an array-like object

  ```js
  function f(a, b, c) {
    return Array.prototype.join.call(arguments);
  }
  f(1, 'a', true); // '1,a,true'
  ```

  