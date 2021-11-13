import{r as l,c,a as n,b as s,w as o,F as h,d as e,e as i,o as d}from"./app.e62aeb11.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const u={},_=n("h1",{id:"\u5FEB\u901F\u4E0A\u624B-centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B-centos","aria-hidden":"true"},"#"),e(" \u5FEB\u901F\u4E0A\u624B CentOS")],-1),m=e("\u5982\u679C\u662F\u65B0\u624B\uFF0C\u90A3\u4E48\u4E0D\u59A8\u5148\u4ECE\u865A\u62DF\u673A\u5F00\u59CB\uFF0C\u6B64\u5904\u9009\u7528 "),f={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},g=e("VirtualBox"),b=e("\u3002"),k=e("\u63A5\u7740\u9700\u8981\u51C6\u5907\u597D CentOS \u7684 ISO \u6587\u4EF6\uFF0C\u6B64\u5904\u9009\u7528 "),x={href:"https://mirrors.tuna.tsinghua.edu.cn/centos/7.6.1810/isos/x86_64/",target:"_blank",rel:"noopener noreferrer"},S=e("CentOS7-1810"),O=e(" \u7248\u672C\u3002"),E=e("\u865A\u62DF\u673A\u4E2D\u52A0\u8F7D\u955C\u50CF\u5927\u540C\u5C0F\u5F02\uFF0C\u53EF\u53C2\u8003"),A=e("\u52A0\u8F7D manjaro"),C=e(" \u3002"),y=n("h2",{id:"\u5728\u865A\u62DF\u673A\u4E2D\u5B89\u88C5-centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5728\u865A\u62DF\u673A\u4E2D\u5B89\u88C5-centos","aria-hidden":"true"},"#"),e(" \u5728\u865A\u62DF\u673A\u4E2D\u5B89\u88C5 CentOS")],-1),v=n("p",null,"\u542F\u52A8\u540E\u4F1A\u8FDB\u5165\u5B89\u88C5\u754C\u9762\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u51E0\u4E2A\u9009\u9879\uFF1A",-1),T=n("ul",null,[n("li",null,"Install CentOS 7"),n("li",null,"Test this media & install CentOS 7"),n("li",null,"Troubleshooting\uFF08\u6392\u9664\u6545\u969C\uFF09"),n("li",null,"Press Tab for full configuration options on menu items")],-1),I=e("\u4E00\u822C\u76F4\u63A5\u9009\u4E2D Install \u5373\u53EF\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u6309\u4E0B Tab \u952E\u8FDB\u884C\u989D\u5916 "),w=e("\u914D\u7F6E"),B=e("\u3002"),N=i('<h3 id="_1-localization" tabindex="-1"><a class="header-anchor" href="#_1-localization" aria-hidden="true">#</a> 1. LOCALIZATION</h3><ul><li>DATE &amp; TIME\uFF1A\u4FEE\u6539\u4E3A Asia Shanghai\uFF1B</li><li>KEYBOARD\uFF1A\u9ED8\u8BA4\u5373\u53EF\uFF1B</li><li>LANGUAGE SUPPORT\uFF1A\u9ED8\u8BA4\u5373\u53EF\u3002</li></ul><h3 id="_2-software" tabindex="-1"><a class="header-anchor" href="#_2-software" aria-hidden="true">#</a> 2. SOFTWARE</h3><ul><li>INSTALLATION SOURCE\uFF1A\u65E0\u9700\u6539\u52A8\uFF1B</li><li>SOFTWARE SELECTION\uFF1AMinimal Install <ul><li>[x] Debugging Tools\uFF08\u8C03\u8BD5\u5DE5\u5177\uFF09</li><li>[x] Compatibility Libraries\uFF08\u517C\u5BB9\u5E93\uFF09</li><li>[x] Development Tools\uFF08\u5F00\u53D1\u5DE5\u5177\uFF09</li><li>[x] System Administration Tools\uFF08\u7BA1\u7406\u5458\u5DE5\u5177\uFF09</li></ul></li></ul><h3 id="_3-system" tabindex="-1"><a class="header-anchor" href="#_3-system" aria-hidden="true">#</a> 3. SYSTEM</h3>',5),D=n("p",null,[e("INSTALLATION DESTINATION\uFF1A\u9009\u62E9 "),n("code",null,"I will configure partitioning"),e("\u3002")],-1),L=n("p",null,"\u9ED8\u8BA4\u9009\u9879\u662F LVM\uFF08\u903B\u8F91\u5377\u7BA1\u7406\uFF0C\u52A8\u6001\u5206\u914D\u4E3B\u673A\u78C1\u76D8\u5927\u5C0F\uFF09\uFF0C\u8F6F\u4EF6\u5B9E\u73B0\u7684\u52A8\u6001\u8C03\u6574\uFF0C\u5728\u9AD8\u5E76\u53D1\u72B6\u6001\u4F1A\u5BFC\u81F4\u78C1\u76D8\u6027\u80FD\u4E0B\u964D\uFF08\u7591\u95EE\u53E5\uFF1F\u6309\u6211\u6240\u60F3\u5176\u529F\u80FD\u7C7B\u4F3C RAID0 \u5E94\u8BE5\u4E0D\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u624D\u5BF9\u3002\uFF09;\u3002\u5C06\u5176\u4FEE\u6539\u4E3A Standard Partition\u3002",-1),j=e("\u5206\u533A\u53EF\u53C2\u8003 "),M=e("Manjaro"),R=e(" \u7684\u624B\u52A8\u5206\u533A\u6765\uFF0C\u4E0D\u8FC7 Manjaro \u662F\u684C\u9762\u73AF\u5883\u4F1A\u5B58\u5728\u4E00\u4E9B\u533A\u522B\u3002"),P=n("li",null,[n("p",null,"KDUMP\uFF1A\u5B66\u4E60\u65F6\u53EF\u5173\u95ED\uFF1B")],-1),F=n("p",null,"NETWORK & HOST NAME\uFF1A\u53EF\u5728\u6B64\u5904\u67E5\u770B\u5230\u4E4B\u524D tab \u4FEE\u6539\u7684\u7F51\u5361\u547D\u540D\u662F\u5426\u751F\u6548\u4E86\uFF0CHost name \u6539\u4E3A\u559C\u6B22\u7684\u540D\u5B57\u5373\u53EF\u3002",-1),U=e("\u4FEE\u6539\u5B8C Host name\uFF0C\u63A5\u7740\u70B9\u51FB Configure \u8FDB\u884C\u914D\u7F6E "),V=e("\uFF1A"),z=n("li",null,"General\uFF1A\u542F\u7528 Automatically connect\uFF1B",-1),G=e("IPv4 Settings\uFF1AMethod \u4FEE\u6539\u4E3A Manual\uFF0C\u70B9\u51FB Add \u6DFB\u52A0"),H={href:"https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"},Y=e("\u79C1\u6709\u7F51\u7EDC"),K=e("\uFF0C\u914D\u7F6E\u5BF9\u5E94\u7684 Address\u3001Netmask\u3001Gateway\u3001DNS\u3002\u5982\u679C\u4F60\u5BF9\u6B64\u4E0D\u4E86\u89E3\uFF0C\u53EF\u4EE5\u8FD8\u539F\u4E3A\u9ED8\u8BA4\u914D\u7F6E\uFF08Automatic DHCP\uFF09\uFF0C\u81EA\u52A8\u5206\u914D\u4E00\u4E2A IP \u5730\u5740\u7ED9\u4F60\u3002"),W=n("p",null,"\u542F\u7528 OFF \u6539\u4E3A ON \u5373\u53EF\u3002",-1),q=n("li",null,[n("p",null,"SECURITY POLICY\uFF1A\u6682\u65F6\u9ED8\u8BA4\u3002")],-1),X=n("p",null,"\u63A5\u7740\u70B9\u51FB\u540C\u610F\uFF0C\u5F00\u59CB\u5B89\u88C5\u5373\u53EF\u3002\u5728\u5B89\u88C5\u671F\u95F4\u53EF\u4EE5\u914D\u7F6E root \u5BC6\u7801\uFF0C\u53CA\u521B\u5EFA\u65B0\u7684\u7528\u6237\u8D26\u53F7\u53CA\u5BC6\u7801\u3002 \u6700\u540E\u91CD\u542F\u5373\u53EF\u6210\u529F\u3002",-1),Z=n("h2",{id:"\u521D\u59CB\u5316-centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521D\u59CB\u5316-centos","aria-hidden":"true"},"#"),e(" \u521D\u59CB\u5316 CentOS")],-1),J=n("h3",{id:"\u66F4\u65B0\u6E90",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u66F4\u65B0\u6E90","aria-hidden":"true"},"#"),e(" \u66F4\u65B0\u6E90")],-1),Q=e("CentOS \u5B89\u88C5\u5B8C\u6BD5\uFF0C\u9996\u5148\u5E94\u8BE5\u4FEE\u6539\u6E90\uFF0C\u5E76\u66F4\u65B0\u5230\u6700\u65B0\u7684\u7CFB\u7EDF\u3002\u6B64\u5904\u9009\u7528\u963F\u91CC\u4E91\u7684\u6E90\uFF0C"),$={href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"},nn=e("\u6E05\u534E\u6E90"),en=e("\uFF0C"),sn={href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},tn=e("\u4E2D\u79D1\u5927\u6E90"),an=e("\u4E5F\u53EF\u3002"),on=i(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u5DE5\u5177 wget \u6216\u8005 curl</span>
yum <span class="token function">install</span> <span class="token function">wget</span> -y

