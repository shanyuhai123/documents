import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},e=t(`<h1 id="搜索插入位置" tabindex="-1"><a class="header-anchor" href="#搜索插入位置" aria-hidden="true">#</a> 搜索插入位置</h1><h2 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法" aria-hidden="true">#</a> 二分法</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">searchInsert</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,3),o=[e];function c(r,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","35-search-insert-position.html.vue"]]);export{k as default};
