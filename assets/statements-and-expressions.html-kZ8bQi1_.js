import{_ as a,c as n,a as p,o as e}from"./app-DNXRdI82.js";const t={};function o(c,s){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="语句和表达式" tabindex="-1"><a class="header-anchor" href="#语句和表达式"><span>语句和表达式</span></a></h1><blockquote><p>“文法（grammar）”一词不像“语法（syntax）”一词那么为人熟知。</p></blockquote><p>一种常见的现象是，开发者们假定“语句（statement）”和“表达式（expression）”是大致等价的，而实际上在 JavaScript 中它们存在一些非常重要的区别。</p><p>借用英语来描述下这种区别：</p><p>一个“句子（sentence）”是由一个表达想法的词汇的完整构造。它由一个或多个“短语（phrase）”组成，它们每一个都可以用标点符号或连词连接。一个短语本身可以由更小的短语组成。一些短语是不完整的，而且本身没有太多含义，而另一些短语可以自成一句。</p><p>JavaScript 中，语句就是句子，表达式就是短语，而操作符就是连词、标点符号：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 声明语句（declaration statement）</span></span>
<span class="line"><span class="token comment">// 除去 var 为赋值表达式（assignment expression）</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 表达式语句（expression statement）</span></span>
<span class="line">b<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h2 id="语句完成值" tabindex="-1"><a class="header-anchor" href="#语句完成值"><span>语句完成值</span></a></h2><p>一个鲜为人知的事实是，所有语句都有完成值（即使这个值知识 <code>undefined</code>）。</p><p>如何才能看到一个语句的完成值呢？很明显的答案是把语句敲进浏览器的开发控制台，因为当你运行它时，默认地控制台会报告最近一次执行的语句的完成值。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">a <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 完成值：18</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 完成值：undefined</span></span>
<span class="line"></span></code></pre></div><p>因为 <code>var</code> 在语言规范中定义返回的完成值为 undefined。</p><blockquote><p>正常来说，是不能以任何简单的语法/文法捕获一个语句的完成值并将其赋值给另一个变量：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"> b <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">38</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 但可以利用 eval（evil）实现</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span> <span class="token string">&quot;if (true) { b = 4 + 38; }&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line"></span></code></pre></div></blockquote><h3 id="_1-块级" tabindex="-1"><a class="header-anchor" href="#_1-块级"><span>1. 块级</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  b <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">38</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">// 完成值：42</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">// 完成值：undefined</span></span>
<span class="line"></span></code></pre></div><p>块级的完成值隐式地返回块级中的最后一个语句的完成值。</p><h2 id="表达式副作用" tabindex="-1"><a class="header-anchor" href="#表达式副作用"><span>表达式副作用</span></a></h2><p>大多数表达式没有副作用，但一部分除外。</p><h3 id="_1-操作符" tabindex="-1"><a class="header-anchor" href="#_1-操作符"><span>1. <code>++</code> 操作符</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">;</span> <span class="token comment">// 43</span></span>
<span class="line">b<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line"></span></code></pre></div><p>表达式 <code>a++</code> 有两个分离的行为。首先，它返回 <code>a</code> 的值，也就是 42，然后被赋值给 <code>b</code>；其次，它改变 <code>a</code> 本身，将它增加 1。</p><p>由此可以引申一个新的问题：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">++</span>a<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Invalid left-hand side expression in prefix</span></span>
<span class="line"><span class="token operator">++</span><span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Invalid left-hand side expression in prefix</span></span>
<span class="line"></span></code></pre></div><p>这是由于，<code>a++</code> 这部分会先执行，在递增之前会返回值 42，而 <code>++</code> 不能直接作用在 <code>42</code> 上，因为其等价于 <code>42 = 42 + 1</code>。</p><p>如果想实现给 <code>b</code> 赋值 43，则：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">;</span> <span class="token comment">// 43</span></span>
<span class="line">b<span class="token punctuation">;</span> <span class="token comment">// 43</span></span>
<span class="line"></span></code></pre></div><p>逗号操作符可以之前之前的表达式，并返回最后一个表达式的完成值。</p><h3 id="_2-操作符" tabindex="-1"><a class="header-anchor" href="#_2-操作符"><span>2. <code>=</code> 操作符</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// 完成值：42</span></span>
<span class="line">a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 链式赋值</span></span>
<span class="line"><span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line">b<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line">c<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line"></span></code></pre></div><p>一个常犯的错误是不提前进行声明：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">;</span> <span class="token comment">// ReferenceError: a is not defined</span></span>
<span class="line">b<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line">c<span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line"></span></code></pre></div><p>错误的创建了全局变量。</p>`,32)]))}const i=a(t,[["render",o],["__file","statements-and-expressions.html.vue"]]),r=JSON.parse('{"path":"/frontend/javascript/statements-and-expressions.html","title":"语句和表达式","lang":"zh-CN","frontmatter":{"autoPrev":"README"},"headers":[{"level":2,"title":"语句完成值","slug":"语句完成值","link":"#语句完成值","children":[{"level":3,"title":"1. 块级","slug":"_1-块级","link":"#_1-块级","children":[]}]},{"level":2,"title":"表达式副作用","slug":"表达式副作用","link":"#表达式副作用","children":[{"level":3,"title":"1. ++ 操作符","slug":"_1-操作符","link":"#_1-操作符","children":[]},{"level":3,"title":"2. = 操作符","slug":"_2-操作符","link":"#_2-操作符","children":[]}]}],"git":{"updatedTime":1637397829000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/javascript/statements-and-expressions.md"}');export{i as comp,r as data};
