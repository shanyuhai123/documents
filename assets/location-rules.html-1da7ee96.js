import{_ as o,M as c,p,q as l,a1 as t,R as s,t as a,N as d}from"./framework-e3e34937.js";const i={},r={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"};function k(u,n){const e=c("ExternalLinkIcon");return p(),l("div",null,[n[5]||(n[5]=t(`<h1 id="nginx-的-location-规则" tabindex="-1"><a class="header-anchor" href="#nginx-的-location-规则" aria-hidden="true">#</a> Nginx 的 location 规则</h1><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> location [ = | ~ | ~* | ^~ ] uri</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> @name</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
Default: —
Context: server, location
</code></pre></div>`,3)),s("p",null,[n[1]||(n[1]=a("可以看到 ")),s("a",r,[n[0]||(n[0]=a("location")),d(e)]),n[2]||(n[2]=a(" 具备两种规则，其中 ")),n[3]||(n[3]=s("code",null,"@",-1)),n[4]||(n[4]=a(" 表示内部服务跳转，用于处理异常请求。"))]),n[6]||(n[6]=t(`<p>另外的是修饰符：</p><table><thead><tr><th style="text-align:center;">prefix</th><th style="text-align:center;">priority</th><th>desc</th></tr></thead><tbody><tr><td style="text-align:center;"><code>=</code></td><td style="text-align:center;">1</td><td>路径完全匹配</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">3</td><td>区分大小写的正则匹配</td></tr><tr><td style="text-align:center;"><code>~*</code></td><td style="text-align:center;">3</td><td>不区分大小写的正则匹配</td></tr><tr><td style="text-align:center;">^~</td><td style="text-align:center;">2</td><td>前缀匹配</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">4</td><td>不带任何修饰的前缀匹配，便于区分后续用 <code>none</code> 替代，Nginx 并无该说法</td></tr></tbody></table><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1. <code>=</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/ABC # 据说 windows 大小写不敏感会匹配，但未测试</span>
  <span class="token comment"># localhost/abc/ # 不匹配</span>
  <span class="token comment"># localhost/abcd # 不匹配</span>
  <span class="token comment"># localhost/abc?a=1 # 匹配</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /abc/</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc/ # 匹配</span>
  <span class="token comment"># localhost/abc # 不匹配</span>
  <span class="token comment"># localhost/abc/a # 不匹配</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-、" tabindex="-1"><a class="header-anchor" href="#_2-、" aria-hidden="true">#</a> 2. <code>~</code>、<code>~*</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 此处未对结尾做限制，\`~*\` 一致</span>
<span class="token directive"><span class="token keyword">location</span> ~ ^/abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/abcd # 匹配</span>
  <span class="token comment"># localhost/abc/a # 匹配</span>
  <span class="token comment"># localhost/abc/a/b # 匹配</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-、none" tabindex="-1"><a class="header-anchor" href="#_3-、none" aria-hidden="true">#</a> 3. <code>^~</code>、<code>none</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># ^~ 一致，只是优先度更高</span>
<span class="token directive"><span class="token keyword">location</span> /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/abcd # 匹配</span>
  <span class="token comment"># localhost/abcd/a # 匹配</span>
  <span class="token comment"># localhost/abc/a/b # 匹配</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序" aria-hidden="true">#</a> 顺序</h2><p>伪代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> temp
<span class="token keyword">if</span> <span class="token punctuation">(</span>精准匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">=</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> 精准匹配的结果
<span class="token keyword">else</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配<span class="token punctuation">)</span> <span class="token comment">// 前缀匹配包括 \`^~\` 和 啥都没有</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> 前缀匹配结果
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>前缀匹配 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">none</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      temp <span class="token operator">=</span> 前缀匹配结果
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>正则匹配<span class="token punctuation">)</span>
    <span class="token keyword">return</span> 正则匹配结果
<span class="token keyword">return</span> temp
</code></pre></div><p>需要注意的是前缀匹配模式下与 <code>location</code> 在文件中的顺序无关，比的是谁的 <code>location</code> 更长；而正则匹配则跟顺序有关。</p>`,12))])}const m=o(i,[["render",k],["__file","location-rules.html.vue"]]);export{m as default};
