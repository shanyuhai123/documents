import{_ as n,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function o(r,a){return s(),e("div",null,a[0]||(a[0]=[t(`<h1 id="上升的温度" tabindex="-1"><a class="header-anchor" href="#上升的温度" aria-hidden="true">#</a> 上升的温度</h1><h2 id="日期比较" tabindex="-1"><a class="header-anchor" href="#日期比较" aria-hidden="true">#</a> 日期比较</h2><p>借助日期比较函数。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  w1<span class="token punctuation">.</span>id
<span class="token keyword">FROM</span>
  Weather w1<span class="token punctuation">,</span>
  Weather w2
<span class="token keyword">WHERE</span> DATEDIFF<span class="token punctuation">(</span>w1<span class="token punctuation">.</span>recordDate<span class="token punctuation">,</span> w2<span class="token punctuation">.</span>recordDate<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">AND</span> w1<span class="token punctuation">.</span>temperature <span class="token operator">&gt;</span> w2<span class="token punctuation">.</span>temperature
</code></pre></div>`,4)]))}const l=n(p,[["render",o],["__file","197-rising-temperature.html.vue"]]);export{l as default};
