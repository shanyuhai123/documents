import{e as a}from"./app.64e25aee.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=a(`<h1 id="\u6709\u8DA3\u7684\u7535\u5F71" tabindex="-1"><a class="header-anchor" href="#\u6709\u8DA3\u7684\u7535\u5F71" aria-hidden="true">#</a> \u6709\u8DA3\u7684\u7535\u5F71</h1><h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> ORDER BY</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span>
  cinema
<span class="token keyword">WHERE</span>
  description <span class="token operator">!=</span> <span class="token string">&#39;boring&#39;</span> <span class="token operator">AND</span> id <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> rating <span class="token keyword">DESC</span>
</code></pre></div>`,3);function r(o,p){return e}var d=s(n,[["render",r]]);export{d as default};
