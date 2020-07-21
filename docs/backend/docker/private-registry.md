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

