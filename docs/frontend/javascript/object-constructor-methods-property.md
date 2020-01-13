---
autoGroup-1: 对象方法
title: 对象构造函数属性方法
---

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
> - 尚未使用过。

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



## Object.getOwnPropertyDescriptor

### 1. 语法

::: danger

Object.getOwnPropertyDescriptor(obj, prop)

:::

参数：

- obj：需要查找的目标对象；
- prop：目标对象内属性名称。

返回值：

如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。

### 2. 描述

描述即返回值。

需要注意在 ES2015，第一个的参数不是对象的话就会被强制转换为对象。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const o = { get foo() { return 17; } };
  Object.getOwnPropertyDescriptor(o, "foo");
  // {
  //   configurable: true,
  //   enumerable: true,
  //   get: f foo(),
  //   set: undefined
  // }
  
  const o = {bar: 42};
  Object.getOwnPropertyDescriptor(o, "bar");
  // {
  //   configurable: true,
  //   enumerable: true,
  //   value: 42,
  //   writable: true
  // }
  ```



## Object.getOwnPropertyDescriptors

### 1. 语法

::: danger

Object.getOwnPropertyDescriptors(obj)

:::

参数：

- obj：任意对象。

返回值：

所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const obj = {
      foo: 1,
  		get baz() { return 17; }
  };
  Object.getOwnPropertyDescriptors(obj);
  // {
  //   foo: {
  //     configurable: true,
  //     enumerable: true,
  //     value: 1,
  //     writable: true
  //   },
  // 	 baz: {
  //     configurable: true,
  //     enumerable: true,
  //     get: f foo(),
  //     set: undefined
  //    }
  // }
  ```

+ creating a shallow clone

  ```js
  Object.create(
    Object.getPrototypeOf(obj), 
    Object.getOwnPropertyDescriptors(obj) 
  );
  ```

+ creating a subclass

  ```js
  function superclass() {}
  superclass.prototype = {
    // Define your methods and properties here
  };
  function subclass() {}
  subclass.prototype = Object.create(
    superclass.prototype,
    {
      // Define your methods and properties here
    }
  );
  ```



## Object.getOwnPropertyNames

### 1. 语法

::: danger

Object.getOwnPropertyNames(obj)

:::

参数：

- obj：任意对象。

返回值：

返回给定对象可枚举和不可枚举的属性名称。

### 2. 描述

描述即返回值。

 `Object.keys` 方法仅可获取不可枚举属性。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  const arr = ["a", "b", "c"];
  Object.getOwnPropertyNames(arr).sort(); // ["0", "1", "2", "length"]
  
  const obj = { 0: "a", 1: "b", 2: "c"};
  Object.getOwnPropertyNames(obj).sort(); //  ["0", "1", "2"]
  ```



## Object.getOwnPropertySymbols

### 1. 语法

::: danger

Object.getOwnPropertySymbols(obj)

:::

参数：

- obj：任意对象。

返回值：

返回给定对象的所有 Symbol 属性的数组。

### 2. 描述

描述即返回值。

> 个人在日常开发中常用场景：
>
> - 尚未使用过。

### 3. 示例

+ normal

  ```js
  let obj = {};
  const a = Symbol("a");
  const b = Symbol.for("b");
  
  obj[a] = "localSymbol";
  obj[b] = "globalSymbol";
  
  Object.getOwnPropertySymbols(obj); // [Symbol(a), Symbol(b)]
  ```

  