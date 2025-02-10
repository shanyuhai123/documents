import{_ as e,c as s,a as n,o as t}from"./app-DNXRdI82.js";const p={};function l(d,a){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="在-manjaro-安装-deb-程序" tabindex="-1"><a class="header-anchor" href="#在-manjaro-安装-deb-程序"><span>在 Manjaro 安装 deb 程序</span></a></h1><p>虽然很多程序已经支持了 Linux 平台，但大多数仅提供了 <code>deb</code> 包。</p><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><p>安装 <code>debtap</code>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yay <span class="token parameter variable">-S</span> debtap</span>
<span class="line"></span></code></pre></div><p>更新 <code>debtap</code>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> debtap <span class="token parameter variable">-u</span></span>
<span class="line"></span></code></pre></div><p>找到你下载好的 <code>deb</code> 包：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">debtap example_2.8.0.0_x86_64.publish.deb</span>
<span class="line"></span></code></pre></div><p>最后使用 <code>pacman</code> 安装本地 <code>pkg</code> 即可：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-U</span> example_2.8.0.0_x86_64.pkg.tar.zst</span>
<span class="line"></span></code></pre></div>`,11)]))}const o=e(p,[["render",l],["__file","install-deb-program-on-manjaro.html.vue"]]),i=JSON.parse('{"path":"/os/manjaro/install-deb-program-on-manjaro.html","title":"在 Manjaro 安装 deb 程序","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]}],"git":{"updatedTime":1637400651000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/manjaro/install-deb-program-on-manjaro.md"}');export{o as comp,i as data};
