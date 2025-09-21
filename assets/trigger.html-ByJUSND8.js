import{_ as n,c as a,a as e,o as p}from"./app-DLCc4AGN.js";const t={};function l(o,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>TRIGGER</span></a></h1><p>触发器是在 INSERT、UPDATE、DELETE 语句前后自动执行的一段。</p><p>每个表每个事件每次只允许一个触发器，因此每个表最多支持 6 个触发器（每条 INSERT、UPDATE、DELETE 的之前和之后）。</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert"><span>INSERT</span></a></h3><p><a href="https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233" target="_blank" rel="noopener noreferrer">MYSQL5以后，不允许触发器返回任何结果</a>，而且缺乏返回的对比，不如为其新增一列。</p><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> orders_after_insert<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">DELIMITER</span> <span class="token comment">//</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> orders_after_insert</span>
<span class="line">  <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> orders</span>
<span class="line">  <span class="token keyword">FOR EACH ROW</span></span>
<span class="line"><span class="token keyword">BEGIN</span></span>
<span class="line">    <span class="token keyword">SELECT</span> NEW<span class="token punctuation">.</span>order_num <span class="token keyword">INTO</span> <span class="token variable">@order</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">END</span><span class="token comment">//</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>UPDATE</span></a></h3><div class="language-sql" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> vendors_before_update<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">DELIMITER</span> <span class="token comment">//</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> vendors_before_update</span>
<span class="line">  BEFORE <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> vendors</span>
<span class="line">    <span class="token keyword">FOR EACH ROW</span></span>
<span class="line"><span class="token keyword">BEGIN</span></span>
<span class="line">    <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>vend_state <span class="token operator">=</span> upper<span class="token punctuation">(</span>NEW<span class="token punctuation">.</span>vend_state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">END</span><span class="token comment">//</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div>`,9)])])}const r=n(t,[["render",l]]),i=JSON.parse('{"path":"/backend/mysql/trigger.html","title":"TRIGGER","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"INSERT","slug":"insert","link":"#insert","children":[]},{"level":3,"title":"UPDATE","slug":"update","link":"#update","children":[]}]}],"git":{"updatedTime":1637393929000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/mysql/trigger.md"}');export{r as comp,i as data};
