import{_ as n,p as a,q as s,a1 as t}from"./framework-49860b1b.js";const e={},o=t(`<h1 id="汉明距离" tabindex="-1"><a class="header-anchor" href="#汉明距离" aria-hidden="true">#</a> 汉明距离</h1><p>实际就是按位异或运算后，统计 <code>1</code> 的个数。</p><h2 id="一的个数" tabindex="-1"><a class="header-anchor" href="#一的个数" aria-hidden="true">#</a> 一的个数</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingDistance</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> xor <span class="token operator">=</span> x <span class="token operator">^</span> y

  <span class="token keyword">while</span> <span class="token punctuation">(</span>xor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xor <span class="token operator">&amp;=</span> xor <span class="token operator">-</span> <span class="token number">1</span>
    count<span class="token operator">++</span>
  <span class="token punctuation">}</span> 

  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre></div>`,4),p=[o];function c(r,l){return a(),s("div",null,p)}const u=n(e,[["render",c],["__file","461-hamming-distance.html.vue"]]);export{u as default};
