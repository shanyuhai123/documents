import{e as n}from"./app.366e609d.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const e={},s=n(`<h1 id="nginx-\u9632\u76D7\u94FE" tabindex="-1"><a class="header-anchor" href="#nginx-\u9632\u76D7\u94FE" aria-hidden="true">#</a> Nginx \u9632\u76D7\u94FE</h1><p>referer \uFF08\u5F15\u7528\u9875\uFF09\uFF0C\u5E38\u7528\u4E8E\u9632\u76D7\u94FE\uFF0C\u5F53\u4F7F\u7528 CDN\u3001OSS \u65F6\u7ECF\u5E38\u4F1A\u78B0\u5230\u7C7B\u4F3C\u7684\u63D0\u793A\u3002</p><blockquote><p>referer \u6B63\u786E\u82F1\u6587\u4E3A referrer\uFF0C\u4F46\u7531\u4E8E\u65E9\u671F HTTP \u89C4\u8303\u7684\u62FC\u5199\u9519\u8BEF\uFF0C\u4E3A\u4E86\u4FDD\u6301\u5411\u540E\u517C\u5BB9\u4E5F\u5C31\u5C06\u9519\u5C31\u9519\u4E86\u3002</p></blockquote><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> valid_referers none | blocked | server_names | string ...</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> \u2014
Context: server, location

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">valid_referers</span> none blocked *.example.com example.* nginx.example.top/foo/ ~\\.google\\.</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;valid_referers<span class="token escape entity">\\n</span>&#39;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><h3 id="_1-example-com" tabindex="-1"><a class="header-anchor" href="#_1-example-com" aria-hidden="true">#</a> 1. *.example.com</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -e <span class="token string">&#39;http://dev.example.com&#39;</span> nginx.example.com
<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
<span class="token function">curl</span> -H <span class="token string">&#39;referer: http://dev.example.com&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://dev.aexample.com&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>
</code></pre></div><h3 id="_2-example" tabindex="-1"><a class="header-anchor" href="#_2-example" aria-hidden="true">#</a> 2. example.*</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -ie <span class="token string">&#39;http://example.org&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://dev.example.org&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://example.org/aaa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>
</code></pre></div><h3 id="_3-nginx-example-top-foo" tabindex="-1"><a class="header-anchor" href="#_3-nginx-example-top-foo" aria-hidden="true">#</a> 3. nginx.example.top/foo/</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/aaa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>
<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo/&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo/aa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>
</code></pre></div>`,12);function p(t,o){return s}var r=a(e,[["render",p]]);export{r as default};
