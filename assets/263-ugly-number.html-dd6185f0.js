import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="丑数" tabindex="-1"><a class="header-anchor" href="#丑数" aria-hidden="true">#</a> 丑数</h1><h2 id="数学" tabindex="-1"><a class="header-anchor" href="#数学" aria-hidden="true">#</a> 数学</h2><p>从 <code>5、3、2</code> 依次处理即可。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isUgly</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> uglyNumArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> u <span class="token keyword">of</span> uglyNumArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> u <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n <span class="token operator">/=</span> u
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  

  <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const u=s(e,[["render",o],["__file","263-ugly-number.html.vue"]]);export{u as default};
