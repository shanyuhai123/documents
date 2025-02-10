import{_ as a,c as s,a as e,o as p}from"./app-DNXRdI82.js";const l={};function t(c,n){return p(),s("div",null,n[0]||(n[0]=[e(`<h1 id="nginx-防盗链" tabindex="-1"><a class="header-anchor" href="#nginx-防盗链"><span>Nginx 防盗链</span></a></h1><p>referer （引用页），常用于防盗链，当使用 CDN、OSS 时经常会碰到类似的提示。</p><blockquote><p>referer 正确英文为 referrer，但由于早期 HTTP 规范的拼写错误，为了保持向后兼容也就将错就错了。</p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> valid_referers none | blocked | server_names | string ...</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">Default:</span> —</span>
<span class="line">Context: server, location</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example</span></span>
<span class="line">location /</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">valid_referers</span> none blocked *.example.com example.* nginx.example.top/foo/ ~\\.google\\.</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;valid_referers<span class="token escape entity">\\n</span>&#39;</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><h3 id="_1-example-com" tabindex="-1"><a class="header-anchor" href="#_1-example-com"><span>1. *.example.com</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;http://dev.example.com&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># 等价于</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;referer: http://dev.example.com&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 200 OK</span></span>
<span class="line"><span class="token comment"># valid_referers</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://dev.aexample.com&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 403 Forbidden</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-example" tabindex="-1"><a class="header-anchor" href="#_2-example"><span>2. example.*</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://example.org&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 200 OK</span></span>
<span class="line"><span class="token comment"># valid_referers</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://dev.example.org&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 403 Forbidden</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://example.org/aaa&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 200 OK</span></span>
<span class="line"><span class="token comment"># valid_referers</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-nginx-example-top-foo" tabindex="-1"><a class="header-anchor" href="#_3-nginx-example-top-foo"><span>3. nginx.example.top/foo/</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 403 Forbidden</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/aaa&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 403 Forbidden</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 403 Forbidden</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo/&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 200 OK</span></span>
<span class="line"><span class="token comment"># valid_referers</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-ie</span> <span class="token string">&#39;http://nginx.example.top/foo/aa&#39;</span> nginx.example.com</span>
<span class="line"><span class="token comment"># HTTP/1.1 200 OK</span></span>
<span class="line"><span class="token comment"># valid_referers</span></span>
<span class="line"></span></code></pre></div>`,12)]))}const o=a(l,[["render",t],["__file","referer-module.html.vue"]]),r=JSON.parse('{"path":"/backend/nginx/referer-module.html","title":"Nginx 防盗链","lang":"zh-CN","frontmatter":{"description":"Nginx 防盗链"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":3,"title":"1. *.example.com","slug":"_1-example-com","link":"#_1-example-com","children":[]},{"level":3,"title":"2. example.*","slug":"_2-example","link":"#_2-example","children":[]},{"level":3,"title":"3. nginx.example.top/foo/","slug":"_3-nginx-example-top-foo","link":"#_3-nginx-example-top-foo","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/referer-module.md"}');export{o as comp,r as data};
