import{r as n,c as s,a,b as t,F as o,d as p,e,o as c}from"./app.76078c72.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=a("h2",{id:"概述",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),p(" 概述")],-1),r=a("code",null,"@font-face",-1),k=p(" 可以为网页制定在线字体。其不仅可以放在在CSS的最顶层, 也可以放在 @规则 的 "),f={href:"https://developer.mozilla.org/zh-CN/docs/CSS/At-rule#Conditional_Group_Rules",target:"_blank",rel:"noopener noreferrer"},d=p("条件规则组"),g=p(" 中。"),h=e('<div class="language-text ext-text"><pre class="language-text"><code>@font-face {\n  [ font-family: &lt;family-name&gt;; ] ||\n  [ src: &lt;src&gt;; ] ||\n  [ unicode-range: &lt;unicode-range&gt;; ] ||\n  [ font-variant: &lt;font-variant&gt;; ] ||\n  [ font-feature-settings: &lt;font-feature-settings&gt;; ] ||\n  [ font-variation-settings: &lt;font-variation-settings&gt;; ] ||\n  [ font-stretch: &lt;font-stretch&gt;; ] ||\n  [ font-weight: &lt;font-weight&gt;; ] ||\n  [ font-style: &lt;font-style&gt;; ]\n}\nwhere \n&lt;family-name&gt; = &lt;string&gt; | &lt;custom-ident&gt;+\n</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>以往经常以图标的方式来调用它，例如使用阿里巴巴图标库下载 <code>iconfont.css</code>：</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.eot&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9 */</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.eot?#iefix&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;embedded-opentype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span>\n  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;base64&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* base64 省略 */</span>\n  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.woff&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.ttf&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */</span>\n  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.svg?#iconfont&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.iconfont</span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>\n  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果比较激进的话可以考虑仅保留 <code>woff2</code>。</p><h3 id="_1-font-family" tabindex="-1"><a class="header-anchor" href="#_1-font-family" aria-hidden="true">#</a> 1. font-family</h3><p>可以声明一个自己喜欢的名字，之后在对应选择器的 font-family 属性中调用它了。</p><h3 id="_2-src" tabindex="-1"><a class="header-anchor" href="#_2-src" aria-hidden="true">#</a> 2. src</h3><p>常用 <code>url</code> 来指定在线字体，也可以利用 <code>local</code> 指定用户本地的字体。</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>一般阿里巴巴图标库还提供了生成 <code>svg</code> 的方法，其具有一些特性：</p><ul><li>支持多色图标了，不再受单色限制。</li><li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>、<code>color</code> 来调整样式。</li><li>兼容性较差，支持 ie9+,及现代浏览器（现在完全不是问题）。</li><li>浏览器渲染svg的性能一般，还不如png。</li></ul><p>调用方式也更加简单，引入对应的 JavaScript 脚本即可。</p>',13);var m=l(i,[["render",function(p,e){const l=n("OutboundLink");return c(),s(o,null,[u,a("p",null,[r,k,a("a",f,[d,t(l)]),g]),h],64)}]]);export{m as default};
