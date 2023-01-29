import{_ as a,p as s,q as n,a1 as e}from"./framework-49860b1b.js";const o={},r=e(`<h1 id="有趣的电影" tabindex="-1"><a class="header-anchor" href="#有趣的电影" aria-hidden="true">#</a> 有趣的电影</h1><h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> ORDER BY</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span>
  cinema
<span class="token keyword">WHERE</span>
  description <span class="token operator">!=</span> <span class="token string">&#39;boring&#39;</span> <span class="token operator">AND</span> id <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> rating <span class="token keyword">DESC</span>
</code></pre></div>`,3),t=[r];function p(c,d){return s(),n("div",null,t)}const i=a(o,[["render",p],["__file","620-not-boring-movies.html.vue"]]);export{i as default};
