---
title: 常用软件
---

## 1. TeamViewer

### 介绍

远程桌面访问解决方案，远程支持，在线协作。

### 使用中存在的问题

使用 TeamViewer 提示：未就绪，请检查您的连接。

### 解决方案

::: tip 一行解决
```sh
sudo teamviewer --daemon enable
```
:::

## 2. rdesktop

### 介绍

一个开源 `UNIX` 客户端，用于连接到 `Windows` 远程桌面服务，能够本地使用远程桌面协议（RDP）来呈现用户的 `Windows` 桌面。

### 使用方式

::: tip 步骤
1. 首先需要安装 `rdesktop`
2. 接着直接使用 `rdesktop ip:port -u username`
:::
::: danger 注：
1. 添加 -f 参数可以以全屏模式进入
2. 在全屏模式下按 `ctrl+alt+enter` 可以退出全屏（这个才是想记录的……）
3. 其余参数见谷歌
:::

## 3. FileZilla Client

### 介绍

一个免费的软件跨平台FTP应用程序，由 `FileZilla Client` 和 `FileZilla Server` 组成。

### 使用中存在的问题

连接的文件夹及文件存在中文乱码问题。

### 解决方案

::: tip 步骤
1. 点击左上角 `文件`
2. 点击站点管理器
3. 点击字符集
4. 选择 `强制 UTF-8`
5. 确定
:::

## 4. Zsh

### 介绍

一个更为酷炫的 shell，当然在服务器你还是老老实实的使用 bash，一切求稳。

### 使用中存在的问题

从 zsh 切换到 bash 需要重启电脑，要重新执行的时 `.zshrec` 而不是 `.bashrc`

### 解决方案

::: tip 操作
```bash
# 从 bash 切换到 zsh
exec zsh
source .zshrc
# 从 zsh 切换到 bash
exec bash
source .bashrc
# 设置开机启动的默认
chsh -s /bin/bash
chsh -s /bin/zsh
# 可以在 shells 中查看有哪些可以切换
cat /etc/shells
```
:::
::: danger 注：
zsh 在使用时会存在一些问题:

1. 当使用 `source ~/.zshrc` 切换主题时，`command not found: fortune`

   安装 `fortune-mod` 即可

:::

