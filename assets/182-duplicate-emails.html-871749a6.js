import{_ as n,M as t,p as o,q as c,Q as e,t as a,N as l,V as r,a1 as p}from"./framework-49860b1b.js";const d={},i=e("h1",{id:"超找重复的电子邮箱",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#超找重复的电子邮箱","aria-hidden":"true"},"#"),a(" 超找重复的电子邮箱")],-1),u=p(`<h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  email
<span class="token keyword">FROM</span> Person
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> email
<span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre></div>`,2);function h(k,_){const s=t("RouterLink");return o(),c("div",null,[i,e("p",null,[a("关于 "),l(s,{to:"/backend/mysql/select.html#%E5%88%86%E7%BB%84"},{default:r(()=>[a("HAVING")]),_:1}),a("。")]),u])}const f=n(d,[["render",h],["__file","182-duplicate-emails.html.vue"]]);export{f as default};
