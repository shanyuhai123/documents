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



## createDirIfNotExists

**FUNCTION：**

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

**CONCEPTS：**

创建目录。

**EXAMPLES：**

```js
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```



## hasFlags

**FUNCTION：**

```js
const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));
```

**CONCEPTS：**

执行 node 脚本传参（配置）。

**EXAMPLES：**

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```



## hashNode

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

**CONCEPTS：**

为字符串创建 hash。

**EXAMPLES：**

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```



## isDuplexStream

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

**CONCEPTS：**

判断是否为 Duplex 流。尚不能理解作用。

**EXAMPLES：**

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```



## isReadableStream/isWritableStream

**FUNCTION：**

```js
const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';

const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

**CONCEPTS：**

判断是否为可读/可写流。

**EXAMPLES：**

```js
const fs = require('fs');
isReadableStream(fs.createReadStream('test.txt')); // true
isWritableStream(fs.createWriteStream('test.txt')); // true
```



## isTravisCI

**FUNCTION：**

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

**CONCEPTS：**

检查是否为 Travis CI 环境。

**EXAMPLES：**

```js
isTravisCI(); // true (if code is running on Travis CI)
```



## readFileLines

**FUNCTION：**

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
```

**CONCEPTS：**

将文件行内容组成数组。

**EXAMPLES：**

```js
/*
  line1
  line2
  line3
*/
// 文件内容如上
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```



## untildify

**FUNCTION：**

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

**CONCEPTS：**

将波浪号指定为系统用户 ~(家目录)。

**EXAMPLES：**

```js
untildify('~/node'); // '/home/shanyuhai/node'
```