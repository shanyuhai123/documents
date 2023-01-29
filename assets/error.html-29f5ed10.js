import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const t={},r=e(`<h1 id="error-类型" tabindex="-1"><a class="header-anchor" href="#error-类型" aria-hidden="true">#</a> Error 类型</h1><h2 id="evalerror" tabindex="-1"><a class="header-anchor" href="#evalerror" aria-hidden="true">#</a> EvalError</h2><p>代表了一个关于 <code>eval</code> 函数的错误，但不在当前 ECMAScript 规范中使用，因此不会被 JavaScript 抛出，但是 EvalError 对象仍然保持兼容。</p><h2 id="internalerror" tabindex="-1"><a class="header-anchor" href="#internalerror" aria-hidden="true">#</a> InternalError</h2><p>表示出现在 JavaScript 引擎内部的错误，尚未成为任何规范的一部分。</p><ul><li>&quot;too many switch cases&quot;（过多<code>case</code>子句）；</li><li>&quot;too many parentheses in regular expression&quot;（正则表达式中括号过多）；</li><li>&quot;array initializer too large&quot;（数组初始化器过大）；</li><li>&quot;too much recursion&quot;（递归过深）。</li></ul><h2 id="rangeerror" tabindex="-1"><a class="header-anchor" href="#rangeerror" aria-hidden="true">#</a> RangeError</h2><p>当一个值不在其允许的范围或集合中，则抛出该错误。</p><h3 id="_1-示例" tabindex="-1"><a class="header-anchor" href="#_1-示例" aria-hidden="true">#</a> 1. 示例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// RangeError: Invalid array length</span>
<span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// RangeError: toFixed() digits argument must be between 0 and 100</span>
</code></pre></div><h2 id="referenceerror" tabindex="-1"><a class="header-anchor" href="#referenceerror" aria-hidden="true">#</a> ReferenceError</h2><p>当一个不存在的变量被引用时，则抛出该错误。</p><h3 id="_1-示例-1" tabindex="-1"><a class="header-anchor" href="#_1-示例-1" aria-hidden="true">#</a> 1. 示例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: foo is not defined</span>

<span class="token comment">// 一个更为常见的错误</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: foo is not defined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="syntaxerror" tabindex="-1"><a class="header-anchor" href="#syntaxerror" aria-hidden="true">#</a> SyntaxError</h2><p>当解析时发现不合规范的代码，则抛出该错误。</p><h3 id="_1-示例-2" tabindex="-1"><a class="header-anchor" href="#_1-示例-2" aria-hidden="true">#</a> 1. 示例</h3><p>语法错误的时候非常多。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Invalid left-hand side in assignment</span>
</code></pre></div><h2 id="typeerror" tabindex="-1"><a class="header-anchor" href="#typeerror" aria-hidden="true">#</a> TypeError</h2><blockquote><p>所有的错误，其最让人印象深刻，也是最日常碰到的。</p></blockquote><p>表示值的类型非预期类型时，则抛出该错误。</p><h3 id="_1-示例-3" tabindex="-1"><a class="header-anchor" href="#_1-示例-3" aria-hidden="true">#</a> 1. 示例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">undefined</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// TypeError: Cannot read property &#39;foo&#39; of undefined</span>
<span class="token keyword">undefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: undefined is not a function</span>
</code></pre></div><h2 id="urierror" tabindex="-1"><a class="header-anchor" href="#urierror" aria-hidden="true">#</a> URIError</h2><p>当向全局 URI 处理函数传递一个不合法的 URI 时，则抛出该错误。</p><h3 id="_1-示例-4" tabindex="-1"><a class="header-anchor" href="#_1-示例-4" aria-hidden="true">#</a> 1. 示例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// URIError: URI malformed at decodeURIComponent</span>
</code></pre></div>`,28),o=[r];function p(c,i){return n(),s("div",null,o)}const u=a(t,[["render",p],["__file","error.html.vue"]]);export{u as default};
