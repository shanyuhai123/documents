import{e as n}from"./app.5799edae.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u7B2C-n-\u4E2A\u6CF0\u6CE2\u90A3\u5951\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C-n-\u4E2A\u6CF0\u6CE2\u90A3\u5951\u6570" aria-hidden="true">#</a> \u7B2C N \u4E2A\u6CF0\u6CE2\u90A3\u5951\u6570</h1><p>\u76F8\u5BF9\u4E8E<a href="./509-fibonacci-number">\u6590\u6CE2\u90A3\u5951\u6570</a>\u4EC5\u591A\u4E86\u4E00\u4E2A\u53D8\u91CF\u3002</p><h2 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">tribonacci</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> p <span class="token operator">+</span> q <span class="token operator">+</span> r
    p <span class="token operator">=</span> q
    q <span class="token operator">=</span> r
    r <span class="token operator">=</span> sum
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> r
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
