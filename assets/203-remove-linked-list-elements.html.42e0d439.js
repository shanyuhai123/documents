import{e as n}from"./app.6e6a2271.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u79FB\u9664\u94FE\u8868\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u94FE\u8868\u5143\u7D20" aria-hidden="true">#</a> \u79FB\u9664\u94FE\u8868\u5143\u7D20</h1><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>

  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> val <span class="token operator">?</span> head<span class="token punctuation">.</span>next <span class="token operator">:</span> head
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3" aria-hidden="true">#</a> \u8FED\u4EE3</h2><p>\u8FED\u4EE3\u5728\u5904\u7406 <code>head</code> \u65F6\u6709\u70B9\u9EBB\u70E6\uFF0C\u589E\u52A0\u4E00\u4E2A\u865A\u62DF <code>node</code> \u5219\u5F88\u5BB9\u6613\u5C31\u89E3\u51B3\u95EE\u9898\u4E86\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u865A\u62DF node</span>
  <span class="token keyword">const</span> dummyNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  <span class="token keyword">let</span> exec <span class="token operator">=</span> dummyNode

  <span class="token keyword">while</span> <span class="token punctuation">(</span>exec<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exec<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      exec<span class="token punctuation">.</span>next <span class="token operator">=</span> exec<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      exec <span class="token operator">=</span> exec<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre></div>`,6);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
