import{r as t,c as o,a as s,b as p,F as c,e as a,d as n,o as r}from"./app.6e6a2271.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const u={},i=a(`<h1 id="\u6269\u5C55-vue-router-meta-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-vue-router-meta-\u4FE1\u606F" aria-hidden="true">#</a> \u6269\u5C55 Vue Router Meta \u4FE1\u606F</h1><p>\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u4F1A\u5728 <code>meta</code> \u6DFB\u52A0\u4E00\u4E9B\u5B57\u6BB5\uFF0C\u65B9\u4FBF\u505A\u8DEF\u7531\u4E0A\u7684\u529F\u80FD\u6269\u5C55\u3002\u800C TypeScript \u4E2D\u8981\u6DFB\u52A0\u5BF9\u5E94\u7684\u7C7B\u578B\u63D0\u793A\u9996\u5148\u60F3\u5230\u5BF9 <code>RouteRecordRaw</code> \u505A\u6269\u5C55\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MenuMeta</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6807\u9898</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u56FE\u6807</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u5728\u4FA7\u8FB9\u680F\u4E2D\u9690\u85CF</span>
  hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MenuRecordRaw</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> MenuMeta <span class="token operator">&amp;</span> RouteMeta
  children<span class="token operator">?</span><span class="token operator">:</span> MenuRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),k=n("\u5BF9\u4E8E\u90E8\u5206\u539F\u751F\u65B9\u6CD5\u9700\u8981\u91CD\u65B0\u6307\u5B9A\u7C7B\u578B\uFF0C\u4E0D\u591F\u53CB\u597D\uFF0C\u540E\u7EED\u5728\u6587\u6863\u4E2D\u770B\u5230"),d={href:"https://next.router.vuejs.org/zh/guide/advanced/meta.html",target:"_blank",rel:"noopener noreferrer"},m=n("\u8DEF\u7531\u5143\u4FE1\u606F"),_=n("\uFF1A"),h=a(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8DEF\u7531\u540D\u79F0</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// \u8DEF\u7531\u56FE\u6807</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// \u4ECE\u4FA7\u8FB9\u680F\u9690\u85CF</span>
    hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function g(b,y){const e=t("OutboundLink");return r(),o(c,null,[i,s("p",null,[k,s("a",d,[m,p(e)]),_]),h],64)}var v=l(u,[["render",g]]);export{v as default};
