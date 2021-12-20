import{e as a}from"./app.d6b1a25d.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const n={},s=a(`<h1 id="\u4E86\u89E3-docker-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3-docker-\u5BB9\u5668" aria-hidden="true">#</a> \u4E86\u89E3 Docker \u5BB9\u5668</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u5BB9\u5668\u662F\u955C\u50CF\u7684\u4E00\u4E2A\u8FD0\u884C\u5B9E\u4F8B\u3002\u6240\u4E0D\u540C\u7684\u662F\uFF0C\u955C\u50CF\u662F\u9759\u6001\u7684\u53EA\u8BFB\u6587\u4EF6\uFF0C\u800C\u5BB9\u5668\u5E26\u6709\u8FD0\u884C\u65F6\u9700\u8981\u7684\u53EF\u5199\u6587\u4EF6\u5C42\uFF0C\u540C\u65F6\uFF0C\u5BB9\u5668\u4E2D\u7684\u5E94\u7528\u8FDB\u7A0B\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\u3002</p><h2 id="\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001" aria-hidden="true">#</a> \u72B6\u6001</h2><h3 id="_1-\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668" aria-hidden="true">#</a> 1. \u8FD0\u884C\u4E2D\u7684\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">ps</span>

<span class="token comment"># -a \u6240\u6709\u7684</span>
<span class="token comment"># -f \u53EF\u4EE5\u6309\u9700\u6C42\u8FDB\u884C\u8FC7\u6EE4</span>
<span class="token comment"># \u8FC7\u6EE4\u53C2\u6570 status\uFF1AOne of created, restarting, running, removing, paused, exited, or dead</span>
</code></pre></div><h3 id="_2-\u5BB9\u5668\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-\u5BB9\u5668\u65E5\u5FD7" aria-hidden="true">#</a> 2. \u5BB9\u5668\u65E5\u5FD7</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker logs [OPTIONS] CONTAINER</span>
docker logs ttubuntu

<span class="token comment"># -f \u8DDF\u8E2A\u5B9E\u65F6\u65E5\u5FD7</span>
<span class="token comment"># -n \u6307\u5B9A\u8F93\u51FA\u591A\u5C11\u884C\u65E5\u5FD7</span>
docker logs -f --tail <span class="token number">20</span> ttubuntu
</code></pre></div><h3 id="_3-\u5BB9\u5668\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u5BB9\u5668\u4FE1\u606F" aria-hidden="true">#</a> 3. \u5BB9\u5668\u4FE1\u606F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5177\u4F53\u4FE1\u606F</span>
docker insepect ttubuntu

<span class="token comment"># \u5185\u90E8\u8FDB\u7A0B</span>
docker <span class="token function">top</span> ttubuntu

<span class="token comment"># \u7EDF\u8BA1\u4FE1\u606F</span>
docker stats ttubuntu
</code></pre></div><h3 id="_4-\u5BB9\u5668\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#_4-\u5BB9\u5668\u53D8\u66F4" aria-hidden="true">#</a> 4. \u5BB9\u5668\u53D8\u66F4</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">diff</span> ttubuntu
</code></pre></div><h3 id="_5-\u7AEF\u53E3\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#_5-\u7AEF\u53E3\u6620\u5C04" aria-hidden="true">#</a> 5. \u7AEF\u53E3\u6620\u5C04</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker port ttubuntu
</code></pre></div><h2 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h2><h3 id="_1-\u521B\u5EFA\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a> 1. \u521B\u5EFA\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker create -it --name ttubuntu ubuntu <span class="token comment"># \u9ED8\u8BA4\u65B0\u521B\u5EFA\u7684\u5BB9\u5668\u4E3A\u505C\u6B62\u72B6\u6001</span>
</code></pre></div><ul><li><code>-i</code> \u8BA9\u5BB9\u5668\u7684\u6807\u51C6\u8F93\u5165\u4FDD\u6301\u6253\u5F00</li><li><code>-t</code> \u8BA9 Docker \u5206\u914D\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\u5E76\u7ED1\u5B9A\u5230\u5BB9\u5668\u4E0A</li></ul><h3 id="_2-\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> 2. \u542F\u52A8\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker start [OPTIONS] CONTAINER [CONTAINER...]</span>
docker start ttubuntu
</code></pre></div><h3 id="_3-\u6267\u884C\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u6267\u884C\u5BB9\u5668" aria-hidden="true">#</a> 3. \u6267\u884C\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run ubuntu <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre></div><p>\u7B49\u4EF7\u4E8E\u5148\u6267\u884C <code>docker create</code> \u518D\u6267\u884C <code>docker start</code>\uFF0C\u5728\u8F93\u51FA <code>hello world</code> \u540E\u5BB9\u5668\u81EA\u52A8\u505C\u6B62\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B88\u62A4\u6001 -d</span>
docker run -d ubuntu /bin/sh -c <span class="token string">&quot;while true; do echo hello world; sleep 1;done&quot;</span>
</code></pre></div><h3 id="_4-\u6682\u505C-\u6062\u590D\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u6682\u505C-\u6062\u590D\u5BB9\u5668" aria-hidden="true">#</a> 4. \u6682\u505C/\u6062\u590D\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker pause ttubuntu
<span class="token comment"># docker unpause ttubuntu</span>
docker <span class="token function">ps</span>

