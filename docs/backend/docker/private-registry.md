---
title: 搭建私有仓库
---

## 环境

创建一台虚拟机为私有仓库，本机向虚拟机的仓库发起上传和下载。



## 搭建仓库

在虚拟机上创建仓库，并指定镜像文件存放在本地的默认路径，为其设置 docker 重启后跟随重启。

```bash
docker run -d --restart=always --name registry -p 5000:5000 -v /opt/data/registry:/var/lib/registry registry
```

后续的 `registry` 配置可见 `/etc/docker/registry/config.yml`。



## 主机测试

Docker 新的版本对安全性要求较高，要求仓库支持 SSL/TLS 证书，可以在本地信任该仓库。

```bash
sudo vim /etc/docker/daemon.json

# 在 JSON 中追加内容，对应的 IP 地址
{"insecure-registries":["192.168.0.107:5000"]}

# 重启服务
sudo systemctl daemon-reload
sudo systemctl restart docker
```

主机上传镜像到虚拟机仓库验证。

```bash
docker pull ubuntu
# 打 tag
docker tag ubuntu 192.168.0.107:5000/tubuntu
# push
docker push 192.168.0.107:5000/tubuntu

# 验证
curl http://192.168.0.107:5000/v2/_catalog
# {"repositories":["tubuntu"]} # 成功
# 还可以直接打开上面链接进行查看
# 或者在虚拟机上查看 ll /opt/data/registry/docker/registry/v2/repositories
```

下载验证。

```bash
# 首先删除本地的镜像
docker rmi 192.168.0.107:5000/tubuntu
# 验证
docker images

# 拉取
docker pull 192.168.0.107:5000/tubuntu
# 验证
docker images
```



## Harbor

另外一个选择是使用 [Harbor](https://github.com/goharbor/harbor)。

### 1. 获取 Harbor

先下载文件。

```bash
# 目标压缩包
wget https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz

# gpg
wget https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz.asc
```

获取文件后先校验有没有问题：

```bash
# 校验
gpg --verify harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
# gpg: using RSA key 7722D168DAEC457806C96FF9644FF454C0B4115C
# gpg: Can't check signature: No public key

# 导入公钥
gpg --keyserver hkps://keyserver.ubuntu.com --receive-keys 7722D168DAEC457806C96FF9644FF454C0B4115C

# 再次校验
gpg --verify harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
```

### 2. 安装

先进行解压：

```bash
tar xvf harbor-offline-installer-v2.0.5.tgz
```

修改配置文件：

```bash
cp harbor.yml.tmpl harbor.yml

# 修改配置
vim harbor.yml
```

其中 `data_volume` 挂载数据。

在安装前需要确认已经准备好 `docker` 及 `docker-compose`。

```bash
bash install.sh
```

### 3. 重装

当修改配置后运行 `bash prepare` 即可。

### 4. 用户

Harbor 使用前需要注册帐号，推送镜像前需要先创建项目，邀请成员才行。