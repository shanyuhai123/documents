---
title: kubeadm 部署 k8s 集群
---

## 前言

虽然 kubeadm 屏蔽了细节，遇到问题难以排查，但是它简单快捷。

规划为单 master 三 node 的集群，并在 master 中设置 hosts。

```
hostnamectl set-hostname k8s-master
```

```bash
cat >> /etc/hosts << EOF
10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
EOF
```



## 初始化操作

### 1. 关闭防火墙

方便测试，具体可根据 [检查所需端口](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports)。

```bash
systemctl stop firewalld
systemctl disable firewalld
```

### 2. 关闭 selinux

这是允许容器访问主机文件系统所必需的，而这些操作时为了例如 Pod 网络工作正常。

```bash
setenforce 0

sed -i 's/enforcing/disabled/' /etc/selinux/config
```

### 3. 关闭 swap

```bash
swapoff -a

sed -ri 's/.*swap.*/#&/' /etc/fstab
```

### 4. 允许 iptables 检查桥接流量

确保 `br_netfilter` 模块被加载。

```bash
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sysctl --system  # 生效
```

### 5. 时间同步

```bash
yum install ntpdate -y
ntpdate ntp1.aliyun.com
```



## 安装依赖

### 1. 安装 docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh --mirror Aliyun

systemctl enable docker && systemctl start docker

docker --version
```

还需要配置 Docker 源

```bash
cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF

systemctl daemon-reload
systemctl restart docker
```

### 2. 安装 kubeadm、kubelet 和 kubectl

说明：

+ `kubeadm`：用来初始化集群的指令
+ `kubelet`：在集群中的每个节点上用来启动 Pod 和容器等
+ `kubectl`：用来与集群通信的命令行工具

```bash
cat > /etc/yum.repos.d/kubernetes.repo << EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 需确保以下工具版本相同
yum install -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0

systemctl enable kubelet
systemctl daemon-reload
systemctl restart kubelet
```



## 部署

### 1. 在 master 进行 init

master 节点至少需要有2个 CPU。

```bash
kubeadm init \
  --apiserver-advertise-address=10.0.0.140 \
  --image-repository registry.aliyuncs.com/google_containers \
  --kubernetes-version v1.18.0 \
  --pod-network-cidr=10.244.0.0/16
```

然后根据提示：

```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# 检查 nodes
kubectl get nodes
```

### 2. 在 node 申请加入

master init 后存在如下提示，切换到 node 节点

```bash
Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.0.0.130:6443 --token 5q3hp6.bfy624lj790rb68n \
    --discovery-token-ca-cert-hash sha256:49820391560bf7286be2ebf0d86fe0ba32352f1032b468896dc71383600cd697
```

token 有效期为 12 小时。

```bash
kubeadm token create --print-join-command
```

### 3. 增加 CNI 网络插件

查看 nodes 的 STATUS 还是 NotReady。是由于必须部署一个基于 Pod 网络插件的 容器网络接口（CNI），以便于 Pod 之间互相通信。

```bash
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

kubectl get pods -n kube-system
```

如果存在 STATUS 为 Init:ImagePullBackOff，那么可前往 yml 配置文件寻找[对应的镜像](https://github.com/coreos/flannel/releases)，手动 `docker pull` 或 `docker load`。

最后得到：

```
NAME         STATUS     ROLES    AGE    VERSION
k8s-master   Ready      master   3m8s   v1.18.0
k8s-node1    Ready      <none>   55s    v1.18.0
k8s-node2    Ready      <none>   54s    v1.18.0
k8s-node3    Ready      <none>   51s    v1.18.0
```



## 清理

如果你在集群中使用了一次性服务器进行测试，则可以关闭这些服务器，而无需进一步清理。你可以使用 `kubectl config delete-cluster` 删除对集群的本地引用。

但是，如果要更干净地取消配置群集， 则应首先清空节点并确保该节点为空， 然后取消配置该节点。

### 删除节点

```bash
# kubectl drain <node name> --delete-local-data --force --ignore-daemonsets
kubectl drain k8s-node1 --delete-local-data --force --ignore-daemonsets
kubectl drain k8s-node2 --delete-local-data --force --ignore-daemonsets
kubectl drain k8s-node3 --delete-local-data --force --ignore-daemonsets
```

在删除节点前重置状态：

```bash
kubeadm reset
```

清除 iptables 规则及重置 IPVS 表：

```bash
iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X

ipvsadm -C
```

最后删除节点：

```bash
# kubectl delete node <node name>
kubectl delete node k8s-node1
kubectl delete node k8s-node2
kubectl delete node k8s-node3
```



## 测试

```bash
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --port=80 --type=NodePort

# 根据提示访问对应端口
kubectl get pod,svc
```