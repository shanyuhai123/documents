---
autoGroup-2: 数组方法
title: 数组的修改方法
---

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
> + 常用于快速填充数组。

### 3. 示例

+ base examples

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

+ generate a two-dimensional array

  ```js
  Array(10).fill([]); // [[], [], [], [], [], [], [], [], [], []];
  ```




## Array.prototype.pop

### 1. 语法

::: danger
arr.pop()
:::

返回值：

从数组中删除的元素，当数组为空时返回 undefined。

### 2. 描述

pop() 方法从数组中删除最后一个元素，并返回该元素的值，此方法更改数组的长度。

> 个人在日常开发中常用场景：
>
> - 需要从尾端删除数据时。

### 3. 示例

+ removing the last element of an array

  ```js
  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
  const popped = myFish.pop(); // ['angel', 'clown', 'mandarin' ]  'sturgeon'
  ```

+ using apply() or call() on array-like objects

  ```js
  let myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};
  
  const popped = Array.prototype.pop.call(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}  'sturgeon'
  ```



## Array.prototype.push

### 1. 语法

::: danger
arr.push(element1, ..., elementN)
:::

参数：

- elementN：被添加到数组末尾的元素。

返回值：

返回新的 length 属性值。

### 2. 描述

push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

> 个人在日常开发中常用场景：
>
> - 需要追加数据时。

### 3. 示例

+ adding elements to an array

  ```js
  let sports = ['soccer', 'baseball'];
  const total = sports.push('football', 'swimming'); // ['soccer', 'baseball', 'football', 'swimming'] 4
  ```

+ merging two arrays

  ```js
  let vegetables = ['parsnip', 'potato'];
  const moreVegs = ['celery', 'beetroot'];
  Array.prototype.push.apply(vegetables, moreVegs); // ['parsnip', 'potato', 'celery', 'beetroot']
  ```

+ using an object in an array-like fashion

  ```js
  let obj = {
    length: 0, // 2
    
    addElem: function (elem) {
      [].push.call(this, elem);
    }
  }
  
  obj.addElem({});
  obj.addElem({});
  ```



## Array.prototype.reverse

### 1. 语法

::: danger
arr.reverse()
:::

返回值：

改变（颠倒）后的数组。

### 2. 描述

reverse() 方法将数组中元素的位置颠倒，并返回该数组。

> 个人在日常开发中常用场景：
>
> - 颠倒数组。

### 3. 示例

+ reversing the elements in an array-like object

  ```js
  const a = {0: 1, 1: 2, 2: 3, length: 3};
  Array.prototype.reverse.call(a); // {0: 3, 1: 2, 2: 1, length: 3}
  ```



## Array.prototype.shift

### 1. 语法

::: danger
arr.shift()
:::

返回值：

从数组中删除的元素，如果数组为空则返回 undefined。 

### 2. 描述

shift 方法移除索引为 0 的元素（即第一个元素），并返回被移除的元素，其他元素的索引值随之减 1（push、pop 操作不会影响其余元素，所以性能更高）。

shift 方法并不限于数组，可以通过 call、apply 方法作用于类数组的对象上。

> 个人在日常开发中常用场景：
>
> - 需要删除前一部分时。

### 3. 示例

```js
let fish = ['angel', 'clown', 'mandarin', 'surgeon'];
fish.shift(); // "angel"
```



## Array.prototype.sort

### 1. 语法

::: danger
arr.sort([compareFunction])
:::

参数：

- compareFunction：用来指定按某种顺序进行排列的函数。
  - firstEl：第一个用于比较的元素；
  - secondEl：第二个用于比较的元素。

返回值：

排序后的数组。

### 2. 描述

sort 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的。

> 个人在日常开发中常用场景：
>
> + 排序。

### 3. 示例

+ sorting non-ASCII characters

  ```js
  const items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
  items.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
  ```

+ sorting with map

  ```js
  const list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
  let mapped = list.map((el, i) => ({index: i, value: el.toLowerCase()}));
  
  mapped.sort((a, b) => a.value >= b.value ? 1 : -1);
  mapped.map(el => list[el.index]);
  ```



## Array.prototype.splice

### 1. 语法

::: danger
arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
:::

参数：

- start：指定修改的开始位置（从0计数），如果超出了数组的长度，则从数组末尾开始添加内容；
- deleteCount：整数，表示要移除的数组元素的个数；
- item1, item2, ...：要添加进数组的元素。

返回值：

由被删除的元素组成的一个数组，若没有删除元素，则返回空数组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 增删改数组中的元素。

### 3. 示例

+ remove 0(zero) elements from index 2, and insert "drum" and "guitar"

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(2, 0, 'drum', 'guitar');
  ```

+ remove 1 element from index 3

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(3, 1);
  ```

+ remove 1 element from index 2, and  insert "trumpet"

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(2, 1, 'trumpet');
  ```

+ remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(0, 2, 'parrot', 'anemone', 'blue');
  ```

+ remove 1 element from index-2

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(-2, 1);
  ```

+ remove all elements after index 2

  ```js
  const fish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
  fish.splice(2);
  ```



## Array.prototype.unshift

### 1. 语法

::: danger
arr.unshift(element1, ..., elementN)
:::

参数：

- elementN：要添加到数组开头的元素或多个元素。

返回值：

返回其 length 属性值。

### 2. 描述

unshift 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。

> 个人在日常开发中常用场景：
>
> - 常用于在数组前添加数据。

### 3. 示例

```js
let arr = [1, 2];
arr.unshift(0); // 3
arr.unshift([-4, -3]); // 4
// arr [[-4, -3], 0, 1, 2]
```