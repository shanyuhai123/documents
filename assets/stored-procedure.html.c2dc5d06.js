import{r as o,c as t,a as n,b as e,F as p,d as s,e as c,o as l}from"./app.e62aeb11.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const d={},u=n("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6982\u5FF5")],-1),i=n("p",null,"\u5B58\u50A8\u8FC7\u7A0B\u4E09\u5927\u4F5C\u7528\uFF1A",-1),k=n("ul",null,[n("li",null,"\u5B58\u50A8\u548C\u7BA1\u7406 SQL \u4EE3\u7801"),n("li",null,"\u6027\u80FD\u4F18\u5316"),n("li",null,"\u6570\u636E\u5B89\u5168")],-1),_=n("p",null,"\u7CDF\u7CD5\u7684\u662F\u6211\u4F3C\u4E4E\u5F88\u5C11\u89C1\u5230\u5B83\u4EEC\u7684\u5E94\u7528\uFF0C\u5230\u5E95\u8981\u4E0D\u8981\u4F7F\u7528\u5B58\u50A8\u8FC7\u7A0B\u4E5F\u6709\u4E00\u4E9B\u63A2\u8BA8\uFF1A",-1),h={href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B58\u50A8\u8FC7\u7A0B\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u7528\u7684\u591A\u5417\uFF1F\uFF08\u77E5\u4E4E\uFF09"),w={href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"},y=s("\u5B58\u50A8\u8FC7\u7A0B\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u7528\u7684\u591A\u5417\uFF1F\uFF08SF\uFF09"),E={href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"},g=s("\u4E3A\u4EC0\u4E48\u963F\u91CC\u5DF4\u5DF4Java\u5F00\u53D1\u624B\u518C\u91CC\u8981\u6C42\u7981\u6B62\u4F7F\u7528\u5B58\u50A8\u8FC7\u7A0B\uFF1F"),f=c(`<p>\u4F46\u57FA\u7840\u7684\u8FD8\u662F\u8981\u4E86\u89E3\u7684\u3002</p><h2 id="\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> \u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> get_customer_by_id<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> get_customer_by_id <span class="token punctuation">(</span>
    id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  customers c
    <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> id<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>\u518D\u8C03\u7528\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> get_customer_by_id<span class="token punctuation">(</span><span class="token number">10003</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function b(R,q){const a=o("OutboundLink");return l(),t(p,null,[u,i,k,_,n("ul",null,[n("li",null,[n("a",h,[m,e(a)])]),n("li",null,[n("a",w,[y,e(a)])]),n("li",null,[n("a",E,[g,e(a)])])]),f],64)}var L=r(d,[["render",b]]);export{L as default};
