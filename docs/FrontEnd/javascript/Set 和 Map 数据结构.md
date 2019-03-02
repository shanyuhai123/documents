---
title: Set 和 Map 数据结构
---

## 1. Set

### 基本用法

ES6 提供了新的数据结构 Set, 它类似于数组, 但是成员的值都是唯一的, 没有重复的值

`Set` 本身是一个构造函数, 用来生成 Set 数据结构

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

上面代码通过 `add()` 方法向 Set 结构加入成员, 结果表明 Set 结构不会添加重复的值

`Set` 函数可以接受一个数组作为参数, 用来初始化

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 56
```

上面代码也展示了一种去除数组重复成员的方法

```javascript
// 去除数组的重复成员
[...new Set(array)]
```

上面的方法也可以用于, 去除字符串里面的重复字符

```javascript
[...new Set('ababbc')].join('')
// "abc"
```

向 Set 加入值的时候, 不会发生类型转换, 所以 `"5"` 和 `5` 是两个不同的值

Set 内部判断两个值是否不同, 使用的算法叫做 "Same-value-zero equality", 它类似于精确相等运算符 `===`, 主要区别是 `NaN` 等于自身, 而精确相等运算符认为 `NaN` 不等于自身

```javascript
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
```

上面代码向 Set 实例添加了两个 `NaN` , 但是只能加入一个, 这表明, 在 Set 内部, 两个 `NaN` 是相等

另外, 两个对象总是不相等的

```javascript
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

上面代码表示, 由于两个空对象不相等, 所以它们被视为两个值

### Set 实例的属性和方法

Set 结构的实例有以下属性

+ `Set.prototype.constructor` : 构造函数, 默认就是 `Set` 函数
+ `Set.prototype.size` : 返回 `Set` 实例的成员总数

Set 实例的方法分为两大类: 操作方法(用于操作数据) 和遍历方法(用于遍历成员)

操作方法:

+ `add(value)` : 添加某个值, 返回 Set 结构本身
+ `delete(value)` : 删除某个值, 返回一个布尔值, 表示删除是否成功
+ `has(value)` : 返回一个布尔值, 表示该值是否为 `Set` 成员
+ `clear()` : 清除所有成员, 没有返回值

上面这些属性和方法的实例如下

```javascript
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

下面是一个对比, 看看在判断是否包括在一个键上面, `Object` 结构和 `Set` 结构的写法不同

```javascript
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
```

`Array.from` 方法可以将 Set 结构转为数组

```javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

这就提供了去除数组重复成员的另一种方法

```javascript
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```

### 遍历操作

Set 结构的实例有四个遍历方法, 可以用于遍历成员

+ `keys()` : 返回键名的遍历器
+ `values()` : 返回键值的遍历器
+ `entries()` : 返回键值对的遍历器
+ `foreach()` : 使用回调函数遍历每个成员

需要特别指出的是, Set 的遍历顺序就是插入顺序, 这个特性有时非常有用, 比如使用 Set 保存一个回调函数列表, 调用时就能保证按添加顺序调用

1. **keys(), values(), entries()**

   由于 Set 结构没有键名, 只有键值(或者说键名和键值都是同一个值), 所以 `keys` 方法和 `values` 方法的行为完全一致

   ```javascript
   let set = new Set(['red', 'green', 'blue']);
   
   for (let item of set.keys()) {
     console.log(item);
   }
   // red
   // green
   // blue
   
   for (let item of set.values()) {
     console.log(item);
   }
   // red
   // green
   // blue
   
   for (let item of set.entries()) {
     console.log(item);
   }
   // ["red", "red"]
   // ["green", "green"]
   // ["blue", "blue"]
   ```

   Set 结构的实例默认可遍历, 它的默认遍历器生成函数就是它的 `values` 方法

   ```javascript
   Set.prototype[Symbol.iterator] === Set.prototype.values
   // true
   ```

   这意味着可以省略 `values` 方法, 直接用 `for...of` 循环遍历 Set

   ```javascript
   let set = new Set(['red', 'green', 'blue']);
   
   for (let x of set) {
     console.log(x);
   }
   // red
   // green
   // blue
   ```

2. **forEach()**

   Set 结构的实例与数组一样, 也拥有`forEach`方法, 用于对每个成员执行某种操作, 没有返回值

   ```javascript
   let set = new Set([1, 4, 9]);
   set.forEach((value, key) => console.log(key + ' : ' + value))
   // 1 : 1
   // 4 : 4
   // 9 : 9
   ```

   另外, `forEach`方法还可以有第二个参数, 表示绑定处理函数内部的`this`对象

