import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="位-1-的个数" tabindex="-1"><a class="header-anchor" href="#位-1-的个数"><span>位 1 的个数</span></a></h1><p>可从<a href="./190-reverse-bits">颠倒二进制位</a>中吸取步骤。</p><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      ret<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> ret</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算"><span>位运算</span></a></h2><p>从最低位的 1 开始翻转。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    n <span class="token operator">&amp;=</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    ret<span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> ret</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,7)]))}const i=s(e,[["render",o],["__file","191-number-of-1-bits.html.vue"]]),r=JSON.parse('{"path":"/algorithms/191-number-of-1-bits.html","title":"位 1 的个数","lang":"zh-CN","frontmatter":{"autoSort":-191},"headers":[{"level":2,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":2,"title":"位运算","slug":"位运算","link":"#位运算","children":[]}],"git":{"updatedTime":1635072664000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/191-number-of-1-bits.md"}');export{i as comp,r as data};
