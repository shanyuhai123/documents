import{_ as o,M as c,p as l,q as r,R as a,t as s,N as t,a1 as p}from"./framework-e3e34937.js";const i={},u={href:"https://archlinux.org/download/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://wiki.archlinux.org/title/Swap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"};function k(m,n){const e=c("ExternalLinkIcon");return l(),r("div",null,[n[8]||(n[8]=a("h1",{id:"arch-系统迁移",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arch-系统迁移","aria-hidden":"true"},"#"),s(" Arch 系统迁移")],-1)),n[9]||(n[9]=a("blockquote",null,[a("p",null,"买了新硬盘，怎么可以吃灰呢？")],-1)),n[10]||(n[10]=a("h2",{id:"制作-arch-live",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#制作-arch-live","aria-hidden":"true"},"#"),s(" 制作 Arch Live")],-1)),a("p",null,[n[1]||(n[1]=s("首先下载新")),a("a",u,[n[0]||(n[0]=s("镜像")),t(e)]),n[2]||(n[2]=s("。"))]),n[11]||(n[11]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用U盘替换 /dev/sdx，如 /dev/sdb。（不要加上数字，也就是说，不要键入 /dev/sdb1 之类的东西)</span>
<span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span>4M <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/to/archlinux.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">status</span><span class="token operator">=</span>progress <span class="token operator">&amp;&amp;</span> <span class="token function">sync</span>
</code></pre></div><h2 id="分区" tabindex="-1"><a class="header-anchor" href="#分区" aria-hidden="true">#</a> 分区</h2><h3 id="_1-查看分区信息" tabindex="-1"><a class="header-anchor" href="#_1-查看分区信息" aria-hidden="true">#</a> 1. 查看分区信息</h3><p>首先查看当前系统的分区：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
</code></pre></div><p>得到磁盘信息：</p><div class="language-txt" data-ext="txt"><pre class="language-txt"><code># 当前磁盘
Disk /dev/nvme0n1：476.94 GiB
设备               起点       末尾      扇区   大小 类型
/dev/nvme0n1p1     2048    2099199   2097152     1G EFI 系统
/dev/nvme0n1p2  2099200   35653631  33554432    16G Linux swap
/dev/nvme0n1p3 35653632 1000215182 964561551 459.9G Linux 文件系统
# 新磁盘
Disk /dev/nvme1n1：476.94 GiB
</code></pre></div><h3 id="_2-新磁盘修改分区" tabindex="-1"><a class="header-anchor" href="#_2-新磁盘修改分区" aria-hidden="true">#</a> 2. 新磁盘修改分区</h3><p>首先进入新磁盘：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> /dev/nvme1n1
</code></pre></div><p>根据提示，依次执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n
分区号 <span class="token punctuation">(</span><span class="token number">1</span>-128, 默认  <span class="token number">1</span><span class="token punctuation">)</span>:
第一个扇区 <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, 默认 <span class="token number">2048</span><span class="token punctuation">)</span>:
最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +1G

创建了一个新分区 <span class="token number">1</span>，类型为“Linux filesystem”，大小为 <span class="token number">1</span> GiB。
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n
分区号 <span class="token punctuation">(</span><span class="token number">2</span>-128, 默认  <span class="token number">2</span><span class="token punctuation">)</span>:
第一个扇区 <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, 默认 <span class="token number">2099200</span><span class="token punctuation">)</span>:
最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +16G

创建了一个新分区 <span class="token number">2</span>，类型为“Linux filesystem”，大小为 <span class="token number">16</span> GiB。
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n
分区号 <span class="token punctuation">(</span><span class="token number">3</span>-128, 默认  <span class="token number">3</span><span class="token punctuation">)</span>:
第一个扇区 <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, 默认 <span class="token number">35653632</span><span class="token punctuation">)</span>:
最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>:

创建了一个新分区 <span class="token number">3</span>，类型为“Linux filesystem”，大小为 <span class="token number">459.9</span> GiB。
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：t
分区号 <span class="token punctuation">(</span><span class="token number">1</span>-3, 默认  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">1</span>
分区类型或别名（输入 L 列出所有类型）：L
分区类型或别名（输入 L 列出所有类型）：1

已将分区“Linux filesystem”的类型更改为“EFI System”。
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：t
分区号 <span class="token punctuation">(</span><span class="token number">1</span>-3, 默认  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">2</span>
分区类型或别名（输入 L 列出所有类型）：19

已将分区“Linux filesystem”的类型更改为“Linux swap”。
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：w
分区表已调整。将调用 ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> 来重新读分区表。正在同步磁盘。
</code></pre></div><p>注：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>n: 新建分区
+16G: 新建分区的大小为 16G
t：修改分区类型，默认都为
L：查看所有的分区类型，找到你需要的
</code></pre></div><p>操作完成后可自行查看结果 <code>fdsik -l</code>。</p><h3 id="_3-分区格式化" tabindex="-1"><a class="header-anchor" href="#_3-分区格式化" aria-hidden="true">#</a> 3. 分区格式化</h3><p>每种不同类型的分区需要不同操作：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式化 boot</span>
mkfs.fat <span class="token parameter variable">-F32</span> /dev/nvme1n1p1
<span class="token comment"># 格式化 swap</span>
<span class="token function">mkswap</span> /dev/nvme1n1p2
<span class="token comment"># 格式化 根分区</span>
mkfs.ext4 /dev/nvme1n1p3
</code></pre></div><h2 id="系统文件迁移" tabindex="-1"><a class="header-anchor" href="#系统文件迁移" aria-hidden="true">#</a> 系统文件迁移</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂载根分区</span>
<span class="token function">mount</span> /dev/nvme1n1p3 /mnt
<span class="token comment"># 同步数据，此处未同步 boot</span>
<span class="token function">rsync</span> <span class="token parameter variable">-aAXv</span> /* /mnt <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/dev/*&quot;</span>,<span class="token string">&quot;/proc/*&quot;</span>,<span class="token string">&quot;/sys/*&quot;</span>,<span class="token string">&quot;/tmp/*&quot;</span>,<span class="token string">&quot;/run/*&quot;</span>,<span class="token string">&quot;/mnt/*&quot;</span>,<span class="token string">&quot;/media/*&quot;</span>,<span class="token string">&quot;/lost+found&quot;</span>,<span class="token string">&quot;/boot&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>由于经常搞崩电脑，还是练习下拆开步骤的形式。</p><h2 id="重建-boot" tabindex="-1"><a class="header-anchor" href="#重建-boot" aria-hidden="true">#</a> 重建 boot</h2><p>移除旧磁盘，再进入准备好的 <code>Arch Live</code> 环境。</p><h3 id="_1-挂载分区并生成-fstab" tabindex="-1"><a class="header-anchor" href="#_1-挂载分区并生成-fstab" aria-hidden="true">#</a> 1. 挂载分区并生成 fstab</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分区信息</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
<span class="token comment"># 挂载根节点</span>
<span class="token function">mount</span> /dev/nvme0n1p3 /mnt
<span class="token comment"># 挂载 boot</span>
<span class="token function">mount</span> /dev/nvme0n1p1 /mnt/boot
<span class="token comment"># 生成 fstab</span>
genfstab <span class="token parameter variable">-L</span> /mnt <span class="token operator">&gt;</span> /mnt/etc/fstab
</code></pre></div>`,25)),a("p",null,[n[4]||(n[4]=s("若后续启用 ")),a("a",d,[n[3]||(n[3]=s("swap")),t(e)]),n[5]||(n[5]=s("，则再执行 ")),n[6]||(n[6]=a("code",null,"genfstab",-1)),n[7]||(n[7]=s(" 即可。"))]),n[12]||(n[12]=p(`<h3 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖" aria-hidden="true">#</a> 2. 安装依赖</h3><p>进入系统并安装依赖：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>arch-chroot /mnt
pacman <span class="token parameter variable">-S</span> linux mkinitcpio efibootmgr
<span class="token comment"># 有需要也可重装 grub</span>
pacman <span class="token parameter variable">-S</span> grub
</code></pre></div><h3 id="_3-生成-grub" tabindex="-1"><a class="header-anchor" href="#_3-生成-grub" aria-hidden="true">#</a> 3. 生成 grub</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行 grub-install</span>
grub-install --efi-directory<span class="token operator">=</span>/boot
<span class="token comment"># 生成 grub.cfg（若报错，可增加 LANG=C）</span>
<span class="token function">grub-mkconfig</span> <span class="token parameter variable">-o</span> /boot/grub/grub.cfg
<span class="token comment"># LANG=C grub-mkconfig -o /boot/grub/grub.cfg</span>
</code></pre></div><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式" aria-hidden="true">#</a> 其他方式</h2><blockquote><p>未曾尝试</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># disk</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy <span class="token assign-left variable">conv</span><span class="token operator">=</span>noerror,sync
<span class="token comment"># image</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/run/media/shanyuhai/xxx/sys.img
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sys.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy
</code></pre></div>`,8))])}const h=o(i,[["render",k],["__file","archlinux-system-migration.html.vue"]]);export{h as default};
