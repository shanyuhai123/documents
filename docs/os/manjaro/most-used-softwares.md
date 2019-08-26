---
title: Manjaro 的常用软件
---

## TeamViewer

### 1. 介绍

远程桌面访问解决方案，远程支持，在线协作。

### 2. 使用中存在的问题

使用 TeamViewer 提示：未就绪，请检查您的连接。

### 3. 解决方案

::: tip 一行解决
```sh
sudo teamviewer --daemon enable
```
:::



## rdesktop

### 1. 介绍

一个开源 `UNIX` 客户端，用于连接到 `Windows` 远程桌面服务，能够本地使用远程桌面协议（RDP）来呈现用户的 `Windows` 桌面。

### 2. 使用方式

::: tip 步骤
1. 首先需要安装 `rdesktop`
2. 接着直接使用 `rdesktop ip:port -u username`
:::
::: danger 注：
1. 添加 -f 参数可以以全屏模式进入
2. 在全屏模式下按 `ctrl+alt+enter` 可以退出全屏（这个才是想记录的……）
3. 其余参数见谷歌

:::



## FileZilla Client

### 1. 介绍

一个免费的软件跨平台FTP应用程序，由 `FileZilla Client` 和 `FileZilla Server` 组成。

### 2. 使用中存在的问题

连接的文件夹及文件存在中文乱码问题。

### 3. 解决方案

::: tip 步骤
1. 点击左上角 `文件`

2. 点击站点管理器

3. 点击字符集

4. 选择 `强制 UTF-8`

5. 确定

:::



## Zsh

### 1. 介绍

一个更为酷炫的 shell，当然在服务器你还是老老实实的使用 bash，一切求稳。

### 2. 使用中存在的问题

从 zsh 切换到 bash 需要重启电脑，要重新执行的时 `.zshrec` 而不是 `.bashrc`

### 3. 解决方案

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



## Shodowsocks

### 1. 介绍

一款用于上网的工具。

### 2. 使用方式

::: tip 步骤

1. 首先需要安装 `shadowsocks` 。

2. 接着修改安装在 `/etc/shadowsocks/config.json` 文件：
   
   ```json
   {
       "server": "xxx.xxx.xxx.xxx",
       "server_port": port,
       "local_address": "127.0.0.1",
       "local_port": 1080,
       "password": "yourpassword",
       "timeout": 300,
       "method": "aes-256-cfb",
       "fast_open": false,
       "workers": 1,
       "prefer_ipv6": false
   }
   ```
   
   不一定非要是 `config` 这个文件名，设置多个可以快速切换。
   
3. 启动，选择一个你需要的配置来启动，此处选用 `config`：

   ```bash
   sslocal -c /etc/shadowsocks/config.json
   ```

4. 守护，系统优化时，重启时启动的任务就没了，所以需要添加一个守护：

   ```bash
   systemctl start shadowsocks@config # 守护
   systemctl enable shadowsocks@config # 开机自启
   ```

5. 接下来就是代理了。

:::



## VirtualBox

### 1. 介绍

一款虚拟机软件。

### 2. 使用方式

::: tip 步骤

1. 首先需要安装 `virtualbox` 。

2. 然后准备好对应系统的 `IOS` 文件启动即可。
   

:::

::: danger 注：
virtualbox 在启动时直接失败:

1. 部分错误提示信息：

   ```bash
   # Kernel driver not installed
   # The VirtualBox Linux kernel driver (vboxdrv) is either not loaded or there is a permission problem with /dev/vboxdrv. Please reinstall the kernel module by executing
   # '/sbin/vboxconfig'
   # as root.
   # ......
   ```

2. 解决步骤来源于：[VirtualBox: How To Fix Failure In Starting VM (On Manjaro Linux)](https://dev.to/nabbisen/virtualbox-how-to-solve-a-problem-about-failure-in-starting-vm-on-manjaro-linux-49fg)

3. 获取操作系统版本细节

   ```bash
   uname -r
   # 4.19.56-1-MANJARO
   ```

4. 安装软件

   + virtualbox
   + virtualbox-host-dkms
   + linux419-virtualbox-host-modules <Badge text="对应的版本 419" type="warn"/>

5. 重新执行

   ```bash
   sudo vboxreload 
   ```

:::



## VMware Workstation

### 1. 介绍

一款虚拟机软件，基本使用方式与 VirtualBox 一致。

### 2. 使用中存在的问题

1. 启动虚拟机失败：

   ```
   Could not open dev/vmmon | Unable to open kernel device | Failed to initialize monitor device
   ```

   解决方案为：

   ::: danger 注

   这是由于安装 `linux-headers` 时版本选择错误所致。

   首先获取内核版本号：

   ```bash
   uname -r # 4.19.66-1-MANJARO
   ```

   在 Octopi 中重新安装：

   1. 安装 linux419-headers；
   2. 移除 linux316-headers  <Badge text="误选为 316，需对应各自的错误" type="warn"/>。

   接着重启电脑即可。

   :::

2. 创建虚拟机后无法联网：

   ```
   Could not connect 'Ethernet0' to virtual network '/dev/vmnet8'. More information can be found in the vmware.log file. Failed to connect virtual device 'Ethernet0'.
   ```

   解决方案为：

   ::: danger 注

   这是由于未启动 vmware 的网络服务。

   解决方案来源于：[vmware_could_not_connect_ethernet0_to_virtual](https://www.reddit.com/r/archlinux/comments/9povuy/vmware_could_not_connect_ethernet0_to_virtual/)

   启用 vmware 的网络服务即可：

   ```bash
   sudo systemctl start vmware-networks.service # 临时
   ```

   :::

3. 修改网卡配置：

   在执行完上一步的启用 vmware 网络服务后，输入 `ip addr` 可以查看当前的网卡状态。

   可以看到输出结果相对于之前多了 `vmnet1`、`vmnet8` 两块网卡的配置，这是 VMware 由于默认开启了 Host-Only 模式和 NAT 模式（NAT 可能是我开启的，暂不纠正），如果启动了 Briged（桥接网卡）还会出现 `vmnet0`。

   回到 VMware，点击 `Edit > Virtual Network Editor` 进一步配置，此时你就可以修改 Host-Only 模式、NAT 模式、Briged 模式的配置了。



## mpv

### 1. 介绍

一款视频播放软件。

### 2. 使用方式

mpv [快捷键](/more/hodgepodge/mpv-keyboards)。