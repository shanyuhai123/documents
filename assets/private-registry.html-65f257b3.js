import{_ as t,M as o,p as c,q as p,Q as e,t as a,N as n,a1 as r}from"./framework-49860b1b.js";const l={},i=r(`<h1 id="使用-harbor-构建私有镜像仓库" tabindex="-1"><a class="header-anchor" href="#使用-harbor-构建私有镜像仓库" aria-hidden="true">#</a> 使用 Harbor 构建私有镜像仓库</h1><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><p>创建一台虚拟机为私有仓库，本机向虚拟机的仓库发起上传和下载。</p><h2 id="搭建仓库" tabindex="-1"><a class="header-anchor" href="#搭建仓库" aria-hidden="true">#</a> 搭建仓库</h2><p>在虚拟机上创建仓库，并指定镜像文件存放在本地的默认路径，为其设置 docker 重启后跟随重启。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> registry <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">-v</span> /opt/data/registry:/var/lib/registry registry
</code></pre></div><p>后续的 <code>registry</code> 配置可见 <code>/etc/docker/registry/config.yml</code>。</p><h2 id="主机测试" tabindex="-1"><a class="header-anchor" href="#主机测试" aria-hidden="true">#</a> 主机测试</h2><p>Docker 新的版本对安全性要求较高，要求仓库支持 SSL/TLS 证书，可以在本地信任该仓库。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 在 JSON 中追加内容，对应的 IP 地址</span>
<span class="token punctuation">{</span><span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;192.168.0.107:5000&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

<span class="token comment"># 重启服务</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre></div><p>主机上传镜像到虚拟机仓库验证。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull ubuntu
<span class="token comment"># 打 tag</span>
<span class="token function">docker</span> tag ubuntu <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># push</span>
<span class="token function">docker</span> push <span class="token number">192.168</span>.0.107:5000/tubuntu

<span class="token comment"># 验证</span>
<span class="token function">curl</span> http://192.168.0.107:5000/v2/_catalog
<span class="token comment"># {&quot;repositories&quot;:[&quot;tubuntu&quot;]} # 成功</span>
<span class="token comment"># 还可以直接打开上面链接进行查看</span>
<span class="token comment"># 或者在虚拟机上查看 ll /opt/data/registry/docker/registry/v2/repositories</span>
</code></pre></div><p>下载验证。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先删除本地的镜像</span>
<span class="token function">docker</span> rmi <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># 验证</span>
<span class="token function">docker</span> images

<span class="token comment"># 拉取</span>
<span class="token function">docker</span> pull <span class="token number">192.168</span>.0.107:5000/tubuntu
<span class="token comment"># 验证</span>
<span class="token function">docker</span> images
</code></pre></div><h2 id="harbor" tabindex="-1"><a class="header-anchor" href="#harbor" aria-hidden="true">#</a> Harbor</h2>`,15),d={href:"https://github.com/goharbor/harbor",target:"_blank",rel:"noopener noreferrer"},h=r(`<h3 id="_1-获取-harbor" tabindex="-1"><a class="header-anchor" href="#_1-获取-harbor" aria-hidden="true">#</a> 1. 获取 Harbor</h3><p>先下载文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 目标压缩包</span>
<span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz

<span class="token comment"># gpg</span>
<span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz.asc
</code></pre></div><p>获取文件后先校验有没有问题：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 校验</span>
gpg <span class="token parameter variable">--verify</span> harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
<span class="token comment"># gpg: using RSA key 7722D168DAEC457806C96FF9644FF454C0B4115C</span>
<span class="token comment"># gpg: Can&#39;t check signature: No public key</span>

<span class="token comment"># 导入公钥</span>
gpg <span class="token parameter variable">--keyserver</span> hkps://keyserver.ubuntu.com --receive-keys 7722D168DAEC457806C96FF9644FF454C0B4115C

<span class="token comment"># 再次校验</span>
gpg <span class="token parameter variable">--verify</span> harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz
</code></pre></div><h3 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h3><p>先进行解压：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> xvf harbor-offline-installer-v2.0.5.tgz
</code></pre></div><p>修改配置文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> harbor.yml.tmpl harbor.yml

<span class="token comment"># 修改配置</span>
<span class="token function">vim</span> harbor.yml
</code></pre></div><p>其中 <code>data_volume</code> 挂载数据。</p><p>在安装前需要确认已经准备好 <code>docker</code> 及 <code>docker-compose</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> install.sh
</code></pre></div><h3 id="_3-重装" tabindex="-1"><a class="header-anchor" href="#_3-重装" aria-hidden="true">#</a> 3. 重装</h3><p>当修改配置后运行 <code>bash prepare</code> 即可。</p><h3 id="_4-用户" tabindex="-1"><a class="header-anchor" href="#_4-用户" aria-hidden="true">#</a> 4. 用户</h3><p>Harbor 使用前需要注册帐号，推送镜像前需要先创建项目，邀请成员才行。</p><h2 id="自签证书" tabindex="-1"><a class="header-anchor" href="#自签证书" aria-hidden="true">#</a> 自签证书</h2><p>Harbor 在非 <code>https</code> 的环境下总是会出现各种各样的问题，而内网使用时需要自签证书解决 <code>https</code> 问题。</p>`,19),u={href:"https://goharbor.io/docs/2.1.0/install-config/configure-https/",target:"_blank",rel:"noopener noreferrer"},b=r(`<h3 id="_1-生成-ca-证书" tabindex="-1"><a class="header-anchor" href="#_1-生成-ca-证书" aria-hidden="true">#</a> 1. 生成 CA 证书</h3><p>先生成 <code>ca</code> 私钥：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> ca.key <span class="token number">4096</span>
</code></pre></div><p>再生成 <code>ca</code> 证书：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-key</span> ca.key <span class="token punctuation">\\</span>
 <span class="token parameter variable">-out</span> ca.crt
</code></pre></div><h3 id="_2-生成服务端证书" tabindex="-1"><a class="header-anchor" href="#_2-生成服务端证书" aria-hidden="true">#</a> 2. 生成服务端证书</h3><p>服务端证书包含 <code>.crt</code> 及 <code>.key</code> 文件。</p><p>先生成域名私钥：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> harbor.xxx.com.key <span class="token number">4096</span>
</code></pre></div><p>再生成证书签名请求（Certificate Signing Request）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-new</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-key</span> harbor.xxx.com.key <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> harbor.xxx.com.csr
</code></pre></div><p>再生成 <code>x509 v3</code> 扩展：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
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
</code></pre></div><p>根据 <code>v3.ext</code> 生成证书：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-extfile</span> v3.ext <span class="token punctuation">\\</span>
    <span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-in</span> harbor.xxx.com.csr <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> harbor.xxx.com.crt
</code></pre></div><p>将 <code>crt</code> 转为 <code>cert</code>，以供 Docker client 使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> harbor.xxx.com.crt <span class="token parameter variable">-out</span> harbor.xxx.com.cert
</code></pre></div><h3 id="_3-docker-客户端使用" tabindex="-1"><a class="header-anchor" href="#_3-docker-客户端使用" aria-hidden="true">#</a> 3. Docker 客户端使用</h3><p>需要将证书拷贝至 <code>docker</code> 配置即<code>/etc/docker/certs.d/harbor.xxx.com/</code> 目录下，增加 <code>ca.crt</code> 、<code>harbor.xxx.com.cert</code> 、<code>harbor.xxx.com.key</code> 三个文件，最后结构如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/etc/docker/certs.d/
    └── harbor.xxx.com
       ├── harbor.xxx.com.cert
       ├── harbor.xxx.com.key
       └── ca.crt
</code></pre></div><p>配置完成后还需重启 Docker。</p><h3 id="_4-浏览器使用" tabindex="-1"><a class="header-anchor" href="#_4-浏览器使用" aria-hidden="true">#</a> 4. 浏览器使用</h3><p>Manjaro 下找到 SSL 设置，添加 <code>harbor.xxx.com.crt</code> 证书即可。</p><h3 id="_5-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-注意事项" aria-hidden="true">#</a> 5. 注意事项</h3>`,24),k=e("code",null,"push",-1),g={href:"https://github.com/goharbor/harbor/issues/13553",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"common/config/nginx/nginx.conf",-1),x=e("div",{class:"language-nginx","data-ext":"nginx"},[e("pre",{class:"language-nginx"},[e("code",null,[e("span",{class:"token comment"},"# When setting up Harbor behind other proxy, such as an Nginx instance, remove the below line if the proxy already has similar settings."),a(`
`),e("span",{class:"token comment"},"#proxy_set_header X-Forwarded-Proto $scheme;"),a(`
`)])])],-1);function v(f,_){const s=o("ExternalLinkIcon");return c(),p("div",null,[i,e("p",null,[a("另外一个选择是使用 "),e("a",d,[a("Harbor"),n(s)]),a("。")]),h,e("p",null,[a("Harbor 官网对这一部分有详细的"),e("a",u,[a("说明"),n(s)]),a("，此处稍微简化。")]),b,e("p",null,[a("在使用 Nginx 反向代理 "),k,a(" 存在"),e("a",g,[a("问题"),n(s)]),a("。根据 "),m,a(" 中的提示注释，需注意不止一处：")]),x])}const C=t(l,[["render",v],["__file","private-registry.html.vue"]]);export{C as default};
