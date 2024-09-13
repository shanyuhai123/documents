import{_ as t,M as p,p as r,q as l,R as s,t as a,N as o,a1 as c}from"./framework-e3e34937.js";const d={},u={href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"},k={href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"},i={href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"};function m(w,n){const e=p("ExternalLinkIcon");return r(),l("div",null,[n[3]||(n[3]=s("h1",{id:"stored-procedure",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#stored-procedure","aria-hidden":"true"},"#"),a(" Stored Procedure")],-1)),n[4]||(n[4]=s("p",null,"存储过程三大作用：",-1)),n[5]||(n[5]=s("ul",null,[s("li",null,"存储和管理 SQL 代码"),s("li",null,"性能优化"),s("li",null,"数据安全")],-1)),n[6]||(n[6]=s("p",null,"糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：",-1)),s("ul",null,[s("li",null,[s("a",u,[n[0]||(n[0]=a("存储过程在实际项目中用的多吗？（知乎）")),o(e)])]),s("li",null,[s("a",k,[n[1]||(n[1]=a("存储过程在实际项目中用的多吗？（SF）")),o(e)])]),s("li",null,[s("a",i,[n[2]||(n[2]=a("为什么阿里巴巴Java开发手册里要求禁止使用存储过程？")),o(e)])])]),n[7]||(n[7]=c(`<p>但基础的还是要了解的。</p><h2 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> get_customer_by_id<span class="token punctuation">;</span>

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
</code></pre></div>`,5))])}const y=t(d,[["render",m],["__file","stored-procedure.html.vue"]]);export{y as default};
