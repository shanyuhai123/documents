import{e as a}from"./app.fdddc89c.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const d={},s=a(`<h1 id="\u5728-manjaro-\u5B89\u88C5-deb-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5728-manjaro-\u5B89\u88C5-deb-\u7A0B\u5E8F" aria-hidden="true">#</a> \u5728 Manjaro \u5B89\u88C5 deb \u7A0B\u5E8F</h1><p>\u867D\u7136\u5F88\u591A\u7A0B\u5E8F\u5DF2\u7ECF\u652F\u6301\u4E86 Linux \u5E73\u53F0\uFF0C\u4F46\u5927\u591A\u6570\u4EC5\u63D0\u4F9B\u4E86 <code>deb</code> \u5305\u3002</p><h2 id="\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> \u64CD\u4F5C\u6B65\u9AA4</h2><p>\u5B89\u88C5 <code>debtap</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yay -S debtap
</code></pre></div><p>\u66F4\u65B0 <code>debtap</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> debtap -u
</code></pre></div><p>\u627E\u5230\u4F60\u4E0B\u8F7D\u597D\u7684 <code>deb</code> \u5305\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>debtap example_2.8.0.0_x86_64.publish.deb
</code></pre></div><p>\u6700\u540E\u4F7F\u7528 <code>pacman</code> \u5B89\u88C5\u672C\u5730 <code>pkg</code> \u5373\u53EF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -U example_2.8.0.0_x86_64.pkg.tar.zst
</code></pre></div>`,11);function c(n,o){return s}var t=e(d,[["render",c]]);export{t as default};
