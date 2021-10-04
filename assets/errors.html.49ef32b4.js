import{r as e,c as s,a,b as n,F as o,d as c,e as t,o as r}from"./app.f0f65842.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const d={},i=a("h1",{id:"处理-vscode-错误",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#处理-vscode-错误","aria-hidden":"true"},"#"),c(" 处理 VSCode 错误")],-1),p=a("h2",{id:"无法监视文件变化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#无法监视文件变化","aria-hidden":"true"},"#"),c(" 无法监视文件变化")],-1),h=a("p",null,"其实这个问题存在已久，但是一直没有去处理。",-1),u=c("当 VSCode 弹出该提示时会给一个对应的"),f={href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"},m=c("链接"),g=c("，执行它提供的命令："),b=a("div",{class:"language-bash ext-sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"cat"),c(" /proc/sys/fs/inotify/max_user_watches "),a("span",{class:"token comment"},"# 19200"),c("\n")])])],-1),x=c("限制比较小，接着查看"),k={href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers",target:"_blank",rel:"noopener noreferrer"},_=c("解决方案"),v=c("。虽然提示说 "),w=a("code",null,"Arch Linux",-1),y=c(" 应当使用 "),C=a("code",null,"echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system",-1),E=c("，但我的 manjaro 重启后依旧存在问题。"),S=t('<p>最后的解决方案：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ll /etc/sysctl.d/\n<span class="token comment"># 40-max-user-watches.conf</span>\n<span class="token comment"># 50-max_user_watches.conf # 需注意文件名区别</span>\n<span class="token function">cat</span> /etc/sysctl.d/50-max_user_watches.conf\nfs.inotify.max_user_watches <span class="token operator">=</span> <span class="token number">19200</span> <span class="token comment"># 利用 vim 修改后重启成功</span>\n</code></pre></div><h2 id="空文件夹折叠" tabindex="-1"><a class="header-anchor" href="#空文件夹折叠" aria-hidden="true">#</a> 空文件夹折叠</h2><p>在一次更新之后 VSCode 添加了新的特性 <code>Compact Folders</code>，这种行为与 Chrome 浏览器擅自遮挡 <code>www</code> 一样恶心。</p><p>打开 <code>Settings</code>，输入 <code>Compact Folders</code> 取消选中即可。</p><h2 id="删除文件-文件夹时卡顿" tabindex="-1"><a class="header-anchor" href="#删除文件-文件夹时卡顿" aria-hidden="true">#</a> 删除文件/文件夹时卡顿</h2>',6),L=c("在 Arch 的 KDE 环境下会存在该问题，这是由于 "),j={href:"https://github.com/microsoft/vscode/issues/90034#issuecomment-582115953",target:"_blank",rel:"noopener noreferrer"},A=c("ELECTRON 引起的"),F=c("。可通过在 "),O=a("code",null,"~/.config/plasma-workspace/env/electron-trash-gio.sh",-1),R=c(" 增加如下内容解决："),T=t('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ELECTRON_TRASH</span><span class="token operator">=</span>gio\n</code></pre></div>',1);var V=l(d,[["render",function(c,t){const l=e("OutboundLink");return r(),s(o,null,[i,p,h,a("p",null,[u,a("a",f,[m,n(l)]),g]),b,a("p",null,[x,a("a",k,[_,n(l)]),v,w,y,C,E]),S,a("p",null,[L,a("a",j,[A,n(l)]),F,O,R]),T],64)}]]);export{V as default};
