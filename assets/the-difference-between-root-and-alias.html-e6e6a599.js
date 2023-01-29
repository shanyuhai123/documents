import{_ as d,M as a,p as r,q as p,Q as t,t as n,N as s,V as l,a1 as e}from"./framework-49860b1b.js";const i={},u=t("h1",{id:"root-与-alias-区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#root-与-alias-区别","aria-hidden":"true"},"#"),n(" root 与 alias 区别")],-1),k=t("h2",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),h={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。</p><blockquote><p>待如今了解到 <code>$request_filename</code> 后发现与想法一致。</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># alias</span>
<span class="token directive"><span class="token keyword">Syntax:</span> alias path</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: location

<span class="token comment"># root</span>
Syntax: root path</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> root html</span><span class="token punctuation">;</span>
Context: http, server, location, if in location
</code></pre></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>`,4),m=e(`<table><thead><tr><th style="text-align:center;">directives</th><th>difference</th></tr></thead><tbody><tr><td style="text-align:center;">root</td><td>将完整的 url 映射到文件路径。</td></tr><tr><td style="text-align:center;">alias</td><td>将 location 后的 url 映射到文件路径。</td></tr></tbody></table><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /root</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /alias</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token directive"><span class="token keyword">location</span> /root/dir/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /alias/dir/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token directive"><span class="token keyword">location</span> ~* /root(\\d+\\.txt)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">location</span> ~* /alias(\\d+\\.txt)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl($request)</th><th>$request_filename</th></tr></thead><tbody><tr><td><code>/root</code></td><td><code>/usr/share/nginx/html/root</code></td></tr><tr><td><code>/root/index.html</code></td><td><code>usr/share/nginx/html/root/index.html</code></td></tr><tr><td><code>/alias</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/index.html</code></td><td><code>/usr/share/nginx/html/index.html</code></td></tr><tr><td><code>/root/dir/</code></td><td><code>/usr/share/nginx/html/root/dir/</code></td></tr><tr><td><code>/root/dir/index.html</code></td><td><code>/usr/share/nginx/html/root/dir/index.html</code></td></tr><tr><td><code>/alias/dir/</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/dir/index.html</code></td><td><code>/usr/share/nginx/htmlindex.html</code></td></tr><tr><td><code>/root/123456.txt</code></td><td><code>/usr/share/nginx/html/root/123456.txt</code></td></tr><tr><td><code>/alias/123456.txt</code></td><td><code>/usr/share/nginx/html/123456.txt</code></td></tr><tr><td><code>/alias123456.txt</code></td><td><code>/usr&lt;br/&gt;/share/nginx/html/123456.txt</code></td></tr></tbody></table><p>当使用 <code>alias</code> 且 <code>location</code> 以 <code>/</code> 结尾时需注意 <code>/</code> 被废弃，与 <code>proxy_pass</code> 中情况一致。</p>`,4);function g(_,v){const o=a("ExternalLinkIcon"),c=a("RouterLink");return r(),p("div",null,[u,k,t("p",null,[n("alias 与 "),t("a",h,[n("root"),s(o)]),n(" 有相似的用法，主要是介绍他们之间的区别。")]),x,t("p",null,[n("此中区别与 "),s(c,{to:"/backend/nginx/proxy-pass-rules.html"},{default:l(()=>[n("proxy_pass")]),_:1}),n(" 相似。")]),m])}const f=d(i,[["render",g],["__file","the-difference-between-root-and-alias.html.vue"]]);export{f as default};
