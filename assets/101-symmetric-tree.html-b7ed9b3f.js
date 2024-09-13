import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="对称二叉树" tabindex="-1"><a class="header-anchor" href="#对称二叉树" aria-hidden="true">#</a> 对称二叉树</h1><p>对称二叉树可看作两棵树互为<strong>镜像</strong>。所以可以参考 <a href="./100-same-tree">相同的树</a> 进行实现，不过要稍作修改。</p><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!==</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>相对 <code>same tree</code> 提前结束判断，优化代码量。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token comment">// 根据队列先进先出实现广度优先</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>p<span class="token punctuation">,</span> q<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nodeP <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">const</span> nodeQ <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodeP <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>nodeQ<span class="token punctuation">)</span> <span class="token keyword">continue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>nodeP <span class="token operator">||</span> <span class="token operator">!</span>nodeQ<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>val <span class="token operator">!==</span> nodeQ<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7)]))}const u=s(o,[["render",e],["__file","101-symmetric-tree.html.vue"]]);export{u as default};