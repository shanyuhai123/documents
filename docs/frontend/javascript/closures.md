---
title: 闭包
---

## 概念

JavaScript 也采用[词法作用域](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope)（Lexical Scope 又称 Static Scope），也就是说，函数的执行依赖于变量作用域，这个作用域是在函数定义时决定的，而不是函数调用时决定的。为了实现这个词法作用域，JavaScript 函数对象的内部状态不仅包含函数的代码逻辑，还必须引用当前的作用域链。函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，这种特性在计算机科学中称为 “[闭包](https://en.wikipedia.org/wiki/Closure_(computer_programming))”，又称为 “词法闭包（Lexical Closure）”。

> 个人理解：
>
> 词法作用域定义了如何解析函数中嵌套的变量名，即使父（函数）已经返回（执行完毕），子函数依然保有父作用域。

从技术角度上来说，所有的 JavaScript 函数都是闭包：它们都是对象，它们都关联到作用域链。定义大多数函数时的作用域链在调用函数时依然有效，但这并不影响闭包。

> 作用域链：作用域链被描述为一个对象列表，而非绑定的栈。

每次调用 JavaScript 函数的时候，都会为之创建一个新的对象用来保存局部变量，把这个对象添加至作用域链中。当函数返回的时候，就从作用域链中将这个绑定变量的对象删除。如果不存在嵌套函数，也没有其他引用指向这个绑定对象，它就会被当做垃圾回收掉。如果定义了嵌套的函数，每个嵌套的函数都各自对应一个作用域链，并且这个作用域链指向一个变量绑定对象。但如果这些嵌套的函数对象在外部函数中保存下来，那么它们也会和所指向的变量绑定对象一样被垃圾回收。但是如果这个函数顶一个嵌套的函数，并将它作为返回值返回或者存储在某处的属性里，这时就会有一个外部引用指向这个嵌套的函数。它就不会被当做垃圾回收，并且它所指向的变量绑定对象也不会被当做垃圾回收。



## 示例

```js
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() { return scope; }
  return f();
}
checkscope(); // local scope

// 稍作修改
function checkscope() {
	var scope = "local scope";
  function f() { return scope; }
  return f;
}
checkscope()(); // local scope
```

