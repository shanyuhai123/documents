import{r as t,c,a as e,b as o,F as r,d as n,e as a,o as i}from"./app.cc89d5d0.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const l={},d=e("h1",{id:"\u591A\u4ED3\u5E93\u5DE5\u5177-repo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u591A\u4ED3\u5E93\u5DE5\u5177-repo","aria-hidden":"true"},"#"),n(" \u591A\u4ED3\u5E93\u5DE5\u5177 Repo")],-1),h=e("h2",{id:"\u524D\u8A00",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),n(" \u524D\u8A00")],-1),u=n("\u6709\u4E2A\u5C0F\u4EFB\u52A1\uFF0C\u62C9\u53D6 "),_={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},m=n("Chromium OS"),g=n(" \u7684\u4EE3\u7801\uFF1A"),f=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init -u https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre></div>`,1),k=n("\u5176\u4F7F\u7528\u5230\u4E86 "),b={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},x=n("repo"),v=n(" \u5DE5\u5177\u3002"),O=a(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u7528\u6237\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/bin
<span class="token comment"># \u4ECE\u6E05\u534E\u6E90\u4E0B\u8F7D repo</span>
<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
<span class="token comment"># \u8D4B\u4E88\u6267\u884C\u6743\u9650</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo

<span class="token comment"># \u6821\u9A8C</span>
repo --version
</code></pre></div>`,2);function N(V,w){const s=t("OutboundLink");return i(),c(r,null,[d,h,e("p",null,[u,e("a",_,[m,o(s)]),g]),f,e("p",null,[k,e("a",b,[x,o(s)]),v]),O],64)}var C=p(l,[["render",N]]);export{C as default};
