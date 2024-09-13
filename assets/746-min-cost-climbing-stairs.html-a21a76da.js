import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="使用最小花费爬楼梯" tabindex="-1"><a class="header-anchor" href="#使用最小花费爬楼梯" aria-hidden="true">#</a> 使用最小花费爬楼梯</h1><p>注意提示：下标至少为 2。</p><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">minCostClimbingStairs</span><span class="token punctuation">(</span>cost<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> cost<span class="token punctuation">.</span>length

  <span class="token comment">// 初始化状态</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 状态转移</span>
    <span class="token keyword">const</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>cost<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> q<span class="token punctuation">,</span> cost<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> p<span class="token punctuation">)</span>
    p <span class="token operator">=</span> q
    q <span class="token operator">=</span> min
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> q
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const r=s(o,[["render",e],["__file","746-min-cost-climbing-stairs.html.vue"]]);export{r as default};
