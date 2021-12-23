import{e as n}from"./app.63dea666.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u627E\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u627E\u4E0D\u540C" aria-hidden="true">#</a> \u627E\u4E0D\u540C</h1><h2 id="\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#\u6C42\u548C" aria-hidden="true">#</a> \u6C42\u548C</h2><p>\u7531\u4E8E\u53EA\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5B57\u7B26\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8BA1\u7B97\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findTheDifference</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">calcNum</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> cur<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token function">calcNum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">calcNum</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97</h2><p>\u53C2\u8003<a href="./136-single-number">\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57</a>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findTheDifference</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> single <span class="token operator">=</span> <span class="token number">0</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    single <span class="token operator">^=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    single <span class="token operator">^=</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>single<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};