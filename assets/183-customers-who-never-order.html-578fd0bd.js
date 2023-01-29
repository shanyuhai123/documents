import{_ as s,p as a,q as n,a1 as e}from"./framework-49860b1b.js";const o={},t=e(`<h1 id="从不订购的客户" tabindex="-1"><a class="header-anchor" href="#从不订购的客户" aria-hidden="true">#</a> 从不订购的客户</h1><h2 id="not-in" tabindex="-1"><a class="header-anchor" href="#not-in" aria-hidden="true">#</a> NOT IN</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  name <span class="token keyword">as</span> <span class="token string">&#39;Customers&#39;</span>
<span class="token keyword">FROM</span> Customers c
<span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span>
    customerId
  <span class="token keyword">FROM</span> Orders
<span class="token punctuation">)</span>
</code></pre></div>`,3),r=[t];function c(p,d){return a(),n("div",null,r)}const i=s(o,[["render",c],["__file","183-customers-who-never-order.html.vue"]]);export{i as default};
