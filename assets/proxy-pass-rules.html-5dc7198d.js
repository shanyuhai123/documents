import{_ as n,p as a,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function o(c,s){return a(),e("div",null,s[0]||(s[0]=[t(`<h1 id="nginx-的-proxy-pass-规则" tabindex="-1"><a class="header-anchor" href="#nginx-的-proxy-pass-规则" aria-hidden="true">#</a> Nginx 的 proxy_pass 规则</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><div class="custom-container danger"><p class="custom-container-title">声明 1</p><p>前端做反向代理时一般会在接口前增加一个 <code>api</code> 路径，如 <code>/api/user</code>，但后端并没有这么个东西，那么就会导致一些问题。</p></div><div class="custom-container danger"><p class="custom-container-title">声明 2</p><p><code>location</code> 一般采用前缀匹配的模式。</p></div><p>日常使用中虽可采用 <code>rewrite</code> 解决多余路径的问题（此处可如此使用的缘由是 <code>rewrite</code> 的处理阶段在 <code>proxy_pass</code> 之前）。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>   
  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>

  <span class="token comment"># 路径重写</span>
  <span class="token directive"><span class="token keyword">rewrite</span>  /api/(.*)  /<span class="token variable">$1</span>  break</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>但探索一下 <code>location</code> + <code>proxy_pass</code> 也是不错的选择。</p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> proxy_pass URL</span><span class="token punctuation">;</span>
Default: —
Context: location, if in location, limit_except
</code></pre></div><p>其中唯一需要注意的是，当 <code>proxy_pass</code> 后无 <code>/</code> 时为相对地址，有则为绝对地址。</p><h3 id="_1-相对地址" tabindex="-1"><a class="header-anchor" href="#_1-相对地址" aria-hidden="true">#</a> 1. 相对地址</h3><p>相对地址时会将 <code>location</code> 匹配的 <code>uri</code> 加入代理。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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
</code></pre></div><table><thead><tr><th>curl</th><th>8083</th><th>8084</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/api</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>/api/user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/apppp/user</code></td></tr></tbody></table><h3 id="_2-绝对地址" tabindex="-1"><a class="header-anchor" href="#_2-绝对地址" aria-hidden="true">#</a> 2. 绝对地址</h3><p>绝对地址则不会将 <code>location</code> 匹配的 <code>uri</code> 加入代理，即直接丢弃。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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

<span class="token comment"># 解决多余的 \`/\`</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8086</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl</th><th>proxy</th><th>target</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>//user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app/</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app//user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/app/pp/user</code></td></tr><tr><td><code>localhost:8086/api</code></td><td><code>/api</code></td><td><code>location</code> 未匹配，所以不进入 <code>proxy</code></td></tr><tr><td><code>localhost:8086/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr></tbody></table><p>可以观测到少了匹配到的 <code>api</code> 部分，而作为路径的 <code>/</code> 未匹配到显得多余起来，解决的方案是使 <code>location</code> 匹配到 <code>/</code> 即可。</p>`,19)]))}const l=n(p,[["render",o],["__file","proxy-pass-rules.html.vue"]]);export{l as default};
