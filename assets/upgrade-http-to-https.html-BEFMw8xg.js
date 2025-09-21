import{_ as n,c as a,a as e,o as t}from"./app-BoSqM2g3.js";const p={};function l(c,s){return t(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="nginx-至-https" tabindex="-1"><a class="header-anchor" href="#nginx-至-https"><span>Nginx 至 HTTPS</span></a></h1><p>HTTPS（HyperText Transfer Protocol Secure）即超文本传输安全协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。</p><h2 id="增加-ssl-模块" tabindex="-1"><a class="header-anchor" href="#增加-ssl-模块"><span>增加 SSL 模块</span></a></h2><p>部分早期编译安装的 nginx 缺乏 ssl 模块，先查看一下当前模块：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">/path/sbin/nginx <span class="token parameter variable">-V</span></span>
<span class="line"></span></code></pre></div><p>回到安装包位置，找到 <code>configure</code> 文件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module</span>
<span class="line"></span></code></pre></div><p>取代现有：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生成 ./objs/nginx</span></span>
<span class="line"><span class="token function">make</span></span>
<span class="line"><span class="token comment"># 备份</span></span>
<span class="line"><span class="token function">cp</span> /path/sbin/nginx /path/sbin/nginx.bak</span>
<span class="line"><span class="token comment"># 覆盖前先停止 nginx 服务</span></span>
<span class="line"><span class="token function">cp</span> ./objs/nginx /path/sbin/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再验证</span></span>
<span class="line">/path/sbin/nginx <span class="token parameter variable">-V</span></span>
<span class="line"></span></code></pre></div><h2 id="阿里云证书" tabindex="-1"><a class="header-anchor" href="#阿里云证书"><span>阿里云证书</span></a></h2><h3 id="_1-申请证书" tabindex="-1"><a class="header-anchor" href="#_1-申请证书"><span>1. 申请证书</span></a></h3><p>阿里云也提供了 SSL 证书的功能，购买<a href="https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&amp;commodityCode=cas#/buy" target="_blank" rel="noopener noreferrer">免费型 DV SSL</a>（在小字提示中可以注意到免费证书可以申请 20 个），购买成功后会在 SSL 证书控制台看到一个未签发的证书。</p><p>点击申请，然后绑定域名即可，例如 <code>blog.shanyuhai.top</code>，稍等片刻即可等待审核完成。</p><h3 id="_2-安装证书" tabindex="-1"><a class="header-anchor" href="#_2-安装证书"><span>2. 安装证书</span></a></h3><p>找到域名对应的证书，下载至本地，然后上传至服务器。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建证书目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/nginx/certs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拷贝证书到 certs 目录下</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mv</span> ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">unzip</span> blog.shanyuhai.top_nginx.zip</span>
<span class="line"><span class="token comment"># 修改命名</span></span>
<span class="line"><span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key</span>
<span class="line"></span></code></pre></div><h3 id="_3-修改-conf-文件" tabindex="-1"><a class="header-anchor" href="#_3-修改-conf-文件"><span>3. 修改 <code>.conf</code> 文件</span></a></h3><p>找到之前 Nginx 对应的 <code>blog.shanyuhai.top</code> 的配置文件。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/conf.d/blog.conf</span>
<span class="line"><span class="token comment"># 添加如下内容</span></span>
<span class="line">server <span class="token punctuation">{</span></span>
<span class="line">  listen <span class="token number">443</span> ssl<span class="token punctuation">;</span></span>
<span class="line">  server_name blog.shanyuhai.top<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment"># 证书文件</span></span>
<span class="line">  ssl_certificate certs/blog.shanyuhai.top.pem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment"># 秘钥文件</span></span>
<span class="line">  ssl_certificate_key certs/blog.shanyuhai.top.key<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  ssl_session_timeout 5m<span class="token punctuation">;</span></span>
<span class="line">  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span></span>
<span class="line">  ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span></span>
<span class="line">  ssl_prefer_server_ciphers on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  location / <span class="token punctuation">{</span></span>
<span class="line">    root /var/www/html/blog<span class="token punctuation">;</span></span>
<span class="line">    index index.html<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 接着访问 https://blog.shanyuhai.top 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-重定向-http-到-https" tabindex="-1"><a class="header-anchor" href="#_4-重定向-http-到-https"><span>4. 重定向 http 到 https</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 将 80 端口的虚拟机修改为以下内容</span></span>
<span class="line">server <span class="token punctuation">{</span></span>
<span class="line">  listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">  server_name  blog.shanyuhai.top<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  access_log  /var/log/nginx/blog.access.log  main<span class="token punctuation">;</span></span>
<span class="line">  rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 重启 nginx 服务</span></span>
<span class="line"><span class="token comment"># 接着访问 http://blog.shanyuhai.top 验证</span></span>
<span class="line"></span></code></pre></div><h2 id="let-s-encrypt-证书" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt-证书"><span>Let&#39;s Encrypt 证书</span></a></h2><h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明"><span>1. 说明</span></a></h3><p>Let&#39;s Encrypt 提供的 <a href="https://certbot.eff.org/instructions" target="_blank" rel="noopener noreferrer">certbot</a> 可以快速生成证书，并能够自动完成配置。</p><blockquote><p>还原阿里云做的配置，并打开网站验证是否还原。</p></blockquote><p>选择 Nginx 和 Ubuntu 18.04 后就会弹出对应的<a href="https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx" target="_blank" rel="noopener noreferrer">安装步骤</a>。</p><h3 id="_2-add-certbot-ppa" tabindex="-1"><a class="header-anchor" href="#_2-add-certbot-ppa"><span>2. Add Certbot PPA</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common</span>
<span class="line"><span class="token function">sudo</span> add-apt-repository universe</span>
<span class="line"><span class="token function">sudo</span> add-apt-repository ppa:certbot/certbot</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"></span></code></pre></div><h3 id="_3-install-certbot" tabindex="-1"><a class="header-anchor" href="#_3-install-certbot"><span>3. Install Certbot</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> certbot python-certbot-nginx</span>
<span class="line"></span></code></pre></div><h3 id="_4-get-and-install-your-certificates" tabindex="-1"><a class="header-anchor" href="#_4-get-and-install-your-certificates"><span>4. Get and install your certificates</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 执行后根据提示一步步安装即可</span></span>
<span class="line"><span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span></span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> /etc/nginx/conf.d/blog.conf <span class="token comment"># 查看变化</span></span>
<span class="line"><span class="token comment"># 访问 https://blog.shanyuhai.top 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-test-automatic-renewal" tabindex="-1"><a class="header-anchor" href="#_5-test-automatic-renewal"><span>5. Test automatic renewal</span></a></h3><p>Let’s Encrypt 证书的有效期为 90 天，所以需要自动续订。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> certbot renew --dry-run</span>
<span class="line"></span></code></pre></div>`,35)])])}const o=n(p,[["render",l]]),r=JSON.parse(`{"path":"/backend/nginx/upgrade-http-to-https.html","title":"Nginx 至 HTTPS","lang":"zh-CN","frontmatter":{"description":"Nginx 至 HTTPS"},"headers":[{"level":2,"title":"增加 SSL 模块","slug":"增加-ssl-模块","link":"#增加-ssl-模块","children":[]},{"level":2,"title":"阿里云证书","slug":"阿里云证书","link":"#阿里云证书","children":[{"level":3,"title":"1. 申请证书","slug":"_1-申请证书","link":"#_1-申请证书","children":[]},{"level":3,"title":"2. 安装证书","slug":"_2-安装证书","link":"#_2-安装证书","children":[]},{"level":3,"title":"3. 修改 .conf 文件","slug":"_3-修改-conf-文件","link":"#_3-修改-conf-文件","children":[]},{"level":3,"title":"4. 重定向 http 到 https","slug":"_4-重定向-http-到-https","link":"#_4-重定向-http-到-https","children":[]}]},{"level":2,"title":"Let's Encrypt 证书","slug":"let-s-encrypt-证书","link":"#let-s-encrypt-证书","children":[{"level":3,"title":"1. 说明","slug":"_1-说明","link":"#_1-说明","children":[]},{"level":3,"title":"2. Add Certbot PPA","slug":"_2-add-certbot-ppa","link":"#_2-add-certbot-ppa","children":[]},{"level":3,"title":"3. Install Certbot","slug":"_3-install-certbot","link":"#_3-install-certbot","children":[]},{"level":3,"title":"4. Get and install your certificates","slug":"_4-get-and-install-your-certificates","link":"#_4-get-and-install-your-certificates","children":[]},{"level":3,"title":"5. Test automatic renewal","slug":"_5-test-automatic-renewal","link":"#_5-test-automatic-renewal","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/upgrade-http-to-https.md"}`);export{o as comp,r as data};
