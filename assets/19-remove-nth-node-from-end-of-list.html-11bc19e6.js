import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="删除链表的倒数第-n-个结点" tabindex="-1"><a class="header-anchor" href="#删除链表的倒数第-n-个结点" aria-hidden="true">#</a> 删除链表的倒数第 N 个结点</h1><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> dummy<span class="token punctuation">,</span> slow <span class="token operator">=</span> dummy

  <span class="token comment">// 快指针先走 n 步</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 修改指向</span>
  slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","19-remove-nth-node-from-end-of-list.html.vue"]]);export{k as default};
