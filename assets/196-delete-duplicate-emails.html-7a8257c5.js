import{_ as a,p as e,q as s,a1 as n}from"./framework-49860b1b.js";const t={},o=n(`<h1 id="删除重复的电子邮箱" tabindex="-1"><a class="header-anchor" href="#删除重复的电子邮箱" aria-hidden="true">#</a> 删除重复的电子邮箱</h1><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span>
  p1
<span class="token keyword">FROM</span>
  Person p1<span class="token punctuation">,</span>
  Person p2
<span class="token keyword">WHERE</span> p1<span class="token punctuation">.</span>email <span class="token operator">=</span> p2<span class="token punctuation">.</span>email <span class="token operator">AND</span> p1<span class="token punctuation">.</span>id <span class="token operator">&gt;</span> p2<span class="token punctuation">.</span>id
</code></pre></div>`,3),p=[o];function c(l,r){return e(),s("div",null,p)}const i=a(t,[["render",c],["__file","196-delete-duplicate-emails.html.vue"]]);export{i as default};
