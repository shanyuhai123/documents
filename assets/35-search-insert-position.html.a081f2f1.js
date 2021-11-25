import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E" aria-hidden="true">#</a> \u641C\u7D22\u63D2\u5165\u4F4D\u7F6E</h1><h2 id="\u4E8C\u5206\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u6CD5" aria-hidden="true">#</a> \u4E8C\u5206\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">searchInsert</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> right <span class="token operator">+</span> left <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> mid
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> left
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
