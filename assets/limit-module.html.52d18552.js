import{r as o,c as p,a as n,b as e,F as c,d as a,e as t,o as i}from"./app.cc89d5d0.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const r={},d=n("h2",{id:"\u8BF7\u6C42\u9650\u5236",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BF7\u6C42\u9650\u5236","aria-hidden":"true"},"#"),a(" \u8BF7\u6C42\u9650\u5236")],-1),k=a("\u8BF7\u6C42\u9650\u5236 "),u={href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},_=a("limit_req_module"),h=a(" \u6BD4\u8FDE\u63A5\u9650\u5236\u66F4\u4F18\u5316\uFF0C\u7531\u4E8E\u4E00\u4E2A\u8FDE\u63A5\u53EF\u4EE5\u88AB\u591A\u6B21\u590D\u7528\u3002"),m=t(`<h3 id="_1-limit-req-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-req-zone" aria-hidden="true">#</a> 1. limit_req_zone</h3><p>\u9996\u5148\u9700\u8981\u5728 <code>http</code> \u4F5C\u7528\u57DF\u5B9A\u4E49 <code>limit_req_zone</code>\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_req_zone key zone=name:size rate=rate [sync]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http

<span class="token comment"># Example</span>
limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-req" tabindex="-1"><a class="header-anchor" href="#_2-limit-req" aria-hidden="true">#</a> 2. limit_req</h3><p>\u518D\u5728\u6307\u5B9A\u7684\u4F5C\u7528\u57DF\u542F\u7528\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_req zone=name [burst=number] [nodelay | delay=number]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
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
</code></pre></div><p><code>$binary_remote_addr</code> \u76F8\u5BF9 <code>remote_addr</code> \u5360\u7528\u7684\u7A7A\u95F4\u66F4\u5C11\u3002</p><h2 id="\u8FDE\u63A5\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u9650\u5236" aria-hidden="true">#</a> \u8FDE\u63A5\u9650\u5236</h2>`,8),x={href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"},v=a("limit_conn_module"),g=a(" \u6B65\u9AA4\u57FA\u672C\u4E0E\u8BF7\u6C42\u9650\u5236\u4E00\u81F4\u3002"),y=t(`<h3 id="_1-limit-conn-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-conn-zone" aria-hidden="true">#</a> 1. limit_conn_zone</h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_conn_zone key zone=name:size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-zone" tabindex="-1"><a class="header-anchor" href="#_2-limit-zone" aria-hidden="true">#</a> 2. limit_zone</h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_zone name <span class="token variable">$variable</span> size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=perip:10m</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perip <span class="token number">10</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perserver <span class="token number">100</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BBF\u95EE-ip-\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE-ip-\u9650\u5236" aria-hidden="true">#</a> \u8BBF\u95EE IP \u9650\u5236</h2>`,5),b={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"},f=a("access_module"),w=a(" \u53EF\u7528\u6765\u9650\u5236\u8BBF\u95EE\u7684 IP\uFF0C\u7528\u6CD5\u6BD4\u8F83\u7B80\u5355\u3002"),z=t(`<div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	allow address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http, server, location, limit_except

Syntax:	deny address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">deny</span>  192.168.1.1</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 192.168.1.0/24</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 10.1.1.0/16</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 2001:0db8::/32</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BBF\u95EE-\u8D26\u53F7-\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE-\u8D26\u53F7-\u9650\u5236" aria-hidden="true">#</a> \u8BBF\u95EE \u8D26\u53F7 \u9650\u5236</h2>`,2),q={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"},C=a("auth_basic_module"),D=a(" \u53EF\u4EE5\u4E3A\u8DEF\u5F84\u6DFB\u52A0\u7528\u6237\u5BC6\u7801\u8BBF\u95EE\uFF0C\u53EF\u914D\u5408 IP \u9650\u5236\u4F7F\u7528\u3002"),S=t(`<h3 id="_1-\u751F\u6210\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_1-\u751F\u6210\u5BC6\u7801" aria-hidden="true">#</a> 1. \u751F\u6210\u5BC6\u7801</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u5BC6\u7801\u5DE5\u5177 htpasswd</span>
<span class="token comment"># -b \u53C2\u6570\u4E3A \u5728\u4E00\u884C\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u800C\u975E\u6839\u636E\u63D0\u793A\u8F93\u5165\u5BC6\u7801</span>
<span class="token comment"># -c \u53C2\u6570\u4E3A \u521B\u5EFA\u4E00\u4E2A\u52A0\u5BC6\u6587\u4EF6(\u6CE8\u610F\u5DF2\u6709\u5219\u8986\u76D6)\uFF0C\u5373\u589E\u52A0\u7528\u6237\u65F6\u65E0\u9700\u6307\u5B9A</span>
htpasswd -bc /etc/nginx/auth_conf shanyuhai <span class="token number">123</span>
<span class="token comment"># \u82E5\u7F3A\u4E4F\u4F9D\u8D56\u5219\u63D0\u793A\uFF0C\u5B89\u88C5\u5373\u53EF</span>
<span class="token comment"># centos \u4E0B</span>
yum <span class="token function">install</span> httpd-tools
<span class="token comment"># ubuntu \u4E0B</span>
<span class="token function">apt</span> <span class="token function">install</span> apache2-utils

<span class="token function">cat</span> /etc/nginx/auth_conf <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h3 id="_2-\u9650\u5236\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u9650\u5236\u8BF4\u660E" aria-hidden="true">#</a> 2. \u9650\u5236\u8BF4\u660E</h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	auth_basic string | <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> auth_basic <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Context:</span> http, server, location, limit_except

Syntax:	auth_basic_user_file file</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">auth_basic</span>           <span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801&quot;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">auth_basic_user_file</span> auth_conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function $(E,I){const s=o("OutboundLink");return i(),p(c,null,[d,n("p",null,[k,n("a",u,[_,e(s)]),h]),m,n("p",null,[n("a",x,[v,e(s)]),g]),y,n("p",null,[n("a",b,[f,e(s)]),w]),z,n("p",null,[n("a",q,[C,e(s)]),D]),S],64)}var B=l(r,[["render",$]]);export{B as default};
