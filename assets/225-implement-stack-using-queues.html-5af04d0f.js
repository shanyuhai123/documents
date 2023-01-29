import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="用队列实现栈" tabindex="-1"><a class="header-anchor" href="#用队列实现栈" aria-hidden="true">#</a> 用队列实现栈</h1><h2 id="复刻" tabindex="-1"><a class="header-anchor" href="#复刻" aria-hidden="true">#</a> 复刻</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyStack</span> <span class="token punctuation">{</span>
  #queue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">push</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
  <span class="token punctuation">}</span>

  <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","225-implement-stack-using-queues.html.vue"]]);export{i as default};
