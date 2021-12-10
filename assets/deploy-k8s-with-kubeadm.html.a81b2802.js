import{r as o,c,a,b as t,F as r,e as s,d as e,o as l}from"./app.5a9f3ffb.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const d={},i=s(`<h1 id="kubeadm-\u90E8\u7F72-k8s-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#kubeadm-\u90E8\u7F72-k8s-\u96C6\u7FA4" aria-hidden="true">#</a> kubeadm \u90E8\u7F72 k8s \u96C6\u7FA4</h1><p>\u867D\u7136 kubeadm \u5C4F\u853D\u4E86\u7EC6\u8282\uFF0C\u9047\u5230\u95EE\u9898\u96BE\u4EE5\u6392\u67E5\uFF0C\u4F46\u662F\u5B83\u7B80\u5355\u5FEB\u6377\u3002</p><p>\u89C4\u5212\u4E3A\u5355 master \u4E09 node \u7684\u96C6\u7FA4\uFF0C\u5E76\u5728 master \u4E2D\u8BBE\u7F6E hosts\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-master
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
EOF</span>
</code></pre></div><h2 id="\u521D\u59CB\u5316\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u64CD\u4F5C" aria-hidden="true">#</a> \u521D\u59CB\u5316\u64CD\u4F5C</h2><h3 id="_1-\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_1-\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> 1. \u5173\u95ED\u9632\u706B\u5899</h3>`,7),u=e("\u65B9\u4FBF\u6D4B\u8BD5\uFF0C\u5177\u4F53\u53EF\u6839\u636E "),h={href:"https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports",target:"_blank",rel:"noopener noreferrer"},k=e("\u68C0\u67E5\u6240\u9700\u7AEF\u53E3"),b=e("\u3002"),g=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre></div><h3 id="_2-\u5173\u95ED-selinux" tabindex="-1"><a class="header-anchor" href="#_2-\u5173\u95ED-selinux" aria-hidden="true">#</a> 2. \u5173\u95ED selinux</h3><p>\u8FD9\u662F\u5141\u8BB8\u5BB9\u5668\u8BBF\u95EE\u4E3B\u673A\u6587\u4EF6\u7CFB\u7EDF\u6240\u5FC5\u9700\u7684\uFF0C\u800C\u8FD9\u4E9B\u64CD\u4F5C\u65F6\u4E3A\u4E86\u4F8B\u5982 Pod \u7F51\u7EDC\u5DE5\u4F5C\u6B63\u5E38\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>

<span class="token function">sed</span> -i <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config
</code></pre></div><h3 id="_3-\u5173\u95ED-swap" tabindex="-1"><a class="header-anchor" href="#_3-\u5173\u95ED-swap" aria-hidden="true">#</a> 3. \u5173\u95ED swap</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>swapoff -a

<span class="token function">sed</span> -ri <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
</code></pre></div><h3 id="_4-\u5141\u8BB8-iptables-\u68C0\u67E5\u6865\u63A5\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-\u5141\u8BB8-iptables-\u68C0\u67E5\u6865\u63A5\u6D41\u91CF" aria-hidden="true">#</a> 4. \u5141\u8BB8 iptables \u68C0\u67E5\u6865\u63A5\u6D41\u91CF</h3><p>\u786E\u4FDD <code>br_netfilter</code> \u6A21\u5757\u88AB\u52A0\u8F7D\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
sysctl --system  <span class="token comment"># \u751F\u6548</span>
</code></pre></div><h3 id="_5-\u65F6\u95F4\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#_5-\u65F6\u95F4\u540C\u6B65" aria-hidden="true">#</a> 5. \u65F6\u95F4\u540C\u6B65</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> ntpdate -y
ntpdate ntp1.aliyun.com
</code></pre></div><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><h3 id="_1-\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-docker" aria-hidden="true">#</a> 1. \u5B89\u88C5 docker</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://get.docker.com -o get-docker.sh
<span class="token function">sh</span> get-docker.sh --mirror Aliyun

systemctl <span class="token builtin class-name">enable</span> docker <span class="token operator">&amp;&amp;</span> systemctl start docker

