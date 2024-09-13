import{_ as l,M as p,p as c,q as i,R as a,t as n,N as e,a1 as o,V as d}from"./framework-e3e34937.js";const h={},u={href:"https://en.wikipedia.org/wiki/Secure_Shell_Protocol",target:"_blank",rel:"noopener noreferrer"},m={href:"https://en.wikipedia.org/wiki/Port_forwarding",target:"_blank",rel:"noopener noreferrer"};function k(b,s){const t=p("ExternalLinkIcon"),r=p("RouterLink");return c(),i("div",null,[s[11]||(s[11]=a("h1",{id:"ssh-让你的服务器更安全",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ssh-让你的服务器更安全","aria-hidden":"true"},"#"),n(" SSH 让你的服务器更安全")],-1)),s[12]||(s[12]=a("p",null,"安全是相对而言的，正在不断探索中。",-1)),s[13]||(s[13]=a("h2",{id:"ssh-架构",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ssh-架构","aria-hidden":"true"},"#"),n(" SSH 架构")],-1)),a("p",null,[a("a",u,[s[0]||(s[0]=a("strong",null,"Secure Shell Protocol",-1)),s[1]||(s[1]=n(" (")),s[2]||(s[2]=a("strong",null,"SSH",-1)),s[3]||(s[3]=n(")")),e(t)]),s[4]||(s[4]=n(" 分为两个部分，默认安装："))]),s[14]||(s[14]=o(`<ul><li>客户端(ssh)：全局配置路径为 <code>/etc/ssh/ssh_config</code>，当前用户为 <code>~/.ssh</code>。</li><li>服务端(sshd)：全局配置路径为 <code>/etc/ssh/sshd_config</code>，以及对应用户的 <code>~/.ssh/authorized_keys</code>。</li></ul><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><p>访问服务器，第一次访问服务器会出现认证提示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># user 为用户名</span>
<span class="token comment"># hostname 为主机名（域名、IP）</span>
<span class="token function">ssh</span> user@hostname
</code></pre></div><p>也可以快速执行服务器命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行 ls</span>
<span class="token function">ssh</span> user@hostname <span class="token function">ls</span> <span class="token parameter variable">-al</span>

<span class="token comment"># 交互式需添加 -t</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> user@hostname <span class="token function">vim</span> xxx.conf
</code></pre></div><h3 id="客户端生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#客户端生成-ssh-key" aria-hidden="true">#</a> 客户端生成 SSH Key</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 利用邮箱生成 ssh key</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span>
<span class="token comment"># 2. 输入 rsa 文件名, 默认为 id_rsa</span>
Enter a <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/home/you/.ssh/id_rsa<span class="token punctuation">)</span>: <span class="token punctuation">[</span>Press enter<span class="token punctuation">]</span> <span class="token comment"># id_rsa_new</span>
<span class="token comment"># 3. 输入密码短语（无密码短语为空）</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: <span class="token punctuation">[</span>Type a passphrase<span class="token punctuation">]</span>
Enter same passphrase again: <span class="token punctuation">[</span>Type passphrase again<span class="token punctuation">]</span>

<span class="token comment"># 4. 快速生成 ssh key</span>
ssh-keygen <span class="token parameter variable">-f</span> ~/.ssh/id_rsa  <span class="token parameter variable">-P</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-q</span> <span class="token comment"># 可修改文件名，还可接续上面的配置</span>
</code></pre></div><p>再需要将生成的密钥对的公钥上传到服务器，虽然可以手动上传（FTP、VIM），但使用 SSH 提供的工具更为轻松：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -i 指定公钥，可忽略 \`.pub\` 后缀</span>
ssh-copy-id <span class="token parameter variable">-i</span> id_rsa_name.pub user@hostname
</code></pre></div><p>再次登录服务器时就会发现不需要输入帐号密码了。</p><h3 id="客户端的快速访问" tabindex="-1"><a class="header-anchor" href="#客户端的快速访问" aria-hidden="true">#</a> 客户端的快速访问</h3><p>总是指定用户、服务器地址、密钥是一件麻烦的事情，可以写在配置文件中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑 config 文件</span>
<span class="token function">vim</span> ~/.ssh/config

<span class="token comment"># 在 config 文件末尾追加内容</span>
Host aliyun <span class="token comment"># 一个便于你区别这是哪台机器的名字</span>
    HostName xxx.xxx.xxx.xxx <span class="token comment"># 目的机器的 ip</span>
    User root        <span class="token comment"># ssh 登陆时候的用户名</span>
    Port <span class="token number">22</span>          <span class="token comment"># ssh 所使用的端口，默认是 22</span>
    IdentityFile /home/yuan/.ssh/id_rsa_new <span class="token comment"># 对应服务器公钥的本地私钥文件路径</span>
</code></pre></div><p>快速访问：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> aliyun
</code></pre></div><h2 id="加固服务器的操作" tabindex="-1"><a class="header-anchor" href="#加固服务器的操作" aria-hidden="true">#</a> 加固服务器的操作</h2><p>这部分主要是对服务器端 <code>/etc/ssh/sshd_config</code> 进行修改，修改完成后记得重启 <code>sshd</code> 服务：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl restart sshd
</code></pre></div><h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h3><ol><li>修改默认的 sshd 端口，<code>Port</code></li><li>禁用密码登录，<code>PasswordAuthentication</code></li><li>禁止空密码，<code>PermitEmptyPasswords</code></li><li>禁用 root，<code>PermitRootLogin</code></li><li>登录用户白名单（多个用户之间添加空格），<code>AllowUsers</code></li><li>登录用户组白名单：<code>AllowGroups</code></li></ol><p>修改完配置后进行验证：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sshd <span class="token parameter variable">-t</span>
</code></pre></div><h3 id="ssh-隧道" tabindex="-1"><a class="header-anchor" href="#ssh-隧道" aria-hidden="true">#</a> SSH 隧道</h3>`,24)),a("p",null,[s[6]||(s[6]=n("可以使用 SSH 隧道（SSH Tunnel）的")),a("a",m,[s[5]||(s[5]=n("转发模式")),e(t)]),s[7]||(s[7]=n("有三种："))]),s[15]||(s[15]=o(`<ul><li>本地端口转发（Local port forwarding）</li><li>远程端口转发（Remote port forwarding）</li><li>动态端口转发（Dynamic port forwarding）</li></ul><p>我们需要在本地访问部署在服务器上的服务，选择本地端口转发即可。例如在服务器的 30000 端口部署了 Web 服务。</p><p>可通过 <code>man ssh</code> 查看语法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-L</span> <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:host:hostport
<span class="token parameter variable">-L</span> <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:remote_socket
<span class="token parameter variable">-L</span> local_socket:host:hostport
<span class="token parameter variable">-L</span> local_socket:remote_socket
</code></pre></div><p>选择第一种，<code>ip + port</code> 的形式即可：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将服务器上 30000 端口转发到本地的 8080，打开浏览器即可验证</span>
<span class="token comment"># -N 表示不登录服务器，仅转发端口</span>
<span class="token function">ssh</span> <span class="token parameter variable">-L</span> localhost:8080:localhost:30000 user@hostname <span class="token parameter variable">-N</span>
</code></pre></div><p>当 <code>bind_address</code> 省略时，表示绑至所有网卡。在远程我们同样使用 <code>localhost</code> 指定为服务器主机，你也可以使用对应的 IP 进行替换，如果在局域网内，也可指定为局域网内其他服务器的 IP 地址，例如在 <code>172.21.0.2</code> 上：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将服务器上 80 端口转发到本地的 8080，打开浏览器即可验证</span>
<span class="token function">ssh</span> <span class="token parameter variable">-L</span> localhost:8080:172.21.0.2:80 user@hostname <span class="token parameter variable">-N</span>
</code></pre></div><h3 id="服务认证" tabindex="-1"><a class="header-anchor" href="#服务认证" aria-hidden="true">#</a> 服务认证</h3><p>这一部分实际上是 Nginx 的内容，在构建了一些开源服务时，即使你在用户认证上做了充足的准备，但软件是人写的总是存在漏洞，可以添加 <code>Basic Auth</code> 及 <code>IP 白名单</code> 进行访问。</p><h3 id="fail2ban" tabindex="-1"><a class="header-anchor" href="#fail2ban" aria-hidden="true">#</a> fail2ban</h3>`,11)),a("p",null,[s[9]||(s[9]=n("如果有黑客持续爆破你的服务器，那么可以使用 ")),e(r,{to:"/os/linux/fail2ban.html"},{default:d(()=>s[8]||(s[8]=[n("fail2ban")])),_:1}),s[10]||(s[10]=n(" 来限制他的 IP。"))]),s[16]||(s[16]=o(`<h2 id="处理一些问题" tabindex="-1"><a class="header-anchor" href="#处理一些问题" aria-hidden="true">#</a> 处理一些问题</h2><h3 id="修复-ssh-add-存在的问题" tabindex="-1"><a class="header-anchor" href="#修复-ssh-add-存在的问题" aria-hidden="true">#</a> 修复 ssh-add 存在的问题</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 生成新的 rsa 后需要链接到 ssh</span>
ssh-add ~/.ssh/id_rsa_new
<span class="token comment"># 2. 然后此处会报错 Could not open a connection to your authentication agent.</span>
<span class="token comment"># 3. 需要修复该问题</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 4. 再一次将新生成的 rsa 链接到 ssh</span>
ssh-add ~/.ssh/id_rsa_new
<span class="token comment"># 5. 显示成功 </span>
Identity added: /home/yuan/.ssh/id_rsa_new <span class="token punctuation">(</span>your_email@example.com<span class="token punctuation">)</span>
<span class="token comment"># 6. 测试是否成功</span>
ssh-add <span class="token parameter variable">-l</span>
</code></pre></div>`,3))])}const v=l(h,[["render",k],["__file","ssh-makes-your-server-more-secure.html.vue"]]);export{v as default};
