import{r as o,c as t,a as e,b as s,F as r,e as c,d as n,o as i}from"./app.7b865752.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const l={},h=c(`<h1 id="\u5FEB\u901F\u5C1D\u8BD5-redis" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5C1D\u8BD5-redis" aria-hidden="true">#</a> \u5FEB\u901F\u5C1D\u8BD5 Redis</h1><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it some-redis <span class="token function">sh</span>
</code></pre></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 cli</span>
docker <span class="token builtin class-name">exec</span> -it some-redis redis-cli

<span class="token comment"># \u83B7\u53D6\u6240\u6709 keys</span>
KEYS *

<span class="token comment"># \u6E05\u7A7A\u6240\u6709</span>
FLUSHALL
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,5),p={href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},_=n("Redis"),u={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},m=n("Redis \u547D\u4EE4");function b(f,k){const a=o("OutboundLink");return i(),t(r,null,[h,e("ol",null,[e("li",null,[e("a",p,[_,s(a)])]),e("li",null,[e("a",u,[m,s(a)])])])],64)}var v=d(l,[["render",b]]);export{v as default};
