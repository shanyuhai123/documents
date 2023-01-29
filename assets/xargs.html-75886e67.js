import{_ as a,p as s,q as n,a1 as t}from"./framework-49860b1b.js";const e={},r=t(`<h1 id="传参-xargs" tabindex="-1"><a class="header-anchor" href="#传参-xargs" aria-hidden="true">#</a> 传参 xargs</h1><p>xargs 能够处理管道或 stdin（标准输入）并将其转为特定的命令参数，用于给其他命令传递参数（大多数命令不接受 stdin 作为参数）。</p><p>如果没有给出命令，那么默认使用 echo 命令，空格是默认界定符。这就意味着通过管道传递给 xargs 的输入若包含换行符制表符一连串的空白，都会被视为空格。</p><h2 id="选项参数" tabindex="-1"><a class="header-anchor" href="#选项参数" aria-hidden="true">#</a> 选项参数</h2><table><thead><tr><th style="text-align:center;">选项</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">-p</td><td>确认要执行的命令。</td></tr><tr><td style="text-align:center;">-d</td><td>自定义界定符。</td></tr><tr><td style="text-align:center;">-n</td><td>指定项数。</td></tr><tr><td style="text-align:center;">-L</td><td>指定行数。</td></tr></tbody></table><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><h3 id="_1-配合-rm-批量删除" tabindex="-1"><a class="header-anchor" href="#_1-配合-rm-批量删除" aria-hidden="true">#</a> 1. 配合 rm 批量删除</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> test<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>.txt
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;test[2-3]*&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-p</span> <span class="token function">rm</span>
</code></pre></div><h3 id="_2-配合-wget-批量下载" tabindex="-1"><a class="header-anchor" href="#_2-配合-wget-批量下载" aria-hidden="true">#</a> 2. 配合 wget 批量下载</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存储图片列表到文件</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> meitu.txt</span>
http://hd.wallpaperswide.com/thumbs/im_hungry-t2.jpg
http://hd.wallpaperswide.com/thumbs/river_aerial_view-t2.jpg
http://hd.wallpaperswide.com/thumbs/space_eye-t2.jpg
EOF</span>

<span class="token comment"># 下载到 images 文件夹</span>
<span class="token function">mkdir</span> images
<span class="token function">cat</span> meitu.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">wget</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-P</span> images
</code></pre></div><h3 id="_3-配合-git-批量删除分支" tabindex="-1"><a class="header-anchor" href="#_3-配合-git-批量删除分支" aria-hidden="true">#</a> 3. 配合 git 批量删除分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;reg-branches&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span>
</code></pre></div>`,12),p=[r];function c(o,l){return s(),n("div",null,p)}const d=a(e,[["render",c],["__file","xargs.html.vue"]]);export{d as default};
