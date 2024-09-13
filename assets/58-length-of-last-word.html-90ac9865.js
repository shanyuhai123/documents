import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="最后一个单词的长度" tabindex="-1"><a class="header-anchor" href="#最后一个单词的长度" aria-hidden="true">#</a> 最后一个单词的长度</h1><h2 id="反向遍历" tabindex="-1"><a class="header-anchor" href="#反向遍历" aria-hidden="true">#</a> 反向遍历</h2><p>移除掉空格。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLastWord</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    index<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> wordLength <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wordLength<span class="token operator">++</span>
    index<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> wordLength
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=s(e,[["render",o],["__file","58-length-of-last-word.html.vue"]]);export{l as default};
