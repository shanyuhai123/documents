---
title: 正则的扩展
---

## 1. RegExp 构造函数

ES5 中, RegExp 构造函数的参数有两种情况

+ 参数是字符串, 这时第二个参数表示正则表达式的修饰符(`flag`)

  ```javascript
  var regex = new RegExp('xyz', 'i');
  // 等价于
  var regex = /xyz/i;
  ```

+ 参数是一个正则表达式, 这时会返回一个原有正则表达式的拷贝, 此时不允许使用第二个参数添加修饰符, 否则会报错

  ```javascript
  var regex = new RegExp(/xyz/i);
  // 等价于
  var regex = /xyz/i;
  ```

ES6 中, 修改了这种行为, 如果 `RegExp` 构造函数第一个参数是一个正则对象, 那么可以使用第二个参数指定修饰符

并且, 返回的正则表达式会忽略原有的正则表达式的修饰符

```javascript
new RegExp(/abc/ig, 'i').flags
// "i" // 可以看到原修饰符已被忽略
```

## 2. 字符串的正则方法

字符串对象共 4 个方法, 可以使用正则表达式: `match()`, `replace()`, `search()` 和 `split()`

ES6 将这 4 个方法, 在语言内部全部调用 `RegExp` 的实例方法, 从而做到所有与正则相关的方法, 全部定义在 `RegExp` 对象上

+ `String.prototype.match` 调用 `RegExp.prototype[Symbol.match]`

  其余同理

## 3. u 修饰符

ES6 新增了 `u` 修饰符, 含义为 `Unicode` 模式, 用来正确处理大于 `\uFFFF` 的 Unicode 字符

```javascript
// ES5 中不能识别四个字节的 UTF-16 编码, 导致第二行识别为 true(这是错误的行为) 

/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true
```

加上 `u` 修饰符后会修改下面表达式的行为

1. 点字符

   点 `.` 字符在正则表达式中可以识别出换行符以为的任意单字符

   但做不到识别码点大于 `0xFFFF` 的 Unicode 字符

   ```javascript
   var s = '𠮷';
   
   /^.$/.test(s) // false
   /^.$/u.test(s) // true
   ```

2. Unicode 字符表示法

   ES6 新增的大括号表示 Unicode字符, 但在正则表达式中必须加上 `u` 修饰符才能识别大括号, 否则视为量词

   ```javascript
   /\u{61}/.test('a') // false
   /\u{61}/u.test('a') // true
   /\u{20BB7}/u.test('𠮷') // true
   ```

3. 量词

   使用 `u` 修饰符后, 所有量词都会正确识别码点大于 `0xFFFF` 的 Unicode 字符

   ```javascript
   /a{2}/.test('aa') // true
   /a{2}/u.test('aa') // true
   /𠮷{2}/.test('𠮷𠮷') // false
   /𠮷{2}/u.test('𠮷𠮷') // true
   ```

4. 预定义模式

   预定义模式 `\S`, 匹配所有非空白字符

   ```javascript
   /^\S$/.test('𠮷') // false
   /^\S$/u.test('𠮷') // true
   ```

5. i 修饰符

   有些 Unicode 字符的编码不同, 但是字型很近

   ```javascript
   /[a-z]/i.test('\u212A') // false
   /[a-z]/iu.test('\u212A') // true
   ```

> 总得来说, 就是超过码点的字符串都需要加 `u` 修饰符

## 4. RegExp.prototype.unicode 属性

正则实例对象新增 `unicode` 属性, 表示是否设置了 `u` 修饰符

```javascript
const r1 = /hello/;
const r2 = /hello/u;

r1.unicode // false
r2.unicode // true
```

## 5. y 修饰符

ES6 新增了 `y` 修饰符, 叫做 `粘连` 修饰符

`y` 修饰符与 `g` 修饰符了类似, 也是全局匹配, 后一次匹配都从上一次匹配成功的下一个位置开始

不同处在于, `g` 修饰符只要剩余位置中存在匹配即可, 而 `y` 修饰符确保匹配必须从剩余的第一个位置开始

```javascript
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null

// 修改一下表达式, 使 `y` 修饰符返回结果
var s = 'aaa_aa_a';
var r = /a+_/y;

r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
```

实际上, `y` 修饰符隐藏了头部匹配的标识 `^`

