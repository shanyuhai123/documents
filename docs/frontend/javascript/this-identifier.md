---
title: this
---

## 什么是 this

虽然 `this` 可能经常看起来是与 “面向对象模式” 有关的，但在 JavaScript 中 `this` 是一个不同的概念。

`this` 不是指向函数本身，即它不是编写时绑定，而是运行时绑定。

`this` 机制帮助函数以更优雅的方式来隐式 “传递” 一个对象。

```js
function identify() {
	return this.name.toUpperCase();
}

var you = {
	name: "Reader"
};

identify.call(you); // READER
```



## 调用点

为了理解 `this` 绑定，就需要理解调用点（Call-site）：函数在代码中被调用的位置（而非声明位置）。

展示一下调用栈和调用点：

```js
function baz() {
  // 调用栈是: `baz`
  // 我们的调用点是 global scope（全局作用域）

  console.log( "baz" );
  bar(); // <-- `bar` 的调用点
}

function bar() {
  // 调用栈是: `baz` -> `bar`
  // 我们的调用点位于 `baz`

  console.log( "bar" );
  foo(); // <-- `foo` 的调用点
}

function foo() {
  // 调用栈是: `baz` -> `bar` -> `foo`
  // 我们的调用点位于 `bar`

  console.log( "foo" );
}

baz(); // <-- `baz` 的调用点
```



## this 绑定规则

### 1. 直白的

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
foo.call(obj2);		// "obj2"
new foo();			// undefined
```

规则说明：

1. `foo()` 在非 strict 模式中将 `this` 设置为全局对象，即值为 `global`。在严格模式下 `this` 为 undefined，即无法获取值，将抛出一个 `TypeError`。

2. `obj1.foo()` 将 `this` 设置为对象 `obj1`，即值为 `obj1`。

3. `foo.call(obj2)` 将 `this` 设置为对象 `obj2`，即值为 `obj2`。

4. `new foo()` 将 `this` 设置为一个新的空对象，即值为 undefined。

### 2. 隐式丢失（Implicitly Lost）

当一个隐式绑定丢失了绑定，就会回退到默认绑定：

```js
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // 函数引用！

var a = "oops, global"; // `a` 也是一个全局对象的属性

bar(); // "oops, global"
```

更为常见的是发生在回调函数：

```js
function foo() {
	console.log(this.a);
}

function doFoo(fn) {
	// `fn` 只不过 `foo` 的另一个引用

	fn(); // <-- 调用点!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` 也是一个全局对象的属性

doFoo(obj.foo); // "oops, global"
```



## 词法 this

相对于[直白的](/frontend/javascript/this-and-object-prototypes.html#_1-直白的)中介绍的四种规则，然而 ES6 引入的箭头函数（arrow function）并不适用。

箭头函数从封闭它的（函数或全局）作用域采用 `this` 绑定：

```js
var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

function fooArrow() {
  // 返回一个箭头函数
	return (a) => {
    // 这里的 `this` 是词法上从 `foo()` 采用的
		console.log(this.a);
	};
}

function fooNormal() {
	// 返回一个 function 函数
  return function(a) {
		console.log(this.a);
  }
}

var bar1 = fooArrow.call(obj1);
var bar2 = fooNormal.call(obj1);
bar1.call(obj2); // 2, 不是3!
bar2.call(obj2); // 3
```

