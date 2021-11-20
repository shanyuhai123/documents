import{r as t,c as o,a as p,b as c,w as e,F as u,e as s,d as n,o as l}from"./app.e1199508.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const k={},r=s(`<h2 id="\u4EC0\u4E48\u662F-this" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-this" aria-hidden="true">#</a> \u4EC0\u4E48\u662F this</h2><p>\u867D\u7136 <code>this</code> \u53EF\u80FD\u7ECF\u5E38\u770B\u8D77\u6765\u662F\u4E0E \u201C\u9762\u5411\u5BF9\u8C61\u6A21\u5F0F\u201D \u6709\u5173\u7684\uFF0C\u4F46\u5728 JavaScript \u4E2D <code>this</code> \u662F\u4E00\u4E2A\u4E0D\u540C\u7684\u6982\u5FF5\u3002</p><p><code>this</code> \u4E0D\u662F\u6307\u5411\u51FD\u6570\u672C\u8EAB\uFF0C\u5373\u5B83\u4E0D\u662F\u7F16\u5199\u65F6\u7ED1\u5B9A\uFF0C\u800C\u662F\u8FD0\u884C\u65F6\u7ED1\u5B9A\u3002</p><p><code>this</code> \u673A\u5236\u5E2E\u52A9\u51FD\u6570\u4EE5\u66F4\u4F18\u96C5\u7684\u65B9\u5F0F\u6765\u9690\u5F0F \u201C\u4F20\u9012\u201D \u4E00\u4E2A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> you <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;Reader&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">identify</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>you<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// READER</span>
</code></pre></div><h2 id="\u8C03\u7528\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u70B9" aria-hidden="true">#</a> \u8C03\u7528\u70B9</h2><p>\u4E3A\u4E86\u7406\u89E3 <code>this</code> \u7ED1\u5B9A\uFF0C\u5C31\u9700\u8981\u7406\u89E3\u8C03\u7528\u70B9\uFF08Call-site\uFF09\uFF1A\u51FD\u6570\u5728\u4EE3\u7801\u4E2D\u88AB\u8C03\u7528\u7684\u4F4D\u7F6E\uFF08\u800C\u975E\u58F0\u660E\u4F4D\u7F6E\uFF09\u3002</p><p>\u5C55\u793A\u4E00\u4E0B\u8C03\u7528\u6808\u548C\u8C03\u7528\u70B9\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528\u6808\u662F: \`baz\`</span>
  <span class="token comment">// \u6211\u4EEC\u7684\u8C03\u7528\u70B9\u662F global scope\uFF08\u5168\u5C40\u4F5C\u7528\u57DF\uFF09</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;baz&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`bar\` \u7684\u8C03\u7528\u70B9</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528\u6808\u662F: \`baz\` -&gt; \`bar\`</span>
  <span class="token comment">// \u6211\u4EEC\u7684\u8C03\u7528\u70B9\u4F4D\u4E8E \`baz\`</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`foo\` \u7684\u8C03\u7528\u70B9</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528\u6808\u662F: \`baz\` -&gt; \`bar\` -&gt; \`foo\`</span>
  <span class="token comment">// \u6211\u4EEC\u7684\u8C03\u7528\u70B9\u4F4D\u4E8E \`bar\`</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \`baz\` \u7684\u8C03\u7528\u70B9</span>
</code></pre></div><h2 id="this-\u7ED1\u5B9A\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#this-\u7ED1\u5B9A\u89C4\u5219" aria-hidden="true">#</a> this \u7ED1\u5B9A\u89C4\u5219</h2><h3 id="_1-\u76F4\u767D\u7684" tabindex="-1"><a class="header-anchor" href="#_1-\u76F4\u767D\u7684" aria-hidden="true">#</a> 1. \u76F4\u767D\u7684</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	bar<span class="token operator">:</span> <span class="token string">&quot;obj1&quot;</span><span class="token punctuation">,</span>
	foo<span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	bar<span class="token operator">:</span> <span class="token string">&quot;obj2&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// --------</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>				<span class="token comment">// &quot;global&quot;</span>
obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// &quot;obj1&quot;</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// &quot;obj2&quot;</span>
<span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// undefined</span>
</code></pre></div><p>\u89C4\u5219\u8BF4\u660E\uFF1A</p><ol><li><p><code>foo()</code> \u5728\u975E strict \u6A21\u5F0F\u4E2D\u5C06 <code>this</code> \u8BBE\u7F6E\u4E3A\u5168\u5C40\u5BF9\u8C61\uFF0C\u5373\u503C\u4E3A <code>global</code>\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B <code>this</code> \u4E3A undefined\uFF0C\u5373\u65E0\u6CD5\u83B7\u53D6\u503C\uFF0C\u5C06\u629B\u51FA\u4E00\u4E2A <code>TypeError</code>\u3002</p></li><li><p><code>obj1.foo()</code> \u5C06 <code>this</code> \u8BBE\u7F6E\u4E3A\u5BF9\u8C61 <code>obj1</code>\uFF0C\u5373\u503C\u4E3A <code>obj1</code>\u3002</p></li><li><p><code>foo.call(obj2)</code> \u5C06 <code>this</code> \u8BBE\u7F6E\u4E3A\u5BF9\u8C61 <code>obj2</code>\uFF0C\u5373\u503C\u4E3A <code>obj2</code>\u3002</p></li><li><p><code>new foo()</code> \u5C06 <code>this</code> \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61\uFF0C\u5373\u503C\u4E3A undefined\u3002</p></li></ol><h3 id="_2-\u9690\u5F0F\u4E22\u5931-implicitly-lost" tabindex="-1"><a class="header-anchor" href="#_2-\u9690\u5F0F\u4E22\u5931-implicitly-lost" aria-hidden="true">#</a> 2. \u9690\u5F0F\u4E22\u5931\uFF08Implicitly Lost\uFF09</h3><p>\u5F53\u4E00\u4E2A\u9690\u5F0F\u7ED1\u5B9A\u4E22\u5931\u4E86\u7ED1\u5B9A\uFF0C\u5C31\u4F1A\u56DE\u9000\u5230\u9ED8\u8BA4\u7ED1\u5B9A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	foo<span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// \u51FD\u6570\u5F15\u7528\uFF01</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;oops, global&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \`a\` \u4E5F\u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;oops, global&quot;</span>
</code></pre></div><p>\u66F4\u4E3A\u5E38\u89C1\u7684\u662F\u53D1\u751F\u5728\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doFoo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \`fn\` \u53EA\u4E0D\u8FC7 \`foo\` \u7684\u53E6\u4E00\u4E2A\u5F15\u7528</span>

	<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- \u8C03\u7528\u70B9!</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	foo<span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;oops, global&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \`a\` \u4E5F\u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027</span>

<span class="token function">doFoo</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;oops, global&quot;</span>
</code></pre></div><h2 id="\u8BCD\u6CD5-this" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5-this" aria-hidden="true">#</a> \u8BCD\u6CD5 this</h2>`,20),d=n("\u76F8\u5BF9\u4E8E"),f=n("\u76F4\u767D\u7684"),m=n("\u4E2D\u4ECB\u7ECD\u7684\u56DB\u79CD\u89C4\u5219\uFF0C\u7136\u800C ES6 \u5F15\u5165\u7684\u7BAD\u5934\u51FD\u6570\uFF08arrow function\uFF09\u5E76\u4E0D\u9002\u7528\u3002"),h=s(`<p>\u7BAD\u5934\u51FD\u6570\u4ECE\u5C01\u95ED\u5B83\u7684\uFF08\u51FD\u6570\u6216\u5168\u5C40\uFF09\u4F5C\u7528\u57DF\u91C7\u7528 <code>this</code> \u7ED1\u5B9A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fooArrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 \`this\` \u662F\u8BCD\u6CD5\u4E0A\u4ECE \`foo()\` \u91C7\u7528\u7684</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fooNormal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A function \u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar1 <span class="token operator">=</span> <span class="token function">fooArrow</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar2 <span class="token operator">=</span> <span class="token function">fooNormal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bar1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, \u4E0D\u662F3!</span>
<span class="token function">bar2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div>`,2);function b(g,j){const a=t("RouterLink");return l(),o(u,null,[r,p("p",null,[d,c(a,{to:"/frontend/javascript/this-and-object-prototypes.html#_1-%E7%9B%B4%E7%99%BD%E7%9A%84"},{default:e(()=>[f]),_:1}),m]),h],64)}var w=i(k,[["render",b]]);export{w as default};
