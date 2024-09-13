import{_ as a,p as s,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return s(),t("div",null,n[0]||(n[0]=[p(`<h1 id="构造矩形" tabindex="-1"><a class="header-anchor" href="#构造矩形" aria-hidden="true">#</a> 构造矩形</h1><h2 id="开方" tabindex="-1"><a class="header-anchor" href="#开方" aria-hidden="true">#</a> 开方</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">constructRectangle</span><span class="token punctuation">(</span>area<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// 向下取整所以为 w</span>
  <span class="token keyword">let</span> w <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>area <span class="token operator">%</span> w <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    w<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>area <span class="token operator">/</span> w<span class="token punctuation">,</span> w<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const u=a(e,[["render",o],["__file","492-construct-the-rectangle.html.vue"]]);export{u as default};
