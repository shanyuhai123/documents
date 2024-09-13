import{_ as o,M as p,p as e,q as c,R as s,t as a,N as u,a1 as r}from"./framework-e3e34937.js";const l={},i={href:"https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson",target:"_blank",rel:"noopener noreferrer"};function k(d,n){const t=p("ExternalLinkIcon");return e(),c("div",null,[n[3]||(n[3]=s("h1",{id:"vscode-识别-alias",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vscode-识别-alias","aria-hidden":"true"},"#"),a(" VSCode 识别 alias")],-1)),n[4]||(n[4]=s("p",null,[a("很多时候为了避免复杂的层级关系，常常使用 webpack 的 "),s("code",null,"alias"),a(" 功能来简化路径，但这也产生了新的问题，无法实时解析文件中的内容，导致缺乏提示。")],-1)),s("p",null,[n[1]||(n[1]=a("在 VSCode 官网也提供了该项的")),s("a",i,[n[0]||(n[0]=a("说明")),u(t)]),n[2]||(n[2]=a("。"))]),n[5]||(n[5]=r(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在项目根目录下新建 <code>jsconfig.json</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/**/*.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/**/*.js&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3))])}const g=o(l,[["render",k],["__file","identify-alias.html.vue"]]);export{g as default};
