import{e as n}from"./app.e62aeb11.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=n(`<h2 id="\u5173\u4E8E-exec" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-exec" aria-hidden="true">#</a> \u5173\u4E8E exec</h2><p><code>exec</code> \u65B9\u6CD5\u5728\u4E00\u4E2A\u6307\u5B9A\u5B57\u7B26\u4E32\u4E2D\u6267\u884C\u4E00\u4E2A\u641C\u7D22\u5339\u914D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\u6570\u636E\u6216 <code>null</code>\u3002</p><p>\u5728\u8BBE\u7F6E\u4E86 <code>global</code> \u6216 <code>sticky</code> \u6807\u5FD7\u4F4D\u7684\u60C5\u51B5\u4E0B\uFF08\u5982 <code>/foo/g</code> \u6216 <code>/foo/y</code>\uFF09\uFF0C<code>Regex</code> \u5BF9\u8C61\u662F\u6709\u72B6\u6001\u7684\u3002\u4ED6\u4EEC\u4F1A\u5C06\u4E0A\u6B21\u6210\u529F\u5339\u914D\u540E\u7684\u4F4D\u7F6E\u8BB0\u5F55\u5728 <code>lastIndex</code> \u5C5E\u6027\u4E2D\u3002\u4F7F\u7528\u6B64\u7279\u6027\uFF0C<code>exec</code> \u53EF\u7528\u6765\u5BF9\u5355\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u591A\u6B21\u5339\u914D\u7ED3\u679C\u8FDB\u884C\u9010\u6761\u7684\u904D\u5386\uFF08\u5305\u62EC\u6355\u83B7\u5230\u7684\u5339\u914D\uFF09\uFF0C\u800C\u76F8\u6BD4\u4E4B\u4E0B\uFF0C<code>String.prototype.match</code> \u53EA\u4F1A\u8FD4\u56DE\u5339\u914D\u5230\u7684\u7ED3\u679C\u3002</p><blockquote><p>\u7A0D\u5FAE\u6D4B\u8BD5\u4E0B\u5927\u6982\u4F1A\u4FDD\u7559 10s+\u3002</p></blockquote><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><h3 id="_1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-\u793A\u4F8B" aria-hidden="true">#</a> 1. \u793A\u4F8B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;table football, foosball&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr<span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>arr <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Next starts at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>reg<span class="token punctuation">.</span>lastIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// &quot;Found foo. Next starts at 9.&quot;</span>
<span class="token comment">// &quot;Found foo. Next starts at 19.&quot;</span>
</code></pre></div><h3 id="_2-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_2-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 2. \u8FD4\u56DE\u503C</h3><p>\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u66F4\u65B0\u6B63\u5219\u5BF9\u8C61\u7684 <code>lastIndex</code> \u5C5E\u6027\u3002</p><p>\u5982\u679C\u5339\u914D\u5931\u8D25\uFF0C<code>exec</code> \u65B9\u6CD5\u8FD4\u56DE <code>null</code>\uFF0C\u5E76\u5C06 <code>lastIndex</code> \u91CD\u7F6E\u4E3A 0\u3002</p><blockquote><p>\u88AB\u63D0\u5230\u8FD9\u4E48\u591A\u6B21\u7684 <code>lastIndex</code> \u662F\u4EC0\u4E48\uFF1F\u5B83\u662F\u4E0B\u4E00\u6B21\u5339\u914D\u5F00\u59CB\u7684\u4F4D\u7F6E\u3002\u8FD9\u5C31\u662F\u5339\u914D\u5230 <code>null</code> \u7684\u539F\u56E0\u3002</p></blockquote>`,11);function t(o,p){return e}var r=a(s,[["render",t]]);export{r as default};
