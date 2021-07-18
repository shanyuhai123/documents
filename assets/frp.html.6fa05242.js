import{r as a,o as s,c as n,a as e,w as t,F as p,b as o,d as c}from"./app.8ebc0fbd.js";const r={},l=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),o(" 介绍")],-1),i={class:"custom-container tip"},d=e("p",{class:"custom-container-title"},"TIP",-1),u=e("p",null,[o("FRP（Fast Reverse Proxy）is a fast reverse proxy to help you expose a local server behind a NAT or firewall to the Internet. As of now, it supports "),e("strong",null,"TCP"),o(" and "),e("strong",null,"UDP"),o(", as well as "),e("strong",null,"HTTP"),o(" and "),e("strong",null,"HTTPS"),o(" protocols, where requests can be forwarded to internal services by domain name.")],-1),k=o("来自 "),h={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},f=o("FRP"),g=e("p",null,"此处仅以配置 SSH 服务为示例。",-1),v=e("h2",{id:"准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),o(" 准备")],-1),m=e("h3",{id:"_1-安全设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-安全设置","aria-hidden":"true"},"#"),o(" 1. 安全设置")],-1),b=o("这是一件有风险的事情，所以开始前最好确认你的公网、内网服务器都已经做好防护工作，可参考"),_=o("SSH 让你的服务器更安全"),x=o("。"),y=e("h3",{id:"_2-资源下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-资源下载","aria-hidden":"true"},"#"),o(" 2. 资源下载")],-1),S=o("需要在 github 上下载最新的 "),E={href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"},A=o("frp release"),w=o(" 到公网、内网服务器上，注意选择对应的版本。"),F=c('<h3 id="_3-端口开放" tabindex="-1"><a class="header-anchor" href="#_3-端口开放" aria-hidden="true">#</a> 3. 端口开放</h3><p>如果是阿里云，需要在云实例中开放下方将要使用的端口。</p><ul><li><code>bind_port/server_port</code></li><li><code>remote_port</code></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="_1-公网服务器" tabindex="-1"><a class="header-anchor" href="#_1-公网服务器" aria-hidden="true">#</a> 1. 公网服务器</h3><p>公网服务器修改 <code>frps.ini</code> 文件。</p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token comment"># frps.ini</span>\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>\n</code></pre></div><p>配置解释：</p><ul><li><code>bind_port</code> 为 <code>frp</code> 服务器端接收客户端流量的端口</li></ul><p>启动服务端 <code>frp</code> 程序。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frps -c frps.ini <span class="token operator">&amp;</span>\n</code></pre></div><h3 id="_2-内网服务器" tabindex="-1"><a class="header-anchor" href="#_2-内网服务器" aria-hidden="true">#</a> 2. 内网服务器</h3><p>内网服务器修改 <code>frpc.ini</code> 文件。</p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token comment"># frpc.ini</span>\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">x.x.x.x</span>\n<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>\n\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">ssh</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>\n<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>\n<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>\n<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>\n</code></pre></div><p>配置解释：</p><ul><li><code>server_addr</code> 为 <code>frp</code> 服务端 <code>ip</code> 地址，也可以是域名</li><li><code>server_port</code> 为 <code>frp</code> 服务端的 <code>bind_port</code></li><li><code>local_ip</code> 为 <code>frp</code> 客户端的 <code>ip</code> 或 <code>127.0.0.1</code></li><li><code>local_port</code> 为 <code>frp</code> 客户端的 ssh 端口，其默认为 22，在安全设置时可能修改为其他</li><li><code>remote_port</code> 为 <code>frp</code> 客户端挂载到 <code>frp</code> 服务端的端口。在此示例中访问服务端 <code>6000</code> 端口相当于访问客户端 <code>22</code> 端口</li></ul><p>启动客户端 <code>frp</code> 程序。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frpc -c frpc.ini <span class="token operator">&amp;</span>\n</code></pre></div><h3 id="_3-停止服务" tabindex="-1"><a class="header-anchor" href="#_3-停止服务" aria-hidden="true">#</a> 3. 停止服务</h3><p>以上述形式启动的服务，需要先找到进程号再停止。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>\n<span class="token comment"># 72029</span>\n<span class="token function">kill</span> -9 <span class="token number">72029</span>\n\n<span class="token comment"># 验证</span>\n<span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>\n</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-公网跳板-不推荐" tabindex="-1"><a class="header-anchor" href="#_1-公网跳板-不推荐" aria-hidden="true">#</a> 1. 公网跳板（不推荐）</h3>',23),R=o("在之前安全设置中已经使用了密钥登录，为了简化操作可以配置 "),T=o("ssh config"),P=o("。"),B=c('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 进入公网</span>\n<span class="token function">ssh</span> aliyun\n\n<span class="token comment"># 再从公网进入内网</span>\n<span class="token function">ssh</span> private\n</code></pre></div><h3 id="_2-直接访问" tabindex="-1"><a class="header-anchor" href="#_2-直接访问" aria-hidden="true">#</a> 2. 直接访问</h3><p>若公网服务端被黑了，就会导致黑客可以直接进入你的内网。当然如果希望公网只是一个跳板，方便其余机器进入也可以选择上一种方式。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 直接访问内网</span>\n<span class="token comment"># 配置该 config 时可以认识到 `local_port` 与 `remote_port` 之间的关系</span>\n<span class="token function">ssh</span> aliyun2private\n</code></pre></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>在下载对应的 <code>frp</code> 文件时，解压后注意到存在 <code>systemd</code> 文件夹，查看例如服务端配置。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># cat systemd/frps.service</span>\n\n<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\n<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Server Service\n<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target\n\n<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\n<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple\n<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody\n<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure\n<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s\n<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frps -c /etc/frp/frps.ini\n\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\n<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target\n\n<span class="token comment"># cat systemd/frpc.service</span>\n\n<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\n<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Client Service\n<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target\n\n<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\n<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple\n<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody\n<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure\n<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s\n<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frpc -c /etc/frp/frpc.ini\n<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/bin/frpc reload -c /etc/frp/frpc.ini\n\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\n<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target\n</code></pre></div><p>仅说明 <code>frps.service</code> 配置文件：</p><ul><li><code>frps</code> 启动程序放入 <code>/usr/bin</code> 目录中</li><li><code>frps.ini</code> 配置文件放入 <code>/etc/frp</code> 目录中</li><li><code>frps.service</code> 服务程序放入 <code>/lib/systemd/system</code> 目录中</li></ul><p>最后：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 更新服务文件，记得加上 sudo</span>\n<span class="token function">sudo</span> systemctl daemon-reload\n\n<span class="token comment"># 开启</span>\n<span class="token function">sudo</span> systemctl start frps\n</code></pre></div>',11);r.render=function(o,c){const r=a("OutboundLink"),U=a("RouterLink");return s(),n(p,null,[l,e("div",i,[d,u,e("p",null,[k,e("a",h,[f,e(r)])])]),g,v,m,e("p",null,[b,e(U,{to:"/os/linux/ssh-makes-your-server-more-secure.html"},{default:t((()=>[_])),_:1}),x]),y,e("p",null,[S,e("a",E,[A,e(r)]),w]),F,e("p",null,[R,e(U,{to:"/os/linux/login-with-rsa-key.html#%E5%BF%AB%E9%80%9F%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E5%99%A8"},{default:t((()=>[T])),_:1}),P]),B],64)};export default r;
