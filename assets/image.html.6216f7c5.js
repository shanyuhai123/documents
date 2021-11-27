import{r as o,c,a as e,b as t,F as r,e as n,d as a,o as d}from"./app.12170b86.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const i={},l=n(`<h1 id="\u4E86\u89E3-docker-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3-docker-\u955C\u50CF" aria-hidden="true">#</a> \u4E86\u89E3 Docker \u955C\u50CF</h1><h2 id="\u83B7\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u955C\u50CF" aria-hidden="true">#</a> \u83B7\u53D6\u955C\u50CF</h2><div class="custom-container tip"><p class="custom-container-title">\u683C\u5F0F</p><p><code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]</code>\u3002</p><p>NAME \u662F\u955C\u50CF\u4ED3\u5E93\u540D\u79F0\uFF08\u7528\u6765\u533A\u5206\u955C\u50CF\uFF09\uFF0CTAG \u662F\u955C\u50CF\u7684\u6807\u7B7E\uFF08\u5F80\u5F80\u7528\u6765\u8868\u793A\u7248\u672C\u4FE1\u606F\uFF09\u3002\u82E5\u4E0D\u6307\u5B9A TAG \u5219\u9ED8\u8BA4\u9009\u62E9 <code>latest</code>\uFF0C\u5373\u6700\u65B0\u7248\u672C\u3002</p></div><p>\u5728\u83B7\u53D6\u955C\u50CF\u524D\u53EF\u4EE5\u67E5\u8BE2\u662F\u5426\u5B58\u5728\u5BF9\u5E94\u7684\u955C\u50CF\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker search [OPTIONS] TERM</span>
docker search ubuntu
</code></pre></div><h2 id="\u955C\u50CF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u4FE1\u606F" aria-hidden="true">#</a> \u955C\u50CF\u4FE1\u606F</h2><h3 id="_1-\u6240\u6709\u955C\u50CF\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#_1-\u6240\u6709\u955C\u50CF\u6982\u89C8" aria-hidden="true">#</a> 1. \u6240\u6709\u955C\u50CF\u6982\u89C8</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker images

REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
nginx                 v2                  c7e8f4f26fef        About an hour ago   132MB
nginx                 latest              0901fa9da894        <span class="token number">9</span> days ago          132MB

<span class="token comment"># \`REPOSITORY\` \u6765\u81EA\u4E8E\u54EA\u4E2A\u4ED3\u5E93\uFF0C\u6BD4\u5982ubuntu\u8868\u793Aubuntu\u7CFB\u5217\u7684\u57FA\u7840\u955C\u50CF</span>
<span class="token comment"># \`TAG\` \u955C\u50CF\u7684\u6807\u7B7E\u4FE1\u606F\uFF0C\u6BD4\u598218.04\u3001latest\u8868\u793A\u4E0D\u540C\u7684\u7248\u672C\u4FE1\u606F\u3002\u6807\u7B7E\u53EA\u662F\u6807\u8BB0\uFF0C\u5E76\u4E0D\u80FD\u6807\u8BC6\u955C\u50CF\u5185\u5BB9</span>
<span class="token comment"># \`IMAGE ID\` \u955C\u50CF\u7684ID\uFF08\u552F\u4E00\u6807\u8BC6\u955C\u50CF\uFF09\uFF0C\u5982\u679C\u4E24\u4E2A\u955C\u50CF\u7684ID\u76F8\u540C\uFF0C\u8BF4\u660E\u5B83\u4EEC\u5B9E\u9645\u4E0A\u6307\u5411\u4E86\u540C\u4E00\u4E2A\u955C\u50CF\uFF0C\u53EA\u662F\u5177\u6709\u4E0D\u540C\u6807\u7B7E\u540D\u79F0\u800C\u5DF2</span>
<span class="token comment"># \`CREATED\` \u521B\u5EFA\u65F6\u95F4\uFF0C\u8BF4\u660E\u955C\u50CF\u6700\u540E\u7684\u66F4\u65B0\u65F6\u95F4</span>
<span class="token comment"># \`SIZE\` \u955C\u50CF\u5927\u5C0F\uFF0C\u4F18\u79C0\u7684\u955C\u50CF\u5F80\u5F80\u4F53\u79EF\u90FD\u8F83\u5C0F</span>
</code></pre></div><h3 id="_2-\u6307\u5B9A\u955C\u50CF\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#_2-\u6307\u5B9A\u955C\u50CF\u8BE6\u7EC6" aria-hidden="true">#</a> 2. \u6307\u5B9A\u955C\u50CF\u8BE6\u7EC6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker inspect [OPTIONS] NAME|ID [NAME|ID...]</span>
docker inspect ubuntu:latest
</code></pre></div><h3 id="_3-\u955C\u50CF\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#_3-\u955C\u50CF\u5386\u53F2" aria-hidden="true">#</a> 3. \u955C\u50CF\u5386\u53F2</h3><p>\u955C\u50CF\u6587\u4EF6\u662F\u7531\u591A\u4E2A\u5C42\u7EC4\u6210\uFF0C\u53EF\u67E5\u770B\u6BCF\u4E2A\u5C42\u7684\u521B\u5EFA\u4FE1\u606F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker history [OPTIONS] IMAGE</span>
docker <span class="token function">history</span> ubuntu:latest
</code></pre></div><h2 id="\u521B\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u521B\u5EFA\u955C\u50CF</h2><p>\u521B\u5EFA\u955C\u50CF\u7684\u65B9\u6CD5\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A\u57FA\u4E8E\u5DF2\u6709\u955C\u50CF\u7684\u5185\u5BB9\u521B\u5EFA\uFF08commit\uFF09\u3001\u57FA\u4E8E\u672C\u5730\u6A21\u677F\u5BFC\u5165\uFF08import\uFF09\u3001\u57FA\u4E8E Dockerfile \u521B\u5EFA\uFF08build\uFF09\u3002</p><h3 id="_1-\u5DF2\u6709\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u5DF2\u6709\u5BB9\u5668" aria-hidden="true">#</a> 1. \u5DF2\u6709\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</span>
<span class="token comment"># \u5BF9\u4E00\u4E2A\u955C\u50CF\u8FDB\u884C\u4FEE\u6539\u540E</span>
docker commit -m <span class="token string">&quot;\u4FEE\u6539\u4E86\u9ED8\u8BA4\u9996\u9875&quot;</span> webserver nginx:new

