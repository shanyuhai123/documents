---
title: ESLint 格式化
---

## 介绍

格式化插件 [ESLint](https://cn.eslint.org/)。



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

以上都是命令行完成的，回到主题，当希望在编辑器 `VSCode` 中获得更好的展示则需要安装一些插件：

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

