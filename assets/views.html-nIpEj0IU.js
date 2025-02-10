import{_ as a,c as n,a as e,o as l}from"./app-DNXRdI82.js";const p={};function t(i,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views"><span>VIEWS</span></a></h1><p>视图是虚拟的表。</p><p>优点：</p><ul><li>重用 SQL 语句</li><li>简化复杂的 SQL 操作</li><li>使用表的组成部分而不是整个表</li><li>保护数据</li><li>更改数据格式和表示</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="简单示例" tabindex="-1"><a class="header-anchor" href="#简单示例"><span>简单示例</span></a></h3><p>创建视图：</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> product_customers <span class="token keyword">AS</span></span>
<span class="line">  <span class="token keyword">SELECT</span></span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_contact<span class="token punctuation">,</span></span>
<span class="line">    prod_id</span>
<span class="line">  <span class="token keyword">FROM</span> customers c </span>
<span class="line">  <span class="token keyword">JOIN</span> orders o</span>
<span class="line">    <span class="token keyword">USING</span><span class="token punctuation">(</span>cust_id<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">JOIN</span> orderitems oi</span>
<span class="line">    <span class="token keyword">USING</span><span class="token punctuation">(</span>order_num<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>使用视图：</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span></span>
<span class="line">  cust_name<span class="token punctuation">,</span></span>
<span class="line">  cust_contact</span>
<span class="line"><span class="token keyword">FROM</span> product_customers</span>
<span class="line"><span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="可更新视图" tabindex="-1"><a class="header-anchor" href="#可更新视图"><span>可更新视图</span></a></h2><p>视图除了可以用在 SELECT 中，也可以用在增改删中，但具有限制条件：</p><ul><li>分组（GROUP BY 和 HAVING）</li><li>联结</li><li>子查询</li><li>并</li><li>聚集函数</li><li>DISTINCT</li><li>导出计算列</li></ul>`,13)]))}const o=a(p,[["render",t],["__file","views.html.vue"]]),r=JSON.parse('{"path":"/backend/mysql/views.html","title":"VIEWS","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"简单示例","slug":"简单示例","link":"#简单示例","children":[]}]},{"level":2,"title":"可更新视图","slug":"可更新视图","link":"#可更新视图","children":[]}],"git":{"updatedTime":1637393929000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/mysql/views.md"}');export{o as comp,r as data};
