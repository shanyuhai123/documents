import{_ as n,c as a,a as p,o as e}from"./app-CQrWi6O2.js";const t={};function l(c,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="arch-系统迁移" tabindex="-1"><a class="header-anchor" href="#arch-系统迁移"><span>Arch 系统迁移</span></a></h1><blockquote><p>买了新硬盘，怎么可以吃灰呢？</p></blockquote><h2 id="制作-arch-live" tabindex="-1"><a class="header-anchor" href="#制作-arch-live"><span>制作 Arch Live</span></a></h2><p>首先下载新<a href="https://archlinux.org/download/" target="_blank" rel="noopener noreferrer">镜像</a>。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 用U盘替换 /dev/sdx，如 /dev/sdb。（不要加上数字，也就是说，不要键入 /dev/sdb1 之类的东西)</span></span>
<span class="line"><span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span>4M <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/to/archlinux.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">status</span><span class="token operator">=</span>progress <span class="token operator">&amp;&amp;</span> <span class="token function">sync</span></span>
<span class="line"></span></code></pre></div><h2 id="分区" tabindex="-1"><a class="header-anchor" href="#分区"><span>分区</span></a></h2><h3 id="_1-查看分区信息" tabindex="-1"><a class="header-anchor" href="#_1-查看分区信息"><span>1. 查看分区信息</span></a></h3><p>首先查看当前系统的分区：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span>
<span class="line"></span></code></pre></div><p>得到磁盘信息：</p><div class="language-txt" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line"># 当前磁盘</span>
<span class="line">Disk /dev/nvme0n1：476.94 GiB</span>
<span class="line">设备               起点       末尾      扇区   大小 类型</span>
<span class="line">/dev/nvme0n1p1     2048    2099199   2097152     1G EFI 系统</span>
<span class="line">/dev/nvme0n1p2  2099200   35653631  33554432    16G Linux swap</span>
<span class="line">/dev/nvme0n1p3 35653632 1000215182 964561551 459.9G Linux 文件系统</span>
<span class="line"># 新磁盘</span>
<span class="line">Disk /dev/nvme1n1：476.94 GiB</span>
<span class="line"></span></code></pre></div><h3 id="_2-新磁盘修改分区" tabindex="-1"><a class="header-anchor" href="#_2-新磁盘修改分区"><span>2. 新磁盘修改分区</span></a></h3><p>首先进入新磁盘：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">fdisk</span> /dev/nvme1n1</span>
<span class="line"></span></code></pre></div><p>根据提示，依次执行：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n</span>
<span class="line">分区号 <span class="token punctuation">(</span><span class="token number">1</span>-128, 默认  <span class="token number">1</span><span class="token punctuation">)</span>:</span>
<span class="line">第一个扇区 <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, 默认 <span class="token number">2048</span><span class="token punctuation">)</span>:</span>
<span class="line">最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +1G</span>
<span class="line"></span>
<span class="line">创建了一个新分区 <span class="token number">1</span>，类型为“Linux filesystem”，大小为 <span class="token number">1</span> GiB。</span>
<span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n</span>
<span class="line">分区号 <span class="token punctuation">(</span><span class="token number">2</span>-128, 默认  <span class="token number">2</span><span class="token punctuation">)</span>:</span>
<span class="line">第一个扇区 <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, 默认 <span class="token number">2099200</span><span class="token punctuation">)</span>:</span>
<span class="line">最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +16G</span>
<span class="line"></span>
<span class="line">创建了一个新分区 <span class="token number">2</span>，类型为“Linux filesystem”，大小为 <span class="token number">16</span> GiB。</span>
<span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n</span>
<span class="line">分区号 <span class="token punctuation">(</span><span class="token number">3</span>-128, 默认  <span class="token number">3</span><span class="token punctuation">)</span>:</span>
<span class="line">第一个扇区 <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, 默认 <span class="token number">35653632</span><span class="token punctuation">)</span>:</span>
<span class="line">最后一个扇区，+/-sectors 或 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, 默认 <span class="token number">1000214527</span><span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">创建了一个新分区 <span class="token number">3</span>，类型为“Linux filesystem”，大小为 <span class="token number">459.9</span> GiB。</span>
<span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：t</span>
<span class="line">分区号 <span class="token punctuation">(</span><span class="token number">1</span>-3, 默认  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">1</span></span>
<span class="line">分区类型或别名（输入 L 列出所有类型）：L</span>
<span class="line">分区类型或别名（输入 L 列出所有类型）：1</span>
<span class="line"></span>
<span class="line">已将分区“Linux filesystem”的类型更改为“EFI System”。</span>
<span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：t</span>
<span class="line">分区号 <span class="token punctuation">(</span><span class="token number">1</span>-3, 默认  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">2</span></span>
<span class="line">分区类型或别名（输入 L 列出所有类型）：19</span>
<span class="line"></span>
<span class="line">已将分区“Linux filesystem”的类型更改为“Linux swap”。</span>
<span class="line">命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：w</span>
<span class="line">分区表已调整。将调用 ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> 来重新读分区表。正在同步磁盘。</span>
<span class="line"></span></code></pre></div><p>注：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">n: 新建分区</span>
<span class="line">+16G: 新建分区的大小为 16G</span>
<span class="line">t：修改分区类型，默认都为</span>
<span class="line">L：查看所有的分区类型，找到你需要的</span>
<span class="line"></span></code></pre></div><p>操作完成后可自行查看结果 <code>fdsik -l</code>。</p><h3 id="_3-分区格式化" tabindex="-1"><a class="header-anchor" href="#_3-分区格式化"><span>3. 分区格式化</span></a></h3><p>每种不同类型的分区需要不同操作：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 格式化 boot</span></span>
<span class="line">mkfs.fat <span class="token parameter variable">-F32</span> /dev/nvme1n1p1</span>
<span class="line"><span class="token comment"># 格式化 swap</span></span>
<span class="line"><span class="token function">mkswap</span> /dev/nvme1n1p2</span>
<span class="line"><span class="token comment"># 格式化 根分区</span></span>
<span class="line">mkfs.ext4 /dev/nvme1n1p3</span>
<span class="line"></span></code></pre></div><h2 id="系统文件迁移" tabindex="-1"><a class="header-anchor" href="#系统文件迁移"><span>系统文件迁移</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 挂载根分区</span></span>
<span class="line"><span class="token function">mount</span> /dev/nvme1n1p3 /mnt</span>
<span class="line"><span class="token comment"># 同步数据，此处未同步 boot</span></span>
<span class="line"><span class="token function">rsync</span> <span class="token parameter variable">-aAXv</span> /* /mnt <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/dev/*&quot;</span>,<span class="token string">&quot;/proc/*&quot;</span>,<span class="token string">&quot;/sys/*&quot;</span>,<span class="token string">&quot;/tmp/*&quot;</span>,<span class="token string">&quot;/run/*&quot;</span>,<span class="token string">&quot;/mnt/*&quot;</span>,<span class="token string">&quot;/media/*&quot;</span>,<span class="token string">&quot;/lost+found&quot;</span>,<span class="token string">&quot;/boot&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>由于经常搞崩电脑，还是练习下拆开步骤的形式。</p><h2 id="重建-boot" tabindex="-1"><a class="header-anchor" href="#重建-boot"><span>重建 boot</span></a></h2><p>移除旧磁盘，再进入准备好的 <code>Arch Live</code> 环境。</p><h3 id="_1-挂载分区并生成-fstab" tabindex="-1"><a class="header-anchor" href="#_1-挂载分区并生成-fstab"><span>1. 挂载分区并生成 fstab</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看分区信息</span></span>
<span class="line"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span></span>
<span class="line"><span class="token comment"># 挂载根节点</span></span>
<span class="line"><span class="token function">mount</span> /dev/nvme0n1p3 /mnt</span>
<span class="line"><span class="token comment"># 挂载 boot</span></span>
<span class="line"><span class="token function">mount</span> /dev/nvme0n1p1 /mnt/boot</span>
<span class="line"><span class="token comment"># 生成 fstab</span></span>
<span class="line">genfstab <span class="token parameter variable">-L</span> /mnt <span class="token operator">&gt;</span> /mnt/etc/fstab</span>
<span class="line"></span></code></pre></div><p>若后续启用 <a href="https://wiki.archlinux.org/title/Swap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">swap</a>，则再执行 <code>genfstab</code> 即可。</p><h3 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖"><span>2. 安装依赖</span></a></h3><p>进入系统并安装依赖：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">arch-chroot /mnt</span>
<span class="line">pacman <span class="token parameter variable">-S</span> linux mkinitcpio efibootmgr</span>
<span class="line"><span class="token comment"># 有需要也可重装 grub</span></span>
<span class="line">pacman <span class="token parameter variable">-S</span> grub</span>
<span class="line"></span></code></pre></div><h3 id="_3-生成-grub" tabindex="-1"><a class="header-anchor" href="#_3-生成-grub"><span>3. 生成 grub</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 执行 grub-install</span></span>
<span class="line">grub-install --efi-directory<span class="token operator">=</span>/boot</span>
<span class="line"><span class="token comment"># 生成 grub.cfg（若报错，可增加 LANG=C）</span></span>
<span class="line"><span class="token function">grub-mkconfig</span> <span class="token parameter variable">-o</span> /boot/grub/grub.cfg</span>
<span class="line"><span class="token comment"># LANG=C grub-mkconfig -o /boot/grub/grub.cfg</span></span>
<span class="line"></span></code></pre></div><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式"><span>其他方式</span></a></h2><blockquote><p>未曾尝试</p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># disk</span></span>
<span class="line"><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy <span class="token assign-left variable">conv</span><span class="token operator">=</span>noerror,sync</span>
<span class="line"><span class="token comment"># image</span></span>
<span class="line"><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/run/media/shanyuhai/xxx/sys.img</span>
<span class="line"><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sys.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy</span>
<span class="line"></span></code></pre></div>`,38)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/os/arch/archlinux-system-migration.html","title":"Arch 系统迁移","lang":"zh-CN","frontmatter":{"description":"Arch Linux 系统迁移到新硬盘","autoPrev":"README"},"headers":[{"level":2,"title":"制作 Arch Live","slug":"制作-arch-live","link":"#制作-arch-live","children":[]},{"level":2,"title":"分区","slug":"分区","link":"#分区","children":[{"level":3,"title":"1. 查看分区信息","slug":"_1-查看分区信息","link":"#_1-查看分区信息","children":[]},{"level":3,"title":"2. 新磁盘修改分区","slug":"_2-新磁盘修改分区","link":"#_2-新磁盘修改分区","children":[]},{"level":3,"title":"3. 分区格式化","slug":"_3-分区格式化","link":"#_3-分区格式化","children":[]}]},{"level":2,"title":"系统文件迁移","slug":"系统文件迁移","link":"#系统文件迁移","children":[]},{"level":2,"title":"重建 boot","slug":"重建-boot","link":"#重建-boot","children":[{"level":3,"title":"1. 挂载分区并生成 fstab","slug":"_1-挂载分区并生成-fstab","link":"#_1-挂载分区并生成-fstab","children":[]},{"level":3,"title":"2. 安装依赖","slug":"_2-安装依赖","link":"#_2-安装依赖","children":[]},{"level":3,"title":"3. 生成 grub","slug":"_3-生成-grub","link":"#_3-生成-grub","children":[]}]},{"level":2,"title":"其他方式","slug":"其他方式","link":"#其他方式","children":[]}],"git":{"updatedTime":1662990037000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/arch/archlinux-system-migration.md"}');export{i as comp,r as data};
