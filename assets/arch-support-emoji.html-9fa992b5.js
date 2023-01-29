import{_ as a,p as s,q as o,a1 as n}from"./framework-49860b1b.js";const t={},p=n(`<h1 id="支持-emoji" tabindex="-1"><a class="header-anchor" href="#支持-emoji" aria-hidden="true">#</a> 支持 emoji</h1><blockquote><p>没有 emoji 就没有了 🤔</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><p>安装 <code>noto-fonts-emoji</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> noto-fonts-emoji
</code></pre></div><p>设置用户字体在 <code>~/.config/fontconfig/fonts.conf</code>，当然也可以设置系统字体 <code>/etc/fonts/local.conf</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>?<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE fontconfig SYSTEM <span class="token string">&quot;fonts.dtd&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>fontconfig<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>sans-serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Sans<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>DejaVu Sans<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span> 
 <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span>

 <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>DejaVu Serif<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span>

 <span class="token operator">&lt;</span>alias<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>monospace<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>prefer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Mono<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Color Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>family<span class="token operator">&gt;</span>Noto Emoji<span class="token operator">&lt;</span>/family<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>/prefer<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>/alias<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/fontconfig<span class="token operator">&gt;</span>
</code></pre></div>`,7),e=[p];function r(l,c){return s(),o("div",null,e)}const i=a(t,[["render",r],["__file","arch-support-emoji.html.vue"]]);export{i as default};
