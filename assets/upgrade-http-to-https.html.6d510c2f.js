import{r as o,c,a as s,b as e,F as p,e as t,d as n,o as i}from"./app.89b3b21c.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const l={},h=t(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>HTTPS\uFF08HyperText Transfer Protocol Secure\uFF09\u5373\u8D85\u6587\u672C\u4F20\u8F93\u5B89\u5168\u534F\u8BAE\u3002HTTPS \u7ECF\u7531 HTTP \u8FDB\u884C\u901A\u4FE1\uFF0C\u4F46\u5229\u7528 SSL/TLS \u6765\u52A0\u5BC6\u6570\u636E\u5305\u3002</p><h2 id="\u589E\u52A0-ssl-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0-ssl-\u6A21\u5757" aria-hidden="true">#</a> \u589E\u52A0 SSL \u6A21\u5757</h2><p>\u90E8\u5206\u65E9\u671F\u7F16\u8BD1\u5B89\u88C5\u7684 nginx \u7F3A\u4E4F ssl \u6A21\u5757\uFF0C\u5148\u67E5\u770B\u4E00\u4E0B\u5F53\u524D\u6A21\u5757\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/path/sbin/nginx -V
</code></pre></div><p>\u56DE\u5230\u5B89\u88C5\u5305\u4F4D\u7F6E\uFF0C\u627E\u5230 <code>configure</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>./configure --prefix<span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module
</code></pre></div><p>\u53D6\u4EE3\u73B0\u6709\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210 ./objs/nginx</span>
<span class="token function">make</span>
<span class="token comment"># \u5907\u4EFD</span>
<span class="token function">cp</span> /path/sbin/nginx /path/sbin/nginx.bak
<span class="token comment"># \u8986\u76D6\u524D\u5148\u505C\u6B62 nginx \u670D\u52A1</span>
<span class="token function">cp</span> ./objs/nginx /path/sbin/

<span class="token comment"># \u518D\u9A8C\u8BC1</span>
/path/sbin/nginx -V
</code></pre></div><h2 id="\u963F\u91CC\u4E91\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91\u8BC1\u4E66" aria-hidden="true">#</a> \u963F\u91CC\u4E91\u8BC1\u4E66</h2><h3 id="_1-\u7533\u8BF7\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_1-\u7533\u8BF7\u8BC1\u4E66" aria-hidden="true">#</a> 1. \u7533\u8BF7\u8BC1\u4E66</h3>`,11),d=n("\u963F\u91CC\u4E91\u4E5F\u63D0\u4F9B\u4E86 SSL \u8BC1\u4E66\u7684\u529F\u80FD\uFF0C\u8D2D\u4E70"),u={href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"},g=n("\u514D\u8D39\u578B DV SSL"),k=n("\uFF08\u5728\u5C0F\u5B57\u63D0\u793A\u4E2D\u53EF\u4EE5\u6CE8\u610F\u5230\u514D\u8D39\u8BC1\u4E66\u53EF\u4EE5\u7533\u8BF7 20 \u4E2A\uFF09\uFF0C\u8D2D\u4E70\u6210\u529F\u540E\u4F1A\u5728 SSL \u8BC1\u4E66\u63A7\u5236\u53F0\u770B\u5230\u4E00\u4E2A\u672A\u7B7E\u53D1\u7684\u8BC1\u4E66\u3002"),b=t(`<p>\u70B9\u51FB\u7533\u8BF7\uFF0C\u7136\u540E\u7ED1\u5B9A\u57DF\u540D\u5373\u53EF\uFF0C\u4F8B\u5982 <code>blog.shanyuhai.top</code>\uFF0C\u7A0D\u7B49\u7247\u523B\u5373\u53EF\u7B49\u5F85\u5BA1\u6838\u5B8C\u6210\u3002</p><h3 id="_2-\u5B89\u88C5\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u8BC1\u4E66" aria-hidden="true">#</a> 2. \u5B89\u88C5\u8BC1\u4E66</h3><p>\u627E\u5230\u57DF\u540D\u5BF9\u5E94\u7684\u8BC1\u4E66\uFF0C\u4E0B\u8F7D\u81F3\u672C\u5730\uFF0C\u7136\u540E\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u8BC1\u4E66\u76EE\u5F55</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/nginx/certs

