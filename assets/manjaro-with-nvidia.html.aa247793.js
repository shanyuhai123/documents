import{r as o,c as t,a as e,b as s,F as c,d as a,e as i,o as r}from"./app.53b3c455.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const l={},p=e("h1",{id:"manjaro-\u4E0B\u4F7F\u7528-nvidia-\u663E\u5361",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#manjaro-\u4E0B\u4F7F\u7528-nvidia-\u663E\u5361","aria-hidden":"true"},"#"),a(" Manjaro \u4E0B\u4F7F\u7528 Nvidia \u663E\u5361")],-1),h=a("\u53C2\u8003 "),m={href:"https://blog.kongjune.com/manjaro-prime/",target:"_blank",rel:"noopener noreferrer"},u=a("\u5728 Manjaro \u914D\u7F6E Optimus manager \u5B9E\u73B0 Nvidia-Prime \u53CC\u663E\u5361\u89E3\u51B3\u65B9\u6848"),_=a(" \u5373\u53EF\u3002"),g=i(`<h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><p>\u7531\u4E8E\u4F7F\u7528\u7684\u7248\u672C\u4E3A <code>manjaro Lysia</code>\uFF0C\u6240\u4EE5\u914D\u7F6E\u9879\u90FD\u65E0\u9700\u5904\u7406\uFF0C\u4EC5\u4EC5\u662F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S optimus-manager

<span class="token comment"># \u518D\u4ECE yay \u5B89\u88C5\u9762\u677F</span>
yay -S optimus-manager-qt
</code></pre></div><p>\u63A5\u7740\u53EF\u5728\u8BBE\u7F6E -&gt; \u7CFB\u7EDF\u4FE1\u606F\u4E2D\u770B\u5230\u56FE\u5F62\u5904\u7406\u5668\u5DF2\u5207\u6362\u4E3A Nvidia\uFF0C\u6216\u8005\u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nvidia-settings
</code></pre></div><h2 id="acpi-call-\u7684\u5C1D\u8BD5" tabindex="-1"><a class="header-anchor" href="#acpi-call-\u7684\u5C1D\u8BD5" aria-hidden="true">#</a> acpi_call \u7684\u5C1D\u8BD5</h2><blockquote><p>2020-12-17 \u66F4\u65B0</p></blockquote><p>\u5728\u540E\u7EED\u7684\u4F7F\u7528\u4E2D <code>bbsswitch</code> \u4F3C\u4E4E\u88AB\u5378\u8F7D\u4E86\uFF08\u4E0D\u786E\u5B9A\u662F\u6211\u4E2A\u4EBA\u5378\u8F7D\uFF0C\u8FD8\u662F\u7CFB\u7EDF\u5347\u7EA7\u88AB\u79FB\u9664\uFF09\u5BFC\u81F4\u5207\u6362\u5931\u8D25\u3002</p><p>\u5728\u4E0A\u9762\u7684\u9875\u9762\u4E2D\u8FD8\u6709\u5176\u4ED6\u9009\u62E9\uFF0C\u5982 <code>acpi_call</code>\uFF0C\u6240\u4EE5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> pacman -S acpi_call-dkms

<span class="token comment"># \u542F\u7528</span>
<span class="token function">sudo</span> modprobe acpi_call
</code></pre></div>`,10),b=a("\u63A5\u7740\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177 "),f={href:"https://github.com/dglt1/optimus-switch-sddm",target:"_blank",rel:"noopener noreferrer"},k=a("optimus-switch-sddm"),v=a("\u3002"),x=e("p",null,[a("\u5728\u754C\u9762 QT \u5DE5\u5177\u4E2D\u9009\u7528 "),e("code",null,"acpi_call"),a(" \u5BFC\u81F4\u684C\u9762\u65E0\u6CD5\u542F\u52A8\uFF0C\u672A\u6392\u67E5\u51FA\u539F\u56E0\uFF0C\u540E\u7EED\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 "),e("code",null,"/etc/optimus-manager/optimus-manager.conf"),a("\uFF0C\u6539\u56DE "),e("code",null,"switching=bbswitch"),a(" \u624D\u4F7F\u5F97\u684C\u9762\u542F\u52A8\u3002")],-1);function j(N,w){const n=o("OutboundLink");return r(),t(c,null,[p,e("p",null,[h,e("a",m,[u,s(n)]),_]),g,e("p",null,[b,e("a",f,[k,s(n)]),v]),x],64)}var V=d(l,[["render",j]]);export{V as default};