import{_ as s,p as a,q as n,a1 as t}from"./framework-e3e34937.js";const i="/assets/github-add-ssh-key-d1b9c893.png",c={};function o(l,e){return a(),n("div",null,e[0]||(e[0]=[t('<h1 id="切换多个-github-账号" tabindex="-1"><a class="header-anchor" href="#切换多个-github-账号" aria-hidden="true">#</a> 切换多个 github 账号</h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>在很多情况下，常常要对多个 github 账号进行切换。比如，自己的、公司的、小号。</p><h2 id="切换步骤" tabindex="-1"><a class="header-anchor" href="#切换步骤" aria-hidden="true">#</a> 切换步骤</h2><ol><li><p>创建 ssh key</p></li><li><p>将 public key 上传至服务器(名字随意即可)</p><p><img src="'+i+`" alt="github add ssh key"></p></li><li><p>在 <code>~/.ssh/</code> 目录下创建 config 文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ～/.ssh/config
</code></pre></div></li><li><p>config 内容</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 正常使用的 rsa</span>
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa
 
<span class="token comment"># new 新账号</span>
Host new
HostName github.com
IdentityFile ~/.ssh/id_rsa_new
</code></pre></div></li><li><p>clone 项目</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 原项目地址为</span>
<span class="token function">git</span> clone git@github.com:xxxxxx/xxx.git
<span class="token comment"># 修改为 </span>
<span class="token function">git</span> clone git@new:xxxxxx/xxx.git
</code></pre></div></li><li><p>push 项目</p><p>因为在一开始 clone 的时候已经配置好了，所以 push 时就无需配置了。不过我们还需要 <code>git config</code> 修改一下本地的 <code>user.name</code> 和 <code>user.email</code> 来保证是同一个人修改了, 否则会应用全局的 <code>config</code> 设置</p></li></ol>`,5)]))}const h=s(c,[["render",o],["__file","switch-multiple-github-accounts.html.vue"]]);export{h as default};
