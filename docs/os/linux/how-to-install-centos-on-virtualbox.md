---
title: 如何在虚拟机中安装 CentOS
---

## 准备环境

首先需要安装虚拟机，此处选用 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)。

接着需要准备好 CentOS 的 ISO 文件，此处选用 [CentOS7-1810](https://mirrors.tuna.tsinghua.edu.cn/centos/7.6.1810/isos/x86_64/) 版本。

这个其实与之前安装 Ubuntu 时区别不大。



## 虚拟机中加载 CentOS

该步骤与同分类的 [加载 manjaro](/os/linux/how-to-install-manjaro-on-virtualbox.html#虚拟机中加载-manjaro) 步骤基本一致，此处不多做概述。



## 安装 CentOS

启动后会进入安装界面，并出现以下几个选项：

+ Install CentOS 7
+ Test this media & install CentOS 7
+ Troubleshooting（排除故障）
+ Press Tab for full configuration options on menu items

一般直接选中 Install 即可，当然你也可以按下 Tab 键进行额外 [配置](/os/linux/how-to-install-centos-on-virtualbox.html#配置)。

### 1. LOCALIZATION

+ DATE & TIME：修改为 Asia Shanghai；
+ KEYBOARD：默认即可；
+ LANGUAGE SUPPORT：默认即可。

### 2. SOFTWARE

+ INSTALLATION SOURCE：无需改动；
+ SOFTWARE SELECTION：Minimal Install
  - [x] Debugging Tools（调试工具）
  - [x] Compatibility Libraries（兼容库）
  - [x] Development Tools（开发工具）
  - [x] System Administration Tools（管理员工具）

### 3. SYSTEM

+ INSTALLATION DESTINATION：选择 `I will configure partitioning`。

  默认选项是 LVM（逻辑卷管理，动态分配主机磁盘大小），软件实现的动态调整，在高并发状态下磁盘性能下降约 10%;。将其修改为 Standard Partition。

  分区可参考 [Manjaro](/os/linux/how-to-install-manjaro-on-virtualbox.html#安装-manjaro) 的手动分区来。

+ KDUMP：默认即可；

+ NETWORK & HOST NAME：可在此处查看到之前 tab 修改的网卡命名是否生效了，Host name 改为喜欢的名字即可。

  Config 可以在此时进行配置：

  1. General：启用 Automatically connect；
  2. IPv4：桥接网卡时调整为 Manual，配置 Addresses，配置 DNS。

  启用 OFF 改为 ON 即可。

+ SECURITY POLICY：暂时默认。

接着点击同意，开始安装即可。在安装期间可以配置 root 密码，及创建新的用户账号及密码。
最后重启即可成功。



## 配置

### 1. ethX

CentOS7 之前的 ethX 数字编号的网卡命名往往不一定准确对应网卡接口，所以 CentOS7 （enps）就解决了该问题，不过这会影响以往的习惯，所以还可以将命名改回来。

可以通过两种形式进行修改：

1. 形式一，需要在安装系统时，光标移至 Install CentOS 7 上，按下 tab 后追加：

   ```bash
   # 需要注意和之前的内容有一个空格
   net.ifnames=0 biosdevname=0
   ```

2. [形式二](/os/centos/modify-the-network-named-eth)。

