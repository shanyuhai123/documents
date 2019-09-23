---
title: Git 飞行指南
---

## [重写历史](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

### 0. 修改编辑器

在开始之前修改编辑器为 vim，否则会选用系统默认的，比如 nano（完全不会用 :cry:）。

```bash
cat .git/config # 查看配置
git config core.editor vim
cat .git/config # 验证
```

### 1. 修改最新 commit 信息

```bash
git commit --amend
```

### 2. 修改之前 commit 信息

```bash
git log # 获取 hash
# hash 值为对应元素的父元素的hash
git rebase -i hash
# 找到要修改的 commit（即第一行 commit）
# 将 pick 修改为 r，保存退出
# 自动切换至修改 commit 信息界面，修改即可

git log # 验证

```

### 3. 合并多个 commit 信息

```bash
git log # 获取 hash
# hash 值为对应元素最后一个的父元素的hash
# 个人的理解是，你改变了信息后就无法证明自己是自己，需要介绍父级节点来证明自己
git rebase -i hash
# 找到要修改的 commit
# 即保留第一行 commit，修改下面行至你期望的目标行
# 将 pick 修改为 s，保存退出
# 自动切换至修改 commit 信息界面，修改即可

git log # 验证
```

当然还有更简单一些的方法：

```bash
git log # 获取 hash
# hash 值为对应元素最后一个的父元素的hash
git reset --soft 3bc965a619447a75375aba # hash 也可以更为暴力的改为 master（对应分支名,一般是以 feature/bugfix 创建分支，所以该行为简单粗暴）

git commit -am "更简单的方法" # -am 对已跟踪的文件提交信息，不会影响尚未 add 的文件
git log # 验证
```

