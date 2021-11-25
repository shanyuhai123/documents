import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u52A0\u4E00" tabindex="-1"><a class="header-anchor" href="#\u52A0\u4E00" aria-hidden="true">#</a> \u52A0\u4E00</h1><h2 id="\u8FDB\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u4F4D" aria-hidden="true">#</a> \u8FDB\u4F4D</h2><p>\u8981\u89E3\u51B3\u8FDB\u4F4D\u7684\u95EE\u9898\uFF0C\u4E14\u8FDE\u7EED\u8FDB\u4F4D\u5982 <code>[9, 9]</code> \u4F1A\u5BFC\u81F4\u957F\u5EA6\u53D8\u5316 <code>[1, 0, 0]</code>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token boolean">false</span>
  digits<span class="token punctuation">[</span>digits<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">++</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> digits<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
    carry <span class="token operator">=</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">9</span>
    digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> digits
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var i=s(a,[["render",t]]);export{i as default};