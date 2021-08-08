import{r as s,o as n,c as a,a as t,F as o,b as p,d as e}from"./app.f329c6d2.js";const c={},u=t("h1",{id:"vscode-识别-alias",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vscode-识别-alias","aria-hidden":"true"},"#"),p(" VSCode 识别 alias")],-1),r=t("p",null,[p("很多时候为了避免复杂的层级关系，常常使用 webpack 的 "),t("code",null,"alias"),p(" 功能来简化路径，但这也产生了新的问题，无法实时解析文件中的内容，导致缺乏提示。")],-1),l=p("在 VSCode 官网也提供了该项的"),i={href:"https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson",target:"_blank",rel:"noopener noreferrer"},k=p("说明"),d=p("。"),q=e('<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在项目根目录下新建 <code>jsconfig.json</code>：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;./src/**/*.vue&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;./src/**/*.js&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3);c.render=function(p,e){const c=s("OutboundLink");return n(),a(o,null,[u,r,t("p",null,[l,t("a",i,[k,t(c)]),d]),q],64)};export default c;
