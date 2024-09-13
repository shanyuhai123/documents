import{_ as d,M as o,p,q as u,R as n,t,N as s,V as l,a1 as a}from"./framework-e3e34937.js";const g={},m={href:"https://www.bilibili.com/video/BV1Vh411a7SS/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/shanyuhai123/docker-aseprite-linux",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gitee.com/shanyuhai123/docker-aseprite-linux",target:"_blank",rel:"noopener noreferrer"},f={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1333477949",target:"_blank",rel:"noopener noreferrer"};function b(h,e){const i=o("ExternalLinkIcon"),r=o("RouterLink");return p(),u("div",null,[e[20]||(e[20]=n("h1",{id:"在-linux-下安装-aseprite",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-linux-下安装-aseprite","aria-hidden":"true"},"#"),t(" 在 Linux 下安装 Aseprite")],-1)),n("blockquote",null,[e[1]||(e[1]=n("p",null,[t("由于使用 "),n("code",null,"yay"),t(" 安装失败，于是另辟蹊径")],-1)),n("p",null,[n("a",m,[e[0]||(e[0]=t("视频版")),s(i)])])]),e[21]||(e[21]=n("h2",{id:"环境准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),t(" 环境准备")],-1)),n("p",null,[e[4]||(e[4]=t("虽然也可以本地安装依赖编译，但为了避免对现有的环境造成影响，选择了 Docker，需要准备好 ")),s(r,{to:"/backend/docker/init.html"},{default:l(()=>e[2]||(e[2]=[t("Docker")])),_:1}),e[5]||(e[5]=t(" 及 ")),s(r,{to:"/backend/docker/compose.html"},{default:l(()=>e[3]||(e[3]=[t("Docker Compose")])),_:1}),e[6]||(e[6]=t(" 环境。"))]),e[22]||(e[22]=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1)),n("p",null,[e[8]||(e[8]=t("如果你可以访问 ")),n("a",k,[e[7]||(e[7]=t("Github")),s(i)]),e[9]||(e[9]=t("："))]),e[23]||(e[23]=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># clone</span>
<span class="token function">git</span> clone git@github.com:shanyuhai123/docker-aseprite-linux.git

<span class="token comment"># 编译</span>
<span class="token builtin class-name">cd</span> docker-aseprite-linux
<span class="token function">docker-compose</span> build
<span class="token function">docker-compose</span> up
</code></pre></div>`,1)),n("p",null,[e[11]||(e[11]=t("缺乏网络代理的情况下可用 ")),n("a",x,[e[10]||(e[10]=t("Gitee")),s(i)]),e[12]||(e[12]=t("："))]),e[24]||(e[24]=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`https://gitee.com/shanyuhai123/docker-aseprite-linux.git
`)])],-1)),e[25]||(e[25]=n("p",null,[t("安装完成后执行 "),n("code",null,"docker-aseprite-linux/output/aseprite/build/bin/aseprite"),t(" 即可启动。")],-1)),e[26]||(e[26]=n("h2",{id:"汉化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#汉化","aria-hidden":"true"},"#"),t(" 汉化")],-1)),n("p",null,[e[14]||(e[14]=t("已从 ")),n("a",f,[e[13]||(e[13]=t("Aseprite汉化及界面调整教程")),s(i)]),e[15]||(e[15]=t(" 下载并修改部分配置，即 ")),e[16]||(e[16]=n("code",null,"dependencies",-1)),e[17]||(e[17]=t(" 中 ")),e[18]||(e[18]=n("code",null,".aseprite-extension",-1)),e[19]||(e[19]=t(" 后缀的文件。"))]),e[27]||(e[27]=a('<h3 id="设置-language-和-theme" tabindex="-1"><a class="header-anchor" href="#设置-language-和-theme" aria-hidden="true">#</a> 设置 Language 和 Theme</h3><ol><li>打开 Aseprite，点击菜单栏 Edit =&gt; Preferences</li><li>在 Preferences 窗口点击左侧的 Extensions =&gt; Add Extension</li><li>弹出文件选择框，依次选择 <code>hanhua-1.2.23.aseprite-extension</code> 和 <code>zhuti-xiangsu.aseprite-extension</code> 文件</li><li>在 Preferences 窗口点击左侧的 General =&gt; Language =&gt; zh</li><li>在 Preferences 窗口点击左侧的 Theme =&gt; aseprite.theme.pixel</li></ol><p>以上修改记得 Apply =&gt; OK</p>',3))])}const L=d(g,[["render",b],["__file","install-aseprite-on-linux.html.vue"]]);export{L as default};
