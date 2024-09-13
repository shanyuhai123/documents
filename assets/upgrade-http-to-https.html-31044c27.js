import{_ as p,M as c,p as r,q as l,a1 as e,R as s,t as a,N as o}from"./framework-e3e34937.js";const i={},d={href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"},u={href:"https://certbot.eff.org/instructions",target:"_blank",rel:"noopener noreferrer"},h={href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx",target:"_blank",rel:"noopener noreferrer"};function g(k,n){const t=c("ExternalLinkIcon");return r(),l("div",null,[n[9]||(n[9]=e(`<h1 id="nginx-至-https" tabindex="-1"><a class="header-anchor" href="#nginx-至-https" aria-hidden="true">#</a> Nginx 至 HTTPS</h1><p>HTTPS（HyperText Transfer Protocol Secure）即超文本传输安全协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。</p><h2 id="增加-ssl-模块" tabindex="-1"><a class="header-anchor" href="#增加-ssl-模块" aria-hidden="true">#</a> 增加 SSL 模块</h2><p>部分早期编译安装的 nginx 缺乏 ssl 模块，先查看一下当前模块：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/path/sbin/nginx <span class="token parameter variable">-V</span>
</code></pre></div><p>回到安装包位置，找到 <code>configure</code> 文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module
</code></pre></div><p>取代现有：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成 ./objs/nginx</span>
<span class="token function">make</span>
<span class="token comment"># 备份</span>
<span class="token function">cp</span> /path/sbin/nginx /path/sbin/nginx.bak
<span class="token comment"># 覆盖前先停止 nginx 服务</span>
<span class="token function">cp</span> ./objs/nginx /path/sbin/

<span class="token comment"># 再验证</span>
/path/sbin/nginx <span class="token parameter variable">-V</span>
</code></pre></div><h2 id="阿里云证书" tabindex="-1"><a class="header-anchor" href="#阿里云证书" aria-hidden="true">#</a> 阿里云证书</h2><h3 id="_1-申请证书" tabindex="-1"><a class="header-anchor" href="#_1-申请证书" aria-hidden="true">#</a> 1. 申请证书</h3>`,11)),s("p",null,[n[1]||(n[1]=a("阿里云也提供了 SSL 证书的功能，购买")),s("a",d,[n[0]||(n[0]=a("免费型 DV SSL")),o(t)]),n[2]||(n[2]=a("（在小字提示中可以注意到免费证书可以申请 20 个），购买成功后会在 SSL 证书控制台看到一个未签发的证书。"))]),n[10]||(n[10]=e(`<p>点击申请，然后绑定域名即可，例如 <code>blog.shanyuhai.top</code>，稍等片刻即可等待审核完成。</p><h3 id="_2-安装证书" tabindex="-1"><a class="header-anchor" href="#_2-安装证书" aria-hidden="true">#</a> 2. 安装证书</h3><p>找到域名对应的证书，下载至本地，然后上传至服务器。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建证书目录</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/nginx/certs

<span class="token comment"># 拷贝证书到 certs 目录下</span>
<span class="token function">sudo</span> <span class="token function">mv</span> ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs

<span class="token comment"># 解压</span>
<span class="token function">sudo</span> <span class="token function">unzip</span> blog.shanyuhai.top_nginx.zip
<span class="token comment"># 修改命名</span>
<span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
<span class="token function">sudo</span> <span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
</code></pre></div><h3 id="_3-修改-conf-文件" tabindex="-1"><a class="header-anchor" href="#_3-修改-conf-文件" aria-hidden="true">#</a> 3. 修改 <code>.conf</code> 文件</h3><p>找到之前 Nginx 对应的 <code>blog.shanyuhai.top</code> 的配置文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/conf.d/blog.conf
<span class="token comment"># 添加如下内容</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
  server_name blog.shanyuhai.top<span class="token punctuation">;</span>
  <span class="token comment"># 证书文件</span>
  ssl_certificate certs/blog.shanyuhai.top.pem<span class="token punctuation">;</span>
  <span class="token comment"># 秘钥文件</span>
  ssl_certificate_key certs/blog.shanyuhai.top.key<span class="token punctuation">;</span>

  ssl_session_timeout 5m<span class="token punctuation">;</span>
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
  ssl_prefer_server_ciphers on<span class="token punctuation">;</span>


  location / <span class="token punctuation">{</span>
    root /var/www/html/blog<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 接着访问 https://blog.shanyuhai.top 验证</span>
</code></pre></div><h3 id="_4-重定向-http-到-https" tabindex="-1"><a class="header-anchor" href="#_4-重定向-http-到-https" aria-hidden="true">#</a> 4. 重定向 http 到 https</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 80 端口的虚拟机修改为以下内容</span>
server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  blog.shanyuhai.top<span class="token punctuation">;</span>

  access_log  /var/log/nginx/blog.access.log  main<span class="token punctuation">;</span>
  rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 重启 nginx 服务</span>
<span class="token comment"># 接着访问 http://blog.shanyuhai.top 验证</span>
</code></pre></div><h2 id="let-s-encrypt-证书" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt-证书" aria-hidden="true">#</a> Let&#39;s Encrypt 证书</h2><h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1. 说明</h3>`,11)),s("p",null,[n[4]||(n[4]=a("Let's Encrypt 提供的 ")),s("a",u,[n[3]||(n[3]=a("certbot")),o(t)]),n[5]||(n[5]=a(" 可以快速生成证书，并能够自动完成配置。"))]),n[11]||(n[11]=s("blockquote",null,[s("p",null,"还原阿里云做的配置，并打开网站验证是否还原。")],-1)),s("p",null,[n[7]||(n[7]=a("选择 Nginx 和 Ubuntu 18.04 后就会弹出对应的")),s("a",h,[n[6]||(n[6]=a("安装步骤")),o(t)]),n[8]||(n[8]=a("。"))]),n[12]||(n[12]=e(`<h3 id="_2-add-certbot-ppa" tabindex="-1"><a class="header-anchor" href="#_2-add-certbot-ppa" aria-hidden="true">#</a> 2. Add Certbot PPA</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common
<span class="token function">sudo</span> add-apt-repository universe
<span class="token function">sudo</span> add-apt-repository ppa:certbot/certbot
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre></div><h3 id="_3-install-certbot" tabindex="-1"><a class="header-anchor" href="#_3-install-certbot" aria-hidden="true">#</a> 3. Install Certbot</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> certbot python-certbot-nginx
</code></pre></div><h3 id="_4-get-and-install-your-certificates" tabindex="-1"><a class="header-anchor" href="#_4-get-and-install-your-certificates" aria-hidden="true">#</a> 4. Get and install your certificates</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行后根据提示一步步安装即可</span>
<span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span>

<span class="token function">cat</span> /etc/nginx/conf.d/blog.conf <span class="token comment"># 查看变化</span>
<span class="token comment"># 访问 https://blog.shanyuhai.top 验证</span>
</code></pre></div><h3 id="_5-test-automatic-renewal" tabindex="-1"><a class="header-anchor" href="#_5-test-automatic-renewal" aria-hidden="true">#</a> 5. Test automatic renewal</h3><p>Let’s Encrypt 证书的有效期为 90 天，所以需要自动续订。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run
</code></pre></div>`,9))])}const f=p(i,[["render",g],["__file","upgrade-http-to-https.html.vue"]]);export{f as default};
