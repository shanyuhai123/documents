import{e as a}from"./app.7b865752.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=a(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u521D\u6B65\u5B89\u88C5\u7CFB\u7EDF\u540E\u65E5\u671F\u65F6\u95F4\u663E\u793A\u7684\u5E76\u975E\u5F53\u524D\u65F6\u533A\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 1. \u663E\u793A\u65F6\u95F4</span>
<span class="token function">date</span> -R
<span class="token comment"># Sun, 07 Jul 2019 xx:xx:xx +0000</span>

<span class="token comment"># 2. \u4FEE\u6539\u65F6\u533A</span>
<span class="token function">sudo</span> tzselect
<span class="token comment"># \u6309\u7167\u63D0\u793A\u4FEE\u6539\u5373\u53EF</span>

<span class="token comment"># 3. \u62F7\u8D1D\u6587\u4EF6\u5230\u672C\u5730\u65F6\u95F4</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
<span class="token comment"># \u518D\u6B21\u6267\u884C date -R \u5373\u53EF\u770B\u5230\u6B63\u786E\u65F6\u95F4</span>
</code></pre></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><ul><li><p>\u5E38\u7528\u7684\u65F6\u95F4\u683C\u5F0F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div></li></ul>`,6);function t(c,o){return e}var i=n(s,[["render",t]]);export{i as default};
