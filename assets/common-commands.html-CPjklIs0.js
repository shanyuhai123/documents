import{_ as s,c as n,a as e,o as p}from"./app-BoSqM2g3.js";const l={};function t(c,a){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令"><span>Linux 常用命令</span></a></h1><p>终究还是要提取出常用命令，记忆越来越差了。</p><p>发现一篇更好的总结 <a href="https://linux.cn/article-12959-1.html" target="_blank" rel="noopener noreferrer">初次登录 Linux 服务器马上要做的 9 件事</a>。</p><h2 id="第一次接触" tabindex="-1"><a class="header-anchor" href="#第一次接触"><span>第一次接触</span></a></h2><p>当登录一台服务器时，了解一下当前环境更好。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> /etc/*-release</span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-a</span></span>
<span class="line">hostnamectl</span>
<span class="line"><span class="token function">uptime</span></span>
<span class="line"><span class="token function">ip</span> addr</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改阿里云主机名还需要注意 /etc/cloud/cloud.cfg 配置</span></span>
<span class="line"><span class="token function">sudo</span> hostnamectl set-hostname shanyuhai</span>
<span class="line"></span></code></pre></div><h2 id="有人登录在上面吗" tabindex="-1"><a class="header-anchor" href="#有人登录在上面吗"><span>有人登录在上面吗</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">who</span></span>
<span class="line"><span class="token function">who</span> <span class="token parameter variable">-Hu</span></span>
<span class="line"><span class="token comment"># 过滤具有访问权限</span></span>
<span class="line"><span class="token function">grep</span> sh$ /etc/passwd</span>
<span class="line"></span></code></pre></div><h2 id="物理机还是虚拟机" tabindex="-1"><a class="header-anchor" href="#物理机还是虚拟机"><span>物理机还是虚拟机</span></a></h2><p>看看自己是啥系统。如果是物理系统，你会看到供应商的名称（如 HP、IBM 等）以及服务器的品牌和型号；而在虚拟机中，你应该看到 KVM、VirtualBox 等，这取决于创建虚拟机时使用了什么虚拟化软件。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dmidecode <span class="token parameter variable">-s</span> system-manufacturer</span>
<span class="line">dmidecode <span class="token parameter variable">-s</span> system-product-name</span>
<span class="line">lshw <span class="token parameter variable">-c</span> system <span class="token operator">|</span> <span class="token function">grep</span> product <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span></span>
<span class="line"><span class="token function">cat</span> /sys/class/dmi/id/product_name</span>
<span class="line"><span class="token function">cat</span> /sys/class/dmi/id/sys_vendor</span>
<span class="line"></span></code></pre></div><h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件"><span>硬件</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">lscpu or <span class="token function">cat</span> /proc/cpuinfo</span>
<span class="line">lsmem or <span class="token function">cat</span> /proc/meminfo</span>
<span class="line"><span class="token function">ifconfig</span> <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token function">ethtool</span> <span class="token operator">&lt;</span>devname<span class="token operator">&gt;</span></span>
<span class="line">lshw</span>
<span class="line">lspci</span>
<span class="line">dmidecode</span>
<span class="line"></span></code></pre></div><h2 id="网络连接" tabindex="-1"><a class="header-anchor" href="#网络连接"><span>网络连接</span></a></h2><p>这是最经常关注的东西了。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span> <span class="token comment"># ss -tunlp</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-anp</span></span>
<span class="line"><span class="token comment"># 查看建立的通信</span></span>
<span class="line"><span class="token function">lsof</span> <span class="token parameter variable">-i</span></span>
<span class="line"><span class="token comment"># 查看端口服务占用</span></span>
<span class="line"><span class="token function">lsof</span> <span class="token parameter variable">-i</span> :53</span>
<span class="line">iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span></span>
<span class="line"><span class="token function">cat</span> /etc/resolv.conf</span>
<span class="line"></span></code></pre></div><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">dmesg</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages</span>
<span class="line">journalctl</span>
<span class="line"></span></code></pre></div>`,18)])])}const o=s(l,[["render",t]]),r=JSON.parse('{"path":"/os/linux/common-commands.html","title":"Linux 常用命令","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第一次接触","slug":"第一次接触","link":"#第一次接触","children":[]},{"level":2,"title":"有人登录在上面吗","slug":"有人登录在上面吗","link":"#有人登录在上面吗","children":[]},{"level":2,"title":"物理机还是虚拟机","slug":"物理机还是虚拟机","link":"#物理机还是虚拟机","children":[]},{"level":2,"title":"硬件","slug":"硬件","link":"#硬件","children":[]},{"level":2,"title":"网络连接","slug":"网络连接","link":"#网络连接","children":[]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/common-commands.md"}');export{o as comp,r as data};
