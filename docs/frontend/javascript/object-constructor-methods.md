---
title: Object 构造函数方法
---

## Object.assign

### 1. 语法

::: danger

Object.assign(target, ...sources)

:::

参数：

+ target：目标对象；

+ sources：源对象。

返回值：

目标对象。

### 2. 描述

assign 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，如果目标对象中的属性具有相同的键，则属性将被源对象（后一级覆盖前一级）中的属性覆盖。

> 个人在日常开发中常用场景：
>
> + 合并默认的配置文件。

### 3. 示例

+ cloning an object

  ```js
  let obj = {a: 1};
  
  Object.assign({}, obj); //  { a: 1 }
  ```

+ warning for deep clone

  ```js
  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1); // { a: 0, b: { c: 0}}
  
  obj1.a = 1;
  // obj1 { a: 1, b: { c: 0}}
  // obj2 { a: 0, b: { c: 0}}
  
  obj2.b.c = 3;
  // obj1 { a: 1, b: { c: 3}}
  // obj2 { a: 0, b: { c: 3}}
  ```

+ merging objects

  ```js
  let o1 = {a: 1};
  const o2 = { b: 2 };
  const o3 = { c: 3 };
  
  Object.assign(o1, o2, o3); //  { a: 1, b: 2, c: 3 }
  ```

+ merging objects with same properties

  ```js
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };
  
  Object.assign({}, o1, o2, o3); // { a: 1, b: 2, c: 3 }
  ```

+ copying symbol-typed properties

  ```js
  const o1 = {a: 1};
  const o2 = {[Symbol('foo')]: 2};
  const obj = Object.assign({}, o1, o2); //  { a : 1, [Symbol("foo")]: 2 }
  Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
  ```

+ properties on the prototype chain and non-enumerable properties cannot be copied

  ```js
  const obj = Object.create({ foo: 1}, { // foo 是个继承属性
    bar: {
      value: 2
    },
    baz: {
      value: 3,
      enumerable: true
    }
  });
  
  Object.assign({}, obj); // { baz: 3 }
  ```

+ primitives will be wrapped to objects

  ```js
  const v1 = 'abc';
  const v2 = true;
  const v3 = 10;
  const v4 = Symbol('foo');
  
  Object.assign({}, v1, null, v2, undefined, v3, v4);  // { "0": "a", "1": "b", "2": "c" }
  ```

+ exceptions will interrupt the ongoing copying task

  ```js
  let target = Object.defineProperty({}, "foo", {
      value: 1,
      writable: false
  });
  Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4}); // TypeError: "foo" is read-only
  // 异常会打断后续拷贝，不影响之前的
  // target {bar: 2, foo2: 3, foo: 1}
  ```

+ copying accessors

  ```js
  const obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  Object.assign({}, obj); // { foo: 1, bar: 2 }
  
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
      
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      
      Object.defineProperties(target, descriptors);
    });
    
    return target;
  }
  
  completeAssign({}, obj); // { foo:1, get bar() { return 2 } }
  ```



## Object.create

### 1. 语法

::: danger

Object.create(proto[, propertiesObject])

:::

参数：

- proto：新创建对象的原型对象；

- propertiesObject：如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。

返回值：

一个新对象，带着指定的原型对象和属性。

### 2. 描述

create 方法创建一个新对象，使用现有的对象来提供新创建的对象的 `__proto__`。

> 个人在日常开发中常用场景：
>
> - 常用于 Object.create(null)。

### 3. 示例

+ classical ingeritance with Object.create()

  ```js
  function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log('Shape moved.');
  }
  
  function Rectangle() {
    Shape.call(this);
  }
  
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  const rect = new Rectangle();
  rect instanceof Rectangle; // true
  rect instanceof Shape; // true
  rect.move(1, 1); // 'Shape moved.'
  ```

+ using propertiesObject argument with Object.create()

  ```js
  let o;
  o = Object.create(null);
  
  o = {};
  // 等价于
  o = Object.create(Object.prototype);
  
  o = Object.create(Object.prototype, {
    // foo 会成为所创建对象的数据属性
    foo: {
      writable: true,
      configurable: true,
      value: 'hello'
    },
    // bar 会成为所创建对象的访问器属性
    bar: {
      configurable: false,
      get: function() { return 10; },
      set: function(value) {
        console.log('Setting `o.bar` to', value);
      }
    }
  });
  
  o = Object.create({}, { p: { value: 42 } })
  o.p = 24; // 42
  o.q = 12;
  for (var prop in o) {
    console.log(prop); // 'q'
  }
  delete o.p; // false
  ```



## Object.defineProperty

### 1. 语法

::: danger

Object.defineProperty(obj, prop, descriptor)

:::

参数：

- obj：要在其上定义属性的对象；
- prop：要定义或修改的属性的名称；
- descriptor：将被定义或修改的属性描述符。

返回值：

 传递给函数的对象。

### 2. 描述

defineProperty 方法会直接再一个对象上定义一个新的属性，或者修改一个对象的现有属性，并返回这个对象。

属性描述符主要有两种形式，数据描述符、存取描述符：

| 属性描述符   | 描述                                                         |           |
| ------------ | ------------------------------------------------------------ | --------- |
| configurable | 当且仅当该属性值为 true 时，该属性描述符才能被改变，同时该属性也能从对应的对象上被删除。 | false     |
| enumerable   | 当且仅当该属性值为 true 时，该属性才能出现再对象的枚举属性中。 | false     |
| value        | 该属性对应的值。                                             | undefined |
| writable     | 当且仅当该属性值为 true 时，value 才可以被赋值运算符改变。   | false     |
| get          | 给属性提供的 getter 方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行。 | undefined |
| set          | 给属性提供的 setter 方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。 | undefined |

