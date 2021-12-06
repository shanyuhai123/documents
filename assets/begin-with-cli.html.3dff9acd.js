import{r as p,c as o,a as n,b as t,F as e,d as s,e as c,o as l}from"./app.8173c635.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const u={},r=n("h1",{id:"\u4ECE-cli-\u5F00\u59CB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE-cli-\u5F00\u59CB","aria-hidden":"true"},"#"),s(" \u4ECE CLI \u5F00\u59CB")],-1),k=n("blockquote",null,[n("p",null,"CLI(Command-Line Interface) \u867D\u53EF\u624B\u52A8\u76D1\u542C\u7528\u6237\u8F93\u5165\uFF0C\u4F46\u4ECE\u5934\u5F00\u59CB\u5219\u663E\u5F97\u8FC7\u4E8E\u9EBB\u70E6\u4E86\uFF0C\u501F\u52A9\u793E\u533A\u7684\u529B\u91CF\u5427\u3002")],-1),d=n("h2",{id:"\u5DE5\u5177\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5DE5\u5177\u5305","aria-hidden":"true"},"#"),s(" \u5DE5\u5177\u5305")],-1),h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5DE5\u5177"),n("th",null,"\u4F5C\u7528")])],-1),g={style:{"text-align":"center"}},m={href:"https://www.npmjs.com/package/commander",target:"_blank",rel:"noopener noreferrer"},_=s("commander"),f=n("td",null,"\u89E3\u6790\u7528\u6237\u547D\u4EE4\u884C\u7684\u8F93\u5165\u3001\u53C2\u6570",-1),b={style:{"text-align":"center"}},w={href:"https://www.npmjs.com/package/chalk",target:"_blank",rel:"noopener noreferrer"},y=s("chalk"),v=n("td",null,"\u7F8E\u5316\u63A7\u5236\u53F0\u7684\u8F93\u51FA\u5185\u5BB9\uFF1A\u5B57\u4F53\u3001\u989C\u8272\u3001\u80CC\u666F\u8272",-1),j={style:{"text-align":"center"}},x={href:"https://www.npmjs.com/package/inquirer",target:"_blank",rel:"noopener noreferrer"},q=s("inquirer"),L=n("td",null,"\u547D\u4EE4\u884C\u4EA4\u4E92",-1),C={style:{"text-align":"center"}},I={href:"https://www.npmjs.com/package/slash",target:"_blank",rel:"noopener noreferrer"},O=s("slash"),V=n("td",null,"\u5728 Windows \u4E2D\u4F7F\u7528 / \u8DEF\u5F84",-1),$={style:{"text-align":"center"}},E={href:"https://www.npmjs.com/package/minimist",target:"_blank",rel:"noopener noreferrer"},F=s("minimist"),N=n("td",null,"\u89E3\u6790\u53C2\u6570",-1),B={style:{"text-align":"center"}},H={href:"https://www.npmjs.com/package/ora",target:"_blank",rel:"noopener noreferrer"},G=s("ora"),T=n("td",null,"\u4F18\u96C5\u7684\u52A0\u8F7D\u6548\u679C",-1),W={style:{"text-align":"center"}},S={href:"https://www.npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer"},U=s("dotenv"),z=n("td",null,[s("\u4ECE "),n("code",null,".env"),s(" \u6587\u4EF6\u4E2D\u52A0\u8F7D\u73AF\u5883\u53D8\u91CF\u5230 "),n("code",null,[s("p"),n("wbr"),s("rocess.env")])],-1),A={style:{"text-align":"center"}},D={href:"https://www.npmjs.com/package/yaml-front-matter",target:"_blank",rel:"noopener noreferrer"},J=s("yaml-front-matter"),K=n("td",null,[s("\u89E3\u6790\u6587\u4EF6\u5185\u7684 "),n("code",null,"frontmatter")],-1),M={style:{"text-align":"center"}},P={href:"https://www.npmjs.com/package/portfinder",target:"_blank",rel:"noopener noreferrer"},Q=s("portfinder"),R=n("td",null,"\u5BFB\u627E\u53EF\u7528\u7AEF\u53E3\u53F7",-1),X={style:{"text-align":"center"}},Y={href:"https://www.npmjs.com/package/semver",target:"_blank",rel:"noopener noreferrer"},Z=s("semver"),nn=n("td",null,"\u6821\u9A8C\u7248\u672C",-1),sn=c(`<h2 id="\u7B80\u5355-cli" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355-cli" aria-hidden="true">#</a> \u7B80\u5355 CLI</h2><h3 id="\u4ECE-hello-cli-\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4ECE-hello-cli-\u5F00\u59CB" aria-hidden="true">#</a> \u4ECE HELLO CLI \u5F00\u59CB</h3><p>\u521D\u59CB\u5316\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p hello-cli/bin 
<span class="token builtin class-name">cd</span> hello-cli <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> init -y
</code></pre></div><p>\u6DFB\u52A0\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> bin/cli.js <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
#! /usr/bin/env node