3. **遍历的应用**

   扩展运算符（`...`）内部使用`for...of`循环, 所以也可以用于 Set 结构

   ```javascript
   let set = new Set(['red', 'green', 'blue']);
   let arr = [...set];
   // ['red', 'green', 'blue']
   ```

   扩展运算符和 Set 结构相结合, 就可以去除数组的重复成员

   ```javascript
   let arr = [3, 5, 2, 2, 5, 5];
   let unique = [...new Set(arr)];
   // [3, 5, 2]
   ```

   而且, 数组的`map`和`filter`方法也可以间接用于 Set 了

   ```javascript
   let set = new Set([1, 2, 3]);
   set = new Set([...set].map(x => x * 2));
   // 返回Set结构：{2, 4, 6}
   
   let set = new Set([1, 2, 3, 4, 5]);
   set = new Set([...set].filter(x => (x % 2) == 0));
   // 返回Set结构：{2, 4}
   ```

   因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）

   ```javascript
   let a = new Set([1, 2, 3]);
   let b = new Set([4, 3, 2]);
   
   // 并集
   let union = new Set([...a, ...b]);
   // Set {1, 2, 3, 4}
   
   // 交集
   let intersect = new Set([...a].filter(x => b.has(x)));
   // set {2, 3}
   
   // 差集
   let difference = new Set([...a].filter(x => !b.has(x)));
   // Set {1}
   ```

   同步修改原来的 Set 结构, 只存在两种变通方法

   ```javascript
   // 方法一
   let set = new Set([1, 2, 3]);
   set = new Set([...set].map(val => val * 2));
   // set的值是2, 4, 6
   
   // 方法二
   let set = new Set([1, 2, 3]);
   set = new Set(Array.from(set, val => val * 2));
   // set的值是2, 4, 6
   ```

## 2. WeakSet

WeakSet 结构与 Set 类似, 也是不重复的值的集合

它与 Set 有两个区别

首先, WeakSet 的成员只能是对象, 而不能是其他类型的值

```javascript
const ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
```

其次, WeakSet 中的对象都是弱引用, 即垃圾回收机制不考虑 WeakSet 对该对象的引用, 也就是说, 如果其他对象都不再引用该对象, anemia垃圾回收机制会自动回收该对象所占用的内存, 不考虑该对象还存在WeakSet 之中

因此, WeakSet 适合临时存放一组对象, 以及存放跟对象绑定的信息, 只要这些对象在外部消失, 它在 WeakSet 里面的引用就会自动消失

由于上面这个特点, WeakSet 的成员是不适合引用的, 因为它会随时消失

另外, 由于 WeakSet 内部有多少个成员, 取决于垃圾回收机制有没有运行, 运行前后很可能成员个数是不一样的, 而垃圾回收机制何时运行是不可预测的, 因此 ES6 规定 WeakSet 不可遍历

### 语法

WeakSet 是一个构造函数, 可以使用`new`命令, 创建 WeakSet 数据结构

```javascript
const ws = new WeakSet();
```

作为构造函数, WeakSet 可以接受一个数组或类似数组的对象作为参数

```javascript
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}
```

注意, 是`a`数组的成员成为 WeakSet 的成员, 而不是`a`数组本身

数组的成员只能是对象

```javascript
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
```

WeakSet 结构有以下三个方法

+ `WeakSet.prototype.add(value)` : 向 WeakSet 实例添加一个新成员
+ `WeakSet.prototype.delete(value)` : 清除 WeakSet 实例的指定成员
+ `WeakSet.prototype.has(value)` : 返回一个布尔值, 表示某个值是否在 WeakSet 实例之中

举个例子

```javascript
const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false

ws.delete(window);
ws.has(window);    // false
```

WeakSet 没有`size`属性, 没有办法遍历它的成员, 因为会随时消失

```javascript
ws.size // undefined
ws.forEach // undefined

ws.forEach(function(item){ console.log('WeakSet has ' + item)})
// TypeError: undefined is not a function
```

WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

另一个例子

```javascript
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
```

这里使用 WeakSet 的好处是，`foos`对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑`foos`，也不会出现内存泄漏

## 3. Map

### 含义和基本用法

JavaScript 的对象, 本质上是键值对的集合 (Hash 结构), 但是传统上只能用字符当作键, 这给它的使用带来了很大的限制

```javascript
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```

上面代码原意是将一个 DOM 节点作为对象 `data` 的键, 但是由于对象只接受字符串作为键名, 所以 `element` 被自动转为字符串 `[object HTMLDivElement]`

为了解决这个问题, ES6 提供了 Map 数据结构, 它类似于对象, 也是键值对的集合, 但键的范围不限于字符串, 各种类型的值(包括对象)都可以当作键

也就是说, `Object` 结构提供了 `字符串--值` 的对应, Map 结构提供了 `值--值` 的对应, 是一种更完善的 Hash 结构实现

```javascript
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

`Map`构造函数接受数组作为参数，实际上执行的是下面的算法

```javascript
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
```

`Set`和`Map`都可以用来生成新的 Map

```javascript
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```

如果对同一个键多次赋值，后面的值将覆盖前面的值

```javascript
const map = new Map();

