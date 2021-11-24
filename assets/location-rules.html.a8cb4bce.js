import{r as e,c as o,a,b as c,F as p,e as s,d as n,o as l}from"./app.366e609d.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const i={},r=s(`<h1 id="nginx-\u7684-location-\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#nginx-\u7684-location-\u89C4\u5219" aria-hidden="true">#</a> Nginx \u7684 location \u89C4\u5219</h1><h2 id="\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a> \u89C4\u5219</h2><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> location [ = | ~ | ~* | ^~ ] uri</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> @name</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
Default: \u2014
Context: server, location
</code></pre></div>`,3),k=n("\u53EF\u4EE5\u770B\u5230 "),u={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"},h=n("location"),g=n(" \u5177\u5907\u4E24\u79CD\u89C4\u5219\uFF0C\u5176\u4E2D "),m=a("code",null,"@",-1),x=n(" \u8868\u793A\u5185\u90E8\u670D\u52A1\u8DF3\u8F6C\uFF0C\u7528\u4E8E\u5904\u7406\u5F02\u5E38\u8BF7\u6C42\u3002"),_=s(`<p>\u53E6\u5916\u7684\u662F\u4FEE\u9970\u7B26\uFF1A</p><table><thead><tr><th style="text-align:center;">prefix</th><th style="text-align:center;">priority</th><th>desc</th></tr></thead><tbody><tr><td style="text-align:center;"><code>=</code></td><td style="text-align:center;">1</td><td>\u8DEF\u5F84\u5B8C\u5168\u5339\u914D</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">3</td><td>\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D</td></tr><tr><td style="text-align:center;"><code>~*</code></td><td style="text-align:center;">3</td><td>\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D</td></tr><tr><td style="text-align:center;">^~</td><td style="text-align:center;">2</td><td>\u524D\u7F00\u5339\u914D</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">4</td><td>\u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7684\u524D\u7F00\u5339\u914D\uFF0C\u4FBF\u4E8E\u533A\u5206\u540E\u7EED\u7528 <code>none</code> \u66FF\u4EE3\uFF0CNginx \u5E76\u65E0\u8BE5\u8BF4\u6CD5</td></tr></tbody></table><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1. <code>=</code></h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # \u5339\u914D</span>
  <span class="token comment"># localhost/ABC # \u636E\u8BF4 windows \u5927\u5C0F\u5199\u4E0D\u654F\u611F\u4F1A\u5339\u914D\uFF0C\u4F46\u672A\u6D4B\u8BD5</span>
  <span class="token comment"># localhost/abc/ # \u4E0D\u5339\u914D</span>
  <span class="token comment"># localhost/abcd # \u4E0D\u5339\u914D</span>
  <span class="token comment"># localhost/abc?a=1 # \u5339\u914D</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /abc/</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc/ # \u5339\u914D</span>
  <span class="token comment"># localhost/abc # \u4E0D\u5339\u914D</span>
  <span class="token comment"># localhost/abc/a # \u4E0D\u5339\u914D</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-\u3001" tabindex="-1"><a class="header-anchor" href="#_2-\u3001" aria-hidden="true">#</a> 2. <code>~</code>\u3001<code>~*</code></h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token comment"># \u6B64\u5904\u672A\u5BF9\u7ED3\u5C3E\u505A\u9650\u5236\uFF0C\`~*\` \u4E00\u81F4</span>
<span class="token directive"><span class="token keyword">location</span> ~ ^/abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # \u5339\u914D</span>
  <span class="token comment"># localhost/abcd # \u5339\u914D</span>
  <span class="token comment"># localhost/abc/a # \u5339\u914D</span>
  <span class="token comment"># localhost/abc/a/b # \u5339\u914D</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-\u3001none" tabindex="-1"><a class="header-anchor" href="#_3-\u3001none" aria-hidden="true">#</a> 3. <code>^~</code>\u3001<code>none</code></h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token comment"># ^~ \u4E00\u81F4\uFF0C\u53EA\u662F\u4F18\u5148\u5EA6\u66F4\u9AD8</span>
<span class="token directive"><span class="token keyword">location</span> /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # \u5339\u914D</span>
  <span class="token comment"># localhost/abcd # \u5339\u914D</span>
  <span class="token comment"># localhost/abcd/a # \u5339\u914D</span>
  <span class="token comment"># localhost/abc/a/b # \u5339\u914D</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u987A\u5E8F" aria-hidden="true">#</a> \u987A\u5E8F</h2><p>\u4F2A\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> temp
<span class="token keyword">if</span> <span class="token punctuation">(</span>\u7CBE\u51C6\u5339\u914D <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">=</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> \u7CBE\u51C6\u5339\u914D\u7684\u7ED3\u679C
<span class="token keyword">else</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>\u524D\u7F00\u5339\u914D<span class="token punctuation">)</span> <span class="token comment">// \u524D\u7F00\u5339\u914D\u5305\u62EC \`^~\` \u548C \u5565\u90FD\u6CA1\u6709</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>\u524D\u7F00\u5339\u914D <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> \u524D\u7F00\u5339\u914D\u7ED3\u679C
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>\u524D\u7F00\u5339\u914D <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">none</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      temp <span class="token operator">=</span> \u524D\u7F00\u5339\u914D\u7ED3\u679C
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>\u6B63\u5219\u5339\u914D<span class="token punctuation">)</span>
    <span class="token keyword">return</span> \u6B63\u5219\u5339\u914D\u7ED3\u679C
<span class="token keyword">return</span> temp
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u524D\u7F00\u5339\u914D\u6A21\u5F0F\u4E0B\u4E0E <code>location</code> \u5728\u6587\u4EF6\u4E2D\u7684\u987A\u5E8F\u65E0\u5173\uFF0C\u6BD4\u7684\u662F\u8C01\u7684 <code>location</code> \u66F4\u957F\uFF1B\u800C\u6B63\u5219\u5339\u914D\u5219\u8DDF\u987A\u5E8F\u6709\u5173\u3002</p>`,12);function b(y,f){const t=e("OutboundLink");return l(),o(p,null,[r,a("p",null,[k,a("a",u,[h,c(t)]),g,m,x]),_],64)}var N=d(i,[["render",b]]);export{N as default};
