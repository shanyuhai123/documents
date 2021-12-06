import{e as n}from"./app.8173c635.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=n(`<h1 id="\u6C49\u660E\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u6C49\u660E\u8DDD\u79BB" aria-hidden="true">#</a> \u6C49\u660E\u8DDD\u79BB</h1><p>\u5B9E\u9645\u5C31\u662F\u6309\u4F4D\u5F02\u6216\u8FD0\u7B97\u540E\uFF0C\u7EDF\u8BA1 <code>1</code> \u7684\u4E2A\u6570\u3002</p><h2 id="\u4E00\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7684\u4E2A\u6570" aria-hidden="true">#</a> \u4E00\u7684\u4E2A\u6570</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hammingDistance</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> xor <span class="token operator">=</span> x <span class="token operator">^</span> y

  <span class="token keyword">while</span> <span class="token punctuation">(</span>xor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xor <span class="token operator">&amp;=</span> xor <span class="token operator">-</span> <span class="token number">1</span>
    count<span class="token operator">++</span>
  <span class="token punctuation">}</span> 

  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(p,o){return e}var l=a(s,[["render",t]]);export{l as default};
