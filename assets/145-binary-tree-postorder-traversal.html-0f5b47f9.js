import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="二叉树的后序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的后序遍历" aria-hidden="true">#</a> 二叉树的后序遍历</h1><p>后序遍历：左右中</p><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> prev<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 标记是否遍历过子树</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// left 到底</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    root <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token comment">// 判断 right</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      prev <span class="token operator">=</span> root
      root <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 置为 null，否则重走 “left 到底”</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 重新加回 stack</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","145-binary-tree-postorder-traversal.html.vue"]]);export{k as default};
