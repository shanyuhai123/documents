import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="fizz-buzz" tabindex="-1"><a class="header-anchor" href="#fizz-buzz" aria-hidden="true">#</a> Fizz Buzz</h1><h2 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h2><p>按照顺序推入 <code>Fizz Buzz</code>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fizzBuzz</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Fizz&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Buzz&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","412-fizz-buzz.html.vue"]]);export{k as default};
