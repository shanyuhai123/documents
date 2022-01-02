import{r as n,c as s,a,b as t,F as o,e as r,d as c,o as p}from"./app.9226fedc.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const l={},u=r(`<h1 id="\u5FEB\u901F\u4E0A\u624B-nuxtjs" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B-nuxtjs" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B NuxtJS</h1><h2 id="\u4F7F\u7528\u6A21\u677F\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6A21\u677F\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u4F7F\u7528\u6A21\u677F\u5FEB\u901F\u5F00\u59CB</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6839\u636E\u4F60\u7684\u9700\u6C42\u8FDB\u884C\u9009\u62E9</span>
<span class="token function">yarn</span> create nuxt-app nuxt-test
</code></pre></div><h2 id="\u4F7F\u7528\u60F3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u60F3\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u60F3\u6CD5</h2><p>NuxtJS \u662F\u4E00\u4E2A\u91CD\u7EA6\u5B9A\u7684\u6846\u67B6\u3002</p><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h3><p>\u53EF\u4EE5\u6709\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>components
\u251C\u2500\u2500 Component-1.vue
\u2514\u2500\u2500 Menu
    \u2514\u2500\u2500 Component-2.vue
</code></pre></div><p>\u5F15\u5165\u65F6\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuComponent-2</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3><p>\u53EF\u4EE5\u6709\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>layouts
\u2514\u2500\u2500 <span class="token number">10</span>
    \u2514\u2500\u2500 <span class="token number">1</span>
        \u2514\u2500\u2500 default.vue
</code></pre></div><p>\u5F15\u5165\u65F6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  layout<span class="token operator">:</span> <span class="token string">&#39;10/1/default&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="pages-\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#pages-\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> pages \u52A8\u6001\u8DEF\u7531</h3><p>\u4F7F\u7528\u4E0B\u5212\u7EBF\u4E3A\u52A8\u6001\u8DEF\u7531\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>pages
\u251C\u2500\u2500 games
\u2502   \u2514\u2500\u2500 _module
\u2502       \u2514\u2500\u2500 _id.vue
</code></pre></div><p>\u76F8\u5F53\u4E8E <code>/games/:module/:id</code>\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,20),i={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},h=c("NuxtJS");function g(x,m){const e=n("OutboundLink");return p(),s(o,null,[u,a("ul",null,[a("li",null,[a("a",i,[h,t(e)])])])],64)}var _=d(l,[["render",g]]);export{_ as default};
