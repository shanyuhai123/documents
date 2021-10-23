import{r as n,c as s,a,b as e,w as t,F as o,d as p,e as c,o as r}from"./app.9446fd06.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const l={},k=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),p(" 介绍")],-1),d=p("在理解"),u=p("反向代理与负载均衡"),g=p("后就可以快速实现 websocket 的反向代理。"),h={id:"config",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1),m=p(),w={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},v=p("config"),f=c('<div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf\n\n<span class="token comment"># 修改为以下内容</span>\nserver</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span>\n\n    <span class="token comment">#charset koi8-r;</span>\n    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nnginx -s reload <span class="token comment"># 重载配置</span>\n</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>',2),b=p("接着在"),_={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"},y=p("测试页面"),L=p("将 Location 中的 "),j=a("code",null,"ws://echo.websocket.org",-1),q=p(" 替换为目标地址 "),C=a("code",null,"ws://nginx.example.com/chat/",-1),D=p(" （需要修改本地 DNS），Connect 成功即为成功。");var F=i(l,[["render",function(p,c){const i=n("RouterLink"),l=n("OutboundLink");return r(),s(o,null,[k,a("p",null,[d,e(i,{to:"/backend/nginx/nginx-upstream.html"},{default:t((()=>[u])),_:1}),g]),a("h2",h,[x,m,a("a",w,[v,e(l)])]),f,a("p",null,[b,a("a",_,[y,e(l)]),L,j,q,C,D])],64)}]]);export{F as default};