map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1) // "bbb"
```

如果读取一个未知的键，则返回`undefined`

```javascript
new Map().get('asfddfsasadf')
// undefined
```

注意，只有对同一个对象的引用，Map 结构才将其视为同一个键

```javascript
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```

上面代码的`set`和`get`方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此`get`方法无法读取该键，返回`undefined`

同理，同样的值的两个实例，在 Map 结构中被视为两个键

```javascript
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222
```

由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键

这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键

另外，`undefined`和`null`也是两个不同的键

虽然`NaN`不严格相等于自身，但 Map 将其视为同一个键

```javascript
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123
```

### 实例的属性和操作方法

Map 结构的实例有以下属性和操作方法

1. size 属性

   `size`属性返回 Map 结构的成员总数

   ```javascript
   const map = new Map();
   map.set('foo', true);
   map.set('bar', false);
   
   map.size // 2
   ```

2. set(key, value)

   `set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构

   如果`key`已经有值，则键值会被更新，否则就新生成该键

   ```javascript
   const m = new Map();
   
   m.set('edition', 6)        // 键是字符串
   m.set(262, 'standard')     // 键是数值
   m.set(undefined, 'nah')    // 键是 undefined
   ```

   `set`方法返回的是当前的`Map`对象，因此可以采用链式写法

   ```javascript
   let map = new Map()
     .set(1, 'a')
     .set(2, 'b')
     .set(3, 'c');
   ```

3. get(key)

   `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`

   ```javascript
   const m = new Map();
   
   const hello = function() {console.log('hello');};
   m.set(hello, 'Hello ES6!') // 键是函数
   
   m.get(hello)  // Hello ES6!
   ```

4. has(key)

   `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

   ```javascript
   const m = new Map();
   
   m.set('edition', 6);
   m.set(262, 'standard');
   m.set(undefined, 'nah');
   
   m.has('edition')     // true
   m.has('years')       // false
   m.has(262)           // true
   m.has(undefined)     // true
   ```

5. delete(key)

   `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`

   ```javascript
   const m = new Map();
   m.set(undefined, 'nah');
   m.has(undefined)     // true
   
   m.delete(undefined)
   m.has(undefined)       // false
   ```

6. clear()

   `clear`方法清除所有成员，没有返回值

   ```javascript
   let map = new Map();
   map.set('foo', true);
   map.set('bar', false);
   
   map.size // 2
   map.clear()
   map.size // 0
   ```

### 遍历方法

遍历方法同 Set

### 与其他数据结构的互相转换

1. Map 转为数组

   Map 转为数组最方便的方法，就是使用扩展运算符（`...`）

   ```javascript
   const myMap = new Map()
     .set(true, 7)
     .set({foo: 3}, ['abc']);
   [...myMap]
   // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
   ```

2. 数组转为 Map

   将数组传入 Map 构造函数，就可以转为 Map

   ```javascript
   new Map([
     [true, 7],
     [{foo: 3}, ['abc']]
   ])
   // Map {
   //   true => 7,
   //   Object {foo: 3} => ['abc']
   // }
   ```

3. Map 转为对象

   如果所有 Map 的键都是字符串，它可以无损地转为对象

   ```javascript
   function strMapToObj(strMap) {
     let obj = Object.create(null);
     for (let [k,v] of strMap) {
       obj[k] = v;
     }
     return obj;
   }
   
   const myMap = new Map()
     .set('yes', true)
     .set('no', false);
   strMapToObj(myMap)
   // { yes: true, no: false }
   ```

4. 对象转为 Map

   ```javascript
   function objToStrMap(obj) {
     let strMap = new Map();
     for (let k of Object.keys(obj)) {
       strMap.set(k, obj[k]);
     }
     return strMap;
   }
   
   objToStrMap({yes: true, no: false})
   // Map {"yes" => true, "no" => false}
   ```

5. Map 转为 JSON

   Map 转为 JSON 要区分两种情况

   一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON

   ```javascript
   function strMapToJson(strMap) {
     return JSON.stringify(strMapToObj(strMap));
   }
   
   let myMap = new Map().set('yes', true).set('no', false);
   strMapToJson(myMap)
   // '{"yes":true,"no":false}'
   ```

   另一情况,自然是 Map 的键名含有非字符串, 这时可以选择转为数组 JSON

   ```javascript
   function mapToArrayJson(map) {
     return JSON.stringify([...map]);
   }
   
   let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
   mapToArrayJson(myMap)
   // '[[true,7],[{"foo":3},["abc"]]]'
   ```

6. JSON 转为 Map

   JSON 转为 Map，正常情况下，所有键名都是字符串

   ```javascript
   function jsonToStrMap(jsonStr) {
     return objToStrMap(JSON.parse(jsonStr));
   }
   
   jsonToStrMap('{"yes": true, "no": false}')
   // Map {'yes' => true, 'no' => false}
   ```

   但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组

   这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作

   ```javascript
   function jsonToMap(jsonStr) {
     return new Map(JSON.parse(jsonStr));
   }
   
   jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
   // Map {true => 7, Object {foo: 3} => ['abc']}
   ```

## 4. WeakMap

就跟 WeakSet 与 Set 相似, 更详细的用法之后再说吧