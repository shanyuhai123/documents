import{r as o,c as t,a as s,b as p,F as r,e as n,d as a,o as c}from"./app.b7a98728.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const l={},k=n('<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> TRIGGER</h1><p>\u89E6\u53D1\u5668\u662F\u5728 INSERT\u3001UPDATE\u3001DELETE \u8BED\u53E5\u524D\u540E\u81EA\u52A8\u6267\u884C\u7684\u4E00\u6BB5\u3002</p><p>\u6BCF\u4E2A\u8868\u6BCF\u4E2A\u4E8B\u4EF6\u6BCF\u6B21\u53EA\u5141\u8BB8\u4E00\u4E2A\u89E6\u53D1\u5668\uFF0C\u56E0\u6B64\u6BCF\u4E2A\u8868\u6700\u591A\u652F\u6301 6 \u4E2A\u89E6\u53D1\u5668\uFF08\u6BCF\u6761 INSERT\u3001UPDATE\u3001DELETE \u7684\u4E4B\u524D\u548C\u4E4B\u540E\uFF09\u3002</p><h2 id="\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a> \u5B9E\u8DF5</h2><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h3>',5),i={href:"https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233",target:"_blank",rel:"noopener noreferrer"},E=a("MYSQL5\u4EE5\u540E\uFF0C\u4E0D\u5141\u8BB8\u89E6\u53D1\u5668\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C"),u=a("\uFF0C\u800C\u4E14\u7F3A\u4E4F\u8FD4\u56DE\u7684\u5BF9\u6BD4\uFF0C\u4E0D\u5982\u4E3A\u5176\u65B0\u589E\u4E00\u5217\u3002"),h=n(`<div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> orders_after_insert<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> orders_after_insert
  <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> orders
  <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> NEW<span class="token punctuation">.</span>order_num <span class="token keyword">INTO</span> <span class="token variable">@order</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> vendors_before_update<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> vendors_before_update
  BEFORE <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> vendors
    <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>vend_state <span class="token operator">=</span> upper<span class="token punctuation">(</span>NEW<span class="token punctuation">.</span>vend_state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div>`,3);function _(w,y){const e=o("OutboundLink");return c(),t(r,null,[k,s("p",null,[s("a",i,[E,p(e)]),u]),h],64)}var I=d(l,[["render",_]]);export{I as default};
