import{e as n}from"./app.64e25aee.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="webpack-\u7684-loader-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack-\u7684-loader-\u914D\u7F6E" aria-hidden="true">#</a> Webpack \u7684 loader \u914D\u7F6E</h1><h2 id="\u52A0\u8F7D-css" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D-css" aria-hidden="true">#</a> \u52A0\u8F7D CSS</h2><div class="custom-container danger"><p class="custom-container-title">\u6240\u9700\u4F9D\u8D56</p><p>\u{1F389} LOADERS</p><ol><li><code>less-loader/sass-loader/stylus-loader</code></li><li><code>postcss-loader</code></li><li><code>css-loader</code></li><li><code>style-loader/</code></li><li><code>MiniCssExtractPlugin.loader</code></li></ol><p>\u{1F389} PLUGINS</p><ol><li><code>mini-css-extract-plugin</code></li><li><code>autoprefixer</code></li></ol></div><h3 id="_1-\u52A0\u8F7D-css-\u7684\u4E24\u79CD\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D-css-\u7684\u4E24\u79CD\u5F62\u5F0F" aria-hidden="true">#</a> 1. \u52A0\u8F7D CSS \u7684\u4E24\u79CD\u5F62\u5F0F</h3><ol><li><p>\u901A\u8FC7 style-loader \u52A0\u8F7D\u5230 <code>&lt;style&gt;</code> \u6807\u7B7E\u4E2D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        insertAt<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>\u901A\u8FC7 mini-css-extract-plugin \u5C06\u6240\u6709 css \u63D0\u53D6\u5230 <code>&lt;link&gt;</code> \u6807\u7B7E\u7684 CSS \u6587\u4EF6\u4E2D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        publicPath<span class="token operator">:</span> <span class="token string">&#39;./dist/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li></ol><h3 id="_2-\u4E3A-css-\u6DFB\u52A0\u6D4F\u89C8\u5668\u5F15\u64CE\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A-css-\u6DFB\u52A0\u6D4F\u89C8\u5668\u5F15\u64CE\u524D\u7F00" aria-hidden="true">#</a> 2. \u4E3A CSS \u6DFB\u52A0\u6D4F\u89C8\u5668\u5F15\u64CE\u524D\u7F00</h3><p>\u5728\u5339\u914D\u5230 css \u6587\u4EF6\u65F6\u9700\u8981\u6DFB\u52A0 <code>postcss-loader</code>, \u4E0A\u65B9\u5DF2\u6709\u793A\u4F8B</p><p>\u6B64\u5916\u8FD8\u9700\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA <code>postcss.config.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u52A0\u8F7D-images" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D-images" aria-hidden="true">#</a> \u52A0\u8F7D Images</h2><div class="custom-container danger"><p class="custom-container-title">\u6240\u9700\u4F9D\u8D56</p><p>\u{1F389} LOADERS</p><ol><li><code>file-loader</code></li><li><code>html-loader</code></li><li><code>url-loader</code></li></ol></div><h3 id="_1-\u52A0\u8F7D-images-\u7684\u4E09\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D-images-\u7684\u4E09\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 1. \u52A0\u8F7D Images \u7684\u4E09\u79CD\u65B9\u5F0F</h3><ol><li><p>\u901A\u8FC7 JavaScript \u52A0\u8F7D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> Pic <span class="token keyword">from</span> <span class="token string">&#39;./webpack01.png&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> newImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
newImage<span class="token punctuation">.</span>src <span class="token operator">=</span> Pic<span class="token punctuation">;</span> <span class="token comment">// \u8D4B\u4E88</span>

<span class="token comment">// webpack.config.js</span>
rules<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></li><li><p>\u901A\u8FC7 CSS \u52A0\u8F7D</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orangered<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./webpack01.jpg&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4F59\u7684\u6309\u7167\u4E0A\u65B9\u7684\u914D\u7F6E\u5373\u53EF</p></li><li><p>\u901A\u8FC7 HTML \u52A0\u8F7D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.html</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./webpack01.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
  
<span class="token comment">// webpack.config.js</span>
rules<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
          attrs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;img:src&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6B64\u5904\u5339\u914D\u4E0A\u65B9\u7684 img \u6807\u7B7E src \u5C5E\u6027</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ol><h3 id="_2-\u4F18\u5316-images-\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316-images-\u52A0\u8F7D" aria-hidden="true">#</a> 2. \u4F18\u5316 Images \u52A0\u8F7D</h3><p>\u9488\u5BF9\u4E00\u4E9B\u6653\u5F97\u56FE\u7247\u6CA1\u5FC5\u8981\u53D1\u9001 HTTP \u8BF7\u6C42\u83B7\u53D6\u56FE\u7247, \u76F4\u63A5\u5C06\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u5F62\u5F0F\u5373\u53EF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
rules<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u9700\u8981\u6CE8\u91CA\u6389 file-loader \u8FD9\u4E2A\u5339\u914D\u5426\u5219\u8FD8\u4F1A\u7EE7\u7EED\u5339\u914D\u7136\u540E\u751F\u6210\u56FE\u7247</span>
  <span class="token comment">// {</span>
  <span class="token comment">//   test: /\\.(png|svg|jpg|gif)$/,</span>
  <span class="token comment">//   use: [</span>
  <span class="token comment">//     {</span>
  <span class="token comment">//       loader: &#39;file-loader&#39;</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   ]</span>
  <span class="token comment">// },</span>
  <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
          limit<span class="token operator">:</span> <span class="token number">20</span><span class="token operator">*</span><span class="token number">1024</span> <span class="token comment">// \u5C0F\u4E8E 20k \u7684\u56FE\u7247\u8F6C\u4E3A base64 </span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u52A0\u8F7D-font-\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D-font-\u5B57\u4F53" aria-hidden="true">#</a> \u52A0\u8F7D Font(\u5B57\u4F53)</h2><div class="custom-container danger"><p class="custom-container-title">\u6240\u9700\u4F9D\u8D56</p><p>\u{1F389} LOADERS</p><ol><li><code>file-loader</code></li><li><code>url-loader</code></li></ol></div><h3 id="_1-\u52A0\u8F7D-font-\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D-font-\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 1. \u52A0\u8F7D Font \u7684\u4E24\u79CD\u65B9\u5F0F</h3><ol><li><p>\u4F7F\u7528 <code>file-loader</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
rules<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* style.css */</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ShanFont&#39;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./ShanHunTianGeMoJi-2.ttf&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.shan</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ShanFont&#39;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u4F7F\u7528 <code>url-loader</code></p><p><code>url-loader</code> \u66F4\u8FDB\u4E00\u6B65\u53EF\u4EE5\u5BF9\u8D44\u6E90\u7684\u5927\u5C0F\u8FDB\u884C\u5224\u65AD, \u7136\u540E\u662F\u5426\u8F6C\u6210 base64 \u7684\u8D44\u6E90</p></li></ol>`,20);function t(e,o){return p}var i=s(a,[["render",t]]);export{i as default};
