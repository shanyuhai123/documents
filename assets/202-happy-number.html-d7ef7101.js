import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="快乐数" tabindex="-1"><a class="header-anchor" href="#快乐数" aria-hidden="true">#</a> 快乐数</h1><p>寻找其终结条件。</p><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h2><p>数字重复时自然就可以结束了。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token comment">// 可切换为递归</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    n <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><p>会重复的问题可以该思路。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> slow <span class="token operator">=</span> n
  <span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span>
    fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span><span class="token function">calcNext</span><span class="token punctuation">(</span>fast<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> fast <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","202-happy-number.html.vue"]]);export{u as default};
