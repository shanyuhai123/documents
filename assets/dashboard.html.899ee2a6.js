import{d as a}from"./app.221f0787.js";const n={},s=a('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>Kubernetes 默认没有部署 Dashboard，不过安装也很简单：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml\n</code></pre></div><p>为了方便访问将 type 设置为 <code>NodePort</code>：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl edit <span class="token function">service</span> --namespace<span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard\n\n<span class="token comment"># 修改</span>\nspec:\n  clusterIP: <span class="token number">10.97</span>.38.169\n  externalTrafficPolicy: Cluster\n  ports:\n  - nodePort: <span class="token number">32576</span>\n    port: <span class="token number">443</span>\n    protocol: TCP\n    targetPort: <span class="token number">8443</span>\n  selector:\n    k8s-app: kubernetes-dashboard\n  sessionAffinity: None\n  type: NodePort\n</code></pre></div><p>接着就可以查看暴露出的 Port：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl get <span class="token function">service</span> --namespace<span class="token operator">=</span>kubernetes-dashboard kubernetes-dashboard\n\n<span class="token comment"># 结果</span>\nNAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE\nkubernetes-dashboard   NodePort   <span class="token number">10.97</span>.38.169   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32576/TCP   10h\n</code></pre></div><p>访问该主机和暴露出的 32576 即可。</p><blockquote><p>注意：Chrome 访问被拒绝，可使用 Firefox。</p></blockquote><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><p>创建一个 admin 用户：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># dashboard-adminuser.yaml</span>\n<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1\n<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount\n<span class="token key atrule">metadata</span><span class="token punctuation">:</span>\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user\n  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard\n\n<span class="token punctuation">---</span>\n<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1\n<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding\n<span class="token key atrule">metadata</span><span class="token punctuation">:</span>\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user\n<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>\n  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io\n  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin\n<span class="token key atrule">subjects</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user\n  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard\n</code></pre></div><p>获取 token：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>kubectl -n kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl -n kubernetes-dashboard get sa/admin-user -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> -o go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span>\n</code></pre></div><p>接着就可以登录了。</p>',15);n.render=function(a,n){return s};export default n;
