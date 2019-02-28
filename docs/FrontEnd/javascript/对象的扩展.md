---
title: 对象的扩展
---

## 1. 属性的简洁表示法

ES6 允许直接写入变量和函数, 作为对象的属性和方法

```javascript
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

// 等同于
const baz = {foo: foo};
```

除了属性简写, 方法也可以简写

```js
const o = {
  method() {
    return "hello!";
  }
};

// 等价于

const o = {
  method: function() {
    return "hello!";
  }
};
```

一个实际的例子

```js
let birth = '2000/01/01';

const Person = {
  name: '张三',
  birth,
  hello() { console.log('我的名字是: ', this.name) }
};
```

这种写法用于函数的返回值将会非常方便

```js
function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}

getPoint(); // {x:1, y:10}
```

CommonJS 模块输出一组变量, 就非常适合简洁写法

```js
let ms = {};

function getItem(key) {
  return key in ms ? ms[key] : null;
}

function setItem(key, value) {
  ms[key] = value;
}

function clear() {
  ms = {};
}

module.exports = { getItem, setItem, clear};
// 等价于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};
```

属性的赋值器( setter) 和 取值器(getter) 事实上也是采用这种写法

```javascript
const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
```

简洁写法的属性名总是字符串, 这会导致一些关键字解析错误

```javascript
const obj = {
  class () {}
};

// 等同于

var obj = {
  'class': function() {}
};
```

## 2. 属性名表达式

JavaScript 定义对象的属性有两种方法

```javascript
// 方法一(标识符)
obj.foo = true;

// 方法二(表达式)
obj['a' + 'bc'] = 123;
```

如果使用字面量方式定义对象(使用大括号), 在 ES5 中仅能使用方法一(标识符)定义属性

```javascript
var obj = {
  foo: true,
  abc: 123
};
```

ES6 改变了这一状态, 可以使用方法二(表达式)作为对象的属性名

```javascript
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

表达式还可以用于定义方法名, 这样可以用于拼接方法

```javascript
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

obj.hello() // hi
```

属性名表达式和简洁表示法不能同时使用

```javascript
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};
```

注意小心属性名表达式是一个对象时, 因为属性名会自动转为字符串, 所以对象将被转为 `[object Object]`

```javascript
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}
```

## 3. 方法的 name 属性

函数的 `name` 属性返回函数名, 对象方法也是函数, 因此也具有 `name` 属性

```javascript
const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"
```

如果对象的方法使用了取值函数(getter)和存值函数(setter), 则 `name` 属性不是在该方法上面, 而是在该方法的属性的描述对象的 `get` 和 `set` 属性上面

```javascript
const obj = {
  get foo() {},
  set foo(x) {}
};

obj.foo.name
// TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

descriptor.get.name // "get foo"
descriptor.set.name // "set foo"
```

有两种特殊的情况: 

1. `bind` 方法创造的函数, `name` 属性返回 `bound` 加上原函数的名字
2. `Function` 构造函数创造的函数, `name` 属性返回 `anouymous(匿名)`

```javascript
(new Function()).name // "anonymous"

var doSomething = function() {
  // ...
};
doSomething.bind().name // "bound doSomething"
```

如果对象的方法是一个 Symbol 值, 那么 `name` 属性返回的是这个 Symbol 值的描述

```javascript
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
  [key1]() {},
  [key2]() {},
};
obj[key1].name // "[description]"
obj[key2].name // ""
```

## 4. 属性的可枚举性和遍历

### 可枚举性

对象的每个属性都有一个描述对象(Description), 用来控制该属性的行为

`Object.getOwnPropertyDescriptor` 方法可以获取该属性的描述对象

```javascript
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

描述对象的 `enumerable` 属性, 称为 **可枚举性** , 如果该属性为 false, 就便是某些操作会忽略当前属性

目前, 有四个操作会忽略 `enumerable` 为 false 的属性

1. `for...in` 循环: 只遍历对象自身的和继承的可枚举的属性
2. `Object.keys()` : 返回对象自身的所有可枚举的属性和键名
3. `JSON.stringify()` : 只串行化对象自身的可枚举的属性
4. `Object.assign()` : 忽略 `enumerable` 为 false 的属性, 只拷贝对象自身的可枚举的属性

这四个操作中, 前三个是 ES5 就有的, 最后一个是 ES6 新增的, 其中, 只有 `for...in` 会返回继承的属性, 其他三个都会忽略继承的属性

引入可枚举性这个概念的最初目的, 就是让某些 属性可以规避掉 `for...in` 操作, 不然所有内部属性和方法都会被遍历到, 比如对象原型的 `toString` 方法, 以及数组的 `length` 属性, 就可以通过 **可枚举性** , 从而避免被遍历到

```javascript
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// false

Object.getOwnPropertyDescriptor([], 'length').enumerable
// false
```

ES6 规定, 所有 Class 的原型方法都是不可枚举的

```javascript
Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
// false
```

总的来说, 操作中引入继承的属性会让问题复杂化, 大多数时候, 要去关心对象自身的属性, 所以尽量不要用 `for...in` 循环, 而用 `Object.keys()` 代替

### 属性的遍历

ES6 一共有 5种 方法可以遍历对象的属性

1. `for...in`

   `for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

2. `Object.keys(obj)`

   `Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名

3. `Object.getOwnPropertyNames(obj)`

   `Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名

4. `Object.getOwnPropertySymbols(obj)`

   `Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名

5. `Reflect.ownKeys(obj)`

   `Reflect.ownKeys`返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

以上遍历方法均会遵循同样的属性遍历的次序规则

+ 首先遍历所有的数值键, 按照数值升序排列
+ 其次遍历所有的字符串键, 按照加入时间升序排列
+ 最后遍历所有 Symbol 键, 按照加入时间升序排列

