---
title: 快速了解
---

## 架构

<img :src="$withBase('/backend/traefik-architecture-overview.png')" alt="https://traefik.tech/assets/img/architecture-overview.png">

由图所示，Traefik 会监听入口点（`EntryPoints`），路由器（`Routers`）连接到这些入口点，分析传入的请求，以查看它们是否与一组规则（`Rule`）匹配。如果匹配，则有中间件先经过中间件（`Middlewares`），再转发给对应的服务（`Services`）。

其中配置与 `Nginx` 相似，分为两部分：

+ 静态配置：`traefik.toml`，与 `nginx.conf` 类似
+ 动态配置：`config/*.toml`，与 ` conf.d/*.conf` 类似



## 示例：whoami

先创建 `docker-compose.yml` 文件，静态配置（`traefik.toml`）直接记录在容器启动配置中可以带来更好的体验：

```yml
version: '3.7'

services: 
  traefik:
    container_name: traefik
    image: traefik:v2.4.8
    restart: always
    ports: 
      - 80:80
      - 443:443
    networks: 
      - traefik
    command:
      # 全局配置
      - "--global.checkNewVersion=false"
      - "--global.sendAnonymousUsage=false"
      # ping
      - "--ping=true"
      # 日志
      - "--log.level=warn"
      - "--log.format=common"
      - "--accesslog=false"
      # api/dashboard
      - "--api=true"
      - "--api.insecure=true"
      # 入口点
      - "--entryPoints.web.address=:80"
      - "--entryPoints.websecure.address=:443"
      # 服务发现
      # docker 形式服务发现，接入 traefik network
      - "--providers.docker=true"
      - "--providers.docker.watch=true"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.docker.endpoint=unix:///var/run/docker.sock"
      - "--providers.docker.swarmMode=false"
      - "--providers.docker.useBindPortIP=false"
      - "--providers.docker.network=traefik"
      # file 形式服务发现
      - "--providers.file=true"
      - "--providers.file.watch=true"
      - "--providers.file.directory=/etc/traefik/config"
      - "--providers.file.debugloggeneratedtemplate=true"
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./config/:/etc/traefik/config/:ro
    labels: 
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      # dashboard http
      - "traefik.http.routers.traefik-dashboard-default.entrypoints=web"
      - "traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"
      - "traefik.http.routers.traefik-dashboard-default.service=dashboard@internal"
      # dashboard api
      - "traefik.http.routers.traefik-dashboard-api.entrypoints=web"
      - "traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) && PathPrefix(`/api`)"
      - "traefik.http.routers.traefik-dashboard-api.service=api@internal"
    healthcheck:
      test: ["CMD-SHELL", "wget -q --spider --proxy off localhost:8080/ping || exit 1"]
      interval: 3s
      timeout: 5s
    logging: 
      driver: "json-file"
      options: 
        max-size: "1m"

  whoami:
    container_name: whoami
    image: traefik/whoami
    networks: 
      - traefik
    restart: always
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      # http entrypoints
      - "traefik.http.routers.whoami.entrypoints=web"
      - "traefik.http.routers.whoami.rule=Host(`whoami.example.com`)"

# 先创建外部网卡
# docker network create traefik
networks: 
  traefik:
    external: true
```



可为动态配置抽象一些会公共使用的，增加 `config.default.toml` 文件。

### 1. 基础认证

