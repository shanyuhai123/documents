---
title: 热门镜像
---

## Busybox

以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：

```bash
# --rm 用完即删
docker run -it --rm busybox
```



## Node.js

从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 [Node Images Layers](https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore) 加深该概念。

```bash
# 追加 bash，否则会直接进入 node
docker run -it --rm node:slim bash
```



## Nginx

快速测试本地打包好的静态文件。

```bash
docker run --rm \
	-p 8080:80 \
	-v /dir/dist/:/usr/share/nginx/html \
	nginx
```



## MySQL

指定密码。

```bash
docker run --rm \
	-p 33006:3306 \
	-e MYSQL_ROOT_PASSWORD=mypasswd \
  mysql
```



## Mongo

```bash
docker run -d \
	-p 27017:27017 \
  --name some-mongo \
  mongo --auth
```



## Redis

指定密码。

```bash
docker run -d \
	-p 6379:6379 \
	--name some-redis \
	redis --requirepass "redispwd"
```