<span class="token comment"># \u5907\u4EFD\u6E90</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

<span class="token comment"># \u4E0B\u8F7D\u963F\u91CC\u4E91\u6E90</span>
<span class="token function">curl</span> -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
<span class="token function">curl</span> -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

<span class="token comment"># \u6E05\u7406\u3001\u751F\u6210\u7F13\u5B58</span>
yum clean cache
yum makecache
</code></pre></div><h3 id="\u66F4\u65B0\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u7CFB\u7EDF" aria-hidden="true">#</a> \u66F4\u65B0\u7CFB\u7EDF</h3><p>\u66F4\u6362\u6E90\u4E4B\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u56FD\u5185\u7684\u955C\u50CF\u4E86\uFF0C\u5426\u5219\u4E0B\u8F7D\u901F\u5EA6\u592A\u6162\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum update -y
</code></pre></div><h3 id="\u5E38\u7528\u5305\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5305\u7EC4" aria-hidden="true">#</a> \u5E38\u7528\u5305\u7EC4</h3><p>\u4E00\u822C\u5728\u5B89\u88C5\u7CFB\u7EDF\u65F6\u9700\u8981\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u7EC4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">groups</span> mark convert

<span class="token comment"># \u67E5\u770B\u6240\u6709\u5305\u7EC4\u540D\u79F0</span>
yum grouplist

