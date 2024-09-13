import{_ as n,p as a,q as t,a1 as e}from"./framework-e3e34937.js";const p={};function c(o,s){return a(),t("div",null,s[0]||(s[0]=[e(`<h1 id="insert、update-delete" tabindex="-1"><a class="header-anchor" href="#insert、update-delete" aria-hidden="true">#</a> INSERT、UPDATE &amp; DELETE</h1><h2 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h2><p>插入数据最好指定列名，可跳过默认取默认值的列且可更改顺序。</p><p>多行数据以 <code>,</code> 分隔。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers
  <span class="token punctuation">(</span>cust_name<span class="token punctuation">,</span> cust_address<span class="token punctuation">,</span> cust_city<span class="token punctuation">,</span> cust_state<span class="token punctuation">,</span> cust_zip<span class="token punctuation">,</span> cust_country<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
  <span class="token punctuation">(</span><span class="token string">&#39;Pep E. LaPew&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;100 Main Street&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;90046&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;USA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;M. Martian&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;42 Galaxy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;New York&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11213&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;USA&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h2><p>更新语句由三部分组成：</p><ul><li>要更新的表</li><li>列名和它们的新值</li><li>确定要更新行的过滤条件</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> customers
<span class="token keyword">SET</span> 
  cust_name <span class="token operator">=</span> <span class="token string">&#39;The Fudd&#39;</span><span class="token punctuation">,</span>
  cust_email <span class="token operator">=</span> <span class="token string">&#39;elmer@fudd.com&#39;</span>
<span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10005</span>
</code></pre></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h2><p>注意检查 WHERE 有没有使用。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> customers
<span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10006</span>
</code></pre></div>`,12)]))}const r=n(p,[["render",c],["__file","insert-update-and-delete.html.vue"]]);export{r as default};