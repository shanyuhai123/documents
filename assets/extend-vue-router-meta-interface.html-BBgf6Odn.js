import{_ as n,c as a,a as e,o as t}from"./app-DNXRdI82.js";const p={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="扩展-vue-router-meta-信息" tabindex="-1"><a class="header-anchor" href="#扩展-vue-router-meta-信息"><span>扩展 Vue Router Meta 信息</span></a></h1><p>在实际应用中会在 <code>meta</code> 添加一些字段，方便做路由上的功能扩展。而 TypeScript 中要添加对应的类型提示首先想到对 <code>RouteRecordRaw</code> 做扩展：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MenuMeta</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 标题</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token comment">// 图标</span></span>
<span class="line">  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token comment">// 在侧边栏中隐藏</span></span>
<span class="line">  hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MenuRecordRaw</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  meta<span class="token operator">?</span><span class="token operator">:</span> MenuMeta <span class="token operator">&amp;</span> RouteMeta</span>
<span class="line">  children<span class="token operator">?</span><span class="token operator">:</span> MenuRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>对于部分原生方法需要重新指定类型，不够友好，后续在文档中看到<a href="https://next.router.vuejs.org/zh/guide/advanced/meta.html" target="_blank" rel="noopener noreferrer">路由元信息</a>：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 路由名称</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    <span class="token comment">// 路由图标</span></span>
<span class="line">    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    <span class="token comment">// 从侧边栏隐藏</span></span>
<span class="line">    hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,5)]))}const r=n(p,[["render",o],["__file","extend-vue-router-meta-interface.html.vue"]]),i=JSON.parse('{"path":"/frontend/typescript/extend-vue-router-meta-interface.html","title":"扩展 Vue Router Meta 信息","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1637398040000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/typescript/extend-vue-router-meta-interface.md"}');export{r as comp,i as data};
