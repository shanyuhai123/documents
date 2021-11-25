import{r as t,c,a as n,b as s,F as r,e as o,d as e,o as d}from"./app.bb1abaaa.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const i={},l=o('<h1 id="\u4EBA\u751F\u82E6\u77ED-\u6211\u7528-docker" tabindex="-1"><a class="header-anchor" href="#\u4EBA\u751F\u82E6\u77ED-\u6211\u7528-docker" aria-hidden="true">#</a> \u4EBA\u751F\u82E6\u77ED\uFF0C\u6211\u7528 Docker</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Docker \u5229\u7528\u4E86 Linux \u5185\u6838\u7279\u6027\u547D\u540D\u7A7A\u95F4\uFF08namespace\uFF09\u53CA\u63A7\u5236\u7EC4\uFF08cgroups\uFF09\u7B49\u4E3A\u5BB9\u5668\u63D0\u4F9B\u9694\u79BB\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u53EF\u4EE5\u8BA4\u4E3A \u201C\u5BB9\u5668\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8FDB\u7A0B\u201D\u3002</p><h2 id="\u4F7F\u7528\u811A\u672C\u5FEB\u901F\u542F\u7528-docker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u811A\u672C\u5FEB\u901F\u542F\u7528-docker" aria-hidden="true">#</a> \u4F7F\u7528\u811A\u672C\u5FEB\u901F\u542F\u7528 Docker</h2>',4),h=e("\u5728\u8FC7\u53BB\u5E38\u5E38"),u={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},k=e("\u624B\u52A8\u5B89\u88C5"),m=e("\uFF0C\u73B0\u5728\u5DF2\u7ECF\u5B8C\u5168\u5207\u6362\u4E3A\u811A\u672C\u5F62\u5F0F\u4E86\uFF1A"),g=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://get.docker.com -o get-docker.sh

<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
<span class="token comment"># \u66FF\u6362\u6E90</span>
<span class="token comment"># sudo sh get-docker.sh --mirror Aliyun</span>
<span class="token comment"># sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre></div><p>\u5982\u679C\u62C5\u5FC3\u811A\u672C\u5F02\u5E38\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u5E76\u8FDB\u884C\u5BA1\u6838\u3002</p><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u5F00\u59CB\u6109\u5FEB\u7684\u4F7F\u7528\u4E86\uFF0C\u4F8B\u884C\u4E60\u60EF Hello World\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run hello-world

<span class="token comment"># \u8F93\u51FA</span>
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
 $ docker run -it ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre></div><h2 id="\u521D\u59CB\u5316-docker-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-docker-\u73AF\u5883" aria-hidden="true">#</a> \u521D\u59CB\u5316 Docker \u73AF\u5883</h2><h3 id="\u8BBE\u7F6E\u7528\u6237\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7528\u6237\u7EC4" aria-hidden="true">#</a> \u8BBE\u7F6E\u7528\u6237\u7EC4</h3><p>\u4E3A\u4E86\u907F\u514D\u6BCF\u6B21\u4F7F\u7528 Docker \u90FD\u9700\u8981\u5207\u6362\u5230 <code>sudo</code>\uFF0C\u53EF\u4EE5\u5C06 <code>docker</code> \u52A0\u5165\u5F53\u524D\u7528\u6237\u3002\u91CD\u65B0\u767B\u5F55\u540E\u751F\u6548\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> docker

