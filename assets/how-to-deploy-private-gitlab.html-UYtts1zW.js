import{_ as s,c as n,a as e,o as p}from"./app-BCSwjUcF.js";const t={};function l(c,a){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="如何搭建私有-gitlab" tabindex="-1"><a class="header-anchor" href="#如何搭建私有-gitlab"><span>如何搭建私有 GitLab</span></a></h1><h2 id="安装-gitlab" tabindex="-1"><a class="header-anchor" href="#安装-gitlab"><span>安装 GitLab</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建数据目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">tree /srv</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 gitlab</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--hostname</span> gitlab.example.com <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token comment"># 注意修改 22 为 30022 后，利用 git 协议下载需指定其端口才可以下载，例如 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git</span></span>
<span class="line">  <span class="token comment"># 可配置 ssh config 指定端口，减少操作</span></span>
<span class="line">  <span class="token comment"># 而 http 协议可正常下载（其实是因为 nginx 转了一层，否则也是得修改的）</span></span>
<span class="line">  <span class="token parameter variable">--publish</span> <span class="token number">30443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">30080</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">30022</span>:22 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--volume</span> /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span></span>
<span class="line">  gitlab/gitlab-ce</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span></span>
<span class="line"></span></code></pre></div><p>最后打开浏览器来验证。</p><h2 id="邮件服务" tabindex="-1"><a class="header-anchor" href="#邮件服务"><span>邮件服务</span></a></h2><p>多家对比后选择了<a href="https://exmail.qq.com/" target="_blank" rel="noopener noreferrer">腾讯企业邮箱</a>，依次进入 <code>邮箱 =&gt; 邮箱设置 =&gt; 收发信设置 =&gt; 开启IMAP/SMTP服务</code>，再回到 <code>邮箱设置 =&gt; 邮箱绑定 =&gt; 安全登录</code> 获取授权码即可（至于配置域名，邮件配置可另行谷歌）。</p><h3 id="_1-修改配置" tabindex="-1"><a class="header-anchor" href="#_1-修改配置"><span>1. 修改配置</span></a></h3><p>找到 <code>Email Settings</code> 在后面追加对应的 <code>SMTP</code> 配置。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开启 SMTP 功能</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true</span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;smtp.exmail.qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">465</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 邮件发送人</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># 与 smtp_user_name 一致</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token comment"># 获取的授权码</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;exmail.qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;login&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true</span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true</span>
<span class="line"></span></code></pre></div><h3 id="_2-验证服务" tabindex="-1"><a class="header-anchor" href="#_2-验证服务"><span>2. 验证服务</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 以命令形式重新加载配置，也可进入容器后手动执行</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> gitlab gitlab-ctl reconfigure</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入 gitlab 容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开启 gitlab-rails</span></span>
<span class="line">gitlab-rails console</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试邮件发送，可换为自己的邮箱</span></span>
<span class="line">Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;someone@example.com&#39;</span>, <span class="token string">&#39;Message Subject&#39;</span>, <span class="token string">&#39;Message Body&#39;</span><span class="token punctuation">)</span>.deliver_now</span>
<span class="line"></span></code></pre></div><p>等待邮件发送到自己的邮箱后即可。</p><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><p><code>hostname</code> 会影响仓库下载、用户注册邀请等问题。</p><p>在安装 <code>gitlab</code> 时为其设置 <code>hostname</code> 为 <code>gitlab.example.com</code>，此处还需要修改为你对应的域名或 <code>ip</code> 地址。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 external_url</span></span>
<span class="line">external_url <span class="token string">&#39;http://gitlab.example.com&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="备份与恢复" tabindex="-1"><a class="header-anchor" href="#备份与恢复"><span>备份与恢复</span></a></h2><blockquote><p>一个有意思的尝试是直接更新镜像也会自动迁移配置，商业数据请小心该尝试</p></blockquote><p>由于开始就将数据卷挂载到 <code>/srv/gitlab</code> 下，所以备份的数据也会在该目录的 <code>/srv/gitlab/data/backups</code> 中。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># GitLab 12.2 之后的版本备份指令</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>container name<span class="token operator">&gt;</span> gitlab-backup create</span>
<span class="line"></span></code></pre></div><p>更好的形式是定期备份：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天凌晨4点备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> * * * <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> gitlab gitlab-backup create <span class="token operator">&amp;&gt;</span> /dev/null</span>
<span class="line"><span class="token comment"># 每天凌晨4点备份删除 7 天前备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> * * * <span class="token function">find</span> /srv/gitlab/data/backups/ <span class="token parameter variable">-mtime</span> +7 <span class="token parameter variable">-name</span> <span class="token string">&quot;*gitlab_backup.tar&quot;</span> <span class="token parameter variable">-delete</span> <span class="token operator">&amp;&gt;</span> /dev/null</span>
<span class="line"></span></code></pre></div><p>根据备份恢复数据：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 停止服务</span></span>
<span class="line">gitlab-ctl stop unicorn <span class="token comment"># 应用服务器</span></span>
<span class="line">gitlab-ctl stop sidekiq <span class="token comment"># 后台异步任务队列</span></span>
<span class="line">gitlab-ctl status <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定数据</span></span>
<span class="line">gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1607523472_2020_12_09_13.2.1</span>
<span class="line"></span></code></pre></div><h2 id="快速而简单的升级" tabindex="-1"><a class="header-anchor" href="#快速而简单的升级"><span>快速而简单的升级</span></a></h2><p>使用 Docker Compose 进行维护，找到新的<a href="https://hub.docker.com/r/gitlab/gitlab-ce/tags" target="_blank" rel="noopener noreferrer">镜像</a>替换上，注意大版本的升级变动，需按照<a href="https://docs.gitlab.com/ee/update/#upgrade-paths" target="_blank" rel="noopener noreferrer">升级路径</a>进行升级，另外可参考<a href="https://gitlab-com.gitlab.io/support/toolbox/upgrade-path" target="_blank" rel="noopener noreferrer">升级路径</a>工具。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker-compose</span> down</span>
<span class="line"><span class="token function">docker-compose</span> up</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 等待完成</span></span>
<span class="line"><span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span></span>
<span class="line"></span></code></pre></div><h2 id="添加-runner" tabindex="-1"><a class="header-anchor" href="#添加-runner"><span>添加 Runner</span></a></h2><p>先注册 GitLab Runner：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 注册（删除 register 及以后可交互式注册）</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /srv/gitlab-runner:/etc/gitlab-runner <span class="token punctuation">\\</span></span>
<span class="line">  gitlab/gitlab-runner:latest register <span class="token punctuation">\\</span></span>
<span class="line">    --non-interactive <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">--url</span> <span class="token string">&quot;https://gitlab.com/&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    --registration-token <span class="token string">&quot;PROJECT_REGISTRATION_TOKEN&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">--executor</span> <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    --docker-image <span class="token string">&quot;docker:19.03.12&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">--description</span> <span class="token string">&quot;docker-runner&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token comment"># --docker-privileged 判断是否需要</span></span>
<span class="line">    --docker-privileged <span class="token punctuation">\\</span></span>
<span class="line">    --tag-list <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">--locked</span><span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span></span>
<span class="line"></span></code></pre></div><p>再前往 <code>/srv/gitlab-runner/config.toml</code> 修改 <code>volumes</code>：</p><div class="language-toml" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre><code><span class="line"><span class="token comment"># 修改前：</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment"># ...</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改后：</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment"># ...</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><p>最后启动 Runner：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /srv/gitlab-runner:/etc/gitlab-runner <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> gitlab-runner <span class="token punctuation">\\</span></span>
<span class="line">  gitlab/gitlab-runner:latest</span>
<span class="line"></span></code></pre></div><h3 id="privileged" tabindex="-1"><a class="header-anchor" href="#privileged"><span>privileged</span></a></h3><p>当存在 <code>error during connect no such host</code> 报错时修改 runner config 的 <code>privileged</code> 属性为 <code>true</code>。</p><h3 id="自签证书" tabindex="-1"><a class="header-anchor" href="#自签证书"><span>自签证书</span></a></h3><p>根据 <a href="https://docs.gitlab.com/runner/configuration/tls-self-signed.html" target="_blank" rel="noopener noreferrer">tls-self-signed</a> 去信任 ca：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 宿主机</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> /etc/gitlab-runner/certs/ca.crt gitlab-runner-node:/usr/local/share/ca-certificates/ca.crt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 容器内</span></span>
<span class="line"><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ca-certificates</span>
<span class="line">update-ca-certificates <span class="token parameter variable">--fresh</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> https://example.com <span class="token comment"># 访问成功</span></span>
<span class="line"></span></code></pre></div>`,39)]))}const i=s(t,[["render",l]]),r=JSON.parse('{"path":"/tools/github/how-to-deploy-private-gitlab.html","title":"如何搭建私有 GitLab","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装 GitLab","slug":"安装-gitlab","link":"#安装-gitlab","children":[]},{"level":2,"title":"邮件服务","slug":"邮件服务","link":"#邮件服务","children":[{"level":3,"title":"1. 修改配置","slug":"_1-修改配置","link":"#_1-修改配置","children":[]},{"level":3,"title":"2. 验证服务","slug":"_2-验证服务","link":"#_2-验证服务","children":[]}]},{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"备份与恢复","slug":"备份与恢复","link":"#备份与恢复","children":[]},{"level":2,"title":"快速而简单的升级","slug":"快速而简单的升级","link":"#快速而简单的升级","children":[]},{"level":2,"title":"添加 Runner","slug":"添加-runner","link":"#添加-runner","children":[{"level":3,"title":"privileged","slug":"privileged","link":"#privileged","children":[]},{"level":3,"title":"自签证书","slug":"自签证书","link":"#自签证书","children":[]}]}],"git":{"updatedTime":1704788281000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":12,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/github/how-to-deploy-private-gitlab.md"}');export{i as comp,r as data};
