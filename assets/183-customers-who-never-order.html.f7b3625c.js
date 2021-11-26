import{e as s}from"./app.874e1a09.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=s(`<h1 id="\u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237" aria-hidden="true">#</a> \u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237</h1><h2 id="not-in" tabindex="-1"><a class="header-anchor" href="#not-in" aria-hidden="true">#</a> NOT IN</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  name <span class="token keyword">as</span> <span class="token string">&#39;Customers&#39;</span>
<span class="token keyword">FROM</span> Customers c
<span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span>
    customerId
  <span class="token keyword">FROM</span> Orders
<span class="token punctuation">)</span>
</code></pre></div>`,3);function o(r,t){return e}var d=a(n,[["render",o]]);export{d as default};
