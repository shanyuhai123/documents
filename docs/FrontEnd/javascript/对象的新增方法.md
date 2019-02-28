---
title: 对象的新增方法
---

## 1. Object.is()

ES5 时比较两个值是否相等, 只有两个运算符: 相等运算符(`==`) 和严格相等运算符(`===`)

它们都有缺点, 前者会自动转换数据类型, 后者的 `NaN` 不等于自身, 以及 `+0` 等于 `-0`, JavaScript 缺乏一种运算, 在所有环境中, 只要两个值是一样的, 它们就应该相等

ES6 提出了一个新的方法, `Object.is()` 可以用于比较两个值是否严格相等, 与严格比较运算符(`===`) 的行为基本一致

```javascript
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
```

不同之处只有两个

```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

可以给 ES5 增加一段代码来部署 `Object.is()`

```javascript
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});
```

## 2. Object.assign()

### 基本用法

`Object.assign` 方法用于对象的合并, 将源对象的所有可枚举属性复制到目标对象

```javascript
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

`Object.assign` 方法的第一个参数是目标对象, 后面的参数都是源对象

注意, 如果目标对象与源对象具有同名属性, 或多个源对象具有同名属性, 则后面的属性会覆盖前面的属性

```javascript
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

如果只有一个参数, `Object.assign` 会直接返回该参数

如果该参数不是对象, 则会先转为对象, 然后返回

```javascript
typeof Object.assign(2) // "object"
let num = Object.assign(2);
num // Number {2}
```

由于`undefined`和`null`无法转成对象, 所以如果它们作为参数, 就会报错

```javascript
Object.assign(undefined) // 报错
Object.assign(null) // 报错
```

如果非对象参数出现在原对象的位置(即非首参数), 那么处理规则有所不同

首先, 这些参数都会转为对象, 如果无法转为对象, 则跳过, 这就意味着, 如果 `undefined` 和 `null` 不在首参数, 就不会报错

```javascript
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true
```

其他类型的值(即数值, 字符串和布尔值) 不在首参数, 也不会报错. 但是, 除了字符串会以数组形式, 拷贝入目标对象, 其他值都不会产生效果

```javascript
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

因为只有字符串的包装对象, 会产生可枚举属性 `PrimitiveValue: 原始值`

```javascript
Object(true) // {[[PrimitiveValue]]: true}
Object(10)  //  {[[PrimitiveValue]]: 10}
Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
```

`Object.assign` 拷贝的属性是有限制的, 只拷贝源对象的自身属性(不拷贝继承属性), 也不拷贝不可枚举的属性

```javascript
Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' }
```

属性名为 Symbol 值的属性, 也会被`Object.assign`拷贝

```javascript
Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }
```

### 注意事项

1. 浅拷贝

   `Object.assign`方法实行的是浅拷贝, 而不是深拷贝

   也就是说, 如果源对象某个属性的值是对象, 那么目标对象拷贝得到的就是这个对象的引用

2. 同名属性的替换

3. 数组的处理

   `Object.assign`可以用来处理数组, 但是会把数组视为对象

   也就是说把下坐标相同的替换了

   ```javascript
   Object.assign([1, 2, 3], [4, 5])
   // [4, 5, 3]
   ```

4. 取值函数的处理

### 常见用途

`Object.assign`方法有很多用处

1. 为对象添加属性

   ```javascript
   class Point {
     constructor(x, y) {
       Object.assign(this, {x, y});
     }
   }
   ```

   可以通过 `Object.assign` 方法, 将 `x`属性和`y`属性添加到`Point`类的对象实例

2. 为对象添加方法

   ```javascript
   Object.assign(SomeClass.prototype, {
     someMethod(arg1, arg2) {
       ···
     },
     anotherMethod() {
       ···
     }
   });
   
   // 等同于下面的写法
   SomeClass.prototype.someMethod = function (arg1, arg2) {
     ···
   };
   SomeClass.prototype.anotherMethod = function () {
     ···
   };
   ```

3. 克隆对象

   ```javascript
   function clone(origin) {
     return Object.assign({}, origin);
   }
   ```

   上面代码只能拷贝对象自身的值, 不能克隆它继承的值

   若想要继承, 则可以采用以下代码

   ```javascript
   function clone(origin) {
     let originProto = Object.getPrototypeOf(origin);
     return Object.assign(Object.create(originProto), origin);
   }
   ```

4. 合并多个对象

   将多个对象合并到某个对象

   ```javascript
   const merge =
     (target, ...sources) => Object.assign(target, ...sources);
   ```

   如果希望返回一个新对象

   ```javascript
   const merge =
     (...sources) => Object.assign({}, ...sources);
   ```

5. 为属性指定默认值

   ```javascript
   const DEFAULTS = {
     logLevel: 0,
     outputFormat: 'html'
   };
   
   function processContent(options) {
     options = Object.assign({}, DEFAULTS, options);
     console.log(options);
     // ...
   }
   ```

   上面代码中,  `DEFAULTS` 对象是默认值, `options` 对象是用户提供的参数, `Object.assign` 方法将 `DEFAULTS` 和 `options` 合并成一个新的对象, 因为浅拷贝的问题, 对象所有属性的值最好都是简单类型

