---
title: 部署 MySQL
---

::: danger

记得在 Node 节点提前准备好 `nfs-utils`，否则会抛出错误 `mount: wrong fs type, bad option, bad superblock`。

:::



## 准备环境

### Cluster

```
10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
```

### nfs

在 master 执行：

```bash
# nfs
yum install -y rpcbind nfs-utils

# 共享目录
mkdir /nfsdata
# 配置 nfs `vim /etc/exports`
/nfsdata *(insecure,rw,sync,no_root_squash)

# 启动服务
systemctl start rpcbind
systemctl start nfs-server
systemctl enable rpcbind
systemctl enable nfs-server
exportfs -r

# 本地检查
showmount -e
```

在 node 执行：

```bash
# nfs
yum install -y nfs-utils
```



## 安装 mysql

准备目录：

```bash
mkdir /nfsdata/mysql
```

### 1. pv 和 pvc

```yaml
# mysql-pv-pvc.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mysql-pv-volume
spec:
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  nfs:
    server: 10.0.0.140
    path: "/nfsdata/mysql"
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

### 2. deployment

```yaml
# mysql.yaml
apiVersion: v1
kind: Service
metadata:
  name: mysql
spec:
  ports:
  - port: 3306
  selector:
    app: mysql
  clusterIP: None 
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysql
spec:
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - image: mysql:5.6
        name: mysql
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: password
        ports:
        - containerPort: 3306
          name: mysql
        volumeMounts:
        - name: mysql-persistent-storage
          mountPath: /var/lib/mysql
      volumes:
      - name: mysql-persistent-storage
        persistentVolumeClaim:
          claimName: mysql-pv-claim
```



## 执行测试

```bash
kubectl apply -f mysql-pv-pvc.yaml
kubectl apply -f mysql.yaml

# 检验
kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kpf4z   1/1     Running   0          32m   10.244.1.8   k8s-node1   <none>           <none>
```

### 1. 更新数据库

```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword

# 进入数据库后

# 查看数据库列表
show databases;
# 创建 itcource 数据库
create database itcource;
# 使用 itcource
use itcource;
# 创建 user 表
create table user(id int(4));
# 插入用户
insert user values(100);
# 查询
select * from user;
```

### 2. 销毁 node

根据上面得到 MySQL 运行在 k8s-node1 的节点上，对该节点模拟宕机。

一段时间后，Kubernetes 将 MySQL 迁移到 k8s-node3 的节点上：

```bash
NAME                     READY   STATUS        RESTARTS   AGE   IP            NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kh29k   1/1     Running       0          27s   10.244.3.13   k8s-node3   <none>           <none>
mysql-5456cbb767-kpf4z   1/1     Terminating   0          42m   10.244.1.8    k8s-node1   <none>           <none>
```

### 3. 验证数据一致性

```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword

# 进入数据库后

# 查询数据
show databases;
select * from itcource.user;
# 结果
+------+
| id   |
+------+
|  100 |
+------+
```

