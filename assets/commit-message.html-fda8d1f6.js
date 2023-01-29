import{_ as o,M as p,p as c,q as l,Q as a,t as n,N as t,a1 as e}from"./framework-49860b1b.js";const r={},i=a("h1",{id:"规范-git-提交信息并生成日志",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#规范-git-提交信息并生成日志","aria-hidden":"true"},"#"),n(" 规范 Git 提交信息并生成日志")],-1),u=a("h2",{id:"commit-规范化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#commit-规范化","aria-hidden":"true"},"#"),n(" Commit 规范化")],-1),d={href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>Commit message 包括三个部分：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span> <span class="token comment"># 必填</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span> <span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span> <span class="token comment"># 可选</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span> <span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span> <span class="token comment"># 可选</span>
</code></pre></div><ul><li><p>type：必填，<code>commit</code> 的类型</p><ul><li>feat：新功能</li><li>fix：修复 bug</li><li>docs：文档修改</li><li>style：格式修改，例如空格、分号等</li><li>refactor：不增加功能也不修复 bug 的代码更改</li><li>perf：性能提升、交互优化</li><li>test：测试相关修改</li><li>build：外部依赖项的修改，如 gulp、npm</li><li>ci：ci 的修改</li><li>chore：关于构建项目相关的修改，非代码和测试</li><li>revert：版本回滚</li></ul></li><li><p>scope：选填，<code>commit</code> 的影响范围，常指定模块或文件名</p></li><li><p>subject：必填，<code>commit</code> 的简短描述</p></li><li><p>body：选填，<code>commit</code> 的详细描述</p></li><li><p>footer：选填，备注信息，通常是破坏性更新或关闭 Issue</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>BREAKING CHANGE: 变动的描述
Close <span class="token comment">#ISSUE_ID</span>
Closes <span class="token comment">#ISSUE_ID, #ISSUE_ID</span>
</code></pre></div></li></ul><h3 id="_1-模板" tabindex="-1"><a class="header-anchor" href="#_1-模板" aria-hidden="true">#</a> 1. 模板</h3>`,4),k={href:"https://www.npmjs.com/package/commitizen",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i commitizen <span class="token parameter variable">-D</span>
</code></pre></div><p>初始化适配器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx commitizen init cz-conventional-changelog <span class="token parameter variable">--yarn</span> <span class="token parameter variable">--dev</span> <span class="token parameter variable">--exact</span>
</code></pre></div><p>在 <code>package.json</code> 中添加 <code>script</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz-conventional-changelog&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当执行 <code>yarn run commit</code> 就可以使用提交模板了。</p><h3 id="_2-强制规范" tabindex="-1"><a class="header-anchor" href="#_2-强制规范" aria-hidden="true">#</a> 2. 强制规范</h3>`,7),m={href:"https://github.com/conventional-changelog/commitlint#readme",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"husky v5",-1),v={href:"https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v6",target:"_blank",rel:"noopener noreferrer"},_=e(`<p><strong>如何校验：</strong></p><ul><li><p>安装依赖</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @commitlint/cli @commitlint/config-conventional <span class="token parameter variable">-D</span>
</code></pre></div></li><li><p>指定校验模板</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot;</span> <span class="token operator">&gt;</span> commitlint.config.js
</code></pre></div></li></ul><p><strong>何时校验：</strong></p><p>很明显需要在 <code>git commit</code> 前的生命周期内进行校验。</p><ul><li><p>安装 husky</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i husky <span class="token parameter variable">-D</span>
</code></pre></div></li><li><p>拦截 git hook</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Active hooks</span>
npx husky <span class="token function">install</span>

<span class="token comment"># Add hook</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&quot;npx --no-install commitlint --edit <span class="token variable">$1</span>&quot;</span>
</code></pre></div></li><li><p>测试</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;hello husky&quot;</span>

<span class="token comment"># 拦截</span>
⧗   input: hello husky
✖   subject may not be empty <span class="token punctuation">[</span>subject-empty<span class="token punctuation">]</span>
✖   <span class="token builtin class-name">type</span> may not be empty <span class="token punctuation">[</span>type-empty<span class="token punctuation">]</span>
</code></pre></div></li></ul><h2 id="生成-changelog" tabindex="-1"><a class="header-anchor" href="#生成-changelog" aria-hidden="true">#</a> 生成 CHANGELOG</h2><p>根据规则生成 CHANGELOG 的前提是 commit 规范化。</p>`,7),q={href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i standard-version <span class="token parameter variable">-D</span>
</code></pre></div><p>在 <code>package.json</code> 中添加 <code>script</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard-version&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>执行 <code>npm run release</code> 得到的效果一般，那么自然希望加点料。</p><h3 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置" aria-hidden="true">#</a> 1. 配置</h3>`,5),y={href:"https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md",target:"_blank",rel:"noopener noreferrer"},x=a("code",null,".versionrc.js",-1),j=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;# CHANGELOG\\n\\n这是一个有趣的 CHANGELOG。\\n\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feat&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;section&quot;</span><span class="token operator">:</span> <span class="token string">&quot;✨ Features | 新功能&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fix&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;section&quot;</span><span class="token operator">:</span> <span class="token string">&quot;🐛 Fixes | Bug 修复&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;perf&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;section&quot;</span><span class="token operator">:</span> <span class="token string">&quot;🔥 Performance Improvements | 性能优化&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-指定版本" tabindex="-1"><a class="header-anchor" href="#_2-指定版本" aria-hidden="true">#</a> 2. 指定版本</h3><p>npm 命令传参需要使用 <code>--</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run changelog -- --release-as <span class="token number">1.6</span>.0
<span class="token comment"># 或</span>
<span class="token function">npm</span> run changelog -- <span class="token parameter variable">-r</span> minor
</code></pre></div><h3 id="_3-hash-链接" tabindex="-1"><a class="header-anchor" href="#_3-hash-链接" aria-hidden="true">#</a> 3. hash 链接</h3><p>这需要为项目添加 <code>git remote</code> 地址：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:yourname/project.git
</code></pre></div><h2 id="代码校验" tabindex="-1"><a class="header-anchor" href="#代码校验" aria-hidden="true">#</a> 代码校验</h2><p>前面已经打好了铺垫，加上代码校验也是顺理成章的事情。</p>`,9),E={href:"https://www.npmjs.com/package/lint-staged",target:"_blank",rel:"noopener noreferrer"},N=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i lint-staged <span class="token parameter variable">-D</span>
</code></pre></div><p>接着前往 <code>package.json</code> 增加 <code>lint-staged</code> 字段，以 vue-cli 创建的项目示例：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;*.{js,jsx,vue,ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;vue-cli-service lint&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;git add&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>而 husky 校验同样不在 <code>package.json</code> 中设置了：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx --no-install lint-staged&quot;</span>
</code></pre></div>`,5),I={href:"https://github.com/stylelint/stylelint",target:"_blank",rel:"noopener noreferrer"};function A(D,L){const s=p("ExternalLinkIcon");return c(),l("div",null,[i,u,a("p",null,[n("大家都使用 "),a("a",d,[n("Angular 规范"),t(s)]),n("。")]),g,a("p",null,[n("提交信息最好在在"),a("a",k,[n("模板"),t(s)]),n("的约束下：")]),h,a("p",null,[n("为了在各种姿势使 commit 符合规范，"),a("a",m,[n("校验"),t(s)]),n("是必要的。注意 "),b,n(" 配置有所"),a("a",v,[n("更改"),t(s)]),n("。")]),_,a("p",null,[n("首先安装"),a("a",q,[n("依赖"),t(s)]),n("，如果之前使用了其他模板，也应寻找对应的依赖。")]),f,a("p",null,[n("新增 "),a("a",y,[x,t(s)]),n(" 文件：")]),j,a("p",null,[n("一般代码校验只希望"),a("a",E,[n("校验更新的文件"),t(s)]),n("：")]),N,a("p",null,[n("如果还想加些什么，可以手动追加，例如 "),a("a",I,[n("stylelint"),t(s)]),n("。")])])}const C=o(r,[["render",A],["__file","commit-message.html.vue"]]);export{C as default};
