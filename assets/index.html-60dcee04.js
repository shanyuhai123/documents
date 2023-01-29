import{_ as p,M as o,p as r,q as c,Q as a,t as s,N as t,a1 as e}from"./framework-49860b1b.js";const l="/assets/git-lifecycle-cad26e07.png",i="/assets/git-state-model-ba939455.png",k={},h=e('<h1 id="版本控制工具-git" tabindex="-1"><a class="header-anchor" href="#版本控制工具-git" aria-hidden="true">#</a> 版本控制工具 Git</h1><p>版本控制可以记录文件的变化，方便快捷的查看、回退指定版本的内容。</p><h2 id="git-生命周期" tabindex="-1"><a class="header-anchor" href="#git-生命周期" aria-hidden="true">#</a> Git 生命周期</h2><p>随着使用你会渐渐加深对其生命周期的理解。</p><p><img src="'+l+'" alt="git 生命周期"></p><p>Git 仓库中，工作目录下的每一个文件不外乎两种状态：未跟踪（Untracked）或已跟踪（Tracked）。</p><p>已跟踪的文件是指那些被纳入了版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能处于未修改，已修改或存入暂存区。</p><p>工作目录中除已跟踪文件以外都属于未跟踪文件，它们即不存在于上次快照的记录中，也没有放入暂存区。</p><p>初次克隆某个仓库时，工作目录中所有的文件都属于已跟踪文件，并处于未修改状态。</p><h2 id="git-状态模型" tabindex="-1"><a class="header-anchor" href="#git-状态模型" aria-hidden="true">#</a> Git 状态模型</h2><p>在状态模型中进行了更详细的说明。</p><p><img src="'+i+`" alt="git 状态模型"></p><p>关于上图一些概念的说明。</p><h3 id="_1-工作区-workspace" tabindex="-1"><a class="header-anchor" href="#_1-工作区-workspace" aria-hidden="true">#</a> 1. 工作区（workspace）</h3><p>当前工作空间，即当前能在本地文件夹下面可以看到的文件结构。初始化工作空间或者工作空间 <code>clean</code> 的时候，文件内容和暂存区（index）是一致的，随着修改，工作区文件没有执行 <code>git add</code> 到暂存区的时候，工作区域将和暂存区不一致。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># clean 状态</span>
$ <span class="token function">git</span> status

<span class="token comment">#On branch master</span>
<span class="token comment">#nothing to commit, working tree clean</span>
</code></pre></div><h3 id="_2-暂存区-index" tabindex="-1"><a class="header-anchor" href="#_2-暂存区-index" aria-hidden="true">#</a> 2. 暂存区（index）</h3><p>老版本的概念也叫 Cache 区，就是文件暂时存放的地方，所有暂时存放在暂存区中的文件将随着 <code>git commit</code> 一起提交到本地仓库（local repository），此时本地仓库的文件将会被暂存区所取代。</p><h3 id="_3-本地仓库-local-repository" tabindex="-1"><a class="header-anchor" href="#_3-本地仓库-local-repository" aria-hidden="true">#</a> 3. 本地仓库（local repository）</h3><p>git 是分布式版本控制系统，和其他版本控制系统不同的是他可以完全去中心化操作，你可以不用和远程仓库（remote repository）进行通信，在本地即可进行全部离线操作，包括 log、history、commit、diff 等。</p><p>能实现以上功能是由于 git 有一个几乎和远程一样的本地仓库。</p><p>所以离线操作都可以本地完成，等需要的时候再和远程仓库进行交互。</p><h3 id="_4-远程仓库-remote-repository" tabindex="-1"><a class="header-anchor" href="#_4-远程仓库-remote-repository" aria-hidden="true">#</a> 4. 远程仓库（remote repository）</h3><p>远程中心仓库，可使得仓库分享给其他人。结构大体和本地仓库一样。</p><h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> Git 常用命令</h2><p>Git 的操作指令非常多，此处仅选一些简单的日常操作。</p><h3 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h3><p>所有命令行最重要的当然是查看帮助文档：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>
</code></pre></div><p>结果：</p><div class="language-vim" data-ext="vim"><pre class="language-vim"><code>用法：git <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">version</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">help</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>C <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">c</span> <span class="token operator">&lt;</span>名称<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>取值<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>exec<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>html<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>man<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>info<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">p</span> | <span class="token operator">-</span><span class="token operator">-</span>paginate | <span class="token operator">-</span><span class="token keyword">P</span> | <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>pager<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>replace<span class="token operator">-</span>objects<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>bare<span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>git<span class="token operator">-</span><span class="token builtin">dir</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>work<span class="token operator">-</span>tree<span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>namespace<span class="token operator">=</span><span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>参数<span class="token operator">&gt;</span><span class="token punctuation">]</span>

这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git <span class="token keyword">help</span> tutorial）
   clone      克隆仓库到一个新目录
   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git <span class="token keyword">help</span> everyday）
   add        添加文件内容至索引
   mv         移动或重命名一个文件、目录或符号链接
   reset      重置当前 HEAD 到指定状态
   rm         从工作区和索引中删除文件

检查历史和状态（参见：git <span class="token keyword">help</span> revisions）
   bisect     通过二分查找定位引入 bug 的提交
   <span class="token keyword">grep</span>       输出和模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作区状态

扩展、标记和调校您的历史记录
   branch     列出、创建或删除分支
   checkout   切换分支或恢复工作区文件
   commit     记录变更到仓库
   <span class="token builtin">diff</span>       显示提交之间、提交和工作区之间等的差异
   merge      合并两个或更多开发历史
   rebase     在另一个分支上重新应用提交
   <span class="token keyword">tag</span>        创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git <span class="token keyword">help</span> workflows）
   fetch      从另外一个仓库下载对象和引用
   pull       获取并整合另外的仓库或一个本地分支
   push       更新远程引用和相关的对象

命令 <span class="token string">&#39;git help -a&#39;</span> 和 <span class="token string">&#39;git help -g&#39;</span> 显示可用的子命令和一些概念帮助。
查看 <span class="token string">&#39;git help &lt;命令&gt;&#39;</span> 或 <span class="token string">&#39;git help &lt;概念&gt;&#39;</span> 以获取给定子命令或概念的
帮助。
</code></pre></div><h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查文件是否有更新</span>
<span class="token function">git</span> status

<span class="token comment"># 将新增的文件进行跟踪</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交本次修改内容（请尽量详细），方便日后修改 bug 时快速定位</span>
<span class="token comment"># 此处 commit 仅为示例，请修改为你项目的提交信息</span>
<span class="token function">git</span> commit  -m<span class="token string">&quot;docs(git): 新增 git 简单使用&quot;</span>

<span class="token comment"># 提交到仓库</span>
<span class="token function">git</span> push
</code></pre></div><h3 id="统计信息" tabindex="-1"><a class="header-anchor" href="#统计信息" aria-hidden="true">#</a> 统计信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 所有分支指定用户指定时间范围提交信息</span>
<span class="token comment"># 更多的 formats 可见 https://git-scm.com/docs/pretty-formats</span>
<span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;你的名称&quot;</span> <span class="token parameter variable">--after</span><span class="token operator">=</span><span class="token string">&quot;2022-07-16&quot;</span> <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;2022-07-23&quot;</span> --no-merges <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an(%ae) %as: %s&quot;</span>
</code></pre></div><h3 id="清理分支" tabindex="-1"><a class="header-anchor" href="#清理分支" aria-hidden="true">#</a> 清理分支</h3><p>一个多人长期合作的项目会有很多的远程分支，影响命令行提示及 VSCode 分支管理混乱的界面。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>
</code></pre></div><p>还可利用 <a href="/os/linux/xargs">xargs</a> 配合 <code>grep</code> 清理指定条件分支：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;fix/*&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span>
</code></pre></div><h3 id="git-飞行规则" tabindex="-1"><a class="header-anchor" href="#git-飞行规则" aria-hidden="true">#</a> Git 飞行规则</h3>`,41),d={href:"https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md",target:"_blank",rel:"noopener noreferrer"},u=e(`<h2 id="为-git-添加代理" tabindex="-1"><a class="header-anchor" href="#为-git-添加代理" aria-hidden="true">#</a> 为 Git 添加代理</h2><p>clone 大项目时总是乏力，下载速度极慢，这时就需要为其设置代理了。</p><h3 id="全局代理" tabindex="-1"><a class="header-anchor" href="#全局代理" aria-hidden="true">#</a> 全局代理</h3><p>该项可参考 alias 部分内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gfw
</code></pre></div><h3 id="git-代理" tabindex="-1"><a class="header-anchor" href="#git-代理" aria-hidden="true">#</a> Git 代理</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置代理 </span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
<span class="token comment"># 取消代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy

<span class="token comment"># 更好的形式当然是设置为 alias</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">proxygit</span><span class="token operator">=</span><span class="token string">&quot;git config --global http.proxy socks5://127.0.0.1:1080&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">uproxygit</span><span class="token operator">=</span><span class="token string">&quot;git config --global --unset http.proxy&quot;</span>
</code></pre></div><h3 id="git-代理协议的补充" tabindex="-1"><a class="header-anchor" href="#git-代理协议的补充" aria-hidden="true">#</a> Git 代理协议的补充</h3><p>git 代理支持多种协议：http、https、socks、socks5，本机通过 ss 启用了 socks5。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,10),g={href:"https://help.github.com/en",target:"_blank",rel:"noopener noreferrer"},m={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},b={href:"https://shafiul.github.io/gitbook/index.html",target:"_blank",rel:"noopener noreferrer"};function f(x,v){const n=o("ExternalLinkIcon");return r(),c("div",null,[h,a("p",null,[a("a",d,[s("Git飞行规则(Flight Rules)"),t(n)]),s(" 可以用来指导一些常见的问题。")]),u,a("ul",null,[a("li",null,[a("a",g,[s("Github"),t(n)])]),a("li",null,[a("a",m,[s("Git-scm"),t(n)])]),a("li",null,[a("a",b,[s("shafiul Community Book"),t(n)])])])])}const y=p(k,[["render",f],["__file","index.html.vue"]]);export{y as default};
