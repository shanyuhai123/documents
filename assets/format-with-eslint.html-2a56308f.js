import{_ as o,M as r,p as l,q as i,R as s,t as a,N as e,a1 as p}from"./framework-e3e34937.js";const c={},u={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const t=r("ExternalLinkIcon");return l(),i("div",null,[n[25]||(n[25]=s("h1",{id:"eslint-格式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#eslint-格式化","aria-hidden":"true"},"#"),a(" ESLint 格式化")],-1)),s("p",null,[n[1]||(n[1]=a("格式化插件 ")),s("a",u,[n[0]||(n[0]=a("ESLint")),e(t)]),n[2]||(n[2]=a("。"))]),n[26]||(n[26]=p(`<h2 id="eslint-依赖" tabindex="-1"><a class="header-anchor" href="#eslint-依赖" aria-hidden="true">#</a> ESLint 依赖</h2><p>安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化</span>
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
</code></pre></div><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明" aria-hidden="true">#</a> 配置文件说明</h2>`,16)),s("p",null,[n[4]||(n[4]=a("配置文件名为 ")),s("a",d,[n[3]||(n[3]=a(".eslintrc")),e(t)]),n[5]||(n[5]=a("。"))]),n[27]||(n[27]=p(`<h3 id="解析参数-parseroptions" tabindex="-1"><a class="header-anchor" href="#解析参数-parseroptions" aria-hidden="true">#</a> 解析参数 parserOptions</h3><p>默认解析器（parser） 为 <code>espree</code>，可以指定为 <code>babel</code> 或 <code>typescript</code> 的：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>说明：</p>`,13)),s("ul",null,[n[13]||(n[13]=s("li",null,[s("code",null,"eslint"),a(" 为官方扩展")],-1)),s("li",null,[n[7]||(n[7]=s("code",null,"plugin",-1)),n[8]||(n[8]=a(" 为插件类型扩展，")),n[9]||(n[9]=s("code",null,"vue",-1)),n[10]||(n[10]=a(" 可以手动调整为 ")),n[11]||(n[11]=s("code",null,"vue3",-1)),n[12]||(n[12]=a("，具体看 ")),s("a",k,[n[6]||(n[6]=a("eslint-plugin-vue")),e(t)])]),n[14]||(n[14]=s("li",null,[s("code",null,"eslint-config"),a(" 常常来自一些团队的约束，如 "),s("code",null,"eslint-config-airbnb"),a("、"),s("code",null,"eslint-config-standard"),a("、"),s("code",null,"eslint-config-google")],-1))]),n[28]||(n[28]=p(`<h3 id="插件-plugins" tabindex="-1"><a class="header-anchor" href="#插件-plugins" aria-hidden="true">#</a> 插件 plugins</h3><p><code>ESLint</code> 默认可以检测 <code>JavaScript</code>，而如果想检测更多，例如 <code>Vue</code>、<code>TypeScript</code> 则需要另行添加解析了：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@typescript-eslint&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="规则-rules" tabindex="-1"><a class="header-anchor" href="#规则-rules" aria-hidden="true">#</a> 规则 rules</h3><p>当 <code>extends</code> 中部分规则不合你口味时可在此一一修改。</p><h2 id="插件-prettier" tabindex="-1"><a class="header-anchor" href="#插件-prettier" aria-hidden="true">#</a> 插件 Prettier</h2>`,6)),s("p",null,[n[16]||(n[16]=a("在之前介绍了 ")),n[17]||(n[17]=s("code",null,"plugins",-1)),n[18]||(n[18]=a(" 可以支持更多的文件格式，那 ")),s("a",g,[n[15]||(n[15]=a("prettier")),e(t)]),n[19]||(n[19]=a(" 则是专业的。"))]),n[29]||(n[29]=p(`<h3 id="prettier-依赖及配置" tabindex="-1"><a class="header-anchor" href="#prettier-依赖及配置" aria-hidden="true">#</a> Prettier 依赖及配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 prettier</span>
<span class="token function">yarn</span> <span class="token function">add</span> prettier <span class="token parameter variable">--exact</span> <span class="token parameter variable">-D</span>
<span class="token comment"># 配置</span>
<span class="token builtin class-name">echo</span> module.exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span> .prettierrc.js
<span class="token function">touch</span> .prettierignore
</code></pre></div>`,2)),s("p",null,[n[21]||(n[21]=a("在 ")),n[22]||(n[22]=s("code",null,".prettierrc.js",-1)),n[23]||(n[23]=a(" 中可对")),s("a",v,[n[20]||(n[20]=a("配置")),e(t)]),n[24]||(n[24]=a("稍作修改。"))]),n[30]||(n[30]=p(`<h3 id="搭配-eslint-一起使用" tabindex="-1"><a class="header-anchor" href="#搭配-eslint-一起使用" aria-hidden="true">#</a> 搭配 ESLint 一起使用</h3><p>首先准备插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint-plugin-prettier <span class="token parameter variable">-D</span>
</code></pre></div><p>配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;standard&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span> <span class="token comment">// 放在最后可以覆盖之前规则</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5))])}const f=o(c,[["render",m],["__file","format-with-eslint.html.vue"]]);export{f as default};
