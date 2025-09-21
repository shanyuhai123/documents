import{_ as s,c as n,a as e,o as p}from"./app-CQrWi6O2.js";const l={};function t(r,a){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="使用-harbor-构建私有镜像仓库" tabindex="-1"><a class="header-anchor" href="#使用-harbor-构建私有镜像仓库"><span>使用 Harbor 构建私有镜像仓库</span></a></h1><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2><p>创建一台虚拟机为私有仓库，本机向虚拟机的仓库发起上传和下载。</p><h2 id="搭建仓库" tabindex="-1"><a class="header-anchor" href="#搭建仓库"><span>搭建仓库</span></a></h2><p>在虚拟机上创建仓库，并指定镜像文件存放在本地的默认路径，为其设置 docker 重启后跟随重启。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> registry <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">-v</span> /opt/data/registry:/var/lib/registry registry</span>
<span class="line"></span></code></pre></div><p>后续的 <code>registry</code> 配置可见 <code>/etc/docker/registry/config.yml</code>。</p><h2 id="主机测试" tabindex="-1"><a class="header-anchor" href="#主机测试"><span>主机测试</span></a></h2><p>Docker 新的版本对安全性要求较高，要求仓库支持 SSL/TLS 证书，可以在本地信任该仓库。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 JSON 中追加内容，对应的 IP 地址</span></span>
<span class="line"><span class="token punctuation">{</span><span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;192.168.0.107:5000&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启服务</span></span>
<span class="line"><span class="token function">sudo</span> systemctl daemon-reload</span>
<span class="line"><span class="token function">sudo</span> systemctl restart <span class="token function">docker</span></span>
<span class="line"></span></code></pre></div><p>主机上传镜像到虚拟机仓库验证。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> pull ubuntu</span>
<span class="line"><span class="token comment"># 打 tag</span></span>
<span class="line"><span class="token function">docker</span> tag ubuntu <span class="token number">192.168</span>.0.107:5000/tubuntu</span>
<span class="line"><span class="token comment"># push</span></span>
<span class="line"><span class="token function">docker</span> push <span class="token number">192.168</span>.0.107:5000/tubuntu</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">curl</span> http://192.168.0.107:5000/v2/_catalog</span>
<span class="line"><span class="token comment"># {&quot;repositories&quot;:[&quot;tubuntu&quot;]} # 成功</span></span>
<span class="line"><span class="token comment"># 还可以直接打开上面链接进行查看</span></span>
<span class="line"><span class="token comment"># 或者在虚拟机上查看 ll /opt/data/registry/docker/registry/v2/repositories</span></span>
<span class="line"></span></code></pre></div><p>下载验证。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 首先删除本地的镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token number">192.168</span>.0.107:5000/tubuntu</span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取</span></span>
<span class="line"><span class="token function">docker</span> pull <span class="token number">192.168</span>.0.107:5000/tubuntu</span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span></code></pre></div><h2 id="harbor" tabindex="-1"><a class="header-anchor" href="#harbor"><span>Harbor</span></a></h2><p>另外一个选择是使用 <a href="https://github.com/goharbor/harbor" target="_blank" rel="noopener noreferrer">Harbor</a>。</p><h3 id="_1-获取-harbor" tabindex="-1"><a class="header-anchor" href="#_1-获取-harbor"><span>1. 获取 Harbor</span></a></h3><p>先下载文件。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 目标压缩包</span></span>
<span class="line"><span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># gpg</span></span>
<span class="line"><span class="token function">wget</span> https://github.com/goharbor/harbor/releases/download/v2.0.5/harbor-offline-installer-v2.0.5.tgz.asc</span>
<span class="line"></span></code></pre></div><p>获取文件后先校验有没有问题：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 校验</span></span>
<span class="line">gpg <span class="token parameter variable">--verify</span> harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz</span>
<span class="line"><span class="token comment"># gpg: using RSA key 7722D168DAEC457806C96FF9644FF454C0B4115C</span></span>
<span class="line"><span class="token comment"># gpg: Can&#39;t check signature: No public key</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导入公钥</span></span>
<span class="line">gpg <span class="token parameter variable">--keyserver</span> hkps://keyserver.ubuntu.com --receive-keys 7722D168DAEC457806C96FF9644FF454C0B4115C</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再次校验</span></span>
<span class="line">gpg <span class="token parameter variable">--verify</span> harbor-offline-installer-v2.0.5.tgz.asc harbor-offline-installer-v2.0.5.tgz</span>
<span class="line"></span></code></pre></div><h3 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h3><p>先进行解压：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">tar</span> xvf harbor-offline-installer-v2.0.5.tgz</span>
<span class="line"></span></code></pre></div><p>修改配置文件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> harbor.yml.tmpl harbor.yml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改配置</span></span>
<span class="line"><span class="token function">vim</span> harbor.yml</span>
<span class="line"></span></code></pre></div><p>其中 <code>data_volume</code> 挂载数据。</p><p>在安装前需要确认已经准备好 <code>docker</code> 及 <code>docker-compose</code>。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">bash</span> install.sh</span>
<span class="line"></span></code></pre></div><h3 id="_3-重装" tabindex="-1"><a class="header-anchor" href="#_3-重装"><span>3. 重装</span></a></h3><p>当修改配置后运行 <code>bash prepare</code> 即可。</p><h3 id="_4-用户" tabindex="-1"><a class="header-anchor" href="#_4-用户"><span>4. 用户</span></a></h3><p>Harbor 使用前需要注册帐号，推送镜像前需要先创建项目，邀请成员才行。</p><h2 id="自签证书" tabindex="-1"><a class="header-anchor" href="#自签证书"><span>自签证书</span></a></h2><p>Harbor 在非 <code>https</code> 的环境下总是会出现各种各样的问题，而内网使用时需要自签证书解决 <code>https</code> 问题。</p><p>Harbor 官网对这一部分有详细的<a href="https://goharbor.io/docs/2.1.0/install-config/configure-https/" target="_blank" rel="noopener noreferrer">说明</a>，此处稍微简化。</p><h3 id="_1-生成-ca-证书" tabindex="-1"><a class="header-anchor" href="#_1-生成-ca-证书"><span>1. 生成 CA 证书</span></a></h3><p>先生成 <code>ca</code> 私钥：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl genrsa <span class="token parameter variable">-out</span> ca.key <span class="token number">4096</span></span>
<span class="line"></span></code></pre></div><p>再生成 <code>ca</code> 证书：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-key</span> ca.key <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-out</span> ca.crt</span>
<span class="line"></span></code></pre></div><h3 id="_2-生成服务端证书" tabindex="-1"><a class="header-anchor" href="#_2-生成服务端证书"><span>2. 生成服务端证书</span></a></h3><p>服务端证书包含 <code>.crt</code> 及 <code>.key</code> 文件。</p><p>先生成域名私钥：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl genrsa <span class="token parameter variable">-out</span> harbor.xxx.com.key <span class="token number">4096</span></span>
<span class="line"></span></code></pre></div><p>再生成证书签名请求（Certificate Signing Request）：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl req <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-new</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=harbor.xxx.com&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-key</span> harbor.xxx.com.key <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-out</span> harbor.xxx.com.csr</span>
<span class="line"></span></code></pre></div><p>再生成 <code>x509 v3</code> 扩展：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF</span>
<span class="line">authorityKeyIdentifier=keyid,issuer</span>
<span class="line">basicConstraints=CA:FALSE</span>
<span class="line">keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment</span>
<span class="line">extendedKeyUsage = serverAuth</span>
<span class="line">subjectAltName = @alt_names</span>
<span class="line"></span>
<span class="line">[alt_names]</span>
<span class="line">DNS.1=harbor.xxx.com</span>
<span class="line">DNS.2=xxx</span>
<span class="line">DNS.3=hostname</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre></div><p>根据 <code>v3.ext</code> 生成证书：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-extfile</span> v3.ext <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-in</span> harbor.xxx.com.csr <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-out</span> harbor.xxx.com.crt</span>
<span class="line"></span></code></pre></div><p>将 <code>crt</code> 转为 <code>cert</code>，以供 Docker client 使用：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> harbor.xxx.com.crt <span class="token parameter variable">-out</span> harbor.xxx.com.cert</span>
<span class="line"></span></code></pre></div><h3 id="_3-docker-客户端使用" tabindex="-1"><a class="header-anchor" href="#_3-docker-客户端使用"><span>3. Docker 客户端使用</span></a></h3><p>需要将证书拷贝至 <code>docker</code> 配置即<code>/etc/docker/certs.d/harbor.xxx.com/</code> 目录下，增加 <code>ca.crt</code> 、<code>harbor.xxx.com.cert</code> 、<code>harbor.xxx.com.key</code> 三个文件，最后结构如下：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">/etc/docker/certs.d/</span>
<span class="line">    └── harbor.xxx.com</span>
<span class="line">       ├── harbor.xxx.com.cert</span>
<span class="line">       ├── harbor.xxx.com.key</span>
<span class="line">       └── ca.crt</span>
<span class="line"></span></code></pre></div><p>配置完成后还需重启 Docker。</p><h3 id="_4-浏览器使用" tabindex="-1"><a class="header-anchor" href="#_4-浏览器使用"><span>4. 浏览器使用</span></a></h3><p>Manjaro 下找到 SSL 设置，添加 <code>harbor.xxx.com.crt</code> 证书即可。</p><h3 id="_5-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-注意事项"><span>5. 注意事项</span></a></h3><p>在使用 Nginx 反向代理 <code>push</code> 存在<a href="https://github.com/goharbor/harbor/issues/13553" target="_blank" rel="noopener noreferrer">问题</a>。根据 <code>common/config/nginx/nginx.conf</code> 中的提示注释，需注意不止一处：</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token comment"># When setting up Harbor behind other proxy, such as an Nginx instance, remove the below line if the proxy already has similar settings.</span></span>
<span class="line"><span class="token comment">#proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"></span></code></pre></div>`,62)])])}const o=s(l,[["render",t]]),i=JSON.parse('{"path":"/backend/docker/private-registry.html","title":"使用 Harbor 构建私有镜像仓库","lang":"zh-CN","frontmatter":{"description":"使用 Harbor 构建私有镜像仓库","autoSort":-999},"headers":[{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"搭建仓库","slug":"搭建仓库","link":"#搭建仓库","children":[]},{"level":2,"title":"主机测试","slug":"主机测试","link":"#主机测试","children":[]},{"level":2,"title":"Harbor","slug":"harbor","link":"#harbor","children":[{"level":3,"title":"1. 获取 Harbor","slug":"_1-获取-harbor","link":"#_1-获取-harbor","children":[]},{"level":3,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[]},{"level":3,"title":"3. 重装","slug":"_3-重装","link":"#_3-重装","children":[]},{"level":3,"title":"4. 用户","slug":"_4-用户","link":"#_4-用户","children":[]}]},{"level":2,"title":"自签证书","slug":"自签证书","link":"#自签证书","children":[{"level":3,"title":"1. 生成 CA 证书","slug":"_1-生成-ca-证书","link":"#_1-生成-ca-证书","children":[]},{"level":3,"title":"2. 生成服务端证书","slug":"_2-生成服务端证书","link":"#_2-生成服务端证书","children":[]},{"level":3,"title":"3. Docker 客户端使用","slug":"_3-docker-客户端使用","link":"#_3-docker-客户端使用","children":[]},{"level":3,"title":"4. 浏览器使用","slug":"_4-浏览器使用","link":"#_4-浏览器使用","children":[]},{"level":3,"title":"5. 注意事项","slug":"_5-注意事项","link":"#_5-注意事项","children":[]}]}],"git":{"updatedTime":1636472013000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/docker/private-registry.md"}');export{o as comp,i as data};
