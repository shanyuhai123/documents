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
```

根据 `docker inspect hello ` 可得知数据卷数据存放在 `/var/lib/docker/volumes/` 下。



## 数据卷容器

数据卷容器也是一个容器，但它的目的是专门提供数据卷给其他容器挂载。
```bash
# 创建数据卷容器
docker run -it -v /dbdata --name dbdata ubuntu

# 接着可以在其他容器中挂载数据卷
docker run -it --volumes-from dbdata --name db1 ubuntu
docker run -it --volumes-from dbdata --name db2 ubuntu
# 个人认为该形式并不好
```

注意 `dbdata` 容器中使用了 `-v`，但其后仅跟随了 `/dbdata`，实际上会生成一个匿名的 volume，根据这个也可以推导出若跟随参数为 `hello/dbdata` 则会创建一个 `hello` volume，跳过先创建数据卷的步骤。

更进一步我们可以推导出 `-v` 无法指定去掉 `./` 的相对路径。



