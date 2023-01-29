import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const e={},p=t(`<h1 id="实现-strstr" tabindex="-1"><a class="header-anchor" href="#实现-strstr" aria-hidden="true">#</a> 实现 strStr</h1><h2 id="截取对比" tabindex="-1"><a class="header-anchor" href="#截取对比" aria-hidden="true">#</a> 截取对比</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">strStr</span><span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// tail 实际为 head(0) + needle.length + 1</span>
  <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> needle<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&lt;</span> haystack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haystack<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> needle<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">===</span> needle<span class="token punctuation">)</span> <span class="token keyword">return</span> head
    head<span class="token operator">++</span>
    tail<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),o=[p];function c(l,r){return s(),a("div",null,o)}const i=n(e,[["render",c],["__file","28-implement-strstr.html.vue"]]);export{i as default};
