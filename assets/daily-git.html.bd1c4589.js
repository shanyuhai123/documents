import{d as n}from"./app.858485b8.js";const a={},s=n('<p>Git 的操作指令非常多，此处仅选一些简单的日常操作。</p><blockquote><p>注意：以下所有 <code>[]</code> 仅作为划分区域，无实际作用，可无视。</p></blockquote><h2 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h2><p>所有命令行最重要的当然是查看帮助文档：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>\n</code></pre></div><p>结果：</p><div class="language-vim ext-vim"><pre class="language-vim"><code>用法：git <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">version</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">help</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>C <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">c</span> <span class="token operator">&lt;</span>名称<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>取值<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>exec<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>html<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>man<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>info<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span>\n           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">p</span> | <span class="token operator">-</span><span class="token operator">-</span>paginate | <span class="token operator">-</span><span class="token keyword">P</span> | <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>pager<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>replace<span class="token operator">-</span>objects<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>bare<span class="token punctuation">]</span>\n           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>git<span class="token operator">-</span><span class="token builtin">dir</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>work<span class="token operator">-</span>tree<span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>namespace<span class="token operator">=</span><span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n           <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>参数<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n\n这些是各种场合常见的 Git 命令：\n\n开始一个工作区（参见：git <span class="token keyword">help</span> tutorial）\n   clone      克隆仓库到一个新目录\n   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库\n\n在当前变更上工作（参见：git <span class="token keyword">help</span> everyday）\n   add        添加文件内容至索引\n   mv         移动或重命名一个文件、目录或符号链接\n   reset      重置当前 HEAD 到指定状态\n   rm         从工作区和索引中删除文件\n\n检查历史和状态（参见：git <span class="token keyword">help</span> revisions）\n   bisect     通过二分查找定位引入 bug 的提交\n   <span class="token keyword">grep</span>       输出和模式匹配的行\n   log        显示提交日志\n   show       显示各种类型的对象\n   status     显示工作区状态\n\n扩展、标记和调校您的历史记录\n   branch     列出、创建或删除分支\n   checkout   切换分支或恢复工作区文件\n   commit     记录变更到仓库\n   <span class="token builtin">diff</span>       显示提交之间、提交和工作区之间等的差异\n   merge      合并两个或更多开发历史\n   rebase     在另一个分支上重新应用提交\n   <span class="token keyword">tag</span>        创建、列出、删除或校验一个 GPG 签名的标签对象\n\n协同（参见：git <span class="token keyword">help</span> workflows）\n   fetch      从另外一个仓库下载对象和引用\n   pull       获取并整合另外的仓库或一个本地分支\n   push       更新远程引用和相关的对象\n\n命令 <span class="token string">&#39;git help -a&#39;</span> 和 <span class="token string">&#39;git help -g&#39;</span> 显示可用的子命令和一些概念帮助。\n查看 <span class="token string">&#39;git help &lt;命令&gt;&#39;</span> 或 <span class="token string">&#39;git help &lt;概念&gt;&#39;</span> 以获取给定子命令或概念的\n帮助。\n</code></pre></div><p>其实上面已经包含了常规的操作了，但一些时候还需要添加具体的例子来便于阅读、记忆。</p><h2 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h2><p>创建分支往往会基于某个分支来创建：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 本地</span>\n<span class="token comment"># 基于当前分支创建</span>\n<span class="token function">git</span> checkout master <span class="token comment"># 切换到 master 分支</span>\n<span class="token function">git</span> checkout -b branch1 <span class="token comment"># 根据 master 分支创建 branch1</span>\n<span class="token comment"># 基于 branch2 分支创建</span>\n<span class="token function">git</span> checkout -b branch1 branch2\n\n<span class="token comment"># 远程</span>\n<span class="token comment"># 基于 branch1 分支创建（一般会将命名相同，方便 push）</span>\n<span class="token function">git</span> checkout -b branch1 origin/branch1\n</code></pre></div><h2 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h2><blockquote><p>参数可以组合，更强大。</p></blockquote><h3 id="_1-当前分支" tabindex="-1"><a class="header-anchor" href="#_1-当前分支" aria-hidden="true">#</a> 1. 当前分支</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 查看当前分支的所有日志：</span>\n<span class="token function">git</span> log\n<span class="token comment"># 查看当前分支的最近 n 条日志：</span>\n<span class="token function">git</span> log -n2\n<span class="token comment"># 以单行形式查看当前分支的所有日志：</span>\n<span class="token function">git</span> log --oneline\n<span class="token comment"># 以单行形式查看当前分支的最近 n 条日志：</span>\n<span class="token function">git</span> log -n4 --oneline\n<span class="token comment"># 添加图形查看当前分支的所有日志：</span>\n<span class="token function">git</span> log --graph\n</code></pre></div><h3 id="_2-所有分支" tabindex="-1"><a class="header-anchor" href="#_2-所有分支" aria-hidden="true">#</a> 2. 所有分支</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 查看所有分支的所有日志：</span>\n<span class="token function">git</span> log --all\n<span class="token comment"># 以单行形式查看所有分支的所有日志：</span>\n<span class="token function">git</span> log --all --oneline\n<span class="token comment"># 查看所有分支的最近 n 条日志：</span>\n<span class="token function">git</span> log --all -n2\n<span class="token comment"># 以单行形式查看所有分支的最近 n 条日志：</span>\n<span class="token function">git</span> log --all -n4 --oneline\n<span class="token comment"># 添加图形查看所有分支的最近 n 条日志：</span>\n<span class="token function">git</span> log --all -n20 --oneline --graph\n</code></pre></div><h3 id="_3-某一分支" tabindex="-1"><a class="header-anchor" href="#_3-某一分支" aria-hidden="true">#</a> 3. 某一分支</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 可以指定某个分支（远程）：</span>\n<span class="token function">git</span> log origin/gh-pages\n\n<span class="token comment"># 其余的操作与上方一致</span>\n</code></pre></div>',19);a.render=function(n,a){return s};export default a;