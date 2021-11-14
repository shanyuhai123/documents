import{r as s,c as d,a as t,b as a,w as r,F as p,d as n,e,o as i}from"./app.b0eba55d.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const u={},k=t("h2",{id:"\u524D\u8A00",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),n(" \u524D\u8A00")],-1),h=n("alias \u4E0E "),x={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"},m=n("root"),_=n(" \u6709\u76F8\u4F3C\u7684\u7528\u6CD5\uFF0C\u4E3B\u8981\u662F\u4ECB\u7ECD\u4ED6\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u3002"),g=e(`<p>\u5176\u5B9E\u5728\u4E86\u89E3\u8FD9\u4E2A\u7684\u65F6\u5019\uFF0C\u7A81\u7136\u5C31\u60F3\u8D77 \u201DLinux \u4E2D\u4E00\u5207\u7686\u6587\u4EF6\u201C \u7684\u6982\u5FF5\uFF08\u53EF\u80FD\u6709\u4E9B\u7275\u5F3A\uFF09\uFF0Calias\uFF08root\uFF09\u7684\u4F5C\u7528\u5373\u5C06 URL \u6620\u5C04\u4E3A\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7136\u540E\u8FD4\u56DE\u5BF9\u5E94\u7684\u9759\u6001\u6587\u4EF6\u3002</p><blockquote><p>\u5F85\u5982\u4ECA\u4E86\u89E3\u5230 <code>$request_filename</code> \u540E\u53D1\u73B0\u4E0E\u60F3\u6CD5\u4E00\u81F4\u3002</p></blockquote><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token comment"># alias</span>
<span class="token directive"><span class="token keyword">Syntax:</span>	alias path</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: location

<span class="token comment"># root</span>
Syntax:	root path</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> root html</span><span class="token punctuation">;</span>
Context: http, server, location, if in location
</code></pre></div><h2 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h2>`,4),v=n("\u6B64\u4E2D\u533A\u522B\u4E0E "),y=n("proxy_pass"),b=n(" \u76F8\u4F3C\u3002"),f=e(`<table><thead><tr><th style="text-align:center;">directives</th><th>difference</th></tr></thead><tbody><tr><td style="text-align:center;">root</td><td>\u5C06\u5B8C\u6574\u7684 url \u6620\u5C04\u5230\u6587\u4EF6\u8DEF\u5F84\u3002</td></tr><tr><td style="text-align:center;">alias</td><td>\u5C06 location \u540E\u7684 url \u6620\u5C04\u5230\u6587\u4EF6\u8DEF\u5F84\u3002</td></tr></tbody></table><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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
</code></pre></div><table><thead><tr><th>curl($request)</th><th>$request_filename</th></tr></thead><tbody><tr><td><code>/root</code></td><td><code>/usr/share/nginx/html/root</code></td></tr><tr><td><code>/root/index.html</code></td><td><code>usr/share/nginx/html/root/index.html</code></td></tr><tr><td><code>/alias</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/index.html</code></td><td><code>/usr/share/nginx/html/index.html</code></td></tr><tr><td><code>/root/dir/</code></td><td><code>/usr/share/nginx/html/root/dir/</code></td></tr><tr><td><code>/root/dir/index.html</code></td><td><code>/usr/share/nginx/html/root/dir/index.html</code></td></tr><tr><td><code>/alias/dir/</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/dir/index.html</code></td><td><code>/usr/share/nginx/htmlindex.html</code></td></tr><tr><td><code>/root/123456.txt</code></td><td><code>/usr/share/nginx/html/root/123456.txt</code></td></tr><tr><td><code>/alias/123456.txt</code></td><td><code>/usr/share/nginx/html/123456.txt</code></td></tr><tr><td><code>/alias123456.txt</code></td><td><code>/usr&lt;br/&gt;/share/nginx/html/123456.txt</code></td></tr></tbody></table><p>\u5F53\u4F7F\u7528 <code>alias</code> \u4E14 <code>location</code> \u4EE5 <code>/</code> \u7ED3\u5C3E\u65F6\u9700\u6CE8\u610F <code>/</code> \u88AB\u5E9F\u5F03\uFF0C\u4E0E <code>proxy_pass</code> \u4E2D\u60C5\u51B5\u4E00\u81F4\u3002</p>`,4);function w(L,q){const o=s("OutboundLink"),c=s("RouterLink");return i(),d(p,null,[k,t("p",null,[h,t("a",x,[m,a(o)]),_]),g,t("p",null,[v,a(c,{to:"/backend/nginx/proxy-pass-rules.html"},{default:r(()=>[y]),_:1}),b]),f],64)}var C=l(u,[["render",w]]);export{C as default};
