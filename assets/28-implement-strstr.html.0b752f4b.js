import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n('<h1 id="实现-strstr" tabindex="-1"><a class="header-anchor" href="#实现-strstr" aria-hidden="true">#</a> 实现 strStr</h1><h2 id="截取对比" tabindex="-1"><a class="header-anchor" href="#截取对比" aria-hidden="true">#</a> 截取对比</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">strStr</span><span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token comment">// tail 实际为 head(0) + needle.length + 1</span>\n  <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> needle<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&lt;</span> haystack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>haystack<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> needle<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">===</span> needle<span class="token punctuation">)</span> <span class="token keyword">return</span> head\n    head<span class="token operator">++</span>\n    tail<span class="token operator">++</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3);var p=s(a,[["render",function(n,s){return t}]]);export{p as default};