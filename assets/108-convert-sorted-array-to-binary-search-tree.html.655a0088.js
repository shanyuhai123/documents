import{e as n}from"./app.e56433d4.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="将有序数组转为二叉搜索树" tabindex="-1"><a class="header-anchor" href="#将有序数组转为二叉搜索树" aria-hidden="true">#</a> 将有序数组转为二叉搜索树</h1><h2 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法" aria-hidden="true">#</a> 二分法</h2><p>从数组中间开始构建即可。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>\n\n    <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> left\n    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> node\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};
