import{_ as a,c as n,a as e,o as p}from"./app-BCSwjUcF.js";const l={};function t(c,s){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="人生苦短-我用-docker" tabindex="-1"><a class="header-anchor" href="#人生苦短-我用-docker"><span>人生苦短，我用 Docker</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Docker 利用了 Linux 内核特性命名空间（namespace）及控制组（cgroups）等为容器提供隔离的运行环境，在此基础上可以认为 “容器是一种特殊的进程”。</p><h2 id="使用脚本快速启用-docker" tabindex="-1"><a class="header-anchor" href="#使用脚本快速启用-docker"><span>使用脚本快速启用 Docker</span></a></h2><p>在过去常常<a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">手动安装</a>，现在已经完全切换为脚本形式了：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh</span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh</span>
<span class="line"><span class="token comment"># 替换源</span></span>
<span class="line"><span class="token comment"># sudo sh get-docker.sh --mirror Aliyun</span></span>
<span class="line"><span class="token comment"># sudo sh get-docker.sh --mirror AzureChinaCloud</span></span>
<span class="line"></span></code></pre></div><p>如果担心脚本异常，可以下载并进行审核。</p><p>接着就可以开始愉快的使用了，例行习惯 Hello World：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run hello-world</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出</span></span>
<span class="line">Hello from Docker<span class="token operator">!</span></span>
<span class="line">This message shows that your installation appears to be working correctly.</span>
<span class="line"></span>
<span class="line">To generate this message, Docker took the following steps:</span>
<span class="line"> <span class="token number">1</span>. The Docker client contacted the Docker daemon.</span>
<span class="line"> <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.</span>
<span class="line">    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span></span>
<span class="line"> <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the</span>
<span class="line">    executable that produces the output you are currently reading.</span>
<span class="line"> <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it</span>
<span class="line">    to your terminal.</span>
<span class="line"></span>
<span class="line">To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:</span>
<span class="line"> $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line">Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:</span>
<span class="line"> https://hub.docker.com/</span>
<span class="line"></span>
<span class="line">For <span class="token function">more</span> examples and ideas, visit:</span>
<span class="line"> https://docs.docker.com/get-started/</span>
<span class="line"></span></code></pre></div><h2 id="初始化-docker-环境" tabindex="-1"><a class="header-anchor" href="#初始化-docker-环境"><span>初始化 Docker 环境</span></a></h2><h3 id="设置用户组" tabindex="-1"><a class="header-anchor" href="#设置用户组"><span>设置用户组</span></a></h3><p>为了避免每次使用 Docker 都需要切换到 <code>sudo</code>，可以将 <code>docker</code> 加入当前用户。重新登录后生效。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> USER_NAME</span>
<span class="line"></span></code></pre></div><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速"><span>镜像加速</span></a></h3><p>镜像服务可用：</p><ol><li><a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noopener noreferrer">阿里云镜像服务</a></li><li><a href="https://www.163yun.com/help/documents/56918246390157312" target="_blank" rel="noopener noreferrer">网易云镜像服务</a></li></ol><p>修改本地的 <code>/etc/docker/daemon.json</code> 并修改 <code>registry-mirrors</code>，可为其配置多个避免某个挂掉：</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="修改存储路径" tabindex="-1"><a class="header-anchor" href="#修改存储路径"><span>修改存储路径</span></a></h3><p>通过 <code>docker info</code> 可以看到默认路径为 <code>/var/lib/docker</code>，而一般服务器会额外挂载硬盘。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改配置文件</span></span>
<span class="line"><span class="token function">vim</span> /etc/docker/daemon.json</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/path/to/docker&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启 docker</span></span>
<span class="line">systemctl restart <span class="token function">docker</span></span>
<span class="line"></span></code></pre></div><p>执行 <code>docker info</code> 进行校验。</p><h2 id="热门镜像" tabindex="-1"><a class="header-anchor" href="#热门镜像"><span>热门镜像</span></a></h2><h3 id="busybox" tabindex="-1"><a class="header-anchor" href="#busybox"><span>Busybox</span></a></h3><p>以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># --rm 用完即删</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> busybox</span>
<span class="line"></span></code></pre></div><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h3><p>从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 <a href="https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore" target="_blank" rel="noopener noreferrer">Node Images Layers</a> 加深该概念。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 追加 bash，否则会直接进入 node</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> node:slim <span class="token function">bash</span></span>
<span class="line"></span></code></pre></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><p>快速测试本地打包好的静态文件。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /dir/dist/:/usr/share/nginx/html <span class="token punctuation">\\</span></span>
<span class="line">  nginx</span>
<span class="line"></span></code></pre></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3><p>指定密码。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span></span>
<span class="line">  mysql</span>
<span class="line"></span></code></pre></div><h3 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo"><span>Mongo</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> some-mongo <span class="token punctuation">\\</span></span>
<span class="line">  mongo <span class="token parameter variable">--auth</span></span>
<span class="line"></span></code></pre></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><p>指定密码。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> some-redis <span class="token punctuation">\\</span></span>
<span class="line">  redis <span class="token parameter variable">--requirepass</span> <span class="token string">&quot;redispwd&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="移除-docker" tabindex="-1"><a class="header-anchor" href="#移除-docker"><span>移除 Docker</span></a></h2><p>如果在之前修改了存储路径，则根据当前情况进行修改。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Ubuntu</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io</span>
<span class="line"><span class="token comment"># CentOS</span></span>
<span class="line"><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 还有 images、containers、volumes、and configurations</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker</span>
<span class="line"></span></code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ol><li><a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a></li><li><a href="https://docs.docker.com/engine/reference/commandline/docker/" target="_blank" rel="noopener noreferrer">Docker Commands</a></li><li>《Docker 技术入门与实战（第三版）》</li><li>《自己动手写 Docker》</li></ol>`,45)]))}const r=a(l,[["render",t]]),i=JSON.parse('{"path":"/backend/docker/","title":"人生苦短，我用 Docker","lang":"zh-CN","frontmatter":{"description":"人生苦短，我用 Docker"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用脚本快速启用 Docker","slug":"使用脚本快速启用-docker","link":"#使用脚本快速启用-docker","children":[]},{"level":2,"title":"初始化 Docker 环境","slug":"初始化-docker-环境","link":"#初始化-docker-环境","children":[{"level":3,"title":"设置用户组","slug":"设置用户组","link":"#设置用户组","children":[]},{"level":3,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]},{"level":3,"title":"修改存储路径","slug":"修改存储路径","link":"#修改存储路径","children":[]}]},{"level":2,"title":"热门镜像","slug":"热门镜像","link":"#热门镜像","children":[{"level":3,"title":"Busybox","slug":"busybox","link":"#busybox","children":[]},{"level":3,"title":"Node.js","slug":"node-js","link":"#node-js","children":[]},{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"Mongo","slug":"mongo","link":"#mongo","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]}]},{"level":2,"title":"移除 Docker","slug":"移除-docker","link":"#移除-docker","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1635263647000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/docker/README.md"}');export{r as comp,i as data};
