import{e as n}from"./app.76078c72.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="整数反转" tabindex="-1"><a class="header-anchor" href="#整数反转" aria-hidden="true">#</a> 整数反转</h1><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>直接的处理：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> <span class="token operator">-</span>value\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> value <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> value <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> value\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="数学计算" tabindex="-1"><a class="header-anchor" href="#数学计算" aria-hidden="true">#</a> 数学计算</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>\n\n  <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> last <span class="token operator">=</span> x <span class="token operator">%</span> <span class="token number">10</span>\n    res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> last\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> res <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n\n    x <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> res\n<span class="token punctuation">}</span>\n</code></pre></div>',6);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};
