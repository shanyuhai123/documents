# 使用 Docker 搭建 ETCD

## ETCD 基础概念

+ Raft：etcd 所采用的保证分布式系统强一致性的算法
+ Node：一个 Raft 状态实例机
+ Member：一个 etcd 实例。它管理着一个 Node，并且可以为客户端请求提供服务
+ Cluster：由多个 Member 构成可以协同工作的 etcd 集群
+ Peer：对同一个 etcd 集群中的另外一个 Member 的称呼
+ Client：向 etcd 集群发送 HTTP 请求的客户端
+ WAL：预写式日志，etcd 用于持久化存储的日志格式
+ snapshot：etcd 防止 WAL 文件过多而设置的快照，存储 etcd 数据状态
+ Proxy：etcd 的一种模式，为 etcd 集群提供反向代理服务
+ Leader：Raft 算法中通过竞选而产生的处理所有数据的节点
+ Follower：竞选失败的节点作为 Raft 中的从属节点，为算法提供强一致性保证
+ Candidate：当 Follower 超过一定时间接收不到 Leader 的心跳时转变为 Candidate 开始竞选
+ Term：某个节点成为 Leader 到下一次竞选时间，称为一个 Term
+ Index：数据项编号。Raft 中通过 Term 和 Index 来定位数据

## 部署 ETCD

