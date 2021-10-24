import{e as n}from"./app.cfd1a2d3.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="位-1-的个数" tabindex="-1"><a class="header-anchor" href="#位-1-的个数" aria-hidden="true">#</a> 位 1 的个数</h1><p>可从<a href="./190-reverse-bits">颠倒二进制位</a>中吸取步骤。</p><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      ret<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n    n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> ret\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><p>从最低位的 1 开始翻转。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    n <span class="token operator">&amp;=</span> n <span class="token operator">-</span> <span class="token number">1</span>\n    ret<span class="token operator">++</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> ret\n<span class="token punctuation">}</span>\n</code></pre></div>',7);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};
