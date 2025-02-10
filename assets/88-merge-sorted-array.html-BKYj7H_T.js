import{_ as n,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,s){return t(),a("div",null,s[0]||(s[0]=[p(`<h1 id="合并两个有序数组" tabindex="-1"><a class="header-anchor" href="#合并两个有序数组"><span>合并两个有序数组</span></a></h1><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h2><p>要求直接修改第一个数组，若从小到大排序显然会覆盖数据，所以反向从大到小则没有问题了。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span>nums1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> nums2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> p1 <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> p2 <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> p2 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      cur <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token operator">--</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      cur <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token operator">--</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      cur <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token operator">--</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      cur <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token operator">--</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    nums1<span class="token punctuation">[</span>tail<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const r=n(o,[["render",e],["__file","88-merge-sorted-array.html.vue"]]),u=JSON.parse('{"path":"/algorithms/88-merge-sorted-array.html","title":"合并两个有序数组","lang":"zh-CN","frontmatter":{"autoSort":-88},"headers":[{"level":2,"title":"双指针","slug":"双指针","link":"#双指针","children":[]}],"git":{"updatedTime":1633650202000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/88-merge-sorted-array.md"}');export{r as comp,u as data};
