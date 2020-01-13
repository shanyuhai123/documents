---
autoGroup-1: 对象方法
title: 对象构造函数冻结方法
---

## Object.freeze

### 1. 语法

::: danger

Object.freeze(obj)

:::

参数：

- obj：要被冻结的对象。

返回值：

被冻结的对象。

### 2. 描述

冻结对象自身的所有属性都不可能以任何方式被修改，该方法返回传递的对象，而不是创建一个被冻结的副本。

需要注意的是，这是浅冻结。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ freezing objects

  ```js
  const obj = {
  	prop: function() {},
    foo: 'bar'
  };
  
  Object.freeze(obj);
  Object.isFrozen(obj); // true
  
  obj.foo = 'foo';
  obj; // {prop: ƒ, foo: "bar"}
  ```

+ freezing arrays

  ```js
  const a = [0];
  Object.freeze(a);
  ```

+ freezing is shallow

  ```js
  const obj = {
    foo: {}
  };
  
  Object.freeze(obj);
  Object.isFrozen(obj); // true
  
  obj.foo.bar = 'hi';
  obj; // {foo: {bar: 'hi'}}
  ```



## Object.isFrozen

### 1. 语法

::: danger

Object.freeze(obj)

:::

参数：

- obj：被检测的对象。

返回值：

返回是否被冻结的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  Object.isFrozen({}); // false
  
  const obj = { foo: 'bar' };
  Object.isFrozen(obj); //false
  ```



## Object.preventExtensions

### 1. 语法

::: danger

Object.preventExtensions(obj)

:::

参数：

- obj：将要变得不可扩展的对象。

返回值：

已经不可扩展的对象。

### 2. 描述

描述即返回值。

需要注意的是不可扩展但是可以删除。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  let obj = {foo: 'bar'};
  
  Object.isExtensible(obj); // true
  Object.preventExtensions(obj);
  Object.isExtensible(obj); // false
  
  obj.bar = 'foo';
  obj; // {foo: 'bar'}
  delete obj.foo;
  obj; // {}
  ```



## Object.isExtensible

### 1. 语法

::: danger

Object.isExtensible(obj)

:::

参数：

- obj：需要检测的对象。

返回值：

返回给定对象是否可扩展的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const empty = {};
  Object.isExtensible(empty); // true
  
  Object.preventExtensions(empty);
  Object.isExtensible(empty); // false
  
  const sealed = Object.seal({});
  Object.isExtensible(sealed); // false
  
  const frozen = Object.freeze({});
  Object.isExtensible(frozen); // false
  ```



## Object.seal

### 1. 语法

::: danger

Object.isExtensible(obj)

:::

参数：

- obj：需要检测的对象。

返回值：

返回给定对象是否可扩展的布尔值。

### 2. 描述

相对于 preventExtensions 不可删除属性，即不可配置；相对于 freeze 可修改。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const obj = {
    prop: function() {},
    foo: 'bar'
  };
  
  Object.seal(obj);
  Object.isSealed(obj); // true
  delete obj.foo;
  obj; // {prop: f, foo: 'bar'}
  ```



## Object.isSealed

### 1. 语法

::: danger

Object.isSealed(obj)

:::

参数：

- obj：要被检查的对象。

返回值：

返回给定对象是否密封的布尔值。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const sealed = {
    foo: 'bar'
  };
  
  Object.seal(sealed);
  Object.isExtensible(sealed); //false
  Object.isFrozen(sealed); // true
  Object.isSealed(sealed); // true
  ```
