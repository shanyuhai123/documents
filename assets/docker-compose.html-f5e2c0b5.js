import{_ as o,M as c,p as l,q as u,a1 as e,R as s,t as a,N as p}from"./framework-e3e34937.js";const r={},i={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.docker.com/compose/compose-file/compose-versioning/",target:"_blank",rel:"noopener noreferrer"};function d(h,n){const t=c("ExternalLinkIcon");return l(),u("div",null,[n[7]||(n[7]=e('<h1 id="docker-compose-管理多个服务" tabindex="-1"><a class="header-anchor" href="#docker-compose-管理多个服务" aria-hidden="true">#</a> Docker Compose 管理多个服务</h1><h2 id="为什么需要-docker-compose" tabindex="-1"><a class="header-anchor" href="#为什么需要-docker-compose" aria-hidden="true">#</a> 为什么需要 Docker Compose</h2><p>先简单理解 Docker 的使用过程：</p><ol><li>镜像构建：即创建一个镜像，这个创建的过程就是用 <code>Dockerfile</code> 来完成的。</li><li>容器启动：针对单个容器可以使用 <code>docker run</code> 来启动，那多个呢？于是就出现了 Docker Compose。</li></ol><h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1. 说明</h3><p>Docker Compose 中定义的每个服务都必须通过 <code>image</code> 或 <code>build</code> 指令来构建，<code>build</code> 时会应用 <code>Dockerfile</code> 中的配置，无需重复设置。</p><h3 id="_2-默认" tabindex="-1"><a class="header-anchor" href="#_2-默认" aria-hidden="true">#</a> 2. 默认</h3><p>默认模板文件为 <code>docker-compose.yml</code>，默认的项目名称为所在目录名。</p><h2 id="安装卸载" tabindex="-1"><a class="header-anchor" href="#安装卸载" aria-hidden="true">#</a> 安装卸载</h2>',9)),s("p",null,[n[1]||(n[1]=a("选择二进制安装的形式，更多版本可见 ")),s("a",i,[n[0]||(n[0]=a("github release")),p(t)]),n[2]||(n[2]=a("。"))]),n[8]||(n[8]=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token comment"># 允许运行</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose

<span class="token comment"># bash 命令补全</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose

<span class="token comment"># 由于是二进制文件，那么卸载就是删除该文件</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><p>在配置完成后可以执行 <code>docker-compose config</code> 来校验并查看实际运行的配置。</p><h2 id="核心配置" tabindex="-1"><a class="header-anchor" href="#核心配置" aria-hidden="true">#</a> 核心配置</h2><p>一份标准配置文件应该包含 <code>version</code>、<code>services</code>、<code>networks</code> 三大部分，其中最关键的就是 <code>services</code> 和 <code>networks</code> 部分。</p><h3 id="_1-version" tabindex="-1"><a class="header-anchor" href="#_1-version" aria-hidden="true">#</a> 1. version</h3>`,6)),s("p",null,[n[4]||(n[4]=s("code",null,"version",-1)),n[5]||(n[5]=a(" 与 Docker Engine 是强关联的，")),s("a",k,[n[3]||(n[3]=a("Reference")),p(t)]),n[6]||(n[6]=a(" 中有详细对照关系。"))]),n[9]||(n[9]=e(`<h3 id="_2-services" tabindex="-1"><a class="header-anchor" href="#_2-services" aria-hidden="true">#</a> 2. services</h3><p>services 是要定义的服务，至于服务名可以自取，我们大部分时候都是在为 service 进行编写。</p><h3 id="_3-networks" tabindex="-1"><a class="header-anchor" href="#_3-networks" aria-hidden="true">#</a> 3. networks</h3><p>配置容器连接的网络，如果未显示声明则会被加入所在目录及 <code>_default</code> 的网络中，例如当前目录为 <code>app</code>，那么就会加入 <code>app_default</code> 的默认网络。你会发现这其实与 service 是一致的。</p><h2 id="services-配置" tabindex="-1"><a class="header-anchor" href="#services-配置" aria-hidden="true">#</a> services 配置</h2><h3 id="_1-image" tabindex="-1"><a class="header-anchor" href="#_1-image" aria-hidden="true">#</a> 1. image</h3><p>镜像名称或 ID，本地不在则从 hub 拉取。</p><h3 id="_2-build" tabindex="-1"><a class="header-anchor" href="#_2-build" aria-hidden="true">#</a> 2. build</h3><p>服务除了可以指定镜像，还可以基于一份 Dockerfile，其可以为相对或绝对路径，即对应的 <code>context</code> 及 <code>dockerfile</code>。</p><p>存在构建流程那么自然可以在构建过程中指定环境变量。注意布尔值需要使用引号包裹，否则会被识别为字符串。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
   <span class="token key atrule">context</span><span class="token punctuation">:</span> ./app
   <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile<span class="token punctuation">-</span>app
   <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">arg1</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
</code></pre></div><h3 id="_3-command" tabindex="-1"><a class="header-anchor" href="#_3-command" aria-hidden="true">#</a> 3. command</h3><p>使用 command 可以覆盖容器启动后默认执行的命令。注意是覆盖默认命令。</p><h3 id="_4-container-name" tabindex="-1"><a class="header-anchor" href="#_4-container-name" aria-hidden="true">#</a> 4. container_name</h3><p>compose 的容器名称格式是：&lt;项目名称&gt;&lt;服务名称&gt;&lt;序号&gt;，当然你也可以自定义。</p><h3 id="_5-depends-on" tabindex="-1"><a class="header-anchor" href="#_5-depends-on" aria-hidden="true">#</a> 5. depends_on</h3><p>在组合一系列服务时，很多时候是有调用顺序的，例如往往有需要先启用数据库服务，这时候就很有用了。</p><p>甚至在你单独 <code>compose up</code> 中某个服务时也会生效。</p><h3 id="_6-env-file-environment" tabindex="-1"><a class="header-anchor" href="#_6-env-file-environment" aria-hidden="true">#</a> 6. env_file/environment</h3><p>env_file 如果有环境变量与 environment 指令冲突，则以 environment 为准。需注意这里所说的环境变量是对 compose 而言的，这些变量并不会进入构建过程中。</p><p>如果只给定名称则会自动获取主机上对应变量的值，可用来防止泄漏数据。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">NODE_ENV</span><span class="token punctuation">:</span> development
  <span class="token key atrule">APP_URL</span><span class="token punctuation">:</span>

<span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> NODE_ENV=development
  <span class="token punctuation">-</span> APP_URL
</code></pre></div><h3 id="_7-extra-hosts" tabindex="-1"><a class="header-anchor" href="#_7-extra-hosts" aria-hidden="true">#</a> 7. extra_hosts</h3><p>增加 host 映射规则。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;somehost:162.242.195.82&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;otherhost:50.31.209.229&quot;</span>
</code></pre></div><p>对应的 <code>/etc/hosts</code> 则会追加：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>162.242.195.82  somehost
50.31.209.229   otherhost
</code></pre></div><h3 id="_8-healthcheck" tabindex="-1"><a class="header-anchor" href="#_8-healthcheck" aria-hidden="true">#</a> 8. healthcheck</h3><p>健康检查。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1m30s
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 40s
</code></pre></div><h3 id="_9-links" tabindex="-1"><a class="header-anchor" href="#_9-links" aria-hidden="true">#</a> 9. links</h3><p>官网大大的标出了不推荐使用，将来会废弃。</p><h3 id="_10-networks" tabindex="-1"><a class="header-anchor" href="#_10-networks" aria-hidden="true">#</a> 10. networks</h3><p>配置容器连接的网络。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx:alpine&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> new

  <span class="token key atrule">worker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;my-worker-image:latest&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> legacy

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">new</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> database
      <span class="token key atrule">legacy</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> mysql

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">new</span><span class="token punctuation">:</span>
  <span class="token key atrule">legacy</span><span class="token punctuation">:</span>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.10
        <span class="token key atrule">ipv6_address</span><span class="token punctuation">:</span> 2001<span class="token punctuation">:</span>3984<span class="token punctuation">:</span>3989<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">10</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;172.16.238.0/24&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;2001:3984:3989::/64&quot;</span>
</code></pre></div><h3 id="_11-ports" tabindex="-1"><a class="header-anchor" href="#_11-ports" aria-hidden="true">#</a> 11. ports</h3><p>暴露端口信息。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;3000-3005&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;9090-9091:8080-8081&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;49100:22&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8001:8001&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:5000-5010:5000-5010&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;6060:6060/udp&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;12400-12500:1240&quot;</span>
</code></pre></div><h3 id="_12-secrets" tabindex="-1"><a class="header-anchor" href="#_12-secrets" aria-hidden="true">#</a> 12. secrets</h3><p>存储敏感信息。</p><p>不是可以利用 <code>env</code> 么，为什么还需要这个呢，有待探究。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my_secret
      <span class="token punctuation">-</span> my_other_secret
<span class="token key atrule">secrets</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_secret</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./my_secret.txt
  <span class="token key atrule">my_other_secret</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h3 id="_13-volumes" tabindex="-1"><a class="header-anchor" href="#_13-volumes" aria-hidden="true">#</a> 13. volumes</h3><p>数据卷挂载路径，如果是名称则需要配置。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> volume
        <span class="token key atrule">source</span><span class="token punctuation">:</span> mydata
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /data
        <span class="token key atrule">volume</span><span class="token punctuation">:</span>
          <span class="token key atrule">nocopy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./static
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/app/static

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;dbdata:/var/lib/postgresql/data&quot;</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">mydata</span><span class="token punctuation">:</span>
  <span class="token key atrule">dbdata</span><span class="token punctuation">:</span>
</code></pre></div>`,46))])}const y=o(r,[["render",d],["__file","docker-compose.html.vue"]]);export{y as default};
