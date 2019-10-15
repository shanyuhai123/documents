---
title: 30s code node
---

> [30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)



## JSONToFile

**FUNCTION：**

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
```

**CONCEPTS：**

将 JSON 写到文件中。`JSON.stringify` 参数为 ` (obj[, replacer [, space]）`，space 为缩进，replacer 存在多种[情况](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#%E6%8F%8F%E8%BF%B0)。

**EXAMPLES：**

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```



## UUIDGeneratorNode

**FUNCTION：**

```js
const crypto = require('crypto');
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
```

**CONCEPTS：**

生成 UUID。

**EXAMPLES：**

```js
UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```



## atob

**FUNCTION：**

```js
const atob = str => Buffer.from(str, 'base64').toString('binary');
```

**CONCEPTS：**

base64 解码。

**EXAMPLES：**

```js
atob('Zm9vYmFy'); // 'foobar'
```



## btoa

**FUNCTION：**

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

**CONCEPTS：**

base64 编码。

**EXAMPLES：**

```js
btoa('foobar'); // 'Zm9vYmFy'
```



## colorize

**FUNCTION：**

```js
const colorize = (...args) => ({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});
```

**CONCEPTS：**

控制台输出彩色 log。

**EXAMPLES：**

```js
console.log(colorize('foo').red); // 'foo' (red letters)
console.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)
```