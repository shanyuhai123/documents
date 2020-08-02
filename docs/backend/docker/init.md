---
title: 初始
autoPrev: README
---

## 安装

网速慢可使用[清华源](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)。



### 1. ubuntu 维护

曾经鸽了许久，后来重新开始更新。

```bash
# 简洁
sudo apt-get install -y docker.io
docker version # 19.03.8
```



### 2. docker 维护

社区版 `docker-ce` 和企业版 `docker-ee`，`docker.io` 并非是早期的版本。

```bash
# 先卸载
sudo apt-get remove docker docker-engine docker.io containerd runc
# 准备工具
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
# 验证 GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
# 设置源
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
# 安装
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# 还可以利用脚本
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```



## 设置源

可使用阿里云容器镜像服务-[镜像加速器](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)。

其配置地址为 `/etc/docker/daemon.json`。



## 提权

为了避免每次使用 Docker 都需要切换到 `sudo`，可以将 `docker` 加入当前用户。
```bash
sudo usermod -aG docker USER_NAME # 重新登录后生效
```