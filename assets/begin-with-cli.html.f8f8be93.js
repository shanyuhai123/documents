import{r as n,o as a,c as s,a as t,b as p,F as o,d as e,e as c}from"./app.419290e0.js";const l={},u=t("h1",{id:"从-cli-开始",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#从-cli-开始","aria-hidden":"true"},"#"),e(" 从 CLI 开始")],-1),i=t("blockquote",null,[t("p",null,"CLI(Command-Line Interface) 虽可手动监听用户输入，但从头开始则显得过于麻烦了，借助社区的力量吧。")],-1),r=t("h2",{id:"工具包",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#工具包","aria-hidden":"true"},"#"),e(" 工具包")],-1),k=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"工具"),t("th",null,"作用")])],-1),d={style:{"text-align":"center"}},g={href:"https://www.npmjs.com/package/commander",target:"_blank",rel:"noopener noreferrer"},m=e("commander"),h=t("td",null,"解析用户命令行的输入、参数",-1),f={style:{"text-align":"center"}},b={href:"https://www.npmjs.com/package/chalk",target:"_blank",rel:"noopener noreferrer"},w=e("chalk"),y=t("td",null,"美化控制台的输出内容：字体、颜色、背景色",-1),v={style:{"text-align":"center"}},j={href:"https://www.npmjs.com/package/inquirer",target:"_blank",rel:"noopener noreferrer"},x=e("inquirer"),q=t("td",null,"命令行交互",-1),L={style:{"text-align":"center"}},_={href:"https://www.npmjs.com/package/slash",target:"_blank",rel:"noopener noreferrer"},C=e("slash"),I=t("td",null,"在 Windows 中使用 / 路径",-1),O={style:{"text-align":"center"}},$={href:"https://www.npmjs.com/package/minimist",target:"_blank",rel:"noopener noreferrer"},E=e("minimist"),F=t("td",null,"解析参数",-1),H={style:{"text-align":"center"}},G={href:"https://www.npmjs.com/package/ora",target:"_blank",rel:"noopener noreferrer"},V=e("ora"),T=t("td",null,"优雅的加载效果",-1),U={style:{"text-align":"center"}},W={href:"https://www.npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer"},z=e("dotenv"),A=t("td",null,[e("从 "),t("code",null,".env"),e(" 文件中加载环境变量到 "),t("code",null,[e("p"),t("wbr"),e("rocess.env")])],-1),B={style:{"text-align":"center"}},D={href:"https://www.npmjs.com/package/yaml-front-matter",target:"_blank",rel:"noopener noreferrer"},J=e("yaml-front-matter"),K=t("td",null,[e("解析文件内的 "),t("code",null,"frontmatter")],-1),M={style:{"text-align":"center"}},N={href:"https://www.npmjs.com/package/portfinder",target:"_blank",rel:"noopener noreferrer"},P=e("portfinder"),Q=t("td",null,"寻找可用端口号",-1),R={style:{"text-align":"center"}},S={href:"https://www.npmjs.com/package/semver",target:"_blank",rel:"noopener noreferrer"},X=e("semver"),Y=t("td",null,"校验版本",-1),Z=c('<h2 id="简单-cli" tabindex="-1"><a class="header-anchor" href="#简单-cli" aria-hidden="true">#</a> 简单 CLI</h2><h3 id="从-hello-cli-开始" tabindex="-1"><a class="header-anchor" href="#从-hello-cli-开始" aria-hidden="true">#</a> 从 HELLO CLI 开始</h3><p>初始化：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p hello-cli/bin \n<span class="token builtin class-name">cd</span> hello-cli <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> init -y\n</code></pre></div><p>添加文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> bin/cli.js <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n#! /usr/bin/env node\n\nconsole.log(&quot;Hello CLI&quot;)\nEOF</span>\n</code></pre></div><p>在 <code>package.json</code> 中指定入口：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/cli.js&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>链接到全局并执行：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 链接到全局</span>\n<span class="token function">npm</span> <span class="token function">link</span>\n\n<span class="token comment"># 执行</span>\nhello-cli\n<span class="token comment"># Hello CLI</span>\n</code></pre></div><h3 id="解析命令-commander" tabindex="-1"><a class="header-anchor" href="#解析命令-commander" aria-hidden="true">#</a> 解析命令 commander</h3><p>引入依赖：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> commander\n</code></pre></div><p>修改 <code>cli.js</code>：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token hashbang comment">#! /usr/bin/env node</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> program <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token keyword">package</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span>\n\nprogram\n  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token keyword">package</span><span class="token punctuation">.</span>version<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;create &lt;app-name&gt;&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&#39;create a new project powered by cli-test&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">project name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>\n</code></pre></div><p>测试：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>hello-cli\n\n<span class="token comment"># 输出</span>\nUsage: hello-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>\n\nOptions:\n  -V, --version      output the version number\n  -h, --help         display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>\n\nCommands:\n  create <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span>  create a new project powered by cli-test\n  <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>     display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>\n  \nhello-cli -V\n<span class="token comment"># 1.0.0</span>\n\nhello-cli create my-app\n<span class="token comment"># project name is my-app</span>\n</code></pre></div><h3 id="交互及美化输出" tabindex="-1"><a class="header-anchor" href="#交互及美化输出" aria-hidden="true">#</a> 交互及美化输出</h3><p>引入依赖：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 交互</span>\n<span class="token function">yarn</span> <span class="token function">add</span> inquirer\n<span class="token comment"># 美化</span>\n<span class="token function">yarn</span> <span class="token function">add</span> chalk\n</code></pre></div><p>修改 <code>action</code> 内容：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>program\n\t<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>\n        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n        message<span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">your project is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chalk<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="加载效果" tabindex="-1"><a class="header-anchor" href="#加载效果" aria-hidden="true">#</a> 加载效果</h3><p>引入依赖：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> ora\n</code></pre></div><p>再调整 <code>action</code>：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>program\n\t<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>\n        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n        message<span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n    \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;Loading unicorns&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      spinner<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>\n\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        spinner<span class="token punctuation">.</span><span class="token function">succeed</span><span class="token punctuation">(</span><span class="token string">&#39;Loading succeed&#39;</span><span class="token punctuation">)</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">your project is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chalk<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',27);l.render=function(e,c){const l=n("OutboundLink");return a(),s(o,null,[u,i,r,t("table",null,[k,t("tbody",null,[t("tr",null,[t("td",d,[t("a",g,[m,p(l)])]),h]),t("tr",null,[t("td",f,[t("a",b,[w,p(l)])]),y]),t("tr",null,[t("td",v,[t("a",j,[x,p(l)])]),q]),t("tr",null,[t("td",L,[t("a",_,[C,p(l)])]),I]),t("tr",null,[t("td",O,[t("a",$,[E,p(l)])]),F]),t("tr",null,[t("td",H,[t("a",G,[V,p(l)])]),T]),t("tr",null,[t("td",U,[t("a",W,[z,p(l)])]),A]),t("tr",null,[t("td",B,[t("a",D,[J,p(l)])]),K]),t("tr",null,[t("td",M,[t("a",N,[P,p(l)])]),Q]),t("tr",null,[t("td",R,[t("a",S,[X,p(l)])]),Y])])]),Z],64)};export{l as default};
