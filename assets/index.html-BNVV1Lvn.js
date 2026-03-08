import{_ as s,c as n,a as e,o as p}from"./app-CVsCLQsN.js";const l="/assets/firewall-config-iO-WbSim.png",t={};function c(i,a){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="arch-神教" tabindex="-1"><a class="header-anchor" href="#arch-神教"><span>Arch 神教</span></a></h1><blockquote><p>部分基础内容依旧在 <code>manjaro</code> 下，不做迁移。</p></blockquote><p>快入 Arch 神教吧！必读 <a href="https://wiki.archlinux.org/" target="_blank" rel="noopener noreferrer">WIKI</a></p><h2 id="配置输入法" tabindex="-1"><a class="header-anchor" href="#配置输入法"><span>配置输入法</span></a></h2><p>如果有 fcitx 则先卸载：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-Rsc</span> fcitx</span>
<span class="line"></span></code></pre></div><p>接着安装 <a href="https://wiki.archlinux.org/title/Fcitx5_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">fcitx5</a>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># fcitx5-im 包组提供 fcitx5 本体、配置工具和必要的输入法模块</span></span>
<span class="line"><span class="token comment"># 默认仅支持英文，其他语言则还需要对应的引擎 fcitx5-chinese-addons</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fcitx5-im fcitx5-chinese-addons </span>
<span class="line"></span></code></pre></div><p>配置环境变量并重新登入：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># vim /etc/environment</span></span>
<span class="line"><span class="token assign-left variable">GTK_IM_MODULE</span><span class="token operator">=</span>fcitx</span>
<span class="line"><span class="token assign-left variable">QT_IM_MODULES</span><span class="token operator">=</span>wayland<span class="token punctuation">;</span>fcitx</span>
<span class="line"><span class="token assign-left variable">QT_IM_MODULE</span><span class="token operator">=</span>fcitx</span>
<span class="line"><span class="token assign-left variable"><span class="token environment constant">XMODIFIERS</span></span><span class="token operator">=</span>@im<span class="token operator">=</span>fcitx</span>
<span class="line"><span class="token assign-left variable">SDL_IM_MODULE</span><span class="token operator">=</span>fcitx</span>
<span class="line"></span></code></pre></div><p>主题：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 皮肤</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fcitx5-material-color</span>
<span class="line"></span></code></pre></div><p>输入法引擎及词库</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fcitx5-rime</span>
<span class="line">paru <span class="token parameter variable">-S</span> rime-ice-git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用配置</span></span>
<span class="line"><span class="token function">mkdir</span> ~/.local/share/fcitx5/rime/</span>
<span class="line"><span class="token builtin class-name">cd</span> ~/.local/share/fcitx5/rime/</span>
<span class="line"><span class="token function">vim</span> default.custom.yaml</span>
<span class="line"><span class="token comment"># patch:</span></span>
<span class="line"><span class="token comment">#   # 仅使用「雾凇拼音」的默认配置，配置此行即可</span></span>
<span class="line"><span class="token comment">#   __include: rime_ice_suggestion:/</span></span>
<span class="line"><span class="token comment">#   # 以下根据自己所需自行定义，仅做参考。</span></span>
<span class="line"><span class="token comment">#   # 针对对应处方的定制条目，请使用 &lt;recipe&gt;.custom.yaml 中配置，例如 rime_ice.custom.yaml</span></span>
<span class="line"><span class="token comment">#   __patch:</span></span>
<span class="line"><span class="token comment">#     key_binder/bindings/+:</span></span>
<span class="line"><span class="token comment">#       # 开启逗号句号翻页</span></span>
<span class="line"><span class="token comment">#       - { when: paging, accept: comma, send: Page_Up }</span></span>
<span class="line"><span class="token comment">#       - { when: has_menu, accept: period, send: Page_Down }</span></span>
<span class="line"></span></code></pre></div><p><strong>前往系统设置 &gt; 输入与输出 &gt; 键盘 &gt; 虚拟键盘，选择 Fcitx 5 Wayland 启动器</strong></p><h2 id="配置防火墙" tabindex="-1"><a class="header-anchor" href="#配置防火墙"><span>配置防火墙</span></a></h2><p>使用 <code>firewall-config</code> 可视化配置防火墙。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> firewall-config</span>
<span class="line"></span></code></pre></div><p><img src="`+l+`" alt="配置防火墙"></p><p>以放行 <strong><code>KDE Connect</code></strong> 服务为示例：</p><ol><li>配置切换到 “永久”</li><li>在右下角的 “服务” 中找到 <code>kdeconnect</code>，勾选即可</li><li>在左上角 “选项” 中重载防火墙</li></ol><h2 id="aur-社区仓库" tabindex="-1"><a class="header-anchor" href="#aur-社区仓库"><span>AUR 社区仓库</span></a></h2><p>使用 <code>paru</code> 替代 <code>yay</code> 对 <code>aur</code> 包进行管理。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装已更新</span></span>
<span class="line">paru <span class="token parameter variable">-Sua</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理</span></span>
<span class="line">paru <span class="token parameter variable">--clean</span></span>
<span class="line"></span></code></pre></div><h2 id="在用的小工具" tabindex="-1"><a class="header-anchor" href="#在用的小工具"><span>在用的小工具</span></a></h2><ul><li>使用 <a href="https://github.com/aristocratos/btop" target="_blank" rel="noopener noreferrer">btop</a> 替代 top</li></ul>`,26)])])}const r=s(t,[["render",c]]),d=JSON.parse('{"path":"/os/arch/","title":"Arch 神教","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"配置输入法","slug":"配置输入法","link":"#配置输入法","children":[]},{"level":2,"title":"配置防火墙","slug":"配置防火墙","link":"#配置防火墙","children":[]},{"level":2,"title":"AUR 社区仓库","slug":"aur-社区仓库","link":"#aur-社区仓库","children":[]},{"level":2,"title":"在用的小工具","slug":"在用的小工具","link":"#在用的小工具","children":[]}],"git":{"updatedTime":1772960750000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":6,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/arch/README.md"}');export{r as comp,d as data};
