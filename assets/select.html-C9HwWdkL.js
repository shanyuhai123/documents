import{_ as n,c as a,a as p,o as e}from"./app-BoSqM2g3.js";const l={};function t(c,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>SELECT</span></a></h1><h2 id="子句说明" tabindex="-1"><a class="header-anchor" href="#子句说明"><span>子句说明</span></a></h2><table><thead><tr><th>子句</th><th>说明</th><th>是否必须使用</th></tr></thead><tbody><tr><td>SELECT</td><td>要返回的列或表达式</td><td>是</td></tr><tr><td>FROM</td><td>从中检索数据的表</td><td>仅在从表选择数据时使用</td></tr><tr><td>WHERE</td><td>行级过滤</td><td>否</td></tr><tr><td>GROUP BY</td><td>分组说明</td><td>仅在按组计算聚集时使用</td></tr><tr><td>HAVING</td><td>组级过滤</td><td>否</td></tr><tr><td>ORDER BY</td><td>输出排序顺序</td><td>否</td></tr><tr><td>LIMIT</td><td>要检索的行数</td><td>否</td></tr></tbody></table><h2 id="列" tabindex="-1"><a class="header-anchor" href="#列"><span>列</span></a></h2><p>指从表的一个或多个数据列。</p><h3 id="列选择" tabindex="-1"><a class="header-anchor" href="#列选择"><span>列选择</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- 单列</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 多列</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 全部</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products</span>
<span class="line"></span></code></pre></div><h3 id="限制结果" tabindex="-1"><a class="header-anchor" href="#限制结果"><span>限制结果</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- 直接在列上限制</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  <span class="token keyword">DISTINCT</span> vend_id</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 限制</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">LIMIT</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 偏移</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h2><p>排序的概念比较简单，需要注意的是一般会将其放在后面执行。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- 指定排序</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 二次排序</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">,</span> prod_name</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 指定顺序规则</span></span>
<span class="line"><span class="token comment">-- 配合上 LIMIT 达到查询最大最小</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span><span class="token punctuation">,</span> prod_name</span>
<span class="line"></span></code></pre></div><h2 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤"><span>过滤</span></a></h2><p>感觉与日常要写的 <code>filter</code> 方法一致。</p><h3 id="简单-where" tabindex="-1"><a class="header-anchor" href="#简单-where"><span>简单 WHERE</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- 简单</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">=</span> <span class="token number">2.5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 范围</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">BETWEEN</span> <span class="token number">2</span> <span class="token operator">AND</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- NULL</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  cust_id<span class="token punctuation">,</span></span>
<span class="line">  cust_name</span>
<span class="line"><span class="token keyword">FROM</span> customers</span>
<span class="line"><span class="token keyword">WHERE</span> cust_email <span class="token operator">IS</span> <span class="token boolean">NULL</span></span>
<span class="line"></span></code></pre></div><h3 id="组合语句" tabindex="-1"><a class="header-anchor" href="#组合语句"><span>组合语句</span></a></h3><p>注意 AND 和 OR 同时使用时 AND 计算优先级更高，在任何多种操作符存在时都使用 <code>()</code> 明确区分，避免出现问题。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">=</span> <span class="token number">1002</span> <span class="token operator">OR</span> vend_id <span class="token operator">=</span> <span class="token number">1003</span> <span class="token operator">AND</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre></div><h3 id="范围表示" tabindex="-1"><a class="header-anchor" href="#范围表示"><span>范围表示</span></a></h3><p><code>IN</code> 操作符可表示条件范围，可利用 IN WHERE 子句完成一些麻烦的手写行为。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- NOT</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name<span class="token punctuation">,</span></span>
<span class="line">  prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 子查询</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  cust_name<span class="token punctuation">,</span></span>
<span class="line">  cust_contact</span>
<span class="line"><span class="token keyword">FROM</span> customers</span>
<span class="line"><span class="token keyword">WHERE</span> cust_id <span class="token operator">IN</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token keyword">SELECT</span></span>
<span class="line">    cust_id</span>
<span class="line">  <span class="token keyword">FROM</span> orders</span>
<span class="line">  <span class="token keyword">WHERE</span> order_num <span class="token operator">IN</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token keyword">SELECT</span> </span>
<span class="line">      order_num</span>
<span class="line">    <span class="token keyword">FROM</span> orderitems</span>
<span class="line">    <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3><p>前面的过滤很常见，但更实用的还看通配符。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">-- % 表示任何字符出现任意次数</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;%an%&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 匹配中间</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;s%e&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- _ 表示任何字符出现一次</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;_et%&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h3><p>无论啥语言都逃不过正则表达式的魔爪，幸运的是它们的规则、关键字基本相通，减少了学习成本。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;[1-9] Ton&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- MySQL 解释一次、正则表达式库再解释一次</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;\\\\d{4}&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="对特殊格式的处理" tabindex="-1"><a class="header-anchor" href="#对特殊格式的处理"><span>对特殊格式的处理</span></a></h3><p>例如日期格式，当仅想对比到日时：</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  cust_id<span class="token punctuation">,</span></span>
<span class="line">  order_num<span class="token punctuation">,</span></span>
<span class="line">  order_date</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;2005-09-01&#39;</span></span>
<span class="line"></span></code></pre></div><p>更多内置的方法可<a href="https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html" target="_blank" rel="noopener noreferrer">参考</a>。</p><h2 id="计算字段" tabindex="-1"><a class="header-anchor" href="#计算字段"><span>计算字段</span></a></h2><p>很多时候是由计算返回的结果。别名 <code>alias</code> 可简写为 AS，甚至还可忽略。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  concat<span class="token punctuation">(</span>vend_name<span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>vend_country<span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> vend_title</span>
<span class="line"><span class="token keyword">FROM</span> vendors</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 算术运算</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  prod_id<span class="token punctuation">,</span></span>
<span class="line">  quantity<span class="token punctuation">,</span></span>
<span class="line">  item_price<span class="token punctuation">,</span></span>
<span class="line">  quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> total_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 子查询</span></span>
<span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  cust_name<span class="token punctuation">,</span></span>
<span class="line">  cust_state<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span></span>
<span class="line">    <span class="token keyword">SELECT</span> </span>
<span class="line">      <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">FROM</span> orders</span>
<span class="line">    <span class="token keyword">WHERE</span> orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> c<span class="token punctuation">.</span>cust_id</span>
<span class="line">  <span class="token punctuation">)</span> <span class="token keyword">AS</span> orders</span>
<span class="line"><span class="token keyword">FROM</span> customers c</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name</span>
<span class="line"></span></code></pre></div><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h2><p>如果对 <code>count(*)</code> 存在困惑的话，配合上分组就好理解了。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id</span>
<span class="line"></span></code></pre></div><p>需注意配合分组使用的是 <code>HAVING</code> 而非 <code>WHERE</code>，一种理解是 <code>WHERE</code> 在数据分组前进行过滤，<code>HAVING</code> 在数据分组后进行过滤，到底是怎么回事得看 MySQL 的源码了。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">  vend_id<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id</span>
<span class="line"><span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span></span>
<span class="line"></span></code></pre></div>`,40)])])}const i=n(l,[["render",t]]),r=JSON.parse('{"path":"/backend/mysql/select.html","title":"SELECT","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"子句说明","slug":"子句说明","link":"#子句说明","children":[]},{"level":2,"title":"列","slug":"列","link":"#列","children":[{"level":3,"title":"列选择","slug":"列选择","link":"#列选择","children":[]},{"level":3,"title":"限制结果","slug":"限制结果","link":"#限制结果","children":[]}]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":2,"title":"过滤","slug":"过滤","link":"#过滤","children":[{"level":3,"title":"简单 WHERE","slug":"简单-where","link":"#简单-where","children":[]},{"level":3,"title":"组合语句","slug":"组合语句","link":"#组合语句","children":[]},{"level":3,"title":"范围表示","slug":"范围表示","link":"#范围表示","children":[]},{"level":3,"title":"通配符","slug":"通配符","link":"#通配符","children":[]},{"level":3,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]},{"level":3,"title":"对特殊格式的处理","slug":"对特殊格式的处理","link":"#对特殊格式的处理","children":[]}]},{"level":2,"title":"计算字段","slug":"计算字段","link":"#计算字段","children":[]},{"level":2,"title":"分组","slug":"分组","link":"#分组","children":[]}],"git":{"updatedTime":1637393929000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":4,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/mysql/select.md"}');export{i as comp,r as data};
