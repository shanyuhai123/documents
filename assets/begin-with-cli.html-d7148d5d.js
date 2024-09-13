import{_ as o,M as e,p as c,q as l,R as n,t as a,N as p,a1 as r}from"./framework-e3e34937.js";const i={},u={style:{"text-align":"center"}},k={href:"https://www.npmjs.com/package/commander",target:"_blank",rel:"noopener noreferrer"},d={style:{"text-align":"center"}},m={href:"https://www.npmjs.com/package/chalk",target:"_blank",rel:"noopener noreferrer"},g={style:{"text-align":"center"}},h={href:"https://www.npmjs.com/package/inquirer",target:"_blank",rel:"noopener noreferrer"},f={style:{"text-align":"center"}},y={href:"https://www.npmjs.com/package/slash",target:"_blank",rel:"noopener noreferrer"},b={style:{"text-align":"center"}},w={href:"https://www.npmjs.com/package/minimist",target:"_blank",rel:"noopener noreferrer"},v={style:{"text-align":"center"}},j={href:"https://www.npmjs.com/package/ora",target:"_blank",rel:"noopener noreferrer"},x={style:{"text-align":"center"}},q={href:"https://www.npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer"},_={style:{"text-align":"center"}},L={href:"https://www.npmjs.com/package/yaml-front-matter",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},I={href:"https://www.npmjs.com/package/portfinder",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},V={href:"https://www.npmjs.com/package/semver",target:"_blank",rel:"noopener noreferrer"};function N($,s){const t=e("ExternalLinkIcon");return c(),l("div",null,[s[21]||(s[21]=n("h1",{id:"从-cli-开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从-cli-开始","aria-hidden":"true"},"#"),a(" 从 CLI 开始")],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"CLI(Command-Line Interface) 虽可手动监听用户输入，但从头开始则显得过于麻烦了，借助社区的力量吧。")],-1)),s[23]||(s[23]=n("h2",{id:"工具包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#工具包","aria-hidden":"true"},"#"),a(" 工具包")],-1)),n("table",null,[s[20]||(s[20]=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"工具"),n("th",null,"作用")])],-1)),n("tbody",null,[n("tr",null,[n("td",u,[n("a",k,[s[0]||(s[0]=a("commander")),p(t)])]),s[1]||(s[1]=n("td",null,"解析用户命令行的输入、参数",-1))]),n("tr",null,[n("td",d,[n("a",m,[s[2]||(s[2]=a("chalk")),p(t)])]),s[3]||(s[3]=n("td",null,"美化控制台的输出内容：字体、颜色、背景色",-1))]),n("tr",null,[n("td",g,[n("a",h,[s[4]||(s[4]=a("inquirer")),p(t)])]),s[5]||(s[5]=n("td",null,"命令行交互",-1))]),n("tr",null,[n("td",f,[n("a",y,[s[6]||(s[6]=a("slash")),p(t)])]),s[7]||(s[7]=n("td",null,"在 Windows 中使用 / 路径",-1))]),n("tr",null,[n("td",b,[n("a",w,[s[8]||(s[8]=a("minimist")),p(t)])]),s[9]||(s[9]=n("td",null,"解析参数",-1))]),n("tr",null,[n("td",v,[n("a",j,[s[10]||(s[10]=a("ora")),p(t)])]),s[11]||(s[11]=n("td",null,"优雅的加载效果",-1))]),n("tr",null,[n("td",x,[n("a",q,[s[12]||(s[12]=a("dotenv")),p(t)])]),s[13]||(s[13]=n("td",null,[a("从 "),n("code",null,".env"),a(" 文件中加载环境变量到 "),n("code",null,[a("p"),n("wbr"),a("rocess.env")])],-1))]),n("tr",null,[n("td",_,[n("a",L,[s[14]||(s[14]=a("yaml-front-matter")),p(t)])]),s[15]||(s[15]=n("td",null,[a("解析文件内的 "),n("code",null,"frontmatter")],-1))]),n("tr",null,[n("td",C,[n("a",I,[s[16]||(s[16]=a("portfinder")),p(t)])]),s[17]||(s[17]=n("td",null,"寻找可用端口号",-1))]),n("tr",null,[n("td",E,[n("a",V,[s[18]||(s[18]=a("semver")),p(t)])]),s[19]||(s[19]=n("td",null,"校验版本",-1))])])]),s[24]||(s[24]=r(`<h2 id="简单-cli" tabindex="-1"><a class="header-anchor" href="#简单-cli" aria-hidden="true">#</a> 简单 CLI</h2><h3 id="从-hello-cli-开始" tabindex="-1"><a class="header-anchor" href="#从-hello-cli-开始" aria-hidden="true">#</a> 从 HELLO CLI 开始</h3><p>初始化：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> hello-cli/bin 
<span class="token builtin class-name">cd</span> hello-cli <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre></div><p>添加文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> bin/cli.js <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
#! /usr/bin/env node

console.log(&quot;Hello CLI&quot;)
EOF</span>
</code></pre></div><p>在 <code>package.json</code> 中指定入口：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/cli.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>链接到全局并执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 链接到全局</span>
<span class="token function">npm</span> <span class="token function">link</span>

<span class="token comment"># 执行</span>
hello-cli
<span class="token comment"># Hello CLI</span>
</code></pre></div><h3 id="解析命令-commander" tabindex="-1"><a class="header-anchor" href="#解析命令-commander" aria-hidden="true">#</a> 解析命令 commander</h3><p>引入依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> commander
</code></pre></div><p>修改 <code>cli.js</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#! /usr/bin/env node</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> program <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token keyword">package</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span>

program
  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token keyword">package</span><span class="token punctuation">.</span>version<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;create &lt;app-name&gt;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&#39;create a new project powered by cli-test&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">project name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
</code></pre></div><p>测试：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>hello-cli

<span class="token comment"># 输出</span>
Usage: hello-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Options:
  -V, <span class="token parameter variable">--version</span>      output the version number
  -h, <span class="token parameter variable">--help</span>         display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>

Commands:
  create <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span>  create a new project powered by cli-test
  <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>     display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>
  
hello-cli <span class="token parameter variable">-V</span>
<span class="token comment"># 1.0.0</span>

hello-cli create my-app
<span class="token comment"># project name is my-app</span>
</code></pre></div><h3 id="交互及美化输出" tabindex="-1"><a class="header-anchor" href="#交互及美化输出" aria-hidden="true">#</a> 交互及美化输出</h3><p>引入依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 交互</span>
<span class="token function">yarn</span> <span class="token function">add</span> inquirer
<span class="token comment"># 美化</span>
<span class="token function">yarn</span> <span class="token function">add</span> chalk
</code></pre></div><p>修改 <code>action</code> 内容：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>program
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">your project is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="加载效果" tabindex="-1"><a class="header-anchor" href="#加载效果" aria-hidden="true">#</a> 加载效果</h3><p>引入依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> ora
</code></pre></div><p>再调整 <code>action</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>program
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;Loading unicorns&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      spinner<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        spinner<span class="token punctuation">.</span><span class="token function">succeed</span><span class="token punctuation">(</span><span class="token string">&#39;Loading succeed&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">your project is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,27))])}const B=o(i,[["render",N],["__file","begin-with-cli.html.vue"]]);export{B as default};
