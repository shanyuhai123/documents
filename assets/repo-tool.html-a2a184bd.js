import{_ as t,M as r,p as c,q as p,Q as n,t as e,N as s,a1 as o}from"./framework-49860b1b.js";const l={},i=n("h1",{id:"多仓库工具-repo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多仓库工具-repo","aria-hidden":"true"},"#"),e(" 多仓库工具 Repo")],-1),d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),h={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre></div>`,1),u={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},_=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录</span>
<span class="token builtin class-name">cd</span> /usr/bin
<span class="token comment"># 从清华源下载 repo</span>
<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo <span class="token parameter variable">-o</span> repo
<span class="token comment"># 赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo

<span class="token comment"># 校验</span>
repo <span class="token parameter variable">--version</span>
</code></pre></div>`,2);function k(f,g){const a=r("ExternalLinkIcon");return c(),p("div",null,[i,d,n("p",null,[e("有个小任务，拉取 "),n("a",h,[e("Chromium OS"),s(a)]),e(" 的代码：")]),m,n("p",null,[e("其使用到了 "),n("a",u,[e("repo"),s(a)]),e(" 工具。")]),_])}const v=t(l,[["render",k],["__file","repo-tool.html.vue"]]);export{v as default};
