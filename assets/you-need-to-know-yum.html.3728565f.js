import{d as a}from"./app.221f0787.js";const e={},d=a('<h2 id="什么是-yum" tabindex="-1"><a class="header-anchor" href="#什么是-yum" aria-hidden="true">#</a> 什么是 yum</h2><p>YUM 全称（Yellowdog Updater, Modified），基于 <code>Yellow Dog Updater</code> 修改而来，是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包。</p><blockquote><p>RPM 是为了简化安装的复杂度，而 Yum 软件仓库视为了解决软件包之间的依赖关系。</p></blockquote><h2 id="软件包来源" tabindex="-1"><a class="header-anchor" href="#软件包来源" aria-hidden="true">#</a> 软件包来源</h2><p>可供Yum下载的软件包包括 Fedora, Centos 和 RedHat 本身的软件包，其中 Fedora 的软件包是由Linux社区维护的，并且基本是自由软件。所有的包都有一个独立的 GPG 签名。</p><h2 id="yum-工作机制" tabindex="-1"><a class="header-anchor" href="#yum-工作机制" aria-hidden="true">#</a> yum 工作机制</h2><ul><li>服务器端：在服务器上面存放了所有的 RPM 软件包，然后以相关的功能去分析每个 RPM 文件的依赖性关系，将这些数据记录成文件存放在服务器的某特定目录内。</li><li>客户端：如果需要安装某个软件时，先下载服务器上面记录的依赖性关系文件(可通过 WWW 或 FTP 方式)，通过对服务器端下载的纪录数据进行分析，然后取得所有相关的软件，一次全部下载下来进行安装。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> xxx\n</code></pre></div><h3 id="_2-删除" tabindex="-1"><a class="header-anchor" href="#_2-删除" aria-hidden="true">#</a> 2. 删除</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum remove xxx\n<span class="token comment"># 或</span>\nyum erase xxx\n</code></pre></div><h3 id="_3-升级" tabindex="-1"><a class="header-anchor" href="#_3-升级" aria-hidden="true">#</a> 3. 升级</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum upgrade xxx\n<span class="token comment"># 或</span>\nyum update xxx\n</code></pre></div><h3 id="_4-查询" tabindex="-1"><a class="header-anchor" href="#_4-查询" aria-hidden="true">#</a> 4. 查询</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum info xxx\n</code></pre></div><h3 id="_5-搜索" tabindex="-1"><a class="header-anchor" href="#_5-搜索" aria-hidden="true">#</a> 5. 搜索</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 包含 xxx</span>\nyum search xxx\n</code></pre></div><h3 id="_6-依赖关系" tabindex="-1"><a class="header-anchor" href="#_6-依赖关系" aria-hidden="true">#</a> 6. 依赖关系</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum deplist xxx\n</code></pre></div><h3 id="_7-可更新" tabindex="-1"><a class="header-anchor" href="#_7-可更新" aria-hidden="true">#</a> 7. 可更新</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum check-update\n</code></pre></div><h3 id="_8-可安装和可更新" tabindex="-1"><a class="header-anchor" href="#_8-可安装和可更新" aria-hidden="true">#</a> 8. 可安装和可更新</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum list\n</code></pre></div><h3 id="_9-已安装" tabindex="-1"><a class="header-anchor" href="#_9-已安装" aria-hidden="true">#</a> 9. 已安装</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum list installed\n</code></pre></div><h4 id="_10-已安装且不在资源库" tabindex="-1"><a class="header-anchor" href="#_10-已安装且不在资源库" aria-hidden="true">#</a> 10. 已安装且不在资源库</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>yum list extras\n</code></pre></div><h3 id="_11-清除全部" tabindex="-1"><a class="header-anchor" href="#_11-清除全部" aria-hidden="true">#</a> 11. 清除全部</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum clean all\n</code></pre></div><h3 id="_12-清除临时包文件" tabindex="-1"><a class="header-anchor" href="#_12-清除临时包文件" aria-hidden="true">#</a> 12. 清除临时包文件</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># /var/cache/yum 下文件</span>\nyum clean packages\n</code></pre></div><h3 id="_13-清除-rpm-头文件" tabindex="-1"><a class="header-anchor" href="#_13-清除-rpm-头文件" aria-hidden="true">#</a> 13. 清除 rpm 头文件</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum clean headers\n</code></pre></div><h3 id="_14-清除旧的-rpm-头文件" tabindex="-1"><a class="header-anchor" href="#_14-清除旧的-rpm-头文件" aria-hidden="true">#</a> 14. 清除旧的 rpm 头文件</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum clean oldheaders\n</code></pre></div><h2 id="指令参数" tabindex="-1"><a class="header-anchor" href="#指令参数" aria-hidden="true">#</a> 指令参数</h2><ul><li><code>-e</code>：静默执行</li><li><code>-t</code>：忽略错误</li><li><code>-R</code>：设置等待命令执行结束的最大时间（分钟）</li><li><code>-y</code>：自动应答，执行时不需要交互确认</li><li><code>--skip-broken</code>：忽略依赖问题</li><li><code>--nogpgcheck</code>：忽略 GPG 校验过程</li></ul><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="_1-卸载基础包" tabindex="-1"><a class="header-anchor" href="#_1-卸载基础包" aria-hidden="true">#</a> 1. 卸载基础包</h3><p>yum 卸载基础包时，会把上层的依赖包也卸载掉。从 yum 的设计理念出发，这样的操作是合理的，可以减少系统中多余的软件。</p>',41);e.render=function(a,e){return d};export default e;
