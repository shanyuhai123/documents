import{e as n}from"./app.fdddc89c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u4E8C\u53C9\u6811\u4E2D\u7B2C\u4E8C\u5C0F\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u4E2D\u7B2C\u4E8C\u5C0F\u7684\u8282\u70B9" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u4E2D\u7B2C\u4E8C\u5C0F\u7684\u8282\u70B9</h1><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findSecondMinimumValue</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ret

  <span class="token keyword">let</span> min <span class="token operator">=</span> root<span class="token punctuation">.</span>val
  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> ret<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">=</span> root<span class="token punctuation">.</span>val
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
