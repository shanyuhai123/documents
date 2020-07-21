---
title: Dockerfile
---

## 基本结构

`Dockerfile` 由一行行命令语句组成，并且支持以 `#` 开头的注释行。一般而言，`Dockerfile` 主体内容分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。

```dockerfile
# 基础镜像信息
FROM ubuntu:18.04
# 维护者信息
LABEL maintainer docker_user <username@example.com>
# 镜像操作指令
COPY . /app
RUN make /app
# 容器启动时执行指令
CMD python /app/app.py
```



## 指令说明

### 1. ARG

```dockerfile
ARG <name>[=<default value>]
```
定义创建镜像过程中使用的变量。

### 2. FROM

```dockerfile
FROM [--platform=<platform>] <image> [AS <name>]
# or
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
# or
FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
```
指定所创建镜像的基础镜像。

### 3. LABEL

```dockerfile
LABEL <key>=<value> <key>=<value> <key>=<value> ...
```
`LABEL` 指令可以为生成的镜像添加元数据标签信息。这些信息可以用来辅助过滤出特定镜像。

### 4. EXPOSE

```dockerfile
EXPOSE <port> [<port>/<protocol>...]
```
声明镜像内服务监听的端口，但并不会自动完成端口映射。

### 5. ENV

```dockerfile
ENV <key> <value>
ENV <key>=<value> ...
```
指定环境变量，在镜像生成过程中会被后续 `RUN` 指令使用，在镜像启动的容器中也会存在。

### 6. ENTRYPOINT

```dockerfile
ENTRYPOINT ["executable", "param1", "param2"]
# or
ENTRYPOINT command param1 param2
```
指定镜像的默认入口命令，该入口命令会在启动容器时作为根命令执行，所有传入值作为该命令的参数。

### 7. VOLUME

```dockerfile
VOLUME ["/data"]
```
创建一个数据卷挂载点。

### 8. USER

```dockerfile
USER <user>[:<group>]
# or
USER <UID>[:<GID>]
```
指定运行容器时的用户名或 `UID`，后续的 `RUN` 等指令也会使用指定的用户身份。

### 9. WORKDIR

```dockerfile
WORKDIR /path/to/workdir
```
为后续的 `RUN`、`CMD`、`ENTRYPOINT` 指令配置工作目录。
可以使用多个 `WORKDIR` 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。

```dockerfile
WORKDIR /a
WORKDIR b
WORKDIR c
# /a/b/c
RUN pwd
```

### 10. ONBUILD

```dockerfile
ONBUILD <INSTRUCTION>
```
指定当基于所生成镜像创建子镜像时，自动执行的操作指令。

### 11. STOPSIGNAL

```dockerfile
STOPSIGNAL signal
```
指定所创建镜像启动的容器接收退出的信号值。

### 12. HEALTHCHECK

```dockerfile
HEALTHCHECK [OPTIONS] CMD command
# or
HEALTHCHECK NONE
```
配置所启动容器如何进行健康检查。

### 13. SHELL

```dockerfile
SHELL ["executable", "parameters"]
```
指定其他命令使用 `shell` 时的默认 `shell` 类型。

### 14. RUN（操作）

```dockerfile
RUN <command>
# or
RUN ["executable", "param1", "param2"]
```
运行指定命令。

### 15. CMD（操作）

```dockerfile
CMD ["executable","param1","param2"]
# or
CMD ["param1","param2"]
# or
CMD command param1 param2
```
指定启动容器时默认执行的命令。

### 16. ADD（操作）

```dockerfile
ADD [--chown=<user>:<group>] <src>... <dest>
# or
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```
添加内容到镜像。

### 17. COPY（操作）

```dockerfile
COPY [--chown=<user>:<group>] <src>... <dest>
# or
COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
```
复制内容到镜像。
`COPY` 与 `ADD` 指令功能类似，当使用本地目录为源目录时，推荐使用 `COPY`。



## 构建镜像

编写完 `Dockerfile` 之后，可以通过 `docker build [OPTIONS] PATH | URL | -` 来构建镜像。

### 1. 资源

创建一个 `html` 页面。

```html
<!DOCTYPE html>
<html lang="zh-cms">
  <head>
    <meta charset="utf-8">
    <meta name="renderer"  content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>Docker Test</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but t-beam doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
        Hi, Docker Here!
    </div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### 2. Dockerfile

```dockerfile
FROM nginx
COPY ./index.html /usr/share/nginx/html
```

### 3. build

```bash
docker build -t nginx-dockerfile-image .
```

### 4. run

```bash
docker run -d -P --name nginx-dockerfile-c nginx-dockerfile-image
```

### 5. 验证

```bash
docker ps

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
225af017d59c        nginx-test          "/docker-entrypoint.…"   2 seconds ago       Up 2 seconds        0.0.0.0:32769->80/tcp     nginx-dockerfile-c

# 打开对应的 IP 的端口 32769 进行验证
```

