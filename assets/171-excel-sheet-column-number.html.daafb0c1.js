import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="excel-表列序号" tabindex="-1"><a class="header-anchor" href="#excel-表列序号" aria-hidden="true">#</a> Excel 表列序号</h1><p>与<a href="./168-excel-sheet-column-title">Excel 表列名称</a>相反。</p><h2 id="进制转换" tabindex="-1"><a class="header-anchor" href="#进制转换" aria-hidden="true">#</a> 进制转换</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">titleToNumber</span><span class="token punctuation">(</span>columnTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> baseNum <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnTitle<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> cur <span class="token operator">=</span> columnTitle<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n    num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">26</span> <span class="token operator">+</span> <span class="token punctuation">(</span>cur <span class="token operator">-</span> baseNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> num\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};