console.log(&quot;Hello CLI&quot;)
EOF</span>
</code></pre></div><p>\u5728 <code>package.json</code> \u4E2D\u6307\u5B9A\u5165\u53E3\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/cli.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u94FE\u63A5\u5230\u5168\u5C40\u5E76\u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u94FE\u63A5\u5230\u5168\u5C40</span>
<span class="token function">npm</span> <span class="token function">link</span>

<span class="token comment"># \u6267\u884C</span>
hello-cli
<span class="token comment"># Hello CLI</span>
</code></pre></div><h3 id="\u89E3\u6790\u547D\u4EE4-commander" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u547D\u4EE4-commander" aria-hidden="true">#</a> \u89E3\u6790\u547D\u4EE4 commander</h3><p>\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> commander
</code></pre></div><p>\u4FEE\u6539 <code>cli.js</code>\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token hashbang comment">#! /usr/bin/env node</span>

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
</code></pre></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>hello-cli

<span class="token comment"># \u8F93\u51FA</span>
Usage: hello-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Options:
  -V, --version      output the version number
  -h, --help         display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>

Commands:
  create <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span>  create a new project powered by cli-test
  <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>     display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>
  
hello-cli -V
<span class="token comment"># 1.0.0</span>

hello-cli create my-app
<span class="token comment"># project name is my-app</span>
</code></pre></div><h3 id="\u4EA4\u4E92\u53CA\u7F8E\u5316\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u4E92\u53CA\u7F8E\u5316\u8F93\u51FA" aria-hidden="true">#</a> \u4EA4\u4E92\u53CA\u7F8E\u5316\u8F93\u51FA</h3><p>\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4EA4\u4E92</span>
<span class="token function">yarn</span> <span class="token function">add</span> inquirer
<span class="token comment"># \u7F8E\u5316</span>
<span class="token function">yarn</span> <span class="token function">add</span> chalk
</code></pre></div><p>\u4FEE\u6539 <code>action</code> \u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>program
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">your project is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u52A0\u8F7D\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6548\u679C" aria-hidden="true">#</a> \u52A0\u8F7D\u6548\u679C</h3><p>\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> ora
</code></pre></div><p>\u518D\u8C03\u6574 <code>action</code>\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>program
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ok<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Generate project in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;current&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> directory?</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">&#39;input color&#39;</span><span class="token punctuation">,</span>
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
</code></pre></div>`,27);function an(tn,pn){const a=p("OutboundLink");return l(),o(e,null,[r,k,d,n("table",null,[h,n("tbody",null,[n("tr",null,[n("td",g,[n("a",m,[_,t(a)])]),f]),n("tr",null,[n("td",b,[n("a",w,[y,t(a)])]),v]),n("tr",null,[n("td",j,[n("a",x,[q,t(a)])]),L]),n("tr",null,[n("td",C,[n("a",I,[O,t(a)])]),V]),n("tr",null,[n("td",$,[n("a",E,[F,t(a)])]),N]),n("tr",null,[n("td",B,[n("a",H,[G,t(a)])]),T]),n("tr",null,[n("td",W,[n("a",S,[U,t(a)])]),z]),n("tr",null,[n("td",A,[n("a",D,[J,t(a)])]),K]),n("tr",null,[n("td",M,[n("a",P,[Q,t(a)])]),R]),n("tr",null,[n("td",X,[n("a",Y,[Z,t(a)])]),nn])])]),sn],64)}var cn=i(u,[["render",an]]);export{cn as default};
