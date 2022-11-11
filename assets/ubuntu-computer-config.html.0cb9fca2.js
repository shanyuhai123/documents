import{e as n}from"./app.5799edae.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const a={},s=n(`<h1 id="ubuntu-\u8BA1\u7B97\u673A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#ubuntu-\u8BA1\u7B97\u673A\u914D\u7F6E" aria-hidden="true">#</a> Ubuntu \u8BA1\u7B97\u673A\u914D\u7F6E</h1><h2 id="\u7B14\u8BB0\u672C\u5408\u76D6\u4E0D\u4F11\u7720" tabindex="-1"><a class="header-anchor" href="#\u7B14\u8BB0\u672C\u5408\u76D6\u4E0D\u4F11\u7720" aria-hidden="true">#</a> \u7B14\u8BB0\u672C\u5408\u76D6\u4E0D\u4F11\u7720</h2><p>\u4FEE\u6539\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/logind.conf

<span class="token comment">#HandlePowerKey \u6309\u4E0B\u7535\u6E90\u952E\u540E\u7684\u884C\u4E3A\uFF0C\u9ED8\u8BA4power off</span>
<span class="token comment">#HandleSleepKey \u6309\u4E0B\u6302\u8D77\u952E\u540E\u7684\u884C\u4E3A\uFF0C\u9ED8\u8BA4suspend</span>
<span class="token comment">#HandleHibernateKey \u6309\u4E0B\u4F11\u7720\u952E\u540E\u7684\u884C\u4E3A\uFF0C\u9ED8\u8BA4hibernate</span>
<span class="token comment">#HandleLidSwitch \u5408\u4E0A\u7B14\u8BB0\u672C\u76D6\u540E\u7684\u884C\u4E3A\uFF0C\u9ED8\u8BA4suspend</span>

<span class="token comment"># \u4FEE\u6539 HandleLidSwitch \u4E3A ignore</span>
</code></pre></div><p>\u91CD\u542F\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart systemd-logind

<span class="token comment"># \u6216\u8005\u76F4\u63A5\u91CD\u542F\u7535\u8111</span>
<span class="token function">reboot</span>
</code></pre></div>`,6);function t(o,c){return s}var r=e(a,[["render",t]]);export{r as default};
