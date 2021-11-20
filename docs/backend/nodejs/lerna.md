---
description: 使用 Lerna 维护关联的模块
tags:
  - lerna
sidebarDepth: 2
---

# 使用 Lerna 维护关联的模块

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.
>
> -- [lerna](https://github.com/lerna/lerna)

对于维护多个 `package` 来说，都会遇到一个选择，是选择 `mono-repo` 还是 `multi-repo`。`multi-repo` 一个模块（module）一个仓库（repository），而 `mono-repo` 是所有模块整合在一个仓库，[语义来源](https://en.wikipedia.org/wiki/Monorepo)。

## 使用

`lerna` 初始化分为两种模式：`fix`（默认，锁定模式，项目内的所有 package 共用版本号）、`independent`（独立模式，每个 `package` 拥有独立版本号）。个人认为大部分情况下都应该使用独立模式，即每个 `package` 都有自己的版本号。

```bash
# 安装
npm i lerna -g

# git
git init lerna-repo && cd lerna-repo

# lerna
lerna init [--independent] # 生成下方文件夹
#lerna-repo
#├── lerna.json
#├── package.json
#└── packages

# 创建 packages
lerna create pkg-1 -y
lerna create pkg-2 -y
```

## 依赖

### 1. 工具依赖

对于 `eslint`、`commit-lint` 等工具依赖，可以直接使用 `yarn` 或 `npm` 安装到顶层。

### 2. package 依赖

针对 package 的依赖可以交由 `lerna` 安装。

1. 所有 packages

   ```bash
   lerna add module1
   ```

2. 单独 package

   ```bash
   lerna add module1 packages/pkg-1
   ```

3. 卸载

   ```bash
   # 所有
   lerna exec -- "yarn remove pkg-2"
   # 指定
   lerna exec --scope=pkg-1 "yarn remove pkg-2"
   # 或使用空格替代 `=`
   lerna exec --scope pkg-1 "yarn remove pkg-2"
   ```

### 3. workspaces

为了减少子模块的重复依赖可以使用 `workspaces` 将依赖提取到上级目录。

启用该模式非常简单：

1. 在 `lerna.json` 中添加 `"useWorkspaces": true`

2. 在 `package.json` 中添加 `"workspaces": ["packages/*"]`

   按照约定俗成将模块放置于 `packages` 目录下

有时候也会希望不同的模块走不同的依赖版本，这需要使用 [nohoist](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)：

> 注意，需要模块为 `private`

```json
"workspaces": {
  "packages": ["packages/*"],
  "nohoist": ["**/vue", "**/vue/**"]
}
```

也可以在模块中进行设置：

```json
"workspaces": {
  "nohoist": ["vue", "vue/**"]
}
```

`lerna bootstrap` 也提供了参数 [--nohoist](https://github.com/chinanf-boy/lerna-zh/blob/master/commands/bootstrap/README.zh.md#--nohoist-glob)。

## 更多命令

- [`lerna publish`](https://github.com/lerna/lerna/blob/master/commands/publish#readme)
- [`lerna version`](https://github.com/lerna/lerna/blob/master/commands/version#readme)
- [`lerna bootstrap`](https://github.com/lerna/lerna/blob/master/commands/bootstrap#readme)
- [`lerna list`](https://github.com/lerna/lerna/blob/master/commands/list#readme)
- [`lerna changed`](https://github.com/lerna/lerna/blob/master/commands/changed#readme)
- [`lerna diff`](https://github.com/lerna/lerna/blob/master/commands/diff#readme)
- [`lerna exec`](https://github.com/lerna/lerna/blob/master/commands/exec#readme)
- [`lerna run`](https://github.com/lerna/lerna/blob/master/commands/run#readme)
- [`lerna init`](https://github.com/lerna/lerna/blob/master/commands/init#readme)
- [`lerna add`](https://github.com/lerna/lerna/blob/master/commands/add#readme)
- [`lerna clean`](https://github.com/lerna/lerna/blob/master/commands/clean#readme)
- [`lerna import`](https://github.com/lerna/lerna/blob/master/commands/import#readme)
- [`lerna link`](https://github.com/lerna/lerna/blob/master/commands/link#readme)
- [`lerna create`](https://github.com/lerna/lerna/blob/master/commands/create#readme)
- [`lerna info`](https://github.com/lerna/lerna/blob/master/commands/info#readme)
