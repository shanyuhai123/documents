import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="至少是其他数字两倍的最大数" tabindex="-1"><a class="header-anchor" href="#至少是其他数字两倍的最大数" aria-hidden="true">#</a> 至少是其他数字两倍的最大数</h1><p>参考<a href="./414-third-maximum-number">第三大的数</a>。</p><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dominantIndex</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,4)]))}const l=s(o,[["render",e],["__file","747-largest-number-at-least-twice-of-others.html.vue"]]);export{l as default};
