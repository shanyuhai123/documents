import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="二叉树的层平均值" tabindex="-1"><a class="header-anchor" href="#二叉树的层平均值" aria-hidden="true">#</a> 二叉树的层平均值</h1><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>递归还需要维护层数，迭代则直接一些。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">averageOfLevels</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ret

  <span class="token keyword">let</span> line<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>line<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> next<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
    line<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>node <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      total <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>total <span class="token operator">/</span> line<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    line <span class="token operator">=</span> next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","637-average-of-levels-in-binary-tree.html.vue"]]);export{i as default};
