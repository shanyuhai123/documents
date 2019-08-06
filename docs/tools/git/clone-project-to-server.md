---
title: clone 项目到服务器
---

## 介绍

之前在服务器使用 git clone 拷贝 github 的项目时一直使用的是 https 协议，因为每次使用 git 协议时均会报错。
```sh
Bad owner or permissions on ~/.ssh/config
```

一开始认为是缺乏权限，那就使用 sudo 命令，这会调用 root 对应的目录，不符合需求。后来突然想起 `.ssh` 文件夹未做权限设置，首先可以直接去查看 `.ssh` 目录的权限 `ls -al .ssh`

## 解决方案

```sh
# 方案一
chmod 600 ~/.ssh/config

# 方案二
chown $USER ~/.ssh/config
```