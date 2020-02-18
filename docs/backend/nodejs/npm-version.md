---
title: 版本
---

## 命令

```bash
npm help version
npm version -h # 简版说明
```

### 1. 标准版本号：

`MAJOR.MINOR.PATCH`

### 2. 先行版本号(Pre-release Version)

先行版本号是作为正式版之前的版本，格式为在修订版本号(`PATCH`)后追加 `-`，再加上一连串以 `.` 分割的标识符，如：

```bash
npm i vue@3.0.0-alpha.0
```

安装和发布先行版：

```bash
npm i vuepress-plugin-auto-sidebar
# 等价于
npm i vuepress-plugin-auto-sidebar@latest
# 当发布先行版本，例如
npm publish --tag=next
npm i vuepress-plugin-auto-sidebar@next
```



 

## 版本规范

关于指定版本范围的详细信息参见 [semver](https://github.com/npm/node-semver)，常见：

### 1. x

| version | range            |
| :-----: | ---------------- |
|    *    | any              |
|   1.x   | >= 1.0.0 < 2.0.0 |
|  1.2.x  | >= 1.2.0 < 1.3.0 |
|    1    | 1.x              |
|   1.2   | 1.2.x            |

### 2. ~

当涉及先行版本号时只匹配对应 `version`。

|    version    | range                   |
| :-----------: | ----------------------- |
|      ~1       | 1.x                     |
|     ~1.2      | 1.2.x                   |
|    ~1.2.3     | >= 1.2.3 < 1.3.0        |
| ~1.2.3-beta.0 | >= 1.2.3-beta.0 < 1.3.0 |

### 3. ^(默认)

不允许修改左侧非 0 元素。

|    version    | range                    |
| :-----------: | ------------------------ |
|      ^0       | 0.x                      |
|     ^0.x      | 0.x                      |
|     ^0.0      | 0.0.x                    |
|    ^0.0.x     | 0.0.x                    |
|    ^0.0.1     | >= 0.0.1 < 0.0.2         |
|    ^0.1.2     | >= 0.1.2 < 0.2.0         |
|    ^1.2.3     | >= 1.2.3 < 2.0.0         |
| ^1.2.3-beta.2 | \>= 1.2.3-beta.2 < 2.0.0 |



## 版本升级

```bash
npm version [参数]
```

|                 参数                  | 选项                      | 说明                                                         |
| :-----------------------------------: | ------------------------- | ------------------------------------------------------------ |
|              new version              |                           | 符合版本规范即可，当低于之前版本时会导致 `npm publish` 失败。 |
|                 patch                 |                           | 修订号，常用于修复错误。                                     |
|                 minor                 |                           | 次版本号，常用于新增功能，会导致 `patch` 置为 0。            |
|                 major                 |                           | 主版本号，常用于不兼容的 API 修改，会导致 `patch`、`minor` 置为 0。 |
| prepatch/preminor/premajor/prerelease | `--preid=<prerelease-id>` | 常见先行版本号名称有 `alpha`、`beta`。                       |

