---
title: 语句和表达式
autoPrev: README
---

> “文法（grammar）”一词不像“语法（syntax）”一词那么为人熟知。

一种常见的现象是，开发者们假定“语句（statement）”和“表达式（expression）”是大致等价的，而实际上在 JavaScript 中它们存在一些非常重要的区别。

借用英语来描述下这种区别：

一个“句子（sentence）”是由一个表达想法的词汇的完整构造。它由一个或多个“短语（phrase）”组成，它们每一个都可以用标点符号或连词连接。一个短语本身可以由更小的短语组成。一些短语是不完整的，而且本身没有太多含义，而另一些短语可以自成一句。

JavaScript 中，语句就是句子，表达式就是短语，而操作符就是连词、标点符号：

```js
// 声明语句（declaration statement）
// 除去 var 为赋值表达式（assignment expression）
var a = 3 * 6;
var b = a;

// 表达式语句（expression statement）
b;
```



## 语句完成值

一个鲜为人知的事实是，所有语句都有完成值（即使这个值知识 `undefined`）。

如何才能看到一个语句的完成值呢？很明显的答案是把语句敲进浏览器的开发控制台，因为当你运行它时，默认地控制台会报告最近一次执行的语句的完成值。

```js
a = 3 * 6; // 完成值：18
var b = a; // 完成值：undefined
```

因为 `var` 在语言规范中定义返回的完成值为 undefined。

> 正常来说，是不能以任何简单的语法/文法捕获一个语句的完成值并将其赋值给另一个变量：
>
> ```js
> var a, b;
> 
> a = if (true) {
> 	b = 4 + 38;
> }; // SyntaxError
> 
> // 但可以利用 eval（evil）实现
> a = eval( "if (true) { b = 4 + 38; }" );
> a; // 42
> ```

### 1. 块级

```js
var b;

if (true) {
	b = 4 + 38;
} // 完成值：42

if (true) {
	var a = b;
} // 完成值：undefined
```

块级的完成值隐式地返回块级中的最后一个语句的完成值。



## 表达式副作用

大多数表达式没有副作用，但一部分除外。

### 1. `++` 操作符

```js
var a = 42;
var b = a++;

a;	// 43
b;	// 42
```

表达式 `a++` 有两个分离的行为。首先，它返回 `a` 的值，也就是 42，然后被赋值给 `b`；其次，它改变 `a` 本身，将它增加 1。

由此可以引申一个新的问题：

```js
var a = 42;
++a++; // SyntaxError: Invalid left-hand side expression in prefix
++42; // SyntaxError: Invalid left-hand side expression in prefix
```

这是由于，`a++` 这部分会先执行，在递增之前会返回值 42，而 `++` 不能直接作用在 `42` 上，因为其等价于 `42 = 42 + 1`。

如果想实现给 `b` 赋值 43，则：

```js
var a = 42;
var b = (a++, a);

a;	// 43
b;	// 43
```

逗号操作符可以之前之前的表达式，并返回最后一个表达式的完成值。

### 2. `=` 操作符

```js
var a;

a = 42;		// 完成值：42
a;

// 链式赋值
var a, b, c;

a = b = c = 42;
a; // 42
b; // 42
c; // 42
```

一个常犯的错误是不提前进行声明：

```js
(function() {
	var a = b = c = 42;
})()

a; // ReferenceError: a is not defined
b; // 42
c; // 42
```

错误的创建了全局变量。