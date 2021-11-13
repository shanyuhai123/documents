import{e as n}from"./app.e62aeb11.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" aria-hidden="true">#</a> \u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C</h1><h2 id="\u4E8C\u5206\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u6CD5" aria-hidden="true">#</a> \u4E8C\u5206\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>isBadVersion<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> n

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// left + right &gt;&gt; 1 \u8D8A\u754C\u4E86\uFF0C\u5E72</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isBadVersion</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        right <span class="token operator">=</span> mid
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> left
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
