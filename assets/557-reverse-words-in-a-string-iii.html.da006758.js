import{e as n}from"./app.909a0f8c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD-iii" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD-iii" aria-hidden="true">#</a> \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD III</h1><p>\u9700\u8981\u5148\u786E\u8BA4\u5355\u8BCD\u4F4D\u7F6E\u3002</p><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> i

    <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      str <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> str
      j<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    i <span class="token operator">=</span> j
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