`y` 修饰符的设计本意, 就是让头部匹配的标识 `^` 在全局中都有效

## 6. RegExp.prototype.sticky 属性

检测是否设置了 `y` 修饰符

```javascript
var r = /hello\d/y;
r.sticky // true
```

## 7. RegExp.prototype.flags 属性

返回正则表达式的修饰符

```javascript
// ES5 的 source 属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'
```

## 8. s 修饰符: dotAll 模式

终止符: 表示一行的终结

+ `U+000A` 换行符（`\n`）
+ `U+000D` 回车符（`\r`）
+ `U+2028` 行分隔符（line separator）
+ `U+2029` 段分隔符（paragraph separator）

```javascript
/foo.bar/.test('foo\nbar')
// false // 因为 . 不匹配 \n

// 变通的写法, 但不太符合感觉
/foo[^]bar/.test('foo\nbar')
// true

// 引入 `s` 修饰符解决这个问题
/foo.bar/s.test('foo\nbar') // true

const re = /foo.bar/s;
// 另一种写法
// const re = new RegExp('foo.bar', 's');

re.test('foo\nbar') // true
re.dotAll // true
re.flags // 's'

```

## 9. 后行断言

`ES2018` 引入了后行断言

断言:

+ 先行

  "先行断言" 指的是, `x` 只有在 `y` 前面才匹配, 必须写成 `/x(?=y)/`

  比如, 只匹配百分号之前的数字, 要写成 `/\d+(?=%)/` 

  "先行否定断言" 指的是, 只有 `x` 不在 `y` 前面才匹配, 必须写成 `/x(?|y)/` 

  比如, 只匹配不在百分号之前的数字, 要写成 `/\d+(?|%)/`

  ```javascript
  /\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
  /\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
  ```

+ 后行

  "后行断言" 指的是, `x` 只有在 `y` 后面才匹配, 必须写成 `/(?<=y)x/` 

  比如, 只匹配美元符号后面的数字, 要写成 `/(?<=\$)\d+/`

  "后行否定断言" 指的是, `x` 只有不在 `y` 后面才匹配, 必须写成 `/(?<!y)x/` 

  比如, 只匹配不在美元符号后面的数字, 要写成 `/(?<!\$)\d+/`

  ```javascript
  /(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
  /(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
  ```

## 10. Unicode 属性类

`ES2018` 引入一种新的类的写法 `\p{...}` 和 `\P{...}`, 允许正则表达式匹配符号 Unicode 某种属性的所有字符, 使用这两种类时记得添加 `u` 修饰符

```javascript
// \p{Script=Greek}指定匹配一个希腊文字母

const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π') // true
```

一直以来, 正则表达式的大写是小写的反向行为, 所以 `\P{...}` 即匹配所有不满足条件的字符

## 11. 具名组匹配

```javascript
// 每一组的匹配含义不容易看出来
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31
```

`ES2018` 引入了 `具名匹配组`, 允许为每一组匹配制定一个名字, 既便于阅读代码, 又便于引用

```javascript
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
```

### 解构赋值和替换

可以使用解构赋值直接从匹配结果上为变量赋值

```javascript
// 解构赋值
let {groups: {key, value}} = /^(?<key>.*):(?<value>.*)$/u.exec('foo:bar');
key  // foo
value  // bar

// 替换
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'
```

### 引用

如果要在正则表达式内引用某个 "具名匹配组", 可以使用 `\k<组名>` 的写法

```javascript
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
```

## 12. String.prototype.matchAll

如果一个正则表达式在字符串中有多个匹配, 现在一般使用 `g` 修饰符或 `y` 修饰符, 再在循环中逐一取出

```javascript
var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';

var matches = [];
var match;
while (match = regex.exec(string)) {
  matches.push(match);
}

matches
// [
//   ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"],
//   ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"],
//   ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
// ]
```

目前的一个提案, 增加了 `String.prototype.matchAll` 方法, 可以一次性取出所有匹配, 不过返回的结果是一个遍历器(`Iterator`), 而不是数组

```javascript
const string = 'test1test2test3';

// g 修饰符加不加都可以
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
}
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
```

遍历器转为数组很简单

```javascript
// 转为数组方法一
[...string.matchAll(regex)]

// 转为数组方法二
Array.from(string.matchAll(regex));
```

