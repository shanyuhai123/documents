import{r as e,c as a,a as n,b as s,F as i,d as t,e as o,o as r}from"./app.76078c72.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const d={},c=n("h1",{id:"处理-idea",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#处理-idea","aria-hidden":"true"},"#"),t(" 处理 IDEA")],-1),p=n("h2",{id:"输入法光标不跟随",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入法光标不跟随","aria-hidden":"true"},"#"),t(" 输入法光标不跟随")],-1),u=t("核心是使用 "),h={href:"https://github.com/JetBrains/JetBrainsRuntime",target:"_blank",rel:"noopener noreferrer"},b=t("JetBrainsRuntime"),m=t("，不过糟糕的是编译失败了，有一个提供了 Github Actions 来定时编译的"),f={href:"https://github.com/RikudouPatrickstar/JetBrainsRuntime-for-Linux-x64/releases",target:"_blank",rel:"noopener noreferrer"},g=t("可使用版本"),k=t("。"),j=o('<p>找到本地 IDEA 位置：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">whereis</span> idea\n<span class="token comment"># /opt/intellij-idea-ultimate-edition/</span>\n</code></pre></div><p>将下载好的结果解压并移至 IDEA 目录：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> ~/download/jbr my-jbr\n</code></pre></div><p>再利用 IDEA 的 Choose Runtime 插件选择 <code>jbr</code>：</p><ol><li>按下 <code>Ctrl + Shift + A</code></li><li>输入 <code>Choose Runtime</code></li><li>选择下载的 <code>/opt/intellij-idea-ultimate-edition/my-jbr</code></li><li>重启即可</li></ol>',6);var x=l(d,[["render",function(t,o){const l=e("OutboundLink");return r(),a(i,null,[c,p,n("p",null,[u,n("a",h,[b,s(l)]),m,n("a",f,[g,s(l)]),k]),j],64)}]]);export{x as default};
