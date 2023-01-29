import{_ as o,M as t,p,q as c,Q as n,t as s,N as a,a1 as r}from"./framework-49860b1b.js";const l={},d=n("h1",{id:"stored-procedure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stored-procedure","aria-hidden":"true"},"#"),s(" Stored Procedure")],-1),u=n("p",null,"存储过程三大作用：",-1),i=n("ul",null,[n("li",null,"存储和管理 SQL 代码"),n("li",null,"性能优化"),n("li",null,"数据安全")],-1),k=n("p",null,"糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：",-1),_={href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"},h={href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"},w=r(`<p>但基础的还是要了解的。</p><h2 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> get_customer_by_id<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> get_customer_by_id <span class="token punctuation">(</span>
    id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  customers c
    <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> id<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>再调用：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> get_customer_by_id<span class="token punctuation">(</span><span class="token number">10003</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function E(y,f){const e=t("ExternalLinkIcon");return p(),c("div",null,[d,u,i,k,n("ul",null,[n("li",null,[n("a",_,[s("存储过程在实际项目中用的多吗？（知乎）"),a(e)])]),n("li",null,[n("a",h,[s("存储过程在实际项目中用的多吗？（SF）"),a(e)])]),n("li",null,[n("a",m,[s("为什么阿里巴巴Java开发手册里要求禁止使用存储过程？"),a(e)])])]),w])}const R=o(l,[["render",E],["__file","stored-procedure.html.vue"]]);export{R as default};
