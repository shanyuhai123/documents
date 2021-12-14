import{e as a}from"./app.53b3c455.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=a(`<h1 id="\u68C0\u6D4B\u5927\u5199\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5927\u5199\u5B57\u6BCD" aria-hidden="true">#</a> \u68C0\u6D4B\u5927\u5199\u5B57\u6BCD</h1><h2 id="\u6B63\u5219" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219" aria-hidden="true">#</a> \u6B63\u5219</h2><p>\u6B63\u5219\u5339\u914D\u4E09\u79CD\u60C5\u51B5\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">detectCapitalUse</span><span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>word<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Z]+$|^[A-Z][a-z]*$|^[a-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(p,o){return e}var i=n(s,[["render",t]]);export{i as default};