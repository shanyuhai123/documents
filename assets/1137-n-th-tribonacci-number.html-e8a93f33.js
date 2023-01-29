import{_ as n,p as s,q as a,a1 as p}from"./framework-49860b1b.js";const t={},e=p(`<h1 id="第-n-个泰波那契数" tabindex="-1"><a class="header-anchor" href="#第-n-个泰波那契数" aria-hidden="true">#</a> 第 N 个泰波那契数</h1><p>相对于<a href="./509-fibonacci-number">斐波那契数</a>仅多了一个变量。</p><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">tribonacci</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> p <span class="token operator">+</span> q <span class="token operator">+</span> r
    p <span class="token operator">=</span> q
    q <span class="token operator">=</span> r
    r <span class="token operator">=</span> sum
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> r
<span class="token punctuation">}</span>
</code></pre></div>`,4),o=[e];function c(r,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","1137-n-th-tribonacci-number.html.vue"]]);export{u as default};
