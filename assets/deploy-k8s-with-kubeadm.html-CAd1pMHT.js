import{_ as s,c as n,a as e,o as l}from"./app-DNXRdI82.js";const p={};function t(c,a){return l(),n("div",null,a[0]||(a[0]=[e(`<h1 id="kubeadm-部署-k8s-集群" tabindex="-1"><a class="header-anchor" href="#kubeadm-部署-k8s-集群"><span>kubeadm 部署 k8s 集群</span></a></h1><p>虽然 kubeadm 屏蔽了细节，遇到问题难以排查，但是它简单快捷。</p><p>规划为单 master 三 node 的集群，并在 master 中设置 hosts。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">hostnamectl set-hostname k8s-master</span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">10.0.0.140 k8s-master</span>
<span class="line">10.0.0.141 k8s-node1</span>
<span class="line">10.0.0.142 k8s-node2</span>
<span class="line">10.0.0.143 k8s-node3</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre></div><h2 id="初始化操作" tabindex="-1"><a class="header-anchor" href="#初始化操作"><span>初始化操作</span></a></h2><h3 id="_1-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_1-关闭防火墙"><span>1. 关闭防火墙</span></a></h3><p>方便测试，具体可根据 <a href="https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports" target="_blank" rel="noopener noreferrer">检查所需端口</a>。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">systemctl stop firewalld</span>
<span class="line">systemctl disable firewalld</span>
<span class="line"></span></code></pre></div><h3 id="_2-关闭-selinux" tabindex="-1"><a class="header-anchor" href="#_2-关闭-selinux"><span>2. 关闭 selinux</span></a></h3><p>这是允许容器访问主机文件系统所必需的，而这些操作时为了例如 Pod 网络工作正常。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">setenforce <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config</span>
<span class="line"></span></code></pre></div><h3 id="_3-关闭-swap" tabindex="-1"><a class="header-anchor" href="#_3-关闭-swap"><span>3. 关闭 swap</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">swapoff <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab</span>
<span class="line"></span></code></pre></div><h3 id="_4-允许-iptables-检查桥接流量" tabindex="-1"><a class="header-anchor" href="#_4-允许-iptables-检查桥接流量"><span>4. 允许 iptables 检查桥接流量</span></a></h3><p>确保 <code>br_netfilter</code> 模块被加载。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span></span>
<span class="line">br_netfilter</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span></span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">EOF</span></span>
<span class="line"><span class="token function">sysctl</span> <span class="token parameter variable">--system</span>  <span class="token comment"># 生效</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-时间同步" tabindex="-1"><a class="header-anchor" href="#_5-时间同步"><span>5. 时间同步</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum <span class="token function">install</span> ntpdate <span class="token parameter variable">-y</span></span>
<span class="line">ntpdate ntp1.aliyun.com</span>
<span class="line"></span></code></pre></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><h3 id="_1-安装-docker" tabindex="-1"><a class="header-anchor" href="#_1-安装-docker"><span>1. 安装 docker</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh</span>
<span class="line"><span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun</span>
<span class="line"></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre></div><p>还需要配置 Docker 源</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;registry-mirrors&quot;: [</span>
<span class="line">    &quot;https://hub-mirror.c.163.com&quot;,</span>
<span class="line">    &quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">systemctl daemon-reload</span>
<span class="line">systemctl restart <span class="token function">docker</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-安装-kubeadm、kubelet-和-kubectl" tabindex="-1"><a class="header-anchor" href="#_2-安装-kubeadm、kubelet-和-kubectl"><span>2. 安装 kubeadm、kubelet 和 kubectl</span></a></h3><p>说明：</p><ul><li><code>kubeadm</code>：用来初始化集群的指令</li><li><code>kubelet</code>：在集群中的每个节点上用来启动 Pod 和容器等</li><li><code>kubectl</code>：用来与集群通信的命令行工具</li></ul><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">[kubernetes]</span>
<span class="line">name=Kubernetes</span>
<span class="line">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span>
<span class="line">enabled=1</span>
<span class="line">gpgcheck=0</span>
<span class="line">repo_gpgcheck=0</span>
<span class="line">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 需确保以下工具版本相同</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0</span>
<span class="line"></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> kubelet</span>
<span class="line">systemctl daemon-reload</span>
<span class="line">systemctl restart kubelet</span>
<span class="line"></span></code></pre></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><h3 id="_1-在-master-进行-init" tabindex="-1"><a class="header-anchor" href="#_1-在-master-进行-init"><span>1. 在 master 进行 init</span></a></h3><p>master 节点至少需要有2个 CPU。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubeadm init <span class="token punctuation">\\</span></span>
<span class="line">  --apiserver-advertise-address<span class="token operator">=</span><span class="token number">10.0</span>.0.140 <span class="token punctuation">\\</span></span>
<span class="line">  --image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span></span>
<span class="line">  --kubernetes-version v1.18.0 <span class="token punctuation">\\</span></span>
<span class="line">  --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16</span>
<span class="line"></span></code></pre></div><p>然后根据提示：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 nodes</span></span>
<span class="line">kubectl get nodes</span>
<span class="line"></span></code></pre></div><h3 id="_2-在-node-申请加入" tabindex="-1"><a class="header-anchor" href="#_2-在-node-申请加入"><span>2. 在 node 申请加入</span></a></h3><p>master init 后存在如下提示，切换到 node 节点</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:</span>
<span class="line"></span>
<span class="line">kubeadm <span class="token function">join</span> <span class="token number">10.0</span>.0.130:6443 <span class="token parameter variable">--token</span> 5q3hp6.bfy624lj790rb68n <span class="token punctuation">\\</span></span>
<span class="line">    --discovery-token-ca-cert-hash sha256:49820391560bf7286be2ebf0d86fe0ba32352f1032b468896dc71383600cd697</span>
<span class="line"></span></code></pre></div><p>token 有效期为 12 小时。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubeadm token create --print-join-command</span>
<span class="line"></span></code></pre></div><h3 id="_3-增加-cni-网络插件" tabindex="-1"><a class="header-anchor" href="#_3-增加-cni-网络插件"><span>3. 增加 CNI 网络插件</span></a></h3><p>查看 nodes 的 STATUS 还是 NotReady。是由于必须部署一个基于 Pod 网络插件的 容器网络接口（CNI），以便于 Pod 之间互相通信。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span>
<span class="line"></span>
<span class="line">kubectl get pods <span class="token parameter variable">-n</span> kube-system</span>
<span class="line"></span></code></pre></div><p>如果存在 STATUS 为 Init:ImagePullBackOff，那么可前往 yml 配置文件寻找<a href="https://github.com/coreos/flannel/releases" target="_blank" rel="noopener noreferrer">对应的镜像</a>，手动 <code>docker pull</code> 或 <code>docker load</code>。</p><p>最后得到：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">NAME         STATUS     ROLES    AGE    VERSION</span>
<span class="line">k8s-master   Ready      master   3m8s   v1.18.0</span>
<span class="line">k8s-node1    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   55s    v1.18.0</span>
<span class="line">k8s-node2    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   54s    v1.18.0</span>
<span class="line">k8s-node3    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   51s    v1.18.0</span>
<span class="line"></span></code></pre></div><h2 id="清理" tabindex="-1"><a class="header-anchor" href="#清理"><span>清理</span></a></h2><p>如果你在集群中使用了一次性服务器进行测试，则可以关闭这些服务器，而无需进一步清理。你可以使用 <code>kubectl config delete-cluster</code> 删除对集群的本地引用。</p><p>但是，如果要更干净地取消配置群集， 则应首先清空节点并确保该节点为空， 然后取消配置该节点。</p><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># kubectl drain &lt;node name&gt; --delete-local-data --force --ignore-daemonsets</span></span>
<span class="line">kubectl drain k8s-node1 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets</span>
<span class="line">kubectl drain k8s-node2 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets</span>
<span class="line">kubectl drain k8s-node3 --delete-local-data <span class="token parameter variable">--force</span> --ignore-daemonsets</span>
<span class="line"></span></code></pre></div><p>在删除节点前重置状态：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubeadm reset</span>
<span class="line"></span></code></pre></div><p>清除 iptables 规则及重置 IPVS 表：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">iptables <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-F</span> <span class="token operator">&amp;&amp;</span> iptables <span class="token parameter variable">-X</span></span>
<span class="line"></span>
<span class="line">ipvsadm <span class="token parameter variable">-C</span></span>
<span class="line"></span></code></pre></div><p>最后删除节点：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># kubectl delete node &lt;node name&gt;</span></span>
<span class="line">kubectl delete <span class="token function">node</span> k8s-node1</span>
<span class="line">kubectl delete <span class="token function">node</span> k8s-node2</span>
<span class="line">kubectl delete <span class="token function">node</span> k8s-node3</span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl create deployment nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx</span>
<span class="line">kubectl expose deployment nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据提示访问对应端口</span></span>
<span class="line">kubectl get pod,svc</span>
<span class="line"></span></code></pre></div>`,58)]))}const o=s(p,[["render",t],["__file","deploy-k8s-with-kubeadm.html.vue"]]),r=JSON.parse('{"path":"/os/kubernetes/deploy-k8s-with-kubeadm.html","title":"kubeadm 部署 k8s 集群","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"初始化操作","slug":"初始化操作","link":"#初始化操作","children":[{"level":3,"title":"1. 关闭防火墙","slug":"_1-关闭防火墙","link":"#_1-关闭防火墙","children":[]},{"level":3,"title":"2. 关闭 selinux","slug":"_2-关闭-selinux","link":"#_2-关闭-selinux","children":[]},{"level":3,"title":"3. 关闭 swap","slug":"_3-关闭-swap","link":"#_3-关闭-swap","children":[]},{"level":3,"title":"4. 允许 iptables 检查桥接流量","slug":"_4-允许-iptables-检查桥接流量","link":"#_4-允许-iptables-检查桥接流量","children":[]},{"level":3,"title":"5. 时间同步","slug":"_5-时间同步","link":"#_5-时间同步","children":[]}]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[{"level":3,"title":"1. 安装 docker","slug":"_1-安装-docker","link":"#_1-安装-docker","children":[]},{"level":3,"title":"2. 安装 kubeadm、kubelet 和 kubectl","slug":"_2-安装-kubeadm、kubelet-和-kubectl","link":"#_2-安装-kubeadm、kubelet-和-kubectl","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"1. 在 master 进行 init","slug":"_1-在-master-进行-init","link":"#_1-在-master-进行-init","children":[]},{"level":3,"title":"2. 在 node 申请加入","slug":"_2-在-node-申请加入","link":"#_2-在-node-申请加入","children":[]},{"level":3,"title":"3. 增加 CNI 网络插件","slug":"_3-增加-cni-网络插件","link":"#_3-增加-cni-网络插件","children":[]}]},{"level":2,"title":"清理","slug":"清理","link":"#清理","children":[{"level":3,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"updatedTime":1637400002000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/kubernetes/deploy-k8s-with-kubeadm.md"}');export{o as comp,r as data};
