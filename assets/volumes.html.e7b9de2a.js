import{e}from"./app.76078c72.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const o={},d=e('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>在生产环境中使用 Docker，往往需要对数据进行持久化，或者需要在多个容器之间进行数据共享。 容器中的数据管理方式有两种：</p><ol><li>数据卷（Data Volumes）：容器内数据直接映射到本地主机环境</li><li>数据卷容器（Data Volumes Containers）：使用特定容器维护数据卷</li></ol><h2 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷" aria-hidden="true">#</a> 数据卷</h2><p>数据卷是一个可供容器使用的特殊目录，它将主机目录直接映射进容器，类似于 Linux 中的 mount 行为。 数据卷提供了一些特性：</p><ol><li>数据卷可以在容器之间共享和重用，容器间传递数据将变得高效与方便</li><li>对数据卷内数据的修改会立即生效，无论容器内操作还是主机操作</li><li>对数据卷的更新不会影响镜像，解耦开应用和数据</li><li>卷会一直存在，知道没有容器使用，可以安全地卸载它</li></ol><h3 id="_1-操作" tabindex="-1"><a class="header-anchor" href="#_1-操作" aria-hidden="true">#</a> 1. 操作</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>\n<span class="token comment"># docker volume create [OPTIONS] [VOLUME]</span>\ndocker volume create hello\n</code></pre></div><p>根据 <code>docker inspect hello </code> 可得知数据卷数据存放在 <code>/var/lib/docker/volumes/</code> 下。</p><h2 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器" aria-hidden="true">#</a> 数据卷容器</h2><p>数据卷容器也是一个容器，但它的目的是专门提供数据卷给其他容器挂载。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 创建数据卷容器</span>\ndocker run -it -v /dbdata --name dbdata ubuntu\n\n<span class="token comment"># 接着可以在其他容器中挂载数据卷</span>\ndocker run -it --volumes-from dbdata --name db1 ubuntu\ndocker run -it --volumes-from dbdata --name db2 ubuntu\n<span class="token comment"># 个人认为该形式并不好</span>\n</code></pre></div><p>注意 <code>dbdata</code> 容器中使用了 <code>-v</code>，但其后仅跟随了 <code>/dbdata</code>，实际上会生成一个匿名的 volume，根据这个也可以推导出若跟随参数为 <code>hello/dbdata</code> 则会创建一个 <code>hello</code> volume，跳过先创建数据卷的步骤。</p><p>更进一步我们可以推导出 <code>-v</code> 无法指定去掉 <code>./</code> 的相对路径。</p>',14);var n=a(o,[["render",function(e,a){return d}]]);export{n as default};
