import{_ as n,c as a,a as e,o as p}from"./app-BoSqM2g3.js";const t={};function c(o,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="nginx-的-proxy-pass-规则" tabindex="-1"><a class="header-anchor" href="#nginx-的-proxy-pass-规则"><span>Nginx 的 proxy_pass 规则</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><div class="hint-container caution"><p class="hint-container-title">声明 1</p><p>前端做反向代理时一般会在接口前增加一个 <code>api</code> 路径，如 <code>/api/user</code>，但后端并没有这么个东西，那么就会导致一些问题。</p></div><div class="hint-container caution"><p class="hint-container-title">声明 2</p><p><code>location</code> 一般采用前缀匹配的模式。</p></div><p>日常使用中虽可采用 <code>rewrite</code> 解决多余路径的问题（此处可如此使用的缘由是 <code>rewrite</code> 的处理阶段在 <code>proxy_pass</code> 之前）。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>   </span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 路径重写</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">rewrite</span>  /api/(.*)  /<span class="token variable">$1</span>  break</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>但探索一下 <code>location</code> + <code>proxy_pass</code> 也是不错的选择。</p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> proxy_pass URL</span><span class="token punctuation">;</span></span>
<span class="line">Default: —</span>
<span class="line">Context: location, if in location, limit_except</span>
<span class="line"></span></code></pre></div><p>其中唯一需要注意的是，当 <code>proxy_pass</code> 后无 <code>/</code> 时为相对地址，有则为绝对地址。</p><h3 id="_1-相对地址" tabindex="-1"><a class="header-anchor" href="#_1-相对地址"><span>1. 相对地址</span></a></h3><p>相对地址时会将 <code>location</code> 匹配的 <code>uri</code> 加入代理。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>curl</th><th>8083</th><th>8084</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/api</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>/api/user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/apppp/user</code></td></tr></tbody></table><h3 id="_2-绝对地址" tabindex="-1"><a class="header-anchor" href="#_2-绝对地址"><span>2. 绝对地址</span></a></h3><p>绝对地址则不会将 <code>location</code> 匹配的 <code>uri</code> 加入代理，即直接丢弃。</p><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解决多余的 \`/\`</span></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8086</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>curl</th><th>proxy</th><th>target</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>//user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app/</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app//user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/app/pp/user</code></td></tr><tr><td><code>localhost:8086/api</code></td><td><code>/api</code></td><td><code>location</code> 未匹配，所以不进入 <code>proxy</code></td></tr><tr><td><code>localhost:8086/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr></tbody></table><p>可以观测到少了匹配到的 <code>api</code> 部分，而作为路径的 <code>/</code> 未匹配到显得多余起来，解决的方案是使 <code>location</code> 匹配到 <code>/</code> 即可。</p>`,19)])])}const i=n(t,[["render",c]]),d=JSON.parse('{"path":"/backend/nginx/proxy-pass-rules.html","title":"Nginx 的 proxy_pass 规则","lang":"zh-CN","frontmatter":{"description":"Nginx 的 proxy_pass 规则"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"规则","slug":"规则","link":"#规则","children":[{"level":3,"title":"1. 相对地址","slug":"_1-相对地址","link":"#_1-相对地址","children":[]},{"level":3,"title":"2. 绝对地址","slug":"_2-绝对地址","link":"#_2-绝对地址","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/proxy-pass-rules.md"}');export{i as comp,d as data};
