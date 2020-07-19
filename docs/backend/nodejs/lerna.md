---
title: Lerna
---

## 说明

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