import{_ as r,M as p,p as l,q as i,R as n,t as s,N as t,a1 as o}from"./framework-e3e34937.js";const c="/assets/firewall-config-5205d02f.png",d={},m={href:"https://wiki.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://wiki.archlinux.org/title/Fcitx5_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/aristocratos/btop",target:"_blank",rel:"noopener noreferrer"};function k(h,a){const e=p("ExternalLinkIcon");return l(),i("div",null,[a[8]||(a[8]=n("h1",{id:"arch-神教",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arch-神教","aria-hidden":"true"},"#"),s(" Arch 神教")],-1)),a[9]||(a[9]=n("blockquote",null,[n("p",null,[s("部分基础内容依旧在 "),n("code",null,"manjaro"),s(" 下，不做迁移。")])],-1)),n("p",null,[a[1]||(a[1]=s("快入 Arch 神教吧！必读 ")),n("a",m,[a[0]||(a[0]=s("WIKI")),t(e)])]),a[10]||(a[10]=o(`<h2 id="配置输入法" tabindex="-1"><a class="header-anchor" href="#配置输入法" aria-hidden="true">#</a> 配置输入法</h2><p>如果有 fcitx 则先卸载：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-Rsc</span> fcitx
</code></pre></div>`,3)),n("p",null,[a[3]||(a[3]=s("接着安装 ")),n("a",u,[a[2]||(a[2]=s("fcitx5")),t(e)]),a[4]||(a[4]=s("："))]),a[11]||(a[11]=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># fcitx5-im 包组提供 fcitx5 本体、配置工具和必要的输入法模块</span>
<span class="token comment"># 默认仅支持英文，其他语言则还需要对应的引擎 fcitx5-chinese-addons</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fcitx5-im fcitx5-chinese-addons 
</code></pre></div><p>配置环境变量并重新登入：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vim ~/.pam_environment</span>
GTK_IM_MODULE <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx
QT_IM_MODULE  <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx
<span class="token environment constant">XMODIFIERS</span>    <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span><span class="token punctuation">\\</span>@im<span class="token operator">=</span>fcitx
SDL_IM_MODULE <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx
<span class="token comment"># vim ~/.xprofile</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">QT_IM_MODULE</span><span class="token operator">=</span>fcitx5v
</code></pre></div><p>主题与词库：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 皮肤</span>
fcitx5-material-color
<span class="token comment"># 词库</span>
<span class="token comment"># 1. 在拼音中启用云拼音并修改后端为 baidu</span>
<span class="token comment"># 2. 离线词库，安装完成后词典自动启用</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fcitx5-pinyin-zhwiki <span class="token comment"># 46.92 MiB</span>
yay <span class="token parameter variable">-S</span> fcitx5-pinyin-sougou <span class="token comment"># 183.87 MiB</span>
</code></pre></div><p>在 <code>Kernel: 5.18.6-arch1-1</code>、<code>DE: Plasma 5.25.1</code> 版本，输入法的配置在 <code>系统设置 =&gt; 区域设置 =&gt; 输入法</code> 下可进行配置。</p><h2 id="配置防火墙" tabindex="-1"><a class="header-anchor" href="#配置防火墙" aria-hidden="true">#</a> 配置防火墙</h2><p>使用 <code>firewall-config</code> 可视化配置防火墙。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> firewall-config
</code></pre></div><p><img src="`+c+`" alt="配置防火墙"></p><p>以放行 <strong><code>KDE Connect</code></strong> 服务为示例：</p><ol><li>配置切换到 “永久”</li><li>在右下角的 “服务” 中找到 <code>kdeconnect</code>，勾选即可</li><li>在左上角 “选项” 中重载防火墙</li></ol><h2 id="aur-社区仓库" tabindex="-1"><a class="header-anchor" href="#aur-社区仓库" aria-hidden="true">#</a> AUR 社区仓库</h2><p>使用 <code>paru</code> 替代 <code>yay</code> 对 <code>aur</code> 包进行管理。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装已更新</span>
paru <span class="token parameter variable">-Sua</span>

<span class="token comment"># 清理</span>
paru <span class="token parameter variable">--clean</span>
</code></pre></div><h2 id="在用的小工具" tabindex="-1"><a class="header-anchor" href="#在用的小工具" aria-hidden="true">#</a> 在用的小工具</h2>`,16)),n("ul",null,[n("li",null,[a[6]||(a[6]=s("使用 ")),n("a",f,[a[5]||(a[5]=s("btop")),t(e)]),a[7]||(a[7]=s(" 替代 top"))])])])}const x=r(d,[["render",k],["__file","index.html.vue"]]);export{x as default};
