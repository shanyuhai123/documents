import{_ as o,M as t,p as c,q as r,a1 as a,R as e,t as s,N as d}from"./framework-e3e34937.js";const l={},k={href:"https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html",target:"_blank",rel:"noopener noreferrer"};function u(i,n){const p=t("ExternalLinkIcon");return c(),r("div",null,[n[3]||(n[3]=a(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h1><h2 id="子句说明" tabindex="-1"><a class="header-anchor" href="#子句说明" aria-hidden="true">#</a> 子句说明</h2><table><thead><tr><th>子句</th><th>说明</th><th>是否必须使用</th></tr></thead><tbody><tr><td>SELECT</td><td>要返回的列或表达式</td><td>是</td></tr><tr><td>FROM</td><td>从中检索数据的表</td><td>仅在从表选择数据时使用</td></tr><tr><td>WHERE</td><td>行级过滤</td><td>否</td></tr><tr><td>GROUP BY</td><td>分组说明</td><td>仅在按组计算聚集时使用</td></tr><tr><td>HAVING</td><td>组级过滤</td><td>否</td></tr><tr><td>ORDER BY</td><td>输出排序顺序</td><td>否</td></tr><tr><td>LIMIT</td><td>要检索的行数</td><td>否</td></tr></tbody></table><h2 id="列" tabindex="-1"><a class="header-anchor" href="#列" aria-hidden="true">#</a> 列</h2><p>指从表的一个或多个数据列。</p><h3 id="列选择" tabindex="-1"><a class="header-anchor" href="#列选择" aria-hidden="true">#</a> 列选择</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 单列</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products

<span class="token comment">-- 多列</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products

<span class="token comment">-- 全部</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products
</code></pre></div><h3 id="限制结果" tabindex="-1"><a class="header-anchor" href="#限制结果" aria-hidden="true">#</a> 限制结果</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 直接在列上限制</span>
<span class="token keyword">SELECT</span> 
  <span class="token keyword">DISTINCT</span> vend_id
<span class="token keyword">FROM</span> products

<span class="token comment">-- 限制</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">LIMIT</span> <span class="token number">5</span>

<span class="token comment">-- 偏移</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span>
</code></pre></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><p>排序的概念比较简单，需要注意的是一般会将其放在后面执行。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 指定排序</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name

<span class="token comment">-- 二次排序</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">,</span> prod_name

<span class="token comment">-- 指定顺序规则</span>
<span class="token comment">-- 配合上 LIMIT 达到查询最大最小</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span><span class="token punctuation">,</span> prod_name
</code></pre></div><h2 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h2><p>感觉与日常要写的 <code>filter</code> 方法一致。</p><h3 id="简单-where" tabindex="-1"><a class="header-anchor" href="#简单-where" aria-hidden="true">#</a> 简单 WHERE</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 简单</span>
<span class="token keyword">SELECT</span> 
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_price <span class="token operator">=</span> <span class="token number">2.5</span>

<span class="token comment">-- 范围</span>
<span class="token keyword">SELECT</span> 
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_price <span class="token operator">BETWEEN</span> <span class="token number">2</span> <span class="token operator">AND</span> <span class="token number">5</span>

<span class="token comment">-- NULL</span>
<span class="token keyword">SELECT</span> 
  cust_id<span class="token punctuation">,</span>
  cust_name
<span class="token keyword">FROM</span> customers
<span class="token keyword">WHERE</span> cust_email <span class="token operator">IS</span> <span class="token boolean">NULL</span>
</code></pre></div><h3 id="组合语句" tabindex="-1"><a class="header-anchor" href="#组合语句" aria-hidden="true">#</a> 组合语句</h3><p>注意 AND 和 OR 同时使用时 AND 计算优先级更高，在任何多种操作符存在时都使用 <code>()</code> 明确区分，避免出现问题。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> vend_id <span class="token operator">=</span> <span class="token number">1002</span> <span class="token operator">OR</span> vend_id <span class="token operator">=</span> <span class="token number">1003</span> <span class="token operator">AND</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">5</span>
</code></pre></div><h3 id="范围表示" tabindex="-1"><a class="header-anchor" href="#范围表示" aria-hidden="true">#</a> 范围表示</h3><p><code>IN</code> 操作符可表示条件范围，可利用 IN WHERE 子句完成一些麻烦的手写行为。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> vend_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price

<span class="token comment">-- NOT</span>
<span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> vend_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price

<span class="token comment">-- 子查询</span>
<span class="token keyword">SELECT</span> 
  cust_name<span class="token punctuation">,</span>
  cust_contact
<span class="token keyword">FROM</span> customers
<span class="token keyword">WHERE</span> cust_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span>
    cust_id
  <span class="token keyword">FROM</span> orders
  <span class="token keyword">WHERE</span> order_num <span class="token operator">IN</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> 
      order_num
    <span class="token keyword">FROM</span> orderitems
    <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h3><p>前面的过滤很常见，但更实用的还看通配符。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- % 表示任何字符出现任意次数</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;%an%&quot;</span>

<span class="token comment">-- 匹配中间</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;s%e&quot;</span>

<span class="token comment">-- _ 表示任何字符出现一次</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;_et%&quot;</span>
</code></pre></div><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3><p>无论啥语言都逃不过正则表达式的魔爪，幸运的是它们的规则、关键字基本相通，减少了学习成本。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;[1-9] Ton&#39;</span>

<span class="token comment">-- MySQL 解释一次、正则表达式库再解释一次</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;\\\\d{4}&#39;</span>
</code></pre></div><h3 id="对特殊格式的处理" tabindex="-1"><a class="header-anchor" href="#对特殊格式的处理" aria-hidden="true">#</a> 对特殊格式的处理</h3><p>例如日期格式，当仅想对比到日时：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  cust_id<span class="token punctuation">,</span>
  order_num<span class="token punctuation">,</span>
  order_date
<span class="token keyword">FROM</span> orders
<span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;2005-09-01&#39;</span>
</code></pre></div>`,31)),e("p",null,[n[1]||(n[1]=s("更多内置的方法可")),e("a",k,[n[0]||(n[0]=s("参考")),d(p)]),n[2]||(n[2]=s("。"))]),n[4]||(n[4]=a(`<h2 id="计算字段" tabindex="-1"><a class="header-anchor" href="#计算字段" aria-hidden="true">#</a> 计算字段</h2><p>很多时候是由计算返回的结果。别名 <code>alias</code> 可简写为 AS，甚至还可忽略。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  concat<span class="token punctuation">(</span>vend_name<span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>vend_country<span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> vend_title
<span class="token keyword">FROM</span> vendors
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name

<span class="token comment">-- 算术运算</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  quantity<span class="token punctuation">,</span>
  item_price<span class="token punctuation">,</span>
  quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> total_price
<span class="token keyword">FROM</span> orderitems
<span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span>

<span class="token comment">-- 子查询</span>
<span class="token keyword">SELECT</span>
  cust_name<span class="token punctuation">,</span>
  cust_state<span class="token punctuation">,</span>
  <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> 
      <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> orders
    <span class="token keyword">WHERE</span> orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> c<span class="token punctuation">.</span>cust_id
  <span class="token punctuation">)</span> <span class="token keyword">AS</span> orders
<span class="token keyword">FROM</span> customers c
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name
</code></pre></div><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2><p>如果对 <code>count(*)</code> 存在困惑的话，配合上分组就好理解了。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods
<span class="token keyword">FROM</span> products
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id
</code></pre></div><p>需注意配合分组使用的是 <code>HAVING</code> 而非 <code>WHERE</code>，一种理解是 <code>WHERE</code> 在数据分组前进行过滤，<code>HAVING</code> 在数据分组后进行过滤，到底是怎么回事得看 MySQL 的源码了。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods
<span class="token keyword">FROM</span> products
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id
<span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre></div>`,8))])}const m=o(l,[["render",u],["__file","select.html.vue"]]);export{m as default};
