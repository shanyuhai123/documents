import{r as t,c,a,b as s,F as r,e as o,d as e,o as p}from"./app.89b3b21c.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const i={},l=o(`<h1 id="\u4F7F\u7528-harbor-\u6784\u5EFA\u79C1\u6709\u955C\u50CF\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-harbor-\u6784\u5EFA\u79C1\u6709\u955C\u50CF\u4ED3\u5E93" aria-hidden="true">#</a> \u4F7F\u7528 Harbor \u6784\u5EFA\u79C1\u6709\u955C\u50CF\u4ED3\u5E93</h1><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p>\u521B\u5EFA\u4E00\u53F0\u865A\u62DF\u673A\u4E3A\u79C1\u6709\u4ED3\u5E93\uFF0C\u672C\u673A\u5411\u865A\u62DF\u673A\u7684\u4ED3\u5E93\u53D1\u8D77\u4E0A\u4F20\u548C\u4E0B\u8F7D\u3002</p><h2 id="\u642D\u5EFA\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u4ED3\u5E93" aria-hidden="true">#</a> \u642D\u5EFA\u4ED3\u5E93</h2><p>\u5728\u865A\u62DF\u673A\u4E0A\u521B\u5EFA\u4ED3\u5E93\uFF0C\u5E76\u6307\u5B9A\u955C\u50CF\u6587\u4EF6\u5B58\u653E\u5728\u672C\u5730\u7684\u9ED8\u8BA4\u8DEF\u5F84\uFF0C\u4E3A\u5176\u8BBE\u7F6E docker \u91CD\u542F\u540E\u8DDF\u968F\u91CD\u542F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d --restart<span class="token operator">=</span>always --name registry -p <span class="token number">5000</span>:5000 -v /opt/data/registry:/var/lib/registry registry
</code></pre></div><p>\u540E\u7EED\u7684 <code>registry</code> \u914D\u7F6E\u53EF\u89C1 <code>/etc/docker/registry/config.yml</code>\u3002</p><h2 id="\u4E3B\u673A\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u673A\u6D4B\u8BD5" aria-hidden="true">#</a> \u4E3B\u673A\u6D4B\u8BD5</h2><p>Docker \u65B0\u7684\u7248\u672C\u5BF9\u5B89\u5168\u6027\u8981\u6C42\u8F83\u9AD8\uFF0C\u8981\u6C42\u4ED3\u5E93\u652F\u6301 SSL/TLS \u8BC1\u4E66\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u4FE1\u4EFB\u8BE5\u4ED3\u5E93\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># \u5728 JSON \u4E2D\u8FFD\u52A0\u5185\u5BB9\uFF0C\u5BF9\u5E94\u7684 IP \u5730\u5740</span>
<span class="token punctuation">{</span><span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;192.168.0.107:5000&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

<span class="token comment"># \u91CD\u542F\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart docker
</code></pre></div><p>\u4E3B\u673A\u4E0A\u4F20\u955C\u50CF\u5230\u865A\u62DF\u673A\u4ED3\u5E93\u9A8C\u8BC1\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker pull ubuntu
<span class="token comment"># \u6253 tag</span>
docker tag ubuntu <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># push</span>
docker push <span class="token number">192.168</span>.0.107:5000/tubuntu

<span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">curl</span> http://192.168.0.107:5000/v2/_catalog
<span class="token comment"># {&quot;repositories&quot;:[&quot;tubuntu&quot;]} # \u6210\u529F</span>
<span class="token comment"># \u8FD8\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u4E0A\u9762\u94FE\u63A5\u8FDB\u884C\u67E5\u770B</span>
<span class="token comment"># \u6216\u8005\u5728\u865A\u62DF\u673A\u4E0A\u67E5\u770B ll /opt/data/registry/docker/registry/v2/repositories</span>
</code></pre></div><p>\u4E0B\u8F7D\u9A8C\u8BC1\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9996\u5148\u5220\u9664\u672C\u5730\u7684\u955C\u50CF</span>
docker rmi <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># \u9A8C\u8BC1</span>
docker images

<span class="token comment"># \u62C9\u53D6</span>
docker pull <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># \u9A8C\u8BC1</span>
docker images
</code></pre></div><h2 id="harbor" tabindex="-1"><a class="header-anchor" href="#harbor" aria-hidden="true">#</a> Harbor</h2>`,15),h=e("\u53E6\u5916\u4E00\u4E2A\u9009\u62E9\u662F\u4F7F\u7528 "),u={href:"https://github.com/goharbor/harbor",target:"_blank",rel:"noopener noreferrer"},g=e("Harbor"),b=e("\u3002"),k=o(`<h3 id="_1-\u83B7\u53D6-harbor" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6-harbor" aria-hidden="true">#</a> 1. \u83B7\u53D6 Harbor</h3><p>\u5148\u4E0B\u8F7D\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u76EE\u6807\u538B\u7F29\u5305</span>
<span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz

<span class="token comment"># gpg</span>
<span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz.asc
</code></pre></div><p>\u83B7\u53D6\u6587\u4EF6\u540E\u5148\u6821\u9A8C\u6709\u6CA1\u6709\u95EE\u9898\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6821\u9A8C</span>
gpg --verify harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
<span class="token comment"># gpg: using RSA key 7722D168DAEC457806C96FF9644FF454C0B4115C</span>
<span class="token comment"># gpg: Can&#39;t check signature: No public key</span>

<span class="token comment"># \u5BFC\u5165\u516C\u94A5</span>
gpg --keyserver hkps://keyserver.ubuntu.com --receive-keys 7722D168DAEC457806C96FF9644FF454C0B4115C

<span class="token comment"># \u518D\u6B21\u6821\u9A8C</span>
gpg --verify harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
</code></pre></div><h3 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h3><p>\u5148\u8FDB\u884C\u89E3\u538B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">tar</span> xvf harbor-offline-installer-v2.0.5.tgz
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cp</span> harbor.yml.tmpl harbor.yml

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E</span>
<span class="token function">vim</span> harbor.yml
</code></pre></div><p>\u5176\u4E2D <code>data_volume</code> \u6302\u8F7D\u6570\u636E\u3002</p><p>\u5728\u5B89\u88C5\u524D\u9700\u8981\u786E\u8BA4\u5DF2\u7ECF\u51C6\u5907\u597D <code>docker</code> \u53CA <code>docker-compose</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">bash</span> install.sh
</code></pre></div><h3 id="_3-\u91CD\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u88C5" aria-hidden="true">#</a> 3. \u91CD\u88C5</h3><p>\u5F53\u4FEE\u6539\u914D\u7F6E\u540E\u8FD0\u884C <code>bash prepare</code> \u5373\u53EF\u3002</p><h3 id="_4-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_4-\u7528\u6237" aria-hidden="true">#</a> 4. \u7528\u6237</h3><p>Harbor \u4F7F\u7528\u524D\u9700\u8981\u6CE8\u518C\u5E10\u53F7\uFF0C\u63A8\u9001\u955C\u50CF\u524D\u9700\u8981\u5148\u521B\u5EFA\u9879\u76EE\uFF0C\u9080\u8BF7\u6210\u5458\u624D\u884C\u3002</p><h2 id="\u81EA\u7B7E\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u81EA\u7B7E\u8BC1\u4E66" aria-hidden="true">#</a> \u81EA\u7B7E\u8BC1\u4E66</h2><p>Harbor \u5728\u975E <code>https</code> \u7684\u73AF\u5883\u4E0B\u603B\u662F\u4F1A\u51FA\u73B0\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\uFF0C\u800C\u5185\u7F51\u4F7F\u7528\u65F6\u9700\u8981\u81EA\u7B7E\u8BC1\u4E66\u89E3\u51B3 <code>https</code> \u95EE\u9898\u3002</p>`,19),m=e("Harbor \u5B98\u7F51\u5BF9\u8FD9\u4E00\u90E8\u5206\u6709\u8BE6\u7EC6\u7684"),x={href:"https://goharbor.io/docs/2.1.0/install-config/configure-https/",target:"_blank",rel:"noopener noreferrer"},_=e("\u8BF4\u660E"),f=e("\uFF0C\u6B64\u5904\u7A0D\u5FAE\u7B80\u5316\u3002"),v=o(`<h3 id="_1-\u751F\u6210-ca-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_1-\u751F\u6210-ca-\u8BC1\u4E66" aria-hidden="true">#</a> 1. \u751F\u6210 CA \u8BC1\u4E66</h3><p>\u5148\u751F\u6210 <code>ca</code> \u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl genrsa -out ca.key <span class="token number">4096</span>
</code></pre></div><p>\u518D\u751F\u6210 <code>ca</code> \u8BC1\u4E66\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl req -x509 -new -nodes -sha512 -days <span class="token number">3650</span> <span class="token punctuation">\\</span>
 -subj <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span>
 -key ca.key <span class="token punctuation">\\</span>
 -out ca.crt
</code></pre></div><h3 id="_2-\u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-\u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66" aria-hidden="true">#</a> 2. \u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66</h3><p>\u670D\u52A1\u7AEF\u8BC1\u4E66\u5305\u542B <code>.crt</code> \u53CA <code>.key</code> \u6587\u4EF6\u3002</p><p>\u5148\u751F\u6210\u57DF\u540D\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl genrsa -out harbor.xxx.com.key <span class="token number">4096</span>
</code></pre></div><p>\u518D\u751F\u6210\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF08Certificate Signing Request\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl req -sha512 -new <span class="token punctuation">\\</span>
    -subj <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span>
    -key harbor.xxx.com.key <span class="token punctuation">\\</span>
    -out harbor.xxx.com.csr
</code></pre></div><p>\u518D\u751F\u6210 <code>x509 v3</code> \u6269\u5C55\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=harbor.xxx.com
DNS.2=xxx
DNS.3=hostname
EOF</span>
</code></pre></div><p>\u6839\u636E <code>v3.ext</code> \u751F\u6210\u8BC1\u4E66\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl x509 -req -sha512 -days <span class="token number">3650</span> <span class="token punctuation">\\</span>
    -extfile v3.ext <span class="token punctuation">\\</span>
    -CA ca.crt -CAkey ca.key -CAcreateserial <span class="token punctuation">\\</span>
    -in harbor.xxx.com.csr <span class="token punctuation">\\</span>
    -out harbor.xxx.com.crt
</code></pre></div><p>\u5C06 <code>crt</code> \u8F6C\u4E3A <code>cert</code>\uFF0C\u4EE5\u4F9B Docker client \u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>openssl x509 -inform PEM -in harbor.xxx.com.crt -out harbor.xxx.com.cert
</code></pre></div><h3 id="_3-docker-\u5BA2\u6237\u7AEF\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-docker-\u5BA2\u6237\u7AEF\u4F7F\u7528" aria-hidden="true">#</a> 3. Docker \u5BA2\u6237\u7AEF\u4F7F\u7528</h3><p>\u9700\u8981\u5C06\u8BC1\u4E66\u62F7\u8D1D\u81F3 <code>docker</code> \u914D\u7F6E\u5373<code>/etc/docker/certs.d/harbor.xxx.com/</code> \u76EE\u5F55\u4E0B\uFF0C\u589E\u52A0 <code>ca.crt</code> \u3001<code>harbor.xxx.com.cert</code> \u3001<code>harbor.xxx.com.key</code> \u4E09\u4E2A\u6587\u4EF6\uFF0C\u6700\u540E\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/etc/docker/certs.d/
    \u2514\u2500\u2500 harbor.xxx.com
       \u251C\u2500\u2500 harbor.xxx.com.cert
       \u251C\u2500\u2500 harbor.xxx.com.key
       \u2514\u2500\u2500 ca.crt
</code></pre></div><p>\u914D\u7F6E\u5B8C\u6210\u540E\u8FD8\u9700\u91CD\u542F Docker\u3002</p><h3 id="_4-\u6D4F\u89C8\u5668\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u6D4F\u89C8\u5668\u4F7F\u7528" aria-hidden="true">#</a> 4. \u6D4F\u89C8\u5668\u4F7F\u7528</h3><p>Manjaro \u4E0B\u627E\u5230 SSL \u8BBE\u7F6E\uFF0C\u6DFB\u52A0 <code>harbor.xxx.com.crt</code> \u8BC1\u4E66\u5373\u53EF\u3002</p><h3 id="_5-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_5-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 5. \u6CE8\u610F\u4E8B\u9879</h3>`,24),y=e("\u5728\u4F7F\u7528 Nginx \u53CD\u5411\u4EE3\u7406 "),C=a("code",null,"push",-1),q=e(" \u5B58\u5728"),N={href:"https://github.com/goharbor/harbor/issues/13553",target:"_blank",rel:"noopener noreferrer"},S=e("\u95EE\u9898"),F=e("\u3002\u6839\u636E "),j=a("code",null,"common/config/nginx/nginx.conf",-1),A=e(" \u4E2D\u7684\u63D0\u793A\u6CE8\u91CA\uFF0C\u9700\u6CE8\u610F\u4E0D\u6B62\u4E00\u5904\uFF1A"),D=a("div",{class:"language-nginx ext-nginx"},[a("pre",{class:"language-nginx"},[a("code",null,[a("span",{class:"token comment"},"# When setting up Harbor behind other proxy, such as an Nginx instance, remove the below line if the proxy already has similar settings."),e(`
`),a("span",{class:"token comment"},"#proxy_set_header X-Forwarded-Proto $scheme;"),e(`
`)])])],-1);function w(B,E){const n=t("OutboundLink");return p(),c(r,null,[l,a("p",null,[h,a("a",u,[g,s(n)]),b]),k,a("p",null,[m,a("a",x,[_,s(n)]),f]),v,a("p",null,[y,C,q,a("a",N,[S,s(n)]),F,j,A]),D],64)}var L=d(i,[["render",w]]);export{L as default};
