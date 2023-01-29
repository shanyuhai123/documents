import{_ as e,M as o,p as c,q as l,Q as n,t as s,N as t,a1 as p}from"./framework-49860b1b.js";const u={},r=n("h1",{id:"一步步启用-babel7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一步步启用-babel7","aria-hidden":"true"},"#"),s(" 一步步启用 babel7")],-1),i=n("p",null,"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.",-1),k={href:"https://babeljs.io/docs/en/",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>在 <code>babel</code> 的<strong>使用</strong>当中有两个核心概念：<code>presets</code>、<code>plugins</code>，此处使用的 <code>babel</code> 版本为 <code>babel7（7.10.5）</code>。</p><p><code>babel</code> 对 <code>ES2015+</code> 的代码分为两种情况进行处理：</p><ol><li>语法层。<code>const</code>、<code>class</code>、箭头函数等。</li><li>API 方法层。<code>Promise</code> 或 <code>Object</code>、 <code>Array</code> 原型链上新增的方法。</li></ol><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>新建一个测试环境：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> babel-test/src babel-test/dist <span class="token parameter variable">-p</span>
<span class="token function">touch</span> babel-test/src/source.js
<span class="token builtin class-name">cd</span> babel-test <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> init <span class="token parameter variable">-y</span>
</code></pre></div>`,6),b=n("code",null,"babel",-1),g={href:"https://babeljs.io/repl",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"@babel/cli",-1),m=n("code",null,"@babel/core",-1),v=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/core @babel/cli
</code></pre></div><p>创建配置文件 <code>babel.config.js</code>，也可使用 <code>.babelrc</code>、<code>package.json</code> 等来指定规则：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在 <code>source.js</code> 添加个箭头函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/source.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>在什么规则都没有的情况下使用 <code>babel</code> 进行转换：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel source.js

<span class="token comment"># const fn = () =&gt; 1;</span>
</code></pre></div><h3 id="_1-plugins" tabindex="-1"><a class="header-anchor" href="#_1-plugins" aria-hidden="true">#</a> 1. plugins</h3><p>如果想将 <code>ES2015</code> 的语法转换为 <code>ES5</code> 可配置 <code>plugins</code> 来解决。</p><ol><li><p>转换箭头函数。</p><p>首先安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-arrow-functions <span class="token parameter variable">-D</span>
</code></pre></div><p>再配置规则：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 返回结果</span>
const fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>转换 <code>const</code>。</p><p>首先安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-block-scoping <span class="token parameter variable">-D</span>
</code></pre></div><p>再配置规则：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@babel/plugin-transform-block-scoping&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 返回结果</span>
var fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h3 id="_2-presets" tabindex="-1"><a class="header-anchor" href="#_2-presets" aria-hidden="true">#</a> 2. presets</h3><p>如果在实际使用中需要将插件一个个的追加上去，那怕是得诞生很多前端架构师了🙂，所以就引出了 <code>presets</code> 来解决这个问题，例如 <code>babel-preset-es2015</code> 就是用来解决 <code>ES2015</code> 新增的特性的，其他同理。</p><p>不过在 <code>Try it out</code> 中可以见到带有年代的 <code>preset</code> 只到 2017（对应 2018 年），而现如今都 2020 年了；至于 <code>@babel/preset-stage-X</code> 系列显然更让人发愁，众所周知的是 <code>stage</code> 草案总是在变的，那特性最后会走到那一步呢？</p><p><strong>总而言之，现在只需要使用 <code>@babel/preset-env</code> 就可以了。</strong></p><p>当然实际开发中还需要类型检查、及 <code>react</code> 和 <code>vue</code> 等特定语法进行转换，所以还有 <code>@babel/preset-typescript</code>、<code>@babel/preset-react</code> 等预设。</p><p>安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/preset-env <span class="token parameter variable">-D</span>
</code></pre></div><p>再配置规则：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 缩写</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 返回结果</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

var fn <span class="token operator">=</span> <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>@babel/preset-env</code> 比较智能的是你可以根据你目标浏览器（<code>browserslist</code>）来生成对应的代码，例如此处我们目标浏览器仅为新版的 Chrome。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;last 1 chrome version&quot;</span> <span class="token operator">&gt;</span> .browserslistrc
</code></pre></div><p>再次查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 返回结果</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

const fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项" aria-hidden="true">#</a> 3. 注意事项</h3><div class="custom-container tip"><p class="custom-container-title">plugins &amp; presets</p><ul><li>plugins 在 presets 前执行</li><li>plugins 顺序为从前往后执行</li><li>presets 顺序为从后往前执行</li></ul></div><h2 id="polyfill" tabindex="-1"><a class="header-anchor" href="#polyfill" aria-hidden="true">#</a> polyfill</h2><p><code>polyfill</code> 主要是处理 <code>babel</code> 应对的第二种情况 “新增 API”。</p><h3 id="_1-使用-promise-新特性" tabindex="-1"><a class="header-anchor" href="#_1-使用-promise-新特性" aria-hidden="true">#</a> 1. 使用 Promise 新特性</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/source.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;shanyuhai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>编译代码：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 输出结果</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

var num <span class="token operator">=</span> Promise.resolve<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>可以注意到 <code>Promise</code> 没有被转换。</p><h3 id="_2-启用-polyfill" tabindex="-1"><a class="header-anchor" href="#_2-启用-polyfill" aria-hidden="true">#</a> 2. 启用 polyfill</h3><p>在以前可能有很多形式来引入 <code>polyfill</code>，例如：<code>html</code>、<code>入口 js</code>、<code>webpack 配置</code>，但现在仅需要修改 <code>@babel/env</code> 配置项即可：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可选参数 false(默认)、entry、usage</span>
    <span class="token comment">// false 表示不启用，entry、usage 都会根据目标环境来补充 API</span>
    <span class="token comment">// entry 会根据 \`.browserslist\` 来补充不支持的 API，不管我们有没有使用到</span>
    <span class="token comment">// 而 usage 在 \`entry\` 基础上判断我们是否使用了对应的 API，未使用才会引入</span>
    <span class="token comment">// 且 entry 需要在入口处手动引入 \`@babel/polyfill\` 或 \`core-js\`，而 \`usage\` 自动注入</span>
    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>执行查看效果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src/source.js

<span class="token comment"># 输出结果，并提示我们使用 3</span>
WARNING: We noticed you<span class="token string">&#39;re using the \`useBuiltIns\` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the \`corejs\` option.

You should also be sure that the version you pass to the \`corejs\` option matches the version specified in your \`package.json\`&#39;</span>s <span class="token variable"><span class="token variable">\`</span>dependencies<span class="token variable">\`</span></span> section. If it doesn&#39;t, you need to run one of the following commands:

  <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> core-js@2    <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> core-js@3
  <span class="token function">yarn</span> <span class="token function">add</span> core-js@2              <span class="token function">yarn</span> <span class="token function">add</span> core-js@3

<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

require<span class="token punctuation">(</span><span class="token string">&quot;core-js/modules/es6.promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

require<span class="token punctuation">(</span><span class="token string">&quot;core-js/modules/es6.object.to-string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

var name <span class="token operator">=</span> Promise.resolve<span class="token punctuation">(</span><span class="token string">&quot;shanyuhai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="提取辅助函数" tabindex="-1"><a class="header-anchor" href="#提取辅助函数" aria-hidden="true">#</a> 提取辅助函数</h2><p>举个例子：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// module.js</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// source.js</span>
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
</code></pre></div><p>转换代码：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx babel src <span class="token parameter variable">-d</span> ./dist
</code></pre></div><p>在生成的两份文件中都可以看到辅助函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token parameter">instance<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>instance <span class="token keyword">instanceof</span> <span class="token class-name">Constructor</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot call a class as a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> props<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">var</span> descriptor <span class="token operator">=</span> props<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> descriptor<span class="token punctuation">.</span>configurable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span> <span class="token keyword">in</span> descriptor<span class="token punctuation">)</span> descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> descriptor<span class="token punctuation">.</span>key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_createClass</span><span class="token punctuation">(</span><span class="token parameter">Constructor<span class="token punctuation">,</span> protoProps<span class="token punctuation">,</span> staticProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>protoProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> protoProps<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>staticProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span>Constructor<span class="token punctuation">,</span> staticProps<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> Constructor<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><p>毫无疑问，对于目前的项目，拥有几十甚至上百个模块都是非常常见的事情，这会造成最终生成文件的增大。</p><h3 id="_1-runtime" tabindex="-1"><a class="header-anchor" href="#_1-runtime" aria-hidden="true">#</a> 1. runtime</h3><p>安装提取插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/plugin-transform-runtime <span class="token parameter variable">-D</span>
</code></pre></div><p>在 <code>plugins</code> 中启用：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>再次转换查看效果：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// module.js</span>
<span class="token keyword">var</span> _interopRequireDefault <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/interopRequireDefault&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _classCallCheck2 <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/classCallCheck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _createClass2 <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/createClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>可以看到利用了 <code>@babel/runtime</code> 的包提供辅助函数模块。</p>`,56);function f(y,j){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("blockquote",null,[i,n("p",null,[n("a",k,[s("babel"),t(a)])])]),d,n("p",null,[b,s(" 官网提供了 "),n("a",g,[s("Try it out"),t(a)]),s(" 可以查看转换的效果，而本地则需要要借助 "),h,s(" 的命令行工具，但它又依赖于 "),m,s("，所以：")]),v])}const q=e(u,[["render",f],["__file","setup-babel7-step-by-step.html.vue"]]);export{q as default};
