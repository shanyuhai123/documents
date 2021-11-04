import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="excel-表列名称" tabindex="-1"><a class="header-anchor" href="#excel-表列名称" aria-hidden="true">#</a> Excel 表列名称</h1><p>需要知道字符串的 <code>charCodeAt</code> 及 <code>fromCharCode</code> 方法。</p><h2 id="_26个字母" tabindex="-1"><a class="header-anchor" href="#_26个字母" aria-hidden="true">#</a> 26个字母</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">convertToTitle</span><span class="token punctuation">(</span>columnNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>columnNumber <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    columnNumber<span class="token operator">--</span>\n    str <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>columnNumber <span class="token operator">%</span> <span class="token number">26</span> <span class="token operator">+</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">+</span> str\n    columnNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>columnNumber <span class="token operator">/</span> <span class="token number">26</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> str\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};