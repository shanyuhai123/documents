import{e as n}from"./app.7b08e732.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u5B9E\u73B0-strstr" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-strstr" aria-hidden="true">#</a> \u5B9E\u73B0 strStr</h1><h2 id="\u622A\u53D6\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u622A\u53D6\u5BF9\u6BD4" aria-hidden="true">#</a> \u622A\u53D6\u5BF9\u6BD4</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">strStr</span><span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// tail \u5B9E\u9645\u4E3A head(0) + needle.length + 1</span>
  <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> needle<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&lt;</span> haystack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haystack<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> needle<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">===</span> needle<span class="token punctuation">)</span> <span class="token keyword">return</span> head
    head<span class="token operator">++</span>
    tail<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function e(p,o){return t}var l=s(a,[["render",e]]);export{l as default};
