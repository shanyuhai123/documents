import{e as s}from"./app.12170b86.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=s(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> VIEWS</h1><p>\u89C6\u56FE\u662F\u865A\u62DF\u7684\u8868\u3002</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u91CD\u7528 SQL \u8BED\u53E5</li><li>\u7B80\u5316\u590D\u6742\u7684 SQL \u64CD\u4F5C</li><li>\u4F7F\u7528\u8868\u7684\u7EC4\u6210\u90E8\u5206\u800C\u4E0D\u662F\u6574\u4E2A\u8868</li><li>\u4FDD\u62A4\u6570\u636E</li><li>\u66F4\u6539\u6570\u636E\u683C\u5F0F\u548C\u8868\u793A</li></ul><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B</h3><p>\u521B\u5EFA\u89C6\u56FE\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> product_customers <span class="token keyword">AS</span>
  <span class="token keyword">SELECT</span>
    cust_name<span class="token punctuation">,</span>
    cust_contact<span class="token punctuation">,</span>
    prod_id
  <span class="token keyword">FROM</span> customers c 
  <span class="token keyword">JOIN</span> orders o
    <span class="token keyword">USING</span><span class="token punctuation">(</span>cust_id<span class="token punctuation">)</span>
  <span class="token keyword">JOIN</span> orderitems oi
    <span class="token keyword">USING</span><span class="token punctuation">(</span>order_num<span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\u89C6\u56FE\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  cust_name<span class="token punctuation">,</span>
  cust_contact
<span class="token keyword">FROM</span> product_customers
<span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span>
</code></pre></div><h2 id="\u53EF\u66F4\u65B0\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u53EF\u66F4\u65B0\u89C6\u56FE" aria-hidden="true">#</a> \u53EF\u66F4\u65B0\u89C6\u56FE</h2><p>\u89C6\u56FE\u9664\u4E86\u53EF\u4EE5\u7528\u5728 SELECT \u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5728\u589E\u6539\u5220\u4E2D\uFF0C\u4F46\u5177\u6709\u9650\u5236\u6761\u4EF6\uFF1A</p><ul><li>\u5206\u7EC4\uFF08GROUP BY \u548C HAVING\uFF09</li><li>\u8054\u7ED3</li><li>\u5B50\u67E5\u8BE2</li><li>\u5E76</li><li>\u805A\u96C6\u51FD\u6570</li><li>DISTINCT</li><li>\u5BFC\u51FA\u8BA1\u7B97\u5217</li></ul>`,13);function t(p,o){return e}var r=a(n,[["render",t]]);export{r as default};
