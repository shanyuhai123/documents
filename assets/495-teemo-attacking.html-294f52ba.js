import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="提莫攻击" tabindex="-1"><a class="header-anchor" href="#提莫攻击" aria-hidden="true">#</a> 提莫攻击</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findPoisonedDuration</span><span class="token punctuation">(</span>timeSeries<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> expired <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> timeSeries<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> expired<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> duration
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> duration <span class="token operator">-</span> expired
    <span class="token punctuation">}</span>

    expired <span class="token operator">=</span> timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> duration
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const i=s(e,[["render",o],["__file","495-teemo-attacking.html.vue"]]);export{i as default};
