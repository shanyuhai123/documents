import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="判断子序列" tabindex="-1"><a class="header-anchor" href="#判断子序列" aria-hidden="true">#</a> 判断子序列</h1><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2><p>原始字符串每轮都会增加，子序列一致时才增加。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isSubsequence</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tp <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>sp <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> tp <span class="token operator">&lt;</span> t<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>sp<span class="token punctuation">]</span> <span class="token operator">===</span> t<span class="token punctuation">[</span>tp<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sp<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    tp<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sp <span class="token operator">===</span> s<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const u=s(e,[["render",o],["__file","392-is-subsequence.html.vue"]]);export{u as default};