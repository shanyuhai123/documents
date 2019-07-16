---
title: Class 的基本语法
---

## 1. 简介

### 类的由来

JavaScript 语言中, 生成实例对象的传统方法是通过构造函数

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);
```

上面这种写法与传统的面向对象语言差异很大, 很容易让新学习这门语言的程序员感到困惑

ES6 提供了更接近传统语言的写法, 引入 Class(类) 这个概念, 作为对象的模板, 通过 class 关键字可以定义类

基本上, ES6 的 class 可以看作只是一个语法糖, 它的绝大部分功能, ES5 都可以做到, 新的 class 写法只是让对象原型的写法更佳清晰, 更像面向对象编程的语法而已, 上面的代码使用 ES6 的 class 改写

 ```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
 ```

上面代码定义了一个 "类", 可以看到里面有一个 `constructor` 方法, 这就是构造方法, 而 `this` 关键字则代表实例对象

也就是说, ES5 的构造函数`Point`, 对应 ES6 的`Point`类的构造方法

`Point` 类除了构造方法, 还定义了一个 `toString` 方法. 注意, 定义 "类" 方法的时候, 前面不需要加上 `function` 关键字, 直接把函数定义进去就可以了, 另外方法之间不需要逗号分隔, 加了回报错

```javascript
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

上面表明, 类的数据类型就是函数, 类本身就指向构造函数

使用的时候, 也是直接对类使用 `new` 命令, 跟构造函数的用法完全一致

```javascript
class Bar {
  doStuff() {
    console.log('stuff');
  }
}

var b = new Bar();
b.doStuff() // "stuff"
```

构造函数的 `prototype` 属性, 在 ES6 的类上继续存在, 事实上, 类所有方法都定义在类的 `prototype` 属性上面

```js
class Point {
  constructor(){
    // ...
  }
  
  toString() {
    // ...
  }
  
  toValue() {
    // ...
  }
}

// 等价于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};

// 等价于, prototype 是一个对象
Point.prototype = {
  constructor: function() {},
  toString: function() {},
  toValue: function() {},
};

```

在类的实例上面调用方法, 实际上就是调用原型上的方法

```javascript
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
```

由于类的方法都定义在 `prototype` 对象上面, 所以类的新方法可以添加在 `prototype` 对象上面, `Object.assign` 方法可以很方便的一次向类添加多个方法

```js
class Point {
  constructor() {
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```

`prototype`对象的`constructor`属性, 直接指向“类”的本身, 这与 ES5 的行为是一致的

```javascript
Point.prototype.constructor === Point // true
```

另外, 类的内部所有定义的方法, 都是不可枚举的

```js
class Ponit {
  constructor(x, y) {
    // ...
  }
  
  toString() {
    // ...
  }
}

Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

这一点与 ES5 的行为不一致

```javascript
var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

上面代码采用 ES5 的写法, `toString` 方法就是可枚举的

### constructor 方法

`constructor` 方法是类的默认方法, 通过 new 命令生成对象实例时, 自动调用该方法

一个类必须有 `constructor` 方法, 如果没有显式定义, 一个空的  `constructor` 方法会被默认添加

```js
class Point {}

// 等价于

class Ponit {
  constructor() {
    
  }
}
```

上面代码中, 定义了一个空的类 `Point` , JavaScript 引擎会自动为它添加一个空的 `constructor` 方法

`constructor` 方法默认返回实例对象(即 `this` ), 完全可以指定返回另外一个对象

```js
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo
// false
```

### 类的实例

生成类的实例的吸入法, 与 ES5 完全一致, 也是使用 `new` 命令

如果忘记加上 `new`, 像函数一样调用 class, 将会报错

```javascript
class Point {
  // ...
}

// 报错
var point = Point(2, 3);

// 正确
var point = new Point(2, 3);
```

与 ES5 一样, 类的实例属性除非显式定义在其本身, 否则都是定义在原型上

```javascript
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```

与 ES5 一样, 类的所有实例共享一个原型对象

```javascript
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
```

