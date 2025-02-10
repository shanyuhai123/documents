import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="丢失的数字" tabindex="-1"><a class="header-anchor" href="#丢失的数字"><span>丢失的数字</span></a></h1><p>排序解法掠过。</p><h2 id="和" tabindex="-1"><a class="header-anchor" href="#和"><span>和</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token keyword">const</span> expect <span class="token operator">=</span> len <span class="token operator">*</span> <span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> expect <span class="token operator">-</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算"><span>位运算</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> missing <span class="token operator">=</span> nums<span class="token punctuation">.</span>length</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    missing <span class="token operator">^=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> i</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> missing</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,6)]))}const i=s(e,[["render",o],["__file","268-missing-number.html.vue"]]),u=JSON.parse('{"path":"/algorithms/268-missing-number.html","title":"丢失的数字","lang":"zh-CN","frontmatter":{"autoSort":-268},"headers":[{"level":2,"title":"和","slug":"和","link":"#和","children":[]},{"level":2,"title":"位运算","slug":"位运算","link":"#位运算","children":[]}],"git":{"updatedTime":1635658158000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/268-missing-number.md"}');export{i as comp,u as data};
