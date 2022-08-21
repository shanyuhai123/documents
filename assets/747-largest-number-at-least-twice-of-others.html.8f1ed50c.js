import{e as n}from"./app.838f6760.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u81F3\u5C11\u662F\u5176\u4ED6\u6570\u5B57\u4E24\u500D\u7684\u6700\u5927\u6570" tabindex="-1"><a class="header-anchor" href="#\u81F3\u5C11\u662F\u5176\u4ED6\u6570\u5B57\u4E24\u500D\u7684\u6700\u5927\u6570" aria-hidden="true">#</a> \u81F3\u5C11\u662F\u5176\u4ED6\u6570\u5B57\u4E24\u500D\u7684\u6700\u5927\u6570</h1><p>\u53C2\u8003<a href="./414-third-maximum-number">\u7B2C\u4E09\u5927\u7684\u6570</a>\u3002</p><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dominantIndex</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> mi <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      next <span class="token operator">=</span> max
      max <span class="token operator">=</span> num
      mi <span class="token operator">=</span> i
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> max <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      next <span class="token operator">=</span> num
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">return</span> next <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">Infinity</span>
    <span class="token operator">?</span> mi
    <span class="token operator">:</span> max <span class="token operator">&gt;=</span> next <span class="token operator">*</span> <span class="token number">2</span>
      <span class="token operator">?</span> mi
      <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
