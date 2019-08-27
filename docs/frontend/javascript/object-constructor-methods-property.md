---
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
