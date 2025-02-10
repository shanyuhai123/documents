import{_ as s,c as n,a as e,o as t}from"./app-DNXRdI82.js";const l={};function p(c,a){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="修复时间显示" tabindex="-1"><a class="header-anchor" href="#修复时间显示"><span>修复时间显示</span></a></h1><p>初步安装系统后日期时间显示的并非当前时区。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 显示时间</span></span>
<span class="line"><span class="token function">date</span> <span class="token parameter variable">-R</span></span>
<span class="line"><span class="token comment"># Sun, 07 Jul 2019 xx:xx:xx +0000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 修改时区</span></span>
<span class="line"><span class="token function">sudo</span> tzselect</span>
<span class="line"><span class="token comment"># 按照提示修改即可</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 拷贝文件到本地时间</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="line"><span class="token comment"># 再次执行 date -R 即可看到正确时间</span></span>
<span class="line"></span></code></pre></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h2><ul><li><p>常用的时间格式：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span></span>
<span class="line"></span></code></pre></div></li></ul>`,6)]))}const o=s(l,[["render",p],["__file","fix-date.html.vue"]]),h=JSON.parse('{"path":"/os/ubuntu/fix-date.html","title":"修复时间显示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"git":{"updatedTime":1637399796000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/ubuntu/fix-date.md"}');export{o as comp,h as data};
