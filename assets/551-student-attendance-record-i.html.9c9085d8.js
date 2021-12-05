import{e as n}from"./app.6c4bd88e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5B66\u751F\u51FA\u52E4\u8BB0\u5F55-i" tabindex="-1"><a class="header-anchor" href="#\u5B66\u751F\u51FA\u52E4\u8BB0\u5F55-i" aria-hidden="true">#</a> \u5B66\u751F\u51FA\u52E4\u8BB0\u5F55 I</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkRecord</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u7EDF\u8BA1 A</span>
  <span class="token keyword">let</span> lc <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u7EDF\u8BA1 L</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ac<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lc<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      lc <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ac <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">||</span> lc <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
