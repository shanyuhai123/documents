import{r as e,c as n,a,b as o,F as s,d as r,e as l,o as t}from"./app.76078c72.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const c={},i=a("h2",{id:"说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#说明","aria-hidden":"true"},"#"),r(" 说明")],-1),u=a("p",null,"Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.",-1),d=r("-- "),m={href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"},h=r("lerna"),k=r("对于维护多个 "),g=a("code",null,"package",-1),b=r(" 来说，都会遇到一个选择，是选择 "),f=a("code",null,"mono-repo",-1),q=r(" 还是 "),_=a("code",null,"multi-repo",-1),v=r("。"),x=a("code",null,"multi-repo",-1),y=r(" 一个模块（module）一个仓库（repository），而 "),j=a("code",null,"mono-repo",-1),w=r(" 是所有模块整合在一个仓库，"),z={href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"},E=r("语义来源"),L=r("。"),M=l('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><code>lerna</code> 初始化分为两种模式：<code>fix</code>（默认，锁定模式，项目内的所有 package 共用版本号）、<code>independent</code>（独立模式，每个 <code>package</code> 拥有独立版本号）。个人认为大部分情况下都应该使用独立模式，即每个 <code>package</code> 都有自己的版本号。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>\n<span class="token function">npm</span> i lerna -g\n\n<span class="token comment"># git</span>\n<span class="token function">git</span> init lerna-repo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> lerna-repo\n\n<span class="token comment"># lerna</span>\nlerna init <span class="token punctuation">[</span>--independent<span class="token punctuation">]</span> <span class="token comment"># 生成下方文件夹</span>\n<span class="token comment">#lerna-repo</span>\n<span class="token comment">#├── lerna.json</span>\n<span class="token comment">#├── package.json</span>\n<span class="token comment">#└── packages</span>\n\n<span class="token comment"># 创建 packages</span>\nlerna create pkg-1 -y\nlerna create pkg-2 -y\n</code></pre></div><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><h3 id="_1-工具依赖" tabindex="-1"><a class="header-anchor" href="#_1-工具依赖" aria-hidden="true">#</a> 1. 工具依赖</h3><p>对于 <code>eslint</code>、<code>commit-lint</code> 等工具依赖，可以直接使用 <code>yarn</code> 或 <code>npm</code> 安装到顶层。</p><h3 id="_2-package-依赖" tabindex="-1"><a class="header-anchor" href="#_2-package-依赖" aria-hidden="true">#</a> 2. package 依赖</h3><p>针对 package 的依赖可以交由 <code>lerna</code> 安装。</p><ol><li><p>所有 packages</p><div class="language-bash ext-sh"><pre class="language-bash"><code>lerna <span class="token function">add</span> module1\n</code></pre></div></li><li><p>单独 package</p><div class="language-bash ext-sh"><pre class="language-bash"><code>lerna <span class="token function">add</span> module1 packages/pkg-1\n</code></pre></div></li><li><p>卸载</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 所有</span>\nlerna <span class="token builtin class-name">exec</span> -- <span class="token string">&quot;yarn remove pkg-2&quot;</span>\n<span class="token comment"># 指定</span>\nlerna <span class="token builtin class-name">exec</span> --scope<span class="token operator">=</span>pkg-1 <span class="token string">&quot;yarn remove pkg-2&quot;</span>\n<span class="token comment"># 或使用空格替代 `=`</span>\nlerna <span class="token builtin class-name">exec</span> --scope pkg-1 <span class="token string">&quot;yarn remove pkg-2&quot;</span>\n</code></pre></div></li></ol><h3 id="_3-workspaces" tabindex="-1"><a class="header-anchor" href="#_3-workspaces" aria-hidden="true">#</a> 3. workspaces</h3><p>为了减少子模块的重复依赖可以使用 <code>workspaces</code> 将依赖提取到上级目录。</p><p>启用该模式非常简单：</p><ol><li><p>在 <code>lerna.json</code> 中添加 <code>&quot;useWorkspaces&quot;: true</code></p></li><li><p>在 <code>package.json</code> 中添加 <code>&quot;workspaces&quot;: [&quot;packages/*&quot;]</code></p><p>按照约定俗成将模块放置于 <code>packages</code> 目录下</p></li></ol>',13),A=r("有时候也会希望不同的模块走不同的依赖版本，这需要使用 "),D={href:"https://classic.yarnpkg.com/blog/2018/02/15/nohoist/",target:"_blank",rel:"noopener noreferrer"},F=r("nohoist"),O=r("："),R=l('<blockquote><p>注意，需要模块为 <code>private</code></p></blockquote><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;nohoist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/vue/**&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>也可以在模块中进行设置：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;nohoist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue/**&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',4),W=a("code",null,"lerna bootstrap",-1),B=r(" 也提供了参数 "),C={href:"https://github.com/chinanf-boy/lerna-zh/blob/master/commands/bootstrap/README.zh.md#--nohoist-glob",target:"_blank",rel:"noopener noreferrer"},G=r("--nohoist"),H=r("。"),I=a("h2",{id:"更多命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#更多命令","aria-hidden":"true"},"#"),r(" 更多命令")],-1),J={href:"https://github.com/lerna/lerna/blob/master/commands/publish#readme",target:"_blank",rel:"noopener noreferrer"},K=a("code",null,"lerna publish",-1),N={href:"https://github.com/lerna/lerna/blob/master/commands/version#readme",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"lerna version",-1),Q={href:"https://github.com/lerna/lerna/blob/master/commands/bootstrap#readme",target:"_blank",rel:"noopener noreferrer"},S=a("code",null,"lerna bootstrap",-1),T={href:"https://github.com/lerna/lerna/blob/master/commands/list#readme",target:"_blank",rel:"noopener noreferrer"},U=a("code",null,"lerna list",-1),V={href:"https://github.com/lerna/lerna/blob/master/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"},X=a("code",null,"lerna changed",-1),Y={href:"https://github.com/lerna/lerna/blob/master/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"},Z=a("code",null,"lerna diff",-1),$={href:"https://github.com/lerna/lerna/blob/master/commands/exec#readme",target:"_blank",rel:"noopener noreferrer"},ee=a("code",null,"lerna exec",-1),ne={href:"https://github.com/lerna/lerna/blob/master/commands/run#readme",target:"_blank",rel:"noopener noreferrer"},ae=a("code",null,"lerna run",-1),oe={href:"https://github.com/lerna/lerna/blob/master/commands/init#readme",target:"_blank",rel:"noopener noreferrer"},se=a("code",null,"lerna init",-1),re={href:"https://github.com/lerna/lerna/blob/master/commands/add#readme",target:"_blank",rel:"noopener noreferrer"},le=a("code",null,"lerna add",-1),te={href:"https://github.com/lerna/lerna/blob/master/commands/clean#readme",target:"_blank",rel:"noopener noreferrer"},pe=a("code",null,"lerna clean",-1),ce={href:"https://github.com/lerna/lerna/blob/master/commands/import#readme",target:"_blank",rel:"noopener noreferrer"},ie=a("code",null,"lerna import",-1),ue={href:"https://github.com/lerna/lerna/blob/master/commands/link#readme",target:"_blank",rel:"noopener noreferrer"},de=a("code",null,"lerna link",-1),me={href:"https://github.com/lerna/lerna/blob/master/commands/create#readme",target:"_blank",rel:"noopener noreferrer"},he=a("code",null,"lerna create",-1),ke={href:"https://github.com/lerna/lerna/blob/master/commands/info#readme",target:"_blank",rel:"noopener noreferrer"},ge=a("code",null,"lerna info",-1);var be=p(c,[["render",function(r,l){const p=e("OutboundLink");return t(),n(s,null,[i,a("blockquote",null,[u,a("p",null,[d,a("a",m,[h,o(p)])])]),a("p",null,[k,g,b,f,q,_,v,x,y,j,w,a("a",z,[E,o(p)]),L]),M,a("p",null,[A,a("a",D,[F,o(p)]),O]),R,a("p",null,[W,B,a("a",C,[G,o(p)]),H]),I,a("ul",null,[a("li",null,[a("a",J,[K,o(p)])]),a("li",null,[a("a",N,[P,o(p)])]),a("li",null,[a("a",Q,[S,o(p)])]),a("li",null,[a("a",T,[U,o(p)])]),a("li",null,[a("a",V,[X,o(p)])]),a("li",null,[a("a",Y,[Z,o(p)])]),a("li",null,[a("a",$,[ee,o(p)])]),a("li",null,[a("a",ne,[ae,o(p)])]),a("li",null,[a("a",oe,[se,o(p)])]),a("li",null,[a("a",re,[le,o(p)])]),a("li",null,[a("a",te,[pe,o(p)])]),a("li",null,[a("a",ce,[ie,o(p)])]),a("li",null,[a("a",ue,[de,o(p)])]),a("li",null,[a("a",me,[he,o(p)])]),a("li",null,[a("a",ke,[ge,o(p)])])])],64)}]]);export{be as default};
