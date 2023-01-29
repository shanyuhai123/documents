import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="n-叉树的前序遍历" tabindex="-1"><a class="header-anchor" href="#n-叉树的前序遍历" aria-hidden="true">#</a> N 叉树的前序遍历</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>node <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p><code>forEach</code> 还需要配置 <code>reverse</code> 使用，性能低。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ret

  <span class="token keyword">const</span> stack<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","589-n-ary-tree-preorder-traversal.html.vue"]]);export{k as default};
