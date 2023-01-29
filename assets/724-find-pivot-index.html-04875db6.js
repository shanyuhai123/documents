import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="寻找数组的中心下标" tabindex="-1"><a class="header-anchor" href="#寻找数组的中心下标" aria-hidden="true">#</a> 寻找数组的中心下标</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">pivotIndex</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i
    <span class="token punctuation">}</span>

    sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","724-find-pivot-index.html.vue"]]);export{k as default};
