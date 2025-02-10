import{_ as s,c as a,a as e,o as t}from"./app-DNXRdI82.js";const p={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="excel-表列序号" tabindex="-1"><a class="header-anchor" href="#excel-表列序号"><span>Excel 表列序号</span></a></h1><p>与<a href="./168-excel-sheet-column-title">Excel 表列名称</a>相反。</p><h2 id="进制转换" tabindex="-1"><a class="header-anchor" href="#进制转换"><span>进制转换</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">titleToNumber</span><span class="token punctuation">(</span>columnTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> baseNum <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnTitle<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> cur <span class="token operator">=</span> columnTitle<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">    num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">26</span> <span class="token operator">+</span> <span class="token punctuation">(</span>cur <span class="token operator">-</span> baseNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> num</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const r=s(p,[["render",o],["__file","171-excel-sheet-column-number.html.vue"]]),u=JSON.parse('{"path":"/algorithms/171-excel-sheet-column-number.html","title":"Excel 表列序号","lang":"zh-CN","frontmatter":{"autoSort":-171},"headers":[{"level":2,"title":"进制转换","slug":"进制转换","link":"#进制转换","children":[]}],"git":{"updatedTime":1635058053000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/171-excel-sheet-column-number.md"}');export{r as comp,u as data};
