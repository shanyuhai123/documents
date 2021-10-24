import{e as a}from"./app.37213fd7.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=a('<h1 id="超过经理收入的员工" tabindex="-1"><a class="header-anchor" href="#超过经理收入的员工" aria-hidden="true">#</a> 超过经理收入的员工</h1><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>\n  e<span class="token punctuation">.</span>Name <span class="token keyword">as</span> <span class="token string">&#39;Employee&#39;</span>\n<span class="token keyword">FROM</span>\n  Employee <span class="token keyword">as</span> e<span class="token punctuation">,</span>\n  Employee <span class="token keyword">as</span> m\n<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> m<span class="token punctuation">.</span>Id <span class="token operator">AND</span> e<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>Salary\n</code></pre></div>',3);var p=s(n,[["render",function(a,s){return e}]]);export{p as default};
