import{_ as s,c as a,a as p,o as t}from"./app-BCSwjUcF.js";const o={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="二叉搜索树中的众数" tabindex="-1"><a class="header-anchor" href="#二叉搜索树中的众数"><span>二叉搜索树中的众数</span></a></h1><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历"><span>中序遍历</span></a></h2><p>借助二叉搜索树的规则。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">track</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      current <span class="token operator">=</span> val</span>
<span class="line">      count <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      max <span class="token operator">=</span> count</span>
<span class="line">      ret <span class="token operator">=</span> <span class="token punctuation">[</span>current<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">track</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> ret</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const u=s(o,[["render",e]]),i=JSON.parse('{"path":"/algorithms/501-find-mode-in-binary-search-tree.html","title":"二叉搜索树中的众数","lang":"zh-CN","frontmatter":{"autoSort":-501},"headers":[{"level":2,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[]}],"git":{"updatedTime":1636878468000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/501-find-mode-in-binary-search-tree.md"}');export{u as comp,i as data};
