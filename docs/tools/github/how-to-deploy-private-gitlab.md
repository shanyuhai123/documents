# 如何搭建私有 GitLab

## 安装 GitLab

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
# 以命令形式重新加载配置，也可进入容器后手动执行
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

## 备份与恢复

> 一个有意思的尝试是直接更新镜像也会自动迁移配置，商业数据请小心该尝试

由于开始就将数据卷挂载到 `/srv/gitlab` 下，所以备份的数据也会在该目录的 `/srv/gitlab/data/backups` 中。

```bash
# GitLab 12.2 之后的版本备份指令
docker exec -t <container name> gitlab-backup create
```

更好的形式是定期备份：

```bash
crontab -e

# 每天凌晨4点备份
0 4 * * * docker exec -t gitlab gitlab-backup create &> /dev/null
# 每天凌晨4点备份删除 7 天前备份
0 4 * * * find /srv/gitlab/data/backups/ -mtime +7 -name "*gitlab_backup.tar" -delete &> /dev/null
```

根据备份恢复数据：

```bash
# 停止服务
gitlab-ctl stop unicorn # 应用服务器
gitlab-ctl stop sidekiq # 后台异步任务队列
gitlab-ctl status # 验证

# 指定数据
gitlab-rake gitlab:backup:restore BACKUP=1607523472_2020_12_09_13.2.1
```

## 快速而简单的升级

使用 Docker Compose 进行维护，找到新的[镜像](https://hub.docker.com/r/gitlab/gitlab-ce/tags)替换上，注意大版本的升级变动。

```sh
docker-compose down
docker-compose up

# 等待完成
docker-compose logs -f
```

## 添加 Runner

先注册 GitLab Runner：

```bash
# 注册（删除 register 及以后可交互式注册）
docker run --rm -it \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  gitlab/gitlab-runner:latest register \
    --non-interactive \
    --url "https://gitlab.com/" \
    --registration-token "PROJECT_REGISTRATION_TOKEN" \
    --executor "docker" \
    --docker-image "docker:19.03.12" \
    --description "docker-runner" \
    # --docker-privileged 判断是否需要
    --docker-privileged \
    --tag-list "docker" \
    --run-untagged="true" \
    --locked="false" \
    --access-level="not_protected"
```

再前往 `/srv/gitlab-runner/config/config.toml` 修改 `volumes`：

``` toml
# 修改前：
[[runners]]
  # ...
  [runners.docker]
    volumes = ["/cache"]

# 修改后：
[[runners]]
  # ...
  [runners.docker]
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
```

最后启动 Runner：

``` sh
docker run -d \
  --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --name gitlab-runner \
  gitlab/gitlab-runner:latest
```

### privileged

当存在 `error during connect no such host` 报错时修改 runner config 的 `privileged` 属性为 `true`。

### 自签证书

根据 [tls-self-signed](https://docs.gitlab.com/runner/configuration/tls-self-signed.html) 去信任 ca：

```bash
# 宿主机
docker cp /etc/gitlab-runner/certs/ca.crt gitlab-runner-node:/usr/local/share/ca-certificates/ca.crt

# 容器内
apt-get install -y ca-certificates
update-ca-certificates --fresh

curl https://example.com # 访问成功
```