基础认证采取简单的 [BasicAuth](https://doc.traefik.io/traefik/middlewares/basicauth/)。

利用 [htpasswd](http://httpd.apache.org/docs/1.3/programs/htpasswd.html) 工具生成密码：

```bash
htpasswd -nb yourname yourpassword

# 得到
# yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.
```

为 `config/default.toml` 增加一项默认认证，动态修改生效，后续无需重启：

```toml
# 中间件在 docker cli 中使用时可用 `,` 分隔：middlewares=m1@file,m2@file

# gzip
[http.middlewares.gzip.compress]

# basic 认证
[http.middlewares.default-auth-user.basicAuth]
removeHeader = true
users = [
	"yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g."
]
```

在 `traefik` 和 `whoami` 的 `labels` 中增加：

```yml
version: '3.7'

services: 
	traefik:
		# 省略其他
		labels:
			- "traefik.http.routers.traefik-dashboard-default.middlewares=default-auth-user@file"
			- "traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file"
	whoami:
	  # 省略其他
		labels:
			- "traefik.http.routers.whoami.middlewares=default-auth-user@file"
```

### 2. 升级为 HTTPS

1. 先手动添加证书

   创建证书目录并移入证书：

   ```bash
   sudo mkdir ssl
   sudo mv /path/to/ssl/whoami.example.com.* ./ssl
   ```

   修改静态配置：

   ```yml
   version: '3.7'
   
   services:
   	traefik:
   	  # 忽略其他
   		volumes:
   			- ./ssl/:/data/ssl/:ro
   	whoami:
       # 忽略其他
   		labels:
         # https entrypoints
         - "traefik.http.routers.whoami-secure.entrypoints=websecure"
         - "traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)"
         - "traefik.http.routers.whoami-secure.tls=true"
   ```

   修改动态配置：

   ```toml
   # config/tls.toml
   [tls]
   [tls.options.default]
   minVersion = "VersionTLS12"
   maxVersion = "VersionTLS12"
   [tls.options.test-tls13]
   minVersion = "VersionTLS13"
   cipherSuites = [
     "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
     "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
     "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305",
     "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305",
     "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
     "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
   ]
   
   [[tls.certificates]]
   certFile = "/data/ssl/whoami.example.com.crt"
   keyFile = "/data/ssl/whoami.example.com.key"
   ```

2. 自动获取证书

   创建文件并赋权：

   ```bash
   sudo touch acme.json
   sudo chmod 600 acme.json
   ```

   修改静态配置文件：
   
   ```yml
   version: '3.7'
   
   services: 
     traefik:
     	command:
     		# tls
         - "--certificatesresolvers.letsencrypt.acme.email=acme@example.com"
         - "--certificatesresolvers.letsencrypt.acme.storage=acme.json"
         - "--certificatesresolvers.letsencrypt.acme.keyType=EC384"
         - "--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web"
         - "--entrypoints.websecure.http.tls.certResolver=letsencrypt"
       labels:
       	# dashboard https
         - "traefik.http.routers.traefik-dashboard-default.entrypoints=websecure"
         - "traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"
         - "traefik.http.routers.traefik-dashboard-default.service=dashboard@internal"
         # dashboard api
         - "traefik.http.routers.traefik-dashboard-api.entrypoints=websecure"
   ```
   
   重启服务后查看网页发现 `https` 已生效，且 `acme.json` 已被写入配置。 
   
3. 针对单个服务

   ```yml
   version: '3.7'
   
   services: 
     traefik:
     	# 省略其他
     	command:
     		# 移除
        # - "--entrypoints.websecure.http.tls.certResolver=letsencrypt"
       labels:
       	# 增加
         - "traefik.http.routers.traefik-dashboard-secure.tls=true"
         - "traefik.http.routers.traefik-dashboard-secure.tls.certresolver=letsencrypt"
   ```

### 3. 重定向

添加中间件：

```toml
# config/default.toml
# tricks 实现，提供 HTTP 默认转发 HTTPS
# https://github.com/containous/traefik/issues/4863#issuecomment-491093096
[http.services.noop.LoadBalancer]
[[http.services.noop.LoadBalancer.servers]]
url = "" # or url = "localhost"

[http.routers.https-redirect]
entryPoints = ["web"]
rule = "HostRegexp(`{any:.*}`)"
middlewares = ["https-redirect"]
service = "noop"

[http.middlewares.https-redirect.redirectScheme]
scheme = "https"
```

使用：

```yml
version: '3.7'

services: 
  traefik:
  	# 省略其他
    labels:
    	# 增加
      - "traefik.http.routers.traefik-dash-default.middlewares=https-redirect@file"
```

## 最终配置

```yml
version: '3.7'

services: 
  traefik:
    container_name: traefik
    image: traefik:v2.4.8
    restart: always
    ports: 
      - 80:80
      - 443:443
    networks: 
      - traefik
    command:
      - "--global.checkNewVersion=false"
      - "--global.sendAnonymousUsage=false"
      - "--ping=true"
      - "--log.level=warn"
      - "--log.format=common"
      - "--accesslog=false"
      - "--api=true"
      - "--api.insecure=true"
      - "--certificatesresolvers.letsencrypt.acme.email=acme@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=acme.json"
      - "--certificatesresolvers.letsencrypt.acme.keyType=EC384"
      - "--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web"
      - "--entryPoints.web.address=:80"
      - "--entryPoints.websecure.address=:443"
      - "--entrypoints.websecure.http.tls.certResolver=letsencrypt"
      - "--entrypoints.websecure.http.middlewares=gzip@file"
      - "--providers.docker=true"
      - "--providers.docker.watch=true"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.docker.endpoint=unix:///var/run/docker.sock"
      - "--providers.docker.swarmMode=false"
      - "--providers.docker.useBindPortIP=false"
      - "--providers.docker.network=traefik"
      - "--providers.file=true"
      - "--providers.file.watch=true"
      - "--providers.file.directory=/etc/traefik/config"
      - "--providers.file.debugloggeneratedtemplate=true"
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./config/:/etc/traefik/config/:ro
      - ./ssl/:/data/ssl/:ro
      - ./acme.json/:/acme.json:rw
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      - "traefik.http.routers.traefik-dashboard-default.middlewares=https-redirect@file"
      - "traefik.http.routers.traefik-dashboard-default.entrypoints=web"
      - "traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"
      - "traefik.http.routers.traefik-dashboard-secure.entrypoints=websecure"
      - "traefik.http.routers.traefik-dashboard-secure.rule=Host(`traefik.example.com`)"
      - "traefik.http.routers.traefik-dashboard-secure.service=dashboard@internal"
      - "traefik.http.routers.traefik-dashboard-secure.middlewares=default-auth-user@file"
      - "traefik.http.routers.traefik-dashboard-api.entrypoints=websecure"
      - "traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) && PathPrefix(`/api`)"
      - "traefik.http.routers.traefik-dashboard-api.service=api@internal"
      - "traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file"
    healthcheck:
      test: ["CMD-SHELL", "wget -q --spider --proxy off localhost:8080/ping || exit 1"]
      interval: 3s
      timeout: 5s
    logging: 
      driver: "json-file"
      options: 
        max-size: "1m"

  whoami:
    container_name: whoami
    image: traefik/whoami
    networks: 
      - traefik
    restart: always
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      - "traefik.http.routers.whoami.middlewares=https-redirect@file"
      - "traefik.http.routers.whoami.entrypoints=web"
      - "traefik.http.routers.whoami.rule=Host(`whoami.example.com`)"
      - "traefik.http.routers.whoami-secure.entrypoints=websecure"
      - "traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)"
      - "traefik.http.routers.whoami-secure.middlewares=default-auth-user@file"

# docker network create traefik
networks: 
  traefik:
    external: true
```

