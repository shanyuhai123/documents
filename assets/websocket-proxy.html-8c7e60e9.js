import{_ as r,M as o,p as i,q as l,R as e,t as s,N as a,V as c,a1 as k}from"./framework-e3e34937.js";const d={},u={id:"config",tabindex:"-1"},g={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"};function m(w,n){const p=o("RouterLink"),t=o("ExternalLinkIcon");return i(),l("div",null,[n[13]||(n[13]=e("h1",{id:"websocket-反向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#websocket-反向代理","aria-hidden":"true"},"#"),s(" websocket 反向代理")],-1)),e("p",null,[n[1]||(n[1]=s("在理解")),a(p,{to:"/backend/nginx/nginx-upstream.html"},{default:c(()=>n[0]||(n[0]=[s("反向代理与负载均衡")])),_:1}),n[2]||(n[2]=s("后就可以快速实现 websocket 的反向代理。"))]),e("h2",u,[n[4]||(n[4]=e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1)),n[5]||(n[5]=s()),e("a",g,[n[3]||(n[3]=s("config")),a(t)])]),n[14]||(n[14]=k(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf

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
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>`,2)),e("p",null,[n[7]||(n[7]=s("接着在")),e("a",x,[n[6]||(n[6]=s("测试页面")),a(t)]),n[8]||(n[8]=s("将 Location 中的 ")),n[9]||(n[9]=e("code",null,"ws://echo.websocket.org",-1)),n[10]||(n[10]=s(" 替换为目标地址 ")),n[11]||(n[11]=e("code",null,"ws://nginx.example.com/chat/",-1)),n[12]||(n[12]=s(" （需要修改本地 DNS），Connect 成功即为成功。"))])])}const f=r(d,[["render",m],["__file","websocket-proxy.html.vue"]]);export{f as default};
