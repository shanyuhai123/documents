import{_ as s,p as a,q as n,a1 as e}from"./framework-49860b1b.js";const t={},o=e(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> VIEWS</h1><p>视图是虚拟的表。</p><p>优点：</p><ul><li>重用 SQL 语句</li><li>简化复杂的 SQL 操作</li><li>使用表的组成部分而不是整个表</li><li>保护数据</li><li>更改数据格式和表示</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="简单示例" tabindex="-1"><a class="header-anchor" href="#简单示例" aria-hidden="true">#</a> 简单示例</h3><p>创建视图：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> product_customers <span class="token keyword">AS</span>
  <span class="token keyword">SELECT</span>
    cust_name<span class="token punctuation">,</span>
    cust_contact<span class="token punctuation">,</span>
    prod_id
  <span class="token keyword">FROM</span> customers c 
  <span class="token keyword">JOIN</span> orders o
    <span class="token keyword">USING</span><span class="token punctuation">(</span>cust_id<span class="token punctuation">)</span>
  <span class="token keyword">JOIN</span> orderitems oi
    <span class="token keyword">USING</span><span class="token punctuation">(</span>order_num<span class="token punctuation">)</span>
</code></pre></div><p>使用视图：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  cust_name<span class="token punctuation">,</span>
  cust_contact
<span class="token keyword">FROM</span> product_customers
<span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span>
</code></pre></div><h2 id="可更新视图" tabindex="-1"><a class="header-anchor" href="#可更新视图" aria-hidden="true">#</a> 可更新视图</h2><p>视图除了可以用在 SELECT 中，也可以用在增改删中，但具有限制条件：</p><ul><li>分组（GROUP BY 和 HAVING）</li><li>联结</li><li>子查询</li><li>并</li><li>聚集函数</li><li>DISTINCT</li><li>导出计算列</li></ul>`,13),l=[o];function c(p,i){return a(),n("div",null,l)}const d=s(t,[["render",c],["__file","views.html.vue"]]);export{d as default};
