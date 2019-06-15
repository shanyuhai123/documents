---
title: Class 的继承
---

## 1. 简介

Class 可以通过 `extends` 关键字实现继承, 这比 ES5 的通过修改原型链实现继承, 要清晰和方便很多

```javascript
class Point {
}

class ColorPoint extends Point {
}
```

在子类中加上部分代码

```javascript
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

子类必须在 `constructor` 方法中调用 `super` 方法, 否则新建实例时会报错, 这是因为子类自己的 `this` 对象, 必须先通过父类的构造函数完成塑造, 得到与父类同样的实例属性和方法, 然后再对其进行加工, 加上子类自己的实例属性和方法

如果不调用 `super` 方法, 子类就得不到 `this` 对象

```javascript
class Point { /* ... */ }

class ColorPoint extends Point {
  constructor() {
  }
}

let cp = new ColorPoint(); // ReferenceError
```

上面代码中, `ColorPoint` 继承了父类 `Point` , 但是它的构造函数没有调用 `super` 方法, 导致新建实例时报错

ES5 的继承, 实质上是先创造子类的实例对象 `this`, 然后再将父类的方法添加到 `this` 上面

ES6 的继承则完全不同, 实质上是先将父类实例对象的属性和方法, 加到 `this` 上面(所以必须先调用 `super` 方法), 然后再用子类的构造函数修改 `this`

如果子类没有定义 `constructor` 方法, 这个方法会被默认添加, 也就是说, 无论有没有显式定义, 任何一个子类都有 `constructor` 方法

```javascript
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```

另外一个需要注意的是, 在子类的构造函数中, 只有调用 `super` 之后, 才可以 `this` 关键字, 否则会报错

这是因为子类实例的构建, 基于父类实例, 只有 `super` 方法才能调用父类实例

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```

生成子类实例的代码

```javascript
let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint // true
cp instanceof Point // true
```

父类的静态方法也会被子类继承

```javascript
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
```

## 2. Object.getPrototypeOf()

`Object.getPrototypeOf` 方法可以用来从子类上获取父类

```javascript
Object.getPrototypeOf(ColorPoint) === Point
// true
```

因此可以用这个方法判断, 一个类是否继承了另一个类

## 3. super 关键字

`super` 这个关键字, 既可以当作函数使用, 也可以当做对象使用

这两种情况下, 它的用法完全不同

### 作为函数

第一种情况, `super` 作为函数调用时, 代表父类的构造函数. ES6 要求, 子类的构造函数必须执行一次 `super` 函数

```javascript
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```

上面代码中, 子类 `B` 的构造函数之中的 `super()` 代表父类的构造函数, 这是必须的, 否则 JavaScript 引擎会报错

注意, `super` 虽然代表了父类 `A` 的构造含糊, 但是返回的是 `B` 的实例, 即 `super` 内部的 `this` 指的是 `B` 的实例, 因此 `super()` 在这里相当于 `A.prototype.constructor.call(this)`

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B
```

作为函数时, `super()` 只能用在子类的构造函数中, 用在其他地方就会报错

```javascript
class A {}

class B extends A {
  m() {
    super(); // 报错
  }
}
```

### 作为对象

第二种情况, `super` 作为对象时, 在普通方法中, 指向父类的原型对象

在静态方法中, 指向父类

```javascript
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
```

上面代码中, 子类 `B` 当中的 `super.p()` , 就是将 `super` 当作一个对象使用

这时, `super` 在普通方法之中, 指向 `A.prototype` , 所以 `super.p()` 就相当于 `A.prototype.p()`

这里需要注意, 由于 `super` 指向父类的原型对象, 所以定义在父类实例上的方法或属性, 是无法通过 super 调用的

```javascript
class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined
```

如果属性定义在父类的原型对象上, super 就可以取到

```javascript
class A {}
A.prototype.x = 2;

class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}

let b = new B();
```

ES6 规定, 在子类普通方法中通过 `super` 调用父类的方法时, 方法内部的 `this` 指向当前的子类实例

```javascript
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```

上面代码实际执行的是 `super.print.call(this)`

由于 `this` 指向子类实例, 所以如果通过 `super` 对某个属性赋值, 这时 `super` 就是 `this`, 赋值的属性会变成子类实例的属性

```javascript
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```

上面代码中, `super.x` 赋值为 3, 这时等同于对 `this.x` 赋值为 3, 而当读取到 `super.x` 的时候, 读的是 `A.prototype.x` , 所以返回的是 `undefined`

如果`super`作为对象, 用在静态方法之中, 这时`super`将指向父类, 而不是父类的原型对象

```javascript
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```

上面代码中, `super`在静态方法之中指向父类, 在普通方法之中指向父类的原型对象

同理, 在子类的静态方法中通过 `super` 调用父类的方法时, 方法内部的 `this` 指向当前的子类, 而不是子类的实例

```javascript
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```

注意, 使用 `super` 的时候, 必须显式指定是作为函数, 还是作为对象使用, 否则会报错

```javascript
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}
```

最后, 由于对象总是继承自其他对象, 所以可以在任意一个对象中, 使用 `super` 关键字

```javascript
var obj = {
  toString() {
    return "MyObject: " + super.toString();
  }
};

