import{_ as o,M as l,p as c,q as r,a1 as p,R as s,t as n,N as e}from"./framework-e3e34937.js";const i={},u={href:"https://exmail.qq.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hub.docker.com/r/gitlab/gitlab-ce/tags",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.gitlab.com/ee/update/#upgrade-paths",target:"_blank",rel:"noopener noreferrer"},g={href:"https://gitlab-com.gitlab.io/support/toolbox/upgrade-path",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.gitlab.com/runner/configuration/tls-self-signed.html",target:"_blank",rel:"noopener noreferrer"};function b(v,a){const t=l("ExternalLinkIcon");return c(),r("div",null,[a[17]||(a[17]=p(`<h1 id="如何搭建私有-gitlab" tabindex="-1"><a class="header-anchor" href="#如何搭建私有-gitlab" aria-hidden="true">#</a> 如何搭建私有 GitLab</h1><h2 id="安装-gitlab" tabindex="-1"><a class="header-anchor" href="#安装-gitlab" aria-hidden="true">#</a> 安装 GitLab</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建数据目录</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data

<span class="token comment"># 验证</span>
tree /srv

<span class="token comment"># 安装 gitlab</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--hostname</span> gitlab.example.com <span class="token punctuation">\\</span>
  <span class="token comment"># 注意修改 22 为 30022 后，利用 git 协议下载需指定其端口才可以下载，例如 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git</span>
  <span class="token comment"># 可配置 ssh config 指定端口，减少操作</span>
  <span class="token comment"># 而 http 协议可正常下载（其实是因为 nginx 转了一层，否则也是得修改的）</span>
  <span class="token parameter variable">--publish</span> <span class="token number">30443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">30080</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">30022</span>:22 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
  gitlab/gitlab-ce

<span class="token comment"># 验证</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span>
</code></pre></div><p>最后打开浏览器来验证。</p><h2 id="邮件服务" tabindex="-1"><a class="header-anchor" href="#邮件服务" aria-hidden="true">#</a> 邮件服务</h2>`,5)),s("p",null,[a[1]||(a[1]=n("多家对比后选择了")),s("a",u,[a[0]||(a[0]=n("腾讯企业邮箱")),e(t)]),a[2]||(a[2]=n("，依次进入 ")),a[3]||(a[3]=s("code",null,"邮箱 => 邮箱设置 => 收发信设置 => 开启IMAP/SMTP服务",-1)),a[4]||(a[4]=n("，再回到 ")),a[5]||(a[5]=s("code",null,"邮箱设置 => 邮箱绑定 => 安全登录",-1)),a[6]||(a[6]=n(" 获取授权码即可（至于配置域名，邮件配置可另行谷歌）。"))]),a[18]||(a[18]=p(`<h3 id="_1-修改配置" tabindex="-1"><a class="header-anchor" href="#_1-修改配置" aria-hidden="true">#</a> 1. 修改配置</h3><p>找到 <code>Email Settings</code> 在后面追加对应的 <code>SMTP</code> 配置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb

<span class="token comment"># 开启 SMTP 功能</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;smtp.exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 邮件发送人</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 与 smtp_user_name 一致</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token comment"># 获取的授权码</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
</code></pre></div><h3 id="_2-验证服务" tabindex="-1"><a class="header-anchor" href="#_2-验证服务" aria-hidden="true">#</a> 2. 验证服务</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以命令形式重新加载配置，也可进入容器后手动执行</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> gitlab gitlab-ctl reconfigure

<span class="token comment"># 进入 gitlab 容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab <span class="token function">bash</span>

<span class="token comment"># 开启 gitlab-rails</span>
gitlab-rails console

<span class="token comment"># 测试邮件发送，可换为自己的邮箱</span>
Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;someone@example.com&#39;</span>, <span class="token string">&#39;Message Subject&#39;</span>, <span class="token string">&#39;Message Body&#39;</span><span class="token punctuation">)</span>.deliver_now
</code></pre></div><p>等待邮件发送到自己的邮箱后即可。</p><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h2><p><code>hostname</code> 会影响仓库下载、用户注册邀请等问题。</p><p>在安装 <code>gitlab</code> 时为其设置 <code>hostname</code> 为 <code>gitlab.example.com</code>，此处还需要修改为你对应的域名或 <code>ip</code> 地址。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb

<span class="token comment"># 配置 external_url</span>
external_url <span class="token string">&#39;http://gitlab.example.com&#39;</span>
</code></pre></div><h2 id="备份与恢复" tabindex="-1"><a class="header-anchor" href="#备份与恢复" aria-hidden="true">#</a> 备份与恢复</h2><blockquote><p>一个有意思的尝试是直接更新镜像也会自动迁移配置，商业数据请小心该尝试</p></blockquote><p>由于开始就将数据卷挂载到 <code>/srv/gitlab</code> 下，所以备份的数据也会在该目录的 <code>/srv/gitlab/data/backups</code> 中。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># GitLab 12.2 之后的版本备份指令</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>container name<span class="token operator">&gt;</span> gitlab-backup create
</code></pre></div><p>更好的形式是定期备份：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 每天凌晨4点备份</span>
<span class="token number">0</span> <span class="token number">4</span> * * * <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> gitlab gitlab-backup create <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token comment"># 每天凌晨4点备份删除 7 天前备份</span>
<span class="token number">0</span> <span class="token number">4</span> * * * <span class="token function">find</span> /srv/gitlab/data/backups/ <span class="token parameter variable">-mtime</span> +7 <span class="token parameter variable">-name</span> <span class="token string">&quot;*gitlab_backup.tar&quot;</span> <span class="token parameter variable">-delete</span> <span class="token operator">&amp;&gt;</span> /dev/null
</code></pre></div><p>根据备份恢复数据：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止服务</span>
gitlab-ctl stop unicorn <span class="token comment"># 应用服务器</span>
gitlab-ctl stop sidekiq <span class="token comment"># 后台异步任务队列</span>
gitlab-ctl status <span class="token comment"># 验证</span>

<span class="token comment"># 指定数据</span>
gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1607523472_2020_12_09_13.2.1
</code></pre></div><h2 id="快速而简单的升级" tabindex="-1"><a class="header-anchor" href="#快速而简单的升级" aria-hidden="true">#</a> 快速而简单的升级</h2>`,19)),s("p",null,[a[10]||(a[10]=n("使用 Docker Compose 进行维护，找到新的")),s("a",k,[a[7]||(a[7]=n("镜像")),e(t)]),a[11]||(a[11]=n("替换上，注意大版本的升级变动，需按照")),s("a",d,[a[8]||(a[8]=n("升级路径")),e(t)]),a[12]||(a[12]=n("进行升级，另外可参考")),s("a",g,[a[9]||(a[9]=n("升级路径")),e(t)]),a[13]||(a[13]=n("工具。"))]),a[19]||(a[19]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
<span class="token function">docker-compose</span> up

<span class="token comment"># 等待完成</span>
<span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span>
</code></pre></div><h2 id="添加-runner" tabindex="-1"><a class="header-anchor" href="#添加-runner" aria-hidden="true">#</a> 添加 Runner</h2><p>先注册 GitLab Runner：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注册（删除 register 及以后可交互式注册）</span>
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /srv/gitlab-runner:/etc/gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest register <span class="token punctuation">\\</span>
    --non-interactive <span class="token punctuation">\\</span>
    <span class="token parameter variable">--url</span> <span class="token string">&quot;https://gitlab.com/&quot;</span> <span class="token punctuation">\\</span>
    --registration-token <span class="token string">&quot;PROJECT_REGISTRATION_TOKEN&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--executor</span> <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>
    --docker-image <span class="token string">&quot;docker:19.03.12&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--description</span> <span class="token string">&quot;docker-runner&quot;</span> <span class="token punctuation">\\</span>
    <span class="token comment"># --docker-privileged 判断是否需要</span>
    --docker-privileged <span class="token punctuation">\\</span>
    --tag-list <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>
    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--locked</span><span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>
    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>
</code></pre></div><p>再前往 <code>/srv/gitlab-runner/config.toml</code> 修改 <code>volumes</code>：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code><span class="token comment"># 修改前：</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment"># ...</span>
  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span>
    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 修改后：</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment"># ...</span>
  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span>
    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span><span class="token punctuation">]</span>
