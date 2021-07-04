import{r as n,o as a,c as s,a as e,F as t,b as c,d as o}from"./app.221f0787.js";const p={},i={id:"重写历史",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#重写历史","aria-hidden":"true"},"#",-1),l=c(),h={href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2",target:"_blank",rel:"noopener noreferrer"},r=c("重写历史"),d=o('<h3 id="_0-修改编辑器" tabindex="-1"><a class="header-anchor" href="#_0-修改编辑器" aria-hidden="true">#</a> 0. 修改编辑器</h3><p>在开始之前修改编辑器为 vim，否则会选用系统默认的，比如 nano（完全不会用 😢）。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> .git/config <span class="token comment"># 查看配置</span>\n<span class="token function">git</span> config core.editor <span class="token function">vim</span>\n<span class="token function">cat</span> .git/config <span class="token comment"># 验证</span>\n</code></pre></div><h3 id="_1-修改最新-commit-信息" tabindex="-1"><a class="header-anchor" href="#_1-修改最新-commit-信息" aria-hidden="true">#</a> 1. 修改最新 commit 信息</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> commit --amend\n</code></pre></div><h3 id="_2-修改之前-commit-信息" tabindex="-1"><a class="header-anchor" href="#_2-修改之前-commit-信息" aria-hidden="true">#</a> 2. 修改之前 commit 信息</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>\n<span class="token comment"># hash 值为对应元素的父元素的hash</span>\n<span class="token function">git</span> rebase -i <span class="token builtin class-name">hash</span>\n<span class="token comment"># 找到要修改的 commit（即第一行 commit）</span>\n<span class="token comment"># 将 pick 修改为 r，保存退出</span>\n<span class="token comment"># 自动切换至修改 commit 信息界面，修改即可</span>\n\n<span class="token function">git</span> log <span class="token comment"># 验证</span>\n\n</code></pre></div><h3 id="_3-合并多个-commit-信息" tabindex="-1"><a class="header-anchor" href="#_3-合并多个-commit-信息" aria-hidden="true">#</a> 3. 合并多个 commit 信息</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>\n<span class="token comment"># hash 值为对应元素最后一个的父元素的hash</span>\n<span class="token comment"># 个人的理解是，你改变了信息后就无法证明自己是自己，需要介绍父级节点来证明自己</span>\n<span class="token function">git</span> rebase -i <span class="token builtin class-name">hash</span>\n<span class="token comment"># 找到要修改的 commit</span>\n<span class="token comment"># 即保留第一行 commit，修改下面行至你期望的目标行</span>\n<span class="token comment"># 将 pick 修改为 s，保存退出</span>\n<span class="token comment"># 自动切换至修改 commit 信息界面，修改即可</span>\n\n<span class="token function">git</span> log <span class="token comment"># 验证</span>\n</code></pre></div><p>当然还有更简单一些的方法：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>\n<span class="token comment"># hash 值为对应元素最后一个的父元素的hash</span>\n<span class="token function">git</span> reset --soft 3bc965a619447a75375aba <span class="token comment"># hash 也可以更为暴力的改为 master（对应分支名,一般是以 feature/bugfix 创建分支，所以该行为简单粗暴）</span>\n\n<span class="token function">git</span> commit -am <span class="token string">&quot;更简单的方法&quot;</span> <span class="token comment"># -am 对已跟踪的文件提交信息，不会影响尚未 add 的文件</span>\n<span class="token function">git</span> log <span class="token comment"># 验证</span>\n</code></pre></div>',11);p.render=function(c,o){const p=n("OutboundLink");return a(),s(t,null,[e("h2",i,[m,l,e("a",h,[r,e(p)])]),d],64)};export default p;
