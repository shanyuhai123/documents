import{r as p,c as o,a as s,b as t,F as c,e as a,d as n,o as r}from"./app.7b08e732.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const l={},k=a(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h1><h2 id="\u5B50\u53E5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B50\u53E5\u8BF4\u660E" aria-hidden="true">#</a> \u5B50\u53E5\u8BF4\u660E</h2><table><thead><tr><th>\u5B50\u53E5</th><th>\u8BF4\u660E</th><th>\u662F\u5426\u5FC5\u987B\u4F7F\u7528</th></tr></thead><tbody><tr><td>SELECT</td><td>\u8981\u8FD4\u56DE\u7684\u5217\u6216\u8868\u8FBE\u5F0F</td><td>\u662F</td></tr><tr><td>FROM</td><td>\u4ECE\u4E2D\u68C0\u7D22\u6570\u636E\u7684\u8868</td><td>\u4EC5\u5728\u4ECE\u8868\u9009\u62E9\u6570\u636E\u65F6\u4F7F\u7528</td></tr><tr><td>WHERE</td><td>\u884C\u7EA7\u8FC7\u6EE4</td><td>\u5426</td></tr><tr><td>GROUP BY</td><td>\u5206\u7EC4\u8BF4\u660E</td><td>\u4EC5\u5728\u6309\u7EC4\u8BA1\u7B97\u805A\u96C6\u65F6\u4F7F\u7528</td></tr><tr><td>HAVING</td><td>\u7EC4\u7EA7\u8FC7\u6EE4</td><td>\u5426</td></tr><tr><td>ORDER BY</td><td>\u8F93\u51FA\u6392\u5E8F\u987A\u5E8F</td><td>\u5426</td></tr><tr><td>LIMIT</td><td>\u8981\u68C0\u7D22\u7684\u884C\u6570</td><td>\u5426</td></tr></tbody></table><h2 id="\u5217" tabindex="-1"><a class="header-anchor" href="#\u5217" aria-hidden="true">#</a> \u5217</h2><p>\u6307\u4ECE\u8868\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\u5217\u3002</p><h3 id="\u5217\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5217\u9009\u62E9" aria-hidden="true">#</a> \u5217\u9009\u62E9</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u5355\u5217</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products

<span class="token comment">-- \u591A\u5217</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products

<span class="token comment">-- \u5168\u90E8</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products
</code></pre></div><h3 id="\u9650\u5236\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u7ED3\u679C" aria-hidden="true">#</a> \u9650\u5236\u7ED3\u679C</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u76F4\u63A5\u5728\u5217\u4E0A\u9650\u5236</span>
<span class="token keyword">SELECT</span> 
  <span class="token keyword">DISTINCT</span> vend_id
<span class="token keyword">FROM</span> products

<span class="token comment">-- \u9650\u5236</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">LIMIT</span> <span class="token number">5</span>

<span class="token comment">-- \u504F\u79FB</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span>
</code></pre></div><h2 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h2><p>\u6392\u5E8F\u7684\u6982\u5FF5\u6BD4\u8F83\u7B80\u5355\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E00\u822C\u4F1A\u5C06\u5176\u653E\u5728\u540E\u9762\u6267\u884C\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u6307\u5B9A\u6392\u5E8F</span>
<span class="token keyword">SELECT</span> 
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name

<span class="token comment">-- \u4E8C\u6B21\u6392\u5E8F</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">,</span> prod_name

<span class="token comment">-- \u6307\u5B9A\u987A\u5E8F\u89C4\u5219</span>
<span class="token comment">-- \u914D\u5408\u4E0A LIMIT \u8FBE\u5230\u67E5\u8BE2\u6700\u5927\u6700\u5C0F</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span><span class="token punctuation">,</span> prod_name
</code></pre></div><h2 id="\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4" aria-hidden="true">#</a> \u8FC7\u6EE4</h2><p>\u611F\u89C9\u4E0E\u65E5\u5E38\u8981\u5199\u7684 <code>filter</code> \u65B9\u6CD5\u4E00\u81F4\u3002</p><h3 id="\u7B80\u5355-where" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355-where" aria-hidden="true">#</a> \u7B80\u5355 WHERE</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u7B80\u5355</span>
<span class="token keyword">SELECT</span> 
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_price <span class="token operator">=</span> <span class="token number">2.5</span>

<span class="token comment">-- \u8303\u56F4</span>
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
</code></pre></div><h3 id="\u7EC4\u5408\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u8BED\u53E5" aria-hidden="true">#</a> \u7EC4\u5408\u8BED\u53E5</h3><p>\u6CE8\u610F AND \u548C OR \u540C\u65F6\u4F7F\u7528\u65F6 AND \u8BA1\u7B97\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u5728\u4EFB\u4F55\u591A\u79CD\u64CD\u4F5C\u7B26\u5B58\u5728\u65F6\u90FD\u4F7F\u7528 <code>()</code> \u660E\u786E\u533A\u5206\uFF0C\u907F\u514D\u51FA\u73B0\u95EE\u9898\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  prod_id<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> vend_id <span class="token operator">=</span> <span class="token number">1002</span> <span class="token operator">OR</span> vend_id <span class="token operator">=</span> <span class="token number">1003</span> <span class="token operator">AND</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">5</span>
</code></pre></div><h3 id="\u8303\u56F4\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4\u8868\u793A" aria-hidden="true">#</a> \u8303\u56F4\u8868\u793A</h3><p><code>IN</code> \u64CD\u4F5C\u7B26\u53EF\u8868\u793A\u6761\u4EF6\u8303\u56F4\uFF0C\u53EF\u5229\u7528 IN WHERE \u5B50\u53E5\u5B8C\u6210\u4E00\u4E9B\u9EBB\u70E6\u7684\u624B\u5199\u884C\u4E3A\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
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

