import{_ as s,p as a,q as n,a1 as e}from"./framework-49860b1b.js";const t={},o=e(`<h1 id="超过-5-名学生的课" tabindex="-1"><a class="header-anchor" href="#超过-5-名学生的课" aria-hidden="true">#</a> 超过 5 名学生的课</h1><h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  class
<span class="token keyword">FROM</span>
  courses
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> student<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">5</span>
</code></pre></div>`,3),c=[o];function r(l,p){return a(),n("div",null,c)}const i=s(t,[["render",r],["__file","596-classes-more-than-5-students.html.vue"]]);export{i as default};
