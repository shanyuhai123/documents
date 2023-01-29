import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const p={},o=t(`<h1 id="外观数列" tabindex="-1"><a class="header-anchor" href="#外观数列" aria-hidden="true">#</a> 外观数列</h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span>

  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> prev <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> s <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prev<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>

      count <span class="token operator">=</span> <span class="token number">1</span>
      prev <span class="token operator">=</span> s
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 追加数据</span>
  ret <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prev<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","38-count-and-say.html.vue"]]);export{i as default};
