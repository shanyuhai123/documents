import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const o={},t=e(`<h1 id="大的国家" tabindex="-1"><a class="header-anchor" href="#大的国家" aria-hidden="true">#</a> 大的国家</h1><h2 id="or" tabindex="-1"><a class="header-anchor" href="#or" aria-hidden="true">#</a> OR</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  name<span class="token punctuation">,</span>
  population<span class="token punctuation">,</span>
  area
<span class="token keyword">FROM</span>
  World
<span class="token keyword">WHERE</span>
  population <span class="token operator">&gt;</span> <span class="token number">25000000</span> <span class="token operator">OR</span> area <span class="token operator">&gt;</span> <span class="token number">3000000</span>
</code></pre></div>`,3),r=[t];function c(p,l){return n(),s("div",null,r)}const i=a(o,[["render",c],["__file","595-big-countries.html.vue"]]);export{i as default};
