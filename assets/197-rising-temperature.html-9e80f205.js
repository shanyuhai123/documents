import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="上升的温度" tabindex="-1"><a class="header-anchor" href="#上升的温度" aria-hidden="true">#</a> 上升的温度</h1><h2 id="日期比较" tabindex="-1"><a class="header-anchor" href="#日期比较" aria-hidden="true">#</a> 日期比较</h2><p>借助日期比较函数。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  w1<span class="token punctuation">.</span>id
<span class="token keyword">FROM</span>
  Weather w1<span class="token punctuation">,</span>
  Weather w2
<span class="token keyword">WHERE</span> DATEDIFF<span class="token punctuation">(</span>w1<span class="token punctuation">.</span>recordDate<span class="token punctuation">,</span> w2<span class="token punctuation">.</span>recordDate<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">AND</span> w1<span class="token punctuation">.</span>temperature <span class="token operator">&gt;</span> w2<span class="token punctuation">.</span>temperature
</code></pre></div>`,4),o=[p];function c(r,l){return n(),s("div",null,o)}const u=a(t,[["render",c],["__file","197-rising-temperature.html.vue"]]);export{u as default};
