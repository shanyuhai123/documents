---
title: 字符串的扩展
---

## 1. 字符串的 Unicode 表示法

JavaScript 允许采用 `\uxxxx` 形式表示一个字符, 其中 `xxxx` 表示字符的 Unicode 码点

但是这种表示法只限于码点在 `\u0000`~`\uFFFF` 之间的字符, 超过了这个范围的字符, 必须使用两个双字节的表现形式(UTF-8~UTF-16)

```javascript
"\uD842\uDFB7"
// "𠮷"

"\u20BB7" // 超过范围就只显示前四个,7单独作为字符串
// "₻7"
```

为了针对上面存在的问题, ES6 对这一点做了改进

将码点放入大括号内

```javascript
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80' // UTF-16
// true
```

由此, JavaScript 共有六种方法表示一个字符

```javascript
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```

## 2. codePointAt()

JavaScript 内部, 字符以 UTF-16 的格式存储, 每个字符固定位 2 个字节, 对于需要 4 个字节存储的字符 (码点大于 `0xFFFF` 的字符), JavaScript 会认为他们是两个字符

```javascript
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

出现这种字符时就会导致我们代码可能出现问题

ES6 提供了 `codePointAt` 方法, 能够正确处理 4 个字节存储的字符, 该方法返回的码点是十进制, 如果想要十六进制的值可以使用 `toString` 转换

```javascript
let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271, 非正确

s.codePointAt(2) // 97

s.codePointAt(0).toString(16) // 20bb7
s.codePointAt(2).toString(16) // "61"

```

可以注意到, `codePointAt` 方法的参数存在问题, `a` 字符应当是 1, 此处却传入了 2, 要解决该问题就需要使用 `for...of`

```javascript
let s = '𠮷a';
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61
```

## 3. String.fromCodePoint()

上面是将字符转为码点, 该点则是从码点返回对应字符

ES5 提供了 `String.fromCharCode` , 但该方法不能识别 32 位的 UTF-16 字符

ES6 新增了 `String.fromCodePoint` 方法来弥补 ES5 的不足

```javascript
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

若  `String.fromCodePoint` 方法有多个参数, 则会合并为一个字符串返回

## 4. 字符串的遍历器接口

ES6 为字符串添加了 遍历接口器(`Iterator`), 使得字符串可以被 `for...of` 循环遍历

```javascript
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"
```

在上面介绍过了, `for...of` 遍历的最大有点是可以识别大于 `0xFFFF` DE码点, 传统的 `for` 循环无法识别

```javascript
let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷"
```

## 5. normalize()

许多欧洲语言有语调符号和重音符号, 为了表示它们, Unicode 提供了两种方法

1. 直接提供带重音符号的字符, 比如`Ǒ`（`\u01D1`）
2. 提供合成符号, 即原字符与重音符号的合成, 比如`O`（`\u004F`）和`ˇ`（`\u030C`）合成`Ǒ`（`\u004F\u030C`）

这两种方法, 在视觉和语义上都是等价的, 但是 JavaScript 不能识别

```javascript
'\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2
```

ES6 提供了字符串实例的 `normalize()` 方法, 将字符的不同表示方法统一为同样的类型, 这称为 Unicode 正规化

```javascript
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```

## 6. includes(), startsWith(), endsWith()

ES5, JavaScript 只有 `indexOf` 方法, 可以用来确定一个字符是否包含在另一个字符中

ES6新增了三种方法:

+ `includes()`: 返回布尔值, 表示是否找到了参数字符串
+ `startsWith()`: 返回布尔值, 表示参数字符串是否在原字符串的头部
+ `endsWith()`: 返回布尔值, 表示参数字符串是否在原字符串的尾部

```javascript
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数, 表示开始搜索的位置

```javascript
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true, 0-5的位置
s.includes('Hello', 6) // false
```

## 7. repeat()

`repeat` 方法返回一个新的字符串, 表示将原字符串重复 `n` 次

参数如果是小数会取整, 如果是负数或 `Infinity` 会报错

先执行取整, 再判断是否为负数或 `Infinity`

```javascript
'na'.repeat(2.9) // "nana"
'na'.repeat(Infinity) // RangeError
'na'.repeat(-1) // RangeError
'na'.repeat(-0.9) // ""
'na'.repeat(NaN) // ""
```

参数如果是字符串, 则会先转换为数字

```javascript
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
'na'.repeat('11') // "nanananananananananana"
```

## 8. padStart(), padEnd()

ES6 引入了字符串补全长度的功能

如果某个字符串不够指定长度, 则会在头部或尾部补全

+ `padStart()`: 用于头部补全
+ `padEnd()`:  用于尾部补全

```javascript
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// 原字符串大于等于最大长度, 则字符串补全不生效
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
// 若补全时超出最大长度, 则截去超出位数的补全字符串
'abc'.padStart(10, '0123456789') // '0123456abc'
// 若省略第二个参数, 默认使用空格补全长度

