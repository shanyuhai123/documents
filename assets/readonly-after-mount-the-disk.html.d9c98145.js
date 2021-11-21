import{e as n}from"./app.783040d4.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=n(`<h1 id="manjaro-\u6302\u8F7D\u786C\u76D8\u540E\u53EA\u8BFB" tabindex="-1"><a class="header-anchor" href="#manjaro-\u6302\u8F7D\u786C\u76D8\u540E\u53EA\u8BFB" aria-hidden="true">#</a> Manjaro \u6302\u8F7D\u786C\u76D8\u540E\u53EA\u8BFB</h1><h2 id="\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u60C5\u51B5" aria-hidden="true">#</a> \u60C5\u51B5</h2><p>\u53CC\u7CFB\u7EDF\u4F7F\u7528\u60C5\u51B5\u4E0B\uFF0C\u5F53\u5207\u6362\u7CFB\u7EDF\u65F6\u6302\u8F7D\u786C\u76D8\u65F6\u4EC5\u5177\u6709\u53EA\u8BFB\u6743\u9650\u3002</p><p>\u76F4\u63A5\u4F7F\u7528 <code>dolpgin</code> \u64CD\u4F5C\u65E0\u63D0\u793A\uFF0C\u540E\u91C7\u7528\u547D\u4EE4\u884C\u64CD\u4F5C\u5F97\u5230\u63D0\u793A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda2 /run/media/shanyuhai/GROCERY

<span class="token comment"># \u63D0\u793A</span>
The disk contains an unclean <span class="token function">file</span> system <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span>.
Metadata kept <span class="token keyword">in</span> Windows cache, refused to mount.
Falling back to read-only <span class="token function">mount</span> because the NTFS partition is <span class="token keyword">in</span> an
unsafe state. Please resume and <span class="token function">shutdown</span> Windows fully <span class="token punctuation">(</span>no hibernation
or fast restarting.<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D" aria-hidden="true">#</a> \u4FEE\u590D</h2><p>\u53EF\u5229\u7528 <code>ntfs</code> \u81EA\u5E26\u7684\u4FEE\u590D\u5DE5\u5177\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ntfsfix /dev/sda2

<span class="token comment"># \u518D\u6B21\u6302\u8F7D</span>
<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda2 /run/media/shanyuhai/GROCERY
</code></pre></div><p>\u518D\u6B21\u5C1D\u8BD5\u5728\u6587\u4EF6\u5939\u5185\u8FDB\u884C\u7F16\u8F91\u3001\u5220\u9664\u64CD\u4F5C\u53D1\u73B0\u53EF\u884C\u4E86\u3002</p>`,9);function t(o,c){return e}var i=a(s,[["render",t]]);export{i as default};
