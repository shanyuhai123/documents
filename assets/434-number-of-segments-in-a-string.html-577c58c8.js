import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="字符串中的单词数" tabindex="-1"><a class="header-anchor" href="#字符串中的单词数" aria-hidden="true">#</a> 字符串中的单词数</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">countSegments</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> last <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> ch <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> last <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    last <span class="token operator">=</span> ch
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> last <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">?</span> count <span class="token operator">:</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const l=s(e,[["render",o],["__file","434-number-of-segments-in-a-string.html.vue"]]);export{l as default};
