import{_ as p,M as e,p as o,q as c,R as a,t as s,N as r,a1 as u}from"./framework-e3e34937.js";const l={},k={href:"https://github.com/lodash/lodash/blob/es/curry.js",target:"_blank",rel:"noopener noreferrer"};function i(d,n){const t=e("ExternalLinkIcon");return o(),c("div",null,[n[2]||(n[2]=a("h1",{id:"currying",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#currying","aria-hidden":"true"},"#"),s(" currying")],-1)),a("blockquote",null,[a("p",null,[n[1]||(n[1]=s("复杂的看 ")),a("a",k,[n[0]||(n[0]=s("lodash")),r(t)])])]),n[3]||(n[3]=u(`<h2 id="一道题目" tabindex="-1"><a class="header-anchor" href="#一道题目" aria-hidden="true">#</a> 一道题目</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sumOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre></div><h2 id="发散" tabindex="-1"><a class="header-anchor" href="#发散" aria-hidden="true">#</a> 发散</h2><h3 id="_1-最简化" tabindex="-1"><a class="header-anchor" href="#_1-最简化" aria-hidden="true">#</a> 1. 最简化</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2) =&gt; 3</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y
</code></pre></div><h3 id="_2-追加更多" tabindex="-1"><a class="header-anchor" href="#_2-追加更多" aria-hidden="true">#</a> 2. 追加更多</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2)(3)(4) =&gt; 10</span>
<span class="token comment">// 但总要有一个区分终结的标志</span>
<span class="token comment">// sum(1)(2)(3)(4)() =&gt; 10</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> x

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> y
      <span class="token keyword">return</span> add
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-更好的终结形式" tabindex="-1"><a class="header-anchor" href="#_3-更好的终结形式" aria-hidden="true">#</a> 3. 更好的终结形式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2).sumOf() =&gt; 3</span>
<span class="token comment">// sum(1)(2)(3)(4).sumOf() =&gt; 3</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> x

  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> y
    <span class="token keyword">return</span> add
  <span class="token punctuation">}</span>

  add<span class="token punctuation">.</span><span class="token function-variable function">sumOf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result

  <span class="token keyword">return</span> add
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-更多的参数" tabindex="-1"><a class="header-anchor" href="#_4-更多的参数" aria-hidden="true">#</a> 4. 更多的参数</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2,3).sumOf() =&gt; 6</span>
<span class="token comment">// sum(1,2)(3)(4,5,6).sumOf() =&gt; 21</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">]</span>

  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>orgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>orgs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> add
  <span class="token punctuation">}</span>

  <span class="token comment">// 取个巧，最后计算</span>
  add<span class="token punctuation">.</span><span class="token function-variable function">sumOf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">)</span>

  <span class="token keyword">return</span> add
<span class="token punctuation">}</span>
</code></pre></div>`,11))])}const f=p(l,[["render",i],["__file","currying.html.vue"]]);export{f as default};
