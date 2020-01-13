---
autoGroup-1: 对象方法
title: 对象的实例函数方法
---

## Object.prototype.hasOwnProperty

### 1. 语法

::: danger

obj.hasOwnProperty(prop)

:::

参数：

- prop：要检测的属性。

返回值：

返回对象是否含有指定属性的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 忽略原型链继承的属性。

### 3. 示例

+ using hasOwnProperty to test for a property's existence

  ```js
  const o = {};
  o.hasOwnProperty('prop');   // false
  o.prop = 'exists'; 
  o.hasOwnProperty('prop');   // true
  ```
  
+ direct vs. inherited properties

  ```js
  const o = {};
  o.prop = 'exists';
  o.hasOwnProperty('prop'); // true
  o.hasOwnProperty('toString'); // false
  o.hasOwnProperty('hasOwnProperty'); // false
  ```

+ using hasOwnProperty as a property name

  ```js
  const foo = {
    hasOwnProperty: function() {
      return false;
    },
    bar: 'Here be dragons'
  };
  
  foo.hasOwnProperty('bar'); // always returns false
  Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
  ```



## Object.prototype.isPrototypeOf

### 1. 语法

::: danger

prototypeObj.isPrototypeOf(object)

:::

参数：

- object：在该对象的原型链上搜寻。

返回值：

返回调用对象是否在另一个对象的原型链上的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

- normal

  ```js
  unction Foo() {}
  function Bar() {}
  function Baz() {}
  
  Bar.prototype = Object.create(Foo.prototype);
  Baz.prototype = Object.create(Bar.prototype);
  
  var baz = new Baz();
  
  console.log(Baz.prototype.isPrototypeOf(baz)); // true
  console.log(Bar.prototype.isPrototypeOf(baz)); // true
  console.log(Foo.prototype.isPrototypeOf(baz)); // true
  console.log(Object.prototype.isPrototypeOf(baz)); // true
  ```



## Object.prototype.propertyIsEnumerable

### 1. 语法

::: danger

obj.propertyIsEnumerable(prop)

:::

参数：

- prop：需要测试的属性名。

返回值：

返回指定的属性名是否可枚举的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

- basic use

  ```js
  let o = {};
  let a = [];
  
  o.prop = 'is enumerable';
  a[0] = 'is enumerable';
  
  o.propertyIsEnumerable('prop'); // true
  a.propertyIsEnumerable(0); // true
  ```

- user-defined vs. built-in objects

  ```js
  const a = ['is enumerable'];
  
  a.propertyIsEnumerable(0); // true
  a.propertyIsEnumerable('length'); // false
  
  Math.propertyIsEnumerable('random'); // false
  this.propertyIsEnumerable('Math'); // false
  ```

- direct vs. inherited properties

  ```js
  const a = [];
  a.propertyIsEnumerable('constructor'); // false
  
  function firstConstructor() {
    this.property = 'is not enumerable';
  }
  
  firstConstructor.prototype.firstMethod = function() {};
  
  function secondConstructor() {
    this.method = function method() { return 'is enumerable'; };
  }
  
  secondConstructor.prototype = new firstConstructor;
  secondConstructor.prototype.constructor = secondConstructor;
  
  let o = new secondConstructor();
  o.arbitraryProperty = 'is enumerable';
  
  o.propertyIsEnumerable('arbitraryProperty'); // true
  o.propertyIsEnumerable('method'); // true
  o.propertyIsEnumerable('property'); // false
  ```



## Object.prototype.toString

### 1. 语法

::: danger

obj.toString()

:::

返回值：

一个表示该对象的字符串。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

- overriding the default toString method

  ```js
  const o = {};
  o.toString(); // [object Object]
  
  function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  
  Dog.prototype.toString = function dogToString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
  
  theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
  theDog.toString(); // Dog Gabby is a female chocolate Lab
  ```

- using toString to detect object class

  ```js
  Object.prototype.toString.call(new Date); // [object Date]
  Object.prototype.toString.call(new String); // [object String]
  Object.prototype.toString.call(Math); // [object Math]
  Object.prototype.toString.call(undefined); // [object Undefined]
  Object.prototype.toString.call(null); // [object Null]
  ```



## Object.prototype.toLocaleString

### 1. 语法

::: danger

obj.toLocaleString()

:::

返回值：

一个表示该对象的字符串。

### 2. 描述

toLocaleString 用于派生对象为了特定语言环境的目的而重载使用，例如每个地区的时间表示。

> 个人在日常开发中常用场景：
>
> - 本地化时间。



## Object.prototype.valueOf

### 1. 语法

::: danger

obj.valueOf()

:::

返回值：

返回值为该对象的原始值。

### 2. 描述

默认情况下，valueOf 方法由 Object 后的每个对象继承。每个内置的核心对象都会覆盖该方法以返回适当的值。如果对象，没有原始值，则返回对象本身。

| 对象     | 返回值                                                   |
| -------- | -------------------------------------------------------- |
| Array    | 数组对象本身。                                           |
| Boolean  | 布尔值。                                                 |
| Date     | 存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。 |
| Function | 函数本身。                                               |
| Number   | 数字值。                                                 |
| Object   | 对象本身。                                               |
| String   | 字符串值。                                               |
|          | Math 和 Error 对象没有 valueOf 方法。                    |

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

