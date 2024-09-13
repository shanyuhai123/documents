import{_ as p,M as o,p as c,q as e,a1 as a,R as u,t as s,N as l,V as i}from"./framework-e3e34937.js";const k={};function r(d,n){const t=o("RouterLink");return c(),e("div",null,[n[3]||(n[3]=a(`<h1 id="什么是-this" tabindex="-1"><a class="header-anchor" href="#什么是-this" aria-hidden="true">#</a> 什么是 this</h1><p>虽然 <code>this</code> 可能经常看起来是与 “面向对象模式” 有关的，但在 JavaScript 中 <code>this</code> 是一个不同的概念。</p><p><code>this</code> 不是指向函数本身，即它不是编写时绑定，而是运行时绑定。</p><p><code>this</code> 机制帮助函数以更优雅的方式来隐式 “传递” 一个对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> you <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Reader&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">identify</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>you<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// READER</span>
</code></pre></div><h2 id="调用点" tabindex="-1"><a class="header-anchor" href="#调用点" aria-hidden="true">#</a> 调用点</h2><p>为了理解 <code>this</code> 绑定，就需要理解调用点（Call-site）：函数在代码中被调用的位置（而非声明位置）。</p><p>展示一下调用栈和调用点：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用栈是: \`baz\`</span>
  <span class="token comment">// 我们的调用点是 global scope（全局作用域）</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;baz&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`bar\` 的调用点</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用栈是: \`baz\` -&gt; \`bar\`</span>
  <span class="token comment">// 我们的调用点位于 \`baz\`</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`foo\` 的调用点</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用栈是: \`baz\` -&gt; \`bar\` -&gt; \`foo\`</span>
  <span class="token comment">// 我们的调用点位于 \`bar\`</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`baz\` 的调用点</span>
</code></pre></div><h2 id="this-绑定规则" tabindex="-1"><a class="header-anchor" href="#this-绑定规则" aria-hidden="true">#</a> this 绑定规则</h2><h3 id="_1-直白的" tabindex="-1"><a class="header-anchor" href="#_1-直白的" aria-hidden="true">#</a> 1. 直白的</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;obj1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;obj2&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// --------</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;global&quot;</span>
obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// &quot;obj1&quot;</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;obj2&quot;</span>
<span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// undefined</span>
</code></pre></div><p>规则说明：</p><ol><li><p><code>foo()</code> 在非 strict 模式中将 <code>this</code> 设置为全局对象，即值为 <code>global</code>。在严格模式下 <code>this</code> 为 undefined，即无法获取值，将抛出一个 <code>TypeError</code>。</p></li><li><p><code>obj1.foo()</code> 将 <code>this</code> 设置为对象 <code>obj1</code>，即值为 <code>obj1</code>。</p></li><li><p><code>foo.call(obj2)</code> 将 <code>this</code> 设置为对象 <code>obj2</code>，即值为 <code>obj2</code>。</p></li><li><p><code>new foo()</code> 将 <code>this</code> 设置为一个新的空对象，即值为 undefined。</p></li></ol><h3 id="_2-隐式丢失-implicitly-lost" tabindex="-1"><a class="header-anchor" href="#_2-隐式丢失-implicitly-lost" aria-hidden="true">#</a> 2. 隐式丢失（Implicitly Lost）</h3><p>当一个隐式绑定丢失了绑定，就会回退到默认绑定：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 函数引用！</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;oops, global&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \`a\` 也是一个全局对象的属性</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;oops, global&quot;</span>
</code></pre></div><p>更为常见的是发生在回调函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doFoo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`fn\` 只不过 \`foo\` 的另一个引用</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- 调用点!</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;oops, global&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \`a\` 也是一个全局对象的属性</span>

<span class="token function">doFoo</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;oops, global&quot;</span>
</code></pre></div><h2 id="词法-this" tabindex="-1"><a class="header-anchor" href="#词法-this" aria-hidden="true">#</a> 词法 this</h2>`,20)),u("p",null,[n[1]||(n[1]=s("相对于")),l(t,{to:"/frontend/javascript/this-and-object-prototypes.html#_1-%E7%9B%B4%E7%99%BD%E7%9A%84"},{default:i(()=>n[0]||(n[0]=[s("直白的")])),_:1}),n[2]||(n[2]=s("中介绍的四种规则，然而 ES6 引入的箭头函数（arrow function）并不适用。"))]),n[4]||(n[4]=a(`<p>箭头函数从封闭它的（函数或全局）作用域采用 <code>this</code> 绑定：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fooArrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回一个箭头函数</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里的 \`this\` 是词法上从 \`foo()\` 采用的</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fooNormal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回一个 function 函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar1 <span class="token operator">=</span> <span class="token function">fooArrow</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar2 <span class="token operator">=</span> <span class="token function">fooNormal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bar1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, 不是3!</span>
<span class="token function">bar2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div>`,2))])}const m=p(k,[["render",r],["__file","this-identifier.html.vue"]]);export{m as default};
