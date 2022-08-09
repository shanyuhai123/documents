import{e as n}from"./app.b542ffb8.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6C42\u5E73\u65B9\u6839" tabindex="-1"><a class="header-anchor" href="#\u6C42\u5E73\u65B9\u6839" aria-hidden="true">#</a> \u6C42\u5E73\u65B9\u6839</h1><h2 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h2><p>\u5728\u4E0D\u5141\u8BB8\u7528\u539F\u5185\u7F6E\u6570\u5B66\u8BA1\u7B97\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u4E8C\u5206\u6CD5\u903C\u8FD1\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> x<span class="token punctuation">,</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">=</span> mid
      start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
