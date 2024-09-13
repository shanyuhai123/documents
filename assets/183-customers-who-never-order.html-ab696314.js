import{_ as a,p as n,q as e,a1 as o}from"./framework-e3e34937.js";const t={};function r(c,s){return n(),e("div",null,s[0]||(s[0]=[o(`<h1 id="从不订购的客户" tabindex="-1"><a class="header-anchor" href="#从不订购的客户" aria-hidden="true">#</a> 从不订购的客户</h1><h2 id="not-in" tabindex="-1"><a class="header-anchor" href="#not-in" aria-hidden="true">#</a> NOT IN</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  name <span class="token keyword">as</span> <span class="token string">&#39;Customers&#39;</span>
<span class="token keyword">FROM</span> Customers c
<span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span>
    customerId
  <span class="token keyword">FROM</span> Orders
<span class="token punctuation">)</span>
</code></pre></div>`,3)]))}const d=a(t,[["render",r],["__file","183-customers-who-never-order.html.vue"]]);export{d as default};
