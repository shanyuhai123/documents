import{_ as n,p as s,q as a,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>可以从少的节点开始考虑，当两个节点时一个简单的思路是形成环，再断开。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head

  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev
    prev <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> prev
<span class="token punctuation">}</span>
</code></pre></div>`,6),o=[p];function c(r,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","206-reverse-linked-list.html.vue"]]);export{u as default};