<span class="token comment"># \u9A8C\u8BC1</span>
docker images
</code></pre></div><h3 id="_2-\u672C\u5730\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_2-\u672C\u5730\u6A21\u677F" aria-hidden="true">#</a> 2. \u672C\u5730\u6A21\u677F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span>
docker <span class="token function">import</span> http://example.com/exampleimage.tgz
docker <span class="token function">import</span> /path/to/exampleimage.tgz
<span class="token comment"># \u8FD8\u53EF\u4EE5\u5229\u7528 \`STDIN\`</span>
<span class="token function">cat</span> exampleimage.tgz <span class="token operator">|</span> docker <span class="token function">import</span> - exampleimagelocal:new

<span class="token comment"># \u9A8C\u8BC1</span>
docker images
</code></pre></div><h3 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile" aria-hidden="true">#</a> 3. Dockerfile</h3><p><code>Dockerfile</code> \u662F\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u5229\u7528\u7ED9\u5B9A\u7684\u6307\u4EE4\u63CF\u8FF0\u57FA\u4E8E\u67D0\u4E2A\u7236\u955C\u50CF\u521B\u5EFA\u65B0\u955C\u50CF\u7684\u8FC7\u7A0B\u3002</p><div class="language-docker ext-docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>
<span class="token instruction"><span class="token keyword">RUN</span> make /app</span>
<span class="token instruction"><span class="token keyword">CMD</span> python /app/app.py</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker build [OPTIONS] PATH | URL | -</span>
docker build https://github.com/creack/docker-firefox
docker build -t nginx:ttt
</code></pre></div><h2 id="\u4FEE\u6539\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u955C\u50CF" aria-hidden="true">#</a> \u4FEE\u6539\u955C\u50CF</h2><h3 id="_1-\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_1-\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E" aria-hidden="true">#</a> 1. \u6DFB\u52A0\u955C\u50CF\u6807\u7B7E</h3><p>\u4EC5\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E\uFF0C\u5B9E\u9645 <code>IMAGE ID</code> \u6307\u5411\u540C\u4E00\u4E2A\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker tag ubuntu:latest myubuntu:latest
</code></pre></div><h3 id="_2-\u5220\u9664\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_2-\u5220\u9664\u955C\u50CF" aria-hidden="true">#</a> 2. \u5220\u9664\u955C\u50CF</h3><p>\u9700\u6CE8\u610F <code>docker rmi</code> \u624D\u662F\u5220\u9664\u955C\u50CF\uFF0C\u800C <code>docker rm</code> \u662F\u5220\u9664\u5BB9\u5668\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]</span>
docker rmi ubuntu:latest
<span class="token comment"># Error response from daemon: conflict: unable to remove repository reference &quot;ubuntu:latest&quot; (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e</span>

