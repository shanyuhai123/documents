import{_ as s,c as n,a as e,o as t}from"./app-DNXRdI82.js";const p={};function o(l,a){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="html-拖放" tabindex="-1"><a class="header-anchor" href="#html-拖放"><span>HTML 拖放</span></a></h1><p><strong>HTML 拖放（Drag and Drop）</strong> 接口使应用程序能够在浏览器中使用拖放功能。例如，用户可以使用鼠标选择可拖拽（draggable）元素，将元素拖拽到可放置（droppable），并释放鼠标按钮以放置这些元素。拖拽操作期间，会有一个可拖拽元素的半透明快照跟随鼠标指针。</p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><h3 id="应用于被拖拽的元素" tabindex="-1"><a class="header-anchor" href="#应用于被拖拽的元素"><span>应用于被拖拽的元素</span></a></h3><ul><li><code>drag</code>：当拖拽元素时触发（每 100 毫秒触发一次）</li><li><code>dragstart</code>：当用户开始拖拽一个元素时触发（从操作系统向浏览器拖拽文件时，不会触发）</li><li><code>dragend</code>：当拖拽操作结束时触发（从操作系统向浏览器拖拽文件时，不会触发）</li></ul><h3 id="应用于目标元素" tabindex="-1"><a class="header-anchor" href="#应用于目标元素"><span>应用于目标元素</span></a></h3><blockquote><p>被拖拽的元素区域也可监听以下事件</p></blockquote><ul><li><code>dragenter</code>：当拖拽到一个可释放目标时触发</li><li><code>dragover</code>：当元素被拖到一个可释放目标上时触发（每 100 毫秒触发一次）</li><li><code>drop</code>：当元素在可释放目标上被释放时触发</li><li><code>dragleave</code>：当鼠标离开目标元素时触发</li></ul><h3 id="阻止默认行为" tabindex="-1"><a class="header-anchor" href="#阻止默认行为"><span>阻止默认行为</span></a></h3><ol><li>在 <code>dragover</code> 中，需要执行 <code>event.preventDefault()</code> 来阻止拖拽的默认操作，不知道这个默认操作是什么，但如果不阻止就不会触发 <code>drop</code> 事件</li><li>在 <code>drop</code> 中同样需要执行 <code>event.preventDefault()</code> 来阻止拖拽的默认操作，如在 Firefox 如果 data 是链接则会跳转</li></ol><h2 id="datatransfer" tabindex="-1"><a class="header-anchor" href="#datatransfer"><span>dataTransfer</span></a></h2><p>直接通过 TypeScript 查看定义，可以看到是在 <code>MouseEvent</code> 的基础上增加了 <code>dataTransfer</code> 属性：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">DragEvent</span> <span class="token keyword">extends</span> <span class="token class-name">MouseEvent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">readonly</span> dataTransfer<span class="token operator">:</span> DataTransfer <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/** </span>
<span class="line"> * 用于保存拖放操作期间正在拖动的数据</span>
<span class="line"> * 数据传递用全局变量不可以吗？如果仅在一个页面内拖东数据是没有问题的，但从桌面拖动到网页（或从网页拖动到桌面）则需要通过内置的 API。</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">DataTransfer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/** 指定拖放操作所允许的一个效果 */</span></span>
<span class="line">  effectAllowed<span class="token operator">:</span> <span class="token string">&quot;none&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;copy&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;copyLink&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;copyMove&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;link&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;linkMove&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;move&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;all&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;uninitialized&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 属性控制在拖放操作中给用户的反馈（通常是视觉上的，可就是没啥用） */</span></span>
<span class="line">  dropEffect<span class="token operator">:</span> <span class="token string">&quot;none&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;copy&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;link&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;move&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/** 拖动的文件列表 */</span></span>
<span class="line">  <span class="token keyword">readonly</span> files<span class="token operator">:</span> FileList<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 包含所有拖动数据列表的 DataTransferItemList 对象 */</span></span>
<span class="line">  <span class="token keyword">readonly</span> items<span class="token operator">:</span> DataTransferItemList<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 返回在 dragstart 事件中(setData)设置的拖动数据格式的数组 */</span></span>
<span class="line">  <span class="token keyword">readonly</span> types<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/** 删除指定格式的数据。如果省略参数，则删除所有数据。 */</span></span>
<span class="line">  <span class="token function">clearData</span><span class="token punctuation">(</span>format<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 返回指定的数据。如果没有此类数据，则返回空字符串。 */</span></span>
<span class="line">  <span class="token function">getData</span><span class="token punctuation">(</span>format<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 添加指定的数据。 */</span></span>
<span class="line">  <span class="token function">setData</span><span class="token punctuation">(</span>format<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/** 设置拖动图像 */</span></span>
<span class="line">  <span class="token function">setDragImage</span><span class="token punctuation">(</span>image<span class="token operator">:</span> Element<span class="token punctuation">,</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank" rel="noopener noreferrer">HTML 拖放 API</a></li></ul>`,15)]))}const r=s(p,[["render",o],["__file","drag-and-drop.html.vue"]]),i=JSON.parse('{"path":"/frontend/web/drag-and-drop.html","title":"HTML 拖放","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"应用于被拖拽的元素","slug":"应用于被拖拽的元素","link":"#应用于被拖拽的元素","children":[]},{"level":3,"title":"应用于目标元素","slug":"应用于目标元素","link":"#应用于目标元素","children":[]},{"level":3,"title":"阻止默认行为","slug":"阻止默认行为","link":"#阻止默认行为","children":[]}]},{"level":2,"title":"dataTransfer","slug":"datatransfer","link":"#datatransfer","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1659864640000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/web/drag-and-drop.md"}');export{r as comp,i as data};
