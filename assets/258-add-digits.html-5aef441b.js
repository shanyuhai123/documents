import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const e={},p=t(`<h1 id="各位相加" tabindex="-1"><a class="header-anchor" href="#各位相加" aria-hidden="true">#</a> 各位相加</h1><p>要求常数时间复杂度，那么只能考虑数学方法了。</p><h2 id="取模" tabindex="-1"><a class="header-anchor" href="#取模" aria-hidden="true">#</a> 取模</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addDigits</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 个位数直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>

  <span class="token comment">// 10 -&gt; 1, 11 -&gt; 2, 18 -&gt; 9</span>
  <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">9</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">9</span> <span class="token operator">:</span> num <span class="token operator">%</span> <span class="token number">9</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),o=[p];function c(r,l){return s(),a("div",null,o)}const i=n(e,[["render",c],["__file","258-add-digits.html.vue"]]);export{i as default};