<span class="token comment"># \u6B63\u5728\u4F7F\u7528\u4E2D\uFF0C\u9700\u8981\u5148\u89E3\u9664\u5BB9\u5668</span>
docker <span class="token function">rm</span> b0f36e5ede8d
<span class="token comment"># \u89E3\u9664\u540E\u518D\u5220\u9664\u955C\u50CF\uFF0C\u5220\u9664\u955C\u50CF\u8FD8\u53EF\u4EE5\u4F7F\u7528 \`IMAGE ID\`</span>
docker rmi adafef2e596e
</code></pre></div><p>\u6279\u91CF\u5220\u9664\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4EE5\u5220\u9664 harbor \u955C\u50CF\u793A\u4F8B</span>
docker rmi <span class="token variable"><span class="token variable">$(</span>docker images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;goharbor&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
</code></pre></div><h3 id="_3-\u6E05\u7406\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_3-\u6E05\u7406\u955C\u50CF" aria-hidden="true">#</a> 3. \u6E05\u7406\u955C\u50CF</h3><p>\u7CFB\u7EDF\u4E2D\u53EF\u80FD\u4F1A\u9057\u7559\u4E00\u4E9B\u4E34\u65F6\u7684\u955C\u50CF\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker image prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u5206\u4EAB\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5206\u4EAB\u955C\u50CF" aria-hidden="true">#</a> \u5206\u4EAB\u955C\u50CF</h2><h3 id="_1-save" tabindex="-1"><a class="header-anchor" href="#_1-save" aria-hidden="true">#</a> 1. save</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker images <span class="token comment"># \u5217\u51FA\u955C\u50CF</span>

<span class="token comment"># docker save [OPTIONS] IMAGE [IMAGE...]</span>
docker save -o ubuntu_18.04.tar ubuntu:18.04
</code></pre></div><h3 id="_2-load" tabindex="-1"><a class="header-anchor" href="#_2-load" aria-hidden="true">#</a> 2. load</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker load [OPTIONS]</span>
docker load -i ubuntu_18.04.tar
</code></pre></div><h3 id="_3-hub" tabindex="-1"><a class="header-anchor" href="#_3-hub" aria-hidden="true">#</a> 3. Hub</h3><p>\u8FD8\u53EF\u4EE5\u76F4\u63A5\u5206\u4EAB\u5230 Docker Hub \u516C\u5171\u4ED3\u5E93\uFF0C\u8FD9\u9700\u8981\u5728\u5B98\u7F51\u6CE8\u518C\u5E10\u53F7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6A21\u62DF nginx \u6253\u4E2A\u65B0 tag</span>
docker tag nginx:latest username/nginx:latest
<span class="token comment"># push</span>
docker push username/nginx:latest
</code></pre></div><h2 id="docker-slim-\u4F18\u5316\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#docker-slim-\u4F18\u5316\u955C\u50CF" aria-hidden="true">#</a> Docker slim \u4F18\u5316\u955C\u50CF</h2>`,44),h=a("\u9996\u5148\u9700\u8981\u83B7\u53D6 "),u={href:"https://github.com/docker-slim/docker-slim/releases",target:"_blank",rel:"noopener noreferrer"},m=a("Docker Slim"),k=a("\u3002"),g=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D</span>
<span class="token function">curl</span> -L -o ds.tar.gz https://downloads.dockerslim.com/releases/1.37.0/dist_linux.tar.gz

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> -xvf ds.tar.gz

<span class="token comment"># \u79FB\u52A8\u5230 bin</span>
<span class="token function">mv</span> dist_linux/docker-slim /usr/local/bin/
<span class="token function">mv</span> dist_linux/docker-slim-sensor /usr/local/bin/

<span class="token comment"># \u6821\u9A8C</span>
docker-slim --version
<span class="token comment"># docker-slim version linux|Transformer|1.37.0|70cc8acfcb733161ce7e685b81ad6c172643c222|2021-09-23_09:23:43AM</span>

<span class="token comment"># \u6216\u8005\u76F4\u63A5\u4F7F\u7528\u811A\u672C</span>
<span class="token function">curl</span> -sL https://raw.githubusercontent.com/docker-slim/docker-slim/master/scripts/install-dockerslim.sh <span class="token operator">|</span> <span class="token function">sudo</span> -E <span class="token function">bash</span> -
</code></pre></div><h3 id="node-\u955C\u50CF\u4F18\u5316\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#node-\u955C\u50CF\u4F18\u5316\u5927\u5C0F" aria-hidden="true">#</a> Node \u955C\u50CF\u4F18\u5316\u5927\u5C0F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u539F\u5927\u5C0F</span>
docker images <span class="token operator">|</span> <span class="token function">grep</span> node
<span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        1 months ago        593MB</span>

<span class="token comment"># docker slim</span>
docker-slim build --target node_app:1.0.0 --tag node_app:1.0.0-slim --http-probe<span class="token operator">=</span>false

<span class="token comment"># \u518D\u6B21\u67E5\u770B\uFF0C\u53D1\u73B0\u663E\u8457\u7F29\u5C0F</span>
docker images <span class="token operator">|</span> <span class="token function">grep</span> node
<span class="token comment"># node_app                     1.0.0-slim          061aa2d584d0        19 seconds ago      84.4MB</span>
<span class="token comment"># node_app                     1.0.0               3fe14ce78d6d        6 months ago        593MB</span>
</code></pre></div>`,3);function b(f,x){const s=o("OutboundLink");return d(),c(r,null,[l,e("p",null,[h,e("a",u,[m,t(s)]),k]),g],64)}var I=p(i,[["render",b]]);export{I as default};
