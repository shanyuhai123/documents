import{_ as s,c as a,a as t,o as e}from"./app-BCSwjUcF.js";const p={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h1 id="nginx-的-location-规则" tabindex="-1"><a class="header-anchor" href="#nginx-的-location-规则"><span>Nginx 的 location 规则</span></a></h1><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">Syntax:</span> location [ = | ~ | ~* | ^~ ] uri</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">location</span> @name</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></span>
<span class="line">Default: —</span>
<span class="line">Context: server, location</span>
<span class="line"></span></code></pre></div><p>可以看到 <a href="https://nginx.org/en/docs/http/ngx_http_core_module.html#location" target="_blank" rel="noopener noreferrer">location</a> 具备两种规则，其中 <code>@</code> 表示内部服务跳转，用于处理异常请求。</p><p>另外的是修饰符：</p><table><thead><tr><th style="text-align:center;">prefix</th><th style="text-align:center;">priority</th><th>desc</th></tr></thead><tbody><tr><td style="text-align:center;"><code>=</code></td><td style="text-align:center;">1</td><td>路径完全匹配</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">3</td><td>区分大小写的正则匹配</td></tr><tr><td style="text-align:center;"><code>~*</code></td><td style="text-align:center;">3</td><td>不区分大小写的正则匹配</td></tr><tr><td style="text-align:center;">^~</td><td style="text-align:center;">2</td><td>前缀匹配</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">4</td><td>不带任何修饰的前缀匹配，便于区分后续用 <code>none</code> 替代，Nginx 并无该说法</td></tr></tbody></table><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1. <code>=</code></span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">location</span> = /abc</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># localhost/abc # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/ABC # 据说 windows 大小写不敏感会匹配，但未测试</span></span>
<span class="line">  <span class="token comment"># localhost/abc/ # 不匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abcd # 不匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc?a=1 # 匹配</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> = /abc/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># localhost/abc/ # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc # 不匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc/a # 不匹配</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-、" tabindex="-1"><a class="header-anchor" href="#_2-、"><span>2. <code>~</code>、<code>~*</code></span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token comment"># 此处未对结尾做限制，\`~*\` 一致</span></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> ~ ^/abc</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># localhost/abc # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abcd # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc/a # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc/a/b # 匹配</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-、none" tabindex="-1"><a class="header-anchor" href="#_3-、none"><span>3. <code>^~</code>、<code>none</code></span></a></h3><div class="language-nginx" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token comment"># ^~ 一致，只是优先度更高</span></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /abc</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># localhost/abc # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abcd # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abcd/a # 匹配</span></span>
<span class="line">  <span class="token comment"># localhost/abc/a/b # 匹配</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序"><span>顺序</span></a></h2><p>伪代码：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> temp</span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>精准匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">=</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> 精准匹配的结果</span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配<span class="token punctuation">)</span> <span class="token comment">// 前缀匹配包括 \`^~\` 和 啥都没有</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> 前缀匹配结果</span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">none</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">      temp <span class="token operator">=</span> 前缀匹配结果</span>
<span class="line">  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>正则匹配<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> 正则匹配结果</span>
<span class="line"><span class="token keyword">return</span> temp</span>
<span class="line"></span></code></pre></div><p>需要注意的是前缀匹配模式下与 <code>location</code> 在文件中的顺序无关，比的是谁的 <code>location</code> 更长；而正则匹配则跟顺序有关。</p>`,16)]))}const i=s(p,[["render",l]]),d=JSON.parse('{"path":"/backend/nginx/location-rules.html","title":"Nginx 的 location 规则","lang":"zh-CN","frontmatter":{"description":"Nginx 的 location 规则"},"headers":[{"level":2,"title":"规则","slug":"规则","link":"#规则","children":[{"level":3,"title":"1. =","slug":"_1","link":"#_1","children":[]},{"level":3,"title":"2. ~、~*","slug":"_2-、","link":"#_2-、","children":[]},{"level":3,"title":"3. ^~、none","slug":"_3-、none","link":"#_3-、none","children":[]}]},{"level":2,"title":"顺序","slug":"顺序","link":"#顺序","children":[]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/location-rules.md"}');export{i as comp,d as data};
