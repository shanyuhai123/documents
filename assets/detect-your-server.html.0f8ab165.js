import{e as a}from"./app.63dea666.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const n={},s=a(`<h1 id="\u68C0\u6D4B\u670D\u52A1\u5668\u901A\u8FBE" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u670D\u52A1\u5668\u901A\u8FBE" aria-hidden="true">#</a> \u68C0\u6D4B\u670D\u52A1\u5668\u901A\u8FBE</h1><p>\u9996\u5148\u9700\u8981\u786E\u8BA4\u670D\u52A1\u7AEF\u3001\u5BA2\u6237\u7AEF\u7684\u914D\u7F6E\u5747\u6CA1\u6709\u95EE\u9898\u3002</p><h2 id="\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B" aria-hidden="true">#</a> \u68C0\u6D4B</h2><h3 id="_1-ping" tabindex="-1"><a class="header-anchor" href="#_1-ping" aria-hidden="true">#</a> 1. ping</h3><p>\u68C0\u67E5\u7269\u7406\u94FE\u8DEF\u662F\u5426\u62B5\u8FBE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ping</span> <span class="token punctuation">[</span>ip<span class="token punctuation">]</span>
</code></pre></div><h3 id="_2-tracepath" tabindex="-1"><a class="header-anchor" href="#_2-tracepath" aria-hidden="true">#</a> 2. tracepath</h3><p>\u8DEF\u7531\u8DDF\u8E2A\u6307\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tracepath <span class="token punctuation">[</span>ip<span class="token punctuation">]</span>
</code></pre></div><h3 id="_3-telnet" tabindex="-1"><a class="header-anchor" href="#_3-telnet" aria-hidden="true">#</a> 3. telnet</h3><p>\u68C0\u67E5\u670D\u52A1\u7AEF\u662F\u5426\u63D0\u4F9B\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>telnet <span class="token punctuation">[</span>ip<span class="token punctuation">]</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span>
</code></pre></div><p>\u5F53 telnet \u63D0\u793A\u62D2\u7EDD\u670D\u52A1\u65F6\uFF0C\u5B58\u5728\u4E24\u79CD\u53EF\u80FD\u6027\uFF1A</p><ol><li><p>\u670D\u52A1\u672A\u5F00\u542F\uFF0C\u4E0D\u5B58\u5728\u670D\u52A1\uFF1B</p></li><li><p>\u9632\u706B\u5899\u62D2\u7EDD\u8BBF\u95EE\uFF1A</p><p>\u5728 CentOS6 \u4E2D\u9632\u706B\u5899\u662F iptables\uFF0C\u5728 CentOS7 \u4E2D\u662F firewalld</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl status firewalld
</code></pre></div></li></ol>`,14);function t(p,c){return s}var l=e(n,[["render",t]]);export{l as default};