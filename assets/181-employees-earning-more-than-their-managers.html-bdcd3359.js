import{_ as n,p as s,q as e,a1 as o}from"./framework-e3e34937.js";const t={};function p(r,a){return s(),e("div",null,a[0]||(a[0]=[o(`<h1 id="超过经理收入的员工" tabindex="-1"><a class="header-anchor" href="#超过经理收入的员工" aria-hidden="true">#</a> 超过经理收入的员工</h1><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>Name <span class="token keyword">as</span> <span class="token string">&#39;Employee&#39;</span>
<span class="token keyword">FROM</span>
  Employee <span class="token keyword">as</span> e<span class="token punctuation">,</span>
  Employee <span class="token keyword">as</span> m
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> m<span class="token punctuation">.</span>Id <span class="token operator">AND</span> e<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>Salary
</code></pre></div>`,3)]))}const c=n(t,[["render",p],["__file","181-employees-earning-more-than-their-managers.html.vue"]]);export{c as default};
