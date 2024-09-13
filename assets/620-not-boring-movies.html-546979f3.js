import{_ as s,p as n,q as e,a1 as o}from"./framework-e3e34937.js";const r={};function t(p,a){return n(),e("div",null,a[0]||(a[0]=[o(`<h1 id="有趣的电影" tabindex="-1"><a class="header-anchor" href="#有趣的电影" aria-hidden="true">#</a> 有趣的电影</h1><h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> ORDER BY</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span>
  cinema
<span class="token keyword">WHERE</span>
  description <span class="token operator">!=</span> <span class="token string">&#39;boring&#39;</span> <span class="token operator">AND</span> id <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> rating <span class="token keyword">DESC</span>
</code></pre></div>`,3)]))}const l=s(r,[["render",t],["__file","620-not-boring-movies.html.vue"]]);export{l as default};
