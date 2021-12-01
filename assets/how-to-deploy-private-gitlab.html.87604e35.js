import{r as o,c as p,a as s,b as e,F as c,e as a,d as n,o as l}from"./app.5bd52a59.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},u=a(`<h1 id="\u5982\u4F55\u642D\u5EFA\u79C1\u6709-gitlab" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u642D\u5EFA\u79C1\u6709-gitlab" aria-hidden="true">#</a> \u5982\u4F55\u642D\u5EFA\u79C1\u6709 GitLab</h1><h2 id="\u5B89\u88C5-gitlab" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-gitlab" aria-hidden="true">#</a> \u5B89\u88C5 GitLab</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u6570\u636E\u76EE\u5F55</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data

<span class="token comment"># \u9A8C\u8BC1</span>
tree /srv

<span class="token comment"># \u5B89\u88C5 gitlab</span>
<span class="token function">sudo</span> docker run --detach <span class="token punctuation">\\</span>
  --restart always <span class="token punctuation">\\</span>
  --hostname gitlab.example.com <span class="token punctuation">\\</span>
  <span class="token comment"># \u6CE8\u610F\u4FEE\u6539 22 \u4E3A 30022 \u540E\uFF0C\u5229\u7528 git \u534F\u8BAE\u4E0B\u8F7D\u9700\u6307\u5B9A\u5176\u7AEF\u53E3\u624D\u53EF\u4EE5\u4E0B\u8F7D\uFF0C\u4F8B\u5982 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git</span>
  <span class="token comment"># \u53EF\u914D\u7F6E ssh config \u6307\u5B9A\u7AEF\u53E3\uFF0C\u51CF\u5C11\u64CD\u4F5C</span>
  <span class="token comment"># \u800C http \u534F\u8BAE\u53EF\u6B63\u5E38\u4E0B\u8F7D\uFF08\u5176\u5B9E\u662F\u56E0\u4E3A nginx \u8F6C\u4E86\u4E00\u5C42\uFF0C\u5426\u5219\u4E5F\u662F\u5F97\u4FEE\u6539\u7684\uFF09</span>
  --publish <span class="token number">30443</span>:443 --publish <span class="token number">30080</span>:80 --publish <span class="token number">30022</span>:22 <span class="token punctuation">\\</span>
  --volume /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
  --volume /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  --volume /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  --name gitlab <span class="token punctuation">\\</span>
  gitlab/gitlab-ce

<span class="token comment"># \u9A8C\u8BC1</span>
docker <span class="token function">ps</span>
<span class="token function">netstat</span> -tunlp
</code></pre></div><p>\u6700\u540E\u6253\u5F00\u6D4F\u89C8\u5668\u6765\u9A8C\u8BC1\u3002</p><h2 id="\u90AE\u4EF6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u90AE\u4EF6\u670D\u52A1" aria-hidden="true">#</a> \u90AE\u4EF6\u670D\u52A1</h2>`,5),k=n("\u591A\u5BB6\u5BF9\u6BD4\u540E\u9009\u62E9\u4E86"),d={href:"https://exmail.qq.com/",target:"_blank",rel:"noopener noreferrer"},g=n("\u817E\u8BAF\u4F01\u4E1A\u90AE\u7BB1"),m=n("\uFF0C\u4F9D\u6B21\u8FDB\u5165 "),h=s("code",null,"\u90AE\u7BB1 => \u90AE\u7BB1\u8BBE\u7F6E => \u6536\u53D1\u4FE1\u8BBE\u7F6E => \u5F00\u542FIMAP/SMTP\u670D\u52A1",-1),b=n("\uFF0C\u518D\u56DE\u5230 "),_=s("code",null,"\u90AE\u7BB1\u8BBE\u7F6E => \u90AE\u7BB1\u7ED1\u5B9A => \u5B89\u5168\u767B\u5F55",-1),v=n(" \u83B7\u53D6\u6388\u6743\u7801\u5373\u53EF\uFF08\u81F3\u4E8E\u914D\u7F6E\u57DF\u540D\uFF0C\u90AE\u4EF6\u914D\u7F6E\u53EF\u53E6\u884C\u8C37\u6B4C\uFF09\u3002"),f=a(`<h3 id="_1-\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> 1. \u4FEE\u6539\u914D\u7F6E</h3><p>\u627E\u5230 <code>Email Settings</code> \u5728\u540E\u9762\u8FFD\u52A0\u5BF9\u5E94\u7684 <code>SMTP</code> \u914D\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb

<span class="token comment"># \u5F00\u542F SMTP \u529F\u80FD</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;smtp.exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># \u90AE\u4EF6\u53D1\u9001\u4EBA</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name@domain.com&quot;</span> <span class="token comment"># \u4E0E smtp_user_name \u4E00\u81F4</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token comment"># \u83B7\u53D6\u7684\u6388\u6743\u7801</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;exmail.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>true
</code></pre></div><h3 id="_2-\u9A8C\u8BC1\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u9A8C\u8BC1\u670D\u52A1" aria-hidden="true">#</a> 2. \u9A8C\u8BC1\u670D\u52A1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4EE5\u547D\u4EE4\u5F62\u5F0F\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\uFF0C\u4E5F\u53EF\u8FDB\u5165\u5BB9\u5668\u540E\u624B\u52A8\u6267\u884C</span>
docker <span class="token builtin class-name">exec</span> gitlab gitlab-ctl reconfigure

