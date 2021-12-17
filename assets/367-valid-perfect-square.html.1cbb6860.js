import{e as n}from"./app.ad86f39c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" aria-hidden="true">#</a> \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570</h1><h2 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPerfectSquare</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> num
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> right <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
    <span class="token keyword">const</span> square <span class="token operator">=</span> mid <span class="token operator">*</span> mid
    <span class="token keyword">if</span> <span class="token punctuation">(</span>square <span class="token operator">&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>square <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
