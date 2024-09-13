import{_ as a,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const o={};function c(d,n){return s(),e("div",null,n[0]||(n[0]=[t(`<h1 id="manjaro-挂载硬盘后只读" tabindex="-1"><a class="header-anchor" href="#manjaro-挂载硬盘后只读" aria-hidden="true">#</a> Manjaro 挂载硬盘后只读</h1><h2 id="情况" tabindex="-1"><a class="header-anchor" href="#情况" aria-hidden="true">#</a> 情况</h2><p>双系统使用情况下，当切换系统时挂载硬盘时仅具有只读权限。</p><p>直接使用 <code>dolpgin</code> 操作无提示，后采用命令行操作得到提示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda2 /run/media/shanyuhai/GROCERY

<span class="token comment"># 提示</span>
The disk contains an unclean <span class="token function">file</span> system <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span>.
Metadata kept <span class="token keyword">in</span> Windows cache, refused to mount.
Falling back to read-only <span class="token function">mount</span> because the NTFS partition is <span class="token keyword">in</span> an
unsafe state. Please resume and <span class="token function">shutdown</span> Windows fully <span class="token punctuation">(</span>no hibernation
or fast restarting.<span class="token punctuation">)</span>
</code></pre></div><h2 id="修复" tabindex="-1"><a class="header-anchor" href="#修复" aria-hidden="true">#</a> 修复</h2><p>可利用 <code>ntfs</code> 自带的修复工具：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ntfsfix /dev/sda2

<span class="token comment"># 再次挂载</span>
<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda2 /run/media/shanyuhai/GROCERY
</code></pre></div><p>再次尝试在文件夹内进行编辑、删除操作发现可行了。</p>`,9)]))}const i=a(o,[["render",c],["__file","readonly-after-mount-the-disk.html.vue"]]);export{i as default};