## 3. Object.getOwnPropertyDescriptors()

ES5 的`Object.getOwnPropertyDescriptor()`方法会返回某个对象属性的描述对象（descriptor）

ES2017 引入了`Object.getOwnPropertyDescriptors()`方法, 返回指定对象所有自身属性（非继承属性）的描述对象

```javascript
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
```

该方法的实现非常简单

```javascript
function getOwnPropertyDescriptors(obj) {
  const result = {};
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj, key);
  }
  return result;
}
```

该方法的引入主要是为了解决 `Object.assign` 无法正确拷贝 `get` 属性和 `set` 属性的问题

```javascript
const source = {
  set foo(value) {
    console.log(value);
  }
};

const target1 = {};
Object.assign(target1, source);

Object.getOwnPropertyDescriptor(target1, 'foo')
// { value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true }
```

因为 `Object.assign` 方法总是拷贝一个属性的值, 而不会拷贝它背后的赋值方法或取值方法

这时, `Object.getOwnPropertyDescriptors()`方法配合`Object.defineProperties()`方法, 就可以实现正确拷贝

```javascript
const source = {
  set foo(value) {
    console.log(value);
  }
};

const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target2, 'foo')
// { get: undefined,
//   set: [Function: set foo],
//   enumerable: true,
//   configurable: true }
```

可以合并逻辑为一个函数

```javascript
const shallowMerge = (target, source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(source)
);
```

`Object.getOwnPropertyDescriptors()`方法的另一个用处, 就是配合 `Object.create()`方法 将对象属性克隆到一个新对象, 不过这是浅拷贝

```javascript
const clone = Object.create(Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj));

// 或者

const shallowClone = (obj) => Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

以往, 继承一个对象, 常常写成这样

```javascript
const obj = {
  __proto__: prot,
  foo: 123,
};
```

ES6 规定 `__proto__` 只有浏览器要部署, 其他环境不用部署, 如果去除 `__proto__` , 上面代码就要改成下面这样

```javascript
const obj = Object.create(prot);
obj.foo = 123;

// 或者

const obj = Object.assign(
  Object.create(prot),
  {
    foo: 123,
  }
);
```

有了 `Object.getOwnPropertyDescription()` 就有了另一种写法

```js
const obj = Object.create(
	prot,
  Object.getOwnPropertyDescription({
    foo: 123,
  })
);
```

`Object.getOwnPropertyDescriptors()`也可以用来实现 Mixin（混入）模式

```javascript
let mix = (object) => ({
  with: (...mixins) => mixins.reduce(
    (c, mixin) => Object.create(
      c, Object.getOwnPropertyDescriptors(mixin)
    ), object)
});

// multiple mixins example
let a = {a: 'a'};
let b = {b: 'b'};
let c = {c: 'c'};
let d = mix(c).with(a, b);

d.c // "c"
d.b // "b"
d.a // "a"
```

## 4. `__proto__` 属性, Object.setPrototypeOf(), Object.getPrototypeOf()

JavaScript 语言的对象继承是通过原型链实现的

ES6 提供了更多原型对象的操作方法

### `__proto__` 属性

该属性可以用来读取或设置当前对象的 `prototype` 对象

目前所有浏览器(包括 IE11) 都部署了这个属性

```js
// es5 时
const obj = {
  method: function() {...}
};
obj.__proto__ = someOtherObj;
  
// es6 时
var obj = Object.create(someOtherObj);
obj.method = function() {...};
```

该属性本质上是一个内部属性, 而不是一个正式的对外的 API, 只是由于浏览器的广泛支持, 才被加入 ES6

无论从语义的角度还是兼容性的角度, 都不要使用这个属性, 而是使用

`Object.setPrototypeOf()`（写操作）、`Object.getPrototypeOf()`（读操作）、`Object.create()`（生成操作）代替

实现上, `__proto__`调用的是`Object.prototype.__proto__`, 具体实现如下

```javascript
Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    let _thisObj = Object(this);
    return Object.getPrototypeOf(_thisObj);
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError();
    }
    if (!isObject(this)) {
      return undefined;
    }
    if (!isObject(proto)) {
      return undefined;
    }
    let status = Reflect.setPrototypeOf(this, proto);
    if (!status) {
      throw new TypeError();
    }
  },
});

function isObject(value) {
  return Object(value) === value;
}
```

### Object.setPrototypeOf()

`Object.setPrototypeOf`方法的作用与`__proto__`相同, 用来设置一个对象的`prototype`对象, 返回参数对象本身

它是 ES6 正式推荐的设置原型对象的方法

```javascript
// 格式
Object.setPrototypeOf(object, prototype)

