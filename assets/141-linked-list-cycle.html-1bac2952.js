import{_ as s,p as n,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="环形链表" tabindex="-1"><a class="header-anchor" href="#环形链表" aria-hidden="true">#</a> 环形链表</h1><p>要求常量空间。</p><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><p>环形链表快指针可以追上慢指针。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,5),e=[o];function c(l,r){return n(),a("div",null,e)}const u=s(p,[["render",c],["__file","141-linked-list-cycle.html.vue"]]);export{u as default};
