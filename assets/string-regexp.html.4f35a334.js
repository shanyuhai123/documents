import{d as n}from"./app.221f0787.js";const s={},a=n('<h2 id="string-prototype-match" tabindex="-1"><a class="header-anchor" href="#string-prototype-match" aria-hidden="true">#</a> String.prototype.match</h2><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.match(regexp)</p></div><p>参数：</p><ul><li>regexp：一个正则表达式对象。</li></ul><p>返回值：</p><p>如果使用 g 标志，则返回与完整正则表达式匹配的所有结果，但不会返回捕获组；如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组。</p><h3 id="_2-描述" tabindex="-1"><a class="header-anchor" href="#_2-描述" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>尚未使用过。</li></ul></blockquote><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>using match</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;For more information, see Chapter 3.4.5.1&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">see (chapter \\d+(\\.\\d)*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// logs [ &#39;see Chapter 3.4.5.1&#39;,</span>\n<span class="token comment">//        &#39;Chapter 3.4.5.1&#39;,</span>\n<span class="token comment">//        &#39;.1&#39;,</span>\n<span class="token comment">//        index: 22,</span>\n<span class="token comment">//        input: &#39;For more information, see Chapter 3.4.5.1&#39; ]</span>\n\n<span class="token comment">// &#39;see Chapter 3.4.5.1&#39; is the whole match.</span>\n<span class="token comment">// &#39;Chapter 3.4.5.1&#39; was captured by &#39;(chapter \\d+(\\.\\d)*)&#39;.</span>\n<span class="token comment">// &#39;.1&#39; was the last value captured by &#39;(\\.\\d)&#39;.</span>\n<span class="token comment">// The &#39;index&#39; property (22) is the zero-based index of the whole match.</span>\n<span class="token comment">// The &#39;input&#39; property is the original string that was parsed.</span>\n</code></pre></div></li><li><p>using global and ignore case flags with match</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-E]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]</span>\n</code></pre></div></li><li><p>using match with no parameter</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;Nothing will come of nothing.&quot;</span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns [&quot;&quot;]</span>\n</code></pre></div></li></ul><h2 id="string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#string-prototype-matchall" aria-hidden="true">#</a> String.prototype.matchAll</h2><h3 id="_1-语法-1" tabindex="-1"><a class="header-anchor" href="#_1-语法-1" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.matchAll(regexp)</p></div><p>参数：</p><ul><li>regexp：一个正则表达式对象。</li></ul><p>返回值：</p><p>一个迭代器。</p><h3 id="_2-描述-1" tabindex="-1"><a class="header-anchor" href="#_2-描述-1" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>初学时使用过。</li></ul></blockquote><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>Regexp.exec and matchAll</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> regexp <span class="token operator">=</span> <span class="token function">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;foo[a-z]*&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;table football, foosball&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> match<span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>match <span class="token operator">=</span> regexp<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> start=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token punctuation">.</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> end=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>regexp<span class="token punctuation">.</span>lastIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// expected output: &quot;Found football start=6 end=14.&quot;</span>\n  <span class="token comment">// expected output: &quot;Found foosball start=16 end=24.&quot;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;table football, foosball&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> matches <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo[a-z]*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> match <span class="token keyword">of</span> matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> start=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token punctuation">.</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> end=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token punctuation">.</span>index <span class="token operator">+</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// expected output: &quot;Found football start=6 end=14.&quot;</span>\n<span class="token comment">// expected output: &quot;Found foosball start=16 end=24.&quot;</span>\n</code></pre></div></li><li><p>better access to capturing groups</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;test1test2&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">t(e)(st(\\d?))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n\nstr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;test1&quot;, &quot;test2&quot;]</span>\n<span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;test1&quot;, &quot;test2&quot;]</span>\n</code></pre></div></li></ul><h2 id="string-prototype-search" tabindex="-1"><a class="header-anchor" href="#string-prototype-search" aria-hidden="true">#</a> String.prototype.search</h2><h3 id="_1-语法-2" tabindex="-1"><a class="header-anchor" href="#_1-语法-2" aria-hidden="true">#</a> 1. 语法</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>str.search(regexp)</p></div><p>参数：</p><ul><li>regexp：一个正则对象。</li></ul><p>返回值：</p><p>首次匹配到时的索引，否则返回 -1。</p><h3 id="_2-描述-2" tabindex="-1"><a class="header-anchor" href="#_2-描述-2" aria-hidden="true">#</a> 2. 描述</h3><p>描述即返回值。</p><blockquote><p>个人在日常开发中常用场景：</p><ul><li>indexOf 无法满足需求时。</li></ul></blockquote><h3 id="_3-示例-2" tabindex="-1"><a class="header-anchor" href="#_3-示例-2" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>using search</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;hey JudE&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[.]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\nstr<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 4, which is the index of the first capital letter &quot;J&quot;</span>\nstr<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>re2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns -1 cannot find &#39;.&#39; dot punctuation</span>\n</code></pre></div></li></ul>',36);s.render=function(n,s){return a};export default s;
