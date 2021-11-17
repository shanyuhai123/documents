import{r as t,c as o,a as e,b as s,F as c,d as n,e as d,o as r}from"./app.8db4efad.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";var l="/os/manjaro/screen-flashing-when-recording.png";const h={},_=e("h1",{id:"manjaro-\u7684\u5F02\u5E38\u5904\u7406",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#manjaro-\u7684\u5F02\u5E38\u5904\u7406","aria-hidden":"true"},"#"),n(" Manjaro \u7684\u5F02\u5E38\u5904\u7406")],-1),u=e("h2",{id:"\u89E3\u51B3-manjaro-\u5F55\u5C4F\u95EA\u70C1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u89E3\u51B3-manjaro-\u5F55\u5C4F\u95EA\u70C1","aria-hidden":"true"},"#"),n(" \u89E3\u51B3 Manjaro \u5F55\u5C4F\u95EA\u70C1")],-1),p=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),m=e("p",null,"\u5728\u4F7F\u7528 Manjaro \u5F55\u5C4F\u540E\uFF0C\u53D1\u73B0\u5F55\u5236\u51FA\u6765\u7684\u5C4F\u5E55\u7ECF\u5E38\u95EA\u70C1\uFF0C\u90E8\u5206\u753B\u9762\u9057\u5931\u3002",-1),b=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),x=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u6B65\u9AA4"),e("p",null,[e("code",null,"\u7CFB\u7EDF\u8BBE\u7F6E"),n(" > "),e("code",null,"\u786C\u4EF6"),n(" > "),e("code",null,"\u663E\u793A\u548C\u76D1\u63A7"),n(" > "),e("code",null,"\u6DF7\u6210\u5668"),n(" > "),e("code",null,"\u907F\u514D\u6495\u88C2(\u5782\u76F4\u540C\u6B65)"),n(" > "),e("code",null,"\u4ECE\u4E0D")])],-1),g=e("p",null,[e("img",{src:l,alt:"\u5F55\u5C4F\u95EA\u70C1"})],-1),f=e("h2",{id:"\u7981\u7528\u7B14\u8BB0\u672C\u952E\u76D8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7981\u7528\u7B14\u8BB0\u672C\u952E\u76D8","aria-hidden":"true"},"#"),n(" \u7981\u7528\u7B14\u8BB0\u672C\u952E\u76D8")],-1),k=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5-1","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),v=e("p",null,"\u4E4B\u524D\u952E\u76D8\u8FDB\u8FC7\u6C34\u5BFC\u81F4\u4F1A\u542F\u7528\u6309\u952E\u5931\u7075\uFF0C\u6240\u4EE5\u9700\u8981\u7981\u7528\u81EA\u5E26\u7684\u952E\u76D8\u3002",-1),j=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848-1","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),y=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u521D\u7EA7\u65B9\u6848"),e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# manjaro \u4E0B xinput \u88AB xorg-xinput \u66FF\u4EE3"),n(`
`),e("span",{class:"token function"},"sudo"),n(` pacman -S xorg-xinput
`),e("span",{class:"token comment"},"# \u67E5\u770B\u8BBE\u5907\u5217\u8868"),n(`
xinput list
`),e("span",{class:"token comment"},"# \u67E5\u770B\u7B14\u8BB0\u672C\u952E\u76D8\u4FE1\u606F "),n(`
xinput list-props `),e("span",{class:"token string"},"'AT Translated Set 2 keyboard'"),n(`
`),e("span",{class:"token comment"},"# Device Enabled (147): 1 =\u300B `1` \u8868\u793A\u7EF4\u7981\u7528"),n(`
xinput set-prop `),e("span",{class:"token number"},"17"),n(),e("span",{class:"token string"},"'Device Enabled'"),n(),e("span",{class:"token number"},"0"),n(`
`),e("span",{class:"token comment"},"# \u518D\u6B21\u67E5\u770B\u8BBE\u5907\u4FE1\u606F\u5373\u53EF"),n(`
`)])])])],-1),q=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"\u7EC8\u6781\u65B9\u6848"),e("p",null,[e("code",null,"\u5173\u7535\u6E90"),n(" > "),e("code",null,"\u6253\u5F00\u540E\u76D6"),n(" > "),e("code",null,"\u62C6\u9664\u7B14\u8BB0\u672C\u952E\u76D8\u6392\u7EBF")])],-1),B=e("h2",{id:"\u4FEE\u590D\u6587\u4EF6\u5939\u540D\u4E3A\u82F1\u6587",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4FEE\u590D\u6587\u4EF6\u5939\u540D\u4E3A\u82F1\u6587","aria-hidden":"true"},"#"),n(" \u4FEE\u590D\u6587\u4EF6\u5939\u540D\u4E3A\u82F1\u6587")],-1),M=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5-2","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),N=e("p",null,"\u5C06\u7CFB\u7EDF\u8BBE\u7F6E\u4E3A\u4E2D\u6587\u540E\uFF0C\u7528\u6237\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5939\u4E5F\u968F\u4E4B\u53D8\u4E3A\u4E2D\u6587\uFF0C\u5728\u65E5\u5E38\u4F7F\u7528\u65F6\u5C31\u4F1A\u9020\u6210\u9891\u7E41\u5207\u6362\u8F93\u5165\u8FD9\u5C31\u8BA9\u4EBA\u5F88\u70E6\u4E86\u3002\u800C\u76F4\u63A5\u91CD\u547D\u540D\u4F1A\u5BFC\u81F4\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898\u3002",-1),V=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848-2","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),E=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u521D\u7EA7\u65B9\u6848"),e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 1. \u627E\u5230 `\uFF5E/.config/user-dirs.dis` \u6587\u4EF6"),n(`
`),e("span",{class:"token function"},"vim"),n(` ~/.config/user-dirs.dirs 
`),e("span",{class:"token comment"},"# 2. \u63A5\u7740\u5C06\u4E2D\u6587\u547D\u540D\u4FEE\u6539\u4E3A\u65B0\u6539\u7684\u82F1\u6587\uFF0C\u5E76\u4F7F\u5176\u751F\u6548"),n(`
`),e("span",{class:"token builtin class-name"},"source"),n(` ~/.config/user-dirs.dirs
`),e("span",{class:"token comment"},"# 3. \u7136\u800C\u8FD9\u5E76\u6CA1\u6709\u7ED3\u675F\uFF0C\u4F60\u8FD8\u9700\u8981\u4FEE\u6539\u53F3\u4FA7\u56FE\u6807\u7684\u4F4D\u7F6E"),n(`
\u53F3\u952E `),e("span",{class:"token operator"},">"),n(" \u7F16\u8F91 "),e("span",{class:"token operator"},">"),n(` \u4F4D\u7F6E
`)])])])],-1),S=e("h2",{id:"\u5C4F\u5E55\u65F6\u4E0D\u65F6\u5361\u6B7B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5C4F\u5E55\u65F6\u4E0D\u65F6\u5361\u6B7B","aria-hidden":"true"},"#"),n(" \u5C4F\u5E55\u65F6\u4E0D\u65F6\u5361\u6B7B")],-1),T=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5-3","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),w=e("p",null,"\u5728\u770B\u89C6\u9891\u65F6\u51FA\u73B0\u7684\u6982\u7387\u6BD4\u8F83\u5927\uFF0C\u5373\u5C4F\u5E55\u9891\u7E41\u7ED8\u5236\u65F6\u51FA\u95EE\u9898\u4E86\u3002",-1),C=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848-3","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),D=e("p",null,[n("\u521D\u6B65\u731C\u6D4B\u662F\u663E\u5361\u9A71\u52A8\u6709\u95EE\u9898\u3002\u7136\u540E\u5728\u8F6F\u4EF6\u5305\u641C\u4E86\u4E0B "),e("code",null,"nouveau"),n("\uFF0C\u679C\u7136\u5B58\u5728 "),e("code",null,"xf86-video-nouveau"),n(" \u5F00\u6E90\u9A71\u52A8\uFF0C\u79FB\u9664\u540E\u5C31\u6062\u590D\u6B63\u5E38\u4E86\u3002")],-1),F=e("p",null,"\u5E94\u8BE5\u662F\u54EA\u6B21\u66F4\u65B0\u7CFB\u7EDF\u987A\u624B\u7ED9\u5B89\u88C5\u4E0A\u53BB\u4E86\u3002",-1),L=e("h2",{id:"\u98CE\u6247\u8D77\u98DE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u98CE\u6247\u8D77\u98DE","aria-hidden":"true"},"#"),n(" \u98CE\u6247\u8D77\u98DE")],-1),O=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5-4","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),R=e("p",null,"\u7CFB\u7EDF\u98CE\u6247\u8D77\u98DE\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u67D0\u4E2A\u7A0B\u5E8F\u5360\u7528\u8D44\u6E90\u8FC7\u591A\u5BFC\u81F4\u3002",-1),A=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848-4","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),P=e("blockquote",null,[e("p",null,"\u89E3\u51B3\u540E\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5176\u4ED6\u95EE\u9898\u3002")],-1),W=e("p",null,"\u5F15\u8D77\u8BE5\u95EE\u9898\u6709\u5F88\u591A\u60C5\u51B5\uFF0C\u4E4B\u524D\u4E5F\u603B\u662F\u5FD8\u8BB0\u6293\u7F6A\u72AF\uFF1A",-1),z={href:"https://wiki.archlinux.org/index.php/Baloo",target:"_blank",rel:"noopener noreferrer"},G=n("baloo"),H=n(" \u5EFA\u7ACB\u6587\u4EF6\u7D22\u5F15"),I=d(`<div class="language-bash ext-sh"><pre class="language-bash"><code>balooctl status  <span class="token comment"># \u67E5\u770B\u72B6\u6001</span>
balooctl <span class="token function">suspend</span>   <span class="token comment"># \u505C\u6B62</span>
balooctl disable  <span class="token comment"># \u7981\u7528</span>
</code></pre></div><p>\u9664\u4E86\u547D\u4EE4\u884C\u8FD8\u53EF\u4EE5\u5728 <code>\u7CFB\u7EDF</code> =\u300B <code>\u67E5\u627E</code> \u4E2D\u627E\u5230\u8BE5\u914D\u7F6E\u9879\u3002</p>`,2),J=e("h2",{id:"\u65E7\u7CFB\u7EDF\u5185\u6838\u65E0\u6CD5\u5220\u9664",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u65E7\u7CFB\u7EDF\u5185\u6838\u65E0\u6CD5\u5220\u9664","aria-hidden":"true"},"#"),n(" \u65E7\u7CFB\u7EDF\u5185\u6838\u65E0\u6CD5\u5220\u9664")],-1),K=e("h3",{id:"_1-\u95EE\u9898\u60C5\u51B5-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u95EE\u9898\u60C5\u51B5-5","aria-hidden":"true"},"#"),n(" 1. \u95EE\u9898\u60C5\u51B5")],-1),Q=e("p",null,"\u5378\u8F7D\u65F6\u51FA\u73B0\u4EE5\u4E0B\u63D0\u793A\uFF1A",-1),U=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`checking dependencies...
:: removing linux510-headers breaks dependency 'linux510-headers' required by linux-latest-headers
:: removing linux510-r8168 breaks dependency 'linux510-r8168' required by linux-latest-r8168
`)])],-1),X=e("h3",{id:"_2-\u89E3\u51B3\u65B9\u6848-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89E3\u51B3\u65B9\u6848-5","aria-hidden":"true"},"#"),n(" 2. \u89E3\u51B3\u65B9\u6848")],-1),Y=n("\u53C2\u8003 "),Z={href:"https://forum.manjaro.org/t/cannot-remove-linux57-breaks-dependency-required-by-linux-latest-something/7679",target:"_blank",rel:"noopener noreferrer"},$=n("Cannot remove linux57 - breaks dependency .. required by linux-latest-[something]"),ee=n("\uFF0C\u6267\u884C\uFF1A"),ne=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(` pacman -Rcsnu linux510-headers
`),e("span",{class:"token function"},"sudo"),n(` pacman -Rcsnu linux510-r8168
`)])])],-1),ae=e("p",null,"\u518D\u6B21\u5C1D\u8BD5\u540E\u5373\u53EF\u3002",-1);function se(te,oe){const a=t("OutboundLink");return r(),o(c,null,[_,u,p,m,b,x,g,f,k,v,j,y,q,B,M,N,V,E,S,T,w,C,D,F,L,O,R,A,P,W,e("ol",null,[e("li",null,[e("p",null,[e("a",z,[G,s(a)]),H]),I])]),J,K,Q,U,X,e("p",null,[Y,e("a",Z,[$,s(a)]),ee]),ne,ae],64)}var re=i(h,[["render",se]]);export{re as default};
