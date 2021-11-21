import{e as a}from"./app.783040d4.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=a(`<h1 id="\u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5" tabindex="-1"><a class="header-anchor" href="#\u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5" aria-hidden="true">#</a> \u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5</h1><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>Name <span class="token keyword">as</span> <span class="token string">&#39;Employee&#39;</span>
<span class="token keyword">FROM</span>
  Employee <span class="token keyword">as</span> e<span class="token punctuation">,</span>
  Employee <span class="token keyword">as</span> m
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> m<span class="token punctuation">.</span>Id <span class="token operator">AND</span> e<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>Salary
</code></pre></div>`,3);function o(p,t){return e}var l=s(n,[["render",o]]);export{l as default};
