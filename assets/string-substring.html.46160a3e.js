import{d as n}from"./app.221f0787.js";const s={},a=n('<h2 id="string-prototype-replace" tabindex="-1"><a class="header-anchor" href="#string-prototype-replace" aria-hidden="true">#</a> String.prototype.replace</h2><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.replace(regexp|substr, newSubStr|function)</p></div><p>参数：</p><ul><li>regexp：一个正则对象;</li><li>substr：将被替换的字符串；</li><li>newSubStr：替换的字符串；</li><li>function：用于创建新字符串的函数。</li></ul><p>返回值：</p><p>替换后的新字符串。</p><h3 id="_2-描述" tabindex="-1"><a class="header-anchor" href="#_2-描述" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>常用于替换模板。</li></ul></blockquote><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>defining the regular expression in replace</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;Twas the night before Xmas...&#39;</span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">xmas</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token string">&#39;Christmas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Twas the night before Christmas...</span>\n</code></pre></div></li><li><p>switch words in a string</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;John Smith&#39;</span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\w+)\\s(\\w+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$2, $1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Smith, John</span>\n</code></pre></div></li><li><p>using an inline function that modifies the matched characters</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">styleHyphenFormat</span><span class="token punctuation">(</span><span class="token parameter">propertyName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">upperToHyphenLower</span><span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>offset <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> match<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> propertyName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> upperToHyphenLower<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">styleHyphenFormat</span><span class="token punctuation">(</span><span class="token string">&#39;borderTop&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// border-top</span>\n</code></pre></div></li></ul><h2 id="string-prototype-slice" tabindex="-1"><a class="header-anchor" href="#string-prototype-slice" aria-hidden="true">#</a> String.prototype.slice</h2><h3 id="_1-语法-1" tabindex="-1"><a class="header-anchor" href="#_1-语法-1" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.slice(beginIndex[, endIndex])</p></div><p>参数：</p><ul><li>beginIndex：开始索引；</li><li>endIndex：结束索引，可选。</li></ul><p>返回值：</p><p>从原字符串中提取出来的新字符串。</p><h3 id="_2-描述-1" tabindex="-1"><a class="header-anchor" href="#_2-描述-1" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>冲用于切割字符串。</li></ul></blockquote><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>using slice to create a new string</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;The morning is upon us.&#39;</span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// he morn</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// morning is upon u</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// is upon us.</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>\n</code></pre></div></li><li><p>using slice with negative indexes</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;The morning is upon us.&#39;</span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// &#39;us.&#39;</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;us&#39;</span>\nstr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &#39;The morning is upon us&#39;</span>\n</code></pre></div></li></ul><h2 id="string-prototype-split" tabindex="-1"><a class="header-anchor" href="#string-prototype-split" aria-hidden="true">#</a> String.prototype.split</h2><h3 id="_1-语法-2" tabindex="-1"><a class="header-anchor" href="#_1-语法-2" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.split([separator[, limit]])</p></div><p>参数：</p><ul><li>separator：分隔符；</li><li>limit：限定返回分割片段数量。</li></ul><p>返回值：</p><p>分割后的数组。</p><h3 id="_2-描述-2" tabindex="-1"><a class="header-anchor" href="#_2-描述-2" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>常用于格式化数据（字符串）。</li></ul></blockquote><h3 id="_3-示例-2" tabindex="-1"><a class="header-anchor" href="#_3-示例-2" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>removing spaces from a string</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token string">&#39;Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand &#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*(?:;|$)\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\nnames<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;Harry Trump&quot;, &quot;Fred Barney&quot;, &quot;Helen Rigby&quot;, &quot;Bill Abel&quot;, &quot;Chris Hand&quot;, &quot;&quot;]</span>\n</code></pre></div></li><li><p>returning a limited number of splits</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> myString <span class="token operator">=</span> <span class="token string">&#39;Hello World. How are you doing?&#39;</span><span class="token punctuation">;</span>\nmyString<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;Hello&quot;, &quot;World.&quot;, &quot;How&quot;]</span>\n</code></pre></div></li><li><p>splitting with a RegExp to include parts of the separator in the result</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> myString <span class="token operator">=</span> <span class="token string">&#39;Hello 1 word. Sentence number 2.&#39;</span><span class="token punctuation">;</span>\nmyString<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ &quot;Hello &quot;, &quot;1&quot;, &quot; word. Sentence number &quot;, &quot;2&quot;, &quot;.&quot; ]</span>\n</code></pre></div></li></ul><h2 id="string-prototype-substring" tabindex="-1"><a class="header-anchor" href="#string-prototype-substring" aria-hidden="true">#</a> String.prototype.substring</h2><h3 id="_1-语法-3" tabindex="-1"><a class="header-anchor" href="#_1-语法-3" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.substring(indexStart[, indexEnd])</p></div><p>参数：</p><ul><li>indexStart：开始索引；</li><li>indexEnd：结束索引。</li></ul><p>返回值：</p><p>指定部分新字符串。</p><h3 id="_2-描述-3" tabindex="-1"><a class="header-anchor" href="#_2-描述-3" aria-hidden="true">#</a> 2. 描述</h3><p>slice 弱化版。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>尚未使用过。</li></ul></blockquote><h3 id="_3-示例-3" tabindex="-1"><a class="header-anchor" href="#_3-示例-3" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>using substring</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> anyString <span class="token operator">=</span> <span class="token string">&quot;Mozilla&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 输出 &quot;Moz&quot;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 输出 &quot;lla&quot;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 输出 &quot;&quot;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 输出 &quot;Mozill&quot;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 输出 &quot;Mozilla&quot;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul>',48);s.render=function(n,s){return a};export default s;
