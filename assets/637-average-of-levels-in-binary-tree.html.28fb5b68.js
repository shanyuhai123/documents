import{e as n}from"./app.b7a98728.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u4E8C\u53C9\u6811\u7684\u5C42\u5E73\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u5C42\u5E73\u5747\u503C" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u7684\u5C42\u5E73\u5747\u503C</h1><h2 id="\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3" aria-hidden="true">#</a> \u8FED\u4EE3</h2><p>\u9012\u5F52\u8FD8\u9700\u8981\u7EF4\u62A4\u5C42\u6570\uFF0C\u8FED\u4EE3\u5219\u76F4\u63A5\u4E00\u4E9B\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">averageOfLevels</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ret

  <span class="token keyword">let</span> line<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>line<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> next<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
    line<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>node <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      total <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>total <span class="token operator">/</span> line<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    line <span class="token operator">=</span> next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
