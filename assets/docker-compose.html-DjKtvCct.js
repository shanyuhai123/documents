import{_ as n,c as a,a as e,o as p}from"./app-BCSwjUcF.js";const t={};function l(c,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="docker-compose-管理多个服务" tabindex="-1"><a class="header-anchor" href="#docker-compose-管理多个服务"><span>Docker Compose 管理多个服务</span></a></h1><h2 id="为什么需要-docker-compose" tabindex="-1"><a class="header-anchor" href="#为什么需要-docker-compose"><span>为什么需要 Docker Compose</span></a></h2><p>先简单理解 Docker 的使用过程：</p><ol><li>镜像构建：即创建一个镜像，这个创建的过程就是用 <code>Dockerfile</code> 来完成的。</li><li>容器启动：针对单个容器可以使用 <code>docker run</code> 来启动，那多个呢？于是就出现了 Docker Compose。</li></ol><h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明"><span>1. 说明</span></a></h3><p>Docker Compose 中定义的每个服务都必须通过 <code>image</code> 或 <code>build</code> 指令来构建，<code>build</code> 时会应用 <code>Dockerfile</code> 中的配置，无需重复设置。</p><h3 id="_2-默认" tabindex="-1"><a class="header-anchor" href="#_2-默认"><span>2. 默认</span></a></h3><p>默认模板文件为 <code>docker-compose.yml</code>，默认的项目名称为所在目录名。</p><h2 id="安装卸载" tabindex="-1"><a class="header-anchor" href="#安装卸载"><span>安装卸载</span></a></h2><p>选择二进制安装的形式，更多版本可见 <a href="https://github.com/docker/compose/releases" target="_blank" rel="noopener noreferrer">github release</a>。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 允许运行</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose</span>
<span class="line"></span>
<span class="line"><span class="token comment"># bash 命令补全</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 由于是二进制文件，那么卸载就是删除该文件</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose</span>
<span class="line"></span></code></pre></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行"><span>命令行</span></a></h2><p>在配置完成后可以执行 <code>docker-compose config</code> 来校验并查看实际运行的配置。</p><h2 id="核心配置" tabindex="-1"><a class="header-anchor" href="#核心配置"><span>核心配置</span></a></h2><p>一份标准配置文件应该包含 <code>version</code>、<code>services</code>、<code>networks</code> 三大部分，其中最关键的就是 <code>services</code> 和 <code>networks</code> 部分。</p><h3 id="_1-version" tabindex="-1"><a class="header-anchor" href="#_1-version"><span>1. version</span></a></h3><p><code>version</code> 与 Docker Engine 是强关联的，<a href="https://docs.docker.com/compose/compose-file/compose-versioning/" target="_blank" rel="noopener noreferrer">Reference</a> 中有详细对照关系。</p><h3 id="_2-services" tabindex="-1"><a class="header-anchor" href="#_2-services"><span>2. services</span></a></h3><p>services 是要定义的服务，至于服务名可以自取，我们大部分时候都是在为 service 进行编写。</p><h3 id="_3-networks" tabindex="-1"><a class="header-anchor" href="#_3-networks"><span>3. networks</span></a></h3><p>配置容器连接的网络，如果未显示声明则会被加入所在目录及 <code>_default</code> 的网络中，例如当前目录为 <code>app</code>，那么就会加入 <code>app_default</code> 的默认网络。你会发现这其实与 service 是一致的。</p><h2 id="services-配置" tabindex="-1"><a class="header-anchor" href="#services-配置"><span>services 配置</span></a></h2><h3 id="_1-image" tabindex="-1"><a class="header-anchor" href="#_1-image"><span>1. image</span></a></h3><p>镜像名称或 ID，本地不在则从 hub 拉取。</p><h3 id="_2-build" tabindex="-1"><a class="header-anchor" href="#_2-build"><span>2. build</span></a></h3><p>服务除了可以指定镜像，还可以基于一份 Dockerfile，其可以为相对或绝对路径，即对应的 <code>context</code> 及 <code>dockerfile</code>。</p><p>存在构建流程那么自然可以在构建过程中指定环境变量。注意布尔值需要使用引号包裹，否则会被识别为字符串。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line"> <span class="token key atrule">app</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token key atrule">context</span><span class="token punctuation">:</span> ./app</span>
<span class="line">   <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile<span class="token punctuation">-</span>app</span>
<span class="line">   <span class="token key atrule">args</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">arg1</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-command" tabindex="-1"><a class="header-anchor" href="#_3-command"><span>3. command</span></a></h3><p>使用 command 可以覆盖容器启动后默认执行的命令。注意是覆盖默认命令。</p><h3 id="_4-container-name" tabindex="-1"><a class="header-anchor" href="#_4-container-name"><span>4. container_name</span></a></h3><p>compose 的容器名称格式是：&lt;项目名称&gt;&lt;服务名称&gt;&lt;序号&gt;，当然你也可以自定义。</p><h3 id="_5-depends-on" tabindex="-1"><a class="header-anchor" href="#_5-depends-on"><span>5. depends_on</span></a></h3><p>在组合一系列服务时，很多时候是有调用顺序的，例如往往有需要先启用数据库服务，这时候就很有用了。</p><p>甚至在你单独 <code>compose up</code> 中某个服务时也会生效。</p><h3 id="_6-env-file-environment" tabindex="-1"><a class="header-anchor" href="#_6-env-file-environment"><span>6. env_file/environment</span></a></h3><p>env_file 如果有环境变量与 environment 指令冲突，则以 environment 为准。需注意这里所说的环境变量是对 compose 而言的，这些变量并不会进入构建过程中。</p><p>如果只给定名称则会自动获取主机上对应变量的值，可用来防止泄漏数据。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">NODE_ENV</span><span class="token punctuation">:</span> development</span>
<span class="line">  <span class="token key atrule">APP_URL</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> NODE_ENV=development</span>
<span class="line">  <span class="token punctuation">-</span> APP_URL</span>
<span class="line"></span></code></pre></div><h3 id="_7-extra-hosts" tabindex="-1"><a class="header-anchor" href="#_7-extra-hosts"><span>7. extra_hosts</span></a></h3><p>增加 host 映射规则。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;somehost:162.242.195.82&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;otherhost:50.31.209.229&quot;</span></span>
<span class="line"></span></code></pre></div><p>对应的 <code>/etc/hosts</code> 则会追加：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">162.242.195.82  somehost</span>
<span class="line">50.31.209.229   otherhost</span>
<span class="line"></span></code></pre></div><h3 id="_8-healthcheck" tabindex="-1"><a class="header-anchor" href="#_8-healthcheck"><span>8. healthcheck</span></a></h3><p>健康检查。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">healthcheck</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1m30s</span>
<span class="line">  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s</span>
<span class="line">  <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span></span>
<span class="line">  <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 40s</span>
<span class="line"></span></code></pre></div><h3 id="_9-links" tabindex="-1"><a class="header-anchor" href="#_9-links"><span>9. links</span></a></h3><p>官网大大的标出了不推荐使用，将来会废弃。</p><h3 id="_10-networks" tabindex="-1"><a class="header-anchor" href="#_10-networks"><span>10. networks</span></a></h3><p>配置容器连接的网络。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">web</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx:alpine&quot;</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> new</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">worker</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;my-worker-image:latest&quot;</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> legacy</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">db</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">new</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">aliases</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> database</span>
<span class="line">      <span class="token key atrule">legacy</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">aliases</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> mysql</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">new</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">legacy</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">app</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app_net</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.10</span>
<span class="line">        <span class="token key atrule">ipv6_address</span><span class="token punctuation">:</span> 2001<span class="token punctuation">:</span>3984<span class="token punctuation">:</span>3989<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">app_net</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">ipam</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default</span>
<span class="line">      <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;172.16.238.0/24&quot;</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;2001:3984:3989::/64&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_11-ports" tabindex="-1"><a class="header-anchor" href="#_11-ports"><span>11. ports</span></a></h3><p>暴露端口信息。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;3000-3005&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;9090-9091:8080-8081&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;49100:22&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8001:8001&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:5000-5010:5000-5010&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;6060:6060/udp&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">&quot;12400-12500:1240&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_12-secrets" tabindex="-1"><a class="header-anchor" href="#_12-secrets"><span>12. secrets</span></a></h3><p>存储敏感信息。</p><p>不是可以利用 <code>env</code> 么，为什么还需要这个呢，有待探究。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token key atrule">secrets</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> my_secret</span>
<span class="line">      <span class="token punctuation">-</span> my_other_secret</span>
<span class="line"><span class="token key atrule">secrets</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">my_secret</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./my_secret.txt</span>
<span class="line">  <span class="token key atrule">my_other_secret</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre></div><h3 id="_13-volumes" tabindex="-1"><a class="header-anchor" href="#_13-volumes"><span>13. volumes</span></a></h3><p>数据卷挂载路径，如果是名称则需要配置。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">web</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> volume</span>
<span class="line">        <span class="token key atrule">source</span><span class="token punctuation">:</span> mydata</span>
<span class="line">        <span class="token key atrule">target</span><span class="token punctuation">:</span> /data</span>
<span class="line">        <span class="token key atrule">volume</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">nocopy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind</span>
<span class="line">        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./static</span>
<span class="line">        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/app/static</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">db</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;dbdata:/var/lib/postgresql/data&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">mydata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">dbdata</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre></div>`,63)]))}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/backend/docker/docker-compose.html","title":"Docker Compose 管理多个服务","lang":"zh-CN","frontmatter":{"description":"Docker Compose 管理多个服务"},"headers":[{"level":2,"title":"为什么需要 Docker Compose","slug":"为什么需要-docker-compose","link":"#为什么需要-docker-compose","children":[{"level":3,"title":"1. 说明","slug":"_1-说明","link":"#_1-说明","children":[]},{"level":3,"title":"2. 默认","slug":"_2-默认","link":"#_2-默认","children":[]}]},{"level":2,"title":"安装卸载","slug":"安装卸载","link":"#安装卸载","children":[]},{"level":2,"title":"命令行","slug":"命令行","link":"#命令行","children":[]},{"level":2,"title":"核心配置","slug":"核心配置","link":"#核心配置","children":[{"level":3,"title":"1. version","slug":"_1-version","link":"#_1-version","children":[]},{"level":3,"title":"2. services","slug":"_2-services","link":"#_2-services","children":[]},{"level":3,"title":"3. networks","slug":"_3-networks","link":"#_3-networks","children":[]}]},{"level":2,"title":"services 配置","slug":"services-配置","link":"#services-配置","children":[{"level":3,"title":"1. image","slug":"_1-image","link":"#_1-image","children":[]},{"level":3,"title":"2. build","slug":"_2-build","link":"#_2-build","children":[]},{"level":3,"title":"3. command","slug":"_3-command","link":"#_3-command","children":[]},{"level":3,"title":"4. container_name","slug":"_4-container-name","link":"#_4-container-name","children":[]},{"level":3,"title":"5. depends_on","slug":"_5-depends-on","link":"#_5-depends-on","children":[]},{"level":3,"title":"6. env_file/environment","slug":"_6-env-file-environment","link":"#_6-env-file-environment","children":[]},{"level":3,"title":"7. extra_hosts","slug":"_7-extra-hosts","link":"#_7-extra-hosts","children":[]},{"level":3,"title":"8. healthcheck","slug":"_8-healthcheck","link":"#_8-healthcheck","children":[]},{"level":3,"title":"9. links","slug":"_9-links","link":"#_9-links","children":[]},{"level":3,"title":"10. networks","slug":"_10-networks","link":"#_10-networks","children":[]},{"level":3,"title":"11. ports","slug":"_11-ports","link":"#_11-ports","children":[]},{"level":3,"title":"12. secrets","slug":"_12-secrets","link":"#_12-secrets","children":[]},{"level":3,"title":"13. volumes","slug":"_13-volumes","link":"#_13-volumes","children":[]}]}],"git":{"updatedTime":1636472013000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/docker/docker-compose.md"}');export{i as comp,r as data};
