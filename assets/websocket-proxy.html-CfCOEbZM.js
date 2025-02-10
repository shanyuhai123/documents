import{_ as t,c as p,b as s,a as o,d as a,e as c,f as l,r as i,o as r}from"./app-DNXRdI82.js";const k={};function d(u,n){const e=i("RouteLink");return r(),p("div",null,[n[3]||(n[3]=s("h1",{id:"websocket-反向代理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#websocket-反向代理"},[s("span",null,"websocket 反向代理")])],-1)),s("p",null,[n[1]||(n[1]=a("在理解")),c(e,{to:"/backend/nginx/nginx-upstream.html"},{default:l(()=>n[0]||(n[0]=[a("反向代理与负载均衡")])),_:1}),n[2]||(n[2]=a("后就可以快速实现 websocket 的反向代理。"))]),n[4]||(n[4]=o(`<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span><a href="http://nginx.org/en/docs/http/websocket.html" target="_blank" rel="noopener noreferrer">config</a></span></a></h2><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改为以下内容</span></span>
<span class="line">server</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">#charset koi8-r;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">nginx -s reload <span class="token comment"># 重载配置</span></span>
<span class="line"></span></code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test"><span>test</span></a></h2><p>接着在<a href="http://www.websocket.org/echo.html" target="_blank" rel="noopener noreferrer">测试页面</a>将 Location 中的 <code>ws://echo.websocket.org</code> 替换为目标地址 <code>ws://nginx.example.com/chat/</code> （需要修改本地 DNS），Connect 成功即为成功。</p>`,4))])}const h=t(k,[["render",d],["__file","websocket-proxy.html.vue"]]),m=JSON.parse('{"path":"/backend/nginx/websocket-proxy.html","title":"websocket 反向代理","lang":"zh-CN","frontmatter":{"description":"websocket 反向代理"},"headers":[{"level":2,"title":"config","slug":"config","link":"#config","children":[]},{"level":2,"title":"test","slug":"test","link":"#test","children":[]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":4,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/websocket-proxy.md"}');export{h as comp,m as data};