```

### 常见用途

1. 数值补全指定位数

   ```javascript
   '1'.padStart(10, '0') // "0000000001"
   '12'.padStart(10, '0') // "0000000012"
   '123456'.padStart(10, '0') // "0000123456"
   ```

2. 提示字符串格式

   ```javascript
   '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
   '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
   ```

## 9. matchAll()

返回一个正则表达式在当前字符串的所有匹配

## 10. 模板字符串

模板字符串是增强版的字符串, 用反引号 (`) 标识

可以当做普通字符串使用, 也可以用来定义多行字符串, 或者在字符串中嵌入变量

### 用法

+ 模板字符串还可以调用函数

  ```javascript
  function fn() {
    return "Hello World";
  }
  
  `foo ${fn()} bar`
  // foo Hello World bar
  ```

+ 模板字符串可以嵌套

  ```javascript
  const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
  `;
  ```

## 11. 实例: 模板编译

首先需要一个模板编译函数 `compile`

```javascript
function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}
```

调用

```javascript
let parse = eval(compile(template));
div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>
```

## 12. 标签模板

模板字符串的功能, 不仅仅是上面这些

它可以紧跟在一个函数后面, 该函数将被调用来处理这个模板字符串

标签模板其实不是模板, 而是函数调用的一种特殊形式, `标签` 指的就是函数, 紧跟在后面的模板字符串就是它的参数

```javascript
alert`123`
// 等同于
alert(123)
```

当模板字符串中存在变量时, 就不是简单的调用了, 而是会将模板字符串先处理为多个参数, 再调用函数

```javascript
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```

示例:

```javascript
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}

msg // "The total is 30 (31.5 with tax)"
```

重要应用

+ 过滤用户的恶意输入

  ```javascript
  let message =
    SaferHTML`<p>${sender} has sent you a message.</p>`;
  
  function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
      let arg = String(arguments[i]);
  
      // Escape special characters in the substitution.
      s += arg.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
  
      // Don't escape special characters in the template.
      s += templateData[i];
    }
    return s;
  }
  ```

+ 多语言转换

  ```javascript
  i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
  // "欢迎访问xxx，您是第xxxx位访问者！"
  ```

## 13. String.raw()

ES6 还为原生的 String 对象, 提供了一个 `raw` 方法

`String.raw` 方法往往用来充当模板字符串的处理函数, 返回一个斜杠都被转义

```javascript
String.raw`Hi\n${2+3}!`;
// 返回 "Hi\\n5!"

String.raw`Hi\u000A!`;
// 返回 "Hi\\u000A!"

String.raw`Hi\\n`
// 返回 "Hi\\\\n"
```

`String.raw` 方法也可以作为正常的函数使用

```javascript
String.raw({ raw: 'test' }, 0, 1, 2);
// 't0e1s2t'

// 等同于
String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2);

// 实现思路
String.raw = function (strings, ...values) {
  let output = '';
  let index;
  for (index = 0; index < values.length; index++) {
    output += strings.raw[index] + values[index];
  }

  output += strings.raw[index]
  return output;
}
```

## 14. 模板字符串的限制

前面提及标签模板中可以嵌套其他语言, 但, 模板字符串默认会将字符串转义, 导致无法嵌入其他语言

```javascript
function latex(strings) {
  // ...
}

let document = latex`
\newcommand{\fun}{\textbf{Fun!}}  // 正常工作
\newcommand{\unicode}{\textbf{Unicode!}} // 报错
\newcommand{\xerxes}{\textbf{King!}} // 报错

Breve over the h goes \u{h}ere // 报错
```

模板字符串会将 `\u00FF` 和 `\u{42}` 当作 Unicode 字符进行转义，所以 `\unicode` 解析时报错

`\x56` 会被当作十六进制字符串转义，所以 `\xerxes` 会报错

`\u` 和 `\x` 在 LaTeX 里面有特殊含义，但是 JavaScript 将它们转义了