import{_ as t,M as o,p as e,q as p,Q as n,t as s,N as c,a1 as u}from"./framework-49860b1b.js";const r={},l=n("h1",{id:"vscode-识别-alias",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-识别-alias","aria-hidden":"true"},"#"),s(" VSCode 识别 alias")],-1),i=n("p",null,[s("很多时候为了避免复杂的层级关系，常常使用 webpack 的 "),n("code",null,"alias"),s(" 功能来简化路径，但这也产生了新的问题，无法实时解析文件中的内容，导致缺乏提示。")],-1),k={href:"https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson",target:"_blank",rel:"noopener noreferrer"},d=u(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在项目根目录下新建 <code>jsconfig.json</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div>`,3);function q(_,h){const a=o("ExternalLinkIcon");return e(),p("div",null,[l,i,n("p",null,[s("在 VSCode 官网也提供了该项的"),n("a",k,[s("说明"),c(a)]),s("。")]),d])}const f=t(r,[["render",q],["__file","identify-alias.html.vue"]]);export{f as default};
