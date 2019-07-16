---
title: 增加用户
---

## 0. 介绍

对于 Linux 系统有一定了解的可以跳过介绍。

一个文件具有权限和归属的特性。

文件的读、写、执行权限可以分别简写为 rwx，亦可以分别使用数字 421。

一个文件对不同的用户会具有不同的权限，从左往右分别是：文件所有者、文件所属组、其他用户。

举个例子：760，意味着这个文件的所有者具有可读、可写、可执行的权限；文件所属组拥有可读、可写的权限；其他用户则不具备权限。

### 普通文件（-）

**可读（r）**

表示可以读取文件的实际内容。

**可写（w）**

表示可以修改文件的内容（包括修改为空文件）。

**可执行（x）**

表示可以作为一个脚本执行。

### 目录文件（d）

**可读（r）**

表示可以读取目录内的文件列表。

**可写（w）**

表示可以在目录内新增、删除、重命名文件。

**可执行（x）**

表示可以进入该目录。



## 1. 用户组

###  创建用户组 admin

```bash
groupadd admin
```

### 查看用户组

```bash
cat /etc/group

# admin:x:1000:
```



## 2. 用户

### 添加用户

```bash
# shanyuhai 也可以设定为你喜欢的名字
useradd shanyuhai
```

### 查看用户

```bash
cat /etc/passwd | grep shanyuhai

# shanyuhai:x:1000:1001::/home/shanyuhai:/bin/bash

# 自动在 /home 下创建目录 /shanyuhai
ls /home/ -l
# drwx------ 2 shanyuhai shanyuhai 4096 Mar  7 16:46 shanyuhai
```

### 添加用户密码

```bash
passwd shanyuhai

# New password: # 输入密码即可
# Retype new password:  # 重复密码即可
```

### 将用户添加到用户组

**将用户添加到 admin 组**

```bash
usermod -a -G admin shanyuhai
```

**查看是否加入 admin 用户组**

```bash
cat /etc/group | grep shanyuhai

# admin:x:1000:shanyuhai
# shanyuhai:x:1001:
```

### 修改用户权限

```bash
visudo
```

修改文件：

```bash
## The COMMANDS section may have other options added to it.
##
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
## 你需要新增的内容
shanyuhai ALL=(ALL)       ALL
```

保存后退出。



## 3. 删除用户

```bash
# -r 同时删除用户及用户目录
# -f 强制删除用户
userdel -rf xxx
```

