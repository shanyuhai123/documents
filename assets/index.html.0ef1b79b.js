import{r as e,c as l,a as r,b as n,F as t,d as a,o}from"./app.c20c51e5.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const s={},d=r("h2",{id:"微信环境",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#微信环境","aria-hidden":"true"},"#"),a(" 微信环境")],-1),u=a("由于开发环境为 manjaro，所以开发环境也得"),c={href:"https://github.com/dragonation/wechat-devtools",target:"_blank",rel:"noopener noreferrer"},p=a("折腾一下"),h=a("，下载好包后还需要准备好 "),f=r("code",null,"wine",-1),g=a(" 支持，否则在使用时会出现一些问题。"),m={href:"https://github.com/dragonation/wechat-devtools",target:"_blank",rel:"noopener noreferrer"},w=a("wechat-devtools"),x=a(" 没有继续维护，折腾两天升级 1.05 失败，老实回归 Windows，要解决的就剩下数据共享问题："),b=r("code",null,"ln",-1),v=a(" 软连接到共享文件夹，由于微信开发者工具不能直接打开共享文件夹，采用 "),k={href:"https://freefilesync.org/",target:"_blank",rel:"noopener noreferrer"},j=a("FreeFileSync"),y=a(" 同步两个文件夹"),_=r("li",null,"或许直接外部数据方案会更好一些",-1),q=r("h2",{id:"构成",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#构成","aria-hidden":"true"},"#"),a(" 构成")],-1),S=r("thead",null,[r("tr",null,[r("th",{style:{"text-align":"center"}},"构成单元"),r("th",{style:{"text-align":"center"}},"后缀"),r("th",null,"说明")])],-1),B=r("tr",null,[r("td",{style:{"text-align":"center"}},"配置文件(JSON)"),r("td",{style:{"text-align":"center"}},".json"),r("td",null,"用于配置小程序而非程序本身")],-1),E={style:{"text-align":"center"}},F=a("模板文件("),A={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/",target:"_blank",rel:"noopener noreferrer"},J=a("WXML"),W=a(")"),L=r("td",{style:{"text-align":"center"}},".wxml",-1),O=r("td",null,"可看成 Vue 的 Template 部分",-1),V={style:{"text-align":"center"}},X=a("样式文件("),C={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html",target:"_blank",rel:"noopener noreferrer"},M=a("WXSS"),N=a(")"),T=r("td",{style:{"text-align":"center"}},".wxss",-1),z=r("td",null,"CSS",-1),D=r("tr",null,[r("td",{style:{"text-align":"center"}},"脚本逻辑文件(JS)"),r("td",{style:{"text-align":"center"}},".js"),r("td",null,"JavaScript")],-1),G=r("h3",{id:"配置文件",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#"),a(" 配置文件")],-1),H=r("p",null,[a("配置文件有 "),r("code",null,"app.json"),a("、"),r("code",null,"project.config.json"),a(" 及页面内配置：")],-1),I=r("p",null,[r("code",null,"app.json")],-1),K=a("包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等，页面内配置覆盖全局配置，"),P={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/config.html",target:"_blank",rel:"noopener noreferrer"},Q=a("更多"),R=a("。"),U=r("li",null,[r("p",null,[r("code",null,"project.config.json")]),r("p",null,[a("开发者工具的配置，可理解为 "),r("code",null,".vscode"),a("、 "),r("code",null,"tsconfig.json"),a(" 及 "),r("code",null,"package.json"),a(" 的集合体。")])],-1),Y=r("h2",{id:"参考资料",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),Z={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"},$=a("微信小程序"),ee={href:"https://uniapp.dcloud.io/",target:"_blank",rel:"noopener noreferrer"},le=a("uni-app"),re={href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"},ne=a("uView");var te=i(s,[["render",function(a,i){const s=e("OutboundLink");return o(),l(t,null,[d,r("p",null,[r("s",null,[u,r("a",c,[p,n(s)]),h,f,g])]),r("p",null,[r("a",m,[w,n(s)]),x]),r("ol",null,[r("li",null,[b,v,r("a",k,[j,n(s)]),y]),_]),q,r("table",null,[S,r("tbody",null,[B,r("tr",null,[r("td",E,[F,r("a",A,[J,n(s)]),W]),L,O]),r("tr",null,[r("td",V,[X,r("a",C,[M,n(s)]),N]),T,z]),D])]),G,H,r("ul",null,[r("li",null,[I,r("p",null,[K,r("a",P,[Q,n(s)]),R])]),U]),Y,r("ol",null,[r("li",null,[r("a",Z,[$,n(s)])]),r("li",null,[r("a",ee,[le,n(s)])]),r("li",null,[r("a",re,[ne,n(s)])])])],64)}]]);export{te as default};