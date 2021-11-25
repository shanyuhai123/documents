import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u7B2C\u4E09\u5927\u7684\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u5927\u7684\u6570" aria-hidden="true">#</a> \u7B2C\u4E09\u5927\u7684\u6570</h1><h2 id="\u4E09\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E09\u4E2A\u6570" aria-hidden="true">#</a> \u4E09\u4E2A\u6570</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">thirdMax</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c <span class="token operator">=</span> b
      b <span class="token operator">=</span> a
      a <span class="token operator">=</span> num
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> a <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c <span class="token operator">=</span> b
      b <span class="token operator">=</span> num
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> b <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c <span class="token operator">=</span> num
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> c <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">Infinity</span> <span class="token operator">?</span> a <span class="token operator">:</span> c
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53BB\u91CD\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u53BB\u91CD\u6392\u5E8F" aria-hidden="true">#</a> \u53BB\u91CD\u6392\u5E8F</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">thirdMax</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">?</span> ret<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">:</span> ret<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};