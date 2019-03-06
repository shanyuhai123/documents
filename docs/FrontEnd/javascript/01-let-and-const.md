---
title: let 和 const 命令
---

## 1. let 命令

### 基本用法

`let` 命令可以用来声明变量, 用法类似 `var`, 但是所声明的变量, 只在 `let` 命令所在的代码块内有效

### 不存在变量提升

`var`命令会发生”变量提升“现象, 即变量可以在声明之前使用, 值为`undefined`. 这种现象多多少少是有些奇怪的, 按照一般的逻辑, 变量应该在声明语句之后才可以使用

为了纠正这种现象, `let`命令改变了语法行为, 它所声明的变量一定要在声明后使用, 否则报错

> 这其实应该是一个疑问句
>
> 在发生 暂时性锁区时就应该算作 变量提升了

### 暂时性锁区(TDZ)

只要块级作用域内存在 `let` 命令, 它所声明的变量就绑定这个区域, 不再受外部影响

ES6 明确规定, 如果区块中存在 `let` 和 `const` 命令, 这个区块对这些命令声明的变量, 从一开始就形成了封闭作用域, 凡是在声明之前就使用这些变量, 就会报错(`typeof` 操作符失去了安全性)

有些“死区”比较隐蔽，不太容易发现

```javascript
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
// 上面代码中，调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“

let x = x;
// ReferenceError: x is not defined
// 使用let声明变量时，只要变量在还没有声明完成前使用，就会报错
```

### 不允许重复声明

`let` 不允许在相同作用域内，重复声明同一个变量

```javascript
function func(arg) {
  let arg; // 报错
}
```



## 2. 块级作用域

### 为什么需要块级作用域

`ES5` 只有全局作用域和函数作用域, 这带来了很多不合理的场景

+ 场景一, 内层变量可能会覆盖掉外层变量

  ```javascript
  var tmp = new Date();
  
  function f() {
    console.log(tmp);
    if (false) {
      var tmp = 'hello world';
    }
  }
  
  f(); // undefined
  ```

+ 场景二, 用来计数的循环变量泄露为全局变量

  ```javascript
  var s = 'hello';
  
  for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
  
  console.log(i); // 5
  ```

### ES6 的块级作用域

`let`实际上为 JavaScript 新增了块级作用域

外层代码不收内层代码块的影响  

内层作用域可以定义外层作用域的同名变量 

块级作用域的出现使获得广泛应用的立即执行函数表达式 (`IIFE`) 不再必要了

```javascript
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```

### 块级作用域与函数声明

ES5 规定, 函数只能在顶层作用域和函数作用于之中声明, 不能在块级作用域声明

```javascript
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}
```

**但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错**

ES6 引入了块级作用域, 明确允许在块级作用域之中声明函数

所以导致 ES6 环境下会产生错误, 浏览器中为了兼容存在以下行为方式

1. 允许在块级作用域内声明函数
2. 函数声明类似于 `var` , 即会提升到全局作用域或函数作用域的头部
3. 同时, 函数声明还会提升到所在块级作用域的头部

```javascript
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
// 上面的代码在 ES6 的浏览器中会报错, 是因为实际运行的是以下代码
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }
(function () {
  var f = undefined;
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
```

所以一般尽量避免使用函数声明, 尽量使用函数表达式更好

> ES6 的块级作用域允许函数声明, 仅在使用大括号的情况下成立



```javascript
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}
```

## 3. const 命令

### 基本用法

`const` 声明一个只读的常量, 一旦声明, 常量的值就不能改变

这意味着 `const` 一旦声明变量, 就必须立即初始化, 不能留到之后赋值

`const` 同样具有 `let` 的特性

### 本质

`const` 实际上保证的, 并不是变量的值不得改动, 而是变量指向的哪个内存地址所保存的数据不得改动

对于简单类型的数据(`String` , `	Number` , `Boolean`) , 值就保存在变量执行的那个内存地址, 因此等同于常量

但对于复合类型的数据(`Object` , `Array`) , 变量指向的内存地址, 保存的只是一个指向实际数据的指针, `const` 只能保证这个指针是固定的(总是指向一个固定的地址) , 至于它指向的数据结构是不是可变的, 就完全不能控制了

若想将对象冻结, 应该使用 `Object.freeze` 方法

```javascript
let constantize = (obj) => {
  Object.freeze(obj);
  // 除了将对象本身冻结, 对象的属性也应该冻结
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      // 递归处理
      constantize( obj[key] );
    }
  });
};
```

### ES6 声明变量的六种方法

ES5 只有两种声明变量的方法: `var` , `function`

ES6 新增了四种: `let` , `const` , `class` , `import`

## 4. 顶层对象的属性

顶层对象, 在浏览器环境指的是 `window` 对象, 在 Node 中指的是 `global` 对象

> 顶层对象的属性与全局变量挂钩被认为是 `JavaScript` 语言最大的设计败笔之一

**在 ES5 之中, 顶层对象的属性与全局变量是等价的**

<img :src="$withBase('/FrontEnd/javascript/es6_20190112123602.png')" alt="顶层对象">

可以看到我们修改全局变量 `b` 时, `window.b` 也被修改了

**ES6 为了改变这一点**

一方面规定, 为了保持兼容性, `var` 和 `const` 命令声明的全局变量, 依旧是顶层对象

另一方面规定, `let` , `const` 和 `class` 命令声明的全局变量补数据顶层对象的属性, 也就是说从 ES6 开始, 全局变量将逐步与顶层对象的属性脱钩 

<img :src="$withBase('/FrontEnd/javascript/es6_20190112124206.png')" alt="let">

## 5. global 对象

ES5 的顶层对象, 本身也是一个问题, 因为它在各种实现里面是不统一的

+  浏览器里面, 顶层对象是 `window` , 但 Node 和 Web Worker 没有 `window`
+ 浏览器和 Web Worker 里面, `self` 也指向顶层对象, 但是 Node 没有 `self`
+ Node 里面, 顶层对象是 `global` , 但其他环境都不支持

同一段代码为了能够在各种环境, 都能取到顶层对象, 现在一般是使用 `this` 变量, 但是也有局限性

+ 全局环境中, `this` 会返回顶层对象. 但是, Node 模块和 ES6 模块中, `this` 返回的是当前模块
+ 函数里面的 `this` , 如果函数不是作为对象的方法运行, 而是作为函数运行, `this`  会指向当前顶层对象. 但是严格模式下, 这时 `this` 会返回 `undefined`
+ 不管是严格模式还是普通模式, `new Function('return this')()` 总是会返回全局对象. 但如果浏览器开启了 `CSP(内容安全策略)`  , 那么 `eval` , `new Function` 这些方法都可能无法使用

