import{e as n}from"./app.9226fedc.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u6784\u9020\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u77E9\u5F62" aria-hidden="true">#</a> \u6784\u9020\u77E9\u5F62</h1><h2 id="\u5F00\u65B9" tabindex="-1"><a class="header-anchor" href="#\u5F00\u65B9" aria-hidden="true">#</a> \u5F00\u65B9</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">constructRectangle</span><span class="token punctuation">(</span>area<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5411\u4E0B\u53D6\u6574\u6240\u4EE5\u4E3A w</span>
  <span class="token keyword">let</span> w <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>area <span class="token operator">%</span> w <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    w<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>area <span class="token operator">/</span> w<span class="token punctuation">,</span> w<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(e,o){return t}var u=a(s,[["render",p]]);export{u as default};
