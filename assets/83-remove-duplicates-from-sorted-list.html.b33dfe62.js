import{e as n}from"./app.95b45dea.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" aria-hidden="true">#</a> \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><p>\u7531\u4E8E\u6570\u636E\u662F\u6392\u5E8F\u7684\uFF0C\u6240\u4EE5\u904D\u5386\u5373\u53EF\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> head

  <span class="token keyword">let</span> cur<span class="token operator">:</span> ListNode <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre></div>`,4);function p(e,o){return t}var u=a(s,[["render",p]]);export{u as default};
