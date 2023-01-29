import{_ as a,M as d,p as c,q as o,Q as t,t as e,N as l,V as r,a1 as i}from"./framework-49860b1b.js";const x={},y=t("h1",{id:"linux-系统目录结构",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#linux-系统目录结构","aria-hidden":"true"},"#"),e(" Linux 系统目录结构")],-1),g=t("h2",{id:"介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),e(" 介绍")],-1),h=t("p",null,"如果想要了解 Linux，那么你首先需要知道大部分的目录是做什么的，具有什么含义。",-1),u={href:"https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86",target:"_blank",rel:"noopener noreferrer"},_=t("p",null,"FHS 认为，Linux 系统的根目录（/）最为重要，没有之一，原因：",-1),f=t("ol",null,[t("li",null,"所有目录都是由根目录衍生出来的;"),t("li",null,"根目录与系统的开机、修复和还原密切相关。")],-1),p={href:"https://www.zhihu.com/question/49073893/answer/114986798",target:"_blank",rel:"noopener noreferrer"},b=t("h2",{id:"fhs-规范目录",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#fhs-规范目录","aria-hidden":"true"},"#"),e(" FHS 规范目录")],-1),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"缩写"),t("th",{style:{"text-align":"center"}},"全称"),t("th",{style:{"text-align":"left"}},"说明")])],-1),m=t("tr",null,[t("td",{style:{"text-align":"center"}},"/bin/"),t("td",{style:{"text-align":"center"}},"binary"),t("td",{style:{"text-align":"left"}},[e("存放系统命令，普通用户和 root 都可以执行。目前 "),t("code",null,"/bin/"),e(" 实际上是 "),t("code",null,"/usr/bin/"),e(" 的软连接。")])],-1),E=t("td",{style:{"text-align":"center"}},"/boot/",-1),B=t("td",{style:{"text-align":"center"}},"boot",-1),L={style:{"text-align":"left"}},k=t("code",null,"/dev/",-1),w=t("tr",null,[t("td",{style:{"text-align":"center"}},"/dev/"),t("td",{style:{"text-align":"center"}},"device"),t("td",{style:{"text-align":"left"}},"设备文件保存位置。")],-1),S=t("tr",null,[t("td",{style:{"text-align":"center"}},"/etc/"),t("td",{style:{"text-align":"center"}},"etceteras（附加）"),t("td",{style:{"text-align":"left"}},[e("二进制软件包（yum、rpm）等的配置文件路径，例如："),t("code",null,"/etc/exports"),e("、"),t("code",null,"/etc/fstab"),e("、"),t("code",null,"/etc/resove.conf"),e(" 等。")])],-1),A=t("tr",null,[t("td",{style:{"text-align":"center"}},"/etc/opt/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},[t("code",null,"/opt/"),e(" 的配置文件。")])],-1),F=t("tr",null,[t("td",{style:{"text-align":"center"}},"/etc/X11/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"X窗口系统（版本11）的配置文件。")],-1),C=t("tr",null,[t("td",{style:{"text-align":"center"}},"/etc/sgml/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"SGML 的配置文件。")],-1),H=t("tr",null,[t("td",{style:{"text-align":"center"}},"/etc/xml/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"XML 的配置文件。")],-1),I=t("tr",null,[t("td",{style:{"text-align":"center"}},"/home/"),t("td",{style:{"text-align":"center"}},"home"),t("td",{style:{"text-align":"left"}},"普通用户的主目录（也称为家目录），用于用户的默认登录和保存数据。")],-1),N=t("tr",null,[t("td",{style:{"text-align":"center"}},"/lib/"),t("td",{style:{"text-align":"center"}},"library"),t("td",{style:{"text-align":"left"}},[e("启动系统和运行命令所需的共享文件和内核模块存放目录。分为 "),t("code",null,"/lib/"),e(" 和 "),t("code",null,"/lib64/（64位程序）"),e(" 。")])],-1),V=t("tr",null,[t("td",{style:{"text-align":"center"}},"/media/"),t("td",{style:{"text-align":"center"}},"media"),t("td",{style:{"text-align":"left"}},"挂载目录。系统建议用来挂载媒体设备，如软盘和光盘。")],-1),q=t("tr",null,[t("td",{style:{"text-align":"center"}},"/mnt/"),t("td",{style:{"text-align":"center"}},"mount"),t("td",{style:{"text-align":"left"}},"挂载目录。早期 Linux 中只有这一个挂载目录，并没有细分。系统建议这个目录用来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。")],-1),z=t("tr",null,[t("td",{style:{"text-align":"center"}},"/opt/"),t("td",{style:{"text-align":"center"}},"optional application software package"),t("td",{style:{"text-align":"left"}},[e("第三方安装的软件保存位置。如果是作为一个真正的运维，那么该目录基本上废弃了，推荐安装到 "),t("code",null,"/usr/local/"),e(" 下。在桌面端的 Linux 下还有一些应用会使用该目录。")])],-1),M=t("tr",null,[t("td",{style:{"text-align":"center"}},"/proc/"),t("td",{style:{"text-align":"center"}},"processes"),t("td",{style:{"text-align":"left"}},"虚拟文件系统。该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。")],-1),R=t("tr",null,[t("td",{style:{"text-align":"center"}},"/root/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},[e("root 用户的主目录。例如普通用户 shanyuhai 主目录为 "),t("code",null,"/home/shanyuhai"),e(" 下。")])],-1),U=t("tr",null,[t("td",{style:{"text-align":"center"}},"/sbin/"),t("td",{style:{"text-align":"center"}},"system binary"),t("td",{style:{"text-align":"left"}},[t("code",null,"/sbin/"),e(" 的遭遇相对 "),t("code",null,"/bin/"),e(" 好一些，一些系统先关的指令只有在 "),t("code",null,"root"),e(" 用户下可以访问。")])],-1),X=t("tr",null,[t("td",{style:{"text-align":"center"}},"/srv/"),t("td",{style:{"text-align":"center"}},"service"),t("td",{style:{"text-align":"left"}},"为系统提供服务数据目录。一些系统服务启动之后，可以在这个目录中保存所需要的数据。")],-1),D=t("tr",null,[t("td",{style:{"text-align":"center"}},"/tmp/"),t("td",{style:{"text-align":"center"}},"temp"),t("td",{style:{"text-align":"left"}},"临时目录。所有用户都可以访问和写入。")],-1),O=t("td",{style:{"text-align":"center"}},"/usr/",-1),T={style:{"text-align":"center"}},G={href:"https://www.zhihu.com/question/49073893/answer/616735594",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"left"}},[e("用于存储系统软件资源。FHS 建议所有开发者，应把软件产品的数据合理的放置在 "),t("code",null,"/usr"),e(" 目录下的各子目录中，而不是为他们的产品创建单独的目录。")],-1),j=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/bin/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"存放系统命令，普通用户和超级用户都可以执行。")],-1),J=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/lib/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"应用程序调用的函数库保存位置。")],-1),K=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/sbin/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"存放根文件系统不必要的系统管理命令，如多数服务程序，只有 root 可以使用。")],-1),P=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/include/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},[t("code",null,"C/C++"),e(" 等编程语言头文件的放置目录。")])],-1),W=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/share/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录。")],-1),Y=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/src/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"源码包保存位置。下载的源码包和内核源码包都可以保存到这里。")],-1),Z=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/X11R6/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"图形界面系统保存位置。")],-1),$=t("tr",null,[t("td",{style:{"text-align":"center"}},"/usr/local/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"手工安装的软件保存位置。一般建议源码包软件安装在这个位置。")],-1),tt=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/"),t("td",{style:{"text-align":"center"}},"variable data"),t("td",{style:{"text-align":"left"}},"用于存储动态数据，例如缓存、日志文件、软件运行过程中产生的文件等。")],-1),et=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/cache/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"应用程序缓存数据。这些数据是在本地生成的一个耗时的 I/O 或计算结果。应用程序必须能够再生或恢复数据。缓存的文件可以被删除而不导致数据丢失。")],-1),lt=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/lib/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"状态信息。程序运行中需要调用或改变的数据保存位置。")],-1),nt=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/lock/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"锁文件，一类跟踪当前使用中资源的文件。")],-1),st=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/log/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},[e("登陆文件放置的目录，其中所包含比较重要的文件如 "),t("code",null,"/var/log/messages"),e("，"),t("code",null,"/var/log/wtmp"),e(" 等。")])],-1),dt=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/mail/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"用户的电子邮箱。")],-1),rt=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/run/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},[e("自最后一次启动以来运行中的系统的信息，例如：当前登录的用户和运行中的守护进程。现已经被 "),t("code",null,"/run"),e(" 代替。")])],-1),it=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/spool/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"等待处理的任务的脱机文件，例如：打印队列和未读的邮件。")],-1),at=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/spool/mail/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"用户的邮箱（不推荐的存储位置）。")],-1),ct=t("tr",null,[t("td",{style:{"text-align":"center"}},"/var/tmp/"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"left"}},"在系统重启过程中可以保留的临时文件。")],-1),ot=t("tr",null,[t("td",{style:{"text-align":"center"}},"/run/"),t("td",{style:{"text-align":"center"}},"run"),t("td",{style:{"text-align":"left"}},[e("代替 "),t("code",null,"/var/run"),e(" 目录。")])],-1),xt=i('<h2 id="非-fhs" tabindex="-1"><a class="header-anchor" href="#非-fhs" aria-hidden="true">#</a> 非 FHS</h2><table><thead><tr><th style="text-align:center;">缩写</th><th style="text-align:center;">全称</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">/lost+found/</td><td style="text-align:center;">lost + found</td><td>当系统意外崩溃或意外关机时，产生的一些文件碎片会存放在这里。</td></tr><tr><td style="text-align:center;">/sys/</td><td style="text-align:center;">system</td><td>虚拟文件系统。与 <code>/proc/</code> 目录类似（数据在内存中），主要用于保存与内核相关的信息，提供了比 <code>/proc/</code> 更为理想的访问内核数据的途径。</td></tr></tbody></table><h2 id="硬件设备" tabindex="-1"><a class="header-anchor" href="#硬件设备" aria-hidden="true">#</a> 硬件设备</h2>',3),yt=t("code",null,"/dev",-1),gt=i('<p>常见硬件设备文件名：</p><table><thead><tr><th style="text-align:center;">硬件设备</th><th style="text-align:center;">文件名称</th></tr></thead><tbody><tr><td style="text-align:center;">IDE设备</td><td style="text-align:center;">/dev/hd[a-d]，现在的 IDE设备已经很少见了，因此一般的硬盘设备会以 /dev/sd 开头。</td></tr><tr><td style="text-align:center;">SCSI/SATA/U盘</td><td style="text-align:center;">/dev/sd[a-p]，一台主机可以有多块硬盘，因此系统采用 a~p 代表 16 块不同的硬盘。</td></tr><tr><td style="text-align:center;">m.2 硬盘</td><td style="text-align:center;">/dev/nvme1n1p[1-9]</td></tr><tr><td style="text-align:center;">软驱</td><td style="text-align:center;">/dev/fd[0-1]</td></tr><tr><td style="text-align:center;">打印机</td><td style="text-align:center;">/dev/lp[0-15]</td></tr><tr><td style="text-align:center;">光驱</td><td style="text-align:center;">/dev/cdrom</td></tr><tr><td style="text-align:center;">鼠标</td><td style="text-align:center;">/dev/mouse</td></tr><tr><td style="text-align:center;">磁带机</td><td style="text-align:center;">/dev/st0 或 /dev/ht0</td></tr></tbody></table><p>特殊设备文件：</p><table><thead><tr><th>文件名</th><th>说明</th><th>作用</th></tr></thead><tbody><tr><td><code>/dev/null</code></td><td>它丢弃一切写入其中的数据（但报告写入操作成功），读取它则会立即得到一个 EOF。</td><td>通常被用于丢弃不需要的输出流，或作为输入流的空文件。</td></tr><tr><td><code>/dev/zero</code></td><td>当你读它的时候，他会提供无限的空字符串（NULL，0x00）。</td><td>通常被用于提供字符流来覆盖信息，或利用它生成一个特定大小的空白文件。</td></tr></tbody></table>',4);function ht(ut,_t){const n=d("ExternalLinkIcon"),s=d("RouterLink");return c(),o("div",null,[y,g,h,t("p",null,[e("为了方便管理和维护，Linux 采用了 "),t("a",u,[e("FHS（Filesystem Hierarchy Standard） 标准"),l(n)]),e("（文件系统层次结构标准），它规定了根目录下各个目录应该存在哪些类型的文件（目录也是文件）。")]),_,f,t("blockquote",null,[t("p",null,[e("如果仅仅靠联想，其实还是难以理解其中含义，如果见过真正的"),t("a",p,[e("小型机"),l(n)]),e("，很多概念就变得容易理解了。")])]),b,t("table",null,[v,t("tbody",null,[m,t("tr",null,[E,B,t("td",L,[e("系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub）文件等。该目录挂载在 "),k,e(" 对应的第一块硬盘下，硬盘名根据"),l(s,{to:"/os/linux/directory-structure.html#%E7%A1%AC%E4%BB%B6%E8%AE%BE%E5%A4%87"},{default:r(()=>[e("硬盘类型")]),_:1}),e("来生成。安装系统时，需要为其单独分一个 boot 分区，大小可为 256~1024MB。")])]),w,S,A,F,C,H,I,N,V,q,z,M,R,U,X,D,t("tr",null,[O,t("td",T,[t("a",G,[e("Unix Software Resource"),l(n)])]),Q]),j,J,K,P,W,Y,Z,$,tt,et,lt,nt,st,dt,rt,it,at,ct,ot])]),xt,t("p",null,[l(s,{to:"/os/linux/everything-is-a-file.html"},{default:r(()=>[e("Linux 中一切皆文件")]),_:1}),e("。硬件设备自然也是文件，有各自的文件名称。Linux 系统内核中的 udev 设备管理器会自动对硬件设备的名称进行规范，目的是让用户通过设备文件的名称，就可以猜测设备的属性及相关信息。udev 设备管理器会一直以进程的形式运行，并侦听系统内核发出的信号来管理位于 "),yt,e(" 目录下的设备文件。")]),gt])}const pt=a(x,[["render",ht],["__file","directory-structure.html.vue"]]);export{pt as default};
