import{e as a}from"./app.76dc00d2.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const e={},n=a(`<h1 id="\u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1" aria-hidden="true">#</a> \u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1</h1><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span>
  p1
<span class="token keyword">FROM</span>
  Person p1<span class="token punctuation">,</span>
  Person p2
<span class="token keyword">WHERE</span> p1<span class="token punctuation">.</span>email <span class="token operator">=</span> p2<span class="token punctuation">.</span>email <span class="token operator">AND</span> p1<span class="token punctuation">.</span>id <span class="token operator">&gt;</span> p2<span class="token punctuation">.</span>id
</code></pre></div>`,3);function t(p,o){return n}var l=s(e,[["render",t]]);export{l as default};
