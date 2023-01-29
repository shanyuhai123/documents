import{_ as n,M as s,p as t,q as o,Q as a,t as c,N as r,a1 as p}from"./framework-49860b1b.js";const d={},l=p(`<h1 id="快速上手-nuxtjs" tabindex="-1"><a class="header-anchor" href="#快速上手-nuxtjs" aria-hidden="true">#</a> 快速上手 NuxtJS</h1><h2 id="使用模板快速开始" tabindex="-1"><a class="header-anchor" href="#使用模板快速开始" aria-hidden="true">#</a> 使用模板快速开始</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据你的需求进行选择</span>
<span class="token function">yarn</span> create nuxt-app nuxt-test
</code></pre></div><h2 id="使用想法" tabindex="-1"><a class="header-anchor" href="#使用想法" aria-hidden="true">#</a> 使用想法</h2><p>NuxtJS 是一个重约定的框架。</p><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h3><p>可以有目录结构：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>components
├── Component-1.vue
└── Menu
    └── Component-2.vue
</code></pre></div><p>引入时：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuComponent-2</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3><p>可以有目录结构：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>layouts
└── <span class="token number">10</span>
    └── <span class="token number">1</span>
        └── default.vue
</code></pre></div><p>引入时：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;10/1/default&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="pages-动态路由" tabindex="-1"><a class="header-anchor" href="#pages-动态路由" aria-hidden="true">#</a> pages 动态路由</h3><p>使用下划线为动态路由：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pages
├── games
│   └── _module
│       └── _id.vue
</code></pre></div><p>相当于 <code>/games/:module/:id</code>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,20),u={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"};function i(h,g){const e=s("ExternalLinkIcon");return t(),o("div",null,[l,a("ul",null,[a("li",null,[a("a",u,[c("NuxtJS"),r(e)])])])])}const v=n(d,[["render",i],["__file","index.html.vue"]]);export{v as default};
