import{_ as t,M as r,p as o,q as c,Q as e,t as n,N as s,a1 as i}from"./framework-49860b1b.js";const l={},d=i(`<h1 id="快速尝试-redis" tabindex="-1"><a class="header-anchor" href="#快速尝试-redis" aria-hidden="true">#</a> 快速尝试 Redis</h1><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis <span class="token function">sh</span>
</code></pre></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 cli</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis redis-cli

<span class="token comment"># 获取所有 keys</span>
KEYS *

<span class="token comment"># 清空所有</span>
FLUSHALL
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,5),p={href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},h={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"};function m(_,u){const a=r("ExternalLinkIcon");return o(),c("div",null,[d,e("ol",null,[e("li",null,[e("a",p,[n("Redis"),s(a)])]),e("li",null,[e("a",h,[n("Redis 命令"),s(a)])])])])}const f=t(l,[["render",m],["__file","index.html.vue"]]);export{f as default};
