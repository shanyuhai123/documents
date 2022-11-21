import{e as s}from"./app.b7a98728.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=s(`<h1 id="\u8D85\u8FC7-5-\u540D\u5B66\u751F\u7684\u8BFE" tabindex="-1"><a class="header-anchor" href="#\u8D85\u8FC7-5-\u540D\u5B66\u751F\u7684\u8BFE" aria-hidden="true">#</a> \u8D85\u8FC7 5 \u540D\u5B66\u751F\u7684\u8BFE</h1><h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  class
<span class="token keyword">FROM</span>
  courses
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> student<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">5</span>
</code></pre></div>`,3);function t(o,r){return e}var d=a(n,[["render",t]]);export{d as default};
