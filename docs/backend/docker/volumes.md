---
title: 数据管理
---

## 概念

在生产环境中使用 Docker，往往需要对数据进行持久化，或者需要在多个容器之间进行数据共享。
容器中的数据管理方式有两种：
1. 数据卷（Data Volumes）：容器内数据直接映射到本地主机环境
2. 数据卷容器（Data Volumes Containers）：使用特定容器维护数据卷




## 数据卷

数据卷是一个可供容器使用的特殊目录，它将主机目录直接映射进容器，类似于 Linux 中的 mount 行为。
数据卷提供了一些特性：
1. 数据卷可以在容器之间共享和重用，容器间传递数据将变得高效与方便
2. 对数据卷内数据的修改会立即生效，无论容器内操作还是主机操作
3. 对数据卷的更新不会影响镜像，解耦开应用和数据
4. 卷会一直存在，知道没有容器使用，可以安全地卸载它

### 1. 操作

```bash
# 创建
# docker volume create [OPTIONS] [VOLUME]
docker volume create hello

# 绑定
docker run -d -P --name web --mount type=bind,source=/webapp,destination=/opt/webapp training/webapp python app.py
# 等价于，个人更倾向于下面的形式
docker run -d -P --name web -v /webapp:/opt/webapp training/webapp python app.py
```



## 数据卷容器

数据卷容器也是一个容器，但它的目的是专门提供数据卷给其他容器挂载。
```bash
# 创建数据卷容器
docker run -it -v /dbdata --name dbdata ubuntu

# 接着可以在其他容器中挂载数据卷
docker run -it --volumes-from dbdata --name db1 ubuntu
docker run -it --volumes-from dbdata --name db2 ubuntu
# 使用 --volumes-from 挂载的数据卷容器自身不需要保持运行状态
```

### 1. 迁移

可以利用数据卷容器对其中的数据卷进行备份、恢复，以实现数据的迁移。

1. 备份

   ```bash
   docker run --volumes-from dbdata -v $(pwd):/backup --name worker ubuntu tar cvf /backup/backup.tar /dbdata
   ```

   首先利用 ubuntu 创建了一个容器 `worker`，使用 `--volumes-from dbdata` 让 `worker` 挂载 `dbdata` 容器的数据卷；再使用 `-v $(pwd):/backup` 来挂载主机的当前目录到 `worker` 容器的 `/backup` 目录；`worker` 容器启动后利用 `tar cvf /backup/backup.tar /dbdata` 将 `/dbdata` 下的内容打包到 `/backup/backup.tar`，即主机当前目录下的 `backup.tar`。

   ```bash
   # 验证主机环境
   
   # 查看映射出来的打包文件
   ll 
   
   drwxr-xr-x 3 shanyuhai shanyuhai  4096 Jul 21 05:41 ./
   drwxr-xr-x 3 root      root       4096 Jun  8 01:46 ../
   -rw-r--r-- 1 root      root      10240 Jul 21 05:46 backup.tar
   
   # 解压
   tar -xvf backup.tar
   
   # 查看解压文件
   tree dbdata/
   
   dbdata/
   ├── test
   └── test1
   ```

2. 恢复

   首先与之前一般创建一个数据卷容器。

   ```bash
   docker run -v /dbdata --name dbdata2 ubuntu /bin/bash
   ```

   接着就可以挂载数据卷容器，并解压备份文件到所挂载的容器卷中。

   ```bash
   docker run --volumes-from dbdata2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar
   ```

