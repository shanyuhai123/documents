import{e as s}from"./app.838f6760.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=s(`<h1 id="nginx-\u7684-proxy-pass-\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#nginx-\u7684-proxy-pass-\u89C4\u5219" aria-hidden="true">#</a> Nginx \u7684 proxy_pass \u89C4\u5219</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><div class="custom-container danger"><p class="custom-container-title">\u58F0\u660E 1</p><p>\u524D\u7AEF\u505A\u53CD\u5411\u4EE3\u7406\u65F6\u4E00\u822C\u4F1A\u5728\u63A5\u53E3\u524D\u589E\u52A0\u4E00\u4E2A <code>api</code> \u8DEF\u5F84\uFF0C\u5982 <code>/api/user</code>\uFF0C\u4F46\u540E\u7AEF\u5E76\u6CA1\u6709\u8FD9\u4E48\u4E2A\u4E1C\u897F\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u95EE\u9898\u3002</p></div><div class="custom-container danger"><p class="custom-container-title">\u58F0\u660E 2</p><p><code>location</code> \u4E00\u822C\u91C7\u7528\u524D\u7F00\u5339\u914D\u7684\u6A21\u5F0F\u3002</p></div><p>\u65E5\u5E38\u4F7F\u7528\u4E2D\u867D\u53EF\u91C7\u7528 <code>rewrite</code> \u89E3\u51B3\u591A\u4F59\u8DEF\u5F84\u7684\u95EE\u9898\uFF08\u6B64\u5904\u53EF\u5982\u6B64\u4F7F\u7528\u7684\u7F18\u7531\u662F <code>rewrite</code> \u7684\u5904\u7406\u9636\u6BB5\u5728 <code>proxy_pass</code> \u4E4B\u524D\uFF09\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>   
  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>

  <span class="token comment"># \u8DEF\u5F84\u91CD\u5199</span>
  <span class="token directive"><span class="token keyword">rewrite</span>  /api/(.*)  /<span class="token variable">$1</span>  break</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u63A2\u7D22\u4E00\u4E0B <code>location</code> + <code>proxy_pass</code> \u4E5F\u662F\u4E0D\u9519\u7684\u9009\u62E9\u3002</p><h2 id="\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a> \u89C4\u5219</h2><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> proxy_pass URL</span><span class="token punctuation">;</span>
Default: \u2014
Context: location, if in location, limit_except
</code></pre></div><p>\u5176\u4E2D\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53 <code>proxy_pass</code> \u540E\u65E0 <code>/</code> \u65F6\u4E3A\u76F8\u5BF9\u5730\u5740\uFF0C\u6709\u5219\u4E3A\u7EDD\u5BF9\u5730\u5740\u3002</p><h3 id="_1-\u76F8\u5BF9\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_1-\u76F8\u5BF9\u5730\u5740" aria-hidden="true">#</a> 1. \u76F8\u5BF9\u5730\u5740</h3><p>\u76F8\u5BF9\u5730\u5740\u65F6\u4F1A\u5C06 <code>location</code> \u5339\u914D\u7684 <code>uri</code> \u52A0\u5165\u4EE3\u7406\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl</th><th>8083</th><th>8084</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/api</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>/api/user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/apppp/user</code></td></tr></tbody></table><h3 id="_2-\u7EDD\u5BF9\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-\u7EDD\u5BF9\u5730\u5740" aria-hidden="true">#</a> 2. \u7EDD\u5BF9\u5730\u5740</h3><p>\u7EDD\u5BF9\u5730\u5740\u5219\u4E0D\u4F1A\u5C06 <code>location</code> \u5339\u914D\u7684 <code>uri</code> \u52A0\u5165\u4EE3\u7406\uFF0C\u5373\u76F4\u63A5\u4E22\u5F03\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u89E3\u51B3\u591A\u4F59\u7684 \`/\`</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8086</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl</th><th>proxy</th><th>target</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>//user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app/</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app//user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/app/pp/user</code></td></tr><tr><td><code>localhost:8086/api</code></td><td><code>/api</code></td><td><code>location</code> \u672A\u5339\u914D\uFF0C\u6240\u4EE5\u4E0D\u8FDB\u5165 <code>proxy</code></td></tr><tr><td><code>localhost:8086/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr></tbody></table><p>\u53EF\u4EE5\u89C2\u6D4B\u5230\u5C11\u4E86\u5339\u914D\u5230\u7684 <code>api</code> \u90E8\u5206\uFF0C\u800C\u4F5C\u4E3A\u8DEF\u5F84\u7684 <code>/</code> \u672A\u5339\u914D\u5230\u663E\u5F97\u591A\u4F59\u8D77\u6765\uFF0C\u89E3\u51B3\u7684\u65B9\u6848\u662F\u4F7F <code>location</code> \u5339\u914D\u5230 <code>/</code> \u5373\u53EF\u3002</p>`,19);function t(p,o){return e}var l=n(a,[["render",t]]);export{l as default};
