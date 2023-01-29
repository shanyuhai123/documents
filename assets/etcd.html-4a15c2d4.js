import{_ as p,M as o,p as c,q as l,Q as s,t as a,N as t,a1 as n}from"./framework-49860b1b.js";const r={},i=n('<h1 id="使用-docker-搭建-etcd" tabindex="-1"><a class="header-anchor" href="#使用-docker-搭建-etcd" aria-hidden="true">#</a> 使用 Docker 搭建 ETCD</h1><h2 id="etcd-基础概念" tabindex="-1"><a class="header-anchor" href="#etcd-基础概念" aria-hidden="true">#</a> ETCD 基础概念</h2><ul><li>Raft：etcd 所采用的保证分布式系统强一致性的算法</li><li>Node：一个 Raft 状态实例机</li><li>Member：一个 etcd 实例。它管理着一个 Node，并且可以为客户端请求提供服务</li><li>Cluster：由多个 Member 构成可以协同工作的 etcd 集群</li><li>Peer：对同一个 etcd 集群中的另外一个 Member 的称呼</li><li>Client：向 etcd 集群发送 HTTP 请求的客户端</li><li>WAL：预写式日志，etcd 用于持久化存储的日志格式</li><li>snapshot：etcd 防止 WAL 文件过多而设置的快照，存储 etcd 数据状态</li><li>Proxy：etcd 的一种模式，为 etcd 集群提供反向代理服务</li><li>Leader：Raft 算法中通过竞选而产生的处理所有数据的节点</li><li>Follower：竞选失败的节点作为 Raft 中的从属节点，为算法提供强一致性保证</li><li>Candidate：当 Follower 超过一定时间接收不到 Leader 的心跳时转变为 Candidate 开始竞选</li><li>Term：某个节点成为 Leader 到下一次竞选时间，称为一个 Term</li><li>Index：数据项编号。Raft 中通过 Term 和 Index 来定位数据</li></ul><h2 id="部署-etcd" tabindex="-1"><a class="header-anchor" href="#部署-etcd" aria-hidden="true">#</a> 部署 ETCD</h2>',4),d={href:"https://etcd.io/docs/v3.4.0/dev-internal/discovery_protocol/",target:"_blank",rel:"noopener noreferrer"},k=n(`<h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><p>拉取镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull bitnami/etcd:3.4.14
</code></pre></div><p>确认 ETCD 节点数量，例如三个：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://discovery.etcd.io/new?size<span class="token operator">=</span><span class="token number">3</span>
<span class="token comment"># https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941</span>
</code></pre></div><p>环境变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">REGISTRY</span><span class="token operator">=</span>bitnami/etcd
<span class="token assign-left variable">ETCD_VERSION</span><span class="token operator">=</span><span class="token number">3.4</span>.14
<span class="token assign-left variable">TOKEN</span><span class="token operator">=</span>etcd-token
<span class="token assign-left variable">CLUSTER_STATE</span><span class="token operator">=</span>new
<span class="token assign-left variable">NAME_1</span><span class="token operator">=</span>etcd-n1
<span class="token assign-left variable">NAME_2</span><span class="token operator">=</span>etcd-n2
<span class="token assign-left variable">NAME_3</span><span class="token operator">=</span>etcd-n3
<span class="token assign-left variable">HOST_1</span><span class="token operator">=</span><span class="token number">10.0</span>.0.137
<span class="token assign-left variable">HOST_2</span><span class="token operator">=</span><span class="token number">10.0</span>.0.138
<span class="token assign-left variable">HOST_3</span><span class="token operator">=</span><span class="token number">10.0</span>.0.139
<span class="token assign-left variable">DISCOVERY</span><span class="token operator">=</span>https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941
</code></pre></div><h3 id="基于-ip-部署" tabindex="-1"><a class="header-anchor" href="#基于-ip-部署" aria-hidden="true">#</a> 基于 IP 部署</h3><p><code>node1</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop etcd <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_1}</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> etcd <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   <span class="token parameter variable">--discovery</span> <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><p><code>node2</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop etcd <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_2}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_2}</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> etcd <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   <span class="token parameter variable">--discovery</span> <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><p><code>node3</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop etcd <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_3}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_3}</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> etcd <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   <span class="token parameter variable">--discovery</span> <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><h3 id="基于-dns-部署" tabindex="-1"><a class="header-anchor" href="#基于-dns-部署" aria-hidden="true">#</a> 基于 DNS 部署</h3><p>编辑 DNS 服务器的 <code>/etc/dnsmasq.conf</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># etcd 动态发现</span>
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd1.example.com,2380,0,100
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd2.example.com,2380,0,100
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd3.example.com,2380,0,100
</code></pre></div><p>再在 <code>/etc/dnsmasq.hosts</code> 增加解析：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">10.0</span>.0.137 etcd1.example.com
<span class="token number">10.0</span>.0.138 etcd2.example.com
<span class="token number">10.0</span>.0.139 etcd3.example.com
</code></pre></div><p>在每台服务器上指定 DNS 后验证解析：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dig</span> +noall +answer SRV _etcd-server._tcp.example.com
</code></pre></div>`,21),u=s("code",null,"node1",-1),b={href:"https://github.com/etcd-io/etcd/issues/11321",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop etcd <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> etcd
<span class="token assign-left variable">ETCD_VERSION</span><span class="token operator">=</span><span class="token number">3.3</span>.15
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span>
<span class="token assign-left variable">THIS_URLS</span><span class="token operator">=</span>etcd1.example.com
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> etcd <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_DISCOVERY_SRV</span><span class="token operator">=</span>example.com <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_URLS}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_URLS}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><h3 id="校验结果" tabindex="-1"><a class="header-anchor" href="#校验结果" aria-hidden="true">#</a> 校验结果</h3><p>查看集群成员：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl member list