<span class="token comment"># \u5982\u679C\u7F3A\u4E4F\u90E8\u5206\u5305\u7EC4\uFF0C\u6307\u5B9A\u8BE5\u5305\u7EC4</span>
yum groupinstall <span class="token string">&quot;Cinnamon&quot;</span> -y
</code></pre></div><h3 id="\u5E38\u7528\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177</h3><p>\u66F4\u65B0\u5B8C\u7CFB\u7EDF\u540E\u8FD8\u9700\u8981\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\uFF0C\u4F7F\u7528 Ubuntu Server \u7684\u65F6\u5019\u540C\u6837\u9700\u8981\u5B89\u88C5\uFF0C\u53EA\u4E0D\u8FC7\u6307\u4EE4\u6362\u4E3A <code>apt install</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> tree nmap dos2unix lrzsz <span class="token function">nc</span> <span class="token function">lsof</span> <span class="token function">wget</span> tcpdump <span class="token function">htop</span> iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y
</code></pre></div><h2 id="\u4FEE\u6539-centos-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-centos-\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539 CentOS \u914D\u7F6E</h2><h3 id="_1-\u7F51\u5361\u540D-ethx" tabindex="-1"><a class="header-anchor" href="#_1-\u7F51\u5361\u540D-ethx" aria-hidden="true">#</a> 1. \u7F51\u5361\u540D ethX</h3><p>CentOS7 \u4E4B\u524D\u7684 ethX \u6570\u5B57\u7F16\u53F7\u7684\u7F51\u5361\u547D\u540D\u5F80\u5F80\u4E0D\u4E00\u5B9A\u51C6\u786E\u5BF9\u5E94\u7F51\u5361\u63A5\u53E3\uFF0C\u6240\u4EE5 CentOS7 \uFF08enps\uFF09\u5C31\u89E3\u51B3\u4E86\u8BE5\u95EE\u9898\uFF0C\u4E0D\u8FC7\u8FD9\u4F1A\u5F71\u54CD\u4EE5\u5F80\u7684\u4E60\u60EF\uFF0C\u6240\u4EE5\u8FD8\u53EF\u4EE5\u5C06\u547D\u540D\u6539\u56DE\u6765\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u5F62\u5F0F\u8FDB\u884C\u4FEE\u6539\uFF1A</p>`,14),ln=i(`<li><p>\u5F62\u5F0F\u4E00\uFF0C\u9700\u8981\u5728\u5B89\u88C5\u7CFB\u7EDF\u65F6\uFF0C\u5149\u6807\u79FB\u81F3 Install CentOS 7 \u4E0A\uFF0C\u6309\u4E0B tab \u540E\u8FFD\u52A0\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9700\u8981\u6CE8\u610F\u548C\u4E4B\u524D\u7684\u5185\u5BB9\u6709\u4E00\u4E2A\u7A7A\u683C</span>
net.ifnames<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">biosdevname</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre></div></li>`,1),rn=e("\u5F62\u5F0F\u4E8C"),cn=e("\u3002");function hn(dn,pn){const t=l("OutboundLink"),a=l("RouterLink"),r=l("Badge");return d(),c(h,null,[_,n("p",null,[m,n("a",f,[g,s(t)]),b]),n("p",null,[k,n("a",x,[S,s(t)]),O]),n("p",null,[E,s(a,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#%E8%99%9A%E6%8B%9F%E6%9C%BA%E4%B8%AD%E5%8A%A0%E8%BD%BD-manjaro"},{default:o(()=>[A]),_:1}),C]),y,v,T,n("p",null,[I,s(a,{to:"/os/centos/how-to-install-centos-on-virtualbox.html#%E9%85%8D%E7%BD%AE"},{default:o(()=>[w]),_:1}),B]),N,n("ul",null,[n("li",null,[D,L,n("p",null,[j,s(a,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#%E5%AE%89%E8%A3%85-manjaro"},{default:o(()=>[M]),_:1}),R])]),P,n("li",null,[F,n("p",null,[U,s(r,{text:"\u52FF\u5FD8",type:"error"}),V]),n("ol",null,[z,n("li",null,[G,n("a",H,[Y,s(t)]),K])]),W]),q]),X,Z,J,n("p",null,[Q,n("a",$,[nn,s(t)]),en,n("a",sn,[tn,s(t)]),an]),on,n("ol",null,[ln,n("li",null,[n("p",null,[s(a,{to:"/os/centos/modify-the-network-named-eth.html"},{default:o(()=>[rn]),_:1}),cn])])])],64)}var mn=p(u,[["render",hn]]);export{mn as default};
