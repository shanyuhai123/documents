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
> + 尚未使用过

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
const new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
:::

参数：

+ valueN：数组或值

返回值：

一个新的数组实例。

### 2. 描述

`concat` 方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会低轨道嵌套数组参数中。

`concat` 方法不会改变 this 或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。

> 个人在日常开发中常用场景：
>
> - 偶尔需要拼接数组时会使用

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

  



