import{_ as s,c as a,a as p,o as e}from"./app-DLCc4AGN.js";const l={};function t(o,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="join-union" tabindex="-1"><a class="header-anchor" href="#join-union"><span>JOIN &amp; UNION</span></a></h1><h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询"><span>多表查询</span></a></h2><p>由于 JOIN 和 UNION 都是多表查询，所以放在一起了。</p><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>JOIN</span></a></h2><h3 id="内部联结" tabindex="-1"><a class="header-anchor" href="#内部联结"><span>内部联结</span></a></h3><p>内部联结又称为等值联结，它基于两个表之间的相等测试。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  vend_name<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> vendors v</span>
<span class="line"><span class="token keyword">JOIN</span> products p</span>
<span class="line">  <span class="token keyword">USING</span> <span class="token punctuation">(</span>vend_id<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">,</span> prod_name</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 自联结</span></span>
<span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  p1<span class="token punctuation">.</span>prod_id<span class="token punctuation">,</span></span>
<span class="line">  p1<span class="token punctuation">.</span>prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products p1</span>
<span class="line"><span class="token keyword">JOIN</span> products p2</span>
<span class="line">  <span class="token keyword">ON</span> p1<span class="token punctuation">.</span>vend_id <span class="token operator">=</span> p2<span class="token punctuation">.</span>vend_id</span>
<span class="line">  <span class="token operator">AND</span> p2<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> <span class="token string">&#39;DTNTR&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="外部联结" tabindex="-1"><a class="header-anchor" href="#外部联结"><span>外部联结</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span></span>
<span class="line">  o<span class="token punctuation">.</span>order_num</span>
<span class="line"><span class="token keyword">FROM</span> customers c</span>
<span class="line"><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o</span>
<span class="line">  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id</span>
<span class="line"></span></code></pre></div><h3 id="聚集函数" tabindex="-1"><a class="header-anchor" href="#聚集函数"><span>聚集函数</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  c<span class="token punctuation">.</span>cust_name<span class="token punctuation">,</span></span>
<span class="line">  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">count</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>order_num<span class="token punctuation">)</span> <span class="token keyword">as</span> num_ord</span>
<span class="line"><span class="token keyword">FROM</span> customers c</span>
<span class="line"><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o</span>
<span class="line">  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span>cust_id</span>
<span class="line"></span></code></pre></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union"><span>UNION</span></a></h2><p>在某种程度上 UNION 可以大幅简化 WHERE 子句。</p><p>UNION 中每个查询必须包含相同的列、表达式或聚集函数。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- 指定 ALL 不会取消重复的行</span></span>
<span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">5</span></span>
<span class="line"><span class="token keyword">UNION</span> <span class="token keyword">ALL</span></span>
<span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div>`,15)])])}const i=s(l,[["render",t]]),d=JSON.parse('{"path":"/backend/mysql/join-and-union.html","title":"JOIN & UNION","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"多表查询","slug":"多表查询","link":"#多表查询","children":[]},{"level":2,"title":"JOIN","slug":"join","link":"#join","children":[{"level":3,"title":"内部联结","slug":"内部联结","link":"#内部联结","children":[]},{"level":3,"title":"外部联结","slug":"外部联结","link":"#外部联结","children":[]},{"level":3,"title":"聚集函数","slug":"聚集函数","link":"#聚集函数","children":[]}]},{"level":2,"title":"UNION","slug":"union","link":"#union","children":[]}],"git":{"updatedTime":1637393929000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/mysql/join-and-union.md"}');export{i as comp,d as data};
