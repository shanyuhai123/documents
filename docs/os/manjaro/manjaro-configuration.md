---
title: Manjaro 的配置
---

## manjaro 第一步：添加国内源

### 1. 描述

一些软件需要添加国内的源才可以安装。



### 2. 配置步骤

对于此处指令部分，个人更倾向于使用图形界面。



::: tip 步骤
```sh
# 1. 选择镜像
sudo pacman-mirrors -i -c China -m rank
# 2. 勾选 ustc.edu.cn 这一项
# 3. 添加软件源
# `Octopi` > `工具` > `软件源编辑器`
# 4. 编辑源
# 4.1 中科大源
# Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
# 4.2 清华源
# Server = http://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
# 添加源的 key
sudo pacman -S archlinux-keyring 
# 更新软件列表
sudo pacman -Syy
```
:::