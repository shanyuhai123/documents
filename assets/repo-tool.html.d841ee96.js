import{r as n,o as a,c as s,a as e,b as o,F as r,d as t,e as c}from"./app.a12e4780.js";const p={},i=e("h1",{id:"多仓库工具-repo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#多仓库工具-repo","aria-hidden":"true"},"#"),t(" 多仓库工具 Repo")],-1),l=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),u=t("有个小任务，拉取 "),h={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},d=t("Chromium OS"),m=t(" 的代码："),g=c('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">${SOURCE_REPO}</span>\nrepo init -u https://chromium.googlesource.com/chromiumos/manifest.git\n\n<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>\nrepo <span class="token function">sync</span>\n</code></pre></div>',1),f=t("其使用到了 "),k={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},b=t("repo"),x=t(" 工具。"),v=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录</span>\n<span class="token builtin class-name">cd</span> /usr/bin\n<span class="token comment"># 从清华源下载 repo</span>\n<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo\n<span class="token comment"># 赋予执行权限</span>\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo\n\n<span class="token comment"># 校验</span>\nrepo --version\n</code></pre></div>',2);p.render=function(t,c){const p=n("OutboundLink");return a(),s(r,null,[i,l,e("p",null,[u,e("a",h,[d,o(p)]),m]),g,e("p",null,[f,e("a",k,[b,o(p)]),x]),v],64)};export{p as default};
