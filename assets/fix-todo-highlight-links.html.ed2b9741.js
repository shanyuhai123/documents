import{r as o,c as a,a as e,b as s,F as d,d as t,e as i,o as r}from"./app.e62aeb11.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const l={},p=e("h1",{id:"\u4FEE\u590D-todo-highlight-\u7684\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4FEE\u590D-todo-highlight-\u7684\u94FE\u63A5","aria-hidden":"true"},"#"),t(" \u4FEE\u590D TODO HIGHLIGHT \u7684\u94FE\u63A5")],-1),h={href:"https://github.com/wayou/vscode-todo-highlight",target:"_blank",rel:"noopener noreferrer"},_=t("VSCODE-TODO-HIGHLIGHT"),u=t(" \u5728 linux \u5E73\u53F0\u4E0B\u8F93\u51FA\u6240\u6709\u4E8B\u9879\u65F6\u5BF9\u8DEF\u5F84\u8FDB\u884C\u4E86\u7F16\u7801\uFF0C\u5BFC\u81F4\u8DF3\u8F6C\u5931\u8D25\u3002"),f=i(`<h2 id="\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D" aria-hidden="true">#</a> \u4FEE\u590D</h2><p>\u7531\u4E8E\u4F5C\u8005\u8BB8\u4E45\u672A\u7EF4\u62A4\u4E14\u4E0D\u60F3\u53D1\u5305\uFF0C\u6240\u4EE5\u672C\u5730\u8FDB\u884C\u4FEE\u6539\u5373\u53EF\uFF0C\u6253\u5F00\u63D2\u4EF6\u5B89\u88C5\u4F4D\u7F6E <code>~/.vscode/extensions</code>\uFF0C\u627E\u5230 <code>vscode-todo-highlight</code> \u7684 <code>util</code> \u6587\u4EF6\uFF1A</p><div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> var patternB = &#39;#&#39; + (i + 1) + &#39;\\t&#39; + v.uri + &#39;:&#39; + (v.lineNum + 1) + &#39;:&#39; + (v.startCol + 1);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> var patternB = &#39;#&#39; + (i + 1) + &#39;\\t&#39; + decodeURIComponent(v.uri) + &#39;:&#39; + (v.lineNum + 1) + &#39;:&#39; + (v.startCol + 1)
</span></span></code></pre></div><p>\u91CD\u542F VSCode \u5373\u53EF\u3002</p>`,4);function g(v,m){const n=o("OutboundLink");return r(),a(d,null,[p,e("p",null,[e("a",h,[_,s(n)]),u]),f],64)}var b=c(l,[["render",g]]);export{b as default};
