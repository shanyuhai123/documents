import{_ as a,p as s,q as e,a1 as o}from"./framework-e3e34937.js";const c={};function t(p,n){return s(),e("div",null,n[0]||(n[0]=[o(`<h1 id="zsh-无法找到-npm" tabindex="-1"><a class="header-anchor" href="#zsh-无法找到-npm" aria-hidden="true">#</a> zsh 无法找到 npm</h1><p>一直以来都是开机使用 <code>bash</code>，在之后再切换到 <code>zsh</code>。最近设置为开机切换到 <code>zsh</code>，就导致使用 <code>npm</code> 命令时提示 <code>zsh: command not found</code>。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>首先需要确认是否是 <code>PATH</code> 出现了问题：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span> <span class="token comment"># zsh: command not found</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token comment"># v12.4.0</span>
<span class="token comment"># 可以发现环境不存在问题</span>
<span class="token comment"># 接着查看 .bashrc 配置是否有说明</span>
<span class="token function">less</span> ~/.bashrc
<span class="token comment"># 注意到存在以下内容</span>
<span class="token comment"># export NVM_DIR=&quot;$HOME/.nvm&quot;</span>
<span class="token comment"># [ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm</span>
<span class="token comment"># [ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion</span>
</code></pre></div><p>于是就想起自己依赖 <code>nvm</code> 管理 <code>node</code>，将该内容追加到 <code>.zshrc</code> 中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc
<span class="token function">npm</span> <span class="token parameter variable">-v</span> <span class="token comment"># 6.12.0</span>
</code></pre></div>`,7)]))}const m=a(c,[["render",t],["__file","zsh-can-not-find-npm.html.vue"]]);export{m as default};
