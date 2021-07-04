import{r as n,o as a,c as s,a as e,F as t,d as o,b as p}from"./app.221f0787.js";const c={},l=o('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>HTTPS（HyperText Transfer Protocol Secure）即超文本传输安全协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。</p><h2 id="增加-ssl-模块" tabindex="-1"><a class="header-anchor" href="#增加-ssl-模块" aria-hidden="true">#</a> 增加 SSL 模块</h2><p>部分早期编译安装的 nginx 缺乏 ssl 模块，先查看一下当前模块：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/path/sbin/nginx -V\n</code></pre></div><p>回到安装包位置，找到 <code>configure</code> 文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>./configure --prefix<span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module\n</code></pre></div><p>取代现有：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 生成 ./objs/nginx</span>\n<span class="token function">make</span>\n<span class="token comment"># 备份</span>\n<span class="token function">cp</span> /path/sbin/nginx /path/sbin/nginx.bak\n<span class="token comment"># 覆盖前先停止 nginx 服务</span>\n<span class="token function">cp</span> ./objs/nginx /path/sbin/\n\n<span class="token comment"># 再验证</span>\n/path/sbin/nginx -V\n</code></pre></div><h2 id="阿里云证书" tabindex="-1"><a class="header-anchor" href="#阿里云证书" aria-hidden="true">#</a> 阿里云证书</h2><h3 id="_1-申请证书" tabindex="-1"><a class="header-anchor" href="#_1-申请证书" aria-hidden="true">#</a> 1. 申请证书</h3>',11),i=p("阿里云也提供了 SSL 证书的功能，购买"),r={href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"},u=p("免费型 DV SSL"),h=p("（在小字提示中可以注意到免费证书可以申请 20 个），购买成功后会在 SSL 证书控制台看到一个未签发的证书。"),d=o('<p>点击申请，然后绑定域名即可，例如 <code>blog.shanyuhai.top</code>，稍等片刻即可等待审核完成。</p><h3 id="_2-安装证书" tabindex="-1"><a class="header-anchor" href="#_2-安装证书" aria-hidden="true">#</a> 2. 安装证书</h3><p>找到域名对应的证书，下载至本地，然后上传至服务器。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 创建证书目录</span>\n<span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/nginx/certs\n\n<span class="token comment"># 拷贝证书到 certs 目录下</span>\n<span class="token function">sudo</span> <span class="token function">mv</span> ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs\n\n<span class="token comment"># 解压</span>\n<span class="token function">sudo</span> <span class="token function">unzip</span> blog.shanyuhai.top_nginx.zip\n<span class="token comment"># 修改命名</span>\n<span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key\n<span class="token function">sudo</span> <span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key\n</code></pre></div><h3 id="_3-修改-conf-文件" tabindex="-1"><a class="header-anchor" href="#_3-修改-conf-文件" aria-hidden="true">#</a> 3. 修改 <code>.conf</code> 文件</h3><p>找到之前 Nginx 对应的 <code>blog.shanyuhai.top</code> 的配置文件。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/conf.d/blog.conf\n<span class="token comment"># 添加如下内容</span>\nserver <span class="token punctuation">{</span>\n    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>\n    server_name blog.shanyuhai.top<span class="token punctuation">;</span>\n    <span class="token comment"># 证书文件</span>\n    ssl_certificate certs/blog.shanyuhai.top.pem<span class="token punctuation">;</span>\n    <span class="token comment"># 秘钥文件</span>\n    ssl_certificate_key certs/blog.shanyuhai.top.key<span class="token punctuation">;</span>\n\n    ssl_session_timeout 5m<span class="token punctuation">;</span>\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>\n    ssl_prefer_server_ciphers on<span class="token punctuation">;</span>\n\n\n    location / <span class="token punctuation">{</span>\n        root /var/www/html/blog<span class="token punctuation">;</span>\n        index index.html<span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 接着访问 https://blog.shanyuhai.top 验证</span>\n</code></pre></div><h3 id="_4-重定向-http-到-https" tabindex="-1"><a class="header-anchor" href="#_4-重定向-http-到-https" aria-hidden="true">#</a> 4. 重定向 http 到 https</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 将 80 端口的虚拟机修改为以下内容</span>\nserver <span class="token punctuation">{</span>\n    listen       <span class="token number">80</span><span class="token punctuation">;</span>\n    server_name  blog.shanyuhai.top<span class="token punctuation">;</span>\n\n    access_log  /var/log/nginx/blog.access.log  main<span class="token punctuation">;</span>\n    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token function">sudo</span> nginx -s reload <span class="token comment"># 重启 nginx 服务</span>\n<span class="token comment"># 接着访问 http://blog.shanyuhai.top 验证</span>\n</code></pre></div><h2 id="let-s-encrypt-证书" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt-证书" aria-hidden="true">#</a> Let&#39;s Encrypt 证书</h2><h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1. 说明</h3>',11),g=p("Let's Encrypt 提供的 "),k={href:"https://certbot.eff.org/instructions",target:"_blank",rel:"noopener noreferrer"},b=p("certbot"),f=p(" 可以快速生成证书，并能够自动完成配置。"),m=e("blockquote",null,[e("p",null,"还原阿里云做的配置，并打开网站验证是否还原。")],-1),x=p("选择 Nginx 和 Ubuntu 18.04 后就会弹出对应的"),_={href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx",target:"_blank",rel:"noopener noreferrer"},y=p("安装步骤"),v=p("。"),S=o('<h3 id="_2-add-certbot-ppa" tabindex="-1"><a class="header-anchor" href="#_2-add-certbot-ppa" aria-hidden="true">#</a> 2. Add Certbot PPA</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common\n<span class="token function">sudo</span> add-apt-repository universe\n<span class="token function">sudo</span> add-apt-repository ppa:certbot/certbot\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update\n</code></pre></div><h3 id="_3-install-certbot" tabindex="-1"><a class="header-anchor" href="#_3-install-certbot" aria-hidden="true">#</a> 3. Install Certbot</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> certbot python-certbot-nginx\n</code></pre></div><h3 id="_4-get-and-install-your-certificates" tabindex="-1"><a class="header-anchor" href="#_4-get-and-install-your-certificates" aria-hidden="true">#</a> 4. Get and install your certificates</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 执行后根据提示一步步安装即可</span>\n<span class="token function">sudo</span> certbot --nginx\n\n<span class="token function">cat</span> /etc/nginx/conf.d/blog.conf <span class="token comment"># 查看变化</span>\n<span class="token comment"># 访问 https://blog.shanyuhai.top 验证</span>\n</code></pre></div><h3 id="_5-test-automatic-renewal" tabindex="-1"><a class="header-anchor" href="#_5-test-automatic-renewal" aria-hidden="true">#</a> 5. Test automatic renewal</h3><p>Let’s Encrypt 证书的有效期为 90 天，所以需要自动续订。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run\n</code></pre></div>',9);c.render=function(o,p){const c=n("OutboundLink");return a(),s(t,null,[l,e("p",null,[i,e("a",r,[u,e(c)]),h]),d,e("p",null,[g,e("a",k,[b,e(c)]),f]),m,e("p",null,[x,e("a",_,[y,e(c)]),v]),S],64)};export default c;
