import{r as n,o as a,c as s,a as e,F as t,b as c,d as o}from"./app.221f0787.js";const p={},l=e("h2",{id:"说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#说明","aria-hidden":"true"},"#"),c(" 说明")],-1),r=e("p",null,"终究还是要提取出常用命令，记忆越来越差了。",-1),d=c("发现一篇更好的总结 "),i={href:"https://linux.cn/article-12959-1.html",target:"_blank",rel:"noopener noreferrer"},h=c("初次登录 Linux 服务器马上要做的 9 件事"),u=c("。"),f=o('<h2 id="第一次接触" tabindex="-1"><a class="header-anchor" href="#第一次接触" aria-hidden="true">#</a> 第一次接触</h2><p>当登录一台服务器时，了解一下当前环境更好。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/*-release\n<span class="token function">uname</span> -a\nhostnamectl\n<span class="token function">uptime</span>\n<span class="token function">ip</span> addr\n\n<span class="token comment"># 修改阿里云主机名还需要注意 /etc/cloud/cloud.cfg 配置</span>\n<span class="token function">sudo</span> hostnamectl set-hostname shanyuhai\n</code></pre></div><h2 id="有人登录在上面吗" tabindex="-1"><a class="header-anchor" href="#有人登录在上面吗" aria-hidden="true">#</a> 有人登录在上面吗</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">who</span>\n<span class="token function">who</span> -Hu\n<span class="token comment"># 过滤具有访问权限</span>\n<span class="token function">grep</span> sh$ /etc/passwd\n</code></pre></div><h2 id="物理机还是虚拟机" tabindex="-1"><a class="header-anchor" href="#物理机还是虚拟机" aria-hidden="true">#</a> 物理机还是虚拟机</h2><p>看看自己是啥系统。如果是物理系统，你会看到供应商的名称（如 HP、IBM 等）以及服务器的品牌和型号；而在虚拟机中，你应该看到 KVM、VirtualBox 等，这取决于创建虚拟机时使用了什么虚拟化软件。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>dmidecode -s system-manufacturer\ndmidecode -s system-product-name\nlshw -c system <span class="token operator">|</span> <span class="token function">grep</span> product <span class="token operator">|</span> <span class="token function">head</span> -1\n<span class="token function">cat</span> /sys/class/dmi/id/product_name\n<span class="token function">cat</span> /sys/class/dmi/id/sys_vendor\n</code></pre></div><h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件" aria-hidden="true">#</a> 硬件</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>lscpu or <span class="token function">cat</span> /proc/cpuinfo\nlsmem or <span class="token function">cat</span> /proc/meminfo\n<span class="token function">ifconfig</span> -a\n<span class="token function">ethtool</span> <span class="token operator">&lt;</span>devname<span class="token operator">&gt;</span>\nlshw\nlspci\ndmidecode\n</code></pre></div><h2 id="网络连接" tabindex="-1"><a class="header-anchor" href="#网络连接" aria-hidden="true">#</a> 网络连接</h2><p>这是最经常关注的东西了。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">netstat</span> -tulpn <span class="token comment"># ss -tunlp</span>\n<span class="token function">netstat</span> -anp\n<span class="token comment"># 查看建立的通信</span>\n<span class="token function">lsof</span> -i\n<span class="token comment"># 查看端口服务占用</span>\n<span class="token function">lsof</span> -i :53\niptables -L -n\n<span class="token function">cat</span> /etc/resolv.conf\n</code></pre></div><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dmesg</span>\n<span class="token function">tail</span> -f /var/log/messages\njournalctl\n</code></pre></div>',15);p.render=function(c,o){const p=n("OutboundLink");return a(),s(t,null,[l,r,e("p",null,[d,e("a",i,[h,e(p)]),u]),f],64)};export default p;
