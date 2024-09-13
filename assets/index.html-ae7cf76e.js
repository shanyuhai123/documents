import{_ as r,M as o,p as c,q as d,a1 as l,R as a,t as n,N as t}from"./framework-e3e34937.js";const i={},p={href:"https://docs.nestjs.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/nestjsx/crud",target:"_blank",rel:"noopener noreferrer"};function u(g,e){const s=o("ExternalLinkIcon");return c(),d("div",null,[e[2]||(e[2]=l(`<h1 id="全面的-nestjs" tabindex="-1"><a class="header-anchor" href="#全面的-nestjs" aria-hidden="true">#</a> 全面的 NestJS</h1><blockquote><p>while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - <strong>Architecture</strong>.</p></blockquote><p>正如 <code>Nest</code> 所称，它是为了解决架构问题，所以会提供一些良好的实践。</p><h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><p><code>Nest CLI</code> 可以更好的帮助管理项目，这是一开始就需要知道的事情。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @nestjs/cli <span class="token parameter variable">-g</span>
</code></pre></div><h3 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h3><p>一切从查看帮助开始：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nest <span class="token parameter variable">-h</span>
</code></pre></div><p>创建项目：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nest new user-crud
</code></pre></div><p>三连：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 模块</span>
nest g mo user
<span class="token comment"># 控制器</span>
nest g co user
<span class="token comment"># 服务</span>
nest g s user
</code></pre></div><p>比三连更强的 <code>res</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 附加 dto 及 entities</span>
nest g res user
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16)),a("ol",null,[a("li",null,[a("a",p,[e[0]||(e[0]=n("Nestjs")),t(s)])]),a("li",null,[a("a",h,[e[1]||(e[1]=n("快速 CRUD")),t(s)])])])])}const b=r(i,[["render",u],["__file","index.html.vue"]]);export{b as default};