### 取值函数 (getter) 和存值函数 (setter)

与 ES5 一样, 在 "类" 的内部可以使用 `get` 和 `set` 关键字, 对某个属性设置存值函数和取值函数, 拦截该属性的存取行为

比如可以完成自加自减, 调用其余函数的方法

```js
class MyClass {
  constructor() {
    
  }
  
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: ' + value);
  }
}
```

存值函数和取值函数是设置在属性的 Descriptor 对象上的

```javascript
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

"get" in descriptor  // true
"set" in descriptor  // true
```

上面代码中, 存值函数和取值函数是定义在`html`属性的描述对象上面, 这与 ES5 完全一致

### 属性表达式

类的属性名, 可以采用表达式

```javascript
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```

### Class 表达式

与函数一样, 类其实也可以使用表达式的形式定义

```javascript
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

需要注意的是, 这个类的名字是 `Me`, 但是 `Me` 只在 Class 的内部可用, 指代当前类. 在 Class 的外部, 这个类只能用 `MyClass` 引用

```javascript
let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
```

上面代码表示, `Me`只在 Class 内部有定义

采用 Class 表达式, 可以写出立即执行的 Class

```js
let person = new class {
  constructor(name) {
    this.name = name;
  }
  
  sayName() {
    console.log(this.name);
  }
}('xiaoming');

person.say(); // 'xiaoming'
```

### 注意点

1. 严格模式

   类和模块的内部, 默认就是严格模式, 所以不需要使用 `use strict` 指定运行模式

   只要你的代码写在类或模块之中, 就只有严格模式可用, 考虑到未来所有的代码, 其实都是运行在模块之中, 所以 ES6 实际上把整个语言升级到了严格模式

2. 不存在提升

   类不存在变量提升, 这一点与 ES5 完全不同

   ```javascript
   new Foo(); // ReferenceError
   class Foo {}
   ```

   上面代码中, `Foo` 类使用在前, 而定义在后, 这样会报错, 因为 ES6 不会把类的声明提升到代码头部, 这种规定的原因与下文要提到的继承有关, 必须保证子类在父类之后定义

   ```javascript
   {
     let Foo = class {};
     class Bar extends Foo {
     }
   }
   ```

   上面的逮捕不会报错, 因为`Bar`继承`Foo`的时候, `Foo`已经有定义了

   如果存在`class`的提升, 上面代码就会报错, 因为`class`会被提升到代码头部

3. name 属性

   由于本质上, ES6 的类只是 ES5 的构造函数的一层封装, 所以函数的许多特性都被 Class 继承, 包括 `name` 属性

   ```javascript
   class Point {}
   Point.name // "Point"
   ```

4. Generator 方法

   如果在某个方法之前加上星号 `*` , 就表示该方法是一个 `Generator` 函数

   ```javascript
   class Foo {
     constructor(...args) {
       this.args = args;
     }
     * [Symbol.iterator]() {
       for (let arg of this.args) {
         yield arg;
       }
     }
   }
   
   for (let x of new Foo('hello', 'world')) {
     console.log(x);
   }
   // hello
   // world
   ```

   上面代码中, `Foo`类的`Symbol.iterator`方法前有一个星号, 表示该方法是一个 Generator 函数

5. this 的指向

   类的方法内部如果含有 `this` , 它默认指向类的实例, 但是, 必须非常小心, 一旦单独使用该方法, 很可能报错

   ```javascript
   class Logger {
     printName(name = 'there') {
       this.print(`Hello ${name}`);
     }
   
     print(text) {
       console.log(text);
     }
   }
   
   const logger = new Logger();
   const { printName } = logger;
   printName(); // TypeError: Cannot read property 'print' of undefined
   ```

   上面代码中, `printName`方法中的`this`, 默认指向`Logger`类的实例

   但是, 如果将这个方法提取出来单独使用, `this` 会指向该方法运行时所在的环境, 由于 `class` 内部是严格模式, 所以 `this` 实际指向的是 `undefined` , 从而导致找不到 `print` 方法而报错

   一个比较简单的解决方法是, 在构造方法中绑定 `this`, 这样就不会找不到 `print` 方法了

   ```javascript
   class Logger {
     constructor() {
       this.printName = this.printName.bind(this);
     }
   
     // ...
   }
   ```

   另一种解决方法是使用箭头函数

   ```javascript
   class Logger {
     constructor() {
       this.printName = (name = 'there') => {
         this.print(`Hello ${name}`);
       };
     }
   
     // ...
   }
   ```

   还有一种解决方法是使用 `Proxy` , 获取方法的时候, 自动绑定 `this`

   ```javascript
   function selfish (target) {
     const cache = new WeakMap();
     const handler = {
       get (target, key) {
         const value = Reflect.get(target, key);
         if (typeof value !== 'function') {
           return value;
         }
         if (!cache.has(value)) {
           cache.set(value, value.bind(target));
         }
         return cache.get(value);
       }
     };
     const proxy = new Proxy(target, handler);
     return proxy;
   }
   
   const logger = selfish(new Logger());
   ```

## 2. 静态方法

类相当于实例的原型, 所有在类中定义的方法, 都会被实例继承

如果在一个方法前, 加上 `static` 关键字, 就表示该方法不会被实例继承, 而是直接通过类来调用, 这就称为 "静态方法"

```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

