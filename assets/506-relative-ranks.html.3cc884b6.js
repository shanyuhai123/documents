import{e as n}from"./app.63dea666.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u76F8\u5BF9\u540D\u6B21" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u540D\u6B21" aria-hidden="true">#</a> \u76F8\u5BF9\u540D\u6B21</h1><p>\u4E2D\u6587\u7AD9\u5B9E\u5C5E\u662F\u5751\uFF0C\u53EA\u7ED9\u4E86\u4E00\u4E2A\u8BEF\u5BFC\u6027\u7684\u4F8B\u5B50\u3002</p><h2 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h2><p>\u54C8\u5E0C\u8868\u6682\u5B58\u6570\u636E\u3002</p><blockquote><p>Runtime: 88 ms, faster than 96.30% of TypeScript online submissions for Relative Ranks.</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findRelativeRanks</span><span class="token punctuation">(</span>score<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> medals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Gold Medal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Silver Medal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bronze Medal&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token operator">...</span>score<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> medals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> score<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};