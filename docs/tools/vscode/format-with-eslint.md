---
title: ESLint 格式化
---

## 介绍

格式化插件 [ESLint](https://cn.eslint.org/)。



## ESLint 依赖

安装 `ESLint` 依赖，然后根据提示一步步确认生成 `.eslintrc.js` 配置文件：

```bash
npm i eslint -D
./node_modules/.bin/eslint --init
```

检测并格式化文件：

```bash
./node_modules/.bin/eslint yourfile.js
./node_modules/.bin/eslint yourfile.js --fix
```

个人更喜欢 `ESLint` + `Prettier` 的组合，安装对应的依赖：

```bash
npm i prettier eslint-plugin-prettier  @vue/eslint-config-prettier -D
# 移除无需的依赖
npm un eslint-config-google
```

配置 `.eslintrc.js`：

```js
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier', // 替换为安装的 `prettier`
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    // 'quotes': ['error', 'single'] // 启用单引号
  },
};
```

当希望自定义规则时，除了添加 `rules`，还需要配置 `.prettierrc.js`：

```js
// 以 单引号 示例
module.exports = {
  singleQuote: true
};
```



## 启用插件

以上都是命令行完成的，回到主题，当希望在编辑器 `VSCode` 中获得更好的展示则需要安装一些插件：

1. `Vetur` 更好的支持 `Vue` 文件(与格式化无关)；
2. `ESLint` 支持自动格式化。

配置 `ESLint` 后在编辑器中保存(`Ctrl + S`)即会自动格式化。

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

当希望对当前目录下的所有 `.js`、`.vue` 进行格式化时，在命令行执行：

```bash
./node_modules/.bin/eslint --ext .js,.vue ./ --fix
```

若觉得其麻烦可以在 `package.json` 中配置：

```json
"scripts": {
  "lint": "./node_modules/.bin/eslint --ext .js,.vue ./ --fix",
},
```

再在命令行执行 `npm run lint` 即可，当然你还可以在 `git hooks` 处添加 `lint`，不过此处就不展开了。

