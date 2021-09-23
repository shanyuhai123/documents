import{r as n,c as s,a,b as p,F as t,e as o,d as c,o as e}from"./app.76078c72.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const l={},k=o('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>数组空位，指数组的该位置没有任何值，而非 <code>undefined</code>。</p><p>可由以下方式得到他们：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [empty × 5]</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// [empty × 2] // 可见最后一个逗号被丢弃</span>\n</code></pre></div>',4),i=c("通过 "),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in",target:"_blank",rel:"noopener noreferrer"},d=c("in"),m=c(" 操作符可得知空位没有任何值："),f=o('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span> <span class="token comment">// true</span>\n<span class="token number">0</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span> <span class="token comment">// false</span>\n</code></pre></div><h2 id="处理空位" tabindex="-1"><a class="header-anchor" href="#处理空位" aria-hidden="true">#</a> 处理空位</h2><h3 id="_1-es5" tabindex="-1"><a class="header-anchor" href="#_1-es5" aria-hidden="true">#</a> 1. ES5</h3><p><code>ES5</code> 中一些方法对数组空位的处理为忽略：</p><ul><li><code>forEach()</code>、<code>filter()</code>、 <code>reduce()</code>、 <code>every()</code> 和 <code>some()</code> 都会跳过空位。</li><li><code>map()</code> 会跳过空位，但会保留这个值。</li><li><code>join()</code> 和 <code>toString()</code> 会将空位视为 <code>undefined</code>，而 <code>undefined</code> 和 <code>null</code> 会被处理成空字符串。</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// forEach</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n\n<span class="token comment">// filter</span>\n<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;a&#39;,&#39;b&#39;]</span>\n\n<span class="token comment">// every</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token operator">===</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n<span class="token comment">// reduce</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token operator">+</span>y<span class="token punctuation">)</span> <span class="token comment">// 3</span>\n\n<span class="token comment">// some</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">!==</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n<span class="token comment">// map</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [,1]</span>\n\n<span class="token comment">// join</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;#a##&quot;</span>\n\n<span class="token comment">// toString</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;,a,,&quot;</span>\n</code></pre></div><h3 id="_2-es6" tabindex="-1"><a class="header-anchor" href="#_2-es6" aria-hidden="true">#</a> 2. ES6</h3><p>ES6(新增的方法) 则是明确将空位转为 <code>undefined</code>。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Array.from</span>\nArray<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [ &quot;a&quot;, undefined, &quot;b&quot; ]</span>\n\n<span class="token comment">// 扩展运算符</span>\n<span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">// [ &quot;a&quot;, undefined, &quot;b&quot; ]</span>\n\n<span class="token comment">// copyWithin</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// [,&quot;a&quot;,,&quot;a&quot;]</span>\n\n<span class="token comment">// fill</span>\n<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;]</span>\n\n<span class="token comment">// for...of</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> el <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// entries</span>\n<span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [[0,undefined], [1,&quot;a&quot;]]</span>\n\n<span class="token comment">// keys</span>\n<span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [0,1]</span>\n\n<span class="token comment">// values</span>\n<span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [undefined,&quot;a&quot;]</span>\n\n<span class="token comment">// find</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n\n<span class="token comment">// findIndex</span>\n<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>\n</code></pre></div>',9);var g=u(l,[["render",function(o,c){const u=n("OutboundLink");return e(),s(t,null,[k,a("p",null,[i,a("a",r,[d,p(u)]),m]),f],64)}]]);export{g as default};