// 用法
const o = Object.setPrototypeOf({}, null);
```

上面方法等价于

```javascript
function setPrototypeOf(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

举个例子

```javascript
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40
```

如果第一个参数不是对象, 则会自动转为对象

但是由于返回的还是第一个参数, 所以这个操作不会产生任何效果

```javascript
Object.setPrototypeOf(1, {}) === 1 // true
Object.setPrototypeOf('foo', {}) === 'foo' // true
Object.setPrototypeOf(true, {}) === true // true
```

由于 `undefined` 和 `null` 无法转为对象, 所以第一个参数是 `undefined` 和 `null` 时会报错

```javascript
Object.setPrototypeOf(undefined, {})
// TypeError: Object.setPrototypeOf called on null or undefined

Object.setPrototypeOf(null, {})
// TypeError: Object.setPrototypeOf called on null or undefined
```

### Object.getPrototypeOf()

该方法与 `Object.setPropertyOf` 方法配套, 用于读取一个对象的原型对象

```javascript
Object.getPrototypeOf(obj);
```

举个例子

```javascript
function Rectangle() {
  // ...
}

const rec = new Rectangle();

Object.getPrototypeOf(rec) === Rectangle.prototype
// true

Object.setPrototypeOf(rec, Object.prototype);
Object.getPrototypeOf(rec) === Rectangle.prototype
// false
```

同样的, 当参数不为对象时会自动转为对象

```javascript
/ 等同于 Object.getPrototypeOf(Number(1))
Object.getPrototypeOf(1)
// Number {[[PrimitiveValue]]: 0}

// 等同于 Object.getPrototypeOf(String('foo'))
Object.getPrototypeOf('foo')
// String {length: 0, [[PrimitiveValue]]: ""}

// 等同于 Object.getPrototypeOf(Boolean(true))
Object.getPrototypeOf(true)
// Boolean {[[PrimitiveValue]]: false}

Object.getPrototypeOf(1) === Number.prototype // true
Object.getPrototypeOf('foo') === String.prototype // true
Object.getPrototypeOf(true) === Boolean.prototype // true


Object.getPrototypeOf(null)
// TypeError: Cannot convert undefined or null to object

Object.getPrototypeOf(undefined)
// TypeError: Cannot convert undefined or null to object
```

## 5. Object.keys(), Object.values(), Object.entries()

### Object.keys()

ES5 引入的 `Object.keys` 方法, 返回一个数组, 成员是参数对象自身的所有可遍历属性的键名

```javascript
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
```

ES2017 引入了与 `Object.keys` 配套的 `Object.values` 和 `Object.entries` , 作为遍历一个对象的补充手段, 供 `for...of` 循环使用

```javascript
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
```

### Object.values()

`Object.values`方法返回一个数组, 成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值

```javascript
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]
```

返回的数组成员顺序, 与属性遍历一致, 按照数值大小, 从小到大

```javascript
const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj)
// ["b", "c", "a"]
```

`Object.values`会过滤属性名为 Symbol 值的属性

```javascript
Object.values({ [Symbol()]: 123, foo: 'abc' });
// ['abc']
```

如果`Object.values`方法的参数是一个字符串, **会返回各个字符组成的一个数组**

```javascript
Object.values('foo')
// ['f', 'o', 'o']
```

如果参数不是对象, `Object.values`会先将其转为对象。由于数值和布尔值的包装对象, 都不会为实例添加非继承的属性

所以, `Object.values`会返回空数组

```javascript
Object.values(42) // []
Object.values(true) // []
```

### Object.entries()

`Object.entries()`方法返回一个数组, 成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组

```javascript
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```

除了返回值不一样, 该方法的行为与`Object.values`基本一致

如果原对象的属性名是一个 Symbol 值, 该属性会被忽略

```javascript
Object.entries({ [Symbol()]: 123, foo: 'abc' });
// [ [ 'foo', 'abc' ] ]
```

`Object.entries`的基本用途是遍历对象的属性

```javascript
let obj = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj)) {
  console.log(
    `${JSON.stringify(k)}: ${JSON.stringify(v)}`
  );
}
// "one": 1
// "two": 2
```

`Object.entries`方法的另一个用处是, 将对象转为真正的`Map`结构

```javascript
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
map // Map { foo: "bar", baz: 42 }
```

自己实现 `Object.entries` 方法, 很简单

```javascript
// Generator函数的版本
function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

// 非Generator函数的版本
function entries(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }
  return arr;
}
```

## 6. Object.fromEntries()

`Object.fromEntries()`方法是`Object.entries()`的逆操作, 用于将一个键值对数组转为对象

```javascript
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```

该方法的主要目的哦, 就是将键值对的数据解构还原为对象, 因此特别适合将 `Map` 结构转为对象

```javascript
// 例一
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

Object.fromEntries(entries)
// { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
// { foo: true, bar: false }
```

该方法的一个用处是配合`URLSearchParams`对象, 将查询字符串转为对象

```javascript
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```