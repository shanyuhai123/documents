---
title: 箭头函数
---

## 介绍

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 `this`、`arguments`、`super` 和 `new.target`。箭头函数更适用于本来应该需要匿名函数的地方，并且它们不能用作构造函数。



> 因为箭头函数没有 `prototype`，所以箭头函数本身没有 `this`。



## 注意事项

### 1. 返回对象

```js
const foo = () => ({ bar: 'baz' });
```

由于大括号会被解释为代码块，所以利用箭头函数直接返回一个对象时，需要用小括号包裹。

### 2. 禁止构造函数

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
```

### 3. 对象方法

```js
const foo = {
  bar: 'baz',
  baz: () => this.bar = 'foo'
}

foo.baz(); // foo.bar: 'baz' window.bar: 'foo'
```

箭头函数会继承父级作用域的 `this`，而对象没有作用域，此时 `this` 指向全局作用域（window）。



## 日常使用

### 1. 闭包

```js
const add = (i = 0) => {return () => ++i};
const increase = add();
increase(); // 1
increase(); // 2
```

