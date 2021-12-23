import{e as n}from"./app.63dea666.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="_3-\u7684\u5E42" tabindex="-1"><a class="header-anchor" href="#_3-\u7684\u5E42" aria-hidden="true">#</a> 3 \u7684\u5E42</h1><h2 id="\u9664\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9664\u6CD5" aria-hidden="true">#</a> \u9664\u6CD5</h2><p>\u7531\u4E8E\u662F\u5E42\uFF0C\u6240\u4EE5\u603B\u662F\u9664\u7684\u6E05\u7684\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPowerOfThree</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9996\u5148\u6392\u9664\u5C0F\u4E8E\u7B49\u4E8E 0 \u7684\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> <span class="token constant">RANGE_MAX</span> <span class="token operator">=</span> <span class="token number">1162261467</span>

  <span class="token keyword">return</span> <span class="token constant">RANGE_MAX</span> <span class="token operator">/</span> n <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token constant">RANGE_MAX</span> <span class="token operator">/</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function e(p,o){return t}var l=s(a,[["render",e]]);export{l as default};