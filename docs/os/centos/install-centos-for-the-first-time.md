---
title: 初始化 CentOS
---

当然，你首先需要[安装 CentOS](/os/centos/how-to-install-centos-on-virtualbox)。



## 更新源

CentOS 安装完毕，首先应该修改源，并更新到最新的系统。此处选用阿里云的源，[清华源](https://mirrors.tuna.tsinghua.edu.cn/)，[中科大源](http://mirrors.ustc.edu.cn/)也可。

```bash
# 安装工具 wget 或者 curl
yum install wget -y

# 备份源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

# 下载阿里云源
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
curl -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

# 清理、生成缓存
yum clean cache
yum makecache
```



## 更新系统

更换源之后就可以使用国内的镜像了，否则下载速度太慢。

```bash
yum update -y
```



## 常用包组

一般在安装系统时需要安装的软件包组。

```bash
yum groups mark convert

# 查看所有包组名称
yum grouplist

# 如果缺乏部分包组，指定该包组
yum groupinstall "Cinnamon" -y
```



## 常用工具

更新完系统后还需要一些常用的工具，使用 Ubuntu Server 的时候同样需要安装，只不过指令换为 `apt install`。

```bash
yum install tree nmap dos2unix lrzsz nc lsof wget tcpdump htop iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y
```



## 常用指令

```bash
# 查看 ip
ip addr
# 查看服务的端口（例如：ssh）
ss -lntup | grep sshd # 或 netstat -lntup
# 查看进程（例如：ssh）
ps -ef | grep ssh
# 查看是否安装了对应的软件
rpm -qa openssh openssl
# openssh 提供 SSH 服务，openssl 为 SSH 提供连接加密
```

