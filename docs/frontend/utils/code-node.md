---
title: Node
sidebarDepth: 2
---

## base64

### 1. btoa（编码）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

**EXAMPLES：**

```js
btoa('foobar1'); // 'Zm9vYmFyMQ=='
```

### 2. atob（解码）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const atob = str => Buffer.from(str, 'base64').toString('binary');
```

**EXAMPLES：**

```js
atob('Zm9vYmFyMQ=='); // 'foobar1'1
```



## 控制台

### 1. colorize（色彩）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**DETAIL：**

[colors](https://www.npmjs.com/package/colors) 更详细。

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

**EXAMPLES：**

```js
console.log(colorize('foo').red); // 'foo' (red letters)
console.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)
```



## 操作

### 1. createDirIfNotExists（创建目录）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

**EXAMPLES：**

```js
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```

### 2. JSONToFile（创建文件）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
```

**EXAMPLES：**

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```

### 3. readFileLines（读取文件行）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
```

**EXAMPLES：**

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```

### 4. untildify（替换波浪号）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

**EXAMPLES：**

```js
untildify('~/node'); // '/Users/aUser/node'
```



## crypto

### 1. hashNode（哈希）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const crypto = require('crypto');
const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ),
      0
    )
  );
```

**EXAMPLES：**

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

### 2. UUIDGeneratorNode（UUID）

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const crypto = require('crypto');
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
```

**EXAMPLES：**

```js
UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```



## 环境

### 1. hasFlags

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));
```

**EXAMPLES：**

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```

### 2. isTravisCI

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

**EXAMPLES：**

```js
isTravisCI(); // true (if code is running on Travis CI)
```



## 判断流

### 1. isDuplexStream

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

**EXAMPLES：**

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```

### 2. isReadableStream

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';
```

**EXAMPLES：**

```js
const fs = require('fs');
isReadableStream(fs.createReadStream('test.txt')); // true
```

### 3. isStream

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

**EXAMPLES：**

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```

### 4. isWritableStream

**FROM**

[30 seconds of code (Node)](https://www.30secondsofcode.org/tag/node)

**FUNCTION：**

```js
const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

**EXAMPLES：**

```js
const fs = require('fs');
isWritableStream(fs.createWriteStream('test.txt')); // true
```