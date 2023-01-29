import{_ as a,p as s,q as e,a1 as n}from"./framework-49860b1b.js";const t={},c=n(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>主要用于解决在使用 MySQL 时遇到的问题，以及是怎么解决的。</p><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><p>学习环境基于 Docker：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> some-mysql <span class="token punctuation">\\</span>
  mysql:8.0
</code></pre></div><p>调试工具为 MySQL Workbench，可在 <code>Preferences</code> 中为其设置 <code>Use UPPERCASE</code>。</p><h3 id="命令行调试" tabindex="-1"><a class="header-anchor" href="#命令行调试" aria-hidden="true">#</a> 命令行调试</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 mysql 容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-mysql <span class="token function">bash</span>

<span class="token comment"># mysql 命令行</span>
mysql <span class="token parameter variable">-u</span> yourname <span class="token parameter variable">-p</span>
<span class="token comment"># 根据提示输入密码即可</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ol><li>《MySQL 必知必会》</li><li>《高性能 MySQL》</li></ol>`,11),r=[c];function p(o,l){return s(),e("div",null,r)}const d=a(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
