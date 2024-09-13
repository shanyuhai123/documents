import{_ as p,M as r,p as l,q as c,a1 as n,R as s,t as e,N as o}from"./framework-e3e34937.js";const d={},i={href:"https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/coreos/flannel/releases",target:"_blank",rel:"noopener noreferrer"};function u(b,a){const t=r("ExternalLinkIcon");return l(),c("div",null,[a[10]||(a[10]=n(`<h1 id="kubeadm-部署-k8s-集群" tabindex="-1"><a class="header-anchor" href="#kubeadm-部署-k8s-集群" aria-hidden="true">#</a> kubeadm 部署 k8s 集群</h1><p>虽然 kubeadm 屏蔽了细节，遇到问题难以排查，但是它简单快捷。</p><p>规划为单 master 三 node 的集群，并在 master 中设置 hosts。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-master
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
EOF</span>
</code></pre></div><h2 id="初始化操作" tabindex="-1"><a class="header-anchor" href="#初始化操作" aria-hidden="true">#</a> 初始化操作</h2><h3 id="_1-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_1-关闭防火墙" aria-hidden="true">#</a> 1. 关闭防火墙</h3>`,7)),s("p",null,[a[1]||(a[1]=e("方便测试，具体可根据 ")),s("a",i,[a[0]||(a[0]=e("检查所需端口")),o(t)]),a[2]||(a[2]=e("。"))]),a[11]||(a[11]=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre></div><h3 id="_2-关闭-selinux" tabindex="-1"><a class="header-anchor" href="#_2-关闭-selinux" aria-hidden="true">#</a> 2. 关闭 selinux</h3><p>这是允许容器访问主机文件系统所必需的，而这些操作时为了例如 Pod 网络工作正常。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config
</code></pre></div><h3 id="_3-关闭-swap" tabindex="-1"><a class="header-anchor" href="#_3-关闭-swap" aria-hidden="true">#</a> 3. 关闭 swap</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span>

<span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
</code></pre></div><h3 id="_4-允许-iptables-检查桥接流量" tabindex="-1"><a class="header-anchor" href="#_4-允许-iptables-检查桥接流量" aria-hidden="true">#</a> 4. 允许 iptables 检查桥接流量</h3><p>确保 <code>br_netfilter</code> 模块被加载。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>  <span class="token comment"># 生效</span>
</code></pre></div><h3 id="_5-时间同步" tabindex="-1"><a class="header-anchor" href="#_5-时间同步" aria-hidden="true">#</a> 5. 时间同步</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> ntpdate <span class="token parameter variable">-y</span>
ntpdate ntp1.aliyun.com
</code></pre></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><h3 id="_1-安装-docker" tabindex="-1"><a class="header-anchor" href="#_1-安装-docker" aria-hidden="true">#</a> 1. 安装 docker</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun

systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>

<span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre></div><p>还需要配置 Docker 源</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;registry-mirrors&quot;: [
    &quot;https://hub-mirror.c.163.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;
  ]
}
EOF</span>

systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre></div><h3 id="_2-安装-kubeadm、kubelet-和-kubectl" tabindex="-1"><a class="header-anchor" href="#_2-安装-kubeadm、kubelet-和-kubectl" aria-hidden="true">#</a> 2. 安装 kubeadm、kubelet 和 kubectl</h3><p>说明：</p><ul><li><code>kubeadm</code>：用来初始化集群的指令</li><li><code>kubelet</code>：在集群中的每个节点上用来启动 Pod 和容器等</li><li><code>kubectl</code>：用来与集群通信的命令行工具</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

<span class="token comment"># 需确保以下工具版本相同</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0

systemctl <span class="token builtin class-name">enable</span> kubelet
systemctl daemon-reload
systemctl restart kubelet
</code></pre></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><h3 id="_1-在-master-进行-init" tabindex="-1"><a class="header-anchor" href="#_1-在-master-进行-init" aria-hidden="true">#</a> 1. 在 master 进行 init</h3><p>master 节点至少需要有2个 CPU。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubeadm init <span class="token punctuation">\\</span>
  --apiserver-advertise-address<span class="token operator">=</span><span class="token number">10.0</span>.0.140 <span class="token punctuation">\\</span>
  --image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
  --kubernetes-version v1.18.0 <span class="token punctuation">\\</span>
  --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
</code></pre></div><p>然后根据提示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

<span class="token comment"># 检查 nodes</span>
kubectl get nodes
</code></pre></div><h3 id="_2-在-node-申请加入" tabindex="-1"><a class="header-anchor" href="#_2-在-node-申请加入" aria-hidden="true">#</a> 2. 在 node 申请加入</h3><p>master init 后存在如下提示，切换到 node 节点</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:

kubeadm <span class="token function">join</span> <span class="token number">10.0</span>.0.130:6443 <span class="token parameter variable">--token</span> 5q3hp6.bfy624lj790rb68n <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:49820391560bf7286be2ebf0d86fe0ba32352f1032b468896dc71383600cd697
</code></pre></div><p>token 有效期为 12 小时。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubeadm token create --print-join-command
</code></pre></div><h3 id="_3-增加-cni-网络插件" tabindex="-1"><a class="header-anchor" href="#_3-增加-cni-网络插件" aria-hidden="true">#</a> 3. 增加 CNI 网络插件</h3><p>查看 nodes 的 STATUS 还是 NotReady。是由于必须部署一个基于 Pod 网络插件的 容器网络接口（CNI），以便于 Pod 之间互相通信。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

kubectl get pods <span class="token parameter variable">-n</span> kube-system
</code></pre></div>`,34)),s("p",null,[a[4]||(a[4]=e("如果存在 STATUS 为 Init:ImagePullBackOff，那么可前往 yml 配置文件寻找")),s("a",k,[a[3]||(a[3]=e("对应的镜像")),o(t)]),a[5]||(a[5]=e("，手动 ")),a[6]||(a[6]=s("code",null,"docker pull",-1)),a[7]||(a[7]=e(" 或 ")),a[8]||(a[8]=s("code",null,"docker load",-1)),a[9]||(a[9]=e("。"))]),a[12]||(a[12]=n(`<p>最后得到：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>NAME         STATUS     ROLES    AGE    VERSION
k8s-master   Ready      master   3m8s   v1.18.0
k8s-node1    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   55s    v1.18.0
k8s-node2    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   54s    v1.18.0
k8s-node3    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   51s    v1.18.0
</code></pre></div><h2 id="清理" tabindex="-1"><a class="header-anchor" href="#清理" aria-hidden="true">#</a> 清理</h2><p>如果你在集群中使用了一次性服务器进行测试，则可以关闭这些服务器，而无需进一步清理。你可以使用 <code>kubectl config delete-cluster</code> 删除对集群的本地引用。</p><p>但是，如果要更干净地取消配置群集， 则应首先清空节点并确保该节点为空， 然后取消配置该节点。</p><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kubectl drain &lt;node name&gt; --delete-local-data --force --ignore-daemonsets</span>
kubectl drain k8s-node1 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets
kubectl drain k8s-node2 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets
kubectl drain k8s-node3 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets
</code></pre></div><p>在删除节点前重置状态：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubeadm reset
</code></pre></div><p>清除 iptables 规则及重置 IPVS 表：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-X</span>

ipvsadm <span class="token parameter variable">-C</span>
</code></pre></div><p>最后删除节点：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kubectl delete node &lt;node name&gt;</span>
kubectl delete <span class="token function">node</span> k8s-node1
kubectl delete <span class="token function">node</span> k8s-node2
kubectl delete <span class="token function">node</span> k8s-node3
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl create deployment nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx
kubectl expose deployment nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort

<span class="token comment"># 根据提示访问对应端口</span>
kubectl get pod,svc
</code></pre></div>`,15))])}const m=p(d,[["render",u],["__file","deploy-k8s-with-kubeadm.html.vue"]]);export{m as default};
