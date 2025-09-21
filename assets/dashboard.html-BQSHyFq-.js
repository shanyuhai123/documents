import{_ as s,c as n,a as e,o as p}from"./app-CQrWi6O2.js";const t={};function l(o,a){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#kubernetes-dashboard"><span>Kubernetes Dashboard</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>Kubernetes 默认没有部署 Dashboard，不过安装也很简单：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml</span>
<span class="line"></span></code></pre></div><p>为了方便访问将 type 设置为 <code>NodePort</code>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl edit <span class="token function">service</span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改</span></span>
<span class="line">spec:</span>
<span class="line">  clusterIP: <span class="token number">10.97</span>.38.169</span>
<span class="line">  externalTrafficPolicy: Cluster</span>
<span class="line">  ports:</span>
<span class="line">  - nodePort: <span class="token number">32576</span></span>
<span class="line">    port: <span class="token number">443</span></span>
<span class="line">    protocol: TCP</span>
<span class="line">    targetPort: <span class="token number">8443</span></span>
<span class="line">  selector:</span>
<span class="line">    k8s-app: kubernetes-dashboard</span>
<span class="line">  sessionAffinity: None</span>
<span class="line">  type: NodePort</span>
<span class="line"></span></code></pre></div><p>接着就可以查看暴露出的 Port：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl get <span class="token function">service</span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 结果</span></span>
<span class="line">NAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE</span>
<span class="line">kubernetes-dashboard   NodePort   <span class="token number">10.97</span>.38.169   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32576/TCP   10h</span>
<span class="line"></span></code></pre></div><p>访问该主机和暴露出的 32576 即可。</p><blockquote><p>注意：Chrome 访问被拒绝，可使用 Firefox。</p></blockquote><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2><p>创建一个 admin 用户：</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># dashboard-adminuser.yaml</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user</span>
<span class="line"><span class="token key atrule">roleRef</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io</span>
<span class="line">  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin</span>
<span class="line"><span class="token key atrule">subjects</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard</span>
<span class="line"></span></code></pre></div><p>获取 token：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get sa/admin-user <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> <span class="token parameter variable">-o</span> go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span></span>
<span class="line"></span></code></pre></div><p>接着就可以登录了。</p>`,16)])])}const r=s(t,[["render",l]]),i=JSON.parse('{"path":"/os/kubernetes/dashboard.html","title":"Kubernetes Dashboard","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]}],"git":{"updatedTime":1637400002000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/kubernetes/dashboard.md"}');export{r as comp,i as data};
