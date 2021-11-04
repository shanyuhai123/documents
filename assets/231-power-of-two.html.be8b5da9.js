import{e as n}from"./app.c20c51e5.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},p=n('<h1 id="_2-的幂" tabindex="-1"><a class="header-anchor" href="#_2-的幂" aria-hidden="true">#</a> 2 的幂</h1><p>题目不让用递归和循环。</p><h2 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制" aria-hidden="true">#</a> 二进制</h2><p>都提到 2 的幂了，也很快联想到二进制、位运算，不过依然需避开循环。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 100 &amp; 011 =&gt; 0</span>\n  <span class="token comment">// 以此类推</span>\n  <span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="约数" tabindex="-1"><a class="header-anchor" href="#约数" aria-hidden="true">#</a> 约数</h2><p>根本没想到的方法。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token constant">BIG</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">30</span>\n  <span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">BIG</span> <span class="token operator">%</span> n <span class="token operator">===</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8);var e=a(s,[["render",function(n,a){return p}]]);export{e as default};