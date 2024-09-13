import{_ as a,p as e,q as s,a1 as p}from"./framework-e3e34937.js";const t={};function o(c,n){return e(),s("div",null,n[0]||(n[0]=[p(`<h1 id="nginx-防盗链" tabindex="-1"><a class="header-anchor" href="#nginx-防盗链" aria-hidden="true">#</a> Nginx 防盗链</h1><p>referer （引用页），常用于防盗链，当使用 CDN、OSS 时经常会碰到类似的提示。</p><blockquote><p>referer 正确英文为 referrer，但由于早期 HTTP 规范的拼写错误，为了保持向后兼容也就将错就错了。</p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> valid_referers none | blocked | server_names | string ...</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: server, location

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">valid_referers</span> none blocked *.example.com example.* nginx.example.top/foo/ ~\\.google\\.</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;valid_referers<span class="token escape entity">\\n</span>&#39;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="_1-example-com" tabindex="-1"><a class="header-anchor" href="#_1-example-com" aria-hidden="true">#</a> 1. *.example.com</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;http://dev.example.com&#39;</span> nginx.example.com
<span class="token comment"># 等价于</span>
<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;referer: http://dev.example.com&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://dev.aexample.com&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>
</code></pre></div><h3 id="_2-example" tabindex="-1"><a class="header-anchor" href="#_2-example" aria-hidden="true">#</a> 2. example.*</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://example.org&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://dev.example.org&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://example.org/aaa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>
</code></pre></div><h3 id="_3-nginx-example-top-foo" tabindex="-1"><a class="header-anchor" href="#_3-nginx-example-top-foo" aria-hidden="true">#</a> 3. nginx.example.top/foo/</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/aaa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 403 Forbidden</span>
<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo/&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>

<span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo/aa&#39;</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># valid_referers</span>
</code></pre></div>`,12)]))}const l=a(t,[["render",o],["__file","referer-module.html.vue"]]);export{l as default};
