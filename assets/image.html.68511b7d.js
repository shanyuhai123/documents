import{d as a}from"./app.221f0787.js";const e={},n=a('<h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像</h2><div class="custom-container tip"><p class="custom-container-title">格式</p><p><code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]</code>。</p><p>NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 <code>latest</code>，即最新版本。</p></div><p>在获取镜像前可以查询是否存在对应的镜像。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker search [OPTIONS] TERM</span>\ndocker search ubuntu\n</code></pre></div><h2 id="镜像信息" tabindex="-1"><a class="header-anchor" href="#镜像信息" aria-hidden="true">#</a> 镜像信息</h2><h3 id="_1-所有镜像概览" tabindex="-1"><a class="header-anchor" href="#_1-所有镜像概览" aria-hidden="true">#</a> 1. 所有镜像概览</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker images\n\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nnginx                 v2                  c7e8f4f26fef        About an hour ago   132MB\nnginx                 latest              0901fa9da894        <span class="token number">9</span> days ago          132MB\n\n<span class="token comment"># `REPOSITORY` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像</span>\n<span class="token comment"># `TAG` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容</span>\n<span class="token comment"># `IMAGE ID` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已</span>\n<span class="token comment"># `CREATED` 创建时间，说明镜像最后的更新时间</span>\n<span class="token comment"># `SIZE` 镜像大小，优秀的镜像往往体积都较小</span>\n</code></pre></div><h3 id="_2-指定镜像详细" tabindex="-1"><a class="header-anchor" href="#_2-指定镜像详细" aria-hidden="true">#</a> 2. 指定镜像详细</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker inspect [OPTIONS] NAME|ID [NAME|ID...]</span>\ndocker inspect ubuntu:latest\n</code></pre></div><h3 id="_3-镜像历史" tabindex="-1"><a class="header-anchor" href="#_3-镜像历史" aria-hidden="true">#</a> 3. 镜像历史</h3><p>镜像文件是由多个层组成，可查看每个层的创建信息。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker history [OPTIONS] IMAGE</span>\ndocker <span class="token function">history</span> ubuntu:latest\n</code></pre></div><h2 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像" aria-hidden="true">#</a> 创建镜像</h2><p>创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。</p><h3 id="_1-已有容器" tabindex="-1"><a class="header-anchor" href="#_1-已有容器" aria-hidden="true">#</a> 1. 已有容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</span>\n<span class="token comment"># 对一个镜像进行修改后</span>\ndocker commit -m <span class="token string">&quot;修改了默认首页&quot;</span> webserver nginx:new\n\n<span class="token comment"># 验证</span>\ndocker images\n</code></pre></div><h3 id="_2-本地模板" tabindex="-1"><a class="header-anchor" href="#_2-本地模板" aria-hidden="true">#</a> 2. 本地模板</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span>\ndocker <span class="token function">import</span> http://example.com/exampleimage.tgz\ndocker <span class="token function">import</span> /path/to/exampleimage.tgz\n<span class="token comment"># 还可以利用 `STDIN`</span>\n<span class="token function">cat</span> exampleimage.tgz <span class="token operator">|</span> docker <span class="token function">import</span> - exampleimagelocal:new\n\n<span class="token comment"># 验证</span>\ndocker images\n</code></pre></div><h3 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile" aria-hidden="true">#</a> 3. Dockerfile</h3><p><code>Dockerfile</code> 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。</p><div class="language-docker ext-docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>\n<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>\n<span class="token instruction"><span class="token keyword">RUN</span> make /app</span>\n<span class="token instruction"><span class="token keyword">CMD</span> python /app/app.py</span>\n</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker build [OPTIONS] PATH | URL | -</span>\ndocker build https://github.com/creack/docker-firefox\ndocker build -t nginx:ttt\n</code></pre></div><h2 id="修改镜像" tabindex="-1"><a class="header-anchor" href="#修改镜像" aria-hidden="true">#</a> 修改镜像</h2><h3 id="_1-添加镜像标签" tabindex="-1"><a class="header-anchor" href="#_1-添加镜像标签" aria-hidden="true">#</a> 1. 添加镜像标签</h3><p>仅添加镜像标签，实际 <code>IMAGE ID</code> 指向同一个。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker tag ubuntu:latest myubuntu:latest\n</code></pre></div><h3 id="_2-删除镜像" tabindex="-1"><a class="header-anchor" href="#_2-删除镜像" aria-hidden="true">#</a> 2. 删除镜像</h3><p>需注意 <code>docker rmi</code> 才是删除镜像，而 <code>docker rm</code> 是删除容器。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]</span>\ndocker rmi ubuntu:latest\n<span class="token comment"># Error response from daemon: conflict: unable to remove repository reference &quot;ubuntu:latest&quot; (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e</span>\n\n<span class="token comment"># 正在使用中，需要先解除容器</span>\ndocker <span class="token function">rm</span> b0f36e5ede8d\n<span class="token comment"># 解除后再删除镜像，删除镜像还可以使用 `IMAGE ID`</span>\ndocker rmi adafef2e596e\n</code></pre></div><h3 id="_3-清理镜像" tabindex="-1"><a class="header-anchor" href="#_3-清理镜像" aria-hidden="true">#</a> 3. 清理镜像</h3><p>系统中可能会遗留一些临时的镜像文件。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker image prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>\n</code></pre></div><h2 id="分享镜像" tabindex="-1"><a class="header-anchor" href="#分享镜像" aria-hidden="true">#</a> 分享镜像</h2><h3 id="_1-save" tabindex="-1"><a class="header-anchor" href="#_1-save" aria-hidden="true">#</a> 1. save</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker images <span class="token comment"># 列出镜像</span>\n\n<span class="token comment"># docker save [OPTIONS] IMAGE [IMAGE...]</span>\ndocker save -o ubuntu_18.04.tar ubuntu:18.04\n</code></pre></div><h3 id="_2-load" tabindex="-1"><a class="header-anchor" href="#_2-load" aria-hidden="true">#</a> 2. load</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker load [OPTIONS]</span>\ndocker load -i ubuntu_18.04.tar\n</code></pre></div><h3 id="_3-hub" tabindex="-1"><a class="header-anchor" href="#_3-hub" aria-hidden="true">#</a> 3. Hub</h3><p>还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 模拟 nginx 打个新 tag</span>\ndocker tag nginx:latest username/nginx:latest\n<span class="token comment"># push</span>\ndocker push username/nginx:latest\n</code></pre></div>',40);e.render=function(a,e){return n};export default e;
