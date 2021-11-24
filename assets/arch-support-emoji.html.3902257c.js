import{e as a}from"./app.366e609d.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const o={},n=a(`<h1 id="\u652F\u6301-emoji" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301-emoji" aria-hidden="true">#</a> \u652F\u6301 emoji</h1><blockquote><p>\u6CA1\u6709 emoji \u5C31\u6CA1\u6709\u4E86 \u{1F914}</p></blockquote><h2 id="\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> \u64CD\u4F5C\u6B65\u9AA4</h2><p>\u5B89\u88C5 <code>noto-fonts-emoji</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S noto-fonts-emoji
</code></pre></div><p>\u8BBE\u7F6E\u7528\u6237\u5B57\u4F53\u5728 <code>~/.config/fontconfig/fonts.conf</code>\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u7CFB\u7EDF\u5B57\u4F53 <code>/etc/fonts/local.conf</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>?<span class="token operator">&gt;</span>
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
</code></pre></div>`,7);function t(p,e){return n}var c=s(o,[["render",t]]);export{c as default};
