import{e as n}from"./app.bd2c6a6e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u4E11\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E11\u6570" aria-hidden="true">#</a> \u4E11\u6570</h1><h2 id="\u6570\u5B66" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B66" aria-hidden="true">#</a> \u6570\u5B66</h2><p>\u4ECE <code>5\u30013\u30012</code> \u4F9D\u6B21\u5904\u7406\u5373\u53EF\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isUgly</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> uglyNumArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> u <span class="token keyword">of</span> uglyNumArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> u <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n <span class="token operator">/=</span> u
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  

  <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
