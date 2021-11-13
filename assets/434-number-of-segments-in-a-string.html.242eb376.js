import{e as n}from"./app.e62aeb11.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">countSegments</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> last <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> ch <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> last <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    last <span class="token operator">=</span> ch
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> last <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">?</span> count <span class="token operator">:</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
