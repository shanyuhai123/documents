import{_ as n,c as a,a as t,o as p}from"./app-DNXRdI82.js";const e={};function o(l,s){return p(),a("div",null,s[0]||(s[0]=[t(`<h1 id="实现-strstr" tabindex="-1"><a class="header-anchor" href="#实现-strstr"><span>实现 strStr</span></a></h1><h2 id="截取对比" tabindex="-1"><a class="header-anchor" href="#截取对比"><span>截取对比</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">strStr</span><span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// tail 实际为 head(0) + needle.length + 1</span></span>
<span class="line">  <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> needle<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&lt;</span> haystack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>haystack<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> needle<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">===</span> needle<span class="token punctuation">)</span> <span class="token keyword">return</span> head</span>
<span class="line">    head<span class="token operator">++</span></span>
<span class="line">    tail<span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3)]))}const r=n(e,[["render",o],["__file","28-implement-strstr.html.vue"]]),i=JSON.parse('{"path":"/algorithms/28-implement-strstr.html","title":"实现 strStr","lang":"zh-CN","frontmatter":{"autoSort":-28},"headers":[{"level":2,"title":"截取对比","slug":"截取对比","link":"#截取对比","children":[]}],"git":{"updatedTime":1635051722000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/28-implement-strstr.md"}');export{r as comp,i as data};
