---
title: 重要概念
---

## Cluster

Cluster 是计算、存储和网络资源的集合，Kubernetes 允许以 “抽象的形式” 将容器化的应用部署到集群，而无需将它们指定到某个特定的独立的计算机。

![img](https://d33wubrfki0l68.cloudfront.net/283cc20bb49089cb2ca54d51b4ac27720c1a7902/34424/docs/tutorials/kubernetes-basics/public/images/module_01_cluster.svg)



## Master

Master 的职责是调度整个 Cluster。Master 协调 Cluster 中的所有活动，例如调度应用、维护应用的所需状态、应用扩容以及推出新的更新。



## Node

Node 的职责是运行容器化的应用。Node 是一个物理机或 VM，每个 Node 都有 Kubelet，它管理 Node 并且是 Node 与 Master 通信的代理。



## Pod

![img](https://d33wubrfki0l68.cloudfront.net/5cb72d407cbe2755e581b6de757e0d81760d5b86/a9df9/docs/tutorials/kubernetes-basics/public/images/module_03_nodes.svg)

Pod 是 Kubernetes 的最小工作单元。每个 Pod 包含一个或多个容器。Pod 中的容器会作为一个整体被 Master 调度到一个 Node 上运行。

Kubernetes 引入 Pod 主要基于下面两个目的：

1. 可管理性：

   有些容器天生就是需要紧密联系，一起工作。Pod 提供了比容器更高层次的抽象，将它们封装到一个部署单元中。Kubernetes 以 Pod 为最小单位进行调度、扩展、共享资源、管理生命周期。

2. 通信和资源共享：

   Pod 中的所有容器使用同一个网络 namespace，即相同的 IP 地址和 Port 空间。它们可以直接用 localhost 通信。同样的，这些容器可以共享存储，当 Kubernetes 挂在 volume 到 Pod，本质上是将 volume 挂载到 Pod 中的每一个容器。

Pods 有两种使用方式：

1. 运行单一容器
2. 运行多个容器



## Controller

Kubernetes 通常不会直接创建 Pod，而是通过 Controller 来管理 Pod 的。Controller 中定义了 Pod 的部署特性，比如有几个副本，在什么样的 Node 上运行等。为了满足不同的业务场景，Kubernetes 提供了多种 Controller，包括 Deployment、ReplicaSet、DaemonSet、StatefulSet、Job 等。

### Deployment

Deployment 是最常用的 Controller，Deployment 可以管理 Pod 的多个副本，并确保 Pod 按照期望的状态运行。

### ReplicaSet

ReplicaSet 实现了 Pod 的多副本管理。使用 Deployment 时自动创建 ReplicaSet，也就是说 Deployment 是通过 ReplicaSet 来管理 Pod 的多个副本的，我们通常不需要直接使用 ReplicaSet。

### DaemonSet

DaemonSet 用于每个 Node 最多只运行一个 Pod 的场景，而其通常用于运行 daemon。

### StatefulSet

StatefulSet 能够保证 Pod 的每个副本在整个生命周期中的名称是不变的，而其他 Controller 不提供这个功能。当某个 Pod 发生故障需要删除并重新启动时，Pod 的名称会发生变化，同时 StatefulSet 会保证副本按照固定的顺序启动、更新或删除。

### Job

Job 用于运行结束就删除的应用。



## Service

Deployment 可以部署多个副本，每个 Pod 都有自己的 IP，外界如何访问这些副本的 IP 呢？要知道 Pod 很可能会被频繁的销毁和重启，它们的 IP 也会随之变化，用 IP 来访问很不现实。

如果在 Pod 前增加一个 Service 则可以很好的解决这个问题，只需要去访问 Service 的 IP 及 Port 即可。

故，Kubernetes 运行容器与访问容器分别由 Controller 和 Service 执行。



## Namespace

如果有多个用户或项目组使用同一个 Kubernetes Cluster，如何将他们创建的 Controller、Pod 等资源分开呢？

Namespace 可以将一个物理的 Cluuster 逻辑划分为多个虚拟的 Cluster，每个 Cluster 就是一个 Namespace。不同的 Namespace 里的资源是完全隔离的。

Kubernetes 默认创建了两个 Namespace `default` 和 `kube-system`。创建资源时如果不指定，将被放到 `default` 中，Kubernetes 自己创建的系统资源将放到 `kube-system` 中。