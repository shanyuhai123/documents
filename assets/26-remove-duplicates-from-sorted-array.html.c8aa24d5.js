import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" aria-hidden="true">#</a> \u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879</h1><p>\u8981\u6C42\u8FD4\u56DE\u7684\u662F\u65B0\u6570\u7EC4\u7684\u957F\u5EA6\u3002</p><h2 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// i \u504F\u79FB\uFF0C\u5E76\u8D4B\u503C</span>
      nums<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};