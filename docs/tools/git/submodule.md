---
title: 子模块
---

## 概念

当希望某个项目依赖于另外一个项目，虽然有 lerna 的方案可以选择，但若希望它具有独立的 `issue`、`feature` 管理，那么可能需要 `multi-repo` 的形式。

而 `submodule` 可以做到该行为。



## 使用

```bash
git submodule -h

git submodule [--quiet] add [-b <branch>] [-f|--force] [--name <name>] [--reference <repository>] [--] <repository> [<path>]
```



## 移除 submodule

安装很简单，但是删除则有些步骤了。

```bash
# 1. 移除 submodule
git submodule deinit -f /path/module_name

# 2. 从跟踪中移除
git rm -f /path/module_name

# 3. 移除 .git 记录
rm -rf .git/modules/path/module_name
```