<span class="token function">sudo</span> <span class="token function">usermod</span> -aG docker <span class="token environment constant">$USER</span>
<span class="token comment"># or</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG docker USER_NAME
</code></pre></div><h3 id="\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> \u955C\u50CF\u52A0\u901F</h3><p>\u955C\u50CF\u670D\u52A1\u53EF\u7528\uFF1A</p>`,10),b={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},f=e("\u963F\u91CC\u4E91\u955C\u50CF\u670D\u52A1"),_={href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"},x=e("\u7F51\u6613\u4E91\u955C\u50CF\u670D\u52A1"),v=o(`<p>\u4FEE\u6539\u672C\u5730\u7684 <code>/etc/docker/daemon.json</code> \u5E76\u4FEE\u6539 <code>registry-mirrors</code>\uFF0C\u53EF\u4E3A\u5176\u914D\u7F6E\u591A\u4E2A\u907F\u514D\u67D0\u4E2A\u6302\u6389\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4FEE\u6539\u5B58\u50A8\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5B58\u50A8\u8DEF\u5F84" aria-hidden="true">#</a> \u4FEE\u6539\u5B58\u50A8\u8DEF\u5F84</h3><p>\u901A\u8FC7 <code>docker info</code> \u53EF\u4EE5\u770B\u5230\u9ED8\u8BA4\u8DEF\u5F84\u4E3A <code>/var/lib/docker</code>\uFF0C\u800C\u4E00\u822C\u670D\u52A1\u5668\u4F1A\u989D\u5916\u6302\u8F7D\u786C\u76D8\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># \u589E\u52A0</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/path/to/docker&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u91CD\u542F docker</span>
systemctl restart docker
</code></pre></div><p>\u6267\u884C <code>docker info</code> \u8FDB\u884C\u6821\u9A8C\u3002</p><h2 id="\u70ED\u95E8\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u70ED\u95E8\u955C\u50CF" aria-hidden="true">#</a> \u70ED\u95E8\u955C\u50CF</h2><h3 id="busybox" tabindex="-1"><a class="header-anchor" href="#busybox" aria-hidden="true">#</a> Busybox</h3><p>\u4EE5\u524D\u5E38\u5E38\u4F1A\u7528 ubuntu \u6765\u6D4B\u8BD5\u4E00\u4E9B\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u73B0\u5728\u6709\u4E86\u66F4\u597D\u7684\u9009\u62E9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># --rm \u7528\u5B8C\u5373\u5220</span>
docker run -it --rm busybox
</code></pre></div><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h3>`,11),y=e("\u4ECE\u8FD9\u91CC\u57FA\u672C\u5C31\u53EF\u4EE5\u4E86\u89E3\u5230\u8FD9\u4E9B\u955C\u50CF\u53EA\u662F\u5728 Docker Engine \u4E0A\u589E\u52A0\u4E86\u4E00\u4E9B\u4F9D\u8D56\uFF0C\u7136\u540E\u4F60\u53C8\u57FA\u4E8E\u8FD9\u4E9B\u4F9D\u8D56\u642D\u5EFA\u4F60\u7684\u73AF\u5883\uFF0C\u53EF\u4EE5\u770B\u770B "),D={href:"https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore",target:"_blank",rel:"noopener noreferrer"},w=e("Node Images Layers"),q=e(" \u52A0\u6DF1\u8BE5\u6982\u5FF5\u3002"),j=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FFD\u52A0 bash\uFF0C\u5426\u5219\u4F1A\u76F4\u63A5\u8FDB\u5165 node</span>
docker run -it --rm node:slim <span class="token function">bash</span>
</code></pre></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>\u5FEB\u901F\u6D4B\u8BD5\u672C\u5730\u6253\u5305\u597D\u7684\u9759\u6001\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run --rm <span class="token punctuation">\\</span>
  -p <span class="token number">8080</span>:80 <span class="token punctuation">\\</span>
  -v /dir/dist/:/usr/share/nginx/html <span class="token punctuation">\\</span>
  nginx
</code></pre></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><p>\u6307\u5B9A\u5BC6\u7801\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run --rm <span class="token punctuation">\\</span>
  -p <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span>
  mysql
</code></pre></div><h3 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> Mongo</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>
  -p <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>
  --name some-mongo <span class="token punctuation">\\</span>
  mongo --auth
</code></pre></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>\u6307\u5B9A\u5BC6\u7801\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>
  -p <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
  --name some-redis <span class="token punctuation">\\</span>
  redis --requirepass <span class="token string">&quot;redispwd&quot;</span>
</code></pre></div><h2 id="\u79FB\u9664-docker" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664-docker" aria-hidden="true">#</a> \u79FB\u9664 Docker</h2><p>\u5982\u679C\u5728\u4E4B\u524D\u4FEE\u6539\u4E86\u5B58\u50A8\u8DEF\u5F84\uFF0C\u5219\u6839\u636E\u5F53\u524D\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io
<span class="token comment"># CentOS</span>
<span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io

<span class="token comment"># \u8FD8\u6709 images\u3001containers\u3001volumes\u3001and configurations</span>
<span class="token function">sudo</span> <span class="token function">rm</span> -rf /var/lib/docker
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,16),S={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},T=e("Docker"),N={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},L=e("Docker Commands"),O=n("li",null,"\u300ADocker \u6280\u672F\u5165\u95E8\u4E0E\u5B9E\u6218\uFF08\u7B2C\u4E09\u7248\uFF09\u300B",-1),C=n("li",null,"\u300A\u81EA\u5DF1\u52A8\u624B\u5199 Docker\u300B",-1);function E(R,A){const a=t("OutboundLink");return d(),c(r,null,[l,n("p",null,[h,n("a",u,[k,s(a)]),m]),g,n("ol",null,[n("li",null,[n("a",b,[f,s(a)])]),n("li",null,[n("a",_,[x,s(a)])])]),v,n("p",null,[y,n("a",D,[w,s(a)]),q]),j,n("ol",null,[n("li",null,[n("a",S,[T,s(a)])]),n("li",null,[n("a",N,[L,s(a)])]),O,C])],64)}var U=p(i,[["render",E]]);export{U as default};
