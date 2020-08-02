---
title: 一步步启用 babel7
---

## 概念

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
>
> [babel](https://babeljs.io/docs/en/)



在 `babel` 的**使用**当中有两个核心概念：`presets`、`plugins`，此处使用的 `babel` 版本为 `babel7（7.10.5）`。

`babel` 对 `ES2015+` 的代码分为两种情况进行处理：

1. 语法层。`const`、`class`、箭头函数等。
2. API 方法层。`Promise` 或 `Object`、 `Array` 原型链上新增的方法。



## 初始化

新建一个测试环境：

```bash
mkdir babel-test/src babel-test/dist -p
touch babel-test/src/source.js
cd babel-test && yarn init -y
```

`babel` 官网提供了 [Try it out](https://babeljs.io/repl) 可以查看转换的效果，而本地则需要要借助 `@babel/cli` 的命令行工具，但它又依赖于 `@babel/core`，所以：

```bash
yarn add @babel/core @babel/cli
```

创建配置文件 `babel.config.js`，也可使用 `.babelrc`、`package.json` 等来指定规则：

```js
// babel.config.js

module.exports = {
  presets: [],
  plugins: []
}
```

在 `source.js` 添加个箭头函数：

```js
// src/source.js
const fn = () => 1;
```

在什么规则都没有的情况下使用 `babel` 进行转换：

```bash
npx babel source.js

# const fn = () => 1;
```



### 1. plugins

如果想将 `ES2015` 的语法转换为 `ES5` 可配置 `plugins` 来解决。

1. 转换箭头函数。

   首先安装依赖：

   ```bash
   yarn add @babel/plugin-transform-arrow-functions -D
   ```

   再配置规则：

   ```js
   module.exports = {
     presets: [],
     plugins: ["@babel/plugin-transform-arrow-functions"]
   }
   ```

   最后查看效果：

   ```bash
   npx babel src/source.js
   
   # 返回结果
   const fn = function () {
     return 1;
   };
   ```

2. 转换 `const`。

   首先安装依赖：

   ``` bash
   yarn add @babel/plugin-transform-block-scoping -D
   ```

   再配置规则：

   ```js
   module.exports = {
     presets: [],
     plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-block-scoping"]
   }
   ```

   最后查看效果：

   ```bash
   npx babel src/source.js
   
   # 返回结果
   var fn = function () {
     return 1;
   };
   ```

### 2. presets

如果在实际使用中需要将插件一个个的追加上去，那怕是得诞生很多前端架构师了:slightly_smiling_face:，所以就引出了 `presets` 来解决这个问题，例如 `babel-preset-es2015` 就是用来解决 `ES2015` 新增的特性的，其他同理。

不过在 `Try it out` 中可以见到带有年代的 `preset` 只到 2017（对应 2018 年），而现如今都 2020 年了；至于 `@babel/preset-stage-X` 系列显然更让人发愁，众所周知的是 `stage` 草案总是在变的，那特性最后会走到那一步呢？

**总而言之，现在只需要使用 `@babel/preset-env` 就可以了。**

当然实际开发中还需要类型检查、及 `react` 和 `vue` 等特定语法进行转换，所以还有 `@babel/preset-typescript`、`@babel/preset-react` 等预设。

安装依赖：

```bash
yarn add @babel/preset-env -D
```

再配置规则：

```js
module.exports = {
  presets: ["@babel/env"], // 缩写
  plugins: []
}
```

最后查看效果：

```bash
npx babel src/source.js

# 返回结果
"use strict";

var fn = function () {
  return 1;
};
```

`@babel/preset-env` 比较智能的是你可以根据你目标浏览器（`browserslist`）来生成对应的代码，例如此处我们目标浏览器仅为新版的 Chrome。

```bash
echo "last 1 chrome version" > .browserslistrc
```

再次查看效果：

```bash
npx babel src/source.js

# 返回结果
"use strict";

const fn = () => 1;
```

### 3. 注意事项

::: tip plugins & presets

- plugins 在 presets 前执行
- plugins 顺序为从前往后执行
- presets 顺序为从后往前执行

:::



## polyfill

`polyfill` 主要是处理 `babel` 应对的第二种情况 “新增 API”。

### 1. 使用 Promise 新特性

```js
// src/source.js
const name = Promise.resolve("shanyuhai");
```

编译代码：

```bash
npx babel src/source.js

# 输出结果
"use strict";

var num = Promise.resolve("1");
```

可以注意到 `Promise` 没有被转换。

### 2. 启用 polyfill

在以前可能有很多形式来引入 `polyfill`，例如：`html`、`入口 js`、`webpack 配置`，但现在仅需要修改 `@babel/env` 配置项即可：

```js
// babel.config.js

module.exports = {
  presets: [["@babel/env", {
    // 可选参数 false(默认)、entry、usage
    // false 表示不启用，entry、usage 都会根据目标环境来补充 API
    // entry 会根据 `.browserslist` 来补充不支持的 API，不管我们有没有使用到
    // 而 usage 在 `entry` 基础上判断我们是否使用了对应的 API，未使用才会引入
    // 且 entry 需要在入口处手动引入 `@babel/polyfill` 或 `core-js`，而 `usage` 自动注入
    useBuiltIns: "usage"
  }]],
  plugins: []
}
```

执行查看效果：

```bash
npx babel src/source.js

# 输出结果，并提示我们使用 3
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

var name = Promise.resolve("shanyuhai");
```



## 提取辅助函数

举个例子：

```js
// module.js
export class Person {
  constructor (name) {
    this.name = name;
  }

  hello() {
    return `hello, my name is ${this.name}`;
  }
}
```

```js
// source.js
import { Person } from "./module"

class Baby extends Person {
  constructor (name) {
    super(name);
  }

  hello() {
    return `hhhh...`; 
  }
}

const xiaoming = new Baby("xiaoming");
console.log(xiaoming.hello());
```

转换代码：

```bash
npx babel src -d ./dist
```

在生成的两份文件中都可以看到辅助函数：

```js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
```

毫无疑问，对于目前的项目，拥有几十甚至上百个模块都是非常常见的事情，这会造成最终生成文件的增大。

### 1. runtime

安装提取插件：

```bash
yarn add @babel/plugin-transform-runtime -D
```

在 `plugins` 中启用：

```js
module.exports = {
  presets: [["@babel/env", {
    useBuiltIns: "usage"
  }]],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
}
```

再次转换查看效果：

```js
// module.js
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
```

可以看到利用了 `@babel/runtime` 的包提供辅助函数模块。
