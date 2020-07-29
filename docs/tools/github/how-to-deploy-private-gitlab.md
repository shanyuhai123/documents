---
title: 如何搭建私有 gitlab
---

## 安装 gitlab

```bash
# 创建数据目录
sudo mkdir -p /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data

# 验证
tree /srv

# 安装 gitlab
sudo docker run --detach \
  --restart always \
  --hostname gitlab.example.com \
  # 注意修改 22 为 30022 后，利用 git 协议下载需指定其端口才可以下载，例如 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git
  # 可配置 ssh config 指定端口，减少操作
  # 而 http 协议可正常下载（其实是因为 nginx 转了一层，否则也是得修改的）
  --publish 30443:443 --publish 30080:80 --publish 30022:22 \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  --name gitlab \
  gitlab/gitlab-ce

# 验证
docker ps
netstat -tunlp
```

最后打开浏览器来验证。

## 邮件服务

多家对比后选择了[腾讯企业邮箱](https://exmail.qq.com/)，依次进入 `邮箱 => 邮箱设置 => 收发信设置 => 开启IMAP/SMTP服务`，再回到 `邮箱设置 => 邮箱绑定 => 安全登录` 获取授权码即可（至于配置域名，邮件配置可另行谷歌）。

### 1. 修改配置

找到 `Email Settings` 在后面追加对应的 `SMTP` 配置。

```bash
sudo vim /srv/gitlab/config/gitlab.rb

# 开启 SMTP 功能
gitlab_rails['smtp_enable']=true
gitlab_rails['smtp_address']="smtp.exmail.qq.com"
gitlab_rails['smtp_port']=465
gitlab_rails['smtp_user_name']="name@domain.com" # 邮件发送人
gitlab_rails['gitlab_email_from']="name@domain.com" # 与 smtp_user_name 一致
gitlab_rails['smtp_password']="password" # 获取的授权码
gitlab_rails['smtp_domain']="exmail.qq.com"
gitlab_rails['smtp_authentication']="login"
gitlab_rails['smtp_enable_starttls_auto']=true
gitlab_rails['smtp_tls']=true
```

### 2. 验证服务

```bash
# 应用配置
docker exec gitlab gitlab-ctl reconfigure

# 进入 gitlab 容器
docker exec -it gitlab bash

# 开启 gitlab-rails
gitlab-rails console

# 测试邮件发送，可换为自己的邮箱
Notify.test_email('someone@example.com', 'Message Subject', 'Message Body').deliver_now
```

等待邮件发送到自己的邮箱后即可。



## hostname

`hostname` 会影响仓库下载、用户注册邀请等问题。

在安装 `gitlab` 时为其设置 `hostname` 为 `gitlab.example.com`，此处还需要修改为你对应的域名或 `ip` 地址。

```bash
sudo vim /srv/gitlab/config/gitlab.rb

# 配置 external_url
external_url 'http://gitlab.example.com'
```