<span class="token comment"># \u53EF\u89C1 paused \u72B6\u6001</span>
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                   PORTS               NAMES
228fe9793889        ubuntu              <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">14</span> minutes ago      Up <span class="token number">14</span> minutes <span class="token punctuation">(</span>Paused<span class="token punctuation">)</span>                       ttubuntu
</code></pre></div><h3 id="_5-\u7EC8\u6B62" tabindex="-1"><a class="header-anchor" href="#_5-\u7EC8\u6B62" aria-hidden="true">#</a> 5. \u7EC8\u6B62</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop ttubuntu

<span class="token comment"># \u9A8C\u8BC1</span>
docker <span class="token function">ps</span> <span class="token comment"># ttubuntu \u5DF2\u6D88\u5931</span>
</code></pre></div><h3 id="_6-\u542F\u52A8-\u91CD\u542F\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_6-\u542F\u52A8-\u91CD\u542F\u5BB9\u5668" aria-hidden="true">#</a> 6. \u542F\u52A8/\u91CD\u542F\u5BB9\u5668</h3><p><code>restart</code> \u547D\u4EE4\u4F1A\u5C06\u4E00\u4E2A\u8FD0\u884C\u6001\u7684\u5BB9\u5668\u5148\u7EC8\u6B62\uFF0C\u7136\u540E\u518D\u91CD\u65B0\u542F\u52A8\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker start ttubuntu
<span class="token comment"># docker restart ttubuntu</span>

<span class="token comment"># \u9A8C\u8BC1</span>
docker <span class="token function">ps</span> <span class="token comment"># ttubuntu \u53EF\u89C1</span>
</code></pre></div><h3 id="_7-\u6E05\u9664\u505C\u6B62\u72B6\u6001\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_7-\u6E05\u9664\u505C\u6B62\u72B6\u6001\u7684\u5BB9\u5668" aria-hidden="true">#</a> 7. \u6E05\u9664\u505C\u6B62\u72B6\u6001\u7684\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker container prune

<span class="token comment"># \u9A8C\u8BC1</span>
docker start ttubuntu
<span class="token comment"># Error response from daemon: No such container: ttubuntu</span>
</code></pre></div><h3 id="_8-\u5220\u9664\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_8-\u5220\u9664\u5BB9\u5668" aria-hidden="true">#</a> 8. \u5220\u9664\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker rm [OPTIONS] CONTAINER [CONTAINER...]</span>
<span class="token comment"># -v \u53EF\u4EE5\u5220\u9664\u5BB9\u5668\u6302\u8F7D\u7684\u6570\u636E\u5377</span>
docker <span class="token function">rm</span> ttubuntu
</code></pre></div><h3 id="_9-\u66F4\u65B0\u5BB9\u5668\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_9-\u66F4\u65B0\u5BB9\u5668\u914D\u7F6E" aria-hidden="true">#</a> 9. \u66F4\u65B0\u5BB9\u5668\u914D\u7F6E</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker update ttubuntu
</code></pre></div><h2 id="\u8FDB\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5BB9\u5668" aria-hidden="true">#</a> \u8FDB\u5165\u5BB9\u5668</h2><p>\u5728\u4F7F\u7528 <code>-d</code> \u53C2\u6570\u542F\u52A8\u5BB9\u5668\u540E\uFF0C\u5BB9\u5668\u4F1A\u8FDB\u5165\u540E\u53F0\uFF0C\u65E0\u6CD5\u770B\u5230\u5BB9\u5668\u7684\u8F93\u51FA\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5229\u7528 <code>docker attach</code> \u6216 <code>docker exec</code> \u8FDB\u5165\u5BB9\u5668\u3002</p><p><code>attach</code> \u4E0D\u4F1A\u5728\u5BB9\u5668\u4E2D\u521B\u5EFA\u8FDB\u7A0B\u6267\u884C\u989D\u5916\u7684\u547D\u4EE4\uFF0C\u53EA\u662F\u9644\u7740\u5230\u5BB9\u5668\u4E0A\uFF1B<code>exec</code> \u4F1A\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u4E0A\u521B\u5EFA\u8FDB\u7A0B\u6267\u884C\u65B0\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it ttubuntu <span class="token function">sh</span>
</code></pre></div><h2 id="\u5206\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u5206\u4EAB" aria-hidden="true">#</a> \u5206\u4EAB</h2><h3 id="_1-\u5BFC\u51FA\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u5BFC\u51FA\u5BB9\u5668" aria-hidden="true">#</a> 1. \u5BFC\u51FA\u5BB9\u5668</h3><p>\u4E0D\u7BA1\u5BB9\u5668\u662F\u5426\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\uFF0C\u90FD\u53EF\u4EE5\u5BFC\u51FA\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker export [OPTIONS] CONTAINER</span>
docker <span class="token builtin class-name">export</span> -o ubuntu-latest.tar ttubuntu
</code></pre></div><h3 id="_2-\u5BFC\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u5BFC\u5165\u5BB9\u5668" aria-hidden="true">#</a> 2. \u5BFC\u5165\u5BB9\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span>
docker <span class="token function">import</span> http://example.com/exampleimage.tgz
docker <span class="token function">import</span> ubuntu-latest.tar
</code></pre></div><h3 id="_3-\u590D\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u590D\u5236\u6587\u4EF6" aria-hidden="true">#</a> 3. \u590D\u5236\u6587\u4EF6</h3><p>\u4E3B\u673A\u548C\u5BB9\u5668\u95F4\u590D\u5236\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">cp</span> data ttubuntu:/tmp/
</code></pre></div>`,50);function t(c,d){return s}var h=e(n,[["render",t]]);export{h as default};
