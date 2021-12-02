import{r as p,c as o,a as s,b as t,F as c,e as n,d as a,o as l}from"./app.299d7c62.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=n('<h1 id="\u4F7F\u7528-docker-\u642D\u5EFA-etcd" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u642D\u5EFA-etcd" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u642D\u5EFA ETCD</h1><h2 id="etcd-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#etcd-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> ETCD \u57FA\u7840\u6982\u5FF5</h2><ul><li>Raft\uFF1Aetcd \u6240\u91C7\u7528\u7684\u4FDD\u8BC1\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5F3A\u4E00\u81F4\u6027\u7684\u7B97\u6CD5</li><li>Node\uFF1A\u4E00\u4E2A Raft \u72B6\u6001\u5B9E\u4F8B\u673A</li><li>Member\uFF1A\u4E00\u4E2A etcd \u5B9E\u4F8B\u3002\u5B83\u7BA1\u7406\u7740\u4E00\u4E2A Node\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E3A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u63D0\u4F9B\u670D\u52A1</li><li>Cluster\uFF1A\u7531\u591A\u4E2A Member \u6784\u6210\u53EF\u4EE5\u534F\u540C\u5DE5\u4F5C\u7684 etcd \u96C6\u7FA4</li><li>Peer\uFF1A\u5BF9\u540C\u4E00\u4E2A etcd \u96C6\u7FA4\u4E2D\u7684\u53E6\u5916\u4E00\u4E2A Member \u7684\u79F0\u547C</li><li>Client\uFF1A\u5411 etcd \u96C6\u7FA4\u53D1\u9001 HTTP \u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF</li><li>WAL\uFF1A\u9884\u5199\u5F0F\u65E5\u5FD7\uFF0Cetcd \u7528\u4E8E\u6301\u4E45\u5316\u5B58\u50A8\u7684\u65E5\u5FD7\u683C\u5F0F</li><li>snapshot\uFF1Aetcd \u9632\u6B62 WAL \u6587\u4EF6\u8FC7\u591A\u800C\u8BBE\u7F6E\u7684\u5FEB\u7167\uFF0C\u5B58\u50A8 etcd \u6570\u636E\u72B6\u6001</li><li>Proxy\uFF1Aetcd \u7684\u4E00\u79CD\u6A21\u5F0F\uFF0C\u4E3A etcd \u96C6\u7FA4\u63D0\u4F9B\u53CD\u5411\u4EE3\u7406\u670D\u52A1</li><li>Leader\uFF1ARaft \u7B97\u6CD5\u4E2D\u901A\u8FC7\u7ADE\u9009\u800C\u4EA7\u751F\u7684\u5904\u7406\u6240\u6709\u6570\u636E\u7684\u8282\u70B9</li><li>Follower\uFF1A\u7ADE\u9009\u5931\u8D25\u7684\u8282\u70B9\u4F5C\u4E3A Raft \u4E2D\u7684\u4ECE\u5C5E\u8282\u70B9\uFF0C\u4E3A\u7B97\u6CD5\u63D0\u4F9B\u5F3A\u4E00\u81F4\u6027\u4FDD\u8BC1</li><li>Candidate\uFF1A\u5F53 Follower \u8D85\u8FC7\u4E00\u5B9A\u65F6\u95F4\u63A5\u6536\u4E0D\u5230 Leader \u7684\u5FC3\u8DF3\u65F6\u8F6C\u53D8\u4E3A Candidate \u5F00\u59CB\u7ADE\u9009</li><li>Term\uFF1A\u67D0\u4E2A\u8282\u70B9\u6210\u4E3A Leader \u5230\u4E0B\u4E00\u6B21\u7ADE\u9009\u65F6\u95F4\uFF0C\u79F0\u4E3A\u4E00\u4E2A Term</li><li>Index\uFF1A\u6570\u636E\u9879\u7F16\u53F7\u3002Raft \u4E2D\u901A\u8FC7 Term \u548C Index \u6765\u5B9A\u4F4D\u6570\u636E</li></ul><h2 id="\u90E8\u7F72-etcd" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-etcd" aria-hidden="true">#</a> \u90E8\u7F72 ETCD</h2>',4),k=a("\u5728\u90E8\u7F72\u65F6\uFF0C\u4E0D\u786E\u5B9A\u5176\u4ED6\u6210\u5458 IP \u662F\u5E38\u89C1\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u={href:"https://etcd.io/docs/v3.4.0/dev-internal/discovery_protocol/",target:"_blank",rel:"noopener noreferrer"},h=a("\u52A8\u6001\u53D1\u73B0"),b=a("\u7684\u65B9\u5F0F\u89E3\u51B3\u3002"),m=n(`<h3 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h3><p>\u62C9\u53D6\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker pull bitnami/etcd:3.4.14
</code></pre></div><p>\u786E\u8BA4 ETCD \u8282\u70B9\u6570\u91CF\uFF0C\u4F8B\u5982\u4E09\u4E2A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> https://discovery.etcd.io/new?size<span class="token operator">=</span><span class="token number">3</span>
<span class="token comment"># https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941</span>
</code></pre></div><p>\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">REGISTRY</span><span class="token operator">=</span>bitnami/etcd
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
</code></pre></div><h3 id="\u57FA\u4E8E-ip-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-ip-\u90E8\u7F72" aria-hidden="true">#</a> \u57FA\u4E8E IP \u90E8\u7F72</h3><p><code>node1</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop etcd <span class="token operator">&amp;&amp;</span> docker <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_1}</span>
docker run --name etcd -d <span class="token punctuation">\\</span>
  -p <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  -p <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   --discovery <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><p><code>node2</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop etcd <span class="token operator">&amp;&amp;</span> docker <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_2}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_2}</span>