docker --version
</code></pre></div><p>\u8FD8\u9700\u8981\u914D\u7F6E Docker \u6E90</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;registry-mirrors&quot;: [
    &quot;https://hub-mirror.c.163.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;
  ]
}
EOF</span>

systemctl daemon-reload
systemctl restart docker
</code></pre></div><h3 id="_2-\u5B89\u88C5-kubeadm\u3001kubelet-\u548C-kubectl" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5-kubeadm\u3001kubelet-\u548C-kubectl" aria-hidden="true">#</a> 2. \u5B89\u88C5 kubeadm\u3001kubelet \u548C kubectl</h3><p>\u8BF4\u660E\uFF1A</p><ul><li><code>kubeadm</code>\uFF1A\u7528\u6765\u521D\u59CB\u5316\u96C6\u7FA4\u7684\u6307\u4EE4</li><li><code>kubelet</code>\uFF1A\u5728\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u7528\u6765\u542F\u52A8 Pod \u548C\u5BB9\u5668\u7B49</li><li><code>kubectl</code>\uFF1A\u7528\u6765\u4E0E\u96C6\u7FA4\u901A\u4FE1\u7684\u547D\u4EE4\u884C\u5DE5\u5177</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

<span class="token comment"># \u9700\u786E\u4FDD\u4EE5\u4E0B\u5DE5\u5177\u7248\u672C\u76F8\u540C</span>
yum <span class="token function">install</span> -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0

systemctl <span class="token builtin class-name">enable</span> kubelet
systemctl daemon-reload
systemctl restart kubelet
</code></pre></div><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="_1-\u5728-master-\u8FDB\u884C-init" tabindex="-1"><a class="header-anchor" href="#_1-\u5728-master-\u8FDB\u884C-init" aria-hidden="true">#</a> 1. \u5728 master \u8FDB\u884C init</h3><p>master \u8282\u70B9\u81F3\u5C11\u9700\u8981\u67092\u4E2A CPU\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubeadm init <span class="token punctuation">\\</span>
  --apiserver-advertise-address<span class="token operator">=</span><span class="token number">10.0</span>.0.140 <span class="token punctuation">\\</span>
  --image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
  --kubernetes-version v1.18.0 <span class="token punctuation">\\</span>
  --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
</code></pre></div><p>\u7136\u540E\u6839\u636E\u63D0\u793A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> -i /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -g<span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

<span class="token comment"># \u68C0\u67E5 nodes</span>
kubectl get nodes
</code></pre></div><h3 id="_2-\u5728-node-\u7533\u8BF7\u52A0\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u5728-node-\u7533\u8BF7\u52A0\u5165" aria-hidden="true">#</a> 2. \u5728 node \u7533\u8BF7\u52A0\u5165</h3><p>master init \u540E\u5B58\u5728\u5982\u4E0B\u63D0\u793A\uFF0C\u5207\u6362\u5230 node \u8282\u70B9</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:

kubeadm <span class="token function">join</span> <span class="token number">10.0</span>.0.130:6443 --token 5q3hp6.bfy624lj790rb68n <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:49820391560bf7286be2ebf0d86fe0ba32352f1032b468896dc71383600cd697
</code></pre></div><p>token \u6709\u6548\u671F\u4E3A 12 \u5C0F\u65F6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubeadm token create --print-join-command
</code></pre></div><h3 id="_3-\u589E\u52A0-cni-\u7F51\u7EDC\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u589E\u52A0-cni-\u7F51\u7EDC\u63D2\u4EF6" aria-hidden="true">#</a> 3. \u589E\u52A0 CNI \u7F51\u7EDC\u63D2\u4EF6</h3><p>\u67E5\u770B nodes \u7684 STATUS \u8FD8\u662F NotReady\u3002\u662F\u7531\u4E8E\u5FC5\u987B\u90E8\u7F72\u4E00\u4E2A\u57FA\u4E8E Pod \u7F51\u7EDC\u63D2\u4EF6\u7684 \u5BB9\u5668\u7F51\u7EDC\u63A5\u53E3\uFF08CNI\uFF09\uFF0C\u4EE5\u4FBF\u4E8E Pod \u4E4B\u95F4\u4E92\u76F8\u901A\u4FE1\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