在部署时，不确定其他成员 IP 是常见的，可以使用[动态发现](https://etcd.io/docs/v3.4.0/dev-internal/discovery_protocol/)的方式解决。

### 准备

拉取镜像：

```bash
docker pull bitnami/etcd:3.4.14
```

确认 ETCD 节点数量，例如三个：

```bash
curl https://discovery.etcd.io/new?size=3
# https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941
```

环境变量：

```bash
REGISTRY=bitnami/etcd
ETCD_VERSION=3.4.14
TOKEN=etcd-token
CLUSTER_STATE=new
NAME_1=etcd-n1
NAME_2=etcd-n2
NAME_3=etcd-n3
HOST_1=10.0.0.137
HOST_2=10.0.0.138
HOST_3=10.0.0.139
DISCOVERY=https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941
```

### 基于 IP 部署

`node1`：

```bash
docker stop etcd && docker rm etcd
THIS_NAME=${NAME_1}
THIS_IP=${HOST_1}
docker run --name etcd -d \
  -p 2379:2379 \
  -p 2380:2380 \
  --env ALLOW_NONE_AUTHENTICATION=yes \
  --env ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \
  --env ETCD_ADVERTISE_CLIENT_URLS=http://${THIS_IP}:2379 \
  ${REGISTRY}:${ETCD_VERSION} \
   etcd \
    --name ${THIS_NAME} \
    --initial-advertise-peer-urls http://${THIS_IP}:2380 --listen-peer-urls http://0.0.0.0:2380 \
   --discovery ${DISCOVERY} \
   --initial-cluster-state ${CLUSTER_STATE} --initial-cluster-token ${TOKEN}
```

`node2`：

```bash
docker stop etcd && docker rm etcd
THIS_NAME=${NAME_2}
THIS_IP=${HOST_2}
docker run --name etcd -d \
  -p 2379:2379 \
  -p 2380:2380 \
  --env ALLOW_NONE_AUTHENTICATION=yes \
  --env ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \
  --env ETCD_ADVERTISE_CLIENT_URLS=http://${THIS_IP}:2379 \
  ${REGISTRY}:${ETCD_VERSION} \
   etcd \
    --name ${THIS_NAME} \
    --initial-advertise-peer-urls http://${THIS_IP}:2380 --listen-peer-urls http://0.0.0.0:2380 \
   --discovery ${DISCOVERY} \
   --initial-cluster-state ${CLUSTER_STATE} --initial-cluster-token ${TOKEN}
```

`node3`：

```bash
docker stop etcd && docker rm etcd
THIS_NAME=${NAME_3}
THIS_IP=${HOST_3}
docker run --name etcd -d \
  -p 2379:2379 \
  -p 2380:2380 \
  --env ALLOW_NONE_AUTHENTICATION=yes \
  --env ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \
  --env ETCD_ADVERTISE_CLIENT_URLS=http://${THIS_IP}:2379 \
  ${REGISTRY}:${ETCD_VERSION} \
   etcd \
    --name ${THIS_NAME} \
    --initial-advertise-peer-urls http://${THIS_IP}:2380 --listen-peer-urls http://0.0.0.0:2380 \
   --discovery ${DISCOVERY} \
   --initial-cluster-state ${CLUSTER_STATE} --initial-cluster-token ${TOKEN}
```

### 基于 DNS 部署

编辑 DNS 服务器的 `/etc/dnsmasq.conf`：

```bash
# etcd 动态发现
srv-host=_etcd-server._tcp.example.com,etcd1.example.com,2380,0,100
srv-host=_etcd-server._tcp.example.com,etcd2.example.com,2380,0,100
srv-host=_etcd-server._tcp.example.com,etcd3.example.com,2380,0,100
```

再在 `/etc/dnsmasq.hosts` 增加解析：

```bash
10.0.0.137 etcd1.example.com
10.0.0.138 etcd2.example.com
10.0.0.139 etcd3.example.com
```

在每台服务器上指定 DNS 后验证解析：

```bash
dig +noall +answer SRV _etcd-server._tcp.example.com
```

此处仅以 `node1` 示例，注 etcd 新版本[需要 HTTPS](https://github.com/etcd-io/etcd/issues/11321)，所以切换为旧版：

```bash
docker stop etcd && docker rm etcd
ETCD_VERSION=3.3.15
THIS_NAME=${NAME_1}
THIS_URLS=etcd1.example.com
docker run --name etcd -d \
  -p 2379:2379 \
  -p 2380:2380 \
  --env ALLOW_NONE_AUTHENTICATION=yes \
  --env ETCD_DISCOVERY_SRV=example.com \
  --env ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \
  --env ETCD_ADVERTISE_CLIENT_URLS=http://${THIS_URLS}:2379 \
  ${REGISTRY}:${ETCD_VERSION} \
   etcd \
    --name ${THIS_NAME} \
    --initial-advertise-peer-urls http://${THIS_URLS}:2380 --listen-peer-urls http://0.0.0.0:2380 \
   --initial-cluster-state ${CLUSTER_STATE} --initial-cluster-token ${TOKEN}
```

### 校验结果

查看集群成员：

```bash
docker exec -it etcd etcdctl member list

# 得到
c45dc290bba2bf1, started, etcd-n1, http://10.0.0.137:2380, http://10.0.0.137:2379, false
26788b649bce5709, started, etcd-n2, http://10.0.0.138:2380, http://10.0.0.138:2379, false
510527ca792cc2da, started, etcd-n3, http://10.0.0.139:2380, http://10.0.0.139:2379, false
```

查看健康状态：

```bash
docker exec -it etcd etcdctl --write-out=table --endpoints="http://10.0.0.137:2379,http://10.0.0.138:2379,http://10.0.0.139:2379" endpoint  health

# 得到
http://10.0.0.138:2379 is healthy: successfully committed proposal: took = 11.12227ms
http://10.0.0.139:2379 is healthy: successfully committed proposal: took = 11.674569ms
http://10.0.0.137:2379 is healthy: successfully committed proposal: took = 11.993285ms


docker exec -it etcd etcdctl --write-out=table --endpoints="http://etcd1.example.com:2379,http://etcd2.example.com:2379,http://etcd3.example.com:2379" endpoint  health

# 得到
+--------------------------+--------+------------+-------+
|         ENDPOINT         | HEALTH |    TOOK    | ERROR |
+--------------------------+--------+------------+-------+
| http://etcd1.example.com:2379 |   true | 8.615217ms |       |
| http://etcd3.example.com:2379 |   true |  8.97122ms |       |
| http://etcd2.example.com:2379 |   true | 9.323943ms |       |
+--------------------------+--------+------------+-------+
```

## 数据

### CRUD

`node1` 设置：

```bash
docker exec -it etcd etcdctl put /testdir/testkey "Hello world"
```

`node3` 读取：

```bash
docker exec -it etcd etcdctl get /testdir/testkey

# 得到
/testdir/testkey
Hello world
```

### WATCH

`node2` 监听：

```bash
docker exec -it etcd etcdctl watch hi 
```

`node3` 设置：

```bash
docker exec -it etcd etcdctl put hi shanyuhai
```

`node2` 会得到响应：

```bash
PUT
hi
shanyuhai
```

## 处理问题

```bash
docker logs etcd
```

| 日志                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused` | 无法建立与这个 IP 的 2380 端口进行连接。检查 etcd 容器是否在那个 IP 的主机上运行。 |
| `xxx is starting a new election at term x`                   | etcd 集群已经失去了法定人数，正在尝试建立新的领导者。当大多数运行 etcd 的节点出现故障或无法访问时，可能会发生这种情况。 |
| `connection error: desc = "transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout"; Reconnecting to {0.0.0.0:2379 0 <nil>}` | 主机防火墙阻止了网络通信。                                   |
| `rafthttp: request cluster ID mismatch`                      | 运行着 etcd 实例并记录`rafthttp: request cluster ID mismatch`的节点正在尝试加入另一个由其他成员构成的集群。应该从集群中删除这个节点，然后重新添加。 |
| `rafthttp: failed to find member`                            | 集群状态 (`/var/lib/etcd`) 包含错误信息，无法加入集群。应该从集群中删除这个节点，并删除状态目录，然后重新添加。 |
