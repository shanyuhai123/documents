import{e as n}from"./app.251b955a.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u9A8C\u8BC1\u56DE\u6587\u5B57\u7B26\u4E32-ii" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u56DE\u6587\u5B57\u7B26\u4E32-ii" aria-hidden="true">#</a> \u9A8C\u8BC1\u56DE\u6587\u5B57\u7B26\u4E32 \u2161</h1><p>\u6700\u591A\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\uFF0C\u53EF\u8BA4\u4E3A\u6709\u4E00\u6B21\u5BB9\u9519\u3002</p><h2 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">validPalindrome</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">const</span> valid <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> l<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> r<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      l<span class="token operator">++</span>
      r<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">++</span>
      right<span class="token operator">--</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5BB9\u9519\u53EF\u4EE5\u4ECE\u5DE6\u8FB9\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u53F3\u8FB9\u3002</span>
      <span class="token keyword">return</span> <span class="token function">valid</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">valid</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
