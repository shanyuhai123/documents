import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="杨辉三角-ii" tabindex="-1"><a class="header-anchor" href="#杨辉三角-ii" aria-hidden="true">#</a> 杨辉三角 II</h1><p>在<a href="./118-pascals-triangle">杨辉三角</a>中，利用上一行结果进行计算，此处只需返回最后一行结果，显然可以添加一个 <code>prev</code> 数组来解决问题。</p><h2 id="一个数组" tabindex="-1"><a class="header-anchor" href="#一个数组" aria-hidden="true">#</a> 一个数组</h2><p>双循环是必不可少的。 实际上依然是两个数组，只不过从后往前不会覆盖前一轮的结果。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getRow</span><span class="token punctuation">(</span>rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>rowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rowIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      row<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> row<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> row\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="单循环" tabindex="-1"><a class="header-anchor" href="#单循环" aria-hidden="true">#</a> 单循环</h2><p>想要真正意义上的一个数组，则需要利用数学公式来进行推导了。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getRow</span><span class="token punctuation">(</span>rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>rowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rowIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    row<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> row<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> i\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> row\n<span class="token punctuation">}</span>\n</code></pre></div>',8);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};