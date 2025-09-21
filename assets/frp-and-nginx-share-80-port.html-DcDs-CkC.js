import{_ as s,c as a,a as e,o as p}from"./app-DLCc4AGN.js";const t={};function l(c,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="frp-和-nginx-共用-80-端口" tabindex="-1"><a class="header-anchor" href="#frp-和-nginx-共用-80-端口"><span>FRP 和 Nginx 共用 80 端口</span></a></h1><p>虽然在 <a href="https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1" target="_blank" rel="noopener noreferrer">FRP</a> 官网中给了 web 服务配置的示例，但在实际使用中存在两个问题：</p><ul><li>有时部分资源找不到，导致页面无法渲染</li><li>域名后面还带一个端口，实在有点丑</li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="_1-服务器端-frp-配置" tabindex="-1"><a class="header-anchor" href="#_1-服务器端-frp-配置"><span>1. 服务器端 FRP 配置</span></a></h3><div class="language-ini" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span></span>
<span class="line"><span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">8080</span></span>
<span class="line"><span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">frp.xxx.com</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-服务器端-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_2-服务器端-nginx-配置"><span>2. 服务器端 Nginx 配置</span></a></h3><p>利用正则来匹配所有的 <code>frp</code> 二级域名。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token comment"># /etc/nginx/conf.d/frp.conf</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span>  frp.xxx.com *.frp.xxx.com</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">#charset koi8-r;</span></span>
<span class="line">  <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span>              http://127.0.0.1:7000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 此处简写</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span>        Host <span class="token variable">$host</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token comment">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-域名解析配置" tabindex="-1"><a class="header-anchor" href="#_3-域名解析配置"><span>3. 域名解析配置</span></a></h3><p>根据 Nginx 的配置添加两项：</p><ul><li><code>frp.xxx.com</code></li><li><code>*.frp.xxx.com</code></li></ul><h3 id="_4-客户端-frp-配置" tabindex="-1"><a class="header-anchor" href="#_4-客户端-frp-配置"><span>4. 客户端 FRP 配置</span></a></h3><p><strong>客户端的 Nginx 配置为默认时就可以使用，此处省略。</strong></p><div class="language-ini" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">xxx.xx.xx.xxx</span></span>
<span class="line"><span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># [ssh] 省略</span></span>
<span class="line"></span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">web1</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">http</span></span>
<span class="line"><span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span></span>
<span class="line"><span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">80</span></span>
<span class="line"><span class="token key attr-name">subdomain</span> <span class="token punctuation">=</span> <span class="token value attr-value">sub1</span></span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>最后通过浏览器访问 <code>sub1.frp.xxx.com</code> 即可展现效果。</p>`,17)])])}const i=s(t,[["render",l]]),r=JSON.parse('{"path":"/os/ubuntu/frp-and-nginx-share-80-port.html","title":"FRP 和 Nginx 共用 80 端口","lang":"zh-CN","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"1. 服务器端 FRP 配置","slug":"_1-服务器端-frp-配置","link":"#_1-服务器端-frp-配置","children":[]},{"level":3,"title":"2. 服务器端 Nginx 配置","slug":"_2-服务器端-nginx-配置","link":"#_2-服务器端-nginx-配置","children":[]},{"level":3,"title":"3. 域名解析配置","slug":"_3-域名解析配置","link":"#_3-域名解析配置","children":[]},{"level":3,"title":"4. 客户端 FRP 配置","slug":"_4-客户端-frp-配置","link":"#_4-客户端-frp-配置","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"updatedTime":1637399796000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/ubuntu/frp-and-nginx-share-80-port.md"}');export{i as comp,r as data};