</code></pre></div><p>最后启动 Runner：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /srv/gitlab-runner:/etc/gitlab-runner <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest
</code></pre></div><h3 id="privileged" tabindex="-1"><a class="header-anchor" href="#privileged" aria-hidden="true">#</a> privileged</h3><p>当存在 <code>error during connect no such host</code> 报错时修改 runner config 的 <code>privileged</code> 属性为 <code>true</code>。</p><h3 id="自签证书" tabindex="-1"><a class="header-anchor" href="#自签证书" aria-hidden="true">#</a> 自签证书</h3>`,11)),s("p",null,[a[15]||(a[15]=n("根据 ")),s("a",m,[a[14]||(a[14]=n("tls-self-signed")),e(t)]),a[16]||(a[16]=n(" 去信任 ca："))]),a[20]||(a[20]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> /etc/gitlab-runner/certs/ca.crt gitlab-runner-node:/usr/local/share/ca-certificates/ca.crt

<span class="token comment"># 容器内</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ca-certificates
update-ca-certificates <span class="token parameter variable">--fresh</span>

<span class="token function">curl</span> https://example.com <span class="token comment"># 访问成功</span>
</code></pre></div>`,1))])}const f=o(i,[["render",b],["__file","how-to-deploy-private-gitlab.html.vue"]]);export{f as default};
