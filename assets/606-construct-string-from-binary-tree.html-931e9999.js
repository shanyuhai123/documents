import{_ as n,p as a,q as s,a1 as t}from"./framework-49860b1b.js";const p={},o=t('<h1 id="根据二叉树构造字符串" tabindex="-1"><a class="header-anchor" href="#根据二叉树构造字符串" aria-hidden="true">#</a> 根据二叉树构造字符串</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>看到这种结果第一反应就是递归。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">tree2str</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>root<span class="token punctuation">.</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>root<span class="token punctuation">.</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">tree2str</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>\n\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>root<span class="token punctuation">.</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">tree2str</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">tree2str</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n</code></pre></div>',4),e=[o];function c(i,l){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","606-construct-string-from-binary-tree.html.vue"]]);export{r as default};
