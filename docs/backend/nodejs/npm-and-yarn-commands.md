---
description: 简单聊聊 NPM 和 YARN 的命令
tags:
  - npm
  - yarn
  - npx
sidebarDepth: 2
---

# 简单聊聊 NPM 和 YARN 的命令

## 熟悉而又陌生的 npx

`npx` 是 `npm v5.2.0`  版本引入的工具，其可以快速体验想要尝试的包而不必执行 `npm init`、`npm install`、`配置 scripts` 等步骤。

默认情况下，它会去检查包是否存在（`node_modules/.bin` 及环境变量 `$PATH`），如果存在则执行，不存在则临时安装再运行。

```bash
# 查看指令的帮助信息
npx -h
```

### 1. 常见的作用

1. 避免与全局包冲突，可以测试新的版本
2. 可直接测试 github 上的模块

### 2. 配合参数

1. `--no-install`：强制使用本地模块，不存在则报错
2. `--ignore-existing`：强制使用远程模块

## 认识一下 yarn

> 现在一些包默认都使用 `yarn` 了。

### 1. 强制使用 yarn

该脚本来自于 [Vue](https://github.com/vuejs/vue-next/blob/master/scripts/checkYarn.js)：

```js
if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\u001b[39m\n'
  )
  process.exit(1)
}
```

配合上 `package.json` 的 `preinstall` 生命周期：

```json
{
  "scripts": {
    "preinstall": "node ./scripts/checkYarn.js"
  }
}
```

这样就大功告成了。

### 2. 关于 link 的限制

`yarn link` 并不像 `npm link` 一样可以全局使用，需要安装到指定文件夹下才可使用，当然也是有一定的方法的：

```json
{
  "scripts": {
    "link:add": "yarn global add file:$(pwd)"
  }
}
```

执行 `yarn link:add` 即可。

## npm 的传参

常见的命令行传参是这样：

```bash
# POSIX 风格
npm -h
# GNU 风格
npm --help
# 或许你还见过 Java 风格的，那简直是异教徒！
```

很明显这个参数都是传递给 `npm` 的，而在使用 `npm run` 时我们实际希望使用的时 `package.json` 中 `scripts` 的命令，为了让参数传递到下层，那么自然需要一些[手段](https://docs.npmjs.com/cli/v6/commands/npm-run-script#description)：

```bash
npm run test -- --grep="pattern"
```

在正常的传参前增加 `--` 即可达成。

## 从模板到 create 命令

常常会根据模板创建项目：

```bash
# yarn
yarn create example-app <project-name>

# npm
npm create example-app <project-name>

# npx
npx create-example-app <project-name>
```

### 1. 查看帮助

简单看下 `create` 命令该怎么用。

```bash
# 查看帮助
npm create -h

# 输出
npm init [--force|-f|--yes|-y|--scope]
npm init <@scope> (same as `npx <@scope>/create`)
npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)

aliases: create, innit
```

可以发现是 `init` 的别名，过去常用 `npm init -y` 来生成 `package.json`，这是因为匹配到了第一项；而在后面添加 `name` 时，则匹配到了其他项。

### 2. 一个小测试

```bash
npm create some-example-app

# npm ERR! 404  'create-some-example-app@latest' is not in the npm registry.
```

提示是 `create-some-example-app@latest`，再回顾下前面的查看帮助，可以发现是在前面增加了 `create` 字段。

那我们常用的 `yarn create @vitejs/app` 呢？前往 `npm` 可以看到有一个 [@vitejs/create-app](https://www.npmjs.com/package/@vitejs/create-app)，符合查看帮助的最后一项。

## 版本

一个标准的版本号：`MAJOR.MINOR.PATCH`，版本规范参考 [semver](https://semver.org/)。

除此外还有先行版本，格式为 `MAJOR.MINOR.PATCH-FLAG.N`，`FLAG` 常见的有 `alpha(内测)`、`beta`，在 Vue 中又认识了 `rc`。

```bash
npm version prerelease --preid=alpha
```

### 1. 打 tag

即使你的版本是 `-alpha.0` 的先行版本，你在发布时直接指定为 `npm publish`，默认也是 `latest` 的标签，这会作为最新版被用户下载。

如果发错了标签不用担心，可以使用 [npm dist-tag](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag) 进行修复：

```bash
npm dist-tag add some-package@1.1.0-beta.0 beta
npm dist-tag add some-package@1.0.0 latest
```

### 2. 配合 git

一般我们还会根据 version 变更打标签推送到 `git`：

```bash
# major、minor、patch
# premajor、preminor、prepatch、prerelease --preid=<alpha|beta|rc>
npm version patch -m "chore: 发布 tag %s"
```

## 回归 npm

一些常用命令：

```bash
# 查看安装在全局 npm 包
npm list -g --depth 0

# npm install 失败时强制清理
npm cache clean --force
```
