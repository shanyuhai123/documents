import{d as n}from"./app.858485b8.js";const s={},a=n('<h2 id="判断类型" tabindex="-1"><a class="header-anchor" href="#判断类型" aria-hidden="true">#</a> 判断类型</h2><p><code>typeof</code> 操作符会返回数据类型的字符串。</p><p>JavaScript 数据类型分为原始类型（值类型）和引用类型，其中原始类型包含：<code>Number</code>、<code>String</code>、<code>Boolean</code>、<code>Undefined</code>、<code>Null</code>、<code>Symbol</code>、<code>BigInt</code>（以后可能还会扩展）。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &quot;number&quot;</span>\n<span class="token keyword">typeof</span> <span class="token string">&quot;1&quot;</span> <span class="token comment">// &quot;string&quot;</span>\n<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// &quot;boolean&quot;</span>\n<span class="token keyword">typeof</span> aaa <span class="token comment">// &quot;undefined&quot;</span>\n<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;symbol&quot;</span>\n<span class="token keyword">typeof</span> <span class="token number">42n</span> <span class="token comment">// &quot;bigint&quot;</span>\n\n<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token operator">/</span>regex<span class="token operator">/</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>\n\n<span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;function&quot;</span>\n<span class="token keyword">typeof</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;function&quot;</span>\n</code></pre></div><p>综上 <code>typeof</code> 可以得到除 <code>Null</code> 之外的所有原始类型，后续再追加原始类型也一样；对于所有的引用类型可以识别出 <code>&quot;function&quot;</code>，其余不再细分统一为 <code>&quot;object&quot;</code>。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="_1-new-操作符" tabindex="-1"><a class="header-anchor" href="#_1-new-操作符" aria-hidden="true">#</a> 1. new 操作符</h3><p><code>new</code> 操作符不总是返回 <code>&quot;object&quot;</code>。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>\n\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;console.log(&#39;hello world&#39;)&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function&quot;</span>\n</code></pre></div><h3 id="_2-安全操作" tabindex="-1"><a class="header-anchor" href="#_2-安全操作" aria-hidden="true">#</a> 2. 安全操作</h3><p>在以往 <code>typeof</code> 总是能对任何操作的数据返回一个字符串，所以常常利用其该特性进行判断是否为 <code>undefined</code>，在加入块级作用域后，该特性失效。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> aaa <span class="token comment">// Uncaught ReferenceError: Cannot access &#39;aaa&#39; before initialization</span>\n\n<span class="token keyword">const</span> aaa <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>\n</code></pre></div>',12);s.render=function(n,s){return a};export default s;