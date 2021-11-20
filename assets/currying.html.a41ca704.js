import{r as t,c as p,a as n,b as e,F as o,d as a,e as c,o as u}from"./app.89b3b21c.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const l={},k=a("\u590D\u6742\u7684\u770B "),i={href:"https://github.com/lodash/lodash/blob/es/curry.js",target:"_blank",rel:"noopener noreferrer"},d=a("lodash"),m=c(`<h2 id="\u4E00\u9053\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4E00\u9053\u9898\u76EE" aria-hidden="true">#</a> \u4E00\u9053\u9898\u76EE</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sumOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre></div><h2 id="\u53D1\u6563" tabindex="-1"><a class="header-anchor" href="#\u53D1\u6563" aria-hidden="true">#</a> \u53D1\u6563</h2><h3 id="_1-\u6700\u7B80\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u6700\u7B80\u5316" aria-hidden="true">#</a> 1. \u6700\u7B80\u5316</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2) =&gt; 3</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y
</code></pre></div><h3 id="_2-\u8FFD\u52A0\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#_2-\u8FFD\u52A0\u66F4\u591A" aria-hidden="true">#</a> 2. \u8FFD\u52A0\u66F4\u591A</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2)(3)(4) =&gt; 10</span>
<span class="token comment">// \u4F46\u603B\u8981\u6709\u4E00\u4E2A\u533A\u5206\u7EC8\u7ED3\u7684\u6807\u5FD7</span>
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
</code></pre></div><h3 id="_3-\u66F4\u597D\u7684\u7EC8\u7ED3\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u66F4\u597D\u7684\u7EC8\u7ED3\u5F62\u5F0F" aria-hidden="true">#</a> 3. \u66F4\u597D\u7684\u7EC8\u7ED3\u5F62\u5F0F</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2).sumOf() =&gt; 3</span>
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
</code></pre></div><h3 id="_4-\u66F4\u591A\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u591A\u7684\u53C2\u6570" aria-hidden="true">#</a> 4. \u66F4\u591A\u7684\u53C2\u6570</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sum(1)(2,3).sumOf() =&gt; 6</span>
<span class="token comment">// sum(1,2)(3)(4,5,6).sumOf() =&gt; 21</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">]</span>

  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>orgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>orgs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> add
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D6\u4E2A\u5DE7\uFF0C\u6700\u540E\u8BA1\u7B97</span>
  add<span class="token punctuation">.</span><span class="token function-variable function">sumOf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">)</span>

  <span class="token keyword">return</span> add
<span class="token punctuation">}</span>
</code></pre></div>`,11);function h(f,g){const s=t("OutboundLink");return u(),p(o,null,[n("blockquote",null,[n("p",null,[k,n("a",i,[d,e(s)])])]),m],64)}var y=r(l,[["render",h]]);export{y as default};
