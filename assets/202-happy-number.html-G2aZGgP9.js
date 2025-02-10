import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="快乐数" tabindex="-1"><a class="header-anchor" href="#快乐数"><span>快乐数</span></a></h1><p>寻找其终结条件。</p><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h2><p>数字重复时自然就可以结束了。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> ret</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 可切换为递归</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针"><span>快慢指针</span></a></h2><p>会重复的问题可以该思路。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> ret</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> slow <span class="token operator">=</span> n</span>
<span class="line">  <span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    slow <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span></span>
<span class="line">    fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span><span class="token function">calcNext</span><span class="token punctuation">(</span>fast<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> fast <span class="token operator">===</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,8)]))}const i=s(e,[["render",o],["__file","202-happy-number.html.vue"]]),u=JSON.parse('{"path":"/algorithms/202-happy-number.html","title":"快乐数","lang":"zh-CN","frontmatter":{"autoSort":-202},"headers":[{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":2,"title":"快慢指针","slug":"快慢指针","link":"#快慢指针","children":[]}],"git":{"updatedTime":1635078090000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/202-happy-number.md"}');export{i as comp,u as data};
