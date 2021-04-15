---
title: 初始
autoPrev: README
---

## Ubuntu

### 1. 卸载旧版本

```bash
sudo apt-get remove docker docker-engine docker.io
```

### 2. 安装 ubuntu 维护版

ubuntu 团队曾经鸽了许久，后来重新开始更新。

```bash
sudo apt-get install -y docker.io
docker version # 19.03.8
```

### 3. 安装 docker 维护版

```bash
# 统一先卸载旧版本
sudo apt-get remove docker docker-engine docker.io containerd runc
```

可任选以下一种形式进行安装。

#### 3.1 软件源形式

更新包及添加工具：

```bash
sudo apt-get update

sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common
```

添加 GPG key：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

添加源：

```bash
sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
 
# 嫌该速度慢可换源
# 清华源
sudo add-apt-repository \
  "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
# 阿里云源
sudo add-apt-repository \
  "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
```

安装：

```bash
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

#### 3.2 便捷脚本形式

```bash
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
# 替换源
# sudo sh get-docker.sh --mirror Aliyun
# sudo sh get-docker.sh --mirror AzureChinaCloud
```



## CentOS

### 1. 卸载旧版本

```bash
sudo yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

### 2. 安装 docker 维护版

可任选以下一种形式进行安装。

#### 2.1 以软件源形式

添加工具：

```bash
sudo yum install -y yum-utils
```

设置源：

```bash
sudo yum-config-manager \
  --add-repo \
  https://download.docker.com/linux/centos/docker-ce.repo
  
# 替换源
# 阿里云源
sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
# 清华源
sudo sed -i 's/download.docker.com/mirrors.tuna.tsinghua.edu.cn\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
```

安装：

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

#### 2.2 便捷脚本形式

```bash
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
# 替换源
# sudo sh get-docker.sh --mirror Aliyun
# sudo sh get-docker.sh --mirror AzureChinaCloud
```



## 设置用户组

为了避免每次使用 Docker 都需要切换到 `sudo`，可以将 `docker` 加入当前用户。重新登录后生效。

```bash
sudo groupadd docker

sudo usermod -aG docker $USER
# or
sudo usermod -aG docker USER_NAME
```



## 镜像加速

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



## 修改存储路径

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



## 安装验证

```bash
sudo docker run hello-world
```



## 移除

```bash
# Ubuntu
sudo apt-get purge docker-ce docker-ce-cli containerd.io
# CentOS
sudo yum remove docker-ce docker-ce-cli containerd.io

# 还有 images、containers、volumes、and configurations
sudo rm -rf /var/lib/docker
```