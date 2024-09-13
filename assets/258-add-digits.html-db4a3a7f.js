import{_ as s,p as a,q as t,a1 as e}from"./framework-e3e34937.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="各位相加" tabindex="-1"><a class="header-anchor" href="#各位相加" aria-hidden="true">#</a> 各位相加</h1><p>要求常数时间复杂度，那么只能考虑数学方法了。</p><h2 id="取模" tabindex="-1"><a class="header-anchor" href="#取模" aria-hidden="true">#</a> 取模</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addDigits</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 个位数直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>

  <span class="token comment">// 10 -&gt; 1, 11 -&gt; 2, 18 -&gt; 9</span>
  <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">9</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">9</span> <span class="token operator">:</span> num <span class="token operator">%</span> <span class="token number">9</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=s(p,[["render",o],["__file","258-add-digits.html.vue"]]);export{l as default};
