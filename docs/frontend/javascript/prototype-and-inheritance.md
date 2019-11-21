---
title: 原型和继承
---

## 概念

### 1. 原型

每一个 JavaScript 对象（null 除外）都和另一个对象相关联。“另一个” 对象即我们所熟知的原型，每一个对象都从原型继承属性。

所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过 `Object.prototype` 获得对原型对象的引用。通过关键字 `new` 和构造函数调用创建的对象的原型就是构造函数的 prototype 属性的值。因此，同使用字面量创建对象一样，通过 `new Object` 创建的对象也继承自 `Object.prototype`。这一系列链接的原型对象就是所谓的 “原型链（prototype chain）”。

> 可通过 `Object.getPrototypeOf()` 查询对象的原型。

### 2. 继承

对象除了 “自有属性（own property）”，还有一些属性是从原型对象继承来的。

属性访问细节：假设要查询对象 o 的属性 x，如果 o 中不存在 x，那么会继续在 o 的原型对象中查询属性 x。如果原型对象中也没有 x，但这个原型对象也有原型，那么继续在这个原型对象的原型上查询，直到找到 x 或者查找到一个原型是 null 的对象为止。由上可知，对象的原型属性构成了一个 “链”，通过这个 “链” 可以实现属性的继承。

> “继承” 意味着拷贝操作，而 JavaScript 补考呗对象属性。相反，JavaScript 在两个对象之间建立链接，一个对象实质上可以将对象、函数的访问 “委托” 到另一个对象上。



## 小心操作

```js
var anotherObject = {
	a: 2
};

var myObject = Object.create(anotherObject);

anotherObject.a; // 2
myObject.a; // 2

anotherObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("a"); // false

myObject.a++; // oops, implicit shadowing!

anotherObject.a; // 2
myObject.a; // 3

myObject.hasOwnProperty("a"); // true
```

虽然 `myObject.a++` 看起来应当通过委托查询并原地递增 `anotherObject.a` 的属性，但 `++` 操作符实际上等价于 `myObject.a = myObject.a + 1`，导致为 `myObject` 增加了 `a` 属性。



