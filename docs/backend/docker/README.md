---
description: 人生苦短，我用 Docker
---

# 人生苦短，我用 Docker

## 介绍

Docker 利用了 Linux 内核特性命名空间（namespace）及控制组（cgroups）等为容器提供隔离的运行环境，在此基础上可以认为 “容器是一种特殊的进程”。

## 使用脚本快速启用 Docker

在过去常常[手动安装](https://docs.docker.com/engine/install/)，现在已经完全切换为脚本形式了：

```bash
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
# 替换源
# sudo sh get-docker.sh --mirror Aliyun
# sudo sh get-docker.sh --mirror AzureChinaCloud
```

如果担心脚本异常，可以下载并进行审核。

接着就可以开始愉快的使用了，例行习惯 Hello World：

```bash
docker run hello-world

# 输出
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## 初始化 Docker 环境

### 设置用户组

为了避免每次使用 Docker 都需要切换到 `sudo`，可以将 `docker` 加入当前用户。重新登录后生效。

```bash
sudo groupadd docker

sudo usermod -aG docker $USER
# or
sudo usermod -aG docker USER_NAME
```

### 镜像加速

镜像服务可用：

1. [阿里云镜像服务](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
2. [网易云镜像服务](https://www.163yun.com/help/documents/56918246390157312)

修改本地的 `/etc/docker/daemon.json` 并修改 `registry-mirrors`，可为其配置多个避免某个挂掉：

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com"
  ]
}
```

### 修改存储路径

通过 `docker info` 可以看到默认路径为 `/var/lib/docker`，而一般服务器会额外挂载硬盘。

```bash
# 修改配置文件
vim /etc/docker/daemon.json

# 增加
{
  "data-root": "/path/to/docker"
}

# 重启 docker
systemctl restart docker
```

执行 `docker info` 进行校验。

## 热门镜像

### Busybox

以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：

```bash
# --rm 用完即删
docker run -it --rm busybox
```

### Node.js

从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 [Node Images Layers](https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore) 加深该概念。

```bash
# 追加 bash，否则会直接进入 node
docker run -it --rm node:slim bash
```

### Nginx

快速测试本地打包好的静态文件。

```bash
docker run --rm \
  -p 8080:80 \
  -v /dir/dist/:/usr/share/nginx/html \
  nginx
```

### MySQL

指定密码。

```bash
docker run --rm \
  -p 33006:3306 \
  -e MYSQL_ROOT_PASSWORD=mypasswd \
  mysql
```

### Mongo

```bash
docker run -d \
  -p 27017:27017 \
  --name some-mongo \
  mongo --auth
```

### Redis

指定密码。

```bash
docker run -d \
  -p 6379:6379 \
  --name some-redis \
  redis --requirepass "redispwd"
```

## 移除 Docker

如果在之前修改了存储路径，则根据当前情况进行修改。

```bash
# Ubuntu
sudo apt-get purge docker-ce docker-ce-cli containerd.io
# CentOS
sudo yum remove docker-ce docker-ce-cli containerd.io

# 还有 images、containers、volumes、and configurations
sudo rm -rf /var/lib/docker
```

## 参考资料

1. [Docker](https://docs.docker.com/)
2. [Docker Commands](https://docs.docker.com/engine/reference/commandline/docker/)
3. 《Docker 技术入门与实战（第三版）》
4. 《自己动手写 Docker》
