import{_ as a,p as n,q as e,a1 as t}from"./framework-e3e34937.js";const o={};function c(r,s){return n(),e("div",null,s[0]||(s[0]=[t(`<h1 id="超过-5-名学生的课" tabindex="-1"><a class="header-anchor" href="#超过-5-名学生的课" aria-hidden="true">#</a> 超过 5 名学生的课</h1><h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  class
<span class="token keyword">FROM</span>
  courses
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> student<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">5</span>
</code></pre></div>`,3)]))}const p=a(o,[["render",c],["__file","596-classes-more-than-5-students.html.vue"]]);export{p as default};
