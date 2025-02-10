import{_ as a,c as t,a as l,o as s}from"./app-DNXRdI82.js";const o={};function n(r,e){return s(),t("div",null,e[0]||(e[0]=[l('<h1 id="重要概念" tabindex="-1"><a class="header-anchor" href="#重要概念"><span>重要概念</span></a></h1><h2 id="cluster" tabindex="-1"><a class="header-anchor" href="#cluster"><span>Cluster</span></a></h2><p>Cluster 是计算、存储和网络资源的集合，Kubernetes 允许以 “抽象的形式” 将容器化的应用部署到集群，而无需将它们指定到某个特定的独立的计算机。</p><p><img src="https://d33wubrfki0l68.cloudfront.net/283cc20bb49089cb2ca54d51b4ac27720c1a7902/34424/docs/tutorials/kubernetes-basics/public/images/module_01_cluster.svg" alt="img"></p><h2 id="master" tabindex="-1"><a class="header-anchor" href="#master"><span>Master</span></a></h2><p>Master 的职责是调度整个 Cluster。Master 协调 Cluster 中的所有活动，例如调度应用、维护应用的所需状态、应用扩容以及推出新的更新。</p><h2 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>Node</span></a></h2><p>Node 的职责是运行容器化的应用。Node 是一个物理机或 VM，每个 Node 都有 Kubelet，它管理 Node 并且是 Node 与 Master 通信的代理。</p><h2 id="pod" tabindex="-1"><a class="header-anchor" href="#pod"><span>Pod</span></a></h2><p><img src="https://d33wubrfki0l68.cloudfront.net/5cb72d407cbe2755e581b6de757e0d81760d5b86/a9df9/docs/tutorials/kubernetes-basics/public/images/module_03_nodes.svg" alt="img"></p><p>Pod 是 Kubernetes 的最小工作单元。每个 Pod 包含一个或多个容器。Pod 中的容器会作为一个整体被 Master 调度到一个 Node 上运行。</p><p>Kubernetes 引入 Pod 主要基于下面两个目的：</p><ol><li><p>可管理性：</p><p>有些容器天生就是需要紧密联系，一起工作。Pod 提供了比容器更高层次的抽象，将它们封装到一个部署单元中。Kubernetes 以 Pod 为最小单位进行调度、扩展、共享资源、管理生命周期。</p></li><li><p>通信和资源共享：</p><p>Pod 中的所有容器使用同一个网络 namespace，即相同的 IP 地址和 Port 空间。它们可以直接用 localhost 通信。同样的，这些容器可以共享存储，当 Kubernetes 挂在 volume 到 Pod，本质上是将 volume 挂载到 Pod 中的每一个容器。</p></li></ol><p>Pods 有两种使用方式：</p><ol><li>运行单一容器</li><li>运行多个容器</li></ol><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller"><span>Controller</span></a></h2><p>Kubernetes 通常不会直接创建 Pod，而是通过 Controller 来管理 Pod 的。Controller 中定义了 Pod 的部署特性，比如有几个副本，在什么样的 Node 上运行等。为了满足不同的业务场景，Kubernetes 提供了多种 Controller，包括 Deployment、ReplicaSet、DaemonSet、StatefulSet、Job 等。</p><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3><p>Deployment 是最常用的 Controller，Deployment 可以管理 Pod 的多个副本，并确保 Pod 按照期望的状态运行。</p><h3 id="replicaset" tabindex="-1"><a class="header-anchor" href="#replicaset"><span>ReplicaSet</span></a></h3><p>ReplicaSet 实现了 Pod 的多副本管理。使用 Deployment 时自动创建 ReplicaSet，也就是说 Deployment 是通过 ReplicaSet 来管理 Pod 的多个副本的，我们通常不需要直接使用 ReplicaSet。</p><h3 id="daemonset" tabindex="-1"><a class="header-anchor" href="#daemonset"><span>DaemonSet</span></a></h3><p>DaemonSet 用于每个 Node 最多只运行一个 Pod 的场景，而其通常用于运行 daemon。</p><h3 id="statefulset" tabindex="-1"><a class="header-anchor" href="#statefulset"><span>StatefulSet</span></a></h3><p>StatefulSet 能够保证 Pod 的每个副本在整个生命周期中的名称是不变的，而其他 Controller 不提供这个功能。当某个 Pod 发生故障需要删除并重新启动时，Pod 的名称会发生变化，同时 StatefulSet 会保证副本按照固定的顺序启动、更新或删除。</p><h3 id="job" tabindex="-1"><a class="header-anchor" href="#job"><span>Job</span></a></h3><p>Job 用于运行结束就删除的应用。</p><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service</span></a></h2><p>Deployment 可以部署多个副本，每个 Pod 都有自己的 IP，外界如何访问这些副本的 IP 呢？要知道 Pod 很可能会被频繁的销毁和重启，它们的 IP 也会随之变化，用 IP 来访问很不现实。</p><p>如果在 Pod 前增加一个 Service 则可以很好的解决这个问题，只需要去访问 Service 的 IP 及 Port 即可。</p><p>故，Kubernetes 运行容器与访问容器分别由 Controller 和 Service 执行。</p><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace"><span>Namespace</span></a></h2><p>如果有多个用户或项目组使用同一个 Kubernetes Cluster，如何将他们创建的 Controller、Pod 等资源分开呢？</p><p>Namespace 可以将一个物理的 Cluuster 逻辑划分为多个虚拟的 Cluster，每个 Cluster 就是一个 Namespace。不同的 Namespace 里的资源是完全隔离的。</p><p>Kubernetes 默认创建了两个 Namespace <code>default</code> 和 <code>kube-system</code>。创建资源时如果不指定，将被放到 <code>default</code> 中，Kubernetes 自己创建的系统资源将放到 <code>kube-system</code> 中。</p>',35)]))}const c=a(o,[["render",n],["__file","concept.html.vue"]]),p=JSON.parse('{"path":"/os/kubernetes/concept.html","title":"重要概念","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Cluster","slug":"cluster","link":"#cluster","children":[]},{"level":2,"title":"Master","slug":"master","link":"#master","children":[]},{"level":2,"title":"Node","slug":"node","link":"#node","children":[]},{"level":2,"title":"Pod","slug":"pod","link":"#pod","children":[]},{"level":2,"title":"Controller","slug":"controller","link":"#controller","children":[{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]},{"level":3,"title":"ReplicaSet","slug":"replicaset","link":"#replicaset","children":[]},{"level":3,"title":"DaemonSet","slug":"daemonset","link":"#daemonset","children":[]},{"level":3,"title":"StatefulSet","slug":"statefulset","link":"#statefulset","children":[]},{"level":3,"title":"Job","slug":"job","link":"#job","children":[]}]},{"level":2,"title":"Service","slug":"service","link":"#service","children":[]},{"level":2,"title":"Namespace","slug":"namespace","link":"#namespace","children":[]}],"git":{"updatedTime":1637400002000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/kubernetes/concept.md"}');export{c as comp,p as data};
