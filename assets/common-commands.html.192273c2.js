import{r as e,c as t,a as n,b as o,F as c,d as a,e as p,o as l}from"./app.76f1a631.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=n("h1",{id:"linux-\u5E38\u7528\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-\u5E38\u7528\u547D\u4EE4","aria-hidden":"true"},"#"),a(" Linux \u5E38\u7528\u547D\u4EE4")],-1),h=n("p",null,"\u7EC8\u7A76\u8FD8\u662F\u8981\u63D0\u53D6\u51FA\u5E38\u7528\u547D\u4EE4\uFF0C\u8BB0\u5FC6\u8D8A\u6765\u8D8A\u5DEE\u4E86\u3002",-1),u=a("\u53D1\u73B0\u4E00\u7BC7\u66F4\u597D\u7684\u603B\u7ED3 "),f={href:"https://linux.cn/article-12959-1.html",target:"_blank",rel:"noopener noreferrer"},m=a("\u521D\u6B21\u767B\u5F55 Linux \u670D\u52A1\u5668\u9A6C\u4E0A\u8981\u505A\u7684 9 \u4EF6\u4E8B"),k=a("\u3002"),g=p(`<h2 id="\u7B2C\u4E00\u6B21\u63A5\u89E6" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u63A5\u89E6" aria-hidden="true">#</a> \u7B2C\u4E00\u6B21\u63A5\u89E6</h2><p>\u5F53\u767B\u5F55\u4E00\u53F0\u670D\u52A1\u5668\u65F6\uFF0C\u4E86\u89E3\u4E00\u4E0B\u5F53\u524D\u73AF\u5883\u66F4\u597D\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/*-release
<span class="token function">uname</span> -a
hostnamectl
<span class="token function">uptime</span>
<span class="token function">ip</span> addr

<span class="token comment"># \u4FEE\u6539\u963F\u91CC\u4E91\u4E3B\u673A\u540D\u8FD8\u9700\u8981\u6CE8\u610F /etc/cloud/cloud.cfg \u914D\u7F6E</span>
<span class="token function">sudo</span> hostnamectl set-hostname shanyuhai
</code></pre></div><h2 id="\u6709\u4EBA\u767B\u5F55\u5728\u4E0A\u9762\u5417" tabindex="-1"><a class="header-anchor" href="#\u6709\u4EBA\u767B\u5F55\u5728\u4E0A\u9762\u5417" aria-hidden="true">#</a> \u6709\u4EBA\u767B\u5F55\u5728\u4E0A\u9762\u5417</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">who</span>
<span class="token function">who</span> -Hu
<span class="token comment"># \u8FC7\u6EE4\u5177\u6709\u8BBF\u95EE\u6743\u9650</span>
<span class="token function">grep</span> sh$ /etc/passwd
</code></pre></div><h2 id="\u7269\u7406\u673A\u8FD8\u662F\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u7269\u7406\u673A\u8FD8\u662F\u865A\u62DF\u673A" aria-hidden="true">#</a> \u7269\u7406\u673A\u8FD8\u662F\u865A\u62DF\u673A</h2><p>\u770B\u770B\u81EA\u5DF1\u662F\u5565\u7CFB\u7EDF\u3002\u5982\u679C\u662F\u7269\u7406\u7CFB\u7EDF\uFF0C\u4F60\u4F1A\u770B\u5230\u4F9B\u5E94\u5546\u7684\u540D\u79F0\uFF08\u5982 HP\u3001IBM \u7B49\uFF09\u4EE5\u53CA\u670D\u52A1\u5668\u7684\u54C1\u724C\u548C\u578B\u53F7\uFF1B\u800C\u5728\u865A\u62DF\u673A\u4E2D\uFF0C\u4F60\u5E94\u8BE5\u770B\u5230 KVM\u3001VirtualBox \u7B49\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u521B\u5EFA\u865A\u62DF\u673A\u65F6\u4F7F\u7528\u4E86\u4EC0\u4E48\u865A\u62DF\u5316\u8F6F\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>dmidecode -s system-manufacturer
dmidecode -s system-product-name
lshw -c system <span class="token operator">|</span> <span class="token function">grep</span> product <span class="token operator">|</span> <span class="token function">head</span> -1
<span class="token function">cat</span> /sys/class/dmi/id/product_name
<span class="token function">cat</span> /sys/class/dmi/id/sys_vendor
</code></pre></div><h2 id="\u786C\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u786C\u4EF6" aria-hidden="true">#</a> \u786C\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>lscpu or <span class="token function">cat</span> /proc/cpuinfo
lsmem or <span class="token function">cat</span> /proc/meminfo
<span class="token function">ifconfig</span> -a
<span class="token function">ethtool</span> <span class="token operator">&lt;</span>devname<span class="token operator">&gt;</span>
lshw
lspci
dmidecode
</code></pre></div><h2 id="\u7F51\u7EDC\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8FDE\u63A5" aria-hidden="true">#</a> \u7F51\u7EDC\u8FDE\u63A5</h2><p>\u8FD9\u662F\u6700\u7ECF\u5E38\u5173\u6CE8\u7684\u4E1C\u897F\u4E86\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">netstat</span> -tulpn <span class="token comment"># ss -tunlp</span>
<span class="token function">netstat</span> -anp
<span class="token comment"># \u67E5\u770B\u5EFA\u7ACB\u7684\u901A\u4FE1</span>
<span class="token function">lsof</span> -i
<span class="token comment"># \u67E5\u770B\u7AEF\u53E3\u670D\u52A1\u5360\u7528</span>
<span class="token function">lsof</span> -i :53
iptables -L -n
<span class="token function">cat</span> /etc/resolv.conf
</code></pre></div><h2 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dmesg</span>
<span class="token function">tail</span> -f /var/log/messages
journalctl
</code></pre></div>`,15);function _(b,x){const s=e("OutboundLink");return l(),t(c,null,[d,h,n("p",null,[u,n("a",f,[m,o(s)]),k]),g],64)}var V=r(i,[["render",_]]);export{V as default};