> 个人在日常开发中常用场景：
>
> - 较少使用。

### 3. 示例

+ creating a property

  ```js
  let o = {};
  
  Object.defineProperty(o, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
  });
  
  const bValue = 38;
  Object.defineProperty(o, 'b', {
    get() { return bValue; },
    set(newValue) { bValue = newValue; },
    enumerable: true,
    configurable: true
  });
  o.b; // 38
  ```

+ adding properties and default values

  ```js
  Object.defineProperty(o, 'a', { value: 1 });
  // 等价于
  Object.defineProperty(o, 'a', {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: false
  });
  ```

+ custom setters and getters

  ```js
  function Archiver() {
  	const temperature = null;
    let archive = [];
    
    Object.defineProperty(this, 'temperature', {
      get() {
        console.log('get');
        return temperature;
      },
      set(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });
    
    this.getArchive = function() { return archive; };
  }
  
  let arc = new Archiver();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  arc.getArchive(); // [{ val: 11 }, { val: 13 }]
  ```

+ inheritance of properties

  ```js
  function myClass() {}
  let value;
  
  Object.defineProperty(myClass.prototype, 'x',  {
    get() {
      return value;
    },
    set(x) {
      value = x;
    }
  });
  
  let a = new myclass();
  let b = new myclass();
  a.x = 1;
  b.x; // 1
  ```



## Object.defineProperties

### 1. 语法

::: danger

Object.defineProperties(obj, props)

:::

参数：

- obj：在其上定义或修改属性的对象；
- props：要定义或修改的属性的名称。
  + configurable：可配置；
  + enumerable：可枚举；
  + value：与属性关联的值；
  + wriable：可修改；
  + get：该属性的 getter 函数；
  + set：该属性的 setter 函数。

返回值：

传递给函数的对象。

### 2. 描述

Object.defineProperty 的复数形式。



## Object.entries

### 1. 语法

::: danger

Object.entries(obj)

:::

参数：

- obj：可以返回其可枚举属性的键值对的对象。

返回值：

给定对象自身可枚举属性的键值对数组。

### 2. 描述

entries 方法返回一个给定对象自身可枚举属性的键值对数组，其排列顺序与 `for...in` 一致，区别是 `for...in` 循环可枚举原型链中的属性。

>  个人在日常开发中常用场景：
>
> - 常用于对象转为数组。

### 3. 示例

+ normal

  ```js
  const obj = { foo: 'bar', baz: 42 };
  Object.entries(obj); // [ ['foo', 'bar'], ['baz', 42] ]
  
  const obj = { 0: 'a', 1: 'b', 2: 'c' };
  Object.entries(obj); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
  
  // ordering
  const obj = { 100: 'a', 2: 'b', 7: 'c' };
  Object.entries(obj); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
  
  const obj = Object.create({}, { getFoo: { value() { return this.foo; } } });
  obj.foo = 'bar';
  Object.entries(obj); //  [ ['foo', 'bar'] ]
  
  Object.entries('foo'); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
  ```

+ converting an Object to a Map

  ```js
  const obj = { foo: 'bar', baz: 42 }; 
  new Map(Object.entries(obj)); //  {"foo" => "bar", "baz" => 42}
  ```



## Object.fromEntries

### 1. 语法

::: danger

Object.fromEntries(iterable)

:::

参数：

- iterable：可迭代对象。

返回值：

一个由该迭代对象条目提供对应属性的新对象。

### 2. 描述

Object.entries 方法的反转，将键值对列表转为一个对象。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ converting a Map to an Object

  ```js
  const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
  Object.fromEntries(map); // { foo: "bar", baz: 42 }
  ```

+ converting an Array to an Object

  ```js
  const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
  Object.fromEntries(arr); // { 0: "a", 1: "b", 2: "c" }
  ```



## Object.keys

### 1. 语法

::: danger

Object.keys(obj)

:::

参数：

- obj：要返回其枚举自身属性的对象。

返回值：

给定对象的所有可枚举属性的字符串数组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 常用于获取表格数组的 keys。

### 3. 示例

+ normal

  ```js
  const arr = ['a', 'b', 'c'];
  Object.keys(arr); // ['0', '1', '2']
  
  const obj = { 0: 'a', 1: 'b', 2: 'c' };
  Object.keys(obj); // ['0', '1', '2']
  
  // ordering
  const obj = { 100: 'a', 2: 'b', 7: 'c' };
  Object.keys(obj); // ['2', '7', '100']
  ```



## Object.values

### 1. 语法

::: danger

Object.values(obj)

:::

参数：

- obj：要返回其枚举自身属性的对象。

返回值：

给定对象的所有可枚举属性值的字符串数组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 相对于 keys 较少使用。

### 3. 示例

+ normal

  ```js
  const obj = { foo: 'bar', baz: 42 };
  Object.values(obj); // ['bar', 42]
  
  const obj = { 0: 'a', 1: 'b', 2: 'c' };
  Object.values(obj); // ['a', 'b', 'c']
  
  // ordering
  const obj = { 100: 'a', 2: 'b', 7: 'c' };
  Object.values(obj); // ['b', 'c', 'a']
  ```

