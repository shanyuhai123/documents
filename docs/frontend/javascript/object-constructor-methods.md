---
autoGroup-1: 对象方法
title: 对象的构造函数方法
---

## 对象类型

在 ES5 时存在三种：

1. `native object`（原生对象），指语义完全由规范定义且不掺杂任何宿主环境定义的对象。
2. `built-in object` （内置对象），如 Math、Date 等。
3. `host object` （宿主对象），由执行环境提供，如浏览器的 window 和 V8 的 global。

而 ES6 时划分更细，更新为四种：

1. `ordinary object` （普通对象），需要具备了对象的所有基本内置方法。
2. `exotic object` （外来对象），与“普通对象”相反，所以一个对象不是“普通对象”，就是“外来对象”。
3. `standard object` （标准对象），规范定义的对象（？）。
4. `built-in object` （内置对象），同 ES5。



## Object.is

### 1. 语法

::: danger

Object.is(obj1, obj2)

:::

参数：

- obj1：第一个需要比较的值；
- obj2：第二个需要比较的值。

返回值：

返回两个参数是否相等的布尔值。

### 2. 描述

is 方法判断两个值是否相等，`==` 运算符会做隐式类型转换，而该方法不会；`===` 会将数字 `+0` 和 `-0` 视为相等，并认为 `NaN` 不等于 `NaN`。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  Object.is('foo', 'foo');     // true
  Object.is(window, window);   // true
  
  Object.is('foo', 'bar');     // false
  Object.is([], []);           // false
  
  var foo = { a: 1 };
  var bar = { a: 1 };
  Object.is(foo, foo);         // true
  Object.is(foo, bar);         // false
  
  Object.is(null, null);       // true
  
  // Special Cases
  Object.is(0, -0);            // false
  Object.is(-0, -0);           // true
  Object.is(NaN, 0/0);         // true
  ```



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



## Object.getPrototypeOf

### 1. 语法

::: danger

Object.getPrototypeOf(obj)

:::

参数：

- obj：要返回其原型的对象。

返回值：

给定对象的原型。如果没有继承属性，则返回 null 。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const proto = {};
  const obj = Object.create(proto);
  Object.getPrototypeOf(obj) === proto; // true
  ```



## Object.setPrototypeOf

### 1. 语法

::: danger 警告

Object.setPrototypeOf(obj, prototype)

:::

参数：

- obj：要设置其原型的对象；
- prototype：该对象的新原型(一个对象 或 null)。

### 2. 描述

setPrototypeOf 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。

::: danger

由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]`在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。

:::

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const dict = Object.setPrototypeOf({}, null);
  ```



## 对象其余构造方法

将一些关联性较强的构造方法迁移出：

+ [冻结方法](/frontend/javascript/object-constructor-methods-freeze)；
+ [属性方法](/frontend/javascript/object-constructor-methods-property)。