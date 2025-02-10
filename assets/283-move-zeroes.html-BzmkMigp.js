import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="移动零" tabindex="-1"><a class="header-anchor" href="#移动零"><span>移动零</span></a></h1><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h2><p>一开始的思路是双指针交换：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">moveZeroes</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          right<span class="token operator">--</span></span>
<span class="line">          <span class="token keyword">continue</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      right<span class="token operator">--</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    left<span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>但结果顺序不对，修改：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">moveZeroes</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>prev<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> prev<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      prev<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,6)]))}const u=s(o,[["render",e],["__file","283-move-zeroes.html.vue"]]),i=JSON.parse('{"path":"/algorithms/283-move-zeroes.html","title":"移动零","lang":"zh-CN","frontmatter":{"autoSort":-283},"headers":[{"level":2,"title":"双指针","slug":"双指针","link":"#双指针","children":[]}],"git":{"updatedTime":1635781759000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/283-move-zeroes.md"}');export{u as comp,i as data};
