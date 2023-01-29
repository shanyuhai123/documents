import{_ as e,M as t,p as c,q as o,Q as a,t as n,N as p,a1 as r}from"./framework-49860b1b.js";const l={},i=a("h1",{id:"linux-常用命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linux-常用命令","aria-hidden":"true"},"#"),n(" Linux 常用命令")],-1),d=a("p",null,"终究还是要提取出常用命令，记忆越来越差了。",-1),h={href:"https://linux.cn/article-12959-1.html",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="第一次接触" tabindex="-1"><a class="header-anchor" href="#第一次接触" aria-hidden="true">#</a> 第一次接触</h2><p>当登录一台服务器时，了解一下当前环境更好。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/*-release
<span class="token function">uname</span> <span class="token parameter variable">-a</span>
hostnamectl
<span class="token function">uptime</span>
<span class="token function">ip</span> addr

<span class="token comment"># 修改阿里云主机名还需要注意 /etc/cloud/cloud.cfg 配置</span>
<span class="token function">sudo</span> hostnamectl set-hostname shanyuhai
</code></pre></div><h2 id="有人登录在上面吗" tabindex="-1"><a class="header-anchor" href="#有人登录在上面吗" aria-hidden="true">#</a> 有人登录在上面吗</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">who</span>
<span class="token function">who</span> <span class="token parameter variable">-Hu</span>
<span class="token comment"># 过滤具有访问权限</span>
<span class="token function">grep</span> sh$ /etc/passwd
</code></pre></div><h2 id="物理机还是虚拟机" tabindex="-1"><a class="header-anchor" href="#物理机还是虚拟机" aria-hidden="true">#</a> 物理机还是虚拟机</h2><p>看看自己是啥系统。如果是物理系统，你会看到供应商的名称（如 HP、IBM 等）以及服务器的品牌和型号；而在虚拟机中，你应该看到 KVM、VirtualBox 等，这取决于创建虚拟机时使用了什么虚拟化软件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>dmidecode <span class="token parameter variable">-s</span> system-manufacturer
dmidecode <span class="token parameter variable">-s</span> system-product-name
lshw <span class="token parameter variable">-c</span> system <span class="token operator">|</span> <span class="token function">grep</span> product <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span>
<span class="token function">cat</span> /sys/class/dmi/id/product_name
<span class="token function">cat</span> /sys/class/dmi/id/sys_vendor
</code></pre></div><h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件" aria-hidden="true">#</a> 硬件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lscpu or <span class="token function">cat</span> /proc/cpuinfo
lsmem or <span class="token function">cat</span> /proc/meminfo
<span class="token function">ifconfig</span> <span class="token parameter variable">-a</span>
<span class="token function">ethtool</span> <span class="token operator">&lt;</span>devname<span class="token operator">&gt;</span>
lshw
lspci
dmidecode
</code></pre></div><h2 id="网络连接" tabindex="-1"><a class="header-anchor" href="#网络连接" aria-hidden="true">#</a> 网络连接</h2><p>这是最经常关注的东西了。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span> <span class="token comment"># ss -tunlp</span>
<span class="token function">netstat</span> <span class="token parameter variable">-anp</span>
<span class="token comment"># 查看建立的通信</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span>
<span class="token comment"># 查看端口服务占用</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> :53
iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span>
<span class="token function">cat</span> /etc/resolv.conf
</code></pre></div><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dmesg</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages
journalctl
</code></pre></div>`,15);function m(k,f){const s=t("ExternalLinkIcon");return c(),o("div",null,[i,d,a("p",null,[n("发现一篇更好的总结 "),a("a",h,[n("初次登录 Linux 服务器马上要做的 9 件事"),p(s)]),n("。")]),u])}const g=e(l,[["render",m],["__file","common-commands.html.vue"]]);export{g as default};
