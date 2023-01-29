import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const o={},t=e(`<h1 id="超过经理收入的员工" tabindex="-1"><a class="header-anchor" href="#超过经理收入的员工" aria-hidden="true">#</a> 超过经理收入的员工</h1><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>Name <span class="token keyword">as</span> <span class="token string">&#39;Employee&#39;</span>
<span class="token keyword">FROM</span>
  Employee <span class="token keyword">as</span> e<span class="token punctuation">,</span>
  Employee <span class="token keyword">as</span> m
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> m<span class="token punctuation">.</span>Id <span class="token operator">AND</span> e<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>Salary
</code></pre></div>`,3),p=[t];function r(c,l){return n(),s("div",null,p)}const d=a(o,[["render",r],["__file","181-employees-earning-more-than-their-managers.html.vue"]]);export{d as default};
