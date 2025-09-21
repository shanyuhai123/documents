import{_ as a,c as n,a as e,o as p}from"./app-BoSqM2g3.js";const l={};function c(t,s){return p(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="了解-docker-镜像" tabindex="-1"><a class="header-anchor" href="#了解-docker-镜像"><span>了解 Docker 镜像</span></a></h1><h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像"><span>获取镜像</span></a></h2><div class="hint-container tip"><p class="hint-container-title">格式</p><p><code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]</code>。</p><p>NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 <code>latest</code>，即最新版本。</p></div><p>在获取镜像前可以查询是否存在对应的镜像。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker search [OPTIONS] TERM</span></span>
<span class="line"><span class="token function">docker</span> search ubuntu</span>
<span class="line"></span></code></pre></div><h2 id="镜像信息" tabindex="-1"><a class="header-anchor" href="#镜像信息"><span>镜像信息</span></a></h2><h3 id="_1-所有镜像概览" tabindex="-1"><a class="header-anchor" href="#_1-所有镜像概览"><span>1. 所有镜像概览</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span>
<span class="line">REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE</span>
<span class="line">nginx                 v2                  c7e8f4f26fef        About an hour ago   132MB</span>
<span class="line">nginx                 latest              0901fa9da894        <span class="token number">9</span> days ago          132MB</span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`REPOSITORY\` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像</span></span>
<span class="line"><span class="token comment"># \`TAG\` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容</span></span>
<span class="line"><span class="token comment"># \`IMAGE ID\` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已</span></span>
<span class="line"><span class="token comment"># \`CREATED\` 创建时间，说明镜像最后的更新时间</span></span>
<span class="line"><span class="token comment"># \`SIZE\` 镜像大小，优秀的镜像往往体积都较小</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-指定镜像详细" tabindex="-1"><a class="header-anchor" href="#_2-指定镜像详细"><span>2. 指定镜像详细</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker inspect [OPTIONS] NAME|ID [NAME|ID...]</span></span>
<span class="line"><span class="token function">docker</span> inspect ubuntu:latest</span>
<span class="line"></span></code></pre></div><h3 id="_3-镜像历史" tabindex="-1"><a class="header-anchor" href="#_3-镜像历史"><span>3. 镜像历史</span></a></h3><p>镜像文件是由多个层组成，可查看每个层的创建信息。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker history [OPTIONS] IMAGE</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">history</span> ubuntu:latest</span>
<span class="line"></span></code></pre></div><h2 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像"><span>创建镜像</span></a></h2><p>创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。</p><h3 id="_1-已有容器" tabindex="-1"><a class="header-anchor" href="#_1-已有容器"><span>1. 已有容器</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</span></span>
<span class="line"><span class="token comment"># 对一个镜像进行修改后</span></span>
<span class="line"><span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;修改了默认首页&quot;</span> webserver nginx:new</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span></code></pre></div><h3 id="_2-本地模板" tabindex="-1"><a class="header-anchor" href="#_2-本地模板"><span>2. 本地模板</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">import</span> http://example.com/exampleimage.tgz</span>
<span class="line"><span class="token function">docker</span> <span class="token function">import</span> /path/to/exampleimage.tgz</span>
<span class="line"><span class="token comment"># 还可以利用 \`STDIN\`</span></span>
<span class="line"><span class="token function">cat</span> exampleimage.tgz <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - exampleimagelocal:new</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span></code></pre></div><h3 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile"><span>3. Dockerfile</span></a></h3><p><code>Dockerfile</code> 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。</p><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . /app</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> make /app</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> python /app/app.py</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker build [OPTIONS] PATH | URL | -</span></span>
<span class="line"><span class="token function">docker</span> build https://github.com/creack/docker-firefox</span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx:ttt</span>
<span class="line"></span></code></pre></div><h2 id="修改镜像" tabindex="-1"><a class="header-anchor" href="#修改镜像"><span>修改镜像</span></a></h2><h3 id="_1-添加镜像标签" tabindex="-1"><a class="header-anchor" href="#_1-添加镜像标签"><span>1. 添加镜像标签</span></a></h3><p>仅添加镜像标签，实际 <code>IMAGE ID</code> 指向同一个。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> tag ubuntu:latest myubuntu:latest</span>
<span class="line"></span></code></pre></div><h3 id="_2-删除镜像" tabindex="-1"><a class="header-anchor" href="#_2-删除镜像"><span>2. 删除镜像</span></a></h3><p>需注意 <code>docker rmi</code> 才是删除镜像，而 <code>docker rm</code> 是删除容器。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]</span></span>
<span class="line"><span class="token function">docker</span> rmi ubuntu:latest</span>
<span class="line"><span class="token comment"># Error response from daemon: conflict: unable to remove repository reference &quot;ubuntu:latest&quot; (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 正在使用中，需要先解除容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> b0f36e5ede8d</span>
<span class="line"><span class="token comment"># 解除后再删除镜像，删除镜像还可以使用 \`IMAGE ID\`</span></span>
<span class="line"><span class="token function">docker</span> rmi adafef2e596e</span>
<span class="line"></span></code></pre></div><p>批量删除镜像：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 以删除 harbor 镜像示例</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;goharbor&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span></span>
<span class="line"></span></code></pre></div><h3 id="_3-清理镜像" tabindex="-1"><a class="header-anchor" href="#_3-清理镜像"><span>3. 清理镜像</span></a></h3><p>系统中可能会遗留一些临时的镜像文件。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> image prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><h2 id="分享镜像" tabindex="-1"><a class="header-anchor" href="#分享镜像"><span>分享镜像</span></a></h2><h3 id="_1-save" tabindex="-1"><a class="header-anchor" href="#_1-save"><span>1. save</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> images <span class="token comment"># 列出镜像</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># docker save [OPTIONS] IMAGE [IMAGE...]</span></span>
<span class="line"><span class="token function">docker</span> save <span class="token parameter variable">-o</span> ubuntu_18.04.tar ubuntu:18.04</span>
<span class="line"></span></code></pre></div><h3 id="_2-load" tabindex="-1"><a class="header-anchor" href="#_2-load"><span>2. load</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># docker load [OPTIONS]</span></span>
<span class="line"><span class="token function">docker</span> load <span class="token parameter variable">-i</span> ubuntu_18.04.tar</span>
<span class="line"></span></code></pre></div><h3 id="_3-hub" tabindex="-1"><a class="header-anchor" href="#_3-hub"><span>3. Hub</span></a></h3><p>还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 模拟 nginx 打个新 tag</span></span>
<span class="line"><span class="token function">docker</span> tag nginx:latest username/nginx:latest</span>
<span class="line"><span class="token comment"># push</span></span>
<span class="line"><span class="token function">docker</span> push username/nginx:latest</span>
<span class="line"></span></code></pre></div><h2 id="docker-slim-优化镜像" tabindex="-1"><a class="header-anchor" href="#docker-slim-优化镜像"><span>Docker slim 优化镜像</span></a></h2><p>首先需要获取 <a href="https://github.com/docker-slim/docker-slim/releases" target="_blank" rel="noopener noreferrer">Docker Slim</a>。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> ds.tar.gz https://downloads.dockerslim.com/releases/1.37.0/dist_linux.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ds.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动到 bin</span></span>
<span class="line"><span class="token function">mv</span> dist_linux/docker-slim /usr/local/bin/</span>
<span class="line"><span class="token function">mv</span> dist_linux/docker-slim-sensor /usr/local/bin/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 校验</span></span>
<span class="line">docker-slim <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token comment"># docker-slim version linux|Transformer|1.37.0|70cc8acfcb733161ce7e685b81ad6c172643c222|2021-09-23_09:23:43AM</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者直接使用脚本</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://raw.githubusercontent.com/docker-slim/docker-slim/master/scripts/install-dockerslim.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -</span>
<span class="line"></span></code></pre></div><h3 id="node-镜像优化大小" tabindex="-1"><a class="header-anchor" href="#node-镜像优化大小"><span>Node 镜像优化大小</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看原大小</span></span>
<span class="line"><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">node</span></span>
<span class="line"><span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        1 months ago        593MB</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># docker slim</span></span>
<span class="line">docker-slim build <span class="token parameter variable">--target</span> node_app:1.0.0 <span class="token parameter variable">--tag</span> node_app:1.0.0-slim --http-probe<span class="token operator">=</span>false</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再次查看，发现显著缩小</span></span>
<span class="line"><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">node</span></span>
<span class="line"><span class="token comment"># node_app                     1.0.0-slim          061aa2d584d0        19 seconds ago      84.4MB</span></span>
<span class="line"><span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        6 months ago        593MB</span></span>
<span class="line"></span></code></pre></div>`,48)])])}const o=a(l,[["render",c]]),r=JSON.parse('{"path":"/backend/docker/image.html","title":"了解 Docker 镜像","lang":"zh-CN","frontmatter":{"description":"了解 Docker 镜像","autoPrev":"dockerfile","sidebarDepth":2},"headers":[{"level":2,"title":"获取镜像","slug":"获取镜像","link":"#获取镜像","children":[]},{"level":2,"title":"镜像信息","slug":"镜像信息","link":"#镜像信息","children":[{"level":3,"title":"1. 所有镜像概览","slug":"_1-所有镜像概览","link":"#_1-所有镜像概览","children":[]},{"level":3,"title":"2. 指定镜像详细","slug":"_2-指定镜像详细","link":"#_2-指定镜像详细","children":[]},{"level":3,"title":"3. 镜像历史","slug":"_3-镜像历史","link":"#_3-镜像历史","children":[]}]},{"level":2,"title":"创建镜像","slug":"创建镜像","link":"#创建镜像","children":[{"level":3,"title":"1. 已有容器","slug":"_1-已有容器","link":"#_1-已有容器","children":[]},{"level":3,"title":"2. 本地模板","slug":"_2-本地模板","link":"#_2-本地模板","children":[]},{"level":3,"title":"3. Dockerfile","slug":"_3-dockerfile","link":"#_3-dockerfile","children":[]}]},{"level":2,"title":"修改镜像","slug":"修改镜像","link":"#修改镜像","children":[{"level":3,"title":"1. 添加镜像标签","slug":"_1-添加镜像标签","link":"#_1-添加镜像标签","children":[]},{"level":3,"title":"2. 删除镜像","slug":"_2-删除镜像","link":"#_2-删除镜像","children":[]},{"level":3,"title":"3. 清理镜像","slug":"_3-清理镜像","link":"#_3-清理镜像","children":[]}]},{"level":2,"title":"分享镜像","slug":"分享镜像","link":"#分享镜像","children":[{"level":3,"title":"1. save","slug":"_1-save","link":"#_1-save","children":[]},{"level":3,"title":"2. load","slug":"_2-load","link":"#_2-load","children":[]},{"level":3,"title":"3. Hub","slug":"_3-hub","link":"#_3-hub","children":[]}]},{"level":2,"title":"Docker slim 优化镜像","slug":"docker-slim-优化镜像","link":"#docker-slim-优化镜像","children":[{"level":3,"title":"Node 镜像优化大小","slug":"node-镜像优化大小","link":"#node-镜像优化大小","children":[]}]}],"git":{"updatedTime":1636472147000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/docker/image.md"}');export{o as comp,r as data};
