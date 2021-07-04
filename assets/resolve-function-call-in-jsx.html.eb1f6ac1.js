import{d as n}from"./app.221f0787.js";const a={},s=n('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-jsx ext-jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>虽然期望的是传递函数引用，然而实际上是函数调用，为了解决这个问题通常存在一些解决方案。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><h3 id="_1-传递一个函数引用" tabindex="-1"><a class="header-anchor" href="#_1-传递一个函数引用" aria-hidden="true">#</a> 1. 传递一个函数引用</h3><div class="language-jsx ext-jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="_2-函数修改为闭包" tabindex="-1"><a class="header-anchor" href="#_2-函数修改为闭包" aria-hidden="true">#</a> 2. 函数修改为闭包</h3><div class="language-jsx ext-jsx"><pre class="language-jsx"><code>vm <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">setKey</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="_3-使用-bind-方法" tabindex="-1"><a class="header-anchor" href="#_3-使用-bind-方法" aria-hidden="true">#</a> 3. 使用 bind 方法</h3><div class="language-jsx ext-jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div>',10);a.render=function(n,a){return s};export default a;
