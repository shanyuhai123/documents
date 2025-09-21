import{_ as s,c as a,a as e,o as p}from"./app-BoSqM2g3.js";const t={};function l(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="nginx-的限制模块" tabindex="-1"><a class="header-anchor" href="#nginx-的限制模块"><span>Nginx 的限制模块</span></a></h1><h2 id="请求限制" tabindex="-1"><a class="header-anchor" href="#请求限制"><span>请求限制</span></a></h2><p>请求限制 <a href="https://nginx.org/en/docs/http/ngx_http_limit_req_module.html" target="_blank" rel="noopener noreferrer">limit_req_module</a> 比连接限制更优化，由于一个连接可以被多次复用。</p><h3 id="_1-limit-req-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-req-zone"><span>1. limit_req_zone</span></a></h3><p>首先需要在 <code>http</code> 作用域定义 <code>limit_req_zone</code>。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> limit_req_zone key zone=name:size rate=rate [sync]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-limit-req" tabindex="-1"><a class="header-anchor" href="#_2-limit-req"><span>2. limit_req</span></a></h3><p>再在指定的作用域启用。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> limit_req zone=name [burst=number] [nodelay | delay=number]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http, server, location</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /search/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=perip:10m rate=1r/s</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m rate=10r/s</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">limit_req</span> zone=perip burst=5 nodelay</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">limit_req</span> zone=perserver burst=10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p><code>$binary_remote_addr</code> 相对 <code>remote_addr</code> 占用的空间更少。</p><h2 id="连接限制" tabindex="-1"><a class="header-anchor" href="#连接限制"><span>连接限制</span></a></h2><p><a href="https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html" target="_blank" rel="noopener noreferrer">limit_conn_module</a> 步骤基本与请求限制一致。</p><h3 id="_1-limit-conn-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-conn-zone"><span>1. limit_conn_zone</span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> limit_conn_zone key zone=name:size</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-limit-zone" tabindex="-1"><a class="header-anchor" href="#_2-limit-zone"><span>2. limit_zone</span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> limit_zone name <span class="token variable">$variable</span> size</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=perip:10m</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">limit_conn</span> perip <span class="token number">10</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">limit_conn</span> perserver <span class="token number">100</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="访问-ip-限制" tabindex="-1"><a class="header-anchor" href="#访问-ip-限制"><span>访问 IP 限制</span></a></h2><p><a href="https://nginx.org/en/docs/http/ngx_http_access_module.html" target="_blank" rel="noopener noreferrer">access_module</a> 可用来限制访问的 IP，用法比较简单。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> allow address | CIDR | unix: | all</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http, server, location, limit_except</span>
<span class="line"></span>
<span class="line">Syntax: deny address | CIDR | unix: | all</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http, server, location, limit_except</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">location /</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">deny</span>  192.168.1.1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">allow</span> 192.168.1.0/24</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">allow</span> 10.1.1.0/16</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">allow</span> 2001:0db8::/32</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="访问-账号-限制" tabindex="-1"><a class="header-anchor" href="#访问-账号-限制"><span>访问 账号 限制</span></a></h2><p><a href="https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html" target="_blank" rel="noopener noreferrer">auth_basic_module</a> 可以为路径添加用户密码访问，可配合 IP 限制使用。</p><h3 id="_1-生成密码" tabindex="-1"><a class="header-anchor" href="#_1-生成密码"><span>1. 生成密码</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生成密码工具 htpasswd</span></span>
<span class="line"><span class="token comment"># -b 参数为 在一行输入用户名和密码，而非根据提示输入密码</span></span>
<span class="line"><span class="token comment"># -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定</span></span>
<span class="line">htpasswd <span class="token parameter variable">-bc</span> /etc/nginx/auth_conf shanyuhai <span class="token number">123</span></span>
<span class="line"><span class="token comment"># 若缺乏依赖则提示，安装即可</span></span>
<span class="line"><span class="token comment"># centos 下</span></span>
<span class="line">yum <span class="token function">install</span> httpd-tools</span>
<span class="line"><span class="token comment"># ubuntu 下</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> apache2-utils</span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> /etc/nginx/auth_conf <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-限制说明" tabindex="-1"><a class="header-anchor" href="#_2-限制说明"><span>2. 限制说明</span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> auth_basic string | <span class="token boolean">off</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> auth_basic <span class="token boolean">off</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Context:</span> http, server, location, limit_except</span>
<span class="line"></span>
<span class="line">Syntax: auth_basic_user_file file</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: http, server, location, limit_except</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">location /</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">auth_basic</span>           <span class="token string">&quot;请输入用户名、密码&quot;</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">auth_basic_user_file</span> auth_conf</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,25)])])}const o=s(t,[["render",l]]),r=JSON.parse('{"path":"/backend/nginx/limit-module.html","title":"Nginx 的限制模块","lang":"zh-CN","frontmatter":{"description":"Nginx 的限制模块"},"headers":[{"level":2,"title":"请求限制","slug":"请求限制","link":"#请求限制","children":[{"level":3,"title":"1. limit_req_zone","slug":"_1-limit-req-zone","link":"#_1-limit-req-zone","children":[]},{"level":3,"title":"2. limit_req","slug":"_2-limit-req","link":"#_2-limit-req","children":[]}]},{"level":2,"title":"连接限制","slug":"连接限制","link":"#连接限制","children":[{"level":3,"title":"1. limit_conn_zone","slug":"_1-limit-conn-zone","link":"#_1-limit-conn-zone","children":[]},{"level":3,"title":"2. limit_zone","slug":"_2-limit-zone","link":"#_2-limit-zone","children":[]}]},{"level":2,"title":"访问 IP 限制","slug":"访问-ip-限制","link":"#访问-ip-限制","children":[]},{"level":2,"title":"访问 账号 限制","slug":"访问-账号-限制","link":"#访问-账号-限制","children":[{"level":3,"title":"1. 生成密码","slug":"_1-生成密码","link":"#_1-生成密码","children":[]},{"level":3,"title":"2. 限制说明","slug":"_2-限制说明","link":"#_2-限制说明","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/limit-module.md"}');export{o as comp,r as data};
