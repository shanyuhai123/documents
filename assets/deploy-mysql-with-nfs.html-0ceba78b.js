import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="kubernetes-部署-mysql" tabindex="-1"><a class="header-anchor" href="#kubernetes-部署-mysql" aria-hidden="true">#</a> Kubernetes 部署 MySQL</h1><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>记得在 Node 节点提前准备好 <code>nfs-utils</code>，否则会抛出错误 <code>mount: wrong fs type, bad option, bad superblock</code>。</p></div><h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2><h3 id="cluster" tabindex="-1"><a class="header-anchor" href="#cluster" aria-hidden="true">#</a> Cluster</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
</code></pre></div><h3 id="nfs" tabindex="-1"><a class="header-anchor" href="#nfs" aria-hidden="true">#</a> nfs</h3><p>在 master 执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nfs</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind nfs-utils

<span class="token comment"># 共享目录</span>
<span class="token function">mkdir</span> /nfsdata
<span class="token comment"># 配置 nfs \`vim /etc/exports\`</span>
/nfsdata *<span class="token punctuation">(</span>insecure,rw,sync,no_root_squash<span class="token punctuation">)</span>

<span class="token comment"># 启动服务</span>
systemctl start rpcbind
systemctl start nfs-server
systemctl <span class="token builtin class-name">enable</span> rpcbind
systemctl <span class="token builtin class-name">enable</span> nfs-server
exportfs <span class="token parameter variable">-r</span>

<span class="token comment"># 本地检查</span>
showmount <span class="token parameter variable">-e</span>
</code></pre></div><p>在 node 执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nfs</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils
</code></pre></div><h2 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql" aria-hidden="true">#</a> 安装 mysql</h2><p>准备目录：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /nfsdata/mysql
</code></pre></div><h3 id="_1-pv-和-pvc" tabindex="-1"><a class="header-anchor" href="#_1-pv-和-pvc" aria-hidden="true">#</a> 1. pv 和 pvc</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># mysql-pv-pvc.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>volume
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> manual
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 10.0.0.140
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/nfsdata/mysql&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>claim
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> manual
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
</code></pre></div><h3 id="_2-deployment" tabindex="-1"><a class="header-anchor" href="#_2-deployment" aria-hidden="true">#</a> 2. deployment</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># mysql.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None 
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.6</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ROOT_PASSWORD
          <span class="token key atrule">value</span><span class="token punctuation">:</span> password
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>persistent<span class="token punctuation">-</span>storage
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/mysql
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>persistent<span class="token punctuation">-</span>storage
        <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
          <span class="token key atrule">claimName</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>claim
</code></pre></div><h2 id="执行测试" tabindex="-1"><a class="header-anchor" href="#执行测试" aria-hidden="true">#</a> 执行测试</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> mysql-pv-pvc.yaml
kubectl apply <span class="token parameter variable">-f</span> mysql.yaml

<span class="token comment"># 检验</span>
kubectl get pod <span class="token parameter variable">-o</span> wide
NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          32m   <span class="token number">10.244</span>.1.8   k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_1-更新数据库" tabindex="-1"><a class="header-anchor" href="#_1-更新数据库" aria-hidden="true">#</a> 1. 更新数据库</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--image</span><span class="token operator">=</span>mysql:5.6 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never mysql-client -- mysql <span class="token parameter variable">-h</span> mysql <span class="token parameter variable">-ppassword</span>

<span class="token comment"># 进入数据库后</span>

<span class="token comment"># 查看数据库列表</span>
show databases<span class="token punctuation">;</span>
<span class="token comment"># 创建 itcource 数据库</span>
create database itcource<span class="token punctuation">;</span>
<span class="token comment"># 使用 itcource</span>
use itcource<span class="token punctuation">;</span>
<span class="token comment"># 创建 user 表</span>
create table user<span class="token punctuation">(</span>id int<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
<span class="token comment"># 插入用户</span>
insert user values<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 查询</span>
<span class="token keyword">select</span> * from user<span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-销毁-node" tabindex="-1"><a class="header-anchor" href="#_2-销毁-node" aria-hidden="true">#</a> 2. 销毁 node</h3><p>根据上面得到 MySQL 运行在 k8s-node1 的节点上，对该节点模拟宕机。</p><p>一段时间后，Kubernetes 将 MySQL 迁移到 k8s-node3 的节点上：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>NAME                     READY   STATUS        RESTARTS   AGE   IP            NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kh29k   <span class="token number">1</span>/1     Running       <span class="token number">0</span>          27s   <span class="token number">10.244</span>.3.13   k8s-node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          42m   <span class="token number">10.244</span>.1.8    k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_3-验证数据一致性" tabindex="-1"><a class="header-anchor" href="#_3-验证数据一致性" aria-hidden="true">#</a> 3. 验证数据一致性</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--image</span><span class="token operator">=</span>mysql:5.6 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never mysql-client -- mysql <span class="token parameter variable">-h</span> mysql <span class="token parameter variable">-ppassword</span>

<span class="token comment"># 进入数据库后</span>

<span class="token comment"># 查询数据</span>
show databases<span class="token punctuation">;</span>
<span class="token keyword">select</span> * from itcource.user<span class="token punctuation">;</span>
<span class="token comment"># 结果</span>
+------+
<span class="token operator">|</span> <span class="token function">id</span>   <span class="token operator">|</span>
+------+
<span class="token operator">|</span>  <span class="token number">100</span> <span class="token operator">|</span>
+------+
</code></pre></div>`,27),o=[p];function c(l,u){return n(),s("div",null,o)}const k=a(t,[["render",c],["__file","deploy-mysql-with-nfs.html.vue"]]);export{k as default};
