import{_ as s,c as a,a as t,o as p}from"./app-DNXRdI82.js";const e={};function o(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="两个数组的交集" tabindex="-1"><a class="header-anchor" href="#两个数组的交集"><span>两个数组的交集</span></a></h1><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">intersection</span><span class="token punctuation">(</span>nums1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3)]))}const i=s(e,[["render",o],["__file","349-intersection-of-two-arrays.html.vue"]]),u=JSON.parse('{"path":"/algorithms/349-intersection-of-two-arrays.html","title":"两个数组的交集","lang":"zh-CN","frontmatter":{"autoSort":-349},"headers":[{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]}],"git":{"updatedTime":1636038236000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/349-intersection-of-two-arrays.md"}');export{i as comp,u as data};
