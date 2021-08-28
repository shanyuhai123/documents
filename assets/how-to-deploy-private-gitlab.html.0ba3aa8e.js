import{r as n,o as a,c as s,a as t,b as e,F as o,e as p,d as c}from"./app.984671f0.js";const l={},i=p('<h1 id="如何搭建私有-gitlab" tabindex="-1"><a class="header-anchor" href="#如何搭建私有-gitlab" aria-hidden="true">#</a> 如何搭建私有 gitlab</h1><h2 id="安装-gitlab" tabindex="-1"><a class="header-anchor" href="#安装-gitlab" aria-hidden="true">#</a> 安装 gitlab</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 创建数据目录</span>\n<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data\n\n<span class="token comment"># 验证</span>\ntree /srv\n\n<span class="token comment"># 安装 gitlab</span>\n<span class="token function">sudo</span> docker run --detach <span class="token punctuation">\\</span>\n  --restart always <span class="token punctuation">\\</span>\n  --hostname gitlab.example.com <span class="token punctuation">\\</span>\n  <span class="token comment"># 注意修改 22 为 30022 后，利用 git 协议下载需指定其端口才可以下载，例如 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git</span>\n  <span class="token comment"># 可配置 ssh config 指定端口，减少操作</span>\n  <span class="token comment"># 而 http 协议可正常下载（其实是因为 nginx 转了一层，否则也是得修改的）</span>\n  --publish <span class="token number">30443</span>:443 --publish <span class="token number">30080</span>:80 --publish <span class="token number">30022</span>:22 <span class="token punctuation">\\</span>\n  --volume /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>\n  --volume /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>\n  --volume /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>\n  --name gitlab <span class="token punctuation">\\</span>\n  gitlab/gitlab-ce\n\n<span class="token comment"># 验证</span>\ndocker <span class="token function">ps</span>\n<span class="token function">netstat</span> -tunlp\n</code></pre></div><p>最后打开浏览器来验证。</p><h2 id="邮件服务" tabindex="-1"><a class="header-anchor" href="#邮件服务" aria-hidden="true">#</a> 邮件服务</h2>',5),r=c("多家对比后选择了"),u={href:"https://exmail.qq.com/",target:"_blank",rel:"noopener noreferrer"},k=c("腾讯企业邮箱"),g=c("，依次进入 "),d=t("code",null,"邮箱 => 邮箱设置 => 收发信设置 => 开启IMAP/SMTP服务",-1),m=c("，再回到 "),b=t("code",null,"邮箱设置 => 邮箱绑定 => 安全登录",-1),h=c(" 获取授权码即可（至于配置域名，邮件配置可另行谷歌）。"),v=p('<h3 id="_1-修改配置" tabindex="-1"><a class="header-anchor" href="#_1-修改配置" aria-hidden="true">#</a> 1. 修改配置</h3><p>找到 <code>Email Settings</code> 在后面追加对应的 <code>SMTP</code> 配置。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb\n\n<span class="token comment"># 开启 SMTP 功能</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;smtp.exmail.qq.com&quot;</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">465</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 邮件发送人</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 与 smtp_user_name 一致</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token comment"># 获取的授权码</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;exmail.qq.com&quot;</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;login&quot;</span>\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true\ngitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true\n</code></pre></div><h3 id="_2-验证服务" tabindex="-1"><a class="header-anchor" href="#_2-验证服务" aria-hidden="true">#</a> 2. 验证服务</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 以命令形式重新加载配置，也可进入容器后手动执行</span>\ndocker <span class="token builtin class-name">exec</span> gitlab gitlab-ctl reconfigure\n\n<span class="token comment"># 进入 gitlab 容器</span>\ndocker <span class="token builtin class-name">exec</span> -it gitlab <span class="token function">bash</span>\n\n<span class="token comment"># 开启 gitlab-rails</span>\ngitlab-rails console\n\n<span class="token comment"># 测试邮件发送，可换为自己的邮箱</span>\nNotify.test_email<span class="token punctuation">(</span><span class="token string">&#39;someone@example.com&#39;</span>, <span class="token string">&#39;Message Subject&#39;</span>, <span class="token string">&#39;Message Body&#39;</span><span class="token punctuation">)</span>.deliver_now\n</code></pre></div><p>等待邮件发送到自己的邮箱后即可。</p><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h2><p><code>hostname</code> 会影响仓库下载、用户注册邀请等问题。</p><p>在安装 <code>gitlab</code> 时为其设置 <code>hostname</code> 为 <code>gitlab.example.com</code>，此处还需要修改为你对应的域名或 <code>ip</code> 地址。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb\n\n<span class="token comment"># 配置 external_url</span>\nexternal_url <span class="token string">&#39;http://gitlab.example.com&#39;</span>\n</code></pre></div><h2 id="备份与恢复" tabindex="-1"><a class="header-anchor" href="#备份与恢复" aria-hidden="true">#</a> 备份与恢复</h2><blockquote><p>一个有意思的尝试是直接更新镜像也会自动迁移配置，商业数据请小心该尝试</p></blockquote><p>由于开始就将数据卷挂载到 <code>/srv/gitlab</code> 下，所以备份的数据也会在该目录的 <code>/srv/gitlab/data/backups</code> 中。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># GitLab 12.2 之后的版本备份指令</span>\ndocker <span class="token builtin class-name">exec</span> -t <span class="token operator">&lt;</span>container name<span class="token operator">&gt;</span> gitlab-backup create\n</code></pre></div><p>更好的形式是定期备份：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">crontab</span> -e\n\n<span class="token comment"># 周末凌晨4点备份</span>\n<span class="token number">0</span> <span class="token number">4</span> * * <span class="token number">0</span> docker <span class="token builtin class-name">exec</span> -t gitlab gitlab-backup create <span class="token operator">&amp;&gt;</span> /dev/null\n</code></pre></div><p>根据备份恢复数据：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 停止服务</span>\ngitlab-ctl stop unicorn <span class="token comment"># 应用服务器</span>\ngitlab-ctl stop sidekiq <span class="token comment"># 后台异步任务队列</span>\ngitlab-ctl status <span class="token comment"># 验证</span>\n\n<span class="token comment"># 指定数据</span>\ngitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1607523472_2020_12_09_13.2.1\n</code></pre></div><h2 id="添加-runner" tabindex="-1"><a class="header-anchor" href="#添加-runner" aria-hidden="true">#</a> 添加 Runner</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 注册（删除 register 及以后可交互式注册）</span>\ndocker run --rm -it <span class="token punctuation">\\</span>\n  -v /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>\n  gitlab/gitlab-runner:latest register <span class="token punctuation">\\</span>\n    --non-interactive <span class="token punctuation">\\</span>\n    --url <span class="token string">&quot;https://gitlab.com/&quot;</span> <span class="token punctuation">\\</span>\n    --registration-token <span class="token string">&quot;PROJECT_REGISTRATION_TOKEN&quot;</span> <span class="token punctuation">\\</span>\n    --executor <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>\n    --docker-image alpine:latest <span class="token punctuation">\\</span>\n    --description <span class="token string">&quot;docker-runner&quot;</span> <span class="token punctuation">\\</span>\n    --tag-list <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>\n    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>\n    --locked<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>\n    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>\n\n<span class="token comment"># 指定配置启动</span>\ndocker run -d <span class="token punctuation">\\</span>\n  --restart always <span class="token punctuation">\\</span>\n  -v /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>\n  -v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>\n  --name gitlab-runner <span class="token punctuation">\\</span>\n  gitlab/gitlab-runner:latest\n</code></pre></div><h3 id="privileged" tabindex="-1"><a class="header-anchor" href="#privileged" aria-hidden="true">#</a> privileged</h3><p>当存在 <code>error during connect no such host</code> 报错时修改 runner config 的 <code>privileged</code> 属性为 <code>true</code>。</p><h3 id="自签证书" tabindex="-1"><a class="header-anchor" href="#自签证书" aria-hidden="true">#</a> 自签证书</h3>',23),f=c("根据 "),x={href:"https://docs.gitlab.com/runner/configuration/tls-self-signed.html",target:"_blank",rel:"noopener noreferrer"},_=c("tls-self-signed"),q=c(" 去信任 ca："),T=p('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 宿主机</span>\ndocker <span class="token function">cp</span> /etc/gitlab-runner/certs/ca.crt gitlab-runner-node:/usr/local/share/ca-certificates/ca.crt\n\n<span class="token comment"># 容器内</span>\n<span class="token function">apt-get</span> <span class="token function">install</span> -y ca-certificates\nupdate-ca-certificates --fresh\n\n<span class="token function">curl</span> https://example.com <span class="token comment"># 访问成功</span>\n</code></pre></div><p>修改配置文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /srv/gitlab-runner/config/config.toml\n\n<span class="token comment"># 增加 docker 本地环境引用</span>\nvolumes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span>, <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span><span class="token punctuation">]</span>\n</code></pre></div>',3);l.render=function(p,c){const l=n("OutboundLink");return a(),s(o,null,[i,t("p",null,[r,t("a",u,[k,e(l)]),g,d,m,b,h]),v,t("p",null,[f,t("a",x,[_,e(l)]),q]),T],64)};export{l as default};