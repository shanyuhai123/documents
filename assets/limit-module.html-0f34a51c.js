import{_ as p,M as i,p as l,q as r,R as a,t as s,N as t,a1 as o}from"./framework-e3e34937.js";const c={},d={href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"};function _(h,n){const e=i("ExternalLinkIcon");return l(),r("div",null,[n[9]||(n[9]=a("h1",{id:"nginx-的限制模块",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nginx-的限制模块","aria-hidden":"true"},"#"),s(" Nginx 的限制模块")],-1)),n[10]||(n[10]=a("h2",{id:"请求限制",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#请求限制","aria-hidden":"true"},"#"),s(" 请求限制")],-1)),a("p",null,[n[1]||(n[1]=s("请求限制 ")),a("a",d,[n[0]||(n[0]=s("limit_req_module")),t(e)]),n[2]||(n[2]=s(" 比连接限制更优化，由于一个连接可以被多次复用。"))]),n[11]||(n[11]=o(`<h3 id="_1-limit-req-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-req-zone" aria-hidden="true">#</a> 1. limit_req_zone</h3><p>首先需要在 <code>http</code> 作用域定义 <code>limit_req_zone</code>。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> limit_req_zone key zone=name:size rate=rate [sync]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-req" tabindex="-1"><a class="header-anchor" href="#_2-limit-req" aria-hidden="true">#</a> 2. limit_req</h3><p>再在指定的作用域启用。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> limit_req zone=name [burst=number] [nodelay | delay=number]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location

<span class="token comment"># Example</span>
limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">location</span> /search/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=perip:10m rate=1r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m rate=10r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=perip burst=5 nodelay</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=perserver burst=10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>$binary_remote_addr</code> 相对 <code>remote_addr</code> 占用的空间更少。</p><h2 id="连接限制" tabindex="-1"><a class="header-anchor" href="#连接限制" aria-hidden="true">#</a> 连接限制</h2>`,8)),a("p",null,[a("a",k,[n[3]||(n[3]=s("limit_conn_module")),t(e)]),n[4]||(n[4]=s(" 步骤基本与请求限制一致。"))]),n[12]||(n[12]=o(`<h3 id="_1-limit-conn-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-conn-zone" aria-hidden="true">#</a> 1. limit_conn_zone</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> limit_conn_zone key zone=name:size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-zone" tabindex="-1"><a class="header-anchor" href="#_2-limit-zone" aria-hidden="true">#</a> 2. limit_zone</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> limit_zone name <span class="token variable">$variable</span> size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=perip:10m</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perip <span class="token number">10</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perserver <span class="token number">100</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="访问-ip-限制" tabindex="-1"><a class="header-anchor" href="#访问-ip-限制" aria-hidden="true">#</a> 访问 IP 限制</h2>`,5)),a("p",null,[a("a",u,[n[5]||(n[5]=s("access_module")),t(e)]),n[6]||(n[6]=s(" 可用来限制访问的 IP，用法比较简单。"))]),n[13]||(n[13]=o(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> allow address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

Syntax: deny address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">deny</span>  192.168.1.1</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 192.168.1.0/24</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 10.1.1.0/16</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 2001:0db8::/32</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="访问-账号-限制" tabindex="-1"><a class="header-anchor" href="#访问-账号-限制" aria-hidden="true">#</a> 访问 账号 限制</h2>`,2)),a("p",null,[a("a",m,[n[7]||(n[7]=s("auth_basic_module")),t(e)]),n[8]||(n[8]=s(" 可以为路径添加用户密码访问，可配合 IP 限制使用。"))]),n[14]||(n[14]=o(`<h3 id="_1-生成密码" tabindex="-1"><a class="header-anchor" href="#_1-生成密码" aria-hidden="true">#</a> 1. 生成密码</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成密码工具 htpasswd</span>
<span class="token comment"># -b 参数为 在一行输入用户名和密码，而非根据提示输入密码</span>
<span class="token comment"># -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定</span>
htpasswd <span class="token parameter variable">-bc</span> /etc/nginx/auth_conf shanyuhai <span class="token number">123</span>
<span class="token comment"># 若缺乏依赖则提示，安装即可</span>
<span class="token comment"># centos 下</span>
yum <span class="token function">install</span> httpd-tools
<span class="token comment"># ubuntu 下</span>
<span class="token function">apt</span> <span class="token function">install</span> apache2-utils

<span class="token function">cat</span> /etc/nginx/auth_conf <span class="token comment"># 验证</span>
</code></pre></div><h3 id="_2-限制说明" tabindex="-1"><a class="header-anchor" href="#_2-限制说明" aria-hidden="true">#</a> 2. 限制说明</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> auth_basic string | <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> auth_basic <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Context:</span> http, server, location, limit_except

Syntax: auth_basic_user_file file</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">auth_basic</span>           <span class="token string">&quot;请输入用户名、密码&quot;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">auth_basic_user_file</span> auth_conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4))])}const v=p(c,[["render",_],["__file","limit-module.html.vue"]]);export{v as default};
