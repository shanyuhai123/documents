import{r as e,o as l,c as i,a as d,w as o,F as a,d as c,b as r}from"./app.221f0787.js";const t={},s=c('<p>该项仅在虚拟机下进行测试，与实体机有一定区别。</p><h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2><ul><li>虚拟机：VirtualBox（6.0.10）</li></ul><h2 id="新增磁盘工作" tabindex="-1"><a class="header-anchor" href="#新增磁盘工作" aria-hidden="true">#</a> 新增磁盘工作</h2><p>事情的开始你需要有一块磁盘。</p><h3 id="_1-操作步骤" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤" aria-hidden="true">#</a> 1. 操作步骤</h3><ol><li>打开虚拟机；</li><li>在界面中点击设置并选中存储；</li><li>可以选择已有的控制器也可以新建控制器，点击添加存储附件（虚拟硬盘）；</li><li>控制器选项有 SAS、SATA、IDE（古老的存在，现在很少用了），控制器即对应不同类型的硬盘；</li><li>创建新的虚拟盘，默认 VDI 文件类型，动态分配；</li><li>分配期望的大小；</li><li>确认创建。</li></ol><h2 id="磁盘进行-raid" tabindex="-1"><a class="header-anchor" href="#磁盘进行-raid" aria-hidden="true">#</a> 磁盘进行 RAID</h2><p>为了数据更安全，更快捷，需要进行 <a href="/os/linux/raid">RAID</a>。</p><p>此处缺乏 RAID 实践，以后可能会补上，参考资料：</p>',10),n={href:"http://www.iyunwei.com/docs/sysadmin_command/CentOS6.3%E4%B8%8B%E9%85%8D%E7%BD%AE%E8%BD%AFRAID.pdf",target:"_blank",rel:"noopener noreferrer"},h=r("CentOS 6.3 下配置软 RAID"),f=r("；"),p={href:"https://www.intel.cn/content/www/cn/zh/support/articles/000006748/boards-and-kits/desktop-boards.html",target:"_blank",rel:"noopener noreferrer"},u=r("Intel 主板中 BIOS 中启用 RAID"),b=r("；"),m=d("p",null,"需要补充的是，虽然很多资料都说明硬件 RAID 更具优势，但是在现在高速 Nvme 硬盘的情况下是否依然效率更高呢 👦？",-1),k=d("h2",{id:"磁盘分区工作",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#磁盘分区工作","aria-hidden":"true"},"#"),r(" 磁盘分区工作")],-1),w=r("磁盘是按柱面进行分区的，磁盘分区信息登记的地点为"),x={href:"https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%BC%95%E5%AF%BC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},B=r("磁盘分区表"),E=r("，磁盘分区表存放位置为 0 磁道 0 柱面 1 扇区。"),_=c('<p>该扇区（1 扇区）划分为，前 446 字节为系统引导信息，中间 64 字节为分区表，后 2 字节为分区结束标识。</p><p>修改磁盘分区常用工具为：</p><ul><li>fdisk：处理 MBR 分区，MBR 分区小于 2T；</li><li>parted：处理 GPT 分区，GPT 分区大于 2T。</li></ul><h3 id="_1-操作步骤-1" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤-1" aria-hidden="true">#</a> 1. 操作步骤</h3><ol><li>首先添加一块虚拟硬盘到系统中；</li><li>使用 <code>fdisk -l</code> 获取新增硬盘的信息；</li><li>确认以 <code>3P+1E(3L)</code> 分区为示例；</li><li>根据新增硬盘信息输入 <code>fdisk /dev/sdb</code>；</li><li>可以输入 <code>m</code> 查看帮助；</li><li>输入 <code>n</code> 新增分区；</li><li>输入 <code>p</code> 选择主分区；</li><li>分区 number，default 为 1，回车即可；</li><li>first sector，default 2048，回车即可；</li><li>last sector，设置 1G 大小，即输入 <code>+1G</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>循环上面的步骤，开始第二个主分区；</li><li>输入 <code>n</code> 新增分区；</li><li>输入 <code>p</code> 选择主分区；</li><li>分区 number，default 为 2，回车即可；</li><li>first sector，default 2099200，回车即可；</li><li>last sector，设置 1G 大小，即输入 <code>+1G</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>循环上面的步骤，开始第三个主分区；</li><li>输入 <code>n</code> 新增分区；</li><li>输入 <code>p</code> 选择主分区；</li><li>分区 number，default 为 3，回车即可；</li><li>first sector，default 4196352，回车即可；</li><li>last sector，设置 1G 大小，即输入 <code>+1G</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>循环上面的步骤，开始扩展分区；</li><li>输入 <code>n</code> 新增分区；</li><li>输入 <code>e</code> 选择主分区；</li><li>first sector，default 6293504，回车即可；</li><li>last sector，default 12582911，回车选择剩余所有空间即可；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>接下来在扩展分区中新建逻辑分区；</li><li>输入 <code>n</code> 新增分区；</li><li>first sector，default 6293504，回车即可；</li><li>last sector，设置 1G 大小，即输入 <code>+1G</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>循环上面的步骤，开始第二个逻辑分区；</li><li>输入 <code>n</code> 新增分区；</li><li>first sector，default 6293504，回车即可；</li><li>last sector，设置 1G 大小，即输入 <code>+1G</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>循环上面的步骤，开始第三个逻辑分区；</li><li>输入 <code>n</code> 新增分区；</li><li>first sector，default 6293504，回车即可；</li><li>last sector，default 12582911，回车选择剩余所有空间即可；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>输入 <code>w</code> 保存分区结果；</li><li>输入 <code>partprobe /dev/sdb</code> 通知分区信息修改了，或者重启虚拟机。</li></ol><h2 id="磁盘分区类型" tabindex="-1"><a class="header-anchor" href="#磁盘分区类型" aria-hidden="true">#</a> 磁盘分区类型</h2><p>磁盘的分区类型往往决定该分区具体的作用。</p><h3 id="_1-操作步骤-2" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤-2" aria-hidden="true">#</a> 1. 操作步骤</h3><ol><li>使用 <code>fdisk -l</code> 获取新增硬盘的信息；</li><li>根据硬盘信息选择 <code>fdisk /dev/sdb</code>；</li><li>输入 <code>m</code> 查看帮助；</li><li>输入 <code>l</code> 查看分区类型；</li><li>输入 <code>t</code> 修改分区 system Id；</li><li>输入 <code>7</code> 选择第七个分区；</li><li>根据提示输入 <code>L</code> 查看 codes；</li><li>输入 <code>8e</code>；</li><li>输入 <code>p</code> 查看结果，确认无误后继续；</li><li>输入 <code>w</code> 保存分区结果；</li><li>输入 <code>partprobe /dev/sdb</code> 通知分区信息修改了，或者重启虚拟机。</li></ol><h2 id="分区文件系统" tabindex="-1"><a class="header-anchor" href="#分区文件系统" aria-hidden="true">#</a> 分区文件系统</h2>',10),A=r("磁盘需要借助"),D={href:"https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"},v=r("文件系统"),I=r("才能实现磁盘管理，"),G=d("a",{href:"/computer/data-write"},"数据存取",-1),R=r("。"),g=c('<h3 id="_1-操作步骤-3" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤-3" aria-hidden="true">#</a> 1. 操作步骤</h3><ol><li>使用 <code>fdisk -l</code> 获取新增硬盘的信息；</li><li>根据硬盘信息选择 <code>fdisk /dev/sdb</code>；</li><li>输入 <code>mkfs -t ext4 /dev/sdb1</code> 来创建 ext4 文件系统；</li><li>或输入 <code>mkfs.xfs /dev/sdb2</code> 来创建 xfs 文件系统；</li><li>查看输入，可以观察到生成了一定数量的 inodes 和 blocks，这是关键所在。</li></ol><blockquote><p>inode 作用，存储文件的属性信息，同时存放指向文件实体的指针。</p><p>当存放文件提示：no space left on device，可能是 inodes 数量满了。</p><p>排查二连：<code>df -h</code>，<code>df -i</code>。</p></blockquote><h2 id="挂载磁盘分区" tabindex="-1"><a class="header-anchor" href="#挂载磁盘分区" aria-hidden="true">#</a> 挂载磁盘分区</h2><p>挂载分区前需要完成以上工作。</p><p>挂载分区分为临时挂载和永久挂载。</p><h3 id="_1-临时挂载分区操作步骤" tabindex="-1"><a class="header-anchor" href="#_1-临时挂载分区操作步骤" aria-hidden="true">#</a> 1. 临时挂载分区操作步骤</h3><ol><li>输入 <code>mount -t ext4 /dev/sdb1 /mnt</code>；</li><li>创建文件测试 <code>echo hello &gt; /mnt/hello.txt</code>；</li><li>验证 <code>cat /mnt/hello.txt</code>；</li><li>查看挂载结果 <code>cat /proc/mounts</code>；</li><li>卸载 <code>umount /mnt</code>。</li></ol><h3 id="_2-永久挂载分区操作步骤" tabindex="-1"><a class="header-anchor" href="#_2-永久挂载分区操作步骤" aria-hidden="true">#</a> 2. 永久挂载分区操作步骤</h3><ol><li>永久实际上是开机自动挂载；</li><li>输入 <code>cat /etc/fstab</code> 查看输入格式；</li><li>输入 <code>blkid</code> 查看 /dev/sdb2 的 UUID；</li><li>编辑 <code>/etc/fstab</code>；</li><li>追加 <code>UUID=8c0514b8-70a9-4389-a17c-823e55ff8789 /mnt xfs defaults 0 0</code>；</li><li>或使用分区也可 <code>/dev/sdb2 /mnt xfs defaults 0 0</code>；</li><li>重启输入 <code>cat /proc/mounts</code> 或 <code>df -h</code> 挂载结果。</li></ol><h2 id="补充-扩展-swap" tabindex="-1"><a class="header-anchor" href="#补充-扩展-swap" aria-hidden="true">#</a> 补充：扩展 swap</h2><p>发现 swap 早期分配的太小了不够用可以追加。</p><h3 id="_1-操作步骤-4" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤-4" aria-hidden="true">#</a> 1. 操作步骤</h3>',13),C=d("li",null,[r("输入 "),d("code",null,"free -m"),r(" 查看 swap 大小；")],-1),S=d("li",null,[r("输入 "),d("code",null,"fdisk -l"),r(" 查看可用的分区；")],-1),T=r("无可用分区就按照 "),F=r("磁盘分区工作"),L=r(" 新建一个分区；"),O=d("li",null,[r("输入 "),d("code",null,"mkswap /dev/sdb3"),r(" 格式化分区为 swap；")],-1),U=d("li",null,[r("输入 "),d("code",null,"swapon -a /dev/sdb3"),r(" 启用 swap 分区；")],-1),y=d("li",null,[r("输入 "),d("code",null,"free -m"),r(" 验证结果。")],-1);t.render=function(c,r){const t=e("OutboundLink"),z=e("RouterLink");return l(),i(a,null,[s,d("ol",null,[d("li",null,[d("a",n,[h,d(t)]),f]),d("li",null,[d("a",p,[u,d(t)]),b])]),m,k,d("p",null,[w,d("a",x,[B,d(t)]),E]),_,d("p",null,[A,d("a",D,[v,d(t)]),I,G,R]),g,d("ol",null,[C,S,d("li",null,[T,d(z,{to:"/os/linux/how-to-enable-the-hard-disk.html#%E7%A3%81%E7%9B%98%E5%88%86%E5%8C%BA%E5%B7%A5%E4%BD%9C"},{default:o((()=>[F])),_:1}),L]),O,U,y])],64)};export default t;
