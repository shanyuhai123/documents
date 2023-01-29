import{_ as n,p as s,q as a,a1 as p}from"./framework-49860b1b.js";const t={},o=p(`<h1 id="比特位计数" tabindex="-1"><a class="header-anchor" href="#比特位计数" aria-hidden="true">#</a> 比特位计数</h1><h2 id="按位与" tabindex="-1"><a class="header-anchor" href="#按位与" aria-hidden="true">#</a> 按位与</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">countBits</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bits <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> countOnes <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> counts <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x <span class="token operator">&amp;=</span> x <span class="token operator">-</span> <span class="token number">1</span>
      counts<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> counts
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">countOnes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> bits
<span class="token punctuation">}</span>
</code></pre></div><h2 id="奇偶数" tabindex="-1"><a class="header-anchor" href="#奇偶数" aria-hidden="true">#</a> 奇偶数</h2><p>奇数：二进制中，奇数一定比前面的偶数多一个 1。 偶数：二进制中，偶数最低位是 0,向右位移一位，1 个数不变。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">countBits</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bits <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> bits<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      bits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> bits<span class="token punctuation">[</span>i <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> bits
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","338-counting-bits.html.vue"]]);export{r as default};
