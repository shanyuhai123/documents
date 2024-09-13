import{_ as s,p as a,q as p,a1 as e}from"./framework-e3e34937.js";const o={};function t(c,n){return a(),p("div",null,n[0]||(n[0]=[e(`<h1 id="join-union" tabindex="-1"><a class="header-anchor" href="#join-union" aria-hidden="true">#</a> JOIN &amp; UNION</h1><h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2><p>由于 JOIN 和 UNION 都是多表查询，所以放在一起了。</p><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><h3 id="内部联结" tabindex="-1"><a class="header-anchor" href="#内部联结" aria-hidden="true">#</a> 内部联结</h3><p>内部联结又称为等值联结，它基于两个表之间的相等测试。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  vend_name<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> vendors v
<span class="token keyword">JOIN</span> products p
  <span class="token keyword">USING</span> <span class="token punctuation">(</span>vend_id<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">,</span> prod_name

<span class="token comment">-- 自联结</span>
<span class="token keyword">SELECT</span>
  p1<span class="token punctuation">.</span>prod_id<span class="token punctuation">,</span>
  p1<span class="token punctuation">.</span>prod_name
<span class="token keyword">FROM</span> products p1
<span class="token keyword">JOIN</span> products p2
  <span class="token keyword">ON</span> p1<span class="token punctuation">.</span>vend_id <span class="token operator">=</span> p2<span class="token punctuation">.</span>vend_id
  <span class="token operator">AND</span> p2<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> <span class="token string">&#39;DTNTR&#39;</span>
</code></pre></div><h3 id="外部联结" tabindex="-1"><a class="header-anchor" href="#外部联结" aria-hidden="true">#</a> 外部联结</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span>
  o<span class="token punctuation">.</span>order_num
<span class="token keyword">FROM</span> customers c
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o
  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id
</code></pre></div><h3 id="聚集函数" tabindex="-1"><a class="header-anchor" href="#聚集函数" aria-hidden="true">#</a> 聚集函数</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  c<span class="token punctuation">.</span>cust_name<span class="token punctuation">,</span>
  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>order_num<span class="token punctuation">)</span> <span class="token keyword">as</span> num_ord
<span class="token keyword">FROM</span> customers c
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o
  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span>cust_id
</code></pre></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> UNION</h2><p>在某种程度上 UNION 可以大幅简化 WHERE 子句。</p><p>UNION 中每个查询必须包含相同的列、表达式或聚集函数。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 指定 ALL 不会取消重复的行</span>
<span class="token keyword">SELECT</span>
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">5</span>
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span>
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> vend_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">)</span>
</code></pre></div>`,15)]))}const r=s(o,[["render",t],["__file","join-and-union.html.vue"]]);export{r as default};
