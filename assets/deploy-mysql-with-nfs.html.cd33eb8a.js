import{e as n}from"./app.95b45dea.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="kubernetes-\u90E8\u7F72-mysql" tabindex="-1"><a class="header-anchor" href="#kubernetes-\u90E8\u7F72-mysql" aria-hidden="true">#</a> Kubernetes \u90E8\u7F72 MySQL</h1><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8BB0\u5F97\u5728 Node \u8282\u70B9\u63D0\u524D\u51C6\u5907\u597D <code>nfs-utils</code>\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u9519\u8BEF <code>mount: wrong fs type, bad option, bad superblock</code>\u3002</p></div><h2 id="\u51C6\u5907\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u73AF\u5883" aria-hidden="true">#</a> \u51C6\u5907\u73AF\u5883</h2><h3 id="cluster" tabindex="-1"><a class="header-anchor" href="#cluster" aria-hidden="true">#</a> Cluster</h3><div class="language-text ext-text"><pre class="language-text"><code>10.0.0.140 k8s-master
10.0.0.141 k8s-node1
10.0.0.142 k8s-node2
10.0.0.143 k8s-node3
</code></pre></div><h3 id="nfs" tabindex="-1"><a class="header-anchor" href="#nfs" aria-hidden="true">#</a> nfs</h3><p>\u5728 master \u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># nfs</span>
yum <span class="token function">install</span> -y rpcbind nfs-utils

<span class="token comment"># \u5171\u4EAB\u76EE\u5F55</span>
<span class="token function">mkdir</span> /nfsdata
<span class="token comment"># \u914D\u7F6E nfs \`vim /etc/exports\`</span>
/nfsdata *<span class="token punctuation">(</span>insecure,rw,sync,no_root_squash<span class="token punctuation">)</span>

<span class="token comment"># \u542F\u52A8\u670D\u52A1</span>
systemctl start rpcbind
systemctl start nfs-server
systemctl <span class="token builtin class-name">enable</span> rpcbind
systemctl <span class="token builtin class-name">enable</span> nfs-server
exportfs -r

<span class="token comment"># \u672C\u5730\u68C0\u67E5</span>
showmount -e
</code></pre></div><p>\u5728 node \u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># nfs</span>
yum <span class="token function">install</span> -y nfs-utils
</code></pre></div><h2 id="\u5B89\u88C5-mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mysql" aria-hidden="true">#</a> \u5B89\u88C5 mysql</h2><p>\u51C6\u5907\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /nfsdata/mysql
</code></pre></div><h3 id="_1-pv-\u548C-pvc" tabindex="-1"><a class="header-anchor" href="#_1-pv-\u548C-pvc" aria-hidden="true">#</a> 1. pv \u548C pvc</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># mysql-pv-pvc.yaml</span>
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
</code></pre></div><h3 id="_2-deployment" tabindex="-1"><a class="header-anchor" href="#_2-deployment" aria-hidden="true">#</a> 2. deployment</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># mysql.yaml</span>
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
</code></pre></div><h2 id="\u6267\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u6267\u884C\u6D4B\u8BD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl apply -f mysql-pv-pvc.yaml
kubectl apply -f mysql.yaml

<span class="token comment"># \u68C0\u9A8C</span>
kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          32m   <span class="token number">10.244</span>.1.8   k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_1-\u66F4\u65B0\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u66F4\u65B0\u6570\u636E\u5E93" aria-hidden="true">#</a> 1. \u66F4\u65B0\u6570\u636E\u5E93</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl run -it --rm --image<span class="token operator">=</span>mysql:5.6 --restart<span class="token operator">=</span>Never mysql-client -- mysql -h mysql -ppassword

<span class="token comment"># \u8FDB\u5165\u6570\u636E\u5E93\u540E</span>

<span class="token comment"># \u67E5\u770B\u6570\u636E\u5E93\u5217\u8868</span>
show databases<span class="token punctuation">;</span>
<span class="token comment"># \u521B\u5EFA itcource \u6570\u636E\u5E93</span>
create database itcource<span class="token punctuation">;</span>
<span class="token comment"># \u4F7F\u7528 itcource</span>
use itcource<span class="token punctuation">;</span>
<span class="token comment"># \u521B\u5EFA user \u8868</span>
create table user<span class="token punctuation">(</span>id int<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
<span class="token comment"># \u63D2\u5165\u7528\u6237</span>
insert user values<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># \u67E5\u8BE2</span>
<span class="token keyword">select</span> * from user<span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-\u9500\u6BC1-node" tabindex="-1"><a class="header-anchor" href="#_2-\u9500\u6BC1-node" aria-hidden="true">#</a> 2. \u9500\u6BC1 node</h3><p>\u6839\u636E\u4E0A\u9762\u5F97\u5230 MySQL \u8FD0\u884C\u5728 k8s-node1 \u7684\u8282\u70B9\u4E0A\uFF0C\u5BF9\u8BE5\u8282\u70B9\u6A21\u62DF\u5B95\u673A\u3002</p><p>\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0CKubernetes \u5C06 MySQL \u8FC1\u79FB\u5230 k8s-node3 \u7684\u8282\u70B9\u4E0A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>NAME                     READY   STATUS        RESTARTS   AGE   IP            NODE        NOMINATED NODE   READINESS GATES
mysql-5456cbb767-kh29k   <span class="token number">1</span>/1     Running       <span class="token number">0</span>          27s   <span class="token number">10.244</span>.3.13   k8s-node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
mysql-5456cbb767-kpf4z   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          42m   <span class="token number">10.244</span>.1.8    k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_3-\u9A8C\u8BC1\u6570\u636E\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u9A8C\u8BC1\u6570\u636E\u4E00\u81F4\u6027" aria-hidden="true">#</a> 3. \u9A8C\u8BC1\u6570\u636E\u4E00\u81F4\u6027</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl run -it --rm --image<span class="token operator">=</span>mysql:5.6 --restart<span class="token operator">=</span>Never mysql-client -- mysql -h mysql -ppassword

<span class="token comment"># \u8FDB\u5165\u6570\u636E\u5E93\u540E</span>

<span class="token comment"># \u67E5\u8BE2\u6570\u636E</span>
show databases<span class="token punctuation">;</span>
<span class="token keyword">select</span> * from itcource.user<span class="token punctuation">;</span>
<span class="token comment"># \u7ED3\u679C</span>
+------+
<span class="token operator">|</span> <span class="token function">id</span>   <span class="token operator">|</span>
+------+
<span class="token operator">|</span>  <span class="token number">100</span> <span class="token operator">|</span>
+------+
</code></pre></div>`,27);function t(p,o){return e}var u=s(a,[["render",t]]);export{u as default};
