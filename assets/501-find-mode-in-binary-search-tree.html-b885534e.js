import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="二叉搜索树中的众数" tabindex="-1"><a class="header-anchor" href="#二叉搜索树中的众数" aria-hidden="true">#</a> 二叉搜索树中的众数</h1><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h2><p>借助二叉搜索树的规则。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">const</span> <span class="token function-variable function">track</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> val
      count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> count
      ret <span class="token operator">=</span> <span class="token punctuation">[</span>current<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">track</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","501-find-mode-in-binary-search-tree.html.vue"]]);export{k as default};
