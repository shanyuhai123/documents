import{_ as n,p as s,q as a,a1 as p}from"./framework-49860b1b.js";const t={},o=p(`<h1 id="岛屿的周长" tabindex="-1"><a class="header-anchor" href="#岛屿的周长" aria-hidden="true">#</a> 岛屿的周长</h1><p>二维数组中 <code>1</code> 为陆地。</p><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">islandPerimeter</span><span class="token punctuation">(</span>grid<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sides <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">const</span> row <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span> col <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> rounds <span class="token operator">=</span> <span class="token number">4</span>
        <span class="token comment">// 上</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> col <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 下</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> row <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 左</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        sides <span class="token operator">+=</span> rounds
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sides
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","463-island-perimeter.html.vue"]]);export{r as default};
