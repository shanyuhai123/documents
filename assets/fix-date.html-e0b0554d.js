import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const t={},c=e(`<h1 id="修复时间显示" tabindex="-1"><a class="header-anchor" href="#修复时间显示" aria-hidden="true">#</a> 修复时间显示</h1><p>初步安装系统后日期时间显示的并非当前时区。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 显示时间</span>
<span class="token function">date</span> <span class="token parameter variable">-R</span>
<span class="token comment"># Sun, 07 Jul 2019 xx:xx:xx +0000</span>

<span class="token comment"># 2. 修改时区</span>
<span class="token function">sudo</span> tzselect
<span class="token comment"># 按照提示修改即可</span>

<span class="token comment"># 3. 拷贝文件到本地时间</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
<span class="token comment"># 再次执行 date -R 即可看到正确时间</span>
</code></pre></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><ul><li><p>常用的时间格式：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div></li></ul>`,6),o=[c];function l(p,d){return n(),s("div",null,o)}const r=a(t,[["render",l],["__file","fix-date.html.vue"]]);export{r as default};
