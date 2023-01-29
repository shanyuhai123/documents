import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="第一个错误的版本" tabindex="-1"><a class="header-anchor" href="#第一个错误的版本" aria-hidden="true">#</a> 第一个错误的版本</h1><h2 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法" aria-hidden="true">#</a> 二分法</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>isBadVersion<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> n

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// left + right &gt;&gt; 1 越界了，干</span>
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
</code></pre></div>`,3),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","278-first-bad-version.html.vue"]]);export{u as default};
