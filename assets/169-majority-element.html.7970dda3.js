import{e as n}from"./app.9ebfcdbd.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u591A\u6570\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u591A\u6570\u5143\u7D20" aria-hidden="true">#</a> \u591A\u6570\u5143\u7D20</h1><p>\u6700\u76F4\u767D\u7684\u81EA\u7136\u662F\u54C8\u5E0C\u8868\u8BA1\u6570\u3002</p><h2 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h2><p>\u6392\u5E8F\u540E\u4E2D\u95F4\u7684\u503C\u4E00\u5B9A\u662F\u4F17\u6570\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6295\u7968\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6295\u7968\u6CD5" aria-hidden="true">#</a> \u6295\u7968\u6CD5</h2><p>\u76F4\u89C9\u662F\u60F3\u5230\u6808\u4E86\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F18\u5316\u4E0B\u7A7A\u95F4\u590D\u6742\u5EA6\uFF0C\u5219\u53EF\u4EE5\u5F97\u5230\u6295\u7968\u6CD5\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> candidate <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      candidate <span class="token operator">=</span> n
    <span class="token punctuation">}</span>

    count <span class="token operator">+=</span> candidate <span class="token operator">===</span> n <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> candidate
<span class="token punctuation">}</span>
</code></pre></div>`,10);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
