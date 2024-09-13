import{_ as n,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const o={};function p(c,a){return s(),e("div",null,a[0]||(a[0]=[t(`<h1 id="组合两个表" tabindex="-1"><a class="header-anchor" href="#组合两个表" aria-hidden="true">#</a> 组合两个表</h1><p>数据库<a href="/backend/mysql/join-and-union">多表查询</a>。</p><h2 id="outer-join" tabindex="-1"><a class="header-anchor" href="#outer-join" aria-hidden="true">#</a> outer join</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  p<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span>
  p<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>City<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>State
<span class="token keyword">FROM</span> Person p
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Address a
  <span class="token keyword">ON</span> p<span class="token punctuation">.</span>PersonId <span class="token operator">=</span> a<span class="token punctuation">.</span>PersonId
</code></pre></div>`,4)]))}const l=n(o,[["render",p],["__file","175-combine-two-tables.html.vue"]]);export{l as default};
