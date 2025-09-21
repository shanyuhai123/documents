import{_ as n,c as a,a as p,o as t}from"./app-BoSqM2g3.js";const e={};function c(o,s){return t(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="currying" tabindex="-1"><a class="header-anchor" href="#currying"><span>currying</span></a></h1><blockquote><p>复杂的看 <a href="https://github.com/lodash/lodash/blob/es/curry.js" target="_blank" rel="noopener noreferrer">lodash</a></p></blockquote><h2 id="一道题目" tabindex="-1"><a class="header-anchor" href="#一道题目"><span>一道题目</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sumOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 6</span></span>
<span class="line"></span></code></pre></div><h2 id="发散" tabindex="-1"><a class="header-anchor" href="#发散"><span>发散</span></a></h2><h3 id="_1-最简化" tabindex="-1"><a class="header-anchor" href="#_1-最简化"><span>1. 最简化</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// sum(1)(2) =&gt; 3</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y</span>
<span class="line"></span></code></pre></div><h3 id="_2-追加更多" tabindex="-1"><a class="header-anchor" href="#_2-追加更多"><span>2. 追加更多</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// sum(1)(2)(3)(4) =&gt; 10</span></span>
<span class="line"><span class="token comment">// 但总要有一个区分终结的标志</span></span>
<span class="line"><span class="token comment">// sum(1)(2)(3)(4)() =&gt; 10</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> x</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      result <span class="token operator">+=</span> y</span>
<span class="line">      <span class="token keyword">return</span> add</span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> result</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-更好的终结形式" tabindex="-1"><a class="header-anchor" href="#_3-更好的终结形式"><span>3. 更好的终结形式</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// sum(1)(2).sumOf() =&gt; 3</span></span>
<span class="line"><span class="token comment">// sum(1)(2)(3)(4).sumOf() =&gt; 3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> x</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">+=</span> y</span>
<span class="line">    <span class="token keyword">return</span> add</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  add<span class="token punctuation">.</span><span class="token function-variable function">sumOf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> add</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-更多的参数" tabindex="-1"><a class="header-anchor" href="#_4-更多的参数"><span>4. 更多的参数</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// sum(1)(2,3).sumOf() =&gt; 6</span></span>
<span class="line"><span class="token comment">// sum(1,2)(3)(4,5,6).sumOf() =&gt; 21</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>orgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>orgs<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> add</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 取个巧，最后计算</span></span>
<span class="line">  add<span class="token punctuation">.</span><span class="token function-variable function">sumOf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> add</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,13)])])}const i=n(e,[["render",c]]),r=JSON.parse('{"path":"/frontend/javascript/currying.html","title":"currying","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一道题目","slug":"一道题目","link":"#一道题目","children":[]},{"level":2,"title":"发散","slug":"发散","link":"#发散","children":[{"level":3,"title":"1. 最简化","slug":"_1-最简化","link":"#_1-最简化","children":[]},{"level":3,"title":"2. 追加更多","slug":"_2-追加更多","link":"#_2-追加更多","children":[]},{"level":3,"title":"3. 更好的终结形式","slug":"_3-更好的终结形式","link":"#_3-更好的终结形式","children":[]},{"level":3,"title":"4. 更多的参数","slug":"_4-更多的参数","link":"#_4-更多的参数","children":[]}]}],"git":{"updatedTime":1637397829000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/javascript/currying.md"}');export{i as comp,r as data};
