import{_ as r,M as o,p as l,q as i,Q as a,t as s,N as n,V as p,a1 as c}from"./framework-49860b1b.js";const d={},u=a("h1",{id:"内网穿透-frp",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#内网穿透-frp","aria-hidden":"true"},"#"),s(" 内网穿透 FRP")],-1),k={class:"custom-container tip"},h=a("p",{class:"custom-container-title"},"TIP",-1),f=a("p",null,[s("FRP（Fast Reverse Proxy）is a fast reverse proxy to help you expose a local server behind a NAT or firewall to the Internet. As of now, it supports "),a("strong",null,"TCP"),s(" and "),a("strong",null,"UDP"),s(", as well as "),a("strong",null,"HTTP"),s(" and "),a("strong",null,"HTTPS"),s(" protocols, where requests can be forwarded to internal services by domain name.")],-1),m={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,"此处仅以配置 SSH 服务为示例。",-1),_=a("h2",{id:"准备",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),s(" 准备")],-1),g=a("h3",{id:"_1-安全设置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-安全设置","aria-hidden":"true"},"#"),s(" 1. 安全设置")],-1),b=a("h3",{id:"_2-资源下载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-资源下载","aria-hidden":"true"},"#"),s(" 2. 资源下载")],-1),x={href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"},y=c(`<h3 id="_3-端口开放" tabindex="-1"><a class="header-anchor" href="#_3-端口开放" aria-hidden="true">#</a> 3. 端口开放</h3><p>如果是阿里云，需要在云实例中开放下方将要使用的端口。</p><ul><li><code>bind_port/server_port</code></li><li><code>remote_port</code></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="_1-公网服务器" tabindex="-1"><a class="header-anchor" href="#_1-公网服务器" aria-hidden="true">#</a> 1. 公网服务器</h3><p>公网服务器修改 <code>frps.ini</code> 文件。</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># frps.ini</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
</code></pre></div><p>配置解释：</p><ul><li><code>bind_port</code> 为 <code>frp</code> 服务器端接收客户端流量的端口</li></ul><p>启动服务端 <code>frp</code> 程序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frps <span class="token parameter variable">-c</span> frps.ini <span class="token operator">&amp;</span>
</code></pre></div><h3 id="_2-内网服务器" tabindex="-1"><a class="header-anchor" href="#_2-内网服务器" aria-hidden="true">#</a> 2. 内网服务器</h3><p>内网服务器修改 <code>frpc.ini</code> 文件。</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># frpc.ini</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">x.x.x.x</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">ssh</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
</code></pre></div><p>配置解释：</p><ul><li><code>server_addr</code> 为 <code>frp</code> 服务端 <code>ip</code> 地址，也可以是域名</li><li><code>server_port</code> 为 <code>frp</code> 服务端的 <code>bind_port</code></li><li><code>local_ip</code> 为 <code>frp</code> 客户端的 <code>ip</code> 或 <code>127.0.0.1</code></li><li><code>local_port</code> 为 <code>frp</code> 客户端的 ssh 端口，其默认为 22，在安全设置时可能修改为其他</li><li><code>remote_port</code> 为 <code>frp</code> 客户端挂载到 <code>frp</code> 服务端的端口。在此示例中访问服务端 <code>6000</code> 端口相当于访问客户端 <code>22</code> 端口</li></ul><p>启动客户端 <code>frp</code> 程序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frpc <span class="token parameter variable">-c</span> frpc.ini <span class="token operator">&amp;</span>
</code></pre></div><h3 id="_3-停止服务" tabindex="-1"><a class="header-anchor" href="#_3-停止服务" aria-hidden="true">#</a> 3. 停止服务</h3><p>以上述形式启动的服务，需要先找到进程号再停止。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span>
<span class="token comment"># 72029</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">72029</span>

<span class="token comment"># 验证</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span>
</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-公网跳板-不推荐" tabindex="-1"><a class="header-anchor" href="#_1-公网跳板-不推荐" aria-hidden="true">#</a> 1. 公网跳板（不推荐）</h3>`,23),E=c(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入公网</span>
<span class="token function">ssh</span> aliyun

<span class="token comment"># 再从公网进入内网</span>
<span class="token function">ssh</span> private
</code></pre></div><h3 id="_2-直接访问" tabindex="-1"><a class="header-anchor" href="#_2-直接访问" aria-hidden="true">#</a> 2. 直接访问</h3><p>若公网服务端被黑了，就会导致黑客可以直接进入你的内网。当然如果希望公网只是一个跳板，方便其余机器进入也可以选择上一种方式。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 直接访问内网</span>
<span class="token comment"># 配置该 config 时可以认识到 \`local_port\` 与 \`remote_port\` 之间的关系</span>
<span class="token function">ssh</span> aliyun2private
</code></pre></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>在下载对应的 <code>frp</code> 文件时，解压后注意到存在 <code>systemd</code> 文件夹，查看例如服务端配置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat systemd/frps.service</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Server Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frps <span class="token parameter variable">-c</span> /etc/frp/frps.ini

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token comment"># cat systemd/frpc.service</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Client Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frpc <span class="token parameter variable">-c</span> /etc/frp/frpc.ini
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/bin/frpc reload <span class="token parameter variable">-c</span> /etc/frp/frpc.ini

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>仅说明 <code>frps.service</code> 配置文件：</p><ul><li><code>frps</code> 启动程序放入 <code>/usr/bin</code> 目录中</li><li><code>frps.ini</code> 配置文件放入 <code>/etc/frp</code> 目录中</li><li><code>frps.service</code> 服务程序放入 <code>/lib/systemd/system</code> 目录中</li></ul><p>最后：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新服务文件，记得加上 sudo</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 开启</span>
<span class="token function">sudo</span> systemctl start frps
</code></pre></div>`,11);function S(R,A){const e=o("ExternalLinkIcon"),t=o("RouterLink");return l(),i("div",null,[u,a("div",k,[h,f,a("p",null,[s("来自 "),a("a",m,[s("FRP"),n(e)])])]),v,_,g,a("p",null,[s("这是一件有风险的事情，所以开始前最好确认你的公网、内网服务器都已经做好防护工作，可参考"),n(t,{to:"/os/linux/ssh-makes-your-server-more-secure.html"},{default:p(()=>[s("SSH 让你的服务器更安全")]),_:1}),s("。")]),b,a("p",null,[s("需要在 github 上下载最新的 "),a("a",x,[s("frp release"),n(e)]),s(" 到公网、内网服务器上，注意选择对应的版本。")]),y,a("p",null,[s("在之前安全设置中已经使用了密钥登录，为了简化操作可以配置 "),n(t,{to:"/os/linux/login-with-rsa-key.html#%E5%BF%AB%E9%80%9F%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E5%99%A8"},{default:p(()=>[s("ssh config")]),_:1}),s("。")]),E])}const w=r(d,[["render",S],["__file","frp.html.vue"]]);export{w as default};
