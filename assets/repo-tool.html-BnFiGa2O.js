import{_ as s,c as n,a as e,o as p}from"./app-DNXRdI82.js";const t={};function o(l,a){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="多仓库工具-repo" tabindex="-1"><a class="header-anchor" href="#多仓库工具-repo"><span>多仓库工具 Repo</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>有个小任务，拉取 <a href="https://www.chromium.org/chromium-os/quick-start-guide" target="_blank" rel="noopener noreferrer">Chromium OS</a> 的代码：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span></span>
<span class="line">repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span></span>
<span class="line">repo <span class="token function">sync</span></span>
<span class="line"></span></code></pre></div><p>其使用到了 <a href="https://source.android.google.cn/setup/develop/repo?hl=zh-cn" target="_blank" rel="noopener noreferrer">repo</a> 工具。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入用户目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/bin</span>
<span class="line"><span class="token comment"># 从清华源下载 repo</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo <span class="token parameter variable">-o</span> repo</span>
<span class="line"><span class="token comment"># 赋予执行权限</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> +x repo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 校验</span></span>
<span class="line">repo <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre></div>`,7)]))}const c=s(t,[["render",o],["__file","repo-tool.html.vue"]]),i=JSON.parse('{"path":"/tools/git/repo-tool.html","title":"多仓库工具 Repo","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"git":{"updatedTime":1637399111000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/git/repo-tool.md"}');export{c as comp,i as data};