kubectl get pods -n kube-system
</code></pre></div>`,34),m=e("\u5982\u679C\u5B58\u5728 STATUS \u4E3A Init:ImagePullBackOff\uFF0C\u90A3\u4E48\u53EF\u524D\u5F80 yml \u914D\u7F6E\u6587\u4EF6\u5BFB\u627E"),f={href:"https://github.com/coreos/flannel/releases",target:"_blank",rel:"noopener noreferrer"},_=e("\u5BF9\u5E94\u7684\u955C\u50CF"),v=e("\uFF0C\u624B\u52A8 "),x=a("code",null,"docker pull",-1),y=e(" \u6216 "),E=a("code",null,"docker load",-1),O=e("\u3002"),F=s(`<p>\u6700\u540E\u5F97\u5230\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>NAME         STATUS     ROLES    AGE    VERSION
k8s-master   Ready      master   3m8s   v1.18.0
k8s-node1    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   55s    v1.18.0
k8s-node2    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   54s    v1.18.0
k8s-node3    Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   51s    v1.18.0
</code></pre></div><h2 id="\u6E05\u7406" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406" aria-hidden="true">#</a> \u6E05\u7406</h2><p>\u5982\u679C\u4F60\u5728\u96C6\u7FA4\u4E2D\u4F7F\u7528\u4E86\u4E00\u6B21\u6027\u670D\u52A1\u5668\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u5219\u53EF\u4EE5\u5173\u95ED\u8FD9\u4E9B\u670D\u52A1\u5668\uFF0C\u800C\u65E0\u9700\u8FDB\u4E00\u6B65\u6E05\u7406\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>kubectl config delete-cluster</code> \u5220\u9664\u5BF9\u96C6\u7FA4\u7684\u672C\u5730\u5F15\u7528\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u8981\u66F4\u5E72\u51C0\u5730\u53D6\u6D88\u914D\u7F6E\u7FA4\u96C6\uFF0C \u5219\u5E94\u9996\u5148\u6E05\u7A7A\u8282\u70B9\u5E76\u786E\u4FDD\u8BE5\u8282\u70B9\u4E3A\u7A7A\uFF0C \u7136\u540E\u53D6\u6D88\u914D\u7F6E\u8BE5\u8282\u70B9\u3002</p><h3 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># kubectl drain &lt;node name&gt; --delete-local-data --force --ignore-daemonsets</span>
kubectl drain k8s-node1 --delete-local-data --force --ignore-daemonsets
kubectl drain k8s-node2 --delete-local-data --force --ignore-daemonsets
kubectl drain k8s-node3 --delete-local-data --force --ignore-daemonsets
</code></pre></div><p>\u5728\u5220\u9664\u8282\u70B9\u524D\u91CD\u7F6E\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubeadm reset
</code></pre></div><p>\u6E05\u9664 iptables \u89C4\u5219\u53CA\u91CD\u7F6E IPVS \u8868\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>iptables -F <span class="token operator">&amp;&amp;</span> iptables -t nat -F <span class="token operator">&amp;&amp;</span> iptables -t mangle -F <span class="token operator">&amp;&amp;</span> iptables -X

ipvsadm -C
</code></pre></div><p>\u6700\u540E\u5220\u9664\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># kubectl delete node &lt;node name&gt;</span>
kubectl delete node k8s-node1
kubectl delete node k8s-node2
kubectl delete node k8s-node3
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl create deployment nginx --image<span class="token operator">=</span>nginx
kubectl expose deployment nginx --port<span class="token operator">=</span><span class="token number">80</span> --type<span class="token operator">=</span>NodePort

<span class="token comment"># \u6839\u636E\u63D0\u793A\u8BBF\u95EE\u5BF9\u5E94\u7AEF\u53E3</span>
kubectl get pod,svc
</code></pre></div>`,15);function w(S,N){const n=o("OutboundLink");return l(),c(r,null,[i,a("p",null,[u,a("a",h,[k,t(n)]),b]),g,a("p",null,[m,a("a",f,[_,t(n)]),v,x,y,E,O]),F],64)}var T=p(d,[["render",w]]);export{T as default};
