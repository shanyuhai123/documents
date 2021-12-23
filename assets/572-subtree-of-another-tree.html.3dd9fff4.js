import{e as n}from"./app.63dea666.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},o=n(`<h1 id="\u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811" tabindex="-1"><a class="header-anchor" href="#\u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811" aria-hidden="true">#</a> \u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811</h1><h2 id="\u66B4\u529B" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B" aria-hidden="true">#</a> \u66B4\u529B</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> subRoot<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> check <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> subRoot<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> subRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> subRoot <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> root<span class="token punctuation">.</span>val <span class="token operator">!==</span> subRoot<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> subRoot<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> subRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> dfs <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> subRoot<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(t,e){return o}var r=s(a,[["render",p]]);export{r as default};