import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#合并两个有序链表" aria-hidden="true">#</a> 合并两个有序链表</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> l2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> l2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> list

  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">.</span>next <span class="token operator">=</span> l1
      l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">.</span>next <span class="token operator">=</span> l2
      l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    list <span class="token operator">=</span> list<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  list<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">?</span> l1 <span class="token operator">:</span> l2

  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(l,k){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","21-merge-two-sorted-lists.html.vue"]]);export{r as default};
