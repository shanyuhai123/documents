import{_ as n,p as s,q as a,a1 as p}from"./framework-49860b1b.js";const t={},o=p(`<h1 id="爬楼梯" tabindex="-1"><a class="header-anchor" href="#爬楼梯" aria-hidden="true">#</a> 爬楼梯</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>最后一步可能是跨了一级台阶，也肯能是两级，所以可以得到: <code>$f(x) = f(x - 1) + f(x -2)$</code> 公式。</p><p>再配合基础的 <code>f(1) = 1</code>，<code>f(2) = 2</code>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 缓存数据，否则容易超时</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre></div><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n

  <span class="token comment">// 初始化状态</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 状态转移</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> p <span class="token operator">+</span> q
    p <span class="token operator">=</span> q
    q <span class="token operator">=</span> sum
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> q
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","70-climbing-stairs.html.vue"]]);export{k as default};
