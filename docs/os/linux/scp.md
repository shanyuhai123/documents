---
title:  scp 远程复制文件
---

## 介绍

推荐先完成该目录下的前置任务：

1. 增加用户
2. 使用 RSA 登录服务器

`scp` 命令可以用于 Linux 下远程拷贝文件的命令，比较类似的是 `cp` 和 `rsync` 。相对而言 `cp` 只能在本地进行拷贝，而且 `scp` 传输是加密的；`rsync` 虽然可以增量下载，速度快一些，还有更多的功能，但是 `scp` 非常不占资源，`rsync` 在小文件众多时会导致磁盘 `I/O` 非常高。

## 语法

```bash
scp (选项) (参数)
```

### 1. 选项

+ -1：使用 ssh 协议版本1；
+ -2：使用 ssh 协议版本2；
+ -4：使用 ipv4；
+ -6：使用 ipv6；
+ -B：以批处理模式运行；
+ -C：使用压缩；
+ -F：指定 ssh 配置文件；
+ -i：identity_file 从指定文件中读取传输时使用的密钥文件（例如私钥），此参数直接传递给 ssh；
+ -l：指定宽带限制；
+ -o：指定使用的 ssh 选项；
+ -P：指定远程主机的端口号；
+ -p：保留文件的最后修改时间，最后访问时间和权限模式；
+ -q：不显示复制进度；
+ -r：以递归方式复制。

### 2. 参数

- 源文件：指定要复制的源文件。
- 目标文件：目标文件。格式为 `user@host:filename` （文件名为目标文件的名称）。



## 实例

### 1. 上传文件

+ 密码形式上传文件：

  ```bash
  scp -r /home/shanyuhai/Download/test shanyuhai@47.111.23.259:/home/shanyuhai/downloads
  ```

  接着输入密码即可

+ 秘钥形式上传文件：

  ```bash
  scp -i ~/.ssh/id_rsa_xxx hi.png shanyuhai@47.111.23.259:/home/shanyuhai/downloads
  ```

### 2. 下载文件

+ 秘钥形式下载文件：

  ```bash
  scp -i ~/.ssh/id_rsa_xxx shanyuhai@47.111.23.259:/home/shanyuhai/downloads/hi.png pictures
  ```



## lrzsz

除了 `scp` 还可以使用 `lrzsz` 来进行本地和远程的文件交互，不过需要双端都安装 `lrzsz`。

+ 下载（sz）

  ```bash
  sz filename
  # 等待选择保存的本地路径
  ```

+ 上传（rz）

  ```bash
  rz
  # 等待选择文件
  # （还可以拖拽文件）
  ```

  