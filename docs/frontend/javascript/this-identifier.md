---
title: this 关键字
---

## 介绍

虽然 `this` 可能经常看起来是与 “面向对象模式” 有关的，但在 JavaScript 中 `this` 是一个不同的概念。

> `this` 不是指向函数本身。



## 示例

```js
function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// --------

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined
```

规则说明：

+ `foo()` 在非 strict 模式中将 `this` 设置为全局对象，即值为 `global`。在严格模式下 `this` 为 undefined，即无法获取值，将抛出一个 `TypeError`。
+ `obj1.foo()` 将 `this` 设置为对象 `obj1`，即值为 `obj1`。
+ `foo.call(obj2)` 将 `this` 设置为对象 `obj2`，即值为 `obj2`。
+ `new foo()` 将 `this` 设置为一个新的空对象，即值为 undefined。

