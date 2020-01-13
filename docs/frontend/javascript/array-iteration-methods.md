---
autoGroup-2: 数组方法
title: 数组的迭代方法
---

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




## Array.prototype.keys

### 1. 语法

::: danger
arr.keys()
:::

返回值：

一个新的 Array 迭代器对象。

### 2. 描述

keys() 方法返回一个包含数组中每个索引键的 Array Iterator 对象。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ key iterator doesn't ignore holes

  ```js
  const arr = ['a', , 'c'];
  const sparseKeys = Object.keys(arr); // ['0', '2']
  const denseKeys = [...arr.keys()]; // [0, 1, 2]
  ```
  
+ generate an array of the specified length

  ```js
  const specifiedArray = len => [...new Array(len).keys()];
  
  specifiedArray(4); // [0, 1, 2, 3]
  ```




## Array.prototype.map

### 1. 语法

::: danger
arr.map(callback[, thisArg])
:::

参数：

- callback：回调函数；
  - currentValue：当前值；
  - index：当前值的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 `this` 值。

返回值：

 一个新的数组，每个元素都是回调函数的结果。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用于映射修改后端传递的数据。

### 3. 示例

+ mapping an array of numbers to an array of square roots

  ```js
  const numbers = [1, 4, 9];
  numbers.map(num => Math.sqrt(num)); // [1, 2, 3]
  ```

+ using map to reformat objects in an array

  ```js
  const kvArray = [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];
  kvArray.map(obj =>  ({[obj.key]: obj.value})); // [{1: 10}, {2: 20}, {3: 30}]
  ```

+ mapping an array of numbers using a function containing an argument

  ```js
  const numbers = [1, 4, 9];
  numbers.map(num => num * 2); // [2, 8, 18]
  ```

+ using map generically

  ```js
  const map = Array.prototype.map;
  map.call('Hello World', x => x.charCodeAt(0)); // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
  ```

+ using map generically querySelectorAll

  ```js
  const elems = document.querySelectorAll('select option:checked');
  Array.prototype.map.call(elems, obj => obj.value);
  ```

+ tricky use case

  ```js
  ["1", "2", "3"].map(parseInt); // [1, NaN, NaN]
  
  
  function returnInt(element) {
    return parseInt(element, 10);
  }
  ['1', '2', '3'].map(returnInt); // [1, 2, 3]
  ```

+ mapping array have undefined

  ```js
  const numbers = [1, 2, 3, 4];
  numbers.map((num, index) => {
  	if (index < 3) {
  		return num; //  [1, 2, 3, undefined]
  	}
  });
  ```



## Array.prototype.reduce

### 1. 语法

::: danger
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
:::

参数：

- callback：回调函数；

  + accumulator：累计器累计回调的返回值；

  - currentValue：当前值；
  - index：当前值的索引；
  - array：当前数组。

- initialValue：作为第一次调用 callback 函数的第一个参数的值，默认值为数组中的第一个元素，空数组会导致报错。

返回值：

函数累计处理的结果。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 累计数据时。

### 3. 示例

+ sum all the values of an array

  ```js
  [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 6
  ```

+ sum of values in an object array

  ```js
  const initialValue = 0;
  [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, currentValue) => accumulator + currentValue.x, initialValue); // 6
  ```

+ flatten an array of arrays

  ```js
  [[0, 1], [2, 3], [4, 5]].reduce(( accumulator, currentValue ) => accumulator.concat(currentValue), []); // [0, 1, 2, 3, 4, 5]
  ```

+ counting instances of values in an object

  ```js
  const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  names.reduce( (allNames, name) => { 
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {}); // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
  ```

+ grouping objects by a property

  ```js
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 } 
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  groupBy(people, 'age');
  // { 
  //   20: [
  //     { name: 'Max', age: 20 }, 
  //     { name: 'Jane', age: 20 }
  //   ], 
  //   21: [{ name: 'Alice', age: 21 }] 
  // }
  ```

+ bonding arrays contained in an array of objects using the spread operator and initialValue

  ```js
  const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
  friends.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
  }, ['Alphabet']); // ["Alphabet", "Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
  ```

+ remove duplicate items in array

  ```js
  const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  myArray.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []); // ["a", "b", "c", "e", "d"]
  ```

+ running promises in sequence

  ```js
  function runPromiseInSequence(arr, input) {
    return arr.reduce((promiseChain, currentFunction) => promiseChain.then(currentFunction), Promise.resolve(input));
  }
  
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5);
    });
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2);
    });
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
   return a * 3;
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4);
    });
  }
  
  const promiseArr = [p1, p2, f3, p4];
  runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200
  ```

+ function composition enabling piping

  ```js
  const double = x => x + x;
  const triple = x => 3 * x;
  const quadruple = x => 4 * x;
  
  const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
  
  const multiply6 = pipe(double, triple);
  const multiply9 = pipe(triple, triple);
  const multiply16 = pipe(quadruple, quadruple);
  const multiply24 = pipe(double, triple, quadruple);
  
  multiply6(6); // 36
  multiply9(9); // 81
  multiply16(16); // 256
  multiply24(10); // 240
  ```



## Array.prototype.reduceRight

### 1. 语法

::: danger
arr.reduceRight(callback[, initialValue])
:::

参数：

- callback：回调函数；

  - previousValue：上一次调用回调的返回值，或提供的 initialValue；

  - currentValue：当前值；
  - index：当前值的索引；
  - array：当前数组。

- initialValue：作为第一次调用 callback 函数的第一个参数的值，默认值为数组中的第一个元素，空数组会导致报错。

返回值：

函数累计处理的结果。

### 2. 描述

基本与 reduce 一致，从右到左。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

参考 reduce 即可。




## Array.prototype.some

### 1. 语法

::: danger
arr.some(callback(element[, index[, array]])[, thisArg])
:::

参数：

- callback：回调函数；
  - element：当前元素；
  - index：当前元素的索引；
  - array：当前数组。
- thisArg：执行 callback 时使用的 this 值。

返回值：

如果回调函数返回至少一个数组元素的 truthy 值，则返回 true；否则为 false。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用多种元素判断。

### 3. 示例

+ testing array elements using arrow functions

  ```js
  [2, 5, 8, 1, 4].some(x => x > 10); // false
  [12, 5, 8, 1, 4].some(x => x > 10); // true
  ```

+ checking whether a value exists using an arrow function

  ```js
  const fruits = ['apple', 'banana', 'mango', 'guava'];
  function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
  }
  
  checkAvailability(fruits, 'kela');   // false
  checkAvailability(fruits, 'banana'); // true
  ```

+ converting any value to Boolean

  ```js
  const TRUTHY_VALUES = [true, 'true', 1];
  
  function getBoolean(value) {
    'use strict';
    
    if (typeof value === 'string') {
      value = value.toLowerCase().trim();
    }
    
    return TRUTHY_VALUES.some(t => t === value);
  }
  
  getBoolean(false);   // false
  getBoolean('false'); // false
  getBoolean(1);       // true
  getBoolean('true');  // true
  ```




## Array.prototype.values

### 1. 语法

::: danger
arr.values()
:::

返回值：

返回一个新的 Array Iterator 对象。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ iteration using for...of loop

  ```js
  const arr = ['a', 'b', 'c'];
  const iterator = arr.values();
  
  for (let letter of iterator) {
    console.log(letter); // "a" "b" "c"
  }
  ```



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

​	// return element for new_array

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

