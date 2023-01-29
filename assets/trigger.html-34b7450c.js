import{_ as o,M as t,p,q as r,Q as n,t as s,N as c,a1 as a}from"./framework-49860b1b.js";const d={},l=a('<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> TRIGGER</h1><p>触发器是在 INSERT、UPDATE、DELETE 语句前后自动执行的一段。</p><p>每个表每个事件每次只允许一个触发器，因此每个表最多支持 6 个触发器（每条 INSERT、UPDATE、DELETE 的之前和之后）。</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h3>',5),k={href:"https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233",target:"_blank",rel:"noopener noreferrer"},i=a(`<div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> orders_after_insert<span class="token punctuation">;</span>

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
</code></pre></div>`,3);function E(u,h){const e=t("ExternalLinkIcon");return p(),r("div",null,[l,n("p",null,[n("a",k,[s("MYSQL5以后，不允许触发器返回任何结果"),c(e)]),s("，而且缺乏返回的对比，不如为其新增一列。")]),i])}const w=o(d,[["render",E],["__file","trigger.html.vue"]]);export{w as default};
