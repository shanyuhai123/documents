import{r as e,c as o,a as n,b as t,F as c,d as s,e as p,o as l}from"./app.e62aeb11.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const i={},r=n("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6982\u5FF5")],-1),k=n("p",null,"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.",-1),d={href:"https://babeljs.io/docs/en/",target:"_blank",rel:"noopener noreferrer"},g=s("babel"),b=p(`<p>\u5728 <code>babel</code> \u7684<strong>\u4F7F\u7528</strong>\u5F53\u4E2D\u6709\u4E24\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF1A<code>presets</code>\u3001<code>plugins</code>\uFF0C\u6B64\u5904\u4F7F\u7528\u7684 <code>babel</code> \u7248\u672C\u4E3A <code>babel7\uFF087.10.5\uFF09</code>\u3002</p><p><code>babel</code> \u5BF9 <code>ES2015+</code> \u7684\u4EE3\u7801\u5206\u4E3A\u4E24\u79CD\u60C5\u51B5\u8FDB\u884C\u5904\u7406\uFF1A</p><ol><li>\u8BED\u6CD5\u5C42\u3002<code>const</code>\u3001<code>class</code>\u3001\u7BAD\u5934\u51FD\u6570\u7B49\u3002</li><li>API \u65B9\u6CD5\u5C42\u3002<code>Promise</code> \u6216 <code>Object</code>\u3001 <code>Array</code> \u539F\u578B\u94FE\u4E0A\u65B0\u589E\u7684\u65B9\u6CD5\u3002</li></ol><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u65B0\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u73AF\u5883\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> babel-test/src babel-test/dist -p
<span class="token function">touch</span> babel-test/src/source.js
<span class="token builtin class-name">cd</span> babel-test <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> init -y
</code></pre></div>`,6),h=n("code",null,"babel",-1),m=s(" \u5B98\u7F51\u63D0\u4F9B\u4E86 "),f={href:"https://babeljs.io/repl",target:"_blank",rel:"noopener noreferrer"},v=s("Try it out"),y=s(" \u53EF\u4EE5\u67E5\u770B\u8F6C\u6362\u7684\u6548\u679C\uFF0C\u800C\u672C\u5730\u5219\u9700\u8981\u8981\u501F\u52A9 "),j=n("code",null,"@babel/cli",-1),_=s(" \u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u4F46\u5B83\u53C8\u4F9D\u8D56\u4E8E "),x=n("code",null,"@babel/core",-1),q=s("\uFF0C\u6240\u4EE5\uFF1A"),w=p(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/core @babel/cli
</code></pre></div><p>\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6 <code>babel.config.js</code>\uFF0C\u4E5F\u53EF\u4F7F\u7528 <code>.babelrc</code>\u3001<code>package.json</code> \u7B49\u6765\u6307\u5B9A\u89C4\u5219\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 <code>source.js</code> \u6DFB\u52A0\u4E2A\u7BAD\u5934\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// src/source.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u4EC0\u4E48\u89C4\u5219\u90FD\u6CA1\u6709\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>babel</code> \u8FDB\u884C\u8F6C\u6362\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel source.js

<span class="token comment"># const fn = () =&gt; 1;</span>
</code></pre></div><h3 id="_1-plugins" tabindex="-1"><a class="header-anchor" href="#_1-plugins" aria-hidden="true">#</a> 1. plugins</h3><p>\u5982\u679C\u60F3\u5C06 <code>ES2015</code> \u7684\u8BED\u6CD5\u8F6C\u6362\u4E3A <code>ES5</code> \u53EF\u914D\u7F6E <code>plugins</code> \u6765\u89E3\u51B3\u3002</p><ol><li><p>\u8F6C\u6362\u7BAD\u5934\u51FD\u6570\u3002</p><p>\u9996\u5148\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-arrow-functions -D
</code></pre></div><p>\u518D\u914D\u7F6E\u89C4\u5219\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8FD4\u56DE\u7ED3\u679C</span>
const fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u8F6C\u6362 <code>const</code>\u3002</p><p>\u9996\u5148\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-block-scoping -D
</code></pre></div><p>\u518D\u914D\u7F6E\u89C4\u5219\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@babel/plugin-transform-block-scoping&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8FD4\u56DE\u7ED3\u679C</span>
var fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h3 id="_2-presets" tabindex="-1"><a class="header-anchor" href="#_2-presets" aria-hidden="true">#</a> 2. presets</h3><p>\u5982\u679C\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\u9700\u8981\u5C06\u63D2\u4EF6\u4E00\u4E2A\u4E2A\u7684\u8FFD\u52A0\u4E0A\u53BB\uFF0C\u90A3\u6015\u662F\u5F97\u8BDE\u751F\u5F88\u591A\u524D\u7AEF\u67B6\u6784\u5E08\u4E86\u{1F642}\uFF0C\u6240\u4EE5\u5C31\u5F15\u51FA\u4E86 <code>presets</code> \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F8B\u5982 <code>babel-preset-es2015</code> \u5C31\u662F\u7528\u6765\u89E3\u51B3 <code>ES2015</code> \u65B0\u589E\u7684\u7279\u6027\u7684\uFF0C\u5176\u4ED6\u540C\u7406\u3002</p><p>\u4E0D\u8FC7\u5728 <code>Try it out</code> \u4E2D\u53EF\u4EE5\u89C1\u5230\u5E26\u6709\u5E74\u4EE3\u7684 <code>preset</code> \u53EA\u5230 2017\uFF08\u5BF9\u5E94 2018 \u5E74\uFF09\uFF0C\u800C\u73B0\u5982\u4ECA\u90FD 2020 \u5E74\u4E86\uFF1B\u81F3\u4E8E <code>@babel/preset-stage-X</code> \u7CFB\u5217\u663E\u7136\u66F4\u8BA9\u4EBA\u53D1\u6101\uFF0C\u4F17\u6240\u5468\u77E5\u7684\u662F <code>stage</code> \u8349\u6848\u603B\u662F\u5728\u53D8\u7684\uFF0C\u90A3\u7279\u6027\u6700\u540E\u4F1A\u8D70\u5230\u90A3\u4E00\u6B65\u5462\uFF1F</p><p><strong>\u603B\u800C\u8A00\u4E4B\uFF0C\u73B0\u5728\u53EA\u9700\u8981\u4F7F\u7528 <code>@babel/preset-env</code> \u5C31\u53EF\u4EE5\u4E86\u3002</strong></p><p>\u5F53\u7136\u5B9E\u9645\u5F00\u53D1\u4E2D\u8FD8\u9700\u8981\u7C7B\u578B\u68C0\u67E5\u3001\u53CA <code>react</code> \u548C <code>vue</code> \u7B49\u7279\u5B9A\u8BED\u6CD5\u8FDB\u884C\u8F6C\u6362\uFF0C\u6240\u4EE5\u8FD8\u6709 <code>@babel/preset-typescript</code>\u3001<code>@babel/preset-react</code> \u7B49\u9884\u8BBE\u3002</p><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/preset-env -D
</code></pre></div><p>\u518D\u914D\u7F6E\u89C4\u5219\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u5199</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8FD4\u56DE\u7ED3\u679C</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

var fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>@babel/preset-env</code> \u6BD4\u8F83\u667A\u80FD\u7684\u662F\u4F60\u53EF\u4EE5\u6839\u636E\u4F60\u76EE\u6807\u6D4F\u89C8\u5668\uFF08<code>browserslist</code>\uFF09\u6765\u751F\u6210\u5BF9\u5E94\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\u6B64\u5904\u6211\u4EEC\u76EE\u6807\u6D4F\u89C8\u5668\u4EC5\u4E3A\u65B0\u7248\u7684 Chrome\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;last 1 chrome version&quot;</span> <span class="token operator">&gt;</span> .browserslistrc
</code></pre></div><p>\u518D\u6B21\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8FD4\u56DE\u7ED3\u679C</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

const fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_3-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_3-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 3. \u6CE8\u610F\u4E8B\u9879</h3><div class="custom-container tip"><p class="custom-container-title">plugins &amp; presets</p><ul><li>plugins \u5728 presets \u524D\u6267\u884C</li><li>plugins \u987A\u5E8F\u4E3A\u4ECE\u524D\u5F80\u540E\u6267\u884C</li><li>presets \u987A\u5E8F\u4E3A\u4ECE\u540E\u5F80\u524D\u6267\u884C</li></ul></div><h2 id="polyfill" tabindex="-1"><a class="header-anchor" href="#polyfill" aria-hidden="true">#</a> polyfill</h2><p><code>polyfill</code> \u4E3B\u8981\u662F\u5904\u7406 <code>babel</code> \u5E94\u5BF9\u7684\u7B2C\u4E8C\u79CD\u60C5\u51B5 \u201C\u65B0\u589E API\u201D\u3002</p><h3 id="_1-\u4F7F\u7528-promise-\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528-promise-\u65B0\u7279\u6027" aria-hidden="true">#</a> 1. \u4F7F\u7528 Promise \u65B0\u7279\u6027</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// src/source.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;shanyuhai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7F16\u8BD1\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

var num <span class="token operator">=</span> Promise.resolve<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u6CE8\u610F\u5230 <code>Promise</code> \u6CA1\u6709\u88AB\u8F6C\u6362\u3002</p><h3 id="_2-\u542F\u7528-polyfill" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u7528-polyfill" aria-hidden="true">#</a> 2. \u542F\u7528 polyfill</h3><p>\u5728\u4EE5\u524D\u53EF\u80FD\u6709\u5F88\u591A\u5F62\u5F0F\u6765\u5F15\u5165 <code>polyfill</code>\uFF0C\u4F8B\u5982\uFF1A<code>html</code>\u3001<code>\u5165\u53E3 js</code>\u3001<code>webpack \u914D\u7F6E</code>\uFF0C\u4F46\u73B0\u5728\u4EC5\u9700\u8981\u4FEE\u6539 <code>@babel/env</code> \u914D\u7F6E\u9879\u5373\u53EF\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u9009\u53C2\u6570 false(\u9ED8\u8BA4)\u3001entry\u3001usage</span>
    <span class="token comment">// false \u8868\u793A\u4E0D\u542F\u7528\uFF0Centry\u3001usage \u90FD\u4F1A\u6839\u636E\u76EE\u6807\u73AF\u5883\u6765\u8865\u5145 API</span>
    <span class="token comment">// entry \u4F1A\u6839\u636E \`.browserslist\` \u6765\u8865\u5145\u4E0D\u652F\u6301\u7684 API\uFF0C\u4E0D\u7BA1\u6211\u4EEC\u6709\u6CA1\u6709\u4F7F\u7528\u5230</span>
    <span class="token comment">// \u800C usage \u5728 \`entry\` \u57FA\u7840\u4E0A\u5224\u65AD\u6211\u4EEC\u662F\u5426\u4F7F\u7528\u4E86\u5BF9\u5E94\u7684 API\uFF0C\u672A\u4F7F\u7528\u624D\u4F1A\u5F15\u5165</span>
    <span class="token comment">// \u4E14 entry \u9700\u8981\u5728\u5165\u53E3\u5904\u624B\u52A8\u5F15\u5165 \`@babel/polyfill\` \u6216 \`core-js\`\uFF0C\u800C \`usage\` \u81EA\u52A8\u6CE8\u5165</span>
    useBuiltIns<span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6267\u884C\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\uFF0C\u5E76\u63D0\u793A\u6211\u4EEC\u4F7F\u7528 3</span>
WARNING: We noticed you<span class="token string">&#39;re using the \`useBuiltIns\` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the \`corejs\` option.

You should also be sure that the version you pass to the \`corejs\` option matches the version specified in your \`package.json\`&#39;</span>s <span class="token variable"><span class="token variable">\`</span>dependencies<span class="token variable">\`</span></span> section. If it doesn&#39;t, you need to run one of the following commands:

  <span class="token function">npm</span> <span class="token function">install</span> --save core-js@2    <span class="token function">npm</span> <span class="token function">install</span> --save core-js@3
  <span class="token function">yarn</span> <span class="token function">add</span> core-js@2              <span class="token function">yarn</span> <span class="token function">add</span> core-js@3

<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

require<span class="token punctuation">(</span><span class="token string">&quot;core-js/modules/es6.promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

require<span class="token punctuation">(</span><span class="token string">&quot;core-js/modules/es6.object.to-string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

var name <span class="token operator">=</span> Promise.resolve<span class="token punctuation">(</span><span class="token string">&quot;shanyuhai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u63D0\u53D6\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u63D0\u53D6\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> \u63D0\u53D6\u8F85\u52A9\u51FD\u6570</h2><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// module.js</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// source.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./module&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Baby</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hhhh...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Baby</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8F6C\u6362\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx babel src -d ./dist
</code></pre></div><p>\u5728\u751F\u6210\u7684\u4E24\u4EFD\u6587\u4EF6\u4E2D\u90FD\u53EF\u4EE5\u770B\u5230\u8F85\u52A9\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token parameter">instance<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>instance <span class="token keyword">instanceof</span> <span class="token class-name">Constructor</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot call a class as a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> props<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">var</span> descriptor <span class="token operator">=</span> props<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> descriptor<span class="token punctuation">.</span>configurable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span> <span class="token keyword">in</span> descriptor<span class="token punctuation">)</span> descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> descriptor<span class="token punctuation">.</span>key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_createClass</span><span class="token punctuation">(</span><span class="token parameter">Constructor<span class="token punctuation">,</span> protoProps<span class="token punctuation">,</span> staticProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>protoProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> protoProps<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>staticProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span>Constructor<span class="token punctuation">,</span> staticProps<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> Constructor<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u6BEB\u65E0\u7591\u95EE\uFF0C\u5BF9\u4E8E\u76EE\u524D\u7684\u9879\u76EE\uFF0C\u62E5\u6709\u51E0\u5341\u751A\u81F3\u4E0A\u767E\u4E2A\u6A21\u5757\u90FD\u662F\u975E\u5E38\u5E38\u89C1\u7684\u4E8B\u60C5\uFF0C\u8FD9\u4F1A\u9020\u6210\u6700\u7EC8\u751F\u6210\u6587\u4EF6\u7684\u589E\u5927\u3002</p><h3 id="_1-runtime" tabindex="-1"><a class="header-anchor" href="#_1-runtime" aria-hidden="true">#</a> 1. runtime</h3><p>\u5B89\u88C5\u63D0\u53D6\u63D2\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-runtime -D
</code></pre></div><p>\u5728 <code>plugins</code> \u4E2D\u542F\u7528\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    useBuiltIns<span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u518D\u6B21\u8F6C\u6362\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// module.js</span>
<span class="token keyword">var</span> _interopRequireDefault <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/interopRequireDefault&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _classCallCheck2 <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/classCallCheck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _createClass2 <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/createClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u5229\u7528\u4E86 <code>@babel/runtime</code> \u7684\u5305\u63D0\u4F9B\u8F85\u52A9\u51FD\u6570\u6A21\u5757\u3002</p>`,56);function P(C,B){const a=e("OutboundLink");return l(),o(c,null,[r,n("blockquote",null,[k,n("p",null,[n("a",d,[g,t(a)])])]),b,n("p",null,[h,m,n("a",f,[v,t(a)]),y,j,_,x,q]),w],64)}var A=u(i,[["render",P]]);export{A as default};
