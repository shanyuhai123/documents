import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="二叉搜索树的最小绝对差" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的最小绝对差" aria-hidden="true">#</a> 二叉搜索树的最小绝对差</h1><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h2><p>借助二叉搜索树的特性。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getMinimumDifference</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">-</span> pre<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    pre <span class="token operator">=</span> root<span class="token punctuation">.</span>val
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token keyword">return</span> min
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const u=s(o,[["render",e],["__file","530-minimum-absolute-difference-in-bst.html.vue"]]);export{u as default};
