import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="回文链表" tabindex="-1"><a class="header-anchor" href="#回文链表" aria-hidden="true">#</a> 回文链表</h1><p>第一思路就是整成数组，然后就可参考<a href="./125-valid-palindrome">验证回文串</a>。</p><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><p>链表难的点就在于不能很快找到中间，所以这一题可以当作找到链表中间的练习，最后配合<a href="./206-reverse-linked-list">反转链表</a>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> getHalfNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head

  <span class="token comment">// ts 代码提示还是差一点，slow.next 存在了，fast 还需要加 \`!\`</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token operator">!</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> slow
<span class="token punctuation">}</span>

<span class="token keyword">const</span> reverseListNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head

  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span><span class="token function">getHalfNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span>

  <span class="token keyword">let</span> left <span class="token operator">=</span> head
  <span class="token keyword">let</span> right <span class="token operator">=</span> end
  <span class="token comment">// 右边可能会少，以右判断结束</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token operator">!</span>
    right <span class="token operator">=</span> right<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5)]))}const k=s(o,[["render",e],["__file","234-palindrome-linked-list.html.vue"]]);export{k as default};