<span class="token comment"># 得到</span>
c45dc290bba2bf1, started, etcd-n1, http://10.0.0.137:2380, http://10.0.0.137:2379, <span class="token boolean">false</span>
26788b649bce5709, started, etcd-n2, http://10.0.0.138:2380, http://10.0.0.138:2379, <span class="token boolean">false</span>
510527ca792cc2da, started, etcd-n3, http://10.0.0.139:2380, http://10.0.0.139:2379, <span class="token boolean">false</span>
</code></pre></div><p>查看健康状态：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl --write-out<span class="token operator">=</span>table <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&quot;http://10.0.0.137:2379,http://10.0.0.138:2379,http://10.0.0.139:2379&quot;</span> endpoint  health

<span class="token comment"># 得到</span>
http://10.0.0.138:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.12227ms
http://10.0.0.139:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.674569ms
http://10.0.0.137:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.993285ms


<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl --write-out<span class="token operator">=</span>table <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&quot;http://etcd1.example.com:2379,http://etcd2.example.com:2379,http://etcd3.example.com:2379&quot;</span> endpoint  health

<span class="token comment"># 得到</span>
+--------------------------+--------+------------+-------+
<span class="token operator">|</span>         ENDPOINT         <span class="token operator">|</span> HEALTH <span class="token operator">|</span>    TOOK    <span class="token operator">|</span> ERROR <span class="token operator">|</span>
+--------------------------+--------+------------+-------+
<span class="token operator">|</span> http://etcd1.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token number">8</span>.615217ms <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> http://etcd3.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span>  <span class="token number">8</span>.97122ms <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> http://etcd2.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token number">9</span>.323943ms <span class="token operator">|</span>       <span class="token operator">|</span>
+--------------------------+--------+------------+-------+
</code></pre></div><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2><h3 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h3><p><code>node1</code> 设置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl put /testdir/testkey <span class="token string">&quot;Hello world&quot;</span>
</code></pre></div><p><code>node3</code> 读取：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl get /testdir/testkey

<span class="token comment"># 得到</span>
/testdir/testkey
Hello world
</code></pre></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> WATCH</h3><p><code>node2</code> 监听：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl <span class="token function">watch</span> hi 
</code></pre></div><p><code>node3</code> 设置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> etcd etcdctl put hi shanyuhai
</code></pre></div><p><code>node2</code> 会得到响应：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>PUT
hi
shanyuhai
</code></pre></div><h2 id="处理问题" tabindex="-1"><a class="header-anchor" href="#处理问题" aria-hidden="true">#</a> 处理问题</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs etcd
</code></pre></div><table><thead><tr><th>日志</th><th>说明</th></tr></thead><tbody><tr><td><code>health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused</code></td><td>无法建立与这个 IP 的 2380 端口进行连接。检查 etcd 容器是否在那个 IP 的主机上运行。</td></tr><tr><td><code>xxx is starting a new election at term x</code></td><td>etcd 集群已经失去了法定人数，正在尝试建立新的领导者。当大多数运行 etcd 的节点出现故障或无法访问时，可能会发生这种情况。</td></tr><tr><td><code>connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout&quot;; Reconnecting to {0.0.0.0:2379 0 &lt;nil&gt;}</code></td><td>主机防火墙阻止了网络通信。</td></tr><tr><td><code>rafthttp: request cluster ID mismatch</code></td><td>运行着 etcd 实例并记录<code>rafthttp: request cluster ID mismatch</code>的节点正在尝试加入另一个由其他成员构成的集群。应该从集群中删除这个节点，然后重新添加。</td></tr><tr><td><code>rafthttp: failed to find member</code></td><td>集群状态 (<code>/var/lib/etcd</code>) 包含错误信息，无法加入集群。应该从集群中删除这个节点，并删除状态目录，然后重新添加。</td></tr></tbody></table>`,22);function v(m,g){const e=o("ExternalLinkIcon");return c(),l("div",null,[i,s("p",null,[a("在部署时，不确定其他成员 IP 是常见的，可以使用"),s("a",d,[a("动态发现"),t(e)]),a("的方式解决。")]),k,s("p",null,[a("此处仅以 "),u,a(" 示例，注 etcd 新版本"),s("a",b,[a("需要 HTTPS"),t(e)]),a("，所以切换为旧版：")]),h])}const T=p(r,[["render",v],["__file","etcd.html.vue"]]);export{T as default};
