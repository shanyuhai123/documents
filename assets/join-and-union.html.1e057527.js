import{e as n}from"./app.9226fedc.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="join-union" tabindex="-1"><a class="header-anchor" href="#join-union" aria-hidden="true">#</a> JOIN &amp; UNION</h1><h2 id="\u591A\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2</h2><p>\u7531\u4E8E JOIN \u548C UNION \u90FD\u662F\u591A\u8868\u67E5\u8BE2\uFF0C\u6240\u4EE5\u653E\u5728\u4E00\u8D77\u4E86\u3002</p><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2><h3 id="\u5185\u90E8\u8054\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u8054\u7ED3" aria-hidden="true">#</a> \u5185\u90E8\u8054\u7ED3</h3><p>\u5185\u90E8\u8054\u7ED3\u53C8\u79F0\u4E3A\u7B49\u503C\u8054\u7ED3\uFF0C\u5B83\u57FA\u4E8E\u4E24\u4E2A\u8868\u4E4B\u95F4\u7684\u76F8\u7B49\u6D4B\u8BD5\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  vend_name<span class="token punctuation">,</span>
  prod_name<span class="token punctuation">,</span>
  prod_price
<span class="token keyword">FROM</span> vendors v
<span class="token keyword">JOIN</span> products p
  <span class="token keyword">USING</span> <span class="token punctuation">(</span>vend_id<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">,</span> prod_name

<span class="token comment">-- \u81EA\u8054\u7ED3</span>
<span class="token keyword">SELECT</span>
  p1<span class="token punctuation">.</span>prod_id<span class="token punctuation">,</span>
  p1<span class="token punctuation">.</span>prod_name
<span class="token keyword">FROM</span> products p1
<span class="token keyword">JOIN</span> products p2
  <span class="token keyword">ON</span> p1<span class="token punctuation">.</span>vend_id <span class="token operator">=</span> p2<span class="token punctuation">.</span>vend_id
  <span class="token operator">AND</span> p2<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> <span class="token string">&#39;DTNTR&#39;</span>
</code></pre></div><h3 id="\u5916\u90E8\u8054\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u8054\u7ED3" aria-hidden="true">#</a> \u5916\u90E8\u8054\u7ED3</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span>
  o<span class="token punctuation">.</span>order_num
<span class="token keyword">FROM</span> customers c
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o
  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id
</code></pre></div><h3 id="\u805A\u96C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u805A\u96C6\u51FD\u6570" aria-hidden="true">#</a> \u805A\u96C6\u51FD\u6570</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  c<span class="token punctuation">.</span>cust_name<span class="token punctuation">,</span>
  c<span class="token punctuation">.</span>cust_id<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>order_num<span class="token punctuation">)</span> <span class="token keyword">as</span> num_ord
<span class="token keyword">FROM</span> customers c
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> orders o
  <span class="token keyword">ON</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> o<span class="token punctuation">.</span>cust_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span>cust_id
</code></pre></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> UNION</h2><p>\u5728\u67D0\u79CD\u7A0B\u5EA6\u4E0A UNION \u53EF\u4EE5\u5927\u5E45\u7B80\u5316 WHERE \u5B50\u53E5\u3002</p><p>UNION \u4E2D\u6BCF\u4E2A\u67E5\u8BE2\u5FC5\u987B\u5305\u542B\u76F8\u540C\u7684\u5217\u3001\u8868\u8FBE\u5F0F\u6216\u805A\u96C6\u51FD\u6570\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u6307\u5B9A ALL \u4E0D\u4F1A\u53D6\u6D88\u91CD\u590D\u7684\u884C</span>
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
</code></pre></div>`,15);function e(o,t){return p}var d=s(a,[["render",e]]);export{d as default};
