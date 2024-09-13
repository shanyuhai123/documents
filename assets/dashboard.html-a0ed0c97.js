import{_ as n,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function o(c,a){return s(),e("div",null,a[0]||(a[0]=[t(`<h1 id="kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#kubernetes-dashboard" aria-hidden="true">#</a> Kubernetes Dashboard</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>Kubernetes 默认没有部署 Dashboard，不过安装也很简单：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
</code></pre></div><p>为了方便访问将 type 设置为 <code>NodePort</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl edit <span class="token function">service</span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard

<span class="token comment"># 修改</span>
spec:
  clusterIP: <span class="token number">10.97</span>.38.169
  externalTrafficPolicy: Cluster
  ports:
  - nodePort: <span class="token number">32576</span>
    port: <span class="token number">443</span>
    protocol: TCP
    targetPort: <span class="token number">8443</span>
  selector:
    k8s-app: kubernetes-dashboard
  sessionAffinity: None
  type: NodePort
</code></pre></div><p>接着就可以查看暴露出的 Port：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl get <span class="token function">service</span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard

<span class="token comment"># 结果</span>
NAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE
kubernetes-dashboard   NodePort   <span class="token number">10.97</span>.38.169   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32576/TCP   10h
</code></pre></div><p>访问该主机和暴露出的 32576 即可。</p><blockquote><p>注意：Chrome 访问被拒绝，可使用 Firefox。</p></blockquote><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><p>创建一个 admin 用户：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># dashboard-adminuser.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
</code></pre></div><p>获取 token：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get sa/admin-user <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> <span class="token parameter variable">-o</span> go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span>
</code></pre></div><p>接着就可以登录了。</p>`,16)]))}const l=n(p,[["render",o],["__file","dashboard.html.vue"]]);export{l as default};
