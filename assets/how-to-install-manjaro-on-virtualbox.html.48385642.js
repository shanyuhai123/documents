import{r as a,o,c as e,a as r,F as i,b as l,d as n}from"./app.f69ab909.js";const d={},t=r("h2",{id:"准备环境",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#准备环境","aria-hidden":"true"},"#"),l(" 准备环境")],-1),c=l("首先需要安装虚拟机，此处选用 "),h={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},p=l("VirtualBox"),s=l("。"),u=l("接着需要准备好 manjaro 的 ISO 文件，此处选用 "),f={href:"https://manjaro.org/download/kde/",target:"_blank",rel:"noopener noreferrer"},j=l("kde"),b=l(" 版本。"),m=n('<h2 id="虚拟机中加载-manjaro" tabindex="-1"><a class="header-anchor" href="#虚拟机中加载-manjaro" aria-hidden="true">#</a> 虚拟机中加载 manjaro</h2><ol><li>虚拟机安装完成后，点击新建；</li><li>输入名称，并选择 <code>Arch Linux</code> 版本；</li><li>接下来是分配内存，当然是越大越好；</li><li>选择创建虚拟硬盘；</li><li>虚拟硬盘文件类型选择默认的 VDI；</li><li>虚拟硬盘控件选择动态分配即可；</li><li>虚拟硬盘的大小推荐 30G 以上；</li><li>接着就创建好一个空壳了；</li><li>还需要进一步配置虚拟机，选择对应的虚拟机点击设置；</li><li>选择 <code>系统 &gt; 处理器</code> 可以选择 CPU 的数量，同样是越多越好，但是不要影响到电脑本身，量力而为；</li><li>选择 <code>存储 &gt; 控制器</code> 可以选择 ISO 文件，选择之前下载的 Manjaro ISO 文件，切记不要装成其余的了；</li><li>点击 OK，这样就基础配置好了，如果你想要虚拟机拥有本地网络的话，可以在网络中修改为 <code>桥接网卡</code> 。</li></ol><h2 id="安装-manjaro" tabindex="-1"><a class="header-anchor" href="#安装-manjaro" aria-hidden="true">#</a> 安装 Manjaro</h2><p>启动后会进入欢迎界面，修改下时区，键盘位置，语言，当然比较重要的是记得把驱动选择为闭源（nofree），这些完成后选择 Boot 就可以启动了。</p><p>进入系统后，会重新进行一些配置，比较重要的就是分区了，虚拟机的话会有一个完整的分区可供选择，直接选择抹除磁盘就可以了。</p><p>如果是实体机器的话，如果不需要双系统存在也可以选择抹除磁盘。</p><p>双系统的话就需要手动分区了，选中你之前空出来的那个硬盘块。核心的分区有三个：</p><ol><li>首先是内核，启动引导，选择 <code>/boot</code> 然后分配给 512MB 即可，最大可分配给 2G。它平时并不参与运行，仅在启动和内核升级时会用到；</li><li>接着是交换分区，选择 <code>Swap</code>，过去的经验是物理内存在 8G 以上，就给 8G（或 1.5 倍），物理内存小于 8G，给 1.5 - 2 倍即可。不过我们使用的是 Manjaro（桌面 Linux），所以还是分个 20G 压压惊好了。</li><li>最后是主要的一项了， <code>/</code> 将剩余的控件全部分给它吧。虽然有很多人会进一步分一个 <code>/home</code>，但个人觉得没有必要。</li></ol><p>这些分区是以往做虚拟机学习时的经验，至于是否适用于桌面版 Linux，还有真正的商业级架构尚未知。 最后，安装速度与你的网速、电脑性能成正比，如果你等待半天都无法安装成功，那么可以直接把网线拔了（因为会默认进行系统软件更新），稍等片刻就会安装成功了。</p>',9);d.render=function(l,n){const d=a("OutboundLink");return o(),e(i,null,[t,r("p",null,[c,r("a",h,[p,r(d)]),s]),r("p",null,[u,r("a",f,[j,r(d)]),b]),m],64)};export default d;
