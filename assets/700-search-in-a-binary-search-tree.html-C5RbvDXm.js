import{_ as n,c as s,a as t,o as e}from"./app-DNXRdI82.js";const p={};function o(c,a){return e(),s("div",null,a[0]||(a[0]=[t(`<h1 id="二叉搜索树中的搜索" tabindex="-1"><a class="header-anchor" href="#二叉搜索树中的搜索"><span>二叉搜索树中的搜索</span></a></h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> root</span>
<span class="line">  <span class="token comment">// 利用二叉搜索树的特性</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val <span class="token operator">?</span> root<span class="token punctuation">.</span>left <span class="token operator">:</span> root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3)]))}const r=n(p,[["render",o],["__file","700-search-in-a-binary-search-tree.html.vue"]]),i=JSON.parse('{"path":"/algorithms/700-search-in-a-binary-search-tree.html","title":"二叉搜索树中的搜索","lang":"zh-CN","frontmatter":{"autoSort":-700},"headers":[{"level":2,"title":"递归","slug":"递归","link":"#递归","children":[]}],"git":{"updatedTime":1638715476000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/700-search-in-a-binary-search-tree.md"}');export{r as comp,i as data};