obj.toString(); // MyObject: [object Object]
```

## 4. 类的 prototype 属性和 `__proto__` 属性 

大多数浏览器的 ES5 实现之中, 每一个对象都有 `__proto__` 属性, 指向对应的构造函数的 `prototype` 属性

Class 作为构造函数的语法糖, 同时有 `prototype` 属性和 `__proto__` 属性, 因此同时存在两条继承链

1. 子类的 `__proto__` 属性, 表示构造函数的继承, 总是指向父类
2. 子类的 `prototype` 属性的 `__proto__` 属性, 表示方法的继承, 总是指向父类的 `prototype` 属性

```javascript
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```

这样的结果是因为, 类的继承是按照下面的模式实现的

```javascript
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();
```

在之前给出过 `Object.setPrototypeOf` 方法的实现

```javascript
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

因此, 就得到了上面的结果

```javascript
Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;
```

可以这样理解

作为一个对象, 子类的原型是父类

作为一个构造函数, 子类的原型对象是父类原型对象的实例

```javascript
Object.create(A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;
```

`extends` 关键字后面可以跟多种类型的值

讨论两种情况, 一, 子类继承 `Object` 类

```javascript
class A extends Object {
}

A.__proto__ === Object // true
A.prototype.__proto__ === Object.prototype // true
```

第二种情况, 不存在任何继承

```javascript
class A {
}

A.__proto__ === Function.prototype // true
A.prototype.__proto__ === Object.prototype // true
```

这种情况下, `A` 作为一个基类(即不存在任何继承), 就是一个普通函数, 所以直接继承 `Function.prototype` 

但是 `A` 调用后返回一个空对象(即 `Object` 实例), 所以 `A.prototype.__proto__` 指向构造函数 `Object` 的 `prototype` 属性

### 实例的 `__proto__` 属性

子类实例的`__proto__`属性的`__proto__`属性, 指向父类实例的`__proto__`属性

也就是说, 子类的原型的原型, 是父类的原型

```javascript
var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');

p2.__proto__ === p1.__proto__ // false
p2.__proto__.__proto__ === p1.__proto__ // true
```

因此, 通过子类实例的`__proto__.__proto__`属性, 可以修改父类实例的行为

```javascript
p2.__proto__.__proto__.printName = function () {
  console.log('Ha');
};

p1.printName() // "Ha"
```

## 5. 原生构造函数的继承

原生构造函数是指语言内置的构造函数, 通常用来生成数据结构

以前, 这些原生构造函数是无法继承的, 比如, 不能自己定义一个 `Array` 的子类

```javascript
function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
});
```

上面代码定义了一个继承 `Array` 的 `MyArray` 类

但是, 这个类的行为与 `Array` 完全不一致

```javascript
var colors = new MyArray();
colors[0] = "red";
colors.length  // 0

colors.length = 0;
colors[0]  // "red"
```

下面例子中, 想让一个普通对象继承 `Error` 对象

```javascript
var e = {};

Object.getOwnPropertyNames(Error.call(e))
// [ 'stack' ]

Object.getOwnPropertyNames(e)
// []
```

上面代码中, 无法继承原生构造函数

ES6 允许继承原生构造函数定义子类, 因为 ES6 是先新建父类的实例对象 `this` , 然后再用子类的构造函数修饰 `this`, 使得父类的所有行为都可以继承

举个例子

```javascript
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined
```

上免得例子说明, `extends` 关键字不仅可以用来继承类, 还可以用来继承原生的构造函数, 因此可以在原生数据结构的基础上定义自己的数据结构

下面就是定义了一个待版本功能的数组

```javascript
class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]);
  }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
x // [1, 2]
x.history // [[]]

x.commit();
x.history // [[], [1, 2]]

x.push(3);
x // [1, 2, 3]
x.history // [[], [1, 2]]

x.revert();
x // [1, 2]
```

上面代码中, `VersionArray` 会通过 `commit` 方法, 将自己的当前状态生成一个版本快照, 存入 `history` 属性. `revert` 方法用来将数组重置为最新一次的保存版本

除此之外, `VersionArray` 依然是一个普通的数组, 所有原生的数组方法都可以在它上面调用

再来个自定 `Error` 子类的例子, 可以定制报错时的行为

```javascript
class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}

class MyError extends ExtendableError {
  constructor(m) {
    super(m);
  }
}

var myerror = new MyError('ll');
myerror.message // "ll"
myerror instanceof Error // true
myerror.name // "MyError"
myerror.stack
// Error
//     at MyError.ExtendableError
//     ...
```

注意, 继承 `Object` 的子类, 有一个行为差异

```javascript
class NewObj extends Object{
  constructor(){
    super(...arguments);
  }
}
var o = new NewObj({attr: true});
o.attr === true  // false
```

上面代码中, `NewObj` 继承了 `Object`, 但是无法通过 `super` 方法向父类 `Object` 传参

这是因为 ES6 改变了 `Object` 构造函数的行为, 一旦发现`Object`方法不是通过`new Object()`这种形式调用, ES6 规定`Object`构造函数会忽略参数

## 6. Mixin 模式的实现

Mixin 指的是多个对象合并成一个新的对象, 新对象具有哥哥组成成员的接口

它最简单的实现如下

```javascript
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}
```

下面是一个更完备的实现, 将多个类的接口混入另一个类

```javascript
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
```

上面代码的`mix`函数, 可以将多个对象合成为一个类

使用的时候, 只需要继承这个类就可以

```javascript
class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```