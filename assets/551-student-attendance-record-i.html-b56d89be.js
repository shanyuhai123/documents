import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="学生出勤记录-i" tabindex="-1"><a class="header-anchor" href="#学生出勤记录-i" aria-hidden="true">#</a> 学生出勤记录 I</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkRecord</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 统计 A</span>
  <span class="token keyword">let</span> lc <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 统计 L</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ac<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lc<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      lc <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ac <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">||</span> lc <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","551-student-attendance-record-i.html.vue"]]);export{u as default};