<span class="token comment"># \u8FDB\u5165 gitlab \u5BB9\u5668</span>
docker <span class="token builtin class-name">exec</span> -it gitlab <span class="token function">bash</span>

<span class="token comment"># \u5F00\u542F gitlab-rails</span>
gitlab-rails console

<span class="token comment"># \u6D4B\u8BD5\u90AE\u4EF6\u53D1\u9001\uFF0C\u53EF\u6362\u4E3A\u81EA\u5DF1\u7684\u90AE\u7BB1</span>
Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;someone@example.com&#39;</span>, <span class="token string">&#39;Message Subject&#39;</span>, <span class="token string">&#39;Message Body&#39;</span><span class="token punctuation">)</span>.deliver_now
</code></pre></div><p>\u7B49\u5F85\u90AE\u4EF6\u53D1\u9001\u5230\u81EA\u5DF1\u7684\u90AE\u7BB1\u540E\u5373\u53EF\u3002</p><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h2><p><code>hostname</code> \u4F1A\u5F71\u54CD\u4ED3\u5E93\u4E0B\u8F7D\u3001\u7528\u6237\u6CE8\u518C\u9080\u8BF7\u7B49\u95EE\u9898\u3002</p><p>\u5728\u5B89\u88C5 <code>gitlab</code> \u65F6\u4E3A\u5176\u8BBE\u7F6E <code>hostname</code> \u4E3A <code>gitlab.example.com</code>\uFF0C\u6B64\u5904\u8FD8\u9700\u8981\u4FEE\u6539\u4E3A\u4F60\u5BF9\u5E94\u7684\u57DF\u540D\u6216 <code>ip</code> \u5730\u5740\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /srv/gitlab/config/gitlab.rb

<span class="token comment"># \u914D\u7F6E external_url</span>
external_url <span class="token string">&#39;http://gitlab.example.com&#39;</span>
</code></pre></div><h2 id="\u5907\u4EFD\u4E0E\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u4E0E\u6062\u590D" aria-hidden="true">#</a> \u5907\u4EFD\u4E0E\u6062\u590D</h2><blockquote><p>\u4E00\u4E2A\u6709\u610F\u601D\u7684\u5C1D\u8BD5\u662F\u76F4\u63A5\u66F4\u65B0\u955C\u50CF\u4E5F\u4F1A\u81EA\u52A8\u8FC1\u79FB\u914D\u7F6E\uFF0C\u5546\u4E1A\u6570\u636E\u8BF7\u5C0F\u5FC3\u8BE5\u5C1D\u8BD5</p></blockquote><p>\u7531\u4E8E\u5F00\u59CB\u5C31\u5C06\u6570\u636E\u5377\u6302\u8F7D\u5230 <code>/srv/gitlab</code> \u4E0B\uFF0C\u6240\u4EE5\u5907\u4EFD\u7684\u6570\u636E\u4E5F\u4F1A\u5728\u8BE5\u76EE\u5F55\u7684 <code>/srv/gitlab/data/backups</code> \u4E2D\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># GitLab 12.2 \u4E4B\u540E\u7684\u7248\u672C\u5907\u4EFD\u6307\u4EE4</span>
docker <span class="token builtin class-name">exec</span> -t <span class="token operator">&lt;</span>container name<span class="token operator">&gt;</span> gitlab-backup create
</code></pre></div><p>\u66F4\u597D\u7684\u5F62\u5F0F\u662F\u5B9A\u671F\u5907\u4EFD\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">crontab</span> -e

<span class="token comment"># \u5468\u672B\u51CC\u66684\u70B9\u5907\u4EFD</span>
<span class="token number">0</span> <span class="token number">4</span> * * <span class="token number">0</span> docker <span class="token builtin class-name">exec</span> -t gitlab gitlab-backup create <span class="token operator">&amp;&gt;</span> /dev/null
</code></pre></div><p>\u6839\u636E\u5907\u4EFD\u6062\u590D\u6570\u636E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u505C\u6B62\u670D\u52A1</span>
gitlab-ctl stop unicorn <span class="token comment"># \u5E94\u7528\u670D\u52A1\u5668</span>
gitlab-ctl stop sidekiq <span class="token comment"># \u540E\u53F0\u5F02\u6B65\u4EFB\u52A1\u961F\u5217</span>
gitlab-ctl status <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># \u6307\u5B9A\u6570\u636E</span>
gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1607523472_2020_12_09_13.2.1
</code></pre></div><h2 id="\u5FEB\u901F\u800C\u7B80\u5355\u7684\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u800C\u7B80\u5355\u7684\u5347\u7EA7" aria-hidden="true">#</a> \u5FEB\u901F\u800C\u7B80\u5355\u7684\u5347\u7EA7</h2>`,19),x=n("\u4F7F\u7528 Docker Compose \u8FDB\u884C\u7EF4\u62A4\uFF0C\u627E\u5230\u65B0\u7684"),q={href:"https://hub.docker.com/r/gitlab/gitlab-ce/tags",target:"_blank",rel:"noopener noreferrer"},y=n("\u955C\u50CF"),T=n("\u66FF\u6362\u4E0A\uFF0C\u6CE8\u610F\u5927\u7248\u672C\u7684\u5347\u7EA7\u53D8\u52A8\u3002"),w=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code>docker-compose down
docker-compose up

