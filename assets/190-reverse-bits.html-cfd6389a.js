import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},e=t(`<h1 id="颠倒二进制位" tabindex="-1"><a class="header-anchor" href="#颠倒二进制位" aria-hidden="true">#</a> 颠倒二进制位</h1><p>抄。</p><h2 id="逐位颠倒" tabindex="-1"><a class="header-anchor" href="#逐位颠倒" aria-hidden="true">#</a> 逐位颠倒</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseBits</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> rev <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// n &amp; 1 计算得到首位</span>
    <span class="token comment">// 二进制位与 =&gt; 按位左移 =&gt; 二进制位或</span>
    rev <span class="token operator">|=</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">31</span> <span class="token operator">-</span> i<span class="token punctuation">)</span>
    n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span> <span class="token comment">// 原数据无符号按位右移</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> rev <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),o=[e];function c(r,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","190-reverse-bits.html.vue"]]);export{u as default};
