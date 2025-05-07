import{_ as n,c as a,a as p,o as e}from"./app-BCSwjUcF.js";const t={};function l(o,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="webpack-的-loader-配置" tabindex="-1"><a class="header-anchor" href="#webpack-的-loader-配置"><span>Webpack 的 loader 配置</span></a></h1><h2 id="加载-css" tabindex="-1"><a class="header-anchor" href="#加载-css"><span>加载 CSS</span></a></h2><div class="hint-container caution"><p class="hint-container-title">所需依赖</p><p>🎉 LOADERS</p><ol><li><code>less-loader/sass-loader/stylus-loader</code></li><li><code>postcss-loader</code></li><li><code>css-loader</code></li><li><code>style-loader/</code></li><li><code>MiniCssExtractPlugin.loader</code></li></ol><p>🎉 PLUGINS</p><ol><li><code>mini-css-extract-plugin</code></li><li><code>autoprefixer</code></li></ol></div><h3 id="_1-加载-css-的两种形式" tabindex="-1"><a class="header-anchor" href="#_1-加载-css-的两种形式"><span>1. 加载 CSS 的两种形式</span></a></h3><ol><li><p>通过 style-loader 加载到 <code>&lt;style&gt;</code> 标签中</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre></div></li><li><p>通过 mini-css-extract-plugin 将所有 css 提取到 <code>&lt;link&gt;</code> 标签的 CSS 文件中</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./dist/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="_2-为-css-添加浏览器引擎前缀" tabindex="-1"><a class="header-anchor" href="#_2-为-css-添加浏览器引擎前缀"><span>2. 为 CSS 添加浏览器引擎前缀</span></a></h3><p>在匹配到 css 文件时需要添加 <code>postcss-loader</code>, 上方已有示例</p><p>此外还需要在根目录下新建 <code>postcss.config.js</code></p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="加载-images" tabindex="-1"><a class="header-anchor" href="#加载-images"><span>加载 Images</span></a></h2><div class="hint-container caution"><p class="hint-container-title">所需依赖</p><p>🎉 LOADERS</p><ol><li><code>file-loader</code></li><li><code>html-loader</code></li><li><code>url-loader</code></li></ol></div><h3 id="_1-加载-images-的三种方式" tabindex="-1"><a class="header-anchor" href="#_1-加载-images-的三种方式"><span>1. 加载 Images 的三种方式</span></a></h3><ol><li><p>通过 JavaScript 加载</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token keyword">import</span> Pic <span class="token keyword">from</span> <span class="token string">&#39;./webpack01.png&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> newImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">newImage<span class="token punctuation">.</span>src <span class="token operator">=</span> Pic<span class="token punctuation">;</span> <span class="token comment">// 赋予</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div></li><li><p>通过 CSS 加载</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">#app</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> orangered<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./webpack01.jpg&#39;</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>其余的按照上方的配置即可</p></li><li><p>通过 HTML 加载</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// index.html</span></span>
<span class="line"><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./webpack01.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  </span>
<span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;img:src&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 此处匹配上方的 img 标签 src 属性</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="_2-优化-images-加载" tabindex="-1"><a class="header-anchor" href="#_2-优化-images-加载"><span>2. 优化 Images 加载</span></a></h3><p>针对一些晓得图片没必要发送 HTTP 请求获取图片, 直接将图片转为 base64 的形式即可</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// 需要注释掉 file-loader 这个匹配否则还会继续匹配然后生成图片</span></span>
<span class="line">  <span class="token comment">// {</span></span>
<span class="line">  <span class="token comment">//   test: /\\.(png|svg|jpg|gif)$/,</span></span>
<span class="line">  <span class="token comment">//   use: [</span></span>
<span class="line">  <span class="token comment">//     {</span></span>
<span class="line">  <span class="token comment">//       loader: &#39;file-loader&#39;</span></span>
<span class="line">  <span class="token comment">//     }</span></span>
<span class="line">  <span class="token comment">//   ]</span></span>
<span class="line">  <span class="token comment">// },</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">20</span><span class="token operator">*</span><span class="token number">1024</span> <span class="token comment">// 小于 20k 的图片转为 base64 </span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><h2 id="加载-font-字体" tabindex="-1"><a class="header-anchor" href="#加载-font-字体"><span>加载 Font(字体)</span></a></h2><div class="hint-container caution"><p class="hint-container-title">所需依赖</p><p>🎉 LOADERS</p><ol><li><code>file-loader</code></li><li><code>url-loader</code></li></ol></div><h3 id="_1-加载-font-的两种方式" tabindex="-1"><a class="header-anchor" href="#_1-加载-font-的两种方式"><span>1. 加载 Font 的两种方式</span></a></h3><ol><li><p>使用 <code>file-loader</code></p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* style.css */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ShanFont&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./ShanHunTianGeMoJi-2.ttf&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.shan</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ShanFont&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>使用 <code>url-loader</code></p><p><code>url-loader</code> 更进一步可以对资源的大小进行判断, 然后是否转成 base64 的资源</p></li></ol>`,20)]))}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/frontend/webpack/loader.html","title":"Webpack 的 loader 配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"加载 CSS","slug":"加载-css","link":"#加载-css","children":[{"level":3,"title":"1. 加载 CSS 的两种形式","slug":"_1-加载-css-的两种形式","link":"#_1-加载-css-的两种形式","children":[]},{"level":3,"title":"2. 为 CSS 添加浏览器引擎前缀","slug":"_2-为-css-添加浏览器引擎前缀","link":"#_2-为-css-添加浏览器引擎前缀","children":[]}]},{"level":2,"title":"加载 Images","slug":"加载-images","link":"#加载-images","children":[{"level":3,"title":"1. 加载 Images 的三种方式","slug":"_1-加载-images-的三种方式","link":"#_1-加载-images-的三种方式","children":[]},{"level":3,"title":"2. 优化 Images 加载","slug":"_2-优化-images-加载","link":"#_2-优化-images-加载","children":[]}]},{"level":2,"title":"加载 Font(字体)","slug":"加载-font-字体","link":"#加载-font-字体","children":[{"level":3,"title":"1. 加载 Font 的两种方式","slug":"_1-加载-font-的两种方式","link":"#_1-加载-font-的两种方式","children":[]}]}],"git":{"updatedTime":1637398629000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":8,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/webpack/loader.md"}');export{i as comp,r as data};
