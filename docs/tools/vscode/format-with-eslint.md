# ESLint 格式化

格式化插件 [ESLint](https://eslint.org/)。

## ESLint 依赖

安装依赖：

```bash
# 初始化
npm init -y

# 安装 eslint
npm i eslint -D
# 如果需要支持 ts
npm i typescript -D
```

初始化 eslint：

```bash
# https://docs.npmjs.com/cli/v7/commands/npx
npx eslint --init
```

检测和格式化文件：

```bash
npx eslint yourfile.js
npx eslint yourfile.js --fix
```

也可以配置 `package.json` script：

```json
"scripts": {
  "lint": "eslint --ext .js ./ --fix",
}
```

至于在 `git hooks` 处添加 `lint`，此处就不展开了。

## 启用插件

以上都是命令行完成的。当希望在编辑器 `VSCode` 中获得更好的展示则需要安装一些插件：

1. `Vetur` 更好的支持 `Vue` 文件(与格式化无关)；
2. `ESLint` 支持自动格式化。

配置 `ESLint` 后在编辑器中保存(`Ctrl + S`)即会自动格式化。

```json
// eslint + format
"eslint.options": {
  "extensions": [
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".html",
    ".vue"
  ]
},
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "html",
  "vue"
],
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
}
```

## 配置文件说明

配置文件名为 [.eslintrc](https://eslint.org/docs/user-guide/configuring/)。

### 解析参数 parserOptions

默认解析器（parser） 为 `espree`，可以指定为 `babel` 或 `typescript` 的：

```js
module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  }
}
```

### 环境 env

不同的环境可以提供不同的环境全局变量。例如 `browser` 环境下可以使用 `window` 全局变量；`node` 环境下可以使用 `node` 一系列变量；`jest` 环境下可以使用 `describe`、`test` 等；`es(/d+)` 则对应了 `EcmaScript` 的种种特性。

除此之外，很多时候引入并不知名的第三方包呢？则可使用 `globals`：

```js
module.exports = {
  globals: {
    someLib: true
  }
}
```

注意：

+ `false`、`"readable"`、`"readonly"` 等价
+ `true`、`"writeable"`、`"writable"` 等价

### 扩展 extends

类似于 `babel` 的 `presets` 概念一致，是一整套规范。

```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'standard'
  ]
}
```

说明：

+ `eslint` 为官方扩展
+ `plugin` 为插件类型扩展，`vue` 可以手动调整为 `vue3`，具体看 [eslint-plugin-vue](https://eslint.vuejs.org/)
+ `eslint-config` 常常来自一些团队的约束，如 `eslint-config-airbnb`、`eslint-config-standard`、`eslint-config-google`

### 插件 plugins

`ESLint` 默认可以检测 `JavaScript`，而如果想检测更多，例如 `Vue`、`TypeScript` 则需要另行添加解析了：

```js
module.exports = {
 plugins: [
    'vue',
    '@typescript-eslint'
  ]
}
```

### 规则 rules

当 `extends` 中部分规则不合你口味时可在此一一修改。

## 插件 Prettier

在之前介绍了 `plugins` 可以支持更多的文件格式，那 [prettier](https://prettier.io/) 则是专业的。

### Prettier 依赖及配置

```bash
# 安装 prettier
yarn add prettier --exact -D
# 配置
echo module.exports = {} > .prettierrc.js
touch .prettierignore
```

在 `.prettierrc.js` 中可对[配置](https://prettier.io/docs/en/options.html)稍作修改。

### 搭配 ESLint 一起使用

首先准备插件：

```bash
yarn add eslint-plugin-prettier -D
```

配置：

```js
module.exports = {
 plugins: [
    'standard',
    'plugin:vue/essential',
    'plugin:prettier/recommended' // 放在最后可以覆盖之前规则
  ]
}
```
