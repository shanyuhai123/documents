import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const e={},p=t(`<h1 id="有效的完全平方数" tabindex="-1"><a class="header-anchor" href="#有效的完全平方数" aria-hidden="true">#</a> 有效的完全平方数</h1><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPerfectSquare</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,3),o=[p];function c(r,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","367-valid-perfect-square.html.vue"]]);export{k as default};
