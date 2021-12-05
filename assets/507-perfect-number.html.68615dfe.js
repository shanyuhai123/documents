import{e as n}from"./app.6c4bd88e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5B8C\u7F8E\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u7F8E\u6570" aria-hidden="true">#</a> \u5B8C\u7F8E\u6570</h1><h2 id="\u66B4\u529B" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B" aria-hidden="true">#</a> \u66B4\u529B</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkPerfectNumber</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> i <span class="token operator">+</span> num <span class="token operator">/</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret <span class="token operator">===</span> num
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
