import{r as e,o as a,c as s,a as n,b as r,F as i,e as d,d as o}from"./app.43866806.js";const t={},l=d('<h1 id="快速尝试-redis" tabindex="-1"><a class="header-anchor" href="#快速尝试-redis" aria-hidden="true">#</a> 快速尝试 Redis</h1><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it some-redis <span class="token function">sh</span>\n</code></pre></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 进入 cli</span>\ndocker <span class="token builtin class-name">exec</span> -it some-redis redis-cli\n\n<span class="token comment"># 获取所有 keys</span>\nKEYS *\n\n<span class="token comment"># 清空所有</span>\nFLUSHALL\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),c={href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},h=o("Redis"),p={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},u=o("Redis 命令");t.render=function(d,o){const t=e("OutboundLink");return a(),s(i,null,[l,n("ol",null,[n("li",null,[n("a",c,[h,r(t)])]),n("li",null,[n("a",p,[u,r(t)])])])],64)};export{t as default};