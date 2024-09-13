import{_ as s,p as a,q as t,a1 as o}from"./framework-e3e34937.js";const p={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[o(`<h1 id="二叉树中第二小的节点" tabindex="-1"><a class="header-anchor" href="#二叉树中第二小的节点" aria-hidden="true">#</a> 二叉树中第二小的节点</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findSecondMinimumValue</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ret

  <span class="token keyword">let</span> min <span class="token operator">=</span> root<span class="token punctuation">.</span>val
  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> ret<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">=</span> root<span class="token punctuation">.</span>val
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const l=s(p,[["render",e],["__file","671-second-minimum-node-in-a-binary-tree.html.vue"]]);export{l as default};