上面代码中, `Foo`类的`classMethod`方法前有`static`关键字, 表明该方法是一个静态方法, 可以直接在`Foo`类上调用, 而不是在`Foo`类的实例上调用

如果在实例上调用静态方法, 会抛出一个错误, 表示该方法不存在

注意, 如果静态方法包含 this 关键字, 这个 `this` 指的是类, 而不是实例

```javascript
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello
```

上面代码中, 静态方法 `bar` 调用了 `this.baz`, 这里的 `this` 指的是 `Foo` 类, 而不是 `Foo` 的实例, 等同于调用 `Foo.baz`

从这个例子中还可以看出, 静态方法可以与非静态方法重名

父类的静态方法, 可以被子类继承

```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod() // 'hello'
```

静态方法也是可以从`super`对象上调用的

```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```

## 3. 实例属性的新写法

实例属性除了可以定义在 `constructor` 方法里面的 `this` 上面, 也可以定义在类的最顶层

```javascript
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中, 实例属性 `this._count` 定义在 `constructor` 方法里面

另一种写法是, 这个属性也可以定义在类的最顶部, 其他都不变

```javascript
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中, 实例属性 `_count` 与取值函数 `value` 和 `increment` 方法, 处于同一个层级, 这时, 不需要在实例属性前面加上 `this`

这种新写法的好处是, 所有实例对象自身的属性都定义在类的头部, 看上去比较整齐, 一眼就能看出这个类有哪些实例属性

> 无需实例对象传入即可携带

```javascript
class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    // ...
  }
}
```

## 4. 静态属性

静态属性指的是 Class 本身的属性, 而不是定义在实例对象 `this` 上的属性

```javascript
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

上面的写法为`Foo`类定义了一个静态属性`prop`

目前部分浏览器已经实现了, 在实例属性前面, 增加 `static` 关键字

```javascript
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}
```

这个新写法大大方便了静态属性的表达

```javascript
// 老写法
class Foo {
  // ...
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
}
```

## 5. 私有方法和私有属性

### 现有的解决方案

私有方法和私有属性, 是只能在类的内部访问的方法和属性, 外部不能访问

这是常见需求, 有利于代码的封装, 但 ES6 尚未提供, 只能通过变通方法模拟实现

一种方法是在命名上加以区别

```javascript
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
```

这种命名是不保险的, 在类的外部依然可以调用到这个方法

另一种方法就是索性将私有方法移除模块, 因为模块内部的所有方法都是对外可见的

```javascript
class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}
```

真能够使得 `bar` 实际上成为了当前模块的私有方法

还有一种方法是利用 `Symbol` 值的唯一性, 将私有方法的名字命名为一个  `Symbol` 值

```javascript
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

