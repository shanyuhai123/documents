import{_ as n,p as s,q as a,a1 as p}from"./framework-49860b1b.js";const t={},o=p(`<h1 id="斐波那契数" tabindex="-1"><a class="header-anchor" href="#斐波那契数" aria-hidden="true">#</a> 斐波那契数</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 记忆已计算的值</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> rec <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rec</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    s<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">rec</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><p>动态规划入门题。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n

  <span class="token comment">// 优化空间复杂度</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> prev <span class="token operator">+</span> cur
    prev <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> sum
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> cur
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(r,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","509-fibonacci-number.html.vue"]]);export{k as default};
