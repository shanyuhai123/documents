import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h1><p>定义：在 AVL 树中，任意节点对应的两棵子树的最大高度差为 1。</p><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力"><span>暴力</span></a></h2><p>自顶向下会对子树的高度重复计算。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="自底向上" tabindex="-1"><a class="header-anchor" href="#自底向上"><span>自底向上</span></a></h2><p>如果存在一棵子树不平衡，那么整个二叉树一定是不平衡的。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">let</span> leftHeight <span class="token operator">=</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> rightHeight <span class="token operator">=</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftHeight <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> rightHeight <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>leftHeight <span class="token operator">-</span> rightHeight<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","110-balanced-binary-tree.html.vue"]]),i=JSON.parse('{"path":"/algorithms/110-balanced-binary-tree.html","title":"平衡二叉树","lang":"zh-CN","frontmatter":{"autoSort":-110},"headers":[{"level":2,"title":"暴力","slug":"暴力","link":"#暴力","children":[]},{"level":2,"title":"自底向上","slug":"自底向上","link":"#自底向上","children":[]}],"git":{"updatedTime":1634570151000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/110-balanced-binary-tree.md"}');export{u as comp,i as data};
