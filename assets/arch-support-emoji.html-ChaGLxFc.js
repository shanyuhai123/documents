import{_ as s,c as n,a as p,o}from"./app-BoSqM2g3.js";const t={};function e(l,a){return o(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="支持-emoji" tabindex="-1"><a class="header-anchor" href="#支持-emoji"><span>支持 emoji</span></a></h1><blockquote><p>没有 emoji 就没有了 🤔</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><p>安装 <code>noto-fonts-emoji</code>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> noto-fonts-emoji</span>
<span class="line"></span></code></pre></div><p>设置用户字体在 <code>~/.config/fontconfig/fonts.conf</code>，当然也可以设置系统字体 <code>/etc/fonts/local.conf</code>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>?<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE fontconfig SYSTEM <span class="token string">&quot;fonts.dtd&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>fontconfig<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>sans-serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Sans<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>DejaVu Sans<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span> </span>
<span class="line"> <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"> <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>DejaVu Serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"> <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>monospace<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Mono<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>/fontconfig<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7)])])}const c=s(t,[["render",e]]),i=JSON.parse('{"path":"/os/arch/arch-support-emoji.html","title":"支持 emoji","lang":"zh-CN","frontmatter":{"description":"Arch 下支持 emoji"},"headers":[{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]}],"git":{"updatedTime":1637766789000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/arch/arch-support-emoji.md"}');export{c as comp,i as data};
