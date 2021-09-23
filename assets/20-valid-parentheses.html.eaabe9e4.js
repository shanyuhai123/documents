import{e as n}from"./app.76078c72.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="有效括号" tabindex="-1"><a class="header-anchor" href="#有效括号" aria-hidden="true">#</a> 有效括号</h1><h2 id="利用栈" tabindex="-1"><a class="header-anchor" href="#利用栈" aria-hidden="true">#</a> 利用栈</h2><p>左符号入栈，右符号匹配上则出栈。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> pairs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>len<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>\n\n  <span class="token keyword">const</span> stack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> ch <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>pairs<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> pairs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">!==</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};
