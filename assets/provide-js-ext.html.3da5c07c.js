import{r as s,o as a,c as n,a as t,F as p,d as e,b as o}from"./app.221f0787.js";const c={},l=e('<h2 id="前置" tabindex="-1"><a class="header-anchor" href="#前置" aria-hidden="true">#</a> 前置</h2><p>在 HTML 中使用 <code>type=&quot;module&quot;</code> 时：</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>Hello Module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>其中，<code>index.js</code> 由 <code>tsc</code> 生成，其中：</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">// index.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>\n</code></pre></div><p>编译后得到的结果为：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>\n</code></pre></div><p>由于缺乏后缀名称，那么浏览器访问时自然就 404 了。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>直接增加 <code>.ts</code> 后缀？那么很明显会得到 <code>导入路径不能以“.ts”扩展名结束。</code> 的错误。</p>',10),u=o("根据 "),k={href:"https://segmentfault.com/q/1010000038671707#",target:"_blank",rel:"noopener noreferrer"},i=o("TypeScript 编译器 tsc 命令能够自动补全完整的 js 后缀？"),r=o(" 在导入时增加 "),d=t("code",null,".js",-1),g=o(" 后缀，最后生效了。"),m=o("TypeScript 社区也对此进行了长期的讨论，并给出了一份"),h={href:"https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339",target:"_blank",rel:"noopener noreferrer"},q=o("总结"),f=o("。");c.render=function(e,o){const c=s("OutboundLink");return a(),n(p,null,[l,t("p",null,[u,t("a",k,[i,t(c)]),r,d,g]),t("p",null,[m,t("a",h,[q,t(c)]),f])],64)};export default c;
