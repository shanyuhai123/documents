import{e as t}from"./app.76078c72.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const a={},n=t('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Linux 是多用户多任务操作系统，换句话说，Linux 系统支持多个多用户在同一时间内登录，并切每个用户可以执行不同的任务。</p><p>在登录 Linux 系统时虽然输入的是用户名和密码，但其实 Linux 并不认识用户名称，它只认识用户名对应的 ID。Linux 将用户名与 ID 的对应关系存放在 <code>/etc/passwd</code> 文件中；将用户组名与 GID 的对应关系存放在 <code>/etc/group</code> 文件中。</p><h2 id="passwd-格式" tabindex="-1"><a class="header-anchor" href="#passwd-格式" aria-hidden="true">#</a> passwd 格式</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p><code>shanyuhai:x:1000:1000:shanyuhai:/home/shanyuhai:/bin/bash</code></p><p>对应为 ➡️ 用户名:密码:UID:GID:描述信息:主目录:默认Shell</p></div><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">用户名</td><td style="text-align:left;">方便用户记忆的字符串。</td></tr><tr><td style="text-align:center;">密码</td><td style="text-align:left;">x （x 虽然不是真正的密码，被删除则会被认为没有密码）表示该用户设置了密码，但不是真正的密码，真正的密码保存在 <code>/etc/shadow</code> 文件中。早期 UNIX 中，保存的是真正的加密密码串，后果就是被暴力破解。</td></tr><tr><td style="text-align:center;">UID</td><td style="text-align:left;">用来识别用户的 ID。0 为超级用户；1 ～ 1000 为伪用户；1000 ～ 65535 为普通用户。</td></tr><tr><td style="text-align:center;">GID</td><td style="text-align:left;">表示用户初始组的组 ID，创建用户时自动创建，用户可以加入其他的用户组（附加组）。</td></tr><tr><td style="text-align:center;">描述信息</td><td style="text-align:left;">即描述信息。</td></tr><tr><td style="text-align:center;">主目录</td><td style="text-align:left;">主目录又称家目录。</td></tr><tr><td style="text-align:center;">默认 Shell</td><td style="text-align:left;">Shell 就是 Linux 的命令解释器。</td></tr></tbody></table><h2 id="用户相关操作" tabindex="-1"><a class="header-anchor" href="#用户相关操作" aria-hidden="true">#</a> 用户相关操作</h2><table><thead><tr><th style="text-align:center;">命令</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:center;">useradd</td><td>新增用户。</td></tr><tr><td style="text-align:center;">passwd</td><td>修改密码。</td></tr><tr><td style="text-align:center;">usermod</td><td>修改用户（visudo 更强）。</td></tr><tr><td style="text-align:center;">chage</td><td>修改密码信息，可用于让用户登录后立即修改密码 <code>chage -d 0 username</code> 。</td></tr><tr><td style="text-align:center;">userdel</td><td>删除用户。</td></tr><tr><td style="text-align:center;">groupadd</td><td>新增用户组。</td></tr><tr><td style="text-align:center;">groupmod</td><td>修改用户组。</td></tr><tr><td style="text-align:center;">groupdel</td><td>删除用户组，仅适用于不是任何用户初始组的群组，否则删除失败。</td></tr><tr><td style="text-align:center;">gpasswd</td><td>管理用户组。</td></tr><tr><td style="text-align:center;">newgrep</td><td>设置初始组。</td></tr></tbody></table><p>也可以选择更为简单的 <code>adduser</code>、<code>deluser</code> 进行交互式操作，可添加 <code>-h</code> 来查看帮助。</p><h2 id="useradd-解析" tabindex="-1"><a class="header-anchor" href="#useradd-解析" aria-hidden="true">#</a> useradd 解析</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>useradd shanyuhai</p></div><p>该命令会完成以下几项操作：</p><ol><li>在 <code>/etc/passwd</code> 文件中新增了一行与 <code>shanyuhai</code> 用户相关的数据；</li><li>在 <code>/etc/shadow</code> 文件中新增了一行与 <code>shanyuhai</code> 用户密码相关的数据；</li><li>在 <code>/etc/group</code> 文件中新增了一行与 <code>shanyuhai</code> 的群组；</li><li>在 <code>/etc/gshadow</code> 文件中新增一行与 <code>shanyuhai</code> 群组密码相关的数据；</li><li>默认创建用户的主目录和邮箱；</li><li>将 <code>/etc/skel</code> 目录中的配置文件复制到新用户的主目录中。</li></ol><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><p>利用 <code>useradd -h</code> 可看到进一步的说明：</p><ul><li><code>-m</code>：创建用户的目录</li><li><code>-M</code>：不创建用户的目录</li><li><code>-s</code>：指定用户的 Shell，若指定 <code>-s /usr/sbin/nologin</code> 会禁止用户登录并给出提示，而 <code>-s /bin/false</code> 则返回一个错误状态，不会给出提示</li></ul><h2 id="userdel-解析" tabindex="-1"><a class="header-anchor" href="#userdel-解析" aria-hidden="true">#</a> userdel 解析</h2><p>在执行 userdel 删除用户前需要先找到用户相关的数据并删除之。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>find -user shanyuhai # 找出所有并删除</p><p>userdel shanyuhai</p></div><p>该命令会完成以下几项操作：</p><ol><li>删除 <code>/etc/passed</code> 记录；</li><li>删除 <code>/etc/shadow</code> 记录；</li><li>删除 <code>/etc/group</code> 记录；</li><li>删除 <code>/etc/gshadow</code> 记录；</li><li>删除邮箱：<code>rm -rf /var/spod/mail/username</code>；</li><li>删除家目录：<code>rm -rf /home/username</code>；</li><li>测试 <code>useradd username</code>，若没有报错则成功。</li></ol><h2 id="用户赋权" tabindex="-1"><a class="header-anchor" href="#用户赋权" aria-hidden="true">#</a> 用户赋权</h2><h3 id="_1-chown" tabindex="-1"><a class="header-anchor" href="#_1-chown" aria-hidden="true">#</a> 1. chown</h3><p>chown 可以改变某个文件或目录的所有者和所属组，当是目录时记得加 <code>-R</code> 递归处理。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chown</span> shanyuhai:shanyuhai /home/shanyuhai\n<span class="token comment"># 或指定为当前用户</span>\n<span class="token function">chown</span> <span class="token environment constant">$USER</span> ~/.ssh/config\n</code></pre></div><h3 id="_2-chmod" tabindex="-1"><a class="header-anchor" href="#_2-chmod" aria-hidden="true">#</a> 2. chmod</h3><table><thead><tr><th style="text-align:center;">角色</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">u</td><td>User，文件或目录的所有者。</td></tr><tr><td style="text-align:center;">g</td><td>Group，文件或目录的所属组。</td></tr><tr><td style="text-align:center;">o</td><td>Other，其余用户。</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">权限</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td>读取权限，数字为 4。</td></tr><tr><td style="text-align:center;">w</td><td>写入权限，数字为 2。</td></tr><tr><td style="text-align:center;">x</td><td>执行（目录切换），数字为 1。</td></tr></tbody></table><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rw,o<span class="token operator">=</span>r /tmp/hello.txt\n<span class="token comment"># 等价于</span>\n<span class="token function">chmod</span> <span class="token number">764</span> /tmp/hello.txt\n\n<span class="token comment"># 追加执行权限</span>\n<span class="token function">chmod</span> u+x /tmp/hello.txt\n</code></pre></div><h3 id="_3-setfacl" tabindex="-1"><a class="header-anchor" href="#_3-setfacl" aria-hidden="true">#</a> 3. setfacl</h3><p>仅使用以上两种方案无法解决更为复杂的权限问题，这时需要引入 ACL（Access Control List） 来解决问题。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 开始前可以先看已知权限</span>\ngetfacl /tmp/hello.txt\n\n<span class="token comment"># 1. 基于用户</span>\n<span class="token function">useradd</span> acl01 <span class="token comment"># ACL</span>\nll hello.txt <span class="token comment"># 查看</span>\nsetfacl -m u:acl01:rx hello.txt\nll hello.txt <span class="token comment"># 可以注意到权限位后面多了一个 `+`，表示该文件拥有 ACL 权限</span>\n\ngetfacl /tmp/hello.txt <span class="token comment"># 验证</span>\n\n<span class="token comment"># 2. 基于用户组</span>\n<span class="token function">groupadd</span> acl02 <span class="token comment"># ACL</span>\nsetfacl -m g:acl02:rx hello.txt\n\ngetfacl hello.txt <span class="token comment"># 验证</span>\n</code></pre></div><p>需要注意的是如果给父目录设定了默认 ACL 权限，那么父目录之后新建的子文件都会继承父目录的 ACL 权限（未设置则仅对目录生效）。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /tmp/hi\nsetfacl -m d:u:acl01:rx /tmp/hi\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;你好&quot;</span> <span class="token operator">&gt;</span> /tmp/hi/chinese.txt\n\ngetfacl /tmp/hi/chinese.txt <span class="token comment"># 验证</span>\n</code></pre></div>',34);var s=e(a,[["render",function(t,e){return n}]]);export{s as default};
