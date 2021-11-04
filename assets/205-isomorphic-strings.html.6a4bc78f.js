import{e as n}from"./app.c20c51e5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n('<h1 id="同构字符串" tabindex="-1"><a class="header-anchor" href="#同构字符串" aria-hidden="true">#</a> 同构字符串</h1><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h2><p>映射不一定相同，需要准备两个哈希表。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isIsomorphic</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> mt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> sVal <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token keyword">const</span> tVal <span class="token operator">=</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token keyword">const</span> msVal <span class="token operator">=</span> ms<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sVal<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> mtVal <span class="token operator">=</span> mt<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tVal<span class="token punctuation">)</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>msVal <span class="token operator">!==</span> tVal <span class="token operator">&amp;&amp;</span> msVal <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>mtVal <span class="token operator">!==</span> sVal <span class="token operator">&amp;&amp;</span> mtVal <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n\n    ms<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sVal<span class="token punctuation">,</span> tVal<span class="token punctuation">)</span>\n    mt<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>tVal<span class="token punctuation">,</span> sVal<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var t=s(a,[["render",function(n,s){return p}]]);export{t as default};