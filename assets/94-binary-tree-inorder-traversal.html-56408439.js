import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的中序遍历" aria-hidden="true">#</a> 二叉树的中序遍历</h1><p>左子树 =&gt; 根节点 =&gt; 右子树</p><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>利用函数执行栈即可快速实现。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">inorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>递归隐式地维护了一个栈，而迭代则需要手动维护。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    root <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token operator">!</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    root <span class="token operator">=</span> root<span class="token operator">!</span><span class="token punctuation">.</span>right
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","94-binary-tree-inorder-traversal.html.vue"]]);export{u as default};
