import{r as o,c,a as s,b as a,w as r,F as i,d as n,e as t,o as l}from"./app.512cf885.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const u={},h=s("h1",{id:"nginx-\u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nginx-\u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861","aria-hidden":"true"},"#"),n(" Nginx \u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861")],-1),k=n("\u53CD\u5411\u4EE3\u7406\u4E3B\u8981\u662F\u5229\u7528 "),_={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html",target:"_blank",rel:"noopener noreferrer"},m=n("upstream"),g=n("\u3001server \u6A21\u5757\u6307\u5B9A\u4E0A\u6E38\u670D\u52A1\u5730\u5740\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF0C\u5F53\u7136\u53CD\u5411\u4EE3\u7406\u662F\u524D\u7F6E\u6761\u4EF6\u3002"),x=t('<p>\u6307\u5B9A\u7684\u4E0A\u6E38\u670D\u52A1\u5668\u5730\u5740\u4E2D\uFF0C\u5730\u5740\u53EF\u4EE5\u662F\u57DF\u540D\u3001IP \u5730\u5740\u6216 unix socket \u5730\u5740\u3002</p><h2 id="server-parameters" tabindex="-1"><a class="header-anchor" href="#server-parameters" aria-hidden="true">#</a> server parameters</h2><table><thead><tr><th style="text-align:center;">parameters</th><th style="text-align:center;">type</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td style="text-align:center;">weight</td><td style="text-align:center;">number</td><td>\u8D1F\u8F7D\u5747\u8861\u65F6\u7684\u6743\u91CD\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002</td></tr><tr><td style="text-align:center;">max_conns</td><td style="text-align:center;">number</td><td>\u9650\u5236\u540C\u65F6\u6D3B\u52A8\u7684\u6700\u5927\u94FE\u63A5\u6570\u91CF\uFF08\u5373\u6700\u5927\u5E76\u53D1 \u6570\uFF09\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u8868\u793A\u4E0D\u9650\u5236\u3002</td></tr><tr><td style="text-align:center;">max_fails</td><td style="text-align:center;">number</td><td>\u5141\u8BB8\u8BF7\u6C42\u5931\u8D25\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002</td></tr><tr><td style="text-align:center;">fail_timeout</td><td style="text-align:center;">number</td><td>\u5728\u7ECF\u5386\u4E86 max_fails \u6B21\u5931\u8D25\u540E\uFF0C\u6682\u505C\u670D\u52A1\u7684\u65F6\u95F4\u3002</td></tr><tr><td style="text-align:center;">backup</td><td style="text-align:center;"></td><td>\u6307\u5B9A\u5F53\u524D server \u4E3A\u5907\u4EFD\u670D\u52A1\u5668\uFF0C\u4EC5\u5F53\u975E\u5907\u4EFD\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\u624D\u542F\u7528\u3002</td></tr><tr><td style="text-align:center;">down</td><td style="text-align:center;"></td><td>\u5C06\u670D\u52A1\u5668\u6807\u8BB0\u4E3A\u6C38\u4E45\u4E0D\u53EF\u7528\u3002</td></tr></tbody></table><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2>',4),b=n("\u5728\u4E4B\u524D\u7684"),v=n("\u57FA\u7840"),f=n("\u4E0A\u65B0\u589E\u4E09\u53F0 server \u865A\u62DF\u673A\u3002"),y=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/default.conf
<span class="token comment"># \u6B64\u5904\u5077\u61D2\u5168\u90E8 server \u5199\u5728 default.conf \u4E2D\uFF0C\u66F4\u597D\u7684\u5F62\u5F0F\u662F\u65B0\u5EFA\u4E24\u4E2A \`.conf\` \u6587\u4EF6\uFF0C\u66F4\u66F4\u597D\u7684\u5F62\u5F0F\u5F53\u7136\u662F\u65B0\u5EFA\u4E24\u53F0\u865A\u62DF\u673A\uFF0C\u7136\u540E\u4FEE\u6539 &quot;DNS&quot;</span>
<span class="token comment"># \u4FEE\u6539\u4E3A\u5982\u4E0B\u5185\u5BB9</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">8081</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8081\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">8082</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8082\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">8083</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8083\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

