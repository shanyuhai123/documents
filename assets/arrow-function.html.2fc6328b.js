import{d as a}from"./app.858485b8.js";const n={},s=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 <code>this</code>、<code>arguments</code>、<code>super</code> 和 <code>new.target</code>。箭头函数更适用于本来应该需要匿名函数的地方，并且它们不能用作构造函数。</p><blockquote><p>因为箭头函数没有 <code>prototype</code>，所以箭头函数本身没有 <code>this</code>。</p></blockquote><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="_1-返回对象" tabindex="-1"><a class="header-anchor" href="#_1-返回对象" aria-hidden="true">#</a> 1. 返回对象</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>由于大括号会被解释为代码块，所以利用箭头函数直接返回一个对象时，需要用小括号包裹。</p><h3 id="_2-禁止构造函数" tabindex="-1"><a class="header-anchor" href="#_2-禁止构造函数" aria-hidden="true">#</a> 2. 禁止构造函数</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Foo is not a constructor</span>\n</code></pre></div><h3 id="_3-对象方法" tabindex="-1"><a class="header-anchor" href="#_3-对象方法" aria-hidden="true">#</a> 3. 对象方法</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">baz</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token punctuation">}</span>\n\nfoo<span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo.bar: &#39;baz&#39; window.bar: &#39;foo&#39;</span>\n</code></pre></div><p>箭头函数会继承父级作用域的 <code>this</code>，而对象没有作用域，此时 <code>this</code> 指向全局作用域（window）。</p><h2 id="日常使用" tabindex="-1"><a class="header-anchor" href="#日常使用" aria-hidden="true">#</a> 日常使用</h2><h3 id="_1-闭包" tabindex="-1"><a class="header-anchor" href="#_1-闭包" aria-hidden="true">#</a> 1. 闭包</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">++</span>i<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> increase <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n<span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre></div>',15);n.render=function(a,n){return s};export default n;