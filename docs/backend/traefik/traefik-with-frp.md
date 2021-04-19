---
title: Traefik 代理 frp 服务
---

## 目标

期望代理域名为 `*.frp.example.com`。



## FRP 配置

> 此处不探讨如何配置 frpc（客户端）。

### frps.ini

创建 `frps.ini` 文件：

```ini
[common]
bind_port = {{ .Envs.FRP_SERVER_PORT }}
token     = {{ .Envs.FRP_SERVER_TOKEN }}

# subdomain
vhost_http_port = {{ .Envs.FRP_VHOST_HTTP_PORT }}
subdomain_host = {{ .Envs.FRP_SUBDOMAIN_HOST }}
```

### docker compose

```yml
version: "3.7"

services:
  frps:
    container_name: frps
    image: fatedier/frps:v0.36.2
    command: frps -c /app/frps.ini
    networks:
      - traefik
    ports:
    	# frps server
      - 7000:7000
    	# vhost
      - 80
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
      - ./frps.ini:/app/frps.ini:ro
    environment:
      - FRP_SERVER_PORT=24622
      - FRP_SERVER_TOKEN=tencentcloud_frp_token
      - FRP_VHOST_HTTP_PORT=80
      - FRP_SUBDOMAIN_HOST=frp.example.com
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      # http entrypoints
      - "traefik.http.routers.frp.entrypoints=web"
      - "traefik.http.routers.frp.rule=HostRegexp(`{subdomain:[a-z]+}.frp.example.com`)"
      - "traefik.http.routers.frp.middlewares=https-redirect@file"
      # https entrypoints
      - "traefik.http.routers.frp-secure.entrypoints=websecure"
      - "traefik.http.routers.frp-secure.rule=HostRegexp(`{subdomain:[a-z]+}.frp.example.com`)"
      - "traefik.http.routers.frp-secure.tls=true"
      - "traefik.http.routers.frp-secure.tls.certresolver=le-dns"
      - "traefik.http.routers.frp-secure.tls.domains[0].main=frp.example.com"
      - "traefik.http.routers.frp-secure.tls.domains[0].sans=*.frp.example.com"
      # 指向 80 vhost
      - "traefik.http.routers.frp-secure.service=frp-proxy"
      - "traefik.http.services.frp-proxy.loadbalancer.server.port=80"
    logging:
      driver: "json-file"
      options:
        max-size: "1m"

# 先创建外部网卡
# docker network create traefik
networks:
  traefik:
    external: true
```



## Traefik 配置

创建文件：

```bash
sudo touch acme-dns
```

在 [最终配置](https://docs.shanyuhai.top/backend/traefik/quick-start.html#%E6%9C%80%E7%BB%88%E9%85%8D%E7%BD%AE) 上增加：

```yml
version: '3.7'

services:
  # 省略其他
  traefik:
    environment:
      - ACME_DNS_API_BASE=https://auth.acme-dns.io
      - ACME_DNS_STORAGE_PATH=/acme-dns
    command:
      # tls dns
      - "--certificatesresolvers.le-dns.acme.email=acme@example.com"
      - "--certificatesresolvers.le-dns.acme.storage=acme.json"
      - "--certificatesresolvers.le-dns.acme.keyType=EC384"
      - "--certificatesresolvers.le-dns.acme.dnsChallenge.provider=acme-dns"
    volumes:
      - ./acme-dns:/acme-dns:rw
```

第一次执行 `docker-compose up` 后可以获取 `acme-dns` 信息：

```
{
    "frp.example.com": {
        "FullDomain": "187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io",
        "SubDomain": "c9866200-2abb-45c6-82e6-396adcd1f625",
        "Username": "9b9fc433-c218-4c61-b37e-1da73551c538",
        "Password": "MPhWrfzZwgeZKyGK3cYPLIdgllNbmF5tFutacpFF"
    }
}
```

登录到你的 DNS 帐号，创建一条 CNAME 记录 `_acme-challenge.frp` 指向 `187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io`，再次执行 `docker-compose up`。

稍后可在 `acme.json` 文件中找到对应的记录，即证书签发成功。



## 参考资料

+ [容器化 FRP 使用方案](https://soulteary.com/2020/10/04/frp-in-docker.html)
+ [Traefik 2 Request Multiple domain and Wildcard SSL certificates](https://hexo.aufomm.com/2020/04/06/Traefik-2-Request-Multiple-domain-and-Wildcard-SSL-certificates/)