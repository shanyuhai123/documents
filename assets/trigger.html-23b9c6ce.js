import{_ as t,M as p,p as r,q as c,a1 as s,R as a,t as e,N as d}from"./framework-e3e34937.js";const l={},k={href:"https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233",target:"_blank",rel:"noopener noreferrer"};function i(E,n){const o=p("ExternalLinkIcon");return r(),c("div",null,[n[2]||(n[2]=s('<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> TRIGGER</h1><p>触发器是在 INSERT、UPDATE、DELETE 语句前后自动执行的一段。</p><p>每个表每个事件每次只允许一个触发器，因此每个表最多支持 6 个触发器（每条 INSERT、UPDATE、DELETE 的之前和之后）。</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h3>',5)),a("p",null,[a("a",k,[n[0]||(n[0]=e("MYSQL5以后，不允许触发器返回任何结果")),d(o)]),n[1]||(n[1]=e("，而且缺乏返回的对比，不如为其新增一列。"))]),n[3]||(n[3]=s(`<div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> orders_after_insert<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> orders_after_insert
  <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> orders
  <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> NEW<span class="token punctuation">.</span>order_num <span class="token keyword">INTO</span> <span class="token variable">@order</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> vendors_before_update<span class="token punctuation">;</span>

<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> vendors_before_update
  BEFORE <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> vendors
    <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>vend_state <span class="token operator">=</span> upper<span class="token punctuation">(</span>NEW<span class="token punctuation">.</span>vend_state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div>`,3))])}const w=t(l,[["render",i],["__file","trigger.html.vue"]]);export{w as default};
