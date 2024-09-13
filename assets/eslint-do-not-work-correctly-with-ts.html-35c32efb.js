import{_ as o,M as r,p as c,q as l,a1 as t,R as a,t as s,N as p}from"./framework-e3e34937.js";const i={},u={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/microsoft/vscode-eslint/issues/1149",target:"_blank",rel:"noopener noreferrer"};function k(y,n){const e=r("ExternalLinkIcon");return c(),l("div",null,[n[6]||(n[6]=t(`<h1 id="eslint-在-typescript-未能好好工作" tabindex="-1"><a class="header-anchor" href="#eslint-在-typescript-未能好好工作" aria-hidden="true">#</a> ESLint 在 TypeScript 未能好好工作</h1><p>ESLint 的提示在 TypeScript 下没有好好工作。</p><h2 id="enum-is-defined-but-never-used" tabindex="-1"><a class="header-anchor" href="#enum-is-defined-but-never-used" aria-hidden="true">#</a> enum is defined but never used</h2><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// xxx is defined but never used. eslint(no-unused-vars)</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> UserRole <span class="token punctuation">{</span>
  <span class="token constant">USER</span> <span class="token operator">=</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)),a("p",null,[n[1]||(n[1]=s("这时该使用 ")),a("a",u,[n[0]||(n[0]=s("TypeScript")),p(e)]),n[2]||(n[2]=s(" 的规则取而代之："))]),n[7]||(n[7]=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="cannot-read-property-loc-of-undefined" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-loc-of-undefined" aria-hidden="true">#</a> Cannot read property &#39;loc&#39; of undefined</h2>`,2)),a("p",null,[n[4]||(n[4]=s("参考 ")),a("a",d,[n[3]||(n[3]=s("Cannot read property 'loc' of undefined")),p(e)]),n[5]||(n[5]=s(" 修改："))]),n[8]||(n[8]=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,3))])}const g=o(i,[["render",k],["__file","eslint-do-not-work-correctly-with-ts.html.vue"]]);export{g as default};
