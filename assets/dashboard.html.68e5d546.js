import{e as a}from"./app.bd2c6a6e.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=a(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>Kubernetes \u9ED8\u8BA4\u6CA1\u6709\u90E8\u7F72 Dashboard\uFF0C\u4E0D\u8FC7\u5B89\u88C5\u4E5F\u5F88\u7B80\u5355\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
</code></pre></div><p>\u4E3A\u4E86\u65B9\u4FBF\u8BBF\u95EE\u5C06 type \u8BBE\u7F6E\u4E3A <code>NodePort</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl edit <span class="token function">service</span> --namespace<span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard

<span class="token comment"># \u4FEE\u6539</span>
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
</code></pre></div><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u67E5\u770B\u66B4\u9732\u51FA\u7684 Port\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl get <span class="token function">service</span> --namespace<span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard

<span class="token comment"># \u7ED3\u679C</span>
NAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE
kubernetes-dashboard   NodePort   <span class="token number">10.97</span>.38.169   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32576/TCP   10h
</code></pre></div><p>\u8BBF\u95EE\u8BE5\u4E3B\u673A\u548C\u66B4\u9732\u51FA\u7684 32576 \u5373\u53EF\u3002</p><blockquote><p>\u6CE8\u610F\uFF1AChrome \u8BBF\u95EE\u88AB\u62D2\u7EDD\uFF0C\u53EF\u4F7F\u7528 Firefox\u3002</p></blockquote><h2 id="\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650" aria-hidden="true">#</a> \u6743\u9650</h2><p>\u521B\u5EFA\u4E00\u4E2A admin \u7528\u6237\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># dashboard-adminuser.yaml</span>
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
</code></pre></div><p>\u83B7\u53D6 token\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl -n kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl -n kubernetes-dashboard get sa/admin-user -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> -o go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span>
</code></pre></div><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u767B\u5F55\u4E86\u3002</p>`,15);function t(p,o){return e}var l=n(s,[["render",t]]);export{l as default};
