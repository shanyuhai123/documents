import{_ as r,M as p,p as l,q as i,R as s,t as e,N as o,a1 as t}from"./framework-e3e34937.js";const c={},d={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},m={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"};function u(k,n){const a=p("ExternalLinkIcon");return l(),i("div",null,[n[6]||(n[6]=s("h1",{id:"多仓库工具-repo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#多仓库工具-repo","aria-hidden":"true"},"#"),e(" 多仓库工具 Repo")],-1)),n[7]||(n[7]=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1)),s("p",null,[n[1]||(n[1]=e("有个小任务，拉取 ")),s("a",d,[n[0]||(n[0]=e("Chromium OS")),o(a)]),n[2]||(n[2]=e(" 的代码："))]),n[8]||(n[8]=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre></div>`,1)),s("p",null,[n[4]||(n[4]=e("其使用到了 ")),s("a",m,[n[3]||(n[3]=e("repo")),o(a)]),n[5]||(n[5]=e(" 工具。"))]),n[9]||(n[9]=t(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录</span>
<span class="token builtin class-name">cd</span> /usr/bin
<span class="token comment"># 从清华源下载 repo</span>
<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo <span class="token parameter variable">-o</span> repo
<span class="token comment"># 赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo

<span class="token comment"># 校验</span>
repo <span class="token parameter variable">--version</span>
</code></pre></div>`,2))])}const h=r(c,[["render",u],["__file","repo-tool.html.vue"]]);export{h as default};
