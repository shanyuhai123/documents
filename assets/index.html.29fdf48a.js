import{r as n,o as l,c as r,a as e,w as a,F as t,b as o}from"./app.f329c6d2.js";const u={},i=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"注意事项"),e("ol",null,[e("li",null,"虚拟机的桥接网卡需要根据宿主机进行替换，若宿主使用了 WIFI 时，虚拟机也需记得替换对应的桥接网卡。")])],-1),s=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),o(" 介绍")],-1),h=e("p",null,"很多时候直接使用物理机安装 Linux 并不是一个明智的选择，因为你可能频繁的出错，导致频繁的重装系统，可以利用虚拟机打上快照来步步操作，学习 Linux 的使用。",-1),d=o("Manjaro 的安装"),c=o(" 🍪"),f=o("CentOS 的安装"),m=o(" 🐯"),p=e("h2",{id:"环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境","aria-hidden":"true"},"#"),o(" 环境")],-1),b=e("p",null,"关于 Linux 的介绍主要是基于以下环境：",-1),x=o("Manjaro"),_=o("：滚动更新；"),g=e("li",null,"Ubuntu18.04；",-1),j=o("CentOS7-1810"),k=o("。"),v=e("h2",{id:"镜像源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#镜像源","aria-hidden":"true"},"#"),o(" 镜像源")],-1),L={href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"},w=o("清华源"),O={href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},C=o("中科大源"),F={href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"},M=o("阿里云"),S=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),o(" 参考资料")],-1),y={href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/",target:"_blank",rel:"noopener noreferrer"},I=o("Red Hat CentOS 7"),R=o(),U=e("li",null,"《Linux 入门很简单》",-1),B=e("li",null,"《Ubuntu 标准教程》",-1),H=e("li",null,"《老男孩：核心基础》",-1),W={href:"https://forum.manjaro.org/",target:"_blank",rel:"noopener noreferrer"},q=o("Manjaro Forum"),z=e("p",null,"还有一些很早以前看过的书未记录。",-1);u.render=function(o,u){const A=n("RouterLink"),D=n("OutboundLink"),E=n("Badge");return l(),r(t,null,[i,s,h,e("ol",null,[e("li",null,[e(A,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html"},{default:a((()=>[d])),_:1}),c]),e("li",null,[e(A,{to:"/os/centos/how-to-install-centos-on-virtualbox.html"},{default:a((()=>[f])),_:1}),m])]),p,b,e("ul",null,[e("li",null,[e(A,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html"},{default:a((()=>[x])),_:1}),_]),g,e("li",null,[e(A,{to:"/os/centos/how-to-install-centos-on-virtualbox.html"},{default:a((()=>[j])),_:1}),k])]),v,e("ol",null,[e("li",null,[e("a",L,[w,e(D)])]),e("li",null,[e("a",O,[C,e(D)])]),e("li",null,[e("a",F,[M,e(D)])])]),S,e("ol",null,[e("li",null,[e("a",y,[I,e(D)]),R,e(E,{text:"核心",type:"error"})]),U,B,H,e("li",null,[e("a",W,[q,e(D)])])]),z],64)};export default u;