<span class="token comment"># \u7B49\u5F85\u5B8C\u6210</span>
docker-compose logs -f
</code></pre></div><h2 id="\u6DFB\u52A0-runner" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-runner" aria-hidden="true">#</a> \u6DFB\u52A0 Runner</h2><p>\u5148\u6CE8\u518C GitLab Runner\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6CE8\u518C\uFF08\u5220\u9664 register \u53CA\u4EE5\u540E\u53EF\u4EA4\u4E92\u5F0F\u6CE8\u518C\uFF09</span>
docker run --rm -it <span class="token punctuation">\\</span>
  -v /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest register <span class="token punctuation">\\</span>
    --non-interactive <span class="token punctuation">\\</span>
    --url <span class="token string">&quot;https://gitlab.com/&quot;</span> <span class="token punctuation">\\</span>
    --registration-token <span class="token string">&quot;PROJECT_REGISTRATION_TOKEN&quot;</span> <span class="token punctuation">\\</span>
    --executor <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>
    --docker-image <span class="token string">&quot;docker:19.03.12&quot;</span> <span class="token punctuation">\\</span>
    --description <span class="token string">&quot;docker-runner&quot;</span> <span class="token punctuation">\\</span>
    <span class="token comment"># --docker-privileged \u5224\u65AD\u662F\u5426\u9700\u8981</span>
    --docker-privileged <span class="token punctuation">\\</span>
    --tag-list <span class="token string">&quot;docker&quot;</span> <span class="token punctuation">\\</span>
    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>
    --locked<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>
    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>
</code></pre></div><p>\u518D\u524D\u5F80 <code>/srv/gitlab-runner/config/config.toml</code> \u4FEE\u6539 <code>volumes</code>\uFF1A</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># \u4FEE\u6539\u524D\uFF1A</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment"># ...</span>
  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span>
    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># \u4FEE\u6539\u540E\uFF1A</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token comment"># ...</span>
  <span class="token punctuation">[</span><span class="token table class-name">runners.docker</span><span class="token punctuation">]</span>
    <span class="token key property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span><span class="token punctuation">]</span>
</code></pre></div><p>\u6700\u540E\u542F\u52A8 Runner\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>
  --restart always <span class="token punctuation">\\</span>
  -v /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
  -v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
  --name gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest
</code></pre></div><h3 id="privileged" tabindex="-1"><a class="header-anchor" href="#privileged" aria-hidden="true">#</a> privileged</h3><p>\u5F53\u5B58\u5728 <code>error during connect no such host</code> \u62A5\u9519\u65F6\u4FEE\u6539 runner config \u7684 <code>privileged</code> \u5C5E\u6027\u4E3A <code>true</code>\u3002</p><h3 id="\u81EA\u7B7E\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u81EA\u7B7E\u8BC1\u4E66" aria-hidden="true">#</a> \u81EA\u7B7E\u8BC1\u4E66</h3>`,11),N=n("\u6839\u636E "),P={href:"https://docs.gitlab.com/runner/configuration/tls-self-signed.html",target:"_blank",rel:"noopener noreferrer"},S=n("tls-self-signed"),G=n(" \u53BB\u4FE1\u4EFB ca\uFF1A"),L=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5BBF\u4E3B\u673A</span>
docker <span class="token function">cp</span> /etc/gitlab-runner/certs/ca.crt gitlab-runner-node:/usr/local/share/ca-certificates/ca.crt

<span class="token comment"># \u5BB9\u5668\u5185</span>
<span class="token function">apt-get</span> <span class="token function">install</span> -y ca-certificates
update-ca-certificates --fresh

<span class="token function">curl</span> https://example.com <span class="token comment"># \u8BBF\u95EE\u6210\u529F</span>
</code></pre></div>`,1);function M(R,B){const t=o("OutboundLink");return l(),p(c,null,[u,s("p",null,[k,s("a",d,[g,e(t)]),m,h,b,_,v]),f,s("p",null,[x,s("a",q,[y,e(t)]),T]),w,s("p",null,[N,s("a",P,[S,e(t)]),G]),L],64)}var C=i(r,[["render",M]]);export{C as default};
