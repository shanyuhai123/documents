import{e as n}from"./app.512cf885.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u4F4D-1-\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F4D-1-\u7684\u4E2A\u6570" aria-hidden="true">#</a> \u4F4D 1 \u7684\u4E2A\u6570</h1><p>\u53EF\u4ECE<a href="./190-reverse-bits">\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D</a>\u4E2D\u5438\u53D6\u6B65\u9AA4\u3002</p><h2 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97</h2><p>\u4ECE\u6700\u4F4E\u4F4D\u7684 1 \u5F00\u59CB\u7FFB\u8F6C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">&amp;=</span> n <span class="token operator">-</span> <span class="token number">1</span>
    ret<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,7);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
