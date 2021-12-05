import{e as n}from"./app.12dbcc98.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386</h1><p>\u5DE6\u5B50\u6811 =&gt; \u6839\u8282\u70B9 =&gt; \u53F3\u5B50\u6811</p><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><p>\u5229\u7528\u51FD\u6570\u6267\u884C\u6808\u5373\u53EF\u5FEB\u901F\u5B9E\u73B0\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">inorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3" aria-hidden="true">#</a> \u8FED\u4EE3</h2><p>\u9012\u5F52\u9690\u5F0F\u5730\u7EF4\u62A4\u4E86\u4E00\u4E2A\u6808\uFF0C\u800C\u8FED\u4EE3\u5219\u9700\u8981\u624B\u52A8\u7EF4\u62A4\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    root <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token operator">!</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    root <span class="token operator">=</span> root<span class="token operator">!</span><span class="token punctuation">.</span>right
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,8);function p(o,e){return t}var r=s(a,[["render",p]]);export{r as default};
