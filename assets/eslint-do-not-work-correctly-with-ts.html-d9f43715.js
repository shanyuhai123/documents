import{_ as p,M as o,p as r,q as c,Q as s,t as n,N as e,a1 as a}from"./framework-49860b1b.js";const l={},i=a(`<h1 id="eslint-在-typescript-未能好好工作" tabindex="-1"><a class="header-anchor" href="#eslint-在-typescript-未能好好工作" aria-hidden="true">#</a> ESLint 在 TypeScript 未能好好工作</h1><p>ESLint 的提示在 TypeScript 下没有好好工作。</p><h2 id="enum-is-defined-but-never-used" tabindex="-1"><a class="header-anchor" href="#enum-is-defined-but-never-used" aria-hidden="true">#</a> enum is defined but never used</h2><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// xxx is defined but never used. eslint(no-unused-vars)</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> UserRole <span class="token punctuation">{</span>
  <span class="token constant">USER</span> <span class="token operator">=</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),u={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="cannot-read-property-loc-of-undefined" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-loc-of-undefined" aria-hidden="true">#</a> Cannot read property &#39;loc&#39; of undefined</h2>`,2),k={href:"https://github.com/microsoft/vscode-eslint/issues/1149",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;indent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">2</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="cannot-read-property-body-of-null" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-body-of-null" aria-hidden="true">#</a> Cannot read property &#39;body&#39; of null</h2><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function h(f,g){const t=o("ExternalLinkIcon");return r(),c("div",null,[i,s("p",null,[n("这时该使用 "),s("a",u,[n("TypeScript"),e(t)]),n(" 的规则取而代之：")]),d,s("p",null,[n("参考 "),s("a",k,[n("Cannot read property 'loc' of undefined"),e(t)]),n(" 修改：")]),y])}const x=p(l,[["render",h],["__file","eslint-do-not-work-correctly-with-ts.html.vue"]]);export{x as default};
