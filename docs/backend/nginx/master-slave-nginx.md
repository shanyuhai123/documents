---
title: 主从 Nginx
---

## 准备

| name  | ip         | role   |
| ----- | ---------- | ------ |
| web01 | 10.0.0.133 | MASTER |
| web02 | 10.0.0.134 | BACKUP |

为虚拟机[安装](/backend/nginx/install-nginx.html#编译安装)好 Nginx 和 keepalived。

修改 Nginx 的主页便于之后识别：

```bash
vim /usr/local/nginx/html/index.html

# 分别为
# <h1>Welcome to nginx1!</h1>
# <h1>Welcome to nginx2!</h1>
```

开放端口：

```bash
firewall-cmd --zone=public --add-port=80/tcp
```

验证结果：

```bash
curl -i 10.0.0.133
curl -i 10.0.0.134
```



## 配置主从

### 1. MASTER(web01)

```bash
# 配置 keepalived
vim /etc/keepalived/keepalived.conf

# 修改内容如下
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.200.1
   smtp_connect_timeout 30
   router_id LVS_DEVEL
   vrrp_skip_check_adv_addr
   vrrp_strict
   vrrp_garp_interval 0
   vrrp_gna_interval 0
}

vrrp_script chk_nginx {
    script "/etc/keepalived/nginx_check.sh"
    interval 2
    weight 20
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    mcast_src_ip 10.0.0.133
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        10.0.0.100
    }
}
```

### 2. BACKUP(web02)

```bash
# 配置 keepalived
vim /etc/keepalived/keepalived.conf

# 修改内容如下
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.200.1
   smtp_connect_timeout 30
   router_id LVS_DEVEL
}

vrrp_script chk_nginx {
    script "/etc/keepalived/nginx_check.sh"
    interval 2
    weight 20
}

vrrp_instance VI_1 {
    state BACKUP
    interface eth0
    virtual_router_id 51
    mcast_src_ip 10.0.0.134
    priority 80
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        10.0.0.100
    }
}
```

### 3. check

```bash
# 配置 check
vim /etc/keepalived/nginx_check.sh

# 添加内容如下
#!/bin/bash
A=`ps -C nginx –no-header |wc -l`
if [ $A -eq 0 ];then
        /usr/local/nginx/sbin/nginx
        sleep 2
        if [ `ps -C nginx --no-header |wc -l` -eq 0 ];then
                killall keepalived
        fi
fi

# 添加执行权限
chmod +x /etc/keepalived/nginx_check.sh 
ll /etc/keepalived # 验证
```



## 测试

### 1. 启用服务

```bash
systemctl start keepalived.service

ip addr # 验证 web01 和 web02

# web01
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:ea:d2:fc brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.133/24 brd 10.0.0.255 scope global noprefixroute dynamic eth0
       valid_lft 1305sec preferred_lft 1305sec
    inet 10.0.0.100/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5883:fca9:d7da:bd43/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever

# web02（虚拟 ip 未启用）
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:82:f0:17 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.134/24 brd 10.0.0.255 scope global noprefixroute dynamic eth0
       valid_lft 869sec preferred_lft 869sec
    inet6 fe80::5883:fca9:d7da:bd43/64 scope link tentative noprefixroute dadfailed 
       valid_lft forever preferred_lft forever
```

### 2. 测试

```bash
curl -i 10.0.0.100 # 虚拟 ip
# <h1>Welcome to nginx1!</h1>

# web01
systemctl stop nginx-compile.service
systemctl stop keepalived.service
netstat -lntup # 验证
ip addr # 验证

# web02
ip addr # 验证

# 再次测试
curl -i 10.0.0.100 # 虚拟 ip
# <h1>Welcome to nginx2!</h1>
```



