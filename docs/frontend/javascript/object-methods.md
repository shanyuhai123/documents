---
title: 对象方法
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





