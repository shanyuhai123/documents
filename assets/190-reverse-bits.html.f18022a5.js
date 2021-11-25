import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D" aria-hidden="true">#</a> \u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D</h1><p>\u6284\u3002</p><h2 id="\u9010\u4F4D\u98A0\u5012" tabindex="-1"><a class="header-anchor" href="#\u9010\u4F4D\u98A0\u5012" aria-hidden="true">#</a> \u9010\u4F4D\u98A0\u5012</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseBits</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> rev <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// n &amp; 1 \u8BA1\u7B97\u5F97\u5230\u9996\u4F4D</span>
    <span class="token comment">// \u4E8C\u8FDB\u5236\u4F4D\u4E0E =&gt; \u6309\u4F4D\u5DE6\u79FB =&gt; \u4E8C\u8FDB\u5236\u4F4D\u6216</span>
    rev <span class="token operator">|=</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">31</span> <span class="token operator">-</span> i<span class="token punctuation">)</span>
    n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span> <span class="token comment">// \u539F\u6570\u636E\u65E0\u7B26\u53F7\u6309\u4F4D\u53F3\u79FB</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> rev <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};