上面代码中, `bar`和`snaf`都是`Symbol`值, 一般情况下无法获取到它们, 因此达到了私有方法和私有属性的效果

但是也不是绝对不行, `Reflect.ownKeys()`依然可以拿到它们

```javascript
const inst = new myClass();

Reflect.ownKeys(myClass.prototype)
// [ 'constructor', 'foo', Symbol(bar) ]
```

上面代码中, Symbol 值的属性名依然可以从类的外部拿到

### 私有属性的提案

目前, 有一个提案, 为 class 提供了私有属性

方法是在属性名之前, 使用 `#` 表示

```javascript
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
```

上面代码中, `#count` 就是私有属性, 只能在类的内部使用

如果在类的外部使用, 就会报错

```javascript
const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错
```

另外一个例子

```javascript
class Point {
  #x;

  constructor(x = 0) {
    this.#x = +x;
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = +value;
  }
}
```

上面代码中, `#x` 就是私有属性, 在 Point 类之外是读取不到这个属性的, 由于 `#` 是属性名的一部分, 使用时必须带有 `#` 一起使用,  所以 `#x` 和 `x` 是两个不同的属性

之所以要引入一个新的前缀 `#` 表示私有属性, 而没有采用 `private` 关键字, 是因为 JavaScript 是一门动态语言, 没有声明类型, 使用独立的符号似乎是唯一的比较方便可靠的方法, 能够准确的区分一种语言是否为私有属性

Ruby 语言使用 `@` 表示私有属性, ES6 没有用这个符号而使用 `#`, 是因为 `@` 已经被留给了 `Decorator`

这种写法不仅可以写私有属性,  还可以用来写私有方法

```javascript
class Foo {
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }
  #sum() {
    return #a + #b;
  }
  printSum() {
    console.log(this.#sum());
  }
}
```

另外, 私有属性也可以设置 `getter` 的 `setter` 方法

```javascript
class Counter {
  #xValue = 0;

  constructor() {
    super();
    // ...
  }

  get #x() { return #xValue; }
  set #x(value) {
    this.#xValue = value;
  }
}
```

上面代码中, `#x` 是一个私有属性, 它的读写都通过 `get #x()` 和 `set #x()` 来完成

私有属性不限于从 `this` 上引用, 只要是在类的内部, 实例也可以引用私有属性

```javascript
class Foo {
  #privateValue = 42;
  static getPrivateValue(foo) {
    return foo.#privateValue;
  }
}

Foo.getPrivateValue(new Foo()); // 42
```

私有属性和私有方法前, 也可以加上 `static` 关键字, 表明这是一个静态的私有属性或私有方法

```javascript
class FakeMath {
  static PI = 22 / 7;
  static #totallyRandomNumber = 4;

  static #computeRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }

  static random() {
    console.log('I heard you like random numbers…')
    return FakeMath.#computeRandomNumber();
  }
}

FakeMath.PI // 3.142857142857143
FakeMath.random()
// I heard you like random numbers…
// 4
FakeMath.#totallyRandomNumber // 报错
FakeMath.#computeRandomNumber() // 报错
```

上面代码中, `#totallyRandomNumber`是私有属性, `#computeRandomNumber()`是私有方法, 只能在`FakeMath`这个类的内部调用, 外部调用就会报错

## 6. new.target 属性

`new` 是从构造函数生成实例对象的命令. ES6 为 `new` 命令引入了一个 `new.target` 属性, 该属性一般用在构造函数之中, 返回 `new` 命令作用于的哪个构造函数

如果构造函数不是通过 `new` 命令或 `Reflect.construct()` 调用的, `new.target` 会返回 `undefined`, 因此这个属性可以用来确定构造函数是怎么调用的

```javascript
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
```

Class 内部调用 `new.target` , 返回当前 class

```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

var obj = new Rectangle(3, 4); // 输出 true
```

需要注意的是, 子类继承父类时, `new.target` 会返回子类

```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, width);
  }
}

var obj = new Square(3); // 输出 false
```

利用这个特点, 可以写出不能独立使用, 必须继承后才能使用的类

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```