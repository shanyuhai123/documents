---
title: 常用命令
---

## 说明

终究还是要提取出常用命令，记忆越来越差了。



## 查询

```bash
# 获取端口启用
ss -tunlp
# netstat -tunlp

# 获取端口服务占用
sudo lsof -i :53

# 获取 ip 地址
ip addr

# 获取 host 信息
hostnamectl
```



## 修改

```bash
# 修改主机名
# 阿里云还需要注意 /etc/cloud/cloud.cfg 配置
sudo hostnamectl set-hostname shanyuhai
```

