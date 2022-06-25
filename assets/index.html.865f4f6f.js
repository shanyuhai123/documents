import{r as t,c as o,a as n,b as a,F as c,d as s,o as l}from"./app.909a0f8c.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";var r="/assets/firewall-config.5205d02f.png";const d={},_=n("h1",{id:"arch-\u795E\u6559",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arch-\u795E\u6559","aria-hidden":"true"},"#"),s(" Arch \u795E\u6559")],-1),h=n("blockquote",null,[n("p",null,[s("\u90E8\u5206\u57FA\u7840\u5185\u5BB9\u4F9D\u65E7\u5728 "),n("code",null,"manjaro"),s(" \u4E0B\uFF0C\u4E0D\u505A\u8FC1\u79FB\u3002")])],-1),p=s("\u5FEB\u5165 Arch \u795E\u6559\u5427\uFF01\u5FC5\u8BFB "),u={href:"https://wiki.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},f=s("WIKI"),m=n("h2",{id:"\u914D\u7F6E\u8F93\u5165\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u8F93\u5165\u6CD5","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u8F93\u5165\u6CD5")],-1),g=n("p",null,"\u5982\u679C\u6709 fcitx \u5219\u5148\u5378\u8F7D\uFF1A",-1),k=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(` pacman -Rsc fcitx
`)])])],-1),x=s("\u63A5\u7740\u5B89\u88C5 "),b={href:"https://wiki.archlinux.org/title/Fcitx5_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},v=s("fcitx5"),E=s("\uFF1A"),D=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# fcitx5-im \u5305\u7EC4\u63D0\u4F9B fcitx5 \u672C\u4F53\u3001\u914D\u7F6E\u5DE5\u5177\u548C\u5FC5\u8981\u7684\u8F93\u5165\u6CD5\u6A21\u5757"),s(`
`),n("span",{class:"token comment"},"# \u9ED8\u8BA4\u4EC5\u652F\u6301\u82F1\u6587\uFF0C\u5176\u4ED6\u8BED\u8A00\u5219\u8FD8\u9700\u8981\u5BF9\u5E94\u7684\u5F15\u64CE fcitx5-chinese-addons"),s(`
`),n("span",{class:"token function"},"sudo"),s(` pacman -S fcitx5-im fcitx5-chinese-addons 
`)])])],-1),L=n("p",null,"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5E76\u91CD\u65B0\u767B\u5165\uFF1A",-1),M=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# vim ~/.pam_environment"),s(`
GTK_IM_MODULE `),n("span",{class:"token assign-left variable"},"DEFAULT"),n("span",{class:"token operator"},"="),s(`fcitx
QT_IM_MODULE  `),n("span",{class:"token assign-left variable"},"DEFAULT"),n("span",{class:"token operator"},"="),s(`fcitx
`),n("span",{class:"token environment constant"},"XMODIFIERS"),s("    "),n("span",{class:"token assign-left variable"},"DEFAULT"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"\\"),s("@im"),n("span",{class:"token operator"},"="),s(`fcitx
SDL_IM_MODULE `),n("span",{class:"token assign-left variable"},"DEFAULT"),n("span",{class:"token operator"},"="),s(`fcitx
`),n("span",{class:"token comment"},"# vim ~/.xprofile"),s(`
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"QT_IM_MODULE"),n("span",{class:"token operator"},"="),s(`fcitx5v
`)])])],-1),A=n("p",null,"\u4E3B\u9898\u4E0E\u8BCD\u5E93\uFF1A",-1),F=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u76AE\u80A4"),s(`
fcitx5-material-color
`),n("span",{class:"token comment"},"# \u8BCD\u5E93"),s(`
`),n("span",{class:"token comment"},"# 1. \u5728\u62FC\u97F3\u4E2D\u542F\u7528\u4E91\u62FC\u97F3\u5E76\u4FEE\u6539\u540E\u7AEF\u4E3A baidu"),s(`
`),n("span",{class:"token comment"},"# 2. \u79BB\u7EBF\u8BCD\u5E93\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\u8BCD\u5178\u81EA\u52A8\u542F\u7528"),s(`
`),n("span",{class:"token function"},"sudo"),s(" pacman -S fcitx5-pinyin-zhwiki "),n("span",{class:"token comment"},"# 46.92 MiB"),s(`
yay -S fcitx5-pinyin-sougou `),n("span",{class:"token comment"},"# 183.87 MiB"),s(`
`)])])],-1),I=n("p",null,[s("\u5728 "),n("code",null,"Kernel: 5.18.6-arch1-1"),s("\u3001"),n("code",null,"DE: Plasma 5.25.1"),s(" \u7248\u672C\uFF0C\u8F93\u5165\u6CD5\u7684\u914D\u7F6E\u5728 "),n("code",null,"\u7CFB\u7EDF\u8BBE\u7F6E => \u533A\u57DF\u8BBE\u7F6E => \u8F93\u5165\u6CD5"),s(" \u4E0B\u53EF\u8FDB\u884C\u914D\u7F6E\u3002")],-1),T=n("h2",{id:"\u914D\u7F6E\u9632\u706B\u5899",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u9632\u706B\u5899","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u9632\u706B\u5899")],-1),U=n("p",null,[s("\u4F7F\u7528 "),n("code",null,"firewall-config"),s(" \u53EF\u89C6\u5316\u914D\u7F6E\u9632\u706B\u5899\u3002")],-1),B=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(` firewall-config
`)])])],-1),O=n("p",null,[n("img",{src:r,alt:"\u914D\u7F6E\u9632\u706B\u5899"})],-1),w=n("p",null,[s("\u4EE5\u653E\u884C "),n("strong",null,[n("code",null,"KDE Connect")]),s(" \u670D\u52A1\u4E3A\u793A\u4F8B\uFF1A")],-1),S=n("ol",null,[n("li",null,"\u914D\u7F6E\u5207\u6362\u5230 \u201C\u6C38\u4E45\u201D"),n("li",null,[s("\u5728\u53F3\u4E0B\u89D2\u7684 \u201C\u670D\u52A1\u201D \u4E2D\u627E\u5230 "),n("code",null,"kdeconnect"),s("\uFF0C\u52FE\u9009\u5373\u53EF")]),n("li",null,"\u5728\u5DE6\u4E0A\u89D2 \u201C\u9009\u9879\u201D \u4E2D\u91CD\u8F7D\u9632\u706B\u5899")],-1),y=n("h2",{id:"\u5728\u7528\u7684\u5C0F\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5728\u7528\u7684\u5C0F\u5DE5\u5177","aria-hidden":"true"},"#"),s(" \u5728\u7528\u7684\u5C0F\u5DE5\u5177")],-1),K=s("\u4F7F\u7528 "),j={href:"https://github.com/aristocratos/btop",target:"_blank",rel:"noopener noreferrer"},N=s("btop"),V=s(" \u66FF\u4EE3 top");function C(Q,R){const e=t("OutboundLink");return l(),o(c,null,[_,h,n("p",null,[p,n("a",u,[f,a(e)])]),m,g,k,n("p",null,[x,n("a",b,[v,a(e)]),E]),D,L,M,A,F,I,T,U,B,O,w,S,y,n("ul",null,[n("li",null,[K,n("a",j,[N,a(e)]),V])])],64)}var G=i(d,[["render",C]]);export{G as default};
