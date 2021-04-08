---
title: Compose
---

## 概念

先简单理解 Docker 的使用过程：

1. 镜像构建：即创建一个镜像，这个创建的过程就是用 `Dockerfile` 来完成的。
2. 容器启动：针对单个容器可以使用 `docker run` 来启动，那多个呢？于是就出现了 Docker Compose。

### 1. 说明

Docker Compose 中定义的每个服务都必须通过 `image` 或 `build` 指令来构建，`build` 时会应用 `Dockerfile` 中的配置，无需重复设置。

### 2. 默认

默认模板文件为 `docker-compose.yml`，默认的项目名称为所在目录名。



## 安装卸载

选择二进制安装的形式，更多版本可见 [github release](https://github.com/docker/compose/releases)。

```bash
# 下载
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 允许运行
sudo chmod +x /usr/local/bin/docker-compose

# bash 命令补全
curl -L https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose

# 由于是二进制文件，那么卸载就是删除该文件
sudo rm /usr/local/bin/docker-compose
```



## 命令行

在配置完成后可以执行 `docker-compose config` 来校验并查看实际运行的配置。



## 核心配置

一份标准配置文件应该包含 `version`、`services`、`networks` 三大部分，其中最关键的就是 `services` 和 `networks` 部分。

### 1. version

`version` 与 Docker Engine 是强关联的，[Reference](https://docs.docker.com/compose/compose-file/compose-versioning/) 中有详细对照关系。

### 2. services

services 是要定义的服务，至于服务名可以自取，我们大部分时候都是在为 service 进行编写。

### 3. networks

配置容器连接的网络，如果未显示声明则会被加入所在目录及 `_default` 的网络中，例如当前目录为 `app`，那么就会加入 `app_default` 的默认网络。你会发现这其实与 service 是一致的。



## services 配置

### 1. image

镜像名称或 ID，本地不在则从 hub 拉取。

### 2. build

服务除了可以指定镜像，还可以基于一份 Dockerfile，其可以为相对或绝对路径，即对应的  `context` 及 `dockerfile`。

存在构建流程那么自然可以在构建过程中指定环境变量。注意布尔值需要使用引号包裹，否则会被识别为字符串。

```yaml
version: '3'
services:
	app:
		build:
			context: ./app
			dockerfile: Dockerfile-app
			args:
				arg1: 'true'
```

### 3. command

使用 command 可以覆盖容器启动后默认执行的命令。注意是覆盖默认命令。

### 4. container_name

compose 的容器名称格式是：<项目名称><服务名称><序号>，当然你也可以自定义。

### 5. depends_on

在组合一系列服务时，很多时候是有调用顺序的，例如往往有需要先启用数据库服务，这时候就很有用了。

甚至在你单独 `compose up` 中某个服务时也会生效。

### 6. env_file/environment

env_file 如果有环境变量与 environment 指令冲突，则以 environment 为准。需注意这里所说的环境变量是对 compose 而言的，这些变量并不会进入构建过程中。

如果只给定名称则会自动获取主机上对应变量的值，可用来防止泄漏数据。

```yaml
environment:
  NODE_ENV: development
  APP_URL:

environment:
  - NODE_ENV=development
  - APP_URL
```

### 7. extra_hosts

增加 host 映射规则。

```yaml
extra_hosts:
  - "somehost:162.242.195.82"
  - "otherhost:50.31.209.229"
```

对应的 `/etc/hosts` 则会追加：

```
162.242.195.82  somehost
50.31.209.229   otherhost
```

### 8. healthcheck

健康检查。

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost"]
  interval: 1m30s
  timeout: 10s
  retries: 3
  start_period: 40s
```

### 9. links

官网大大的标出了不推荐使用，将来会废弃。

### 10. networks

配置容器连接的网络。

```yaml
version: "3.9"

services:
  web:
    image: "nginx:alpine"
    networks:
      - new

  worker:
    image: "my-worker-image:latest"
    networks:
      - legacy

  db:
    image: mysql
    networks:
      new:
        aliases:
          - database
      legacy:
        aliases:
          - mysql

networks:
  new:
  legacy:
```

```yaml
version: "3.9"

services:
  app:
    image: nginx:alpine
    networks:
      app_net:
        ipv4_address: 172.16.238.10
        ipv6_address: 2001:3984:3989::10

networks:
  app_net:
    ipam:
      driver: default
      config:
        - subnet: "172.16.238.0/24"
        - subnet: "2001:3984:3989::/64"
```

### 11. ports

暴露端口信息。

```yaml
ports:
  - "3000"
  - "3000-3005"
  - "8000:8000"
  - "9090-9091:8080-8081"
  - "49100:22"
  - "127.0.0.1:8001:8001"
  - "127.0.0.1:5000-5010:5000-5010"
  - "6060:6060/udp"
  - "12400-12500:1240"
```

### 12. secrets

存储敏感信息。

不是可以利用 `env` 么，为什么还需要这个呢，有待探究。

```yaml
version: "3.9"
services:
  redis:
    image: redis:latest
    deploy:
      replicas: 1
    secrets:
      - my_secret
      - my_other_secret
secrets:
  my_secret:
    file: ./my_secret.txt
  my_other_secret:
    external: true
```

### 13. volumes

数据卷挂载路径，如果是名称则需要配置。

```yaml
version: "3.9"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
```

