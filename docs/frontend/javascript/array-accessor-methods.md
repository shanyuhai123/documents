---
autoGroup-2: 数组方法
title: 数组的访问方法
---

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



## Array.prototype.lastIndexOf

indexOf 的反向行为，不做描述。



## Array.prototype.slice

### 1. 语法

::: danger
arr.slice([begin[, end]])
:::

参数：

+ begin：提取起始处的索引，默认为 0；
+ end：提取终止处的索引，默认为 length-1。

返回值：

一个含有被提取元素的新数组。

### 2. 描述

slice 不会修改原数组，只会返回一个浅拷贝的新数组。

> 个人在日常开发中常用场景：
>
> - 截取内容。

### 3. 示例

```js
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
fruits.slice(1, 3); // ['Orange','Lemon']
```



## Array.prototype.toString

### 1. 语法

::: danger
arr.toString()
:::

返回值：

一个表示指定的数组及元素的字符串。

### 2. 描述

Array 对象覆盖了 Object 的 toString 方法，当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法。

> 个人在日常开发中常用场景：
>
> - 常用于数组转为字符串。

### 3. 示例

```js
const array = [1, 2, 'a', '1a'];
arrar.toString(); // "1,2,a,1a"
```



## Array.prototype.toLocaleString

### 1. 语法

::: danger
arr.toLocaleString([locales[,options]])
:::

参数：

- locales：带有 BCP 47 语言标记的字符串或字符串数组；
- options：一个可配置属性的对象。

返回值：

表示数组元素的字符串。

### 2. 描述

toLocaleString 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转为字符串，这些字符串将使用一个特定语言环境的字符串隔开。

> 个人在日常开发中常用场景：
>
> - 早期使用过该方法将时间转换为本地时间，后来使用 dayjs，moment 等时间库替代了。

### 3. 示例

```js
// Object：Object.prototype.toLocaleString()
// Number：Number.prototype.toLocaleString()
// Date：Date.prototype.toLocaleString()

let prices = ['￥7', 500, 8123, 12]; 
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }); // "￥7,￥500,￥8,123,￥12"
```