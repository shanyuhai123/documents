import{r as n,c as t,a as s,b as a,w as e,F as o,d as c,e as d,o as r}from"./app.76078c72.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const l={},i=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),c(" 前言")],-1),u=c("alias 与 "),k={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"},h=c("root"),x=c(" 有相似的用法，主要是介绍他们之间的区别。"),g=d('<p>其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。</p><blockquote><p>待如今了解到 <code>$request_filename</code> 后发现与想法一致。</p></blockquote><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token comment"># alias</span>\n<span class="token directive"><span class="token keyword">Syntax:</span>\talias path</span><span class="token punctuation">;</span>\n<span class="token directive"><span class="token keyword">Default:</span> —\nContext: location\n\n<span class="token comment"># root</span>\nSyntax:\troot path</span><span class="token punctuation">;</span>\n<span class="token directive"><span class="token keyword">Default:</span> root html</span><span class="token punctuation">;</span>\nContext: http, server, location, if in location\n</code></pre></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>',4),m=c("此中区别与 "),v=c("proxy_pass"),y=c(" 相似。"),b=d('<table><thead><tr><th style="text-align:center;">directives</th><th>difference</th></tr></thead><tbody><tr><td style="text-align:center;">root</td><td>将完整的 url 映射到文件路径。</td></tr><tr><td style="text-align:center;">alias</td><td>将 location 后的 url 映射到文件路径。</td></tr></tbody></table><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /root</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /alias</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token directive"><span class="token keyword">location</span> /root/dir/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /alias/dir/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token directive"><span class="token keyword">location</span> ~* /root(\\d+\\.txt)</span> <span class="token punctuation">{</span>\n      <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token directive"><span class="token keyword">location</span> ~* /alias(\\d+\\.txt)</span> <span class="token punctuation">{</span>\n      <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><table><thead><tr><th>curl($request)</th><th>$request_filename</th></tr></thead><tbody><tr><td><code>/root</code></td><td><code>/usr/share/nginx/html/root</code></td></tr><tr><td><code>/root/index.html</code></td><td><code>usr/share/nginx/html/root/index.html</code></td></tr><tr><td><code>/alias</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/index.html</code></td><td><code>/usr/share/nginx/html/index.html</code></td></tr><tr><td><code>/root/dir/</code></td><td><code>/usr/share/nginx/html/root/dir/</code></td></tr><tr><td><code>/root/dir/index.html</code></td><td><code>/usr/share/nginx/html/root/dir/index.html</code></td></tr><tr><td><code>/alias/dir/</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/dir/index.html</code></td><td><code>/usr/share/nginx/htmlindex.html</code></td></tr><tr><td><code>/root/123456.txt</code></td><td><code>/usr/share/nginx/html/root/123456.txt</code></td></tr><tr><td><code>/alias/123456.txt</code></td><td><code>/usr/share/nginx/html/123456.txt</code></td></tr><tr><td><code>/alias123456.txt</code></td><td><code>/usr&lt;br/&gt;/share/nginx/html/123456.txt</code></td></tr></tbody></table><p>当使用 <code>alias</code> 且 <code>location</code> 以 <code>/</code> 结尾时需注意 <code>/</code> 被废弃，与 <code>proxy_pass</code> 中情况一致。</p>',4);var w=p(l,[["render",function(c,d){const p=n("OutboundLink"),l=n("RouterLink");return r(),t(o,null,[i,s("p",null,[u,s("a",k,[h,a(p)]),x]),g,s("p",null,[m,a(l,{to:"/backend/nginx/proxy-pass-rules.html"},{default:e((()=>[v])),_:1}),y]),b],64)}]]);export{w as default};
