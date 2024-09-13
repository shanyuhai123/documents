import{_ as n,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function o(c,a){return s(),e("div",null,a[0]||(a[0]=[t(`<h1 id="检测大写字母" tabindex="-1"><a class="header-anchor" href="#检测大写字母" aria-hidden="true">#</a> 检测大写字母</h1><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h2><p>正则匹配三种情况。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">detectCapitalUse</span><span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>word<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Z]+$|^[A-Z][a-z]*$|^[a-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=n(p,[["render",o],["__file","520-detect-capital.html.vue"]]);export{l as default};