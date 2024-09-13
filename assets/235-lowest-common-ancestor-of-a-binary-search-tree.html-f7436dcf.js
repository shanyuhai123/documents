import{_ as a,p as s,q as o,a1 as p}from"./framework-e3e34937.js";const t={};function e(c,n){return s(),o("div",null,n[0]||(n[0]=[p(`<h1 id="二叉搜索树的最近公共祖先" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的最近公共祖先" aria-hidden="true">#</a> 二叉搜索树的最近公共祖先</h1><p>二叉搜索树又称二叉排序树，利用其特性解决问题更简单。</p><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>值分布在节点左右时，那么公共祖先自然是当前节点。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> p<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>

  <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre></div>`,5)]))}const l=a(t,[["render",e],["__file","235-lowest-common-ancestor-of-a-binary-search-tree.html.vue"]]);export{l as default};