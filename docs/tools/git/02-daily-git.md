---
title: Git 的日常
---

Git 的操作指令非常多，此处仅选一些简单的日常操作。



> 注意：以下所有 `[]` 仅作为划分区域，无实际作用，可无视。



## 查看帮助

所有命令行最重要的当然是查看帮助文档：

```bash
git help
```

结果：

```vim
用法：git [--version] [--help] [-C <路径>] [-c <名称>=<取值>]
           [--exec-path[=<路径>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<路径>] [--work-tree=<路径>] [--namespace=<名称>]
           <命令> [<参数>]

这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git help tutorial）
   clone      克隆仓库到一个新目录
   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git help everyday）
   add        添加文件内容至索引
   mv         移动或重命名一个文件、目录或符号链接
   reset      重置当前 HEAD 到指定状态
   rm         从工作区和索引中删除文件

检查历史和状态（参见：git help revisions）
   bisect     通过二分查找定位引入 bug 的提交
   grep       输出和模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作区状态

扩展、标记和调校您的历史记录
   branch     列出、创建或删除分支
   checkout   切换分支或恢复工作区文件
   commit     记录变更到仓库
   diff       显示提交之间、提交和工作区之间等的差异
   merge      合并两个或更多开发历史
   rebase     在另一个分支上重新应用提交
   tag        创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git help workflows）
   fetch      从另外一个仓库下载对象和引用
   pull       获取并整合另外的仓库或一个本地分支
   push       更新远程引用和相关的对象

命令 'git help -a' 和 'git help -g' 显示可用的子命令和一些概念帮助。
查看 'git help <命令>' 或 'git help <概念>' 以获取给定子命令或概念的
帮助。
```



其实上面已经包含了常规的操作了，但一些时候还需要添加具体的例子来便于阅读、记忆。




## 创建分支

创建分支往往会基于某个分支来创建：

```bash
# 本地
# 基于当前分支创建
git checkout master # 切换到 master 分支
git checkout -b branch1 # 根据 master 分支创建 branch1
# 基于 branch2 分支创建
git checkout -b branch1 branch2

# 远程
# 基于 branch1 分支创建（一般会将命名相同，方便 push）
git checkout -b branch1 origin/branch1
```




## 查看日志

> 参数可以组合，更强大。

### 1. 当前分支

```bash
# 查看当前分支的所有日志：
git log
# 查看当前分支的最近 n 条日志：
git log -n2
# 以单行形式查看当前分支的所有日志：
git log --oneline
# 以单行形式查看当前分支的最近 n 条日志：
git log -n4 --oneline
# 添加图形查看当前分支的所有日志：
git log --graph
```

### 2. 所有分支

```bash
# 查看所有分支的所有日志：
git log --all
# 以单行形式查看所有分支的所有日志：
git log --all --oneline
# 查看所有分支的最近 n 条日志：
git log --all -n2
# 以单行形式查看所有分支的最近 n 条日志：
git log --all -n4 --oneline
# 添加图形查看所有分支的最近 n 条日志：
git log --all -n20 --oneline --graph
```

### 3. 某一分支

```bash
# 可以指定某个分支（远程）：
git log origin/gh-pages

# 其余的操作与上方一致
```