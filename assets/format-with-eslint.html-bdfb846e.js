import{_ as o,M as p,p as c,q as r,Q as n,t as s,N as e,a1 as t}from"./framework-49860b1b.js";const l={},i=n("h1",{id:"eslint-格式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-格式化","aria-hidden":"true"},"#"),s(" ESLint 格式化")],-1),u={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="eslint-依赖" tabindex="-1"><a class="header-anchor" href="#eslint-依赖" aria-hidden="true">#</a> ESLint 依赖</h2><p>安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>

<span class="token comment"># 安装 eslint</span>
<span class="token function">npm</span> i eslint <span class="token parameter variable">-D</span>
<span class="token comment"># 如果需要支持 ts</span>
<span class="token function">npm</span> i typescript <span class="token parameter variable">-D</span>
</code></pre></div><p>初始化 eslint：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://docs.npmjs.com/cli/v7/commands/npx</span>
npx eslint <span class="token parameter variable">--init</span>
</code></pre></div><p>检测和格式化文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx eslint yourfile.js
npx eslint yourfile.js <span class="token parameter variable">--fix</span>
</code></pre></div><p>也可以配置 <code>package.json</code> script：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js ./ --fix&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>至于在 <code>git hooks</code> 处添加 <code>lint</code>，此处就不展开了。</p><h2 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件" aria-hidden="true">#</a> 启用插件</h2><p>以上都是命令行完成的。当希望在编辑器 <code>VSCode</code> 中获得更好的展示则需要安装一些插件：</p><ol><li><code>Vetur</code> 更好的支持 <code>Vue</code> 文件(与格式化无关)；</li><li><code>ESLint</code> 支持自动格式化。</li></ol><p>配置 <code>ESLint</code> 后在编辑器中保存(<code>Ctrl + S</code>)即会自动格式化。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token comment">// eslint + format</span>
<span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.vue&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;vue&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明" aria-hidden="true">#</a> 配置文件说明</h2>`,16),k={href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="解析参数-parseroptions" tabindex="-1"><a class="header-anchor" href="#解析参数-parseroptions" aria-hidden="true">#</a> 解析参数 parserOptions</h3><p>默认解析器（parser） 为 <code>espree</code>，可以指定为 <code>babel</code> 或 <code>typescript</code> 的：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="环境-env" tabindex="-1"><a class="header-anchor" href="#环境-env" aria-hidden="true">#</a> 环境 env</h3><p>不同的环境可以提供不同的环境全局变量。例如 <code>browser</code> 环境下可以使用 <code>window</code> 全局变量；<code>node</code> 环境下可以使用 <code>node</code> 一系列变量；<code>jest</code> 环境下可以使用 <code>describe</code>、<code>test</code> 等；<code>es(/d+)</code> 则对应了 <code>EcmaScript</code> 的种种特性。</p><p>除此之外，很多时候引入并不知名的第三方包呢？则可使用 <code>globals</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">someLib</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意：</p><ul><li><code>false</code>、<code>&quot;readable&quot;</code>、<code>&quot;readonly&quot;</code> 等价</li><li><code>true</code>、<code>&quot;writeable&quot;</code>、<code>&quot;writable&quot;</code> 等价</li></ul><h3 id="扩展-extends" tabindex="-1"><a class="header-anchor" href="#扩展-extends" aria-hidden="true">#</a> 扩展 extends</h3><p>类似于 <code>babel</code> 的 <code>presets</code> 概念一致，是一整套规范。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;standard&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>说明：</p>`,13),g=n("li",null,[n("code",null,"eslint"),s(" 为官方扩展")],-1),v=n("code",null,"plugin",-1),m=n("code",null,"vue",-1),_=n("code",null,"vue3",-1),b={href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[n("code",null,"eslint-config"),s(" 常常来自一些团队的约束，如 "),n("code",null,"eslint-config-airbnb"),s("、"),n("code",null,"eslint-config-standard"),s("、"),n("code",null,"eslint-config-google")],-1),f=t(`<h3 id="插件-plugins" tabindex="-1"><a class="header-anchor" href="#插件-plugins" aria-hidden="true">#</a> 插件 plugins</h3><p><code>ESLint</code> 默认可以检测 <code>JavaScript</code>，而如果想检测更多，例如 <code>Vue</code>、<code>TypeScript</code> 则需要另行添加解析了：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@typescript-eslint&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="规则-rules" tabindex="-1"><a class="header-anchor" href="#规则-rules" aria-hidden="true">#</a> 规则 rules</h3><p>当 <code>extends</code> 中部分规则不合你口味时可在此一一修改。</p><h2 id="插件-prettier" tabindex="-1"><a class="header-anchor" href="#插件-prettier" aria-hidden="true">#</a> 插件 Prettier</h2>`,6),q=n("code",null,"plugins",-1),y={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},j=t(`<h3 id="prettier-依赖及配置" tabindex="-1"><a class="header-anchor" href="#prettier-依赖及配置" aria-hidden="true">#</a> Prettier 依赖及配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 prettier</span>
<span class="token function">yarn</span> <span class="token function">add</span> prettier <span class="token parameter variable">--exact</span> <span class="token parameter variable">-D</span>
<span class="token comment"># 配置</span>
<span class="token builtin class-name">echo</span> module.exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span> .prettierrc.js
<span class="token function">touch</span> .prettierignore
</code></pre></div>`,2),S=n("code",null,".prettierrc.js",-1),E={href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="搭配-eslint-一起使用" tabindex="-1"><a class="header-anchor" href="#搭配-eslint-一起使用" aria-hidden="true">#</a> 搭配 ESLint 一起使用</h3><p>首先准备插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint-plugin-prettier <span class="token parameter variable">-D</span>
</code></pre></div><p>配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;standard&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span> <span class="token comment">// 放在最后可以覆盖之前规则</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function V(w,N){const a=p("ExternalLinkIcon");return c(),r("div",null,[i,n("p",null,[s("格式化插件 "),n("a",u,[s("ESLint"),e(a)]),s("。")]),d,n("p",null,[s("配置文件名为 "),n("a",k,[s(".eslintrc"),e(a)]),s("。")]),h,n("ul",null,[g,n("li",null,[v,s(" 为插件类型扩展，"),m,s(" 可以手动调整为 "),_,s("，具体看 "),n("a",b,[s("eslint-plugin-vue"),e(a)])]),x]),f,n("p",null,[s("在之前介绍了 "),q,s(" 可以支持更多的文件格式，那 "),n("a",y,[s("prettier"),e(a)]),s(" 则是专业的。")]),j,n("p",null,[s("在 "),S,s(" 中可对"),n("a",E,[s("配置"),e(a)]),s("稍作修改。")]),L])}const B=o(l,[["render",V],["__file","format-with-eslint.html.vue"]]);export{B as default};
