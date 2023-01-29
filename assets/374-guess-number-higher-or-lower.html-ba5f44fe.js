import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},e=t(`<h1 id="猜数字大小" tabindex="-1"><a class="header-anchor" href="#猜数字大小" aria-hidden="true">#</a> 猜数字大小</h1><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">guessNumber</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> n
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use Math.floor instead of \`&gt;&gt;\`</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> mid
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> left
<span class="token punctuation">}</span>
</code></pre></div>`,3),o=[e];function c(l,r){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","374-guess-number-higher-or-lower.html.vue"]]);export{i as default};
