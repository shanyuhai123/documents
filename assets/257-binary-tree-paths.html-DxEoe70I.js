import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function c(e,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="二叉树的所有路径" tabindex="-1"><a class="header-anchor" href="#二叉树的所有路径"><span>二叉树的所有路径</span></a></h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> ret</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代"><span>迭代</span></a></h2><p>迭代则需要自行维护函数调用栈。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> nodeQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">const</span> pathQueue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">const</span> path<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>nodeQueue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> n <span class="token operator">=</span> nodeQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">    <span class="token keyword">const</span> p <span class="token operator">=</span> pathQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> n<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">continue</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      nodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span></span>
<span class="line">      pathQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      nodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span></span>
<span class="line">      pathQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,6)]))}const u=s(o,[["render",c],["__file","257-binary-tree-paths.html.vue"]]),i=JSON.parse('{"path":"/algorithms/257-binary-tree-paths.html","title":"二叉树的所有路径","lang":"zh-CN","frontmatter":{"autoSort":-257},"headers":[{"level":2,"title":"递归","slug":"递归","link":"#递归","children":[]},{"level":2,"title":"迭代","slug":"迭代","link":"#迭代","children":[]}],"git":{"updatedTime":1635599873000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/257-binary-tree-paths.md"}');export{u as comp,i as data};
