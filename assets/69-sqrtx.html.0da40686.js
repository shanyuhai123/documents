import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="求平方根" tabindex="-1"><a class="header-anchor" href="#求平方根" aria-hidden="true">#</a> 求平方根</h1><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><p>在不允许用原内置数学计算的情况下，可以考虑通过二分法逼近。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>\n\n  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> x<span class="token punctuation">,</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      ret <span class="token operator">=</span> mid\n      start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> ret\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};