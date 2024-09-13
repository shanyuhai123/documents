import{_ as a,p as s,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return s(),t("div",null,n[0]||(n[0]=[p(`<h1 id="删除排序链表中的重复元素" tabindex="-1"><a class="header-anchor" href="#删除排序链表中的重复元素" aria-hidden="true">#</a> 删除排序链表中的重复元素</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><p>由于数据是排序的，所以遍历即可。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,4)]))}const u=a(e,[["render",o],["__file","83-remove-duplicates-from-sorted-list.html.vue"]]);export{u as default};
