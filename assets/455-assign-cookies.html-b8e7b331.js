import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="分发饼干" tabindex="-1"><a class="header-anchor" href="#分发饼干" aria-hidden="true">#</a> 分发饼干</h1><p>抽象理解为求交集。</p><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findContentChildren</span><span class="token punctuation">(</span>g<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  g<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
  s<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> g<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>g<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>g<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j<span class="token operator">++</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","455-assign-cookies.html.vue"]]);export{i as default};