<span class="token comment">-- \u5B50\u67E5\u8BE2</span>
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
</code></pre></div><h3 id="\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u7B26" aria-hidden="true">#</a> \u901A\u914D\u7B26</h3><p>\u524D\u9762\u7684\u8FC7\u6EE4\u5F88\u5E38\u89C1\uFF0C\u4F46\u66F4\u5B9E\u7528\u7684\u8FD8\u770B\u901A\u914D\u7B26\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- % \u8868\u793A\u4EFB\u4F55\u5B57\u7B26\u51FA\u73B0\u4EFB\u610F\u6B21\u6570</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;%an%&quot;</span>

<span class="token comment">-- \u5339\u914D\u4E2D\u95F4</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;s%e&quot;</span>

<span class="token comment">-- _ \u8868\u793A\u4EFB\u4F55\u5B57\u7B26\u51FA\u73B0\u4E00\u6B21</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">LIKE</span> <span class="token string">&quot;_et%&quot;</span>
</code></pre></div><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h3><p>\u65E0\u8BBA\u5565\u8BED\u8A00\u90FD\u9003\u4E0D\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u9B54\u722A\uFF0C\u5E78\u8FD0\u7684\u662F\u5B83\u4EEC\u7684\u89C4\u5219\u3001\u5173\u952E\u5B57\u57FA\u672C\u76F8\u901A\uFF0C\u51CF\u5C11\u4E86\u5B66\u4E60\u6210\u672C\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;[1-9] Ton&#39;</span>

<span class="token comment">-- MySQL \u89E3\u91CA\u4E00\u6B21\u3001\u6B63\u5219\u8868\u8FBE\u5F0F\u5E93\u518D\u89E3\u91CA\u4E00\u6B21</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  prod_name
<span class="token keyword">FROM</span> products
<span class="token keyword">WHERE</span> prod_name <span class="token operator">REGEXP</span> <span class="token string">&#39;\\\\d{4}&#39;</span>
</code></pre></div><h3 id="\u5BF9\u7279\u6B8A\u683C\u5F0F\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u7279\u6B8A\u683C\u5F0F\u7684\u5904\u7406" aria-hidden="true">#</a> \u5BF9\u7279\u6B8A\u683C\u5F0F\u7684\u5904\u7406</h3><p>\u4F8B\u5982\u65E5\u671F\u683C\u5F0F\uFF0C\u5F53\u4EC5\u60F3\u5BF9\u6BD4\u5230\u65E5\u65F6\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  cust_id<span class="token punctuation">,</span>
  order_num<span class="token punctuation">,</span>
  order_date
<span class="token keyword">FROM</span> orders
<span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;2005-09-01&#39;</span>
</code></pre></div>`,31),u=n("\u66F4\u591A\u5185\u7F6E\u7684\u65B9\u6CD5\u53EF"),i={href:"https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html",target:"_blank",rel:"noopener noreferrer"},E=n("\u53C2\u8003"),_=n("\u3002"),m=a(`<h2 id="\u8BA1\u7B97\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5B57\u6BB5" aria-hidden="true">#</a> \u8BA1\u7B97\u5B57\u6BB5</h2><p>\u5F88\u591A\u65F6\u5019\u662F\u7531\u8BA1\u7B97\u8FD4\u56DE\u7684\u7ED3\u679C\u3002\u522B\u540D <code>alias</code> \u53EF\u7B80\u5199\u4E3A AS\uFF0C\u751A\u81F3\u8FD8\u53EF\u5FFD\u7565\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  concat<span class="token punctuation">(</span>vend_name<span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>vend_country<span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> vend_title
<span class="token keyword">FROM</span> vendors
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name

<span class="token comment">-- \u7B97\u672F\u8FD0\u7B97</span>
<span class="token keyword">SELECT</span> 
  prod_id<span class="token punctuation">,</span>
  quantity<span class="token punctuation">,</span>
  item_price<span class="token punctuation">,</span>
  quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> total_price
<span class="token keyword">FROM</span> orderitems
<span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span>

<span class="token comment">-- \u5B50\u67E5\u8BE2</span>
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
</code></pre></div><h2 id="\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4" aria-hidden="true">#</a> \u5206\u7EC4</h2><p>\u5982\u679C\u5BF9 <code>count(*)</code> \u5B58\u5728\u56F0\u60D1\u7684\u8BDD\uFF0C\u914D\u5408\u4E0A\u5206\u7EC4\u5C31\u597D\u7406\u89E3\u4E86\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods
<span class="token keyword">FROM</span> products
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id
</code></pre></div><p>\u9700\u6CE8\u610F\u914D\u5408\u5206\u7EC4\u4F7F\u7528\u7684\u662F <code>HAVING</code> \u800C\u975E <code>WHERE</code>\uFF0C\u4E00\u79CD\u7406\u89E3\u662F <code>WHERE</code> \u5728\u6570\u636E\u5206\u7EC4\u524D\u8FDB\u884C\u8FC7\u6EE4\uFF0C<code>HAVING</code> \u5728\u6570\u636E\u5206\u7EC4\u540E\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5230\u5E95\u662F\u600E\u4E48\u56DE\u4E8B\u5F97\u770B MySQL \u7684\u6E90\u7801\u4E86\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
  vend_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods
<span class="token keyword">FROM</span> products
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id
<span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre></div>`,8);function y(h,w){const e=p("OutboundLink");return r(),o(c,null,[k,s("p",null,[u,s("a",i,[E,t(e)]),_]),m],64)}var O=d(l,[["render",y]]);export{O as default};
