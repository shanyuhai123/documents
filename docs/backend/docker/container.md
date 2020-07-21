---
title: 容器
sidebarDepth: 2
---

## 概念

简单来说，容器是镜像的一个运行实例。所不同的是，镜像是静态的只读文件，而容器带有运行时需要的可写文件层，同时，容器中的应用进程处于运行状态。



## 状态

### 1. 运行中的容器

```bash
docker ps

# -a 所有的
# -f 可以按需求进行过滤
# 过滤参数 status：One of created, restarting, running, removing, paused, exited, or dead
```

### 2. 容器日志

```bash
# docker logs [OPTIONS] CONTAINER
docker logs ttubuntu
```

### 3. 容器信息

```bash
# 具体信息
docker insepect ttubuntu

# 内部进程
docker top ttubuntu

# 统计信息
docker stats ttubuntu
```

### 4. 容器变更

```bash
docker diff ttubuntu
```

### 5. 端口映射

```bash
docker port ttubuntu
```







## 操作

### 1. 创建容器

```bash
docker create -it --name ttubuntu ubuntu # 默认新创建的容器为停止状态
```

+ `-i` 让容器的标准输入保持打开
+ `-t` 让 Docker 分配一个伪终端并绑定到容器上

### 2. 启动容器

```bash
# docker start [OPTIONS] CONTAINER [CONTAINER...]
docker start ttubuntu
```

### 3. 执行容器

```bash
docker run ubuntu echo "hello world"
```

等价于先执行 `docker create` 再执行 `docker start`，在输出 `hello world` 后容器自动停止。

```bash
# 守护态 -d
docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1;done"
```

### 4. 暂停/恢复容器

```bash
docker pause ttubuntu
# docker unpause ttubuntu
docker ps

# 可见 paused 状态
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                   PORTS               NAMES
228fe9793889        ubuntu              "/bin/bash"         14 minutes ago      Up 14 minutes (Paused)                       ttubuntu
```

### 5. 终止

```bash
docker stop ttubuntu

# 验证
docker ps # ttubuntu 已消失
```

### 6. 启动/重启容器

`restart` 命令会将一个运行态的容器先终止，然后再重新启动。

```bash
docker start ttubuntu
# docker restart ttubuntu

# 验证
docker ps # ttubuntu 可见
```

### 7. 清除停止状态的容器

```bash
docker container prune

# 验证
docker start ttubuntu
# Error response from daemon: No such container: ttubuntu
```

### 8. 删除容器

```bash
# docker rm [OPTIONS] CONTAINER [CONTAINER...]
# -v 可以删除容器挂载的数据卷
docker rm ttubuntu
```

### 9. 更新容器配置

```bash
docker update ttubuntu
```





## 进入容器

在使用 `-d` 参数启动容器后，容器会进入后台，无法看到容器的输出信息，可以利用 `docker attach` 或 `docker exec` 进入容器。

`attach` 不会在容器中创建进程执行额外的命令，只是附着到容器上；`exec` 会在运行的容器上创建进程执行新的命令。

```bash
docker exec -it ttubuntu sh
```



## 分享

### 1. 导出容器

不管容器是否处于运行状态，都可以导出。

```bash
# docker export [OPTIONS] CONTAINER
docker export -o ubuntu-latest.tar ttubuntu
```

### 2. 导入容器

```bash
# docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
docker import http://example.com/exampleimage.tgz
docker import ubuntu-latest.tar
```

### 3. 复制文件

主机和容器间复制文件。

```bash
docker cp data ttubuntu:/tmp/
```

