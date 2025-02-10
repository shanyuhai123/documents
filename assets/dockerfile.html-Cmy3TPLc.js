import{_ as s,c as n,a as e,o as t}from"./app-DNXRdI82.js";const p={};function l(c,a){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="dockerfile-详解" tabindex="-1"><a class="header-anchor" href="#dockerfile-详解"><span>Dockerfile 详解</span></a></h1><h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构"><span>基本结构</span></a></h2><p><code>Dockerfile</code> 由一行行命令语句组成，并且支持以 <code>#</code> 开头的注释行。一般而言，<code>Dockerfile</code> 主体内容分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。</p><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 基础镜像信息</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span></span>
<span class="line"><span class="token comment"># 维护者信息</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">LABEL</span> maintainer docker_user &lt;username@example.com&gt;</span></span>
<span class="line"><span class="token comment"># 镜像操作指令</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . /app</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> make /app</span></span>
<span class="line"><span class="token comment"># 容器启动时执行指令</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> python /app/app.py</span></span>
<span class="line"></span></code></pre></div><h2 id="指令说明" tabindex="-1"><a class="header-anchor" href="#指令说明"><span>指令说明</span></a></h2><h3 id="_1-arg" tabindex="-1"><a class="header-anchor" href="#_1-arg"><span>1. ARG</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ARG</span> &lt;name&gt;[=&lt;default value&gt;]</span></span>
<span class="line"></span></code></pre></div><p>定义创建镜像过程中使用的变量。</p><h3 id="_2-from" tabindex="-1"><a class="header-anchor" href="#_2-from"><span>2. FROM</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> [--platform=&lt;platform&gt;] &lt;image&gt; [AS &lt;name&gt;]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> [--platform=&lt;platform&gt;] &lt;image&gt;[:&lt;tag&gt;] [AS &lt;name&gt;]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> [--platform=&lt;platform&gt;] &lt;image&gt;[@&lt;digest&gt;] [AS &lt;name&gt;]</span></span>
<span class="line"></span></code></pre></div><p>指定所创建镜像的基础镜像。</p><h3 id="_3-label" tabindex="-1"><a class="header-anchor" href="#_3-label"><span>3. LABEL</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">LABEL</span> &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; ...</span></span>
<span class="line"></span></code></pre></div><p><code>LABEL</code> 指令可以为生成的镜像添加元数据标签信息。这些信息可以用来辅助过滤出特定镜像。</p><h3 id="_4-expose" tabindex="-1"><a class="header-anchor" href="#_4-expose"><span>4. EXPOSE</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</span></span>
<span class="line"></span></code></pre></div><p>声明镜像内服务监听的端口，但并不会自动完成端口映射。</p><h3 id="_5-env" tabindex="-1"><a class="header-anchor" href="#_5-env"><span>5. ENV</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ENV</span> &lt;key&gt; &lt;value&gt;</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> &lt;key&gt;=&lt;value&gt; ...</span></span>
<span class="line"></span></code></pre></div><p>指定环境变量，在镜像生成过程中会被后续 <code>RUN</code> 指令使用，在镜像启动的容器中也会存在。</p><h3 id="_6-entrypoint" tabindex="-1"><a class="header-anchor" href="#_6-entrypoint"><span>6. ENTRYPOINT</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> command param1 param2</span></span>
<span class="line"></span></code></pre></div><p>指定镜像的默认入口命令，该入口命令会在启动容器时作为根命令执行，所有传入值作为该命令的参数。</p><h3 id="_7-volume" tabindex="-1"><a class="header-anchor" href="#_7-volume"><span>7. VOLUME</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/data&quot;</span>]</span></span>
<span class="line"></span></code></pre></div><p>创建一个数据卷挂载点。</p><h3 id="_8-user" tabindex="-1"><a class="header-anchor" href="#_8-user"><span>8. USER</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">USER</span> &lt;user&gt;[:&lt;group&gt;]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">USER</span> &lt;UID&gt;[:&lt;GID&gt;]</span></span>
<span class="line"></span></code></pre></div><p>指定运行容器时的用户名或 <code>UID</code>，后续的 <code>RUN</code> 等指令也会使用指定的用户身份。</p><h3 id="_9-workdir" tabindex="-1"><a class="header-anchor" href="#_9-workdir"><span>9. WORKDIR</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /path/to/workdir</span></span>
<span class="line"></span></code></pre></div><p>为后续的 <code>RUN</code>、<code>CMD</code>、<code>ENTRYPOINT</code> 指令配置工作目录。 可以使用多个 <code>WORKDIR</code> 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。</p><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /a</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> b</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> c</span></span>
<span class="line"><span class="token comment"># /a/b/c</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> pwd</span></span>
<span class="line"></span></code></pre></div><h3 id="_10-onbuild" tabindex="-1"><a class="header-anchor" href="#_10-onbuild"><span>10. ONBUILD</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ONBUILD</span> &lt;INSTRUCTION&gt;</span></span>
<span class="line"></span></code></pre></div><p>指定当基于所生成镜像创建子镜像时，自动执行的操作指令。</p><h3 id="_11-stopsignal" tabindex="-1"><a class="header-anchor" href="#_11-stopsignal"><span>11. STOPSIGNAL</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">STOPSIGNAL</span> signal</span></span>
<span class="line"></span></code></pre></div><p>指定所创建镜像启动的容器接收退出的信号值。</p><h3 id="_12-healthcheck" tabindex="-1"><a class="header-anchor" href="#_12-healthcheck"><span>12. HEALTHCHECK</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">HEALTHCHECK</span> [OPTIONS] CMD command</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">HEALTHCHECK</span> <span class="token keyword">NONE</span></span></span>
<span class="line"></span></code></pre></div><p>配置所启动容器如何进行健康检查。</p><h3 id="_13-shell" tabindex="-1"><a class="header-anchor" href="#_13-shell"><span>13. SHELL</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">SHELL</span> [<span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;parameters&quot;</span>]</span></span>
<span class="line"></span></code></pre></div><p>指定其他命令使用 <code>shell</code> 时的默认 <code>shell</code> 类型。</p><h3 id="_14-run-操作" tabindex="-1"><a class="header-anchor" href="#_14-run-操作"><span>14. RUN（操作）</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">RUN</span> &lt;command&gt;</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> [<span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"></span></code></pre></div><p>运行指定命令。</p><h3 id="_15-cmd-操作" tabindex="-1"><a class="header-anchor" href="#_15-cmd-操作"><span>15. CMD（操作）</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;executable&quot;</span>,<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> command param1 param2</span></span>
<span class="line"></span></code></pre></div><p>指定启动容器时默认执行的命令。</p><h3 id="_16-add-操作" tabindex="-1"><a class="header-anchor" href="#_16-add-操作"><span>16. ADD（操作）</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ADD</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> [--chown=&lt;user&gt;:&lt;group&gt;] [<span class="token string">&quot;&lt;src&gt;&quot;</span>,... <span class="token string">&quot;&lt;dest&gt;&quot;</span>]</span></span>
<span class="line"></span></code></pre></div><p>添加内容到镜像。</p><h3 id="_17-copy-操作" tabindex="-1"><a class="header-anchor" href="#_17-copy-操作"><span>17. COPY（操作）</span></a></h3><p><code>COPY</code> 的 <code>src</code> 是相对于 <code>build</code> 命令指定的 <code>path</code> 位置，与 <code>Dockfile</code> 文件位置无关。</p><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] [<span class="token string">&quot;&lt;src&gt;&quot;</span>,... <span class="token string">&quot;&lt;dest&gt;&quot;</span>]</span></span>
<span class="line"></span></code></pre></div><p>复制内容到镜像。 <code>COPY</code> 与 <code>ADD</code> 指令功能类似，当使用本地目录为源目录时，推荐使用 <code>COPY</code>。</p><h2 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h2><p>编写完 <code>Dockerfile</code> 之后，可以通过 <code>docker build [OPTIONS] PATH | URL | -</code> 来构建镜像。</p><h3 id="_1-资源" tabindex="-1"><a class="header-anchor" href="#_1-资源"><span>1. 资源</span></a></h3><p>创建一个 <code>html</code> 页面。</p><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-cms<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webkit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge,chrome=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Docker Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>We&#39;re sorry but t-beam doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        Hi, Docker Here!</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- built files will be auto injected --&gt;</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><h3 id="_2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-dockerfile"><span>2. Dockerfile</span></a></h3><div class="language-docker" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> nginx</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> ./index.html /usr/share/nginx/html</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-build" tabindex="-1"><a class="header-anchor" href="#_3-build"><span>3. build</span></a></h3><p><code>build</code> 时指定的 <code>path</code> 会作为 <code>Dockfile</code> 内的操作的上下文。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx-dockerfile-image <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-run" tabindex="-1"><a class="header-anchor" href="#_4-run"><span>4. run</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> nginx-dockerfile-c nginx-dockerfile-image</span>
<span class="line"></span></code></pre></div><h3 id="_5-验证" tabindex="-1"><a class="header-anchor" href="#_5-验证"><span>5. 验证</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line">CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES</span>
<span class="line">225af017d59c        nginx-test          <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">2</span> seconds ago       Up <span class="token number">2</span> seconds        <span class="token number">0.0</span>.0.0:32769-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp     nginx-dockerfile-c</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打开对应的 IP 的端口 32769 进行验证</span></span>
<span class="line"></span></code></pre></div>`,72)]))}const i=s(p,[["render",l],["__file","dockerfile.html.vue"]]),r=JSON.parse('{"path":"/backend/docker/dockerfile.html","title":"Dockerfile 详解","lang":"zh-CN","frontmatter":{"autoPrev":"README"},"headers":[{"level":2,"title":"基本结构","slug":"基本结构","link":"#基本结构","children":[]},{"level":2,"title":"指令说明","slug":"指令说明","link":"#指令说明","children":[{"level":3,"title":"1. ARG","slug":"_1-arg","link":"#_1-arg","children":[]},{"level":3,"title":"2. FROM","slug":"_2-from","link":"#_2-from","children":[]},{"level":3,"title":"3. LABEL","slug":"_3-label","link":"#_3-label","children":[]},{"level":3,"title":"4. EXPOSE","slug":"_4-expose","link":"#_4-expose","children":[]},{"level":3,"title":"5. ENV","slug":"_5-env","link":"#_5-env","children":[]},{"level":3,"title":"6. ENTRYPOINT","slug":"_6-entrypoint","link":"#_6-entrypoint","children":[]},{"level":3,"title":"7. VOLUME","slug":"_7-volume","link":"#_7-volume","children":[]},{"level":3,"title":"8. USER","slug":"_8-user","link":"#_8-user","children":[]},{"level":3,"title":"9. WORKDIR","slug":"_9-workdir","link":"#_9-workdir","children":[]},{"level":3,"title":"10. ONBUILD","slug":"_10-onbuild","link":"#_10-onbuild","children":[]},{"level":3,"title":"11. STOPSIGNAL","slug":"_11-stopsignal","link":"#_11-stopsignal","children":[]},{"level":3,"title":"12. HEALTHCHECK","slug":"_12-healthcheck","link":"#_12-healthcheck","children":[]},{"level":3,"title":"13. SHELL","slug":"_13-shell","link":"#_13-shell","children":[]},{"level":3,"title":"14. RUN（操作）","slug":"_14-run-操作","link":"#_14-run-操作","children":[]},{"level":3,"title":"15. CMD（操作）","slug":"_15-cmd-操作","link":"#_15-cmd-操作","children":[]},{"level":3,"title":"16. ADD（操作）","slug":"_16-add-操作","link":"#_16-add-操作","children":[]},{"level":3,"title":"17. COPY（操作）","slug":"_17-copy-操作","link":"#_17-copy-操作","children":[]}]},{"level":2,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[{"level":3,"title":"1. 资源","slug":"_1-资源","link":"#_1-资源","children":[]},{"level":3,"title":"2. Dockerfile","slug":"_2-dockerfile","link":"#_2-dockerfile","children":[]},{"level":3,"title":"3. build","slug":"_3-build","link":"#_3-build","children":[]},{"level":3,"title":"4. run","slug":"_4-run","link":"#_4-run","children":[]},{"level":3,"title":"5. 验证","slug":"_5-验证","link":"#_5-验证","children":[]}]}],"git":{"updatedTime":1675006261000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":4,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/docker/dockerfile.md"}');export{i as comp,r as data};
