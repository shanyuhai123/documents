(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{565:function(t,a,e){"use strict";e.r(a);var s=e(33),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),e("p",[t._v("首先需要安装虚拟机，此处选用 "),e("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualBox"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("接着需要准备好 CentOS 的 ISO 文件，此处选用 "),e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/centos/7.6.1810/isos/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS7-1810"),e("OutboundLink")],1),t._v(" 版本。")]),t._v(" "),e("p",[t._v("这个其实与之前安装 Ubuntu 时区别不大。")]),t._v(" "),e("h2",{attrs:{id:"虚拟机中加载-centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机中加载-centos"}},[t._v("#")]),t._v(" 虚拟机中加载 CentOS")]),t._v(" "),e("p",[t._v("该步骤与 "),e("RouterLink",{attrs:{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#虚拟机中加载-manjaro"}},[t._v("加载 manjaro")]),t._v(" 步骤基本一致，此处不多做概述。")],1),t._v(" "),e("h2",{attrs:{id:"安装-centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-centos"}},[t._v("#")]),t._v(" 安装 CentOS")]),t._v(" "),e("p",[t._v("启动后会进入安装界面，并出现以下几个选项：")]),t._v(" "),e("ul",[e("li",[t._v("Install CentOS 7")]),t._v(" "),e("li",[t._v("Test this media & install CentOS 7")]),t._v(" "),e("li",[t._v("Troubleshooting（排除故障）")]),t._v(" "),e("li",[t._v("Press Tab for full configuration options on menu items")])]),t._v(" "),e("p",[t._v("一般直接选中 Install 即可，当然你也可以按下 Tab 键进行额外 "),e("RouterLink",{attrs:{to:"/os/centos/how-to-install-centos-on-virtualbox.html#配置"}},[t._v("配置")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"_1-localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-localization"}},[t._v("#")]),t._v(" 1. LOCALIZATION")]),t._v(" "),e("ul",[e("li",[t._v("DATE & TIME：修改为 Asia Shanghai；")]),t._v(" "),e("li",[t._v("KEYBOARD：默认即可；")]),t._v(" "),e("li",[t._v("LANGUAGE SUPPORT：默认即可。")])]),t._v(" "),e("h3",{attrs:{id:"_2-software"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-software"}},[t._v("#")]),t._v(" 2. SOFTWARE")]),t._v(" "),e("ul",[e("li",[t._v("INSTALLATION SOURCE：无需改动；")]),t._v(" "),e("li",[t._v("SOFTWARE SELECTION：Minimal Install\n"),e("ul",[e("li",[t._v("[x] Debugging Tools（调试工具）")]),t._v(" "),e("li",[t._v("[x] Compatibility Libraries（兼容库）")]),t._v(" "),e("li",[t._v("[x] Development Tools（开发工具）")]),t._v(" "),e("li",[t._v("[x] System Administration Tools（管理员工具）")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-system"}},[t._v("#")]),t._v(" 3. SYSTEM")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("INSTALLATION DESTINATION：选择 "),e("code",[t._v("I will configure partitioning")]),t._v("。")]),t._v(" "),e("p",[t._v("默认选项是 LVM（逻辑卷管理，动态分配主机磁盘大小），软件实现的动态调整，在高并发状态会导致磁盘性能下降（疑问句？按我所想其功能类似 RAID0 应该不会导致性能下降才对。）;。将其修改为 Standard Partition。")]),t._v(" "),e("p",[t._v("分区可参考 "),e("RouterLink",{attrs:{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#安装-manjaro"}},[t._v("Manjaro")]),t._v(" 的手动分区来，不过 Manjaro 是桌面环境会存在一些区别。")],1)]),t._v(" "),e("li",[e("p",[t._v("KDUMP：学习时可关闭；")])]),t._v(" "),e("li",[e("p",[t._v("NETWORK & HOST NAME：可在此处查看到之前 tab 修改的网卡命名是否生效了，Host name 改为喜欢的名字即可。")]),t._v(" "),e("p",[t._v("修改完 Host name，接着点击 Configure 进行配置 "),e("Badge",{attrs:{text:"勿忘",type:"error"}}),t._v("：")],1),t._v(" "),e("ol",[e("li",[t._v("General：启用 Automatically connect；")]),t._v(" "),e("li",[t._v("IPv4 Settings：Method 修改为 Manual，点击 Add 添加"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("私有网络"),e("OutboundLink")],1),t._v("，配置对应的 Address、Netmask、Gateway、DNS。如果你对此不了解，可以还原为默认配置（Automatic DHCP），自动分配一个 IP 地址给你。")])]),t._v(" "),e("p",[t._v("启用 OFF 改为 ON 即可。")])]),t._v(" "),e("li",[e("p",[t._v("SECURITY POLICY：暂时默认。")])])]),t._v(" "),e("p",[t._v("接着点击同意，开始安装即可。在安装期间可以配置 root 密码，及创建新的用户账号及密码。\n最后重启即可成功。")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("h3",{attrs:{id:"_1-ethx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ethx"}},[t._v("#")]),t._v(" 1. ethX")]),t._v(" "),e("p",[t._v("CentOS7 之前的 ethX 数字编号的网卡命名往往不一定准确对应网卡接口，所以 CentOS7 （enps）就解决了该问题，不过这会影响以往的习惯，所以还可以将命名改回来。")]),t._v(" "),e("p",[t._v("可以通过两种形式进行修改：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("形式一，需要在安装系统时，光标移至 Install CentOS 7 上，按下 tab 后追加：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要注意和之前的内容有一个空格")]),t._v("\nnet.ifnames"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("biosdevname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"/os/centos/modify-the-network-named-eth"}},[t._v("形式二")]),t._v("。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);