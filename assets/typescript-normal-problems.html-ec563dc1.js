import{_ as e,M as l,p as c,q as r,R as a,t as s,N as p,a1 as o}from"./framework-e3e34937.js";const u={},i={href:"https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Microsoft/TypeScript/pull/3823",target:"_blank",rel:"noopener noreferrer"},d={href:"https://stackoverflow.com/questions/52234014/in-typescript-why-is-it-that-an-object-cannot-specify-excess-properties-on-assi?rq=1",target:"_blank",rel:"noopener noreferrer"},g={href:"https://segmentfault.com/q/1010000038671707#",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339",target:"_blank",rel:"noopener noreferrer"};function f(b,n){const t=l("ExternalLinkIcon");return c(),r("div",null,[n[17]||(n[17]=a("h1",{id:"typescript-常见问题",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#typescript-常见问题","aria-hidden":"true"},"#"),s(" TypeScript 常见问题")],-1)),n[18]||(n[18]=a("h2",{id:"过量属性检测",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#过量属性检测","aria-hidden":"true"},"#"),s(" 过量属性检测")],-1)),a("p",null,[n[1]||(n[1]=s("看下官网的")),a("a",i,[n[0]||(n[0]=s("示例")),p(t)]),n[2]||(n[2]=s("："))]),n[19]||(n[19]=o(`<div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createSquare</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> SquareConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> area<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> config<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    area<span class="token operator">:</span> config<span class="token punctuation">.</span>width <span class="token operator">?</span> config<span class="token punctuation">.</span>width <span class="token operator">*</span> config<span class="token punctuation">.</span>width <span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> colour<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>

<span class="token function">createSquare</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token comment">// OK</span>
<span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span> colour<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// ERROR</span>
</code></pre></div>`,1)),a("p",null,[n[4]||(n[4]=s("在 ")),a("a",k,[n[3]||(n[3]=s("Strict object literal assignment checking")),p(t)]),n[5]||(n[5]=s(" 应该是特地为对象字面量增加了严格模式。"))]),n[20]||(n[20]=a("h3",{id:"疑惑",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#疑惑","aria-hidden":"true"},"#"),s(" 疑惑")],-1)),a("p",null,[n[7]||(n[7]=s("为什么仅为对象字面量增加严格模式呢，SF 中有一个")),a("a",d,[n[6]||(n[6]=s("探讨")),p(t)]),n[8]||(n[8]=s("。"))]),n[21]||(n[21]=o(`<p>解释似乎很有道理，对象字面量仅在此处使用，应当严格限制，而引用的对象可能来自其他地方，如果你对其进行修改那么可能造成其余地方出现问题。</p><h2 id="提供-js-后缀" tabindex="-1"><a class="header-anchor" href="#提供-js-后缀" aria-hidden="true">#</a> 提供 js 后缀</h2><p>在 HTML 中使用 <code>type=&quot;module&quot;</code> 时：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>Hello Module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>其中，<code>index.js</code> 由 <code>tsc</code> 生成，其中：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>
</code></pre></div><p>编译后得到的结果为：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>
</code></pre></div><p>由于缺乏后缀名称，那么浏览器访问时自然就 404 了。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>直接增加 <code>.ts</code> 后缀？那么很明显会得到 <code>导入路径不能以“.ts”扩展名结束。</code> 的错误。</p>`,11)),a("p",null,[n[10]||(n[10]=s("根据 ")),a("a",g,[n[9]||(n[9]=s("TypeScript 编译器 tsc 命令能够自动补全完整的 js 后缀？")),p(t)]),n[11]||(n[11]=s(" 在导入时增加 ")),n[12]||(n[12]=a("code",null,".js",-1)),n[13]||(n[13]=s(" 后缀，最后生效了。"))]),a("p",null,[n[15]||(n[15]=s("TypeScript 社区也对此进行了长期的讨论，并给出了一份")),a("a",m,[n[14]||(n[14]=s("总结")),p(t)]),n[16]||(n[16]=s("。"))])])}const x=e(u,[["render",f],["__file","typescript-normal-problems.html.vue"]]);export{x as default};