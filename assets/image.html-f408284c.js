import{_ as o,M as c,p as t,q as p,Q as n,t as a,N as r,a1 as s}from"./framework-49860b1b.js";const d={},l=s(`<h1 id="了解-docker-镜像" tabindex="-1"><a class="header-anchor" href="#了解-docker-镜像" aria-hidden="true">#</a> 了解 Docker 镜像</h1><h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像</h2><div class="custom-container tip"><p class="custom-container-title">格式</p><p><code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]</code>。</p><p>NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 <code>latest</code>，即最新版本。</p></div><p>在获取镜像前可以查询是否存在对应的镜像。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker search [OPTIONS] TERM</span>
<span class="token function">docker</span> search ubuntu
</code></pre></div><h2 id="镜像信息" tabindex="-1"><a class="header-anchor" href="#镜像信息" aria-hidden="true">#</a> 镜像信息</h2><h3 id="_1-所有镜像概览" tabindex="-1"><a class="header-anchor" href="#_1-所有镜像概览" aria-hidden="true">#</a> 1. 所有镜像概览</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images

REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
nginx                 v2                  c7e8f4f26fef        About an hour ago   132MB
nginx                 latest              0901fa9da894        <span class="token number">9</span> days ago          132MB

<span class="token comment"># \`REPOSITORY\` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像</span>
<span class="token comment"># \`TAG\` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容</span>
<span class="token comment"># \`IMAGE ID\` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已</span>
<span class="token comment"># \`CREATED\` 创建时间，说明镜像最后的更新时间</span>
<span class="token comment"># \`SIZE\` 镜像大小，优秀的镜像往往体积都较小</span>
</code></pre></div><h3 id="_2-指定镜像详细" tabindex="-1"><a class="header-anchor" href="#_2-指定镜像详细" aria-hidden="true">#</a> 2. 指定镜像详细</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker inspect [OPTIONS] NAME|ID [NAME|ID...]</span>
<span class="token function">docker</span> inspect ubuntu:latest
</code></pre></div><h3 id="_3-镜像历史" tabindex="-1"><a class="header-anchor" href="#_3-镜像历史" aria-hidden="true">#</a> 3. 镜像历史</h3><p>镜像文件是由多个层组成，可查看每个层的创建信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker history [OPTIONS] IMAGE</span>
<span class="token function">docker</span> <span class="token function">history</span> ubuntu:latest
</code></pre></div><h2 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像" aria-hidden="true">#</a> 创建镜像</h2><p>创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。</p><h3 id="_1-已有容器" tabindex="-1"><a class="header-anchor" href="#_1-已有容器" aria-hidden="true">#</a> 1. 已有容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</span>
<span class="token comment"># 对一个镜像进行修改后</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;修改了默认首页&quot;</span> webserver nginx:new

<span class="token comment"># 验证</span>
<span class="token function">docker</span> images
</code></pre></div><h3 id="_2-本地模板" tabindex="-1"><a class="header-anchor" href="#_2-本地模板" aria-hidden="true">#</a> 2. 本地模板</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span>
<span class="token function">docker</span> <span class="token function">import</span> http://example.com/exampleimage.tgz
<span class="token function">docker</span> <span class="token function">import</span> /path/to/exampleimage.tgz
<span class="token comment"># 还可以利用 \`STDIN\`</span>
<span class="token function">cat</span> exampleimage.tgz <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - exampleimagelocal:new

<span class="token comment"># 验证</span>
<span class="token function">docker</span> images
</code></pre></div><h3 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile" aria-hidden="true">#</a> 3. Dockerfile</h3><p><code>Dockerfile</code> 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>
<span class="token instruction"><span class="token keyword">RUN</span> make /app</span>
<span class="token instruction"><span class="token keyword">CMD</span> python /app/app.py</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker build [OPTIONS] PATH | URL | -</span>
<span class="token function">docker</span> build https://github.com/creack/docker-firefox
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx:ttt
</code></pre></div><h2 id="修改镜像" tabindex="-1"><a class="header-anchor" href="#修改镜像" aria-hidden="true">#</a> 修改镜像</h2><h3 id="_1-添加镜像标签" tabindex="-1"><a class="header-anchor" href="#_1-添加镜像标签" aria-hidden="true">#</a> 1. 添加镜像标签</h3><p>仅添加镜像标签，实际 <code>IMAGE ID</code> 指向同一个。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag ubuntu:latest myubuntu:latest
</code></pre></div><h3 id="_2-删除镜像" tabindex="-1"><a class="header-anchor" href="#_2-删除镜像" aria-hidden="true">#</a> 2. 删除镜像</h3><p>需注意 <code>docker rmi</code> 才是删除镜像，而 <code>docker rm</code> 是删除容器。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]</span>
<span class="token function">docker</span> rmi ubuntu:latest
<span class="token comment"># Error response from daemon: conflict: unable to remove repository reference &quot;ubuntu:latest&quot; (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e</span>

<span class="token comment"># 正在使用中，需要先解除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> b0f36e5ede8d
<span class="token comment"># 解除后再删除镜像，删除镜像还可以使用 \`IMAGE ID\`</span>
<span class="token function">docker</span> rmi adafef2e596e
</code></pre></div><p>批量删除镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以删除 harbor 镜像示例</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;goharbor&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
</code></pre></div><h3 id="_3-清理镜像" tabindex="-1"><a class="header-anchor" href="#_3-清理镜像" aria-hidden="true">#</a> 3. 清理镜像</h3><p>系统中可能会遗留一些临时的镜像文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre></div><h2 id="分享镜像" tabindex="-1"><a class="header-anchor" href="#分享镜像" aria-hidden="true">#</a> 分享镜像</h2><h3 id="_1-save" tabindex="-1"><a class="header-anchor" href="#_1-save" aria-hidden="true">#</a> 1. save</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token comment"># 列出镜像</span>

<span class="token comment"># docker save [OPTIONS] IMAGE [IMAGE...]</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> ubuntu_18.04.tar ubuntu:18.04
</code></pre></div><h3 id="_2-load" tabindex="-1"><a class="header-anchor" href="#_2-load" aria-hidden="true">#</a> 2. load</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker load [OPTIONS]</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> ubuntu_18.04.tar
</code></pre></div><h3 id="_3-hub" tabindex="-1"><a class="header-anchor" href="#_3-hub" aria-hidden="true">#</a> 3. Hub</h3><p>还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 模拟 nginx 打个新 tag</span>
<span class="token function">docker</span> tag nginx:latest username/nginx:latest
<span class="token comment"># push</span>
<span class="token function">docker</span> push username/nginx:latest
</code></pre></div><h2 id="docker-slim-优化镜像" tabindex="-1"><a class="header-anchor" href="#docker-slim-优化镜像" aria-hidden="true">#</a> Docker slim 优化镜像</h2>`,44),i={href:"https://github.com/docker-slim/docker-slim/releases",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> ds.tar.gz https://downloads.dockerslim.com/releases/1.37.0/dist_linux.tar.gz

<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ds.tar.gz

<span class="token comment"># 移动到 bin</span>
<span class="token function">mv</span> dist_linux/docker-slim /usr/local/bin/
<span class="token function">mv</span> dist_linux/docker-slim-sensor /usr/local/bin/

<span class="token comment"># 校验</span>
docker-slim <span class="token parameter variable">--version</span>
<span class="token comment"># docker-slim version linux|Transformer|1.37.0|70cc8acfcb733161ce7e685b81ad6c172643c222|2021-09-23_09:23:43AM</span>

<span class="token comment"># 或者直接使用脚本</span>
<span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://raw.githubusercontent.com/docker-slim/docker-slim/master/scripts/install-dockerslim.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -
</code></pre></div><h3 id="node-镜像优化大小" tabindex="-1"><a class="header-anchor" href="#node-镜像优化大小" aria-hidden="true">#</a> Node 镜像优化大小</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看原大小</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">node</span>
<span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        1 months ago        593MB</span>

<span class="token comment"># docker slim</span>
docker-slim build <span class="token parameter variable">--target</span> node_app:1.0.0 <span class="token parameter variable">--tag</span> node_app:1.0.0-slim --http-probe<span class="token operator">=</span>false

<span class="token comment"># 再次查看，发现显著缩小</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">node</span>
<span class="token comment"># node_app                     1.0.0-slim          061aa2d584d0        19 seconds ago      84.4MB</span>
<span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        6 months ago        593MB</span>
</code></pre></div>`,3);function k(u,m){const e=c("ExternalLinkIcon");return t(),p("div",null,[l,n("p",null,[a("首先需要获取 "),n("a",i,[a("Docker Slim"),r(e)]),a("。")]),h])}const b=o(d,[["render",k],["__file","image.html.vue"]]);export{b as default};
