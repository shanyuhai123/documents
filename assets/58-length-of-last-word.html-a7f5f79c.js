import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},e=t(`<h1 id="最后一个单词的长度" tabindex="-1"><a class="header-anchor" href="#最后一个单词的长度" aria-hidden="true">#</a> 最后一个单词的长度</h1><h2 id="反向遍历" tabindex="-1"><a class="header-anchor" href="#反向遍历" aria-hidden="true">#</a> 反向遍历</h2><p>移除掉空格。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLastWord</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,4),o=[e];function c(r,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","58-length-of-last-word.html.vue"]]);export{u as default};
