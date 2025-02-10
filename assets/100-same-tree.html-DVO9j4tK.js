import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="相同的树" tabindex="-1"><a class="header-anchor" href="#相同的树"><span>相同的树</span></a></h1><h2 id="深度优先" tabindex="-1"><a class="header-anchor" href="#深度优先"><span>深度优先</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!==</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="广度优先" tabindex="-1"><a class="header-anchor" href="#广度优先"><span>广度优先</span></a></h2><p>根据队列先进先出实现广度优先。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 根据队列先进先出实现广度优先</span></span>
<span class="line">  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>p<span class="token punctuation">,</span> q<span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 取出先进的两个数据</span></span>
<span class="line">    <span class="token keyword">const</span> nodeP <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">    <span class="token keyword">const</span> nodeQ <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>val <span class="token operator">!==</span> nodeQ<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 推进四个数据</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> nodeQ<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>left<span class="token punctuation">)</span></span>
<span class="line">      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>left<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>left <span class="token operator">||</span> nodeP<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> nodeQ<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>right <span class="token operator">||</span> nodeQ<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,6)]))}const u=s(e,[["render",o],["__file","100-same-tree.html.vue"]]),k=JSON.parse('{"path":"/algorithms/100-same-tree.html","title":"相同的树","lang":"zh-CN","frontmatter":{"autoSort":-100},"headers":[{"level":2,"title":"深度优先","slug":"深度优先","link":"#深度优先","children":[]},{"level":2,"title":"广度优先","slug":"广度优先","link":"#广度优先","children":[]}],"git":{"updatedTime":1633880344000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/100-same-tree.md"}');export{u as comp,k as data};
