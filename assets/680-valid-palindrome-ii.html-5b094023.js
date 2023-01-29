import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="验证回文字符串-ii" tabindex="-1"><a class="header-anchor" href="#验证回文字符串-ii" aria-hidden="true">#</a> 验证回文字符串 Ⅱ</h1><p>最多删除一个字符，可认为有一次容错。</p><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">validPalindrome</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">const</span> valid <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> l<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> r<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      l<span class="token operator">++</span>
      r<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">++</span>
      right<span class="token operator">--</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 容错可以从左边，也可以从右边。</span>
      <span class="token keyword">return</span> <span class="token function">valid</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">valid</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","680-valid-palindrome-ii.html.vue"]]);export{k as default};