```javascript
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
```

## 5. super 关键字

我们知道, `this` 关键字总是指向函数所在的当前对象, ES6 又新增了另一个类似的关键字 `super` , 用于指向当前对象的原型对象

```javascript
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
```

> `super` 关键字表示原型对象时, 只能用在对象的方法之中, 用在其他地方都会报错

```javascript
// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}
```

上面三种 `super` 的用法都会报错, 因为对于 JavaScript 引擎来说, 这里的 `super` 都没有用在对象的方法中

第一种写法是 `super` 用在属性里面

第二第三种写法是 `super` 用在一个函数里面, 然后赋值给 `foo` 属性

目前, 只有对象方法的简写可以让 JavaScript 引擎确认定义的是对象的方法

```javascript
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"
```

上面代码中, `super.foo` 指向原型对象 `proto` 的 `foo` 方法, 但是绑定的 `this` 却还是当前对象 `obj` , 因此输出的就是 `world`

## 6. 对象的扩展运算符

数组的扩展中, 已经使用过扩展运算符了, ES218 将这个运算符引入了对象

### 解构赋值

对象的解构赋值用于从一个对象取值, 相当于将目标对象的所有可遍历的(enumerable), 但尚未被读取的属性, 分配到指定的对象上面, 所有的键和它们的值, 都会被拷贝到新对象上面

```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

由于解构赋值要求等号右边是一个对象, 所以如果等号右边是 `undefined` 或 `null` , 就会报错, 因为它们无法转为对象

```javascript
let { x, y, ...z } = null; // 运行时错误
let { x, y, ...z } = undefined; // 运行时错误
```

解构赋值必须是最后一个参数

```javascript
let { ...x, y, z } = someObject; // 句法错误
let { x, ...y, ...z } = someObject; // 句法错误
```

解构赋值的拷贝是浅拷贝, 即如果一个键的值是复合类型的值(数组, 对象, 函数), 那么解构赋值拷贝的是这个值的引用, 而不是这个值的副本

```javascript
let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2;
x.a.b // 2
```

解构赋值不能赋值继承自原型对象的属性

```javascript
let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // { b: 2 }
o3.a // undefined
```

下面是另外一个例子

```javascript
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
x // 1
y // undefined
z // 3
```

上面代码中, 变量 `x` 是单纯的解构赋值, 所以可以读取对象 `o` 继承的属性, 变量 `z` 和 `y` 是扩展运算符的解构赋值, 只能读取对象 `o` 自身的属性, 所以变量 `z` 可以赋值成功, 变量  `y` 取不到值

解构赋值的一个用处, 就是扩展某个函数的参数, 引入其他操作

```javascript
function baseFunction({ a, b }) {
  // ...
}
function wrapperFunction({ x, y, ...restConfig }) {
  // 使用 x 和 y 参数进行操作
  // 其余参数传给原始函数
  return baseFunction(restConfig);
}
```

### 扩展运算符

对象的扩展运算符 `...` 用于取出参数对象的多有可遍历属性, 拷贝到当前对象中

```javascript
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
```

由于数组是特殊的对象, 所以对象的扩展运算符也可以用于数组

```javascript
let foo = { ...['a', 'b', 'c'] };
foo
// {0: "a", 1: "b", 2: "c"}
```

同理字符串也可以

```javascript
let foo = {...'dkalsjdaskj'};
foo 
// {0: "d", 1: "k", 2: "a", 3: "l", 4: "s", 5: "j", 6: "d", 7: "a", 8: "s", 9: "k", 10: "j"}
```

如果扩展运算符后面不是对象, 则自动将其转为对象

```javascript
// 等同于 {...Object(1)}
{...1} // {}

// 等同于 {...Object(true)}
{...true} // {}

// 等同于 {...Object(undefined)}
{...undefined} // {}

// 等同于 {...Object(null)}
{...null} // {}
```

对象的运算符等同于使用 `Object.assign()` 方法

```javascript
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
```

上面的例子只是拷贝了对象实例的属性, 如果想完整克隆一个对象, 还拷贝对象原型的属性, 可以采用以下写法

```javascript
// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};

// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);

// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```

上面代码中, 写法一的 `__proto__` 属性在非浏览器的环境不一定部署, 因此推荐使用写法二和写法三

扩展运算符可以用于合并两个对象

```javascript
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
```

如果用于自定义的属性, 放在扩展运算符后面, 则扩展运算符内部的同名属性会被覆盖掉

```javascript
let aWithOverrides = { ...a, x: 1, y: 2 };
// 等同于
let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
// 等同于
let x = 1, y = 2, aWithOverrides = { ...a, x, y };
// 等同于
let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 });
```

上面代码中, `a` 对象的 `x` 属性和 `y` 属性, 拷贝到新对象后会被覆盖

这用来修改先有对象部分的属性就很方便了

```javascript
let newVersion = {
  ...previousVersion,
  name: 'New Name' // Override the name property
};
```

上面代码, `newVersion` 对象自定义了 `name` 属性, 其他属性全部复制自 `previousVersion` 对象

与数组的扩展运算符一样, 对象的扩展运算符后面可以跟表达式

```javascript
const x = 5;
const obj = {
  ...(x > 1 ? {a: 1} : {}),
  b: 2,
};

obj
// {a: 1, b: 2}
```

扩展运算符的参数对象之中, 如果有取值函数 get, 这个函数是会执行的

```javascript
// 并不会抛出错误，因为 x 属性只是被定义，但没执行
let aWithXGetter = {
  ...a,
  get x() {
    throw new Error('not throw yet');
  }
};

// 会抛出错误，因为 x 属性被执行了
let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now');
    }
  }
};
```

