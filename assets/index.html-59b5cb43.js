import{_ as t,M as d,p as i,q as l,R as n,t as e,N as r,a1 as o}from"./framework-e3e34937.js";const p="/assets/manjaro-arch-076e753d.png",u={},c={href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/ventoy/Ventoy",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},f={href:"https://manjaro.org/download/kde/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://wiki.archlinux.org/",target:"_blank",rel:"noopener noreferrer"};function x(b,a){const s=d("ExternalLinkIcon");return i(),l("div",null,[a[23]||(a[23]=n("h1",{id:"体验美好的-manjaro-吧",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#体验美好的-manjaro-吧","aria-hidden":"true"},"#"),e(" 体验美好的 Manjaro 吧")],-1)),a[24]||(a[24]=n("h2",{id:"制作-u-盘启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#制作-u-盘启动","aria-hidden":"true"},"#"),e(" 制作 U 盘启动")],-1)),n("p",null,[a[1]||(a[1]=e("以往在 Windows 下常使用 ")),n("a",c,[a[0]||(a[0]=e("rufus")),r(s)]),a[2]||(a[2]=e(" 来制作启动盘，而 ")),a[3]||(a[3]=n("code",null,"rufus",-1)),a[4]||(a[4]=e(" 暂无对 ")),a[5]||(a[5]=n("code",null,"Linux",-1)),a[6]||(a[6]=e(" 平台的支持。"))]),n("blockquote",null,[n("p",null,[a[8]||(a[8]=e("安利下 ")),n("a",h,[a[7]||(a[7]=e("Ventoy")),r(s)]),a[9]||(a[9]=e("。"))])]),a[25]||(a[25]=o(`<h3 id="_1-获取-u-盘路径" tabindex="-1"><a class="header-anchor" href="#_1-获取-u-盘路径" aria-hidden="true">#</a> 1. 获取 U 盘路径</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span> <span class="token comment"># 从中找到 /dev/sdc</span>
</code></pre></div><h3 id="_2-格式化-u-盘" tabindex="-1"><a class="header-anchor" href="#_2-格式化-u-盘" aria-hidden="true">#</a> 2. 格式化 U 盘</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mkfs.<span class="token punctuation">[</span>type<span class="token punctuation">]</span> /dev/sdc <span class="token comment"># [type] 为需要的类型，如 fat32、ext4、ntfs，例 mkfs.ext4</span>
</code></pre></div><h3 id="_3-dd-命令" tabindex="-1"><a class="header-anchor" href="#_3-dd-命令" aria-hidden="true">#</a> 3. dd 命令</h3><p>指定 <code>iso</code> 及 U盘路径即可，相对于 <code>rufus</code> 等工具，该指令可能会花费较多的时间，原因未明。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/ubuntu-20.04-live-server-amd64.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdc
</code></pre></div><h2 id="虚拟机安装-manjaro" tabindex="-1"><a class="header-anchor" href="#虚拟机安装-manjaro" aria-hidden="true">#</a> 虚拟机安装 Manjaro</h2>`,8)),n("p",null,[a[11]||(a[11]=e("首先需要安装虚拟机，此处选用 ")),n("a",m,[a[10]||(a[10]=e("VirtualBox")),r(s)]),a[12]||(a[12]=e("。"))]),n("p",null,[a[14]||(a[14]=e("接着需要准备好 manjaro 的 ISO 文件，此处选用 ")),n("a",f,[a[13]||(a[13]=e("kde")),r(s)]),a[15]||(a[15]=e(" 版本。"))]),a[26]||(a[26]=o(`<h3 id="虚拟机中加载-manjaro" tabindex="-1"><a class="header-anchor" href="#虚拟机中加载-manjaro" aria-hidden="true">#</a> 虚拟机中加载 Manjaro</h3><ol><li>虚拟机安装完成后，点击新建；</li><li>输入名称，并选择 <code>Arch Linux</code> 版本；</li><li>接下来是分配内存，当然是越大越好；</li><li>选择创建虚拟硬盘；</li><li>虚拟硬盘文件类型选择默认的 VDI；</li><li>虚拟硬盘控件选择动态分配即可；</li><li>虚拟硬盘的大小推荐 30G 以上；</li><li>接着就创建好一个空壳了；</li><li>还需要进一步配置虚拟机，选择对应的虚拟机点击设置；</li><li>选择 <code>系统 &gt; 处理器</code> 可以选择 CPU 的数量，同样是越多越好，但是不要影响到电脑本身，量力而为；</li><li>选择 <code>存储 &gt; 控制器</code> 可以选择 ISO 文件，选择之前下载的 Manjaro ISO 文件，切记不要装成其余的了；</li><li>点击 OK，这样就基础配置好了，如果你想要虚拟机拥有本地网络的话，可以在网络中修改为 <code>桥接网卡</code> 。</li></ol><h3 id="安装-manjaro" tabindex="-1"><a class="header-anchor" href="#安装-manjaro" aria-hidden="true">#</a> 安装 Manjaro</h3><p>启动后会进入欢迎界面，修改下时区，键盘位置，语言，当然比较重要的是记得把驱动选择为闭源（nofree），这些完成后选择 Boot 就可以启动了。</p><p>进入系统后，会重新进行一些配置，比较重要的就是分区了，虚拟机的话会有一个完整的分区可供选择，直接选择抹除磁盘就可以了。</p><p>如果是实体机器的话，如果不需要双系统存在也可以选择抹除磁盘。</p><p>双系统的话就需要手动分区了，选中你之前空出来的那个硬盘块。核心的分区有三个：</p><ol><li>首先是内核，启动引导，选择 <code>/boot</code> 然后分配给 512MB 即可，最大可分配给 2G。它平时并不参与运行，仅在启动和内核升级时会用到；</li><li>接着是交换分区，选择 <code>Swap</code>，过去的经验是物理内存在 8G 以上，就给 8G（或 1.5 倍），物理内存小于 8G，给 1.5 - 2 倍即可。不过我们使用的是 Manjaro（桌面 Linux），所以还是分个 20G 压压惊好了。</li><li>最后是主要的一项了， <code>/</code> 将剩余的控件全部分给它吧。虽然有很多人会进一步分一个 <code>/home</code>，但个人觉得没有必要。</li></ol><p>这些分区是以往做虚拟机学习时的经验，至于是否适用于桌面版 Linux，还有真正的商业级架构尚未知。 最后，安装速度与你的网速、电脑性能成正比，如果你等待半天都无法安装成功，那么可以直接把网线拔了（因为会默认进行系统软件更新），稍等片刻就会安装成功了。</p><h3 id="那真机呢" tabindex="-1"><a class="header-anchor" href="#那真机呢" aria-hidden="true">#</a> 那真机呢</h3><p>当虚拟机测试完毕后，真机自是同理了。</p><h2 id="修改软件源" tabindex="-1"><a class="header-anchor" href="#修改软件源" aria-hidden="true">#</a> 修改软件源</h2><p>默认软件源非国内，需要进行调整：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman-mirrors <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> China <span class="token parameter variable">-m</span> rank
</code></pre></div><h3 id="archlinuxcn" tabindex="-1"><a class="header-anchor" href="#archlinuxcn" aria-hidden="true">#</a> ArchLinuxCN</h3><p>ArchlinuxCN 是由 Arch Linux 中文社区维护的非官方的仓库，也就是说它会提供一些没有被 Arch Linux 收录的国产软件。 需注意它是 <code>arch</code> 的而非 <code>manjaro</code> 的，而 <code>manjaro</code> 的官方源更新滞后于 <code>arch</code>，当上游出现 <code>ABI</code> 破坏性更新时，ArchlinuxCN 会优先保证 Arch Linux 的用户体验，至于更新落后的 <code>manjaro</code> 可能就会挨打了。</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>命令行配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/pacman.conf

<span class="token comment"># 在最后追加</span>
<span class="token comment"># 当然你也可以使用其他镜像</span>
<span class="token punctuation">[</span>archlinuxcn<span class="token punctuation">]</span>
Server <span class="token operator">=</span> https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/<span class="token variable">$arch</span>
<span class="token comment"># Server = https://mirrors.aliyun.com/archlinuxcn/$arch</span>

<span class="token comment"># 再添加源的 key</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> archlinuxcn-keyring

<span class="token comment"># 更新软件列表</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Syy</span>
</code></pre></div><p>界面配置：</p><p><code>Octopi</code> &gt; <code>工具</code> &gt; <code>软件源编辑器</code>。</p><h2 id="切换到-arch" tabindex="-1"><a class="header-anchor" href="#切换到-arch" aria-hidden="true">#</a> 切换到 Arch</h2>`,22)),n("p",null,[a[17]||(a[17]=e("在长期使用 ")),a[18]||(a[18]=n("code",null,"Manjaro",-1)),a[19]||(a[19]=e(" 后不妨试试 ")),a[20]||(a[20]=n("code",null,"Arch",-1)),a[21]||(a[21]=e("。必读 ")),n("a",k,[a[16]||(a[16]=e("WIKI")),r(s)]),a[22]||(a[22]=e("。"))]),a[27]||(a[27]=n("p",null,[n("img",{src:p,alt:"arch"})],-1))])}const v=t(u,[["render",x],["__file","index.html.vue"]]);export{v as default};