import{_ as n,c as a,a as p,o as e}from"./app-DLCc4AGN.js";const l={};function t(c,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="kubernetes-部署-mysql" tabindex="-1"><a class="header-anchor" href="#kubernetes-部署-mysql"><span>Kubernetes 部署 MySQL</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>记得在 Node 节点提前准备好 <code>nfs-utils</code>，否则会抛出错误 <code>mount: wrong fs type, bad option, bad superblock</code>。</p></div><h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境"><span>准备环境</span></a></h2><h3 id="cluster" tabindex="-1"><a class="header-anchor" href="#cluster"><span>Cluster</span></a></h3><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">10.0.0.140 k8s-master</span>
<span class="line">10.0.0.141 k8s-node1</span>
<span class="line">10.0.0.142 k8s-node2</span>
<span class="line">10.0.0.143 k8s-node3</span>
<span class="line"></span></code></pre></div><h3 id="nfs" tabindex="-1"><a class="header-anchor" href="#nfs"><span>nfs</span></a></h3><p>在 master 执行：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># nfs</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind nfs-utils</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 共享目录</span></span>
<span class="line"><span class="token function">mkdir</span> /nfsdata</span>
<span class="line"><span class="token comment"># 配置 nfs \`vim /etc/exports\`</span></span>
<span class="line">/nfsdata *<span class="token punctuation">(</span>insecure,rw,sync,no_root_squash<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动服务</span></span>
<span class="line">systemctl start rpcbind</span>
<span class="line">systemctl start nfs-server</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> rpcbind</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> nfs-server</span>
<span class="line">exportfs <span class="token parameter variable">-r</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 本地检查</span></span>
<span class="line">showmount <span class="token parameter variable">-e</span></span>
<span class="line"></span></code></pre></div><p>在 node 执行：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># nfs</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils</span>
<span class="line"></span></code></pre></div><h2 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql"><span>安装 mysql</span></a></h2><p>准备目录：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> /nfsdata/mysql</span>
<span class="line"></span></code></pre></div><h3 id="_1-pv-和-pvc" tabindex="-1"><a class="header-anchor" href="#_1-pv-和-pvc"><span>1. pv 和 pvc</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># mysql-pv-pvc.yaml</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>volume</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> manual</span>
<span class="line">  <span class="token key atrule">capacity</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi</span>
<span class="line">  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> ReadWriteOnce</span>
<span class="line">  <span class="token key atrule">nfs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> 10.0.0.140</span>
<span class="line">    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/nfsdata/mysql&quot;</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>claim</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> manual</span>
<span class="line">  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> ReadWriteOnce</span>
<span class="line">  <span class="token key atrule">resources</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">requests</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi</span>
<span class="line"></span></code></pre></div><h3 id="_2-deployment" tabindex="-1"><a class="header-anchor" href="#_2-deployment"><span>2. deployment</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># mysql.yaml</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql</span>
<span class="line">  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None </span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql</span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql</span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.6</span></span>
<span class="line">        <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ROOT_PASSWORD</span>
<span class="line">          <span class="token key atrule">value</span><span class="token punctuation">:</span> password</span>
<span class="line">        <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3306</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql</span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>persistent<span class="token punctuation">-</span>storage</span>
<span class="line">          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/mysql</span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>persistent<span class="token punctuation">-</span>storage</span>
<span class="line">        <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">claimName</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>claim</span>
<span class="line"></span></code></pre></div><h2 id="执行测试" tabindex="-1"><a class="header-anchor" href="#执行测试"><span>执行测试</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl apply <span class="token parameter variable">-f</span> mysql-pv-pvc.yaml</span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> mysql.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检验</span></span>
<span class="line">kubectl get pod <span class="token parameter variable">-o</span> wide</span>
<span class="line">NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE        NOMINATED NODE   READINESS GATES</span>
<span class="line">mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          32m   <span class="token number">10.244</span>.1.8   k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_1-更新数据库" tabindex="-1"><a class="header-anchor" href="#_1-更新数据库"><span>1. 更新数据库</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--image</span><span class="token operator">=</span>mysql:5.6 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never mysql-client -- mysql <span class="token parameter variable">-h</span> mysql <span class="token parameter variable">-ppassword</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入数据库后</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看数据库列表</span></span>
<span class="line">show databases<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 创建 itcource 数据库</span></span>
<span class="line">create database itcource<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 使用 itcource</span></span>
<span class="line">use itcource<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 创建 user 表</span></span>
<span class="line">create table user<span class="token punctuation">(</span>id int<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">))</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 插入用户</span></span>
<span class="line">insert user values<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 查询</span></span>
<span class="line"><span class="token keyword">select</span> * from user<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-销毁-node" tabindex="-1"><a class="header-anchor" href="#_2-销毁-node"><span>2. 销毁 node</span></a></h3><p>根据上面得到 MySQL 运行在 k8s-node1 的节点上，对该节点模拟宕机。</p><p>一段时间后，Kubernetes 将 MySQL 迁移到 k8s-node3 的节点上：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">NAME                     READY   STATUS        RESTARTS   AGE   IP            NODE        NOMINATED NODE   READINESS GATES</span>
<span class="line">mysql-5456cbb767-kh29k   <span class="token number">1</span>/1     Running       <span class="token number">0</span>          27s   <span class="token number">10.244</span>.3.13   k8s-node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span></span>
<span class="line">mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          42m   <span class="token number">10.244</span>.1.8    k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-验证数据一致性" tabindex="-1"><a class="header-anchor" href="#_3-验证数据一致性"><span>3. 验证数据一致性</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--image</span><span class="token operator">=</span>mysql:5.6 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never mysql-client -- mysql <span class="token parameter variable">-h</span> mysql <span class="token parameter variable">-ppassword</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入数据库后</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询数据</span></span>
<span class="line">show databases<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">select</span> * from itcource.user<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 结果</span></span>
<span class="line">+------+</span>
<span class="line"><span class="token operator">|</span> <span class="token function">id</span>   <span class="token operator">|</span></span>
<span class="line">+------+</span>
<span class="line"><span class="token operator">|</span>  <span class="token number">100</span> <span class="token operator">|</span></span>
<span class="line">+------+</span>
<span class="line"></span></code></pre></div>`,27)])])}const i=n(l,[["render",t]]),r=JSON.parse('{"path":"/os/kubernetes/deploy-mysql-with-nfs.html","title":"Kubernetes 部署 MySQL","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"准备环境","slug":"准备环境","link":"#准备环境","children":[{"level":3,"title":"Cluster","slug":"cluster","link":"#cluster","children":[]},{"level":3,"title":"nfs","slug":"nfs","link":"#nfs","children":[]}]},{"level":2,"title":"安装 mysql","slug":"安装-mysql","link":"#安装-mysql","children":[{"level":3,"title":"1. pv 和 pvc","slug":"_1-pv-和-pvc","link":"#_1-pv-和-pvc","children":[]},{"level":3,"title":"2. deployment","slug":"_2-deployment","link":"#_2-deployment","children":[]}]},{"level":2,"title":"执行测试","slug":"执行测试","link":"#执行测试","children":[{"level":3,"title":"1. 更新数据库","slug":"_1-更新数据库","link":"#_1-更新数据库","children":[]},{"level":3,"title":"2. 销毁 node","slug":"_2-销毁-node","link":"#_2-销毁-node","children":[]},{"level":3,"title":"3. 验证数据一致性","slug":"_3-验证数据一致性","link":"#_3-验证数据一致性","children":[]}]}],"git":{"updatedTime":1637400002000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/kubernetes/deploy-mysql-with-nfs.md"}');export{i as comp,r as data};
