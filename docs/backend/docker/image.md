---
title: 镜像
sidebarDepth: 2
---

## 获取镜像

::: tip 格式

`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`。

NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 `latest`，即最新版本。

:::



在获取镜像前可以查询是否存在对应的镜像。

```bash
# docker search [OPTIONS] TERM
docker search ubuntu
```



## 镜像信息

### 1. 所有镜像概览

```bash
docker images

REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
nginx                 v2                  c7e8f4f26fef        About an hour ago   132MB
nginx                 latest              0901fa9da894        9 days ago          132MB

# `REPOSITORY` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像
# `TAG` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容
# `IMAGE ID` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已
# `CREATED` 创建时间，说明镜像最后的更新时间
# `SIZE` 镜像大小，优秀的镜像往往体积都较小
```

### 2. 指定镜像详细

```bash
# docker inspect [OPTIONS] NAME|ID [NAME|ID...]
docker inspect ubuntu:latest
```

### 3. 镜像历史

镜像文件是由多个层组成，可查看每个层的创建信息。

```bash
# docker history [OPTIONS] IMAGE
docker history ubuntu:latest
```



## 创建镜像

创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。

### 1. 已有容器

```bash
# docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
# 对一个镜像进行修改后
docker commit -m "修改了默认首页" webserver nginx:new

# 验证
docker images
```

### 2. 本地模板

```bash
# docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
docker import http://example.com/exampleimage.tgz
docker import /path/to/exampleimage.tgz
# 还可以利用 `STDIN`
cat exampleimage.tgz | docker import - exampleimagelocal:new

# 验证
docker images
```

### 3. Dockerfile

`Dockerfile` 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。

```dockerfile
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```

```bash
# docker build [OPTIONS] PATH | URL | -
docker build https://github.com/creack/docker-firefox
docker build -t nginx:ttt
```





## 修改镜像

### 1. 添加镜像标签

仅添加镜像标签，实际 `IMAGE ID` 指向同一个。

```bash
docker tag ubuntu:latest myubuntu:latest
```

### 2. 删除镜像

需注意 `docker rmi` 才是删除镜像，而 `docker rm` 是删除容器。

```bash
# docker rmi [OPTIONS] IMAGE [IMAGE...]
docker rmi ubuntu:latest
# Error response from daemon: conflict: unable to remove repository reference "ubuntu:latest" (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e

# 正在使用中，需要先解除容器
docker rm b0f36e5ede8d
# 解除后再删除镜像，删除镜像还可以使用 `IMAGE ID`
docker rmi adafef2e596e
```

### 3. 清理镜像

系统中可能会遗留一些临时的镜像文件。

```bash
docker image prune [OPTIONS]
```



## 分享镜像

### 1. save

```bash
docker images # 列出镜像

# docker save [OPTIONS] IMAGE [IMAGE...]
docker save -o ubuntu_18.04.tar ubuntu:18.04
```

### 2. load

```bash
# docker load [OPTIONS]
docker load -i ubuntu_18.04.tar
```

### 3. Hub

还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。

```bash
# 模拟 nginx 打个新 tag
docker tag nginx:latest username/nginx:latest
# push
docker push username/nginx:latest
```

