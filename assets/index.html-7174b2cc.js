import{_ as r,M as p,p as c,q as l,a1 as t,R as n,t as s,N as o}from"./framework-e3e34937.js";const d={},i={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"};function g(f,a){const e=p("ExternalLinkIcon");return c(),l("div",null,[a[12]||(a[12]=t('<h1 id="人生苦短-我用-docker" tabindex="-1"><a class="header-anchor" href="#人生苦短-我用-docker" aria-hidden="true">#</a> 人生苦短，我用 Docker</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Docker 利用了 Linux 内核特性命名空间（namespace）及控制组（cgroups）等为容器提供隔离的运行环境，在此基础上可以认为 “容器是一种特殊的进程”。</p><h2 id="使用脚本快速启用-docker" tabindex="-1"><a class="header-anchor" href="#使用脚本快速启用-docker" aria-hidden="true">#</a> 使用脚本快速启用 Docker</h2>',4)),n("p",null,[a[1]||(a[1]=s("在过去常常")),n("a",i,[a[0]||(a[0]=s("手动安装")),o(e)]),a[2]||(a[2]=s("，现在已经完全切换为脚本形式了："))]),a[13]||(a[13]=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh

<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
<span class="token comment"># 替换源</span>
<span class="token comment"># sudo sh get-docker.sh --mirror Aliyun</span>
<span class="token comment"># sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre></div><p>如果担心脚本异常，可以下载并进行审核。</p><p>接着就可以开始愉快的使用了，例行习惯 Hello World：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world

<span class="token comment"># 输出</span>
Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>
 <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the
    executable that produces the output you are currently reading.
 <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it
    to your terminal.

To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:
 $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre></div><h2 id="初始化-docker-环境" tabindex="-1"><a class="header-anchor" href="#初始化-docker-环境" aria-hidden="true">#</a> 初始化 Docker 环境</h2><h3 id="设置用户组" tabindex="-1"><a class="header-anchor" href="#设置用户组" aria-hidden="true">#</a> 设置用户组</h3><p>为了避免每次使用 Docker 都需要切换到 <code>sudo</code>，可以将 <code>docker</code> 加入当前用户。重新登录后生效。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>

<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
<span class="token comment"># or</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> USER_NAME
</code></pre></div><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h3><p>镜像服务可用：</p>`,10)),n("ol",null,[n("li",null,[n("a",u,[a[3]||(a[3]=s("阿里云镜像服务")),o(e)])]),n("li",null,[n("a",k,[a[4]||(a[4]=s("网易云镜像服务")),o(e)])])]),a[14]||(a[14]=t(`<p>修改本地的 <code>/etc/docker/daemon.json</code> 并修改 <code>registry-mirrors</code>，可为其配置多个避免某个挂掉：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="修改存储路径" tabindex="-1"><a class="header-anchor" href="#修改存储路径" aria-hidden="true">#</a> 修改存储路径</h3><p>通过 <code>docker info</code> 可以看到默认路径为 <code>/var/lib/docker</code>，而一般服务器会额外挂载硬盘。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改配置文件</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 增加</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/path/to/docker&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重启 docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre></div><p>执行 <code>docker info</code> 进行校验。</p><h2 id="热门镜像" tabindex="-1"><a class="header-anchor" href="#热门镜像" aria-hidden="true">#</a> 热门镜像</h2><h3 id="busybox" tabindex="-1"><a class="header-anchor" href="#busybox" aria-hidden="true">#</a> Busybox</h3><p>以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --rm 用完即删</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> busybox
</code></pre></div><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h3>`,11)),n("p",null,[a[6]||(a[6]=s("从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 ")),n("a",h,[a[5]||(a[5]=s("Node Images Layers")),o(e)]),a[7]||(a[7]=s(" 加深该概念。"))]),a[15]||(a[15]=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 追加 bash，否则会直接进入 node</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> node:slim <span class="token function">bash</span>
</code></pre></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>快速测试本地打包好的静态文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /dir/dist/:/usr/share/nginx/html <span class="token punctuation">\\</span>
  nginx
</code></pre></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><p>指定密码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span>
  mysql
</code></pre></div><h3 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> Mongo</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> some-mongo <span class="token punctuation">\\</span>
  mongo <span class="token parameter variable">--auth</span>
</code></pre></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>指定密码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> some-redis <span class="token punctuation">\\</span>
  redis <span class="token parameter variable">--requirepass</span> <span class="token string">&quot;redispwd&quot;</span>
</code></pre></div><h2 id="移除-docker" tabindex="-1"><a class="header-anchor" href="#移除-docker" aria-hidden="true">#</a> 移除 Docker</h2><p>如果在之前修改了存储路径，则根据当前情况进行修改。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io
<span class="token comment"># CentOS</span>
<span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io

<span class="token comment"># 还有 images、containers、volumes、and configurations</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16)),n("ol",null,[n("li",null,[n("a",m,[a[8]||(a[8]=s("Docker")),o(e)])]),n("li",null,[n("a",b,[a[9]||(a[9]=s("Docker Commands")),o(e)])]),a[10]||(a[10]=n("li",null,"《Docker 技术入门与实战（第三版）》",-1)),a[11]||(a[11]=n("li",null,"《自己动手写 Docker》",-1))])])}const x=r(d,[["render",g],["__file","index.html.vue"]]);export{x as default};
