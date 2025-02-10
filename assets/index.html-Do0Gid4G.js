import{_ as a,c as s,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,n){return t(),s("div",null,n[0]||(n[0]=[p(`<h1 id="花里胡哨的-canvas" tabindex="-1"><a class="header-anchor" href="#花里胡哨的-canvas"><span>花里胡哨的 Canvas</span></a></h1><p>Canvas 只支持两种形式的图形绘制：矩形和路径。</p><h2 id="动画的基本步骤" tabindex="-1"><a class="header-anchor" href="#动画的基本步骤"><span>动画的基本步骤</span></a></h2><blockquote><p>当调用 <code>fill</code> 函数时，所有没有闭合的形状都会自动闭合，所以不需要调用 <code>closePath</code> 函数，但调用 <code>stroke</code> 时不会自动闭合。</p></blockquote><ol><li>清空 canvas</li><li>保存 canvas 状态</li><li>绘制动画图形</li><li>恢复 canvas 状态</li></ol><h2 id="状态的保存和恢复" tabindex="-1"><a class="header-anchor" href="#状态的保存和恢复"><span>状态的保存和恢复</span></a></h2><p>Canvas 状态存储在栈中，每当 <code>save</code> 方法调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：</p><ul><li>当前应用的变形（移动、旋转和缩放）</li><li>以及下面这些属性：strokeStyle、fillStyle、globalAlpha、lineWidth、lineCap、lineJoin、miterLimit、lineDashOffset、shadowOffsetX、shadowOffsetY、shadowBlur、shadowColor、globalCompositeOperation、font、textAlign、textBaseline、direction、imageSmoothingEnabled</li><li>裁剪路径，用来隐藏不需要的部分</li></ul><h2 id="像素操作" tabindex="-1"><a class="header-anchor" href="#像素操作"><span>像素操作</span></a></h2><p>可以通过 <code>ImageData</code> 对象操纵像素数据，直接读取或将数据数组写入该对象中。 读取某行某列的像素点可使用公式 <code>(列 * (imageData.width * 4)) + (行 * 4) + R/G/B/A</code>，其中 <code>R/G/B/A</code> 对应的值为 <code>0/1/2/3</code>。</p><h3 id="读取、写入像素" tabindex="-1"><a class="header-anchor" href="#读取、写入像素"><span>读取、写入像素</span></a></h3><p>使用 <code>getImageData</code> 读取像素：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">pick</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">,</span> event<span class="token operator">:</span> MouseEvent<span class="token punctuation">,</span> destination<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX</span>
<span class="line">  <span class="token keyword">const</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY</span>
<span class="line">  <span class="token keyword">const</span> pixel <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> pixel<span class="token punctuation">.</span>data</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> rgba <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rgba(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">/</span> <span class="token number">255</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">  </span>
<span class="line">  destination<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> rgba</span>
<span class="line">  destination<span class="token punctuation">.</span>textContent <span class="token operator">=</span> rgba</span>
<span class="line">  <span class="token keyword">return</span> rgba</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>使用 <code>putImageData</code> 写入像素：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 灰度</span></span>
<span class="line"><span class="token keyword">const</span> grayscale <span class="token operator">=</span> <span class="token punctuation">(</span>canvas<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> imageData<span class="token punctuation">.</span>data</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> avg <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span></span>
<span class="line">    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> avg</span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> avg</span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> avg</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 反相</span></span>
<span class="line"><span class="token keyword">const</span> invert <span class="token operator">=</span> <span class="token punctuation">(</span>canvas<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> imageData<span class="token punctuation">.</span>data</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 复古（深褐色）</span></span>
<span class="line"><span class="token keyword">const</span> sepia <span class="token operator">=</span> <span class="token punctuation">(</span>canvas<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> imageData<span class="token punctuation">.</span>data</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> red <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> green <span class="token operator">=</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> blue <span class="token operator">=</span> data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">0.393</span> <span class="token operator">*</span> red <span class="token operator">+</span> <span class="token number">0.769</span> <span class="token operator">*</span> green <span class="token operator">+</span> <span class="token number">0.189</span> <span class="token operator">*</span> blue<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span></span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">0.349</span> <span class="token operator">*</span> red <span class="token operator">+</span> <span class="token number">0.686</span> <span class="token operator">*</span> green <span class="token operator">+</span> <span class="token number">0.168</span> <span class="token operator">*</span> blue<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span></span>
<span class="line">    data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">0.272</span> <span class="token operator">*</span> red <span class="token operator">+</span> <span class="token number">0.534</span> <span class="token operator">*</span> green <span class="token operator">+</span> <span class="token number">0.131</span> <span class="token operator">*</span> blue<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="缩放和反锯齿" tabindex="-1"><a class="header-anchor" href="#缩放和反锯齿"><span>缩放和反锯齿</span></a></h3><p>从原图中裁剪以鼠标中心 <code>10*10</code> 的像素，可以考虑先将原点移至 <code>-5,-5</code> 处，再向下裁剪 <code>10*10</code> 即可。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> draw <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">,</span> originCanvas<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">,</span> zoomCanvas<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">,</span> smooth<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX</span>
<span class="line">  <span class="token keyword">const</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY</span>
<span class="line">  <span class="token keyword">const</span> zCtx <span class="token operator">=</span> zoomCanvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 抗锯齿</span></span>
<span class="line">  zCtx<span class="token punctuation">.</span>imageSmoothingEnabled <span class="token operator">=</span> smooth</span>
<span class="line">  </span>
<span class="line">  zCtx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span></span>
<span class="line">    originCanvas<span class="token punctuation">,</span></span>
<span class="line">    Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>x <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>y <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// source</span></span>
<span class="line">    <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span> <span class="token comment">// destination</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="内置-api" tabindex="-1"><a class="header-anchor" href="#内置-api"><span>内置 API</span></a></h2><blockquote><p>标记部分曾带来困扰的</p></blockquote><h3 id="drawimage" tabindex="-1"><a class="header-anchor" href="#drawimage"><span>drawImage</span></a></h3><p>语法支持三种传参：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// s =&gt; source image</span></span>
<span class="line"><span class="token comment">// d =&gt; destination canvas</span></span>
<span class="line">ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span></span>
<span class="line">ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> dWidth<span class="token punctuation">,</span> dHeight<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 该形式常用于 sprite image</span></span>
<span class="line">ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sWidth<span class="token punctuation">,</span> sHeight<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> dWidth<span class="token punctuation">,</span> dHeight<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank" rel="noopener noreferrer">MDN</a></li></ul>`,25)]))}const u=a(o,[["render",e],["__file","index.html.vue"]]),i=JSON.parse('{"path":"/frontend/canvas/","title":"花里胡哨的 Canvas","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"动画的基本步骤","slug":"动画的基本步骤","link":"#动画的基本步骤","children":[]},{"level":2,"title":"状态的保存和恢复","slug":"状态的保存和恢复","link":"#状态的保存和恢复","children":[]},{"level":2,"title":"像素操作","slug":"像素操作","link":"#像素操作","children":[{"level":3,"title":"读取、写入像素","slug":"读取、写入像素","link":"#读取、写入像素","children":[]},{"level":3,"title":"缩放和反锯齿","slug":"缩放和反锯齿","link":"#缩放和反锯齿","children":[]}]},{"level":2,"title":"内置 API","slug":"内置-api","link":"#内置-api","children":[{"level":3,"title":"drawImage","slug":"drawimage","link":"#drawimage","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1660045822000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/canvas/README.md"}');export{u as comp,i as data};
