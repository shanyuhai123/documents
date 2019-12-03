---
title: 原型链
---

## 原型

每一个 JavaScript 对象（null 除外）都和另一个对象相关联。“另一个” 对象即我们所熟知的原型，每一个对象都从原型继承属性。

所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过 `Object.prototype` 获得对原型对象的引用。通过关键字 `new` 和构造函数调用创建的对象的原型就是构造函数的 prototype 属性的值。因此，同使用字面量创建对象一样，通过 `new Object` 创建的对象也继承自 `Object.prototype`。这一系列链接的原型对象就是所谓的 “原型链（prototype chain）”。

> 可通过 `Object.getPrototypeOf()` 查询对象的原型。

## 原型的继承

对象除了 “自有属性（own property）”，还有一些属性是从原型对象继承来的。

属性访问细节：假设要查询对象 o 的属性 x，如果 o 中不存在 x，那么会继续在 o 的原型对象中查询属性 x。如果原型对象中也没有 x，但这个原型对象也有原型，那么继续在这个原型对象的原型上查询，直到找到 x 或者查找到一个原型是 null 的对象为止。由上可知，对象的原型属性构成了一个 “链”，通过这个 “链” 可以实现属性的继承。

> “继承” 意味着拷贝操作，而 JavaScript 补考呗对象属性。相反，JavaScript 在两个对象之间建立链接，一个对象实质上可以将对象、函数的访问 “委托” 到另一个对象上。

### 1. 小心继承

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



## 原型链

每个函数都有一个 `prototype` 属性，其指向一个对象，而这个对象就是函数（构造函数）创建的实例的原型；而每个对象都有一个 `__proto__` 属性，除了 null（虽然 `typeof null` 为 `object`，但这是一个错误结果），这个属性会指向该对象的原型：

```js
function Foo() {}

const f1 = new Foo();
f1.__proto__ === Foo.prototype; // true
Object.getPrototypeOf(foo) === Foo.prototype; // true
```

因为一个构造函数可以 `new` 出多个实例，很明显不存在原型指向实例，仅存在原型通过 `constructor` 指向构造函数：

```js
Foo.prototype.constructor === Foo; // true
```

在继承中了解到，查找属性时会顺着原型链一直找，直到 null。而原型也是个对象，那么它指向谁呢，可以利用 `Object` 创建最基础的对象：

```js
Foo.prototype.__proto__ === Object.prototype; // true
Foo.prototype.__proto__.constructor === Object; // true
```

而 `Object` 的原型往上则是 null 了，毕竟路是有“终点”的：

```js
Object.prototype.__proto__ === null; // true
```

<img :src="$withBase('/frontend/javascript/prototype-chains.jpg')" alt="prototype-chains">

### 1. 存在的问题

```js
Function instanceof Object; // true
Object instanceof Function; // true
```

那究竟是谁在更上一层级呢？在规范中虽言及 ”函数是可调用的对象“，但个人认为它们是同时出现的：

```js
Object.getPrototypeOf(Function) === Object.getPrototypeOf(Object); // true
```

更进一步：

```js
Function.__proto__ === Function.prototype; // true
Object.__proto__ === Function.prototype; // true
Foo.__proto__ === Function.prototype; // true
```

<img :src="$withBase('/frontend/javascript/prototype-chains-function.jpg')" alt="prototype-chains-function">