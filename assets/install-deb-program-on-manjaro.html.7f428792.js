import{e as a}from"./app.c20c51e5.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const d={},s=a('<h1 id="在-manjaro-安装-deb-程序" tabindex="-1"><a class="header-anchor" href="#在-manjaro-安装-deb-程序" aria-hidden="true">#</a> 在 Manjaro 安装 deb 程序</h1><p>虽然很多程序已经支持了 Linux 平台，但大多数仅提供了 <code>deb</code> 包。</p><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><p>安装 <code>debtap</code>：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yay -S debtap\n</code></pre></div><p>更新 <code>debtap</code>：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> debtap -u\n</code></pre></div><p>找到你下载好的 <code>deb</code> 包：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>debtap example_2.8.0.0_x86_64.publish.deb\n</code></pre></div><p>最后使用 <code>pacman</code> 安装本地 <code>pkg</code> 即可：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -U example_2.8.0.0_x86_64.pkg.tar.zst\n</code></pre></div>',11);var c=e(d,[["render",function(a,e){return s}]]);export{c as default};