import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="最长和谐子序列" tabindex="-1"><a class="header-anchor" href="#最长和谐子序列"><span>最长和谐子序列</span></a></h1><p>注意题目，可修改原数组顺序。</p><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力"><span>暴力</span></a></h2><p>先排序使其有序。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">findLHS</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> eq <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        len<span class="token operator">++</span></span>
<span class="line">        flag <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        eq<span class="token operator">++</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 优化，跳过相同节点</span></span>
<span class="line">    i <span class="token operator">+=</span> eq</span>
<span class="line">    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> <span class="token punctuation">(</span>len <span class="token operator">?</span> len <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>flag <span class="token operator">?</span> eq <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> max</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h2><p>先计数再求和。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">findLHS</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token keyword">of</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> vn <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>vn<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> v <span class="token operator">+</span> vn<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> max</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","594-longest-harmonious-subsequence.html.vue"]]),k=JSON.parse('{"path":"/algorithms/594-longest-harmonious-subsequence.html","title":"最长和谐子序列","lang":"zh-CN","frontmatter":{"autoSort":-594},"headers":[{"level":2,"title":"暴力","slug":"暴力","link":"#暴力","children":[]},{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]}],"git":{"updatedTime":1637934561000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/594-longest-harmonious-subsequence.md"}');export{u as comp,k as data};