upstream backend <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.1:8081 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.1:8082<span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.1:8083 backup<span class="token punctuation">;</span>
    keepalive <span class="token number">32</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    access_log  /var/log/nginx/nginx.access.log  main<span class="token punctuation">;</span>
    error_log  /var/log/nginx/nginx.error.log warn<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_pass backend<span class="token punctuation">;</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        proxy_connect_timeout 1s<span class="token punctuation">;</span>
        proxy_next_upstream error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

nginx -s reload <span class="token comment"># \u91CD\u8F7D\u914D\u7F6E</span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2><p>\u7B80\u5355\u7684\u91CD\u590D\u6D4B\u8BD5\uFF0C\u67E5\u770B\u8D1F\u8F7D\u5747\u8861\u60C5\u51B5\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -i nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8081</span>

<span class="token function">curl</span> -i nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8081</span>

<span class="token function">curl</span> -i nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8082</span>

<span class="token comment"># \u6301\u7EED\u591A\u6B21\u7ED3\u679C\u6309\u7167\u4EE5\u4E0A\u5FAA\u73AF\u51FA\u73B0</span>
</code></pre></div><h2 id="load-balancing-methods" tabindex="-1"><a class="header-anchor" href="#load-balancing-methods" aria-hidden="true">#</a> load balancing methods</h2><p>Nginx \u8D1F\u8F7D\u5747\u8861\u6709\u5F88\u591A\u7B56\u7565\uFF0C\u4E0A\u9762\u793A\u4F8B\u662F\u9ED8\u8BA4\u7684 round-robin \u7B97\u6CD5\uFF08\u4E5F\u5C31\u662F\u57FA\u4E8E weight \u6743\u91CD\uFF09\u3002</p>`,6),w={id:"_1-ip-hash-\u7B97\u6CD5",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#_1-ip-hash-\u7B97\u6CD5","aria-hidden":"true"},"#",-1),R=n(" 1. "),N={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ip_hash",target:"_blank",rel:"noopener noreferrer"},U=n("ip-hash"),P=n(" \u7B97\u6CD5"),T=t(`<p>\u6839\u636E\u7528\u6237\u7684 IP \u5730\u5740\u4F5C\u4E3A hash \u7B97\u6CD5\uFF08IPv4\u3001IPv6 \u7B56\u7565\u4E0D\u540C\uFF09\u7684\u5173\u952E\u5B57\uFF0C\u5728\u670D\u52A1\u5668\u4E4B\u95F4\u5206\u914D\u8BF7\u6C42\u3002\u8BE5\u65B9\u6CD5\u786E\u4FDD\u4E86\u6765\u81EA\u7EDF\u4E00\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5C06\u59CB\u7EC8\u4F20\u9012\u5230\u540C\u4E00\u53F0\u670D\u52A1\u5668\u3002</p><p>\u5728\u6307\u5B9A <code>ip_hash</code> \u7B97\u6CD5\u540E\u6743\u91CD\u4E0D\u518D\u751F\u6548\uFF1F\uFF08\u4E0D\u540C\u7248\u672C Nginx \u7ED3\u679C\u4F1A \u4E0D\u4E00\u81F4\uFF09\uFF0C\u540C\u7406 <code>backup</code> \u53C2\u6570\u540C\u6837\u4E0D\u53EF\u7528\u3002</p><p>\u542F\u7528\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span> backend1.example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend2.example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend3.example.com down</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend4.example.com</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),q={id:"_2-hash-\u7B97\u6CD5",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#_2-hash-\u7B97\u6CD5","aria-hidden":"true"},"#",-1),O=n(" 2. "),L={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash",target:"_blank",rel:"noopener noreferrer"},V=n("hash"),C=n(" \u7B97\u6CD5"),H=t(`<p>\u76F8\u5BF9\u4E8E <code>ip_hash</code> \u4E0D\u518D\u5C40\u9650\u4E8E <code>$remote_addr</code>\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5173\u952E\u5B57\uFF08\u5176\u4F59\u7684\u53D8\u91CF\u751A\u81F3\u5B57\u7B26\u4E32\uFF09\u6765\u5F62\u6210 hash\u3002</p><blockquote><p>\u5728\u4E4B\u524D\u4E86\u89E3\u5230 <code>split_client</code> \u53EF\u4EE5\u7528\u4E8E\u5904\u7406 AB \u6D4B\u8BD5\uFF0C\u4F46\u662F\u7591\u60D1\u7684\u662F\u65E0\u6CD5\u6307\u5B9A\u67D0\u4E00\u6279\u7528\u6237\uFF0C\u90A3\u4E48\u914D\u5408\u4E0A hash \u7B97\u6CD5\u80FD\u5426\u5B9E\u73B0\u66F4\u597D\u7684 AB \u6D4B\u8BD5\u5462\u3002</p></blockquote><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> hash key [consistent]</span><span class="token punctuation">;</span>
<span class="token comment"># \u5982\u679C consistent \u6307\u5B9A\u4E86\u53C2\u6570\uFF0C\u5219\u5C06\u4F7F\u7528 ketama \u4E00\u81F4\u6027\u54C8\u5E0C\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u53EF\u786E\u4FDD\u5728\u5C06\u670D\u52A1\u5668\u6DFB\u52A0\u5230\u7EC4\u4E2D\u6216\u4ECE\u7EC4\u4E2D\u5220\u9664\u670D\u52A1\u5668\u65F6\uFF0C\u53EA\u6709\u5F88\u5C11\u7684\u952E\u5C06\u88AB\u91CD\u65B0\u6620\u5C04\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u3002\u8FD9\u6709\u52A9\u4E8E\u4E3A\u7F13\u5B58\u670D\u52A1\u5668\u83B7\u5F97\u66F4\u9AD8\u7684\u7F13\u5B58\u547D\u4E2D\u7387\u3002</span>
</code></pre></div><h2 id="upstream-module-directives" tabindex="-1"><a class="header-anchor" href="#upstream-module-directives" aria-hidden="true">#</a> upstream module directives</h2>`,4),K={id:"_1-proxy-pass",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#_1-proxy-pass","aria-hidden":"true"},"#",-1),j=n(" 1. "),A={href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass",target:"_blank",rel:"noopener noreferrer"},F=n("proxy_pass"),D=t("<p><code>proxy_pass</code> \u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u7684\u534F\u8BAE\u548C\u5730\u5740\uFF0C\u4EE5\u53CA\u5E94\u5C06\u4F4D\u7F6E\u6620\u5C04\u5230\u7684\u53EF\u9009\u7684 URI\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F <code>proxy_pass</code> \u5FC5\u987B\u4EE5 <code>http://</code> \u6216 <code>https://</code> \u5F00\u5934\u3002</p><p>URI \u4F1A\u5BFC\u81F4\u7C7B\u4F3C alias \u7684\u6548\u679C\uFF0C\u4E0D\u518D\u662F\u5B8C\u6574\u8F6C\u53D1\u4E86\u3002\u6240\u4EE5\u4E0D\u643A\u5E26 URI\uFF0C\u5219\u5C06\u8BF7\u6C42 URI \u4EE5\u539F\u59CB\u8BF7\u6C42\u5904\u7406\u65F6\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u683C\u5F0F\u4F20\u9012\u5230\u670D\u52A1\u5668\uFF1B\u643A\u5E26 URI \u5219\u4F1A\u5BFC\u81F4\u539F\u59CB\u8BF7\u6C42URI \u7684\u4E00\u90E8\u5206\u5C06\u88AB <code>proxy_pass</code> \u4E2D\u6307\u5B9A\u7684 URI \u4EE3\u66FF\u3002</p>",3);function E($,z){const e=o("OutboundLink"),p=o("RouterLink");return l(),c(i,null,[h,s("p",null,[k,s("a",_,[m,a(e)]),g]),x,s("p",null,[b,a(p,{to:"/backend/nginx/nginx-directives.html#alias"},{default:r(()=>[v]),_:1}),f]),y,s("h3",w,[I,R,s("a",N,[U,a(e)]),P]),T,s("h3",q,[B,O,s("a",L,[V,a(e)]),C]),H,s("h3",K,[S,j,s("a",A,[F,a(e)])]),D],64)}var M=d(u,[["render",E]]);export{M as default};