docker run --name etcd -d <span class="token punctuation">\\</span>
  -p <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  -p <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   --discovery <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><p><code>node3</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop etcd <span class="token operator">&amp;&amp;</span> docker <span class="token function">rm</span> etcd
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_3}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_3}</span>
docker run --name etcd -d <span class="token punctuation">\\</span>
  -p <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  -p <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   --discovery <span class="token variable">\${DISCOVERY}</span> <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><h3 id="\u57FA\u4E8E-dns-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-dns-\u90E8\u7F72" aria-hidden="true">#</a> \u57FA\u4E8E DNS \u90E8\u7F72</h3><p>\u7F16\u8F91 DNS \u670D\u52A1\u5668\u7684 <code>/etc/dnsmasq.conf</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># etcd \u52A8\u6001\u53D1\u73B0</span>
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd1.example.com,2380,0,100
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd2.example.com,2380,0,100
srv-host<span class="token operator">=</span>_etcd-server._tcp.example.com,etcd3.example.com,2380,0,100
</code></pre></div><p>\u518D\u5728 <code>/etc/dnsmasq.hosts</code> \u589E\u52A0\u89E3\u6790\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">10.0</span>.0.137 etcd1.example.com
<span class="token number">10.0</span>.0.138 etcd2.example.com
<span class="token number">10.0</span>.0.139 etcd3.example.com
</code></pre></div><p>\u5728\u6BCF\u53F0\u670D\u52A1\u5668\u4E0A\u6307\u5B9A DNS \u540E\u9A8C\u8BC1\u89E3\u6790\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dig</span> +noall +answer SRV _etcd-server._tcp.example.com
</code></pre></div>`,21),v=a("\u6B64\u5904\u4EC5\u4EE5 "),_=s("code",null,"node1",-1),g=a(" \u793A\u4F8B\uFF0C\u6CE8 etcd \u65B0\u7248\u672C"),T={href:"https://github.com/etcd-io/etcd/issues/11321",target:"_blank",rel:"noopener noreferrer"},E=a("\u9700\u8981 HTTPS"),f=a("\uFF0C\u6240\u4EE5\u5207\u6362\u4E3A\u65E7\u7248\uFF1A"),I=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop etcd <span class="token operator">&amp;&amp;</span> docker <span class="token function">rm</span> etcd
<span class="token assign-left variable">ETCD_VERSION</span><span class="token operator">=</span><span class="token number">3.3</span>.15
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span>
<span class="token assign-left variable">THIS_URLS</span><span class="token operator">=</span>etcd1.example.com
docker run --name etcd -d <span class="token punctuation">\\</span>
  -p <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
  -p <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_DISCOVERY_SRV</span><span class="token operator">=</span>example.com <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span>http://0.0.0.0:2379 <span class="token punctuation">\\</span>
  --env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://<span class="token variable">\${THIS_URLS}</span>:2379 <span class="token punctuation">\\</span>
  <span class="token variable">\${REGISTRY}</span><span class="token builtin class-name">:</span><span class="token variable">\${ETCD_VERSION}</span> <span class="token punctuation">\\</span>
   etcd <span class="token punctuation">\\</span>
    --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
    --initial-advertise-peer-urls http://<span class="token variable">\${THIS_URLS}</span>:2380 --listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
   --initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>
</code></pre></div><h3 id="\u6821\u9A8C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u7ED3\u679C" aria-hidden="true">#</a> \u6821\u9A8C\u7ED3\u679C</h3><p>\u67E5\u770B\u96C6\u7FA4\u6210\u5458\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl member list

<span class="token comment"># \u5F97\u5230</span>
c45dc290bba2bf1, started, etcd-n1, http://10.0.0.137:2380, http://10.0.0.137:2379, <span class="token boolean">false</span>
26788b649bce5709, started, etcd-n2, http://10.0.0.138:2380, http://10.0.0.138:2379, <span class="token boolean">false</span>
510527ca792cc2da, started, etcd-n3, http://10.0.0.139:2380, http://10.0.0.139:2379, <span class="token boolean">false</span>
</code></pre></div><p>\u67E5\u770B\u5065\u5EB7\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl --write-out<span class="token operator">=</span>table --endpoints<span class="token operator">=</span><span class="token string">&quot;http://10.0.0.137:2379,http://10.0.0.138:2379,http://10.0.0.139:2379&quot;</span> endpoint  health

<span class="token comment"># \u5F97\u5230</span>
http://10.0.0.138:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.12227ms
http://10.0.0.139:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.674569ms
http://10.0.0.137:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">11</span>.993285ms


docker <span class="token builtin class-name">exec</span> -it etcd etcdctl --write-out<span class="token operator">=</span>table --endpoints<span class="token operator">=</span><span class="token string">&quot;http://etcd1.example.com:2379,http://etcd2.example.com:2379,http://etcd3.example.com:2379&quot;</span> endpoint  health

<span class="token comment"># \u5F97\u5230</span>
+--------------------------+--------+------------+-------+
<span class="token operator">|</span>         ENDPOINT         <span class="token operator">|</span> HEALTH <span class="token operator">|</span>    TOOK    <span class="token operator">|</span> ERROR <span class="token operator">|</span>
+--------------------------+--------+------------+-------+
<span class="token operator">|</span> http://etcd1.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token number">8</span>.615217ms <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> http://etcd3.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span>  <span class="token number">8</span>.97122ms <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> http://etcd2.example.com:2379 <span class="token operator">|</span>   <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token number">9</span>.323943ms <span class="token operator">|</span>       <span class="token operator">|</span>
+--------------------------+--------+------------+-------+
</code></pre></div><h2 id="\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E" aria-hidden="true">#</a> \u6570\u636E</h2><h3 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h3><p><code>node1</code> \u8BBE\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl put /testdir/testkey <span class="token string">&quot;Hello world&quot;</span>
</code></pre></div><p><code>node3</code> \u8BFB\u53D6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl get /testdir/testkey

<span class="token comment"># \u5F97\u5230</span>
/testdir/testkey
Hello world
</code></pre></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> WATCH</h3><p><code>node2</code> \u76D1\u542C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl <span class="token function">watch</span> hi 
</code></pre></div><p><code>node3</code> \u8BBE\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it etcd etcdctl put hi shanyuhai
</code></pre></div><p><code>node2</code> \u4F1A\u5F97\u5230\u54CD\u5E94\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>PUT
hi
shanyuhai
</code></pre></div><h2 id="\u5904\u7406\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u95EE\u9898" aria-hidden="true">#</a> \u5904\u7406\u95EE\u9898</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>docker logs etcd
</code></pre></div><table><thead><tr><th>\u65E5\u5FD7</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused</code></td><td>\u65E0\u6CD5\u5EFA\u7ACB\u4E0E\u8FD9\u4E2A IP \u7684 2380 \u7AEF\u53E3\u8FDB\u884C\u8FDE\u63A5\u3002\u68C0\u67E5 etcd \u5BB9\u5668\u662F\u5426\u5728\u90A3\u4E2A IP \u7684\u4E3B\u673A\u4E0A\u8FD0\u884C\u3002</td></tr><tr><td><code>xxx is starting a new election at term x</code></td><td>etcd \u96C6\u7FA4\u5DF2\u7ECF\u5931\u53BB\u4E86\u6CD5\u5B9A\u4EBA\u6570\uFF0C\u6B63\u5728\u5C1D\u8BD5\u5EFA\u7ACB\u65B0\u7684\u9886\u5BFC\u8005\u3002\u5F53\u5927\u591A\u6570\u8FD0\u884C etcd \u7684\u8282\u70B9\u51FA\u73B0\u6545\u969C\u6216\u65E0\u6CD5\u8BBF\u95EE\u65F6\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u3002</td></tr><tr><td><code>connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout&quot;; Reconnecting to {0.0.0.0:2379 0 &lt;nil&gt;}</code></td><td>\u4E3B\u673A\u9632\u706B\u5899\u963B\u6B62\u4E86\u7F51\u7EDC\u901A\u4FE1\u3002</td></tr><tr><td><code>rafthttp: request cluster ID mismatch</code></td><td>\u8FD0\u884C\u7740 etcd \u5B9E\u4F8B\u5E76\u8BB0\u5F55<code>rafthttp: request cluster ID mismatch</code>\u7684\u8282\u70B9\u6B63\u5728\u5C1D\u8BD5\u52A0\u5165\u53E6\u4E00\u4E2A\u7531\u5176\u4ED6\u6210\u5458\u6784\u6210\u7684\u96C6\u7FA4\u3002\u5E94\u8BE5\u4ECE\u96C6\u7FA4\u4E2D\u5220\u9664\u8FD9\u4E2A\u8282\u70B9\uFF0C\u7136\u540E\u91CD\u65B0\u6DFB\u52A0\u3002</td></tr><tr><td><code>rafthttp: failed to find member</code></td><td>\u96C6\u7FA4\u72B6\u6001 (<code>/var/lib/etcd</code>) \u5305\u542B\u9519\u8BEF\u4FE1\u606F\uFF0C\u65E0\u6CD5\u52A0\u5165\u96C6\u7FA4\u3002\u5E94\u8BE5\u4ECE\u96C6\u7FA4\u4E2D\u5220\u9664\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5E76\u5220\u9664\u72B6\u6001\u76EE\u5F55\uFF0C\u7136\u540E\u91CD\u65B0\u6DFB\u52A0\u3002</td></tr></tbody></table>`,22);function S(x,N){const e=p("OutboundLink");return l(),o(c,null,[d,s("p",null,[k,s("a",u,[h,t(e)]),b]),m,s("p",null,[v,_,g,s("a",T,[E,t(e)]),f]),I],64)}var L=r(i,[["render",S]]);export{L as default};