<span class="token comment"># \u62F7\u8D1D\u8BC1\u4E66\u5230 certs \u76EE\u5F55\u4E0B</span>
<span class="token function">sudo</span> <span class="token function">mv</span> ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">sudo</span> <span class="token function">unzip</span> blog.shanyuhai.top_nginx.zip
<span class="token comment"># \u4FEE\u6539\u547D\u540D</span>
<span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
<span class="token function">sudo</span> <span class="token function">mv</span> 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key
</code></pre></div><h3 id="_3-\u4FEE\u6539-conf-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539-conf-\u6587\u4EF6" aria-hidden="true">#</a> 3. \u4FEE\u6539 <code>.conf</code> \u6587\u4EF6</h3><p>\u627E\u5230\u4E4B\u524D Nginx \u5BF9\u5E94\u7684 <code>blog.shanyuhai.top</code> \u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/conf.d/blog.conf
<span class="token comment"># \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</span>
server <span class="token punctuation">{</span>
    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name blog.shanyuhai.top<span class="token punctuation">;</span>
    <span class="token comment"># \u8BC1\u4E66\u6587\u4EF6</span>
    ssl_certificate certs/blog.shanyuhai.top.pem<span class="token punctuation">;</span>
    <span class="token comment"># \u79D8\u94A5\u6587\u4EF6</span>
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

<span class="token comment"># \u63A5\u7740\u8BBF\u95EE https://blog.shanyuhai.top \u9A8C\u8BC1</span>
</code></pre></div><h3 id="_4-\u91CD\u5B9A\u5411-http-\u5230-https" tabindex="-1"><a class="header-anchor" href="#_4-\u91CD\u5B9A\u5411-http-\u5230-https" aria-hidden="true">#</a> 4. \u91CD\u5B9A\u5411 http \u5230 https</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5C06 80 \u7AEF\u53E3\u7684\u865A\u62DF\u673A\u4FEE\u6539\u4E3A\u4EE5\u4E0B\u5185\u5BB9</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  blog.shanyuhai.top<span class="token punctuation">;</span>

    access_log  /var/log/nginx/blog.access.log  main<span class="token punctuation">;</span>
    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">sudo</span> nginx -s reload <span class="token comment"># \u91CD\u542F nginx \u670D\u52A1</span>
<span class="token comment"># \u63A5\u7740\u8BBF\u95EE http://blog.shanyuhai.top \u9A8C\u8BC1</span>
</code></pre></div><h2 id="let-s-encrypt-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt-\u8BC1\u4E66" aria-hidden="true">#</a> Let&#39;s Encrypt \u8BC1\u4E66</h2><h3 id="_1-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u660E" aria-hidden="true">#</a> 1. \u8BF4\u660E</h3>`,11),_=n("Let's Encrypt \u63D0\u4F9B\u7684 "),f={href:"https://certbot.eff.org/instructions",target:"_blank",rel:"noopener noreferrer"},m=n("certbot"),x=n(" \u53EF\u4EE5\u5FEB\u901F\u751F\u6210\u8BC1\u4E66\uFF0C\u5E76\u80FD\u591F\u81EA\u52A8\u5B8C\u6210\u914D\u7F6E\u3002"),v=s("blockquote",null,[s("p",null,"\u8FD8\u539F\u963F\u91CC\u4E91\u505A\u7684\u914D\u7F6E\uFF0C\u5E76\u6253\u5F00\u7F51\u7AD9\u9A8C\u8BC1\u662F\u5426\u8FD8\u539F\u3002")],-1),y=n("\u9009\u62E9 Nginx \u548C Ubuntu 18.04 \u540E\u5C31\u4F1A\u5F39\u51FA\u5BF9\u5E94\u7684"),S={href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx",target:"_blank",rel:"noopener noreferrer"},L=n("\u5B89\u88C5\u6B65\u9AA4"),T=n("\u3002"),H=t(`<h3 id="_2-add-certbot-ppa" tabindex="-1"><a class="header-anchor" href="#_2-add-certbot-ppa" aria-hidden="true">#</a> 2. Add Certbot PPA</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common
<span class="token function">sudo</span> add-apt-repository universe
<span class="token function">sudo</span> add-apt-repository ppa:certbot/certbot
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre></div><h3 id="_3-install-certbot" tabindex="-1"><a class="header-anchor" href="#_3-install-certbot" aria-hidden="true">#</a> 3. Install Certbot</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> certbot python-certbot-nginx
</code></pre></div><h3 id="_4-get-and-install-your-certificates" tabindex="-1"><a class="header-anchor" href="#_4-get-and-install-your-certificates" aria-hidden="true">#</a> 4. Get and install your certificates</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C\u540E\u6839\u636E\u63D0\u793A\u4E00\u6B65\u6B65\u5B89\u88C5\u5373\u53EF</span>
<span class="token function">sudo</span> certbot --nginx

<span class="token function">cat</span> /etc/nginx/conf.d/blog.conf <span class="token comment"># \u67E5\u770B\u53D8\u5316</span>
<span class="token comment"># \u8BBF\u95EE https://blog.shanyuhai.top \u9A8C\u8BC1</span>
</code></pre></div><h3 id="_5-test-automatic-renewal" tabindex="-1"><a class="header-anchor" href="#_5-test-automatic-renewal" aria-hidden="true">#</a> 5. Test automatic renewal</h3><p>Let\u2019s Encrypt \u8BC1\u4E66\u7684\u6709\u6548\u671F\u4E3A 90 \u5929\uFF0C\u6240\u4EE5\u9700\u8981\u81EA\u52A8\u7EED\u8BA2\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run
</code></pre></div>`,9);function w(E,C){const a=o("OutboundLink");return i(),c(p,null,[h,s("p",null,[d,s("a",u,[g,e(a)]),k]),b,s("p",null,[_,s("a",f,[m,e(a)]),x]),v,s("p",null,[y,s("a",S,[L,e(a)]),T]),H],64)}var A=r(l,[["render",w]]);export{A as default};
