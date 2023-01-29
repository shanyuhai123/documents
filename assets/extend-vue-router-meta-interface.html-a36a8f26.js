import{_ as t,M as o,p,q as c,Q as a,t as n,N as r,a1 as s}from"./framework-49860b1b.js";const l={},k=s(`<h1 id="扩展-vue-router-meta-信息" tabindex="-1"><a class="header-anchor" href="#扩展-vue-router-meta-信息" aria-hidden="true">#</a> 扩展 Vue Router Meta 信息</h1><p>在实际应用中会在 <code>meta</code> 添加一些字段，方便做路由上的功能扩展。而 TypeScript 中要添加对应的类型提示首先想到对 <code>RouteRecordRaw</code> 做扩展：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MenuMeta</span> <span class="token punctuation">{</span>
  <span class="token comment">// 标题</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 图标</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 在侧边栏中隐藏</span>
  hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MenuRecordRaw</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> MenuMeta <span class="token operator">&amp;</span> RouteMeta
  children<span class="token operator">?</span><span class="token operator">:</span> MenuRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),u={href:"https://next.router.vuejs.org/zh/guide/advanced/meta.html",target:"_blank",rel:"noopener noreferrer"},i=s(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
    <span class="token comment">// 路由名称</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// 路由图标</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// 从侧边栏隐藏</span>
    hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function d(m,_){const e=o("ExternalLinkIcon");return p(),c("div",null,[k,a("p",null,[n("对于部分原生方法需要重新指定类型，不够友好，后续在文档中看到"),a("a",u,[n("路由元信息"),r(e)]),n("：")]),i])}const g=t(l,[["render",d],["__file","extend-vue-router-meta-interface.html.vue"]]);export{g as default};
