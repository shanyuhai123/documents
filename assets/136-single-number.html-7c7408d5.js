import{_ as s,p as a,q as t,a1 as e}from"./framework-e3e34937.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#只出现一次的数字" aria-hidden="true">#</a> 只出现一次的数字</h1><p>不看题解想不到常数空间复杂度的答案。</p><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 任何数与 0 作异或运算，仍为其本身</span>
  <span class="token keyword">let</span> single <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    single <span class="token operator">^=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> single
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const r=s(p,[["render",o],["__file","136-single-number.html.vue"]]);export{r as default};
