import{_ as n,c as a,a as e,o as p}from"./app-DNXRdI82.js";const t={};function l(o,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="eslint-格式化" tabindex="-1"><a class="header-anchor" href="#eslint-格式化"><span>ESLint 格式化</span></a></h1><p>格式化插件 <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>。</p><h2 id="eslint-依赖" tabindex="-1"><a class="header-anchor" href="#eslint-依赖"><span>ESLint 依赖</span></a></h2><p>安装依赖：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化</span></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 eslint</span></span>
<span class="line"><span class="token function">npm</span> i eslint <span class="token parameter variable">-D</span></span>
<span class="line"><span class="token comment"># 如果需要支持 ts</span></span>
<span class="line"><span class="token function">npm</span> i typescript <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre></div><p>初始化 eslint：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># https://docs.npmjs.com/cli/v7/commands/npx</span></span>
<span class="line">npx eslint <span class="token parameter variable">--init</span></span>
<span class="line"></span></code></pre></div><p>检测和格式化文件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">npx eslint yourfile.js</span>
<span class="line">npx eslint yourfile.js <span class="token parameter variable">--fix</span></span>
<span class="line"></span></code></pre></div><p>也可以配置 <code>package.json</code> script：</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js ./ --fix&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>至于在 <code>git hooks</code> 处添加 <code>lint</code>，此处就不展开了。</p><h2 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件"><span>启用插件</span></a></h2><p>以上都是命令行完成的。当希望在编辑器 <code>VSCode</code> 中获得更好的展示则需要安装一些插件：</p><ol><li><code>Vetur</code> 更好的支持 <code>Vue</code> 文件(与格式化无关)；</li><li><code>ESLint</code> 支持自动格式化。</li></ol><p>配置 <code>ESLint</code> 后在编辑器中保存(<code>Ctrl + S</code>)即会自动格式化。</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token comment">// eslint + format</span></span>
<span class="line"><span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;.html&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;.vue&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;vue&quot;</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明"><span>配置文件说明</span></a></h2><p>配置文件名为 <a href="https://eslint.org/docs/user-guide/configuring/" target="_blank" rel="noopener noreferrer">.eslintrc</a>。</p><h3 id="解析参数-parseroptions" tabindex="-1"><a class="header-anchor" href="#解析参数-parseroptions"><span>解析参数 parserOptions</span></a></h3><p>默认解析器（parser） 为 <code>espree</code>，可以指定为 <code>babel</code> 或 <code>typescript</code> 的：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="环境-env" tabindex="-1"><a class="header-anchor" href="#环境-env"><span>环境 env</span></a></h3><p>不同的环境可以提供不同的环境全局变量。例如 <code>browser</code> 环境下可以使用 <code>window</code> 全局变量；<code>node</code> 环境下可以使用 <code>node</code> 一系列变量；<code>jest</code> 环境下可以使用 <code>describe</code>、<code>test</code> 等；<code>es(/d+)</code> 则对应了 <code>EcmaScript</code> 的种种特性。</p><p>除此之外，很多时候引入并不知名的第三方包呢？则可使用 <code>globals</code>：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">someLib</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>注意：</p><ul><li><code>false</code>、<code>&quot;readable&quot;</code>、<code>&quot;readonly&quot;</code> 等价</li><li><code>true</code>、<code>&quot;writeable&quot;</code>、<code>&quot;writable&quot;</code> 等价</li></ul><h3 id="扩展-extends" tabindex="-1"><a class="header-anchor" href="#扩展-extends"><span>扩展 extends</span></a></h3><p>类似于 <code>babel</code> 的 <code>presets</code> 概念一致，是一整套规范。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;standard&#39;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>说明：</p><ul><li><code>eslint</code> 为官方扩展</li><li><code>plugin</code> 为插件类型扩展，<code>vue</code> 可以手动调整为 <code>vue3</code>，具体看 <a href="https://eslint.vuejs.org/" target="_blank" rel="noopener noreferrer">eslint-plugin-vue</a></li><li><code>eslint-config</code> 常常来自一些团队的约束，如 <code>eslint-config-airbnb</code>、<code>eslint-config-standard</code>、<code>eslint-config-google</code></li></ul><h3 id="插件-plugins" tabindex="-1"><a class="header-anchor" href="#插件-plugins"><span>插件 plugins</span></a></h3><p><code>ESLint</code> 默认可以检测 <code>JavaScript</code>，而如果想检测更多，例如 <code>Vue</code>、<code>TypeScript</code> 则需要另行添加解析了：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;@typescript-eslint&#39;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="规则-rules" tabindex="-1"><a class="header-anchor" href="#规则-rules"><span>规则 rules</span></a></h3><p>当 <code>extends</code> 中部分规则不合你口味时可在此一一修改。</p><h2 id="插件-prettier" tabindex="-1"><a class="header-anchor" href="#插件-prettier"><span>插件 Prettier</span></a></h2><p>在之前介绍了 <code>plugins</code> 可以支持更多的文件格式，那 <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier</a> 则是专业的。</p><h3 id="prettier-依赖及配置" tabindex="-1"><a class="header-anchor" href="#prettier-依赖及配置"><span>Prettier 依赖及配置</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装 prettier</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> prettier <span class="token parameter variable">--exact</span> <span class="token parameter variable">-D</span></span>
<span class="line"><span class="token comment"># 配置</span></span>
<span class="line"><span class="token builtin class-name">echo</span> module.exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span> .prettierrc.js</span>
<span class="line"><span class="token function">touch</span> .prettierignore</span>
<span class="line"></span></code></pre></div><p>在 <code>.prettierrc.js</code> 中可对<a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noopener noreferrer">配置</a>稍作修改。</p><h3 id="搭配-eslint-一起使用" tabindex="-1"><a class="header-anchor" href="#搭配-eslint-一起使用"><span>搭配 ESLint 一起使用</span></a></h3><p>首先准备插件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> eslint-plugin-prettier <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre></div><p>配置：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;standard&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;plugin:prettier/recommended&#39;</span> <span class="token comment">// 放在最后可以覆盖之前规则</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,48)]))}const i=n(t,[["render",l],["__file","format-with-eslint.html.vue"]]),r=JSON.parse('{"path":"/tools/vscode/format-with-eslint.html","title":"ESLint 格式化","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ESLint 依赖","slug":"eslint-依赖","link":"#eslint-依赖","children":[]},{"level":2,"title":"启用插件","slug":"启用插件","link":"#启用插件","children":[]},{"level":2,"title":"配置文件说明","slug":"配置文件说明","link":"#配置文件说明","children":[{"level":3,"title":"解析参数 parserOptions","slug":"解析参数-parseroptions","link":"#解析参数-parseroptions","children":[]},{"level":3,"title":"环境 env","slug":"环境-env","link":"#环境-env","children":[]},{"level":3,"title":"扩展 extends","slug":"扩展-extends","link":"#扩展-extends","children":[]},{"level":3,"title":"插件 plugins","slug":"插件-plugins","link":"#插件-plugins","children":[]},{"level":3,"title":"规则 rules","slug":"规则-rules","link":"#规则-rules","children":[]}]},{"level":2,"title":"插件 Prettier","slug":"插件-prettier","link":"#插件-prettier","children":[{"level":3,"title":"Prettier 依赖及配置","slug":"prettier-依赖及配置","link":"#prettier-依赖及配置","children":[]},{"level":3,"title":"搭配 ESLint 一起使用","slug":"搭配-eslint-一起使用","link":"#搭配-eslint-一起使用","children":[]}]}],"git":{"updatedTime":1637399264000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":8,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/vscode/format-with-eslint.md"}');export{i as comp,r as data};
