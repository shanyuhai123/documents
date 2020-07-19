---
title: 安装 Docker
---

## 安装

网速慢可[切换源](/os/linux/#镜像源)。



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

