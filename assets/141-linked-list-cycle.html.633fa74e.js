import{e as s}from"./app.f8563da2.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=s(`<h1 id="\u73AF\u5F62\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5F62\u94FE\u8868" aria-hidden="true">#</a> \u73AF\u5F62\u94FE\u8868</h1><p>\u8981\u6C42\u5E38\u91CF\u7A7A\u95F4\u3002</p><h2 id="\u5FEB\u6162\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6162\u6307\u9488" aria-hidden="true">#</a> \u5FEB\u6162\u6307\u9488</h2><p>\u73AF\u5F62\u94FE\u8868\u5FEB\u6307\u9488\u53EF\u4EE5\u8FFD\u4E0A\u6162\u6307\u9488\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token keyword">let</span> slow<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head
  <span class="token keyword">let</span> fast<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function t(o,e){return p}var r=n(a,[["render",t]]);export{r as default};
