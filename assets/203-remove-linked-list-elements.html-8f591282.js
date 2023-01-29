import{_ as n,p as s,q as a,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="移除链表元素" tabindex="-1"><a class="header-anchor" href="#移除链表元素" aria-hidden="true">#</a> 移除链表元素</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>

  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> val <span class="token operator">?</span> head<span class="token punctuation">.</span>next <span class="token operator">:</span> head
<span class="token punctuation">}</span>
</code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>迭代在处理 <code>head</code> 时有点麻烦，增加一个虚拟 <code>node</code> 则很容易就解决问题了。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// 虚拟 node</span>
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
</code></pre></div>`,6),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","203-remove-linked-list-elements.html.vue"]]);export{r as default};
