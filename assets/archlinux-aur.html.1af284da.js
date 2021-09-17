import{r as e,o as a,c as t,a as n,b as r,F as d,e as s,d as o}from"./app.43866806.js";const c={},i=s('<h1 id="更多的选择-aur" tabindex="-1"><a class="header-anchor" href="#更多的选择-aur" aria-hidden="true">#</a> 更多的选择 AUR</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>AUR（Arch User Repository ），Arch 社区软件仓库，包含了一些非官方的软件。</p><p>Arch 的包管理器 pacman 不直接支持 AUR，支持 AUR 的工具常常被称之为 <code>AUR 助手</code>。</p><h2 id="aur-助手" tabindex="-1"><a class="header-anchor" href="#aur-助手" aria-hidden="true">#</a> AUR 助手</h2>',5),l=o("早期使用的是 Yaourt，不过其已经不再维护，所以切换到 "),h={href:"https://github.com/Jguer/yay",target:"_blank",rel:"noopener noreferrer"},y=o("yay"),u=o("。"),p=s('<h3 id="_1-安装-yay" tabindex="-1"><a class="header-anchor" href="#_1-安装-yay" aria-hidden="true">#</a> 1. 安装 yay</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://aur.archlinux.org/yay.git\n<span class="token builtin class-name">cd</span> yay\nmakepkg -si\n</code></pre></div><h3 id="_2-修改-yay-源" tabindex="-1"><a class="header-anchor" href="#_2-修改-yay-源" aria-hidden="true">#</a> 2. 修改 yay 源</h3><p>yay 默认源为 <code>aur.archlinux.org</code>，为其创建配置文件即可修改源：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yay -Syu --devel --combinedupgrade --save\n<span class="token comment"># 或</span>\nyay --aururl <span class="token string">&quot;https://aur.tuna.tsinghua.edu.cn&quot;</span> --save\n</code></pre></div>',5),g=o("接着修改 "),m=n("code",null,".config/yay/config.json",-1),b=o("，替换为对应的"),f={href:"https://mirror.tuna.tsinghua.edu.cn/help/AUR/",target:"_blank",rel:"noopener noreferrer"},x=o("镜像源地址"),k=o("。"),v=s('<h3 id="_3-yay-命令" tabindex="-1"><a class="header-anchor" href="#_3-yay-命令" aria-hidden="true">#</a> 3. yay 命令</h3><table><thead><tr><th style="text-align:center;">Command</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>yay &lt;Search Term&gt; </code></td><td>Present package-installation selection menu.</td></tr><tr><td style="text-align:center;"><code>yay -Ps</code></td><td>Print system statistics.</td></tr><tr><td style="text-align:center;"><code>yay -Yc</code></td><td>Clean unneeded dependencies.</td></tr><tr><td style="text-align:center;"><code>yay -G </code></td><td>Download PKGBUILD from ABS or AUR.</td></tr><tr><td style="text-align:center;"><code>yay -Y --gendb</code></td><td>Generate development package database used for devel update.</td></tr><tr><td style="text-align:center;"><code>yay -Syu --devel --timeupdate</code></td><td>Perform system upgrade, but also check for development package updates and use PKGBUILD modification time (not version number) to determine update.</td></tr></tbody></table><p>日常使用的为：</p><p><strong>搜索：</strong><code>yay -Ss &lt;package-name&gt;</code></p><p><strong>安装：</strong> <code>yay -S &lt;package-name&gt;</code></p>',5);c.render=function(s,o){const c=e("OutboundLink");return a(),t(d,null,[i,n("p",null,[l,n("a",h,[y,r(c)]),u]),p,n("p",null,[g,m,b,n("a",f,[x,r(c)]),k]),v],64)};export{c as default};