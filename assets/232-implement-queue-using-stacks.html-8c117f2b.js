import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="用栈实现队列" tabindex="-1"><a class="header-anchor" href="#用栈实现队列" aria-hidden="true">#</a> 用栈实现队列</h1><h2 id="双栈" tabindex="-1"><a class="header-anchor" href="#双栈" aria-hidden="true">#</a> 双栈</h2><p>栈先进后出，需要另一个栈模拟队列。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
  #inStack<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  #outStack<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">private</span> <span class="token function">in2out</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#inStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#inStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#inStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">in2out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
  <span class="token punctuation">}</span>

  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">in2out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#inStack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#outStack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),c=[o];function e(u,k){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","232-implement-queue-using-stacks.html.vue"]]);export{i as default};
