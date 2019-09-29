---
title: Manjaro 下增强 VirtualBox 工具
---

## 起因

由于钉钉、Tim 及 360浏览器的不支持，wine 已经无法支撑日常工作了，所以就需要一个虚拟机来提供日常的服务了。

选择了对配置要求较低的 win7。



## 前言

关于安装可[参考](/os/manjaro/most-used-softwares.html#virtualbox)。

不过存在的问题是无法使用增强功能（剪切板、拖拽、共享文件夹）。

在搜寻方案的途中寻找了很多解决办法并一一尝试，所以导致尚不清楚解决问题的真正方案。

::: warning
[1. how to install and setup Virtualbox on Manjaro](https://blog.myhappydata.com/linux/manjaro/2018/05/15/how-to-install-and-setup-virtualbox-on-manjaro.html)

该部分主要是补齐一些依赖。

[2. Installing Pamac](https://wiki.manjaro.org/index.php/Pamac)

该部分主要是安装 pamac，为下一部分服务。

[3. Network fails in VirtualBox](https://forum.manjaro.org/t/network-fails-in-virtualbox/86309)

该部分猜测是安装好了需要的增强镜像。

:::



## 尝试

### 1. 初试

初步测试时，偶然的共享剪切板成功了，但是其余部分依然失败了。

多次重启后偶有复现剪切板成功，于是就猜测是否是 win7 进程存在问题，重启该部分进程成功启用剪切板，猜测正确，但依然无法做到拖拽和共享文件夹。

### 2. 解决

后面突然想到其实最主要的是安装增强工具。

之前安装时总是提示安装失败，存在异常，这一次在之前的配置后安装成功，唯一需要注意的是需要新建一个存储，用于挂载 `VBoxGuestAdditions.iso` 文件。

挂载成功后开机，即可在我的电脑中找到挂载的镜像，找到 win7 的执行文件（存在其余系统的执行脚本），安装重启后即可使用剪切板、拖拽、共享文件夹功能。