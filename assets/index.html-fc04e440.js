import{_ as r,M as o,p as i,q as l,a1 as c,R as a,t as s,N as t}from"./framework-e3e34937.js";const d={},p={href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},h={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"};function m(u,e){const n=o("ExternalLinkIcon");return i(),l("div",null,[e[2]||(e[2]=c(`<h1 id="快速尝试-redis" tabindex="-1"><a class="header-anchor" href="#快速尝试-redis" aria-hidden="true">#</a> 快速尝试 Redis</h1><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis <span class="token function">sh</span>
</code></pre></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 cli</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis redis-cli

<span class="token comment"># 获取所有 keys</span>
KEYS *

<span class="token comment"># 清空所有</span>
FLUSHALL
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,5)),a("ol",null,[a("li",null,[a("a",p,[e[0]||(e[0]=s("Redis")),t(n)])]),a("li",null,[a("a",h,[e[1]||(e[1]=s("Redis 命令")),t(n)])])])])}const f=r(d,[["render",m],["__file","index.html.vue"]]);export{f as default};
