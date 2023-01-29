import{_ as c,M as t,p,q as r,Q as s,t as n,N as e,V as i,a1 as l}from"./framework-49860b1b.js";const d={},k=s("h1",{id:"websocket-反向代理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#websocket-反向代理","aria-hidden":"true"},"#"),n(" websocket 反向代理")],-1),u={id:"config",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1),_={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},g=l(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf

<span class="token comment"># 修改为以下内容</span>
server</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>
  <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

nginx -s reload <span class="token comment"># 重载配置</span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>`,2),x={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"ws://echo.websocket.org",-1),w=s("code",null,"ws://nginx.example.com/chat/",-1);function v(f,b){const o=t("RouterLink"),a=t("ExternalLinkIcon");return p(),r("div",null,[k,s("p",null,[n("在理解"),e(o,{to:"/backend/nginx/nginx-upstream.html"},{default:i(()=>[n("反向代理与负载均衡")]),_:1}),n("后就可以快速实现 websocket 的反向代理。")]),s("h2",u,[h,n(),s("a",_,[n("config"),e(a)])]),g,s("p",null,[n("接着在"),s("a",x,[n("测试页面"),e(a)]),n("将 Location 中的 "),m,n(" 替换为目标地址 "),w,n(" （需要修改本地 DNS），Connect 成功即为成功。")])])}const N=c(d,[["render",v],["__file","websocket-proxy.html.vue"]]);export{N as default};
