---
title: 对象的构造函数方法
---

## Function.prototype.apply

### 1. 语法

::: danger
func.apply(thisArg, [argsArray])
:::

参数：

+ thisArg：在 func 函数运行时使用的 this 值；
+ argsArray：一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 参数。

返回值：

调用指定 this 值和参数的函数的结果。

### 2. 描述

在调用一个存在的函数时，你可以为其指定 this 对象。this 指当前对象，也就是正在调用这个函数的对象。使用 apply，你可以只写一次这个方法然后在另一个对象中继续使用它，而不用在新对象中重复写该方法。

apply 与 call 非常相似，不同之处在于提供参数的形式，apply 使用参数数组而不是一组参数列表。

也可以使用 arguments 对象作为 argsArray 参数。

> 个人在日常开发中常用场景：
>
> - 需要 apply 时。

### 3. 示例

+ using apply to append an array to another

  ```js
  // 想要将一个数组追加到数组中，可以使用 concat，但是这会新建一个数组，可以利用 apply 解决这个问题
  let array = ['a', 'b'];
  const elements = [0, 1, 2];
  array.push.apply(array. elements); // ["a", "b", 0, 1, 2]
  ```

+ using apply and built-in functions

  ```js
  const numbers = [5, 6, 2, 3, 7];
  Math.max.apply(null, numbers); // 7
  Math.min.apply(null, numbers); // 2
  ```

+ using apply to chain constructors

  ```js
  Function.prototype.construct = function(aArgs) {
    const oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    return oNew;
  }
  ```



## Function.prototype.call

### 1. 语法

::: danger
fun.call(thisArg, arg1, arg2, ...)
:::

参数：

- thisArg：在 func 函数运行时使用的 this 值；
- argN：指定参数列表。

返回值：

调用指定 this 值和参数的函数的结果。

### 2. 描述

call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用函数。

> 个人在日常开发中常用场景：
>
> - 需要 call 时。

### 3. 示例

+ using call to chain constructors for an object

  ```js
  function Product(name, price) {
    this.name = name;
    this.age = age;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  const cheese = new Food('feta', 5);
  const fun = new Toy('robot', 40);
  ```

+ using call to invoke an anonymous function

  ```js
  const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' },
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }
  
  // #0 Lion: King
  // #1 Whale: Fail
  ```

+ using call to invoke a function and specifying the context for this

  ```js
  function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  const obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
  greet.call(obj);  // cats typically sleep between 12 and 16 hours
  ```

+ using call to invoke a function and without specifying the first argument

  ```js
  'use strict';
  const sData = 'Wisen';
  
  function display() {
    console.log('sData value is %s ', this.sData);
  }
  
  // display.call();  // sData value is Wisen
  // this will be undefined in strict mode
  display.call(); // Cannot read the property of 'sData' of undefined
  ```



## Function.prototype.bind

### 1. 语法

::: danger
function.bind(thisArg[, arg1[, arg2[, ...]]])
:::

参数：

- thisArg：在 func 函数运行时使用的 this 值；
- argN：指定参数列表。

返回值：

返回一个原函数的拷贝，并拥有指定的**this**值和初始参数。

### 2. 描述

描述有些细节，待权威指南补充。

> 个人在日常开发中常用场景：
>
> - 需要 bind 时。

### 3. 示例

+ creating a bound function

  ```js
  this.x = 9;
  const module = {
      x: 81,
    	getX: function() { return this.x; }
  };
  
  module.getX(); // 81
  const retrieveX = module.getX;
  retrieveX(); // 9
  const  boundGetX = retrieveX.bind(module);
  boundGetX(); // 81
  ```

+ partially applied functions

  ```js
  function list() {
    return Array.prototype.slice.call(arguments);
  }
  
  function addArguments(arg1, arg2) {
    return arg1 + arg2;
  }
  
  list(1, 2, 3); // [1, 2, 3]
  addArguments(1, 2); // 3
  
  const leadingThirtysevenList = list.bind(null, 37);
  const addThirtySeven = addArguments.bind(null, 37); 
  
  leadingThirtysevenList(); // 37
  leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
  addThirtySeven(5); // 42
  addThirtySeven(5, 10); // 37+5=42
  ```

+ with setTimeout

  ```js
  function LateBloomer() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  
  LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.declare.bind(this), 1000);
  };
  
  LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
      this.petalCount + ' petals!');
  };
  
  const flower = new LateBloomer();
  flower.bloom(); // I am a beautiful flower with 5 petals!
  ```

