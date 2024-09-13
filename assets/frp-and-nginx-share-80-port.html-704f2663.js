import{_ as t,M as p,p as o,q as c,R as a,t as s,N as l,a1 as r}from"./framework-e3e34937.js";const i={},u={href:"https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"};function k(d,n){const e=p("ExternalLinkIcon");return o(),c("div",null,[n[3]||(n[3]=a("h1",{id:"frp-和-nginx-共用-80-端口",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frp-和-nginx-共用-80-端口","aria-hidden":"true"},"#"),s(" FRP 和 Nginx 共用 80 端口")],-1)),a("p",null,[n[1]||(n[1]=s("虽然在 ")),a("a",u,[n[0]||(n[0]=s("FRP")),l(e)]),n[2]||(n[2]=s(" 官网中给了 web 服务配置的示例，但在实际使用中存在两个问题："))]),n[4]||(n[4]=r(`<ul><li>有时部分资源找不到，导致页面无法渲染</li><li>域名后面还带一个端口，实在有点丑</li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="_1-服务器端-frp-配置" tabindex="-1"><a class="header-anchor" href="#_1-服务器端-frp-配置" aria-hidden="true">#</a> 1. 服务器端 FRP 配置</h3><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">8080</span>
<span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">frp.xxx.com</span>
</code></pre></div><h3 id="_2-服务器端-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_2-服务器端-nginx-配置" aria-hidden="true">#</a> 2. 服务器端 Nginx 配置</h3><p>利用正则来匹配所有的 <code>frp</code> 二级域名。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># /etc/nginx/conf.d/frp.conf</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  frp.xxx.com *.frp.xxx.com</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>
  <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>              http://127.0.0.1:7000</span><span class="token punctuation">;</span>
    <span class="token comment"># 此处简写</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>        Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token comment">#error_page  404              /404.html;</span>

  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-域名解析配置" tabindex="-1"><a class="header-anchor" href="#_3-域名解析配置" aria-hidden="true">#</a> 3. 域名解析配置</h3><p>根据 Nginx 的配置添加两项：</p><ul><li><code>frp.xxx.com</code></li><li><code>*.frp.xxx.com</code></li></ul><h3 id="_4-客户端-frp-配置" tabindex="-1"><a class="header-anchor" href="#_4-客户端-frp-配置" aria-hidden="true">#</a> 4. 客户端 FRP 配置</h3><p><strong>客户端的 Nginx 配置为默认时就可以使用，此处省略。</strong></p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">xxx.xx.xx.xxx</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token comment"># [ssh] 省略</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">web1</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">http</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">80</span>
<span class="token key attr-name">subdomain</span> <span class="token punctuation">=</span> <span class="token value attr-value">sub1</span>
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>最后通过浏览器访问 <code>sub1.frp.xxx.com</code> 即可展现效果。</p>`,15))])}const m=t(i,[["render",k],["__file","frp-and-nginx-share-80-port.html.vue"]]);export{m as default};
