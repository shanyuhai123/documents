import{e as a}from"./app.76078c72.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const e={},n=a('<h2 id="配置-upstream" tabindex="-1"><a class="header-anchor" href="#配置-upstream" aria-hidden="true">#</a> 配置 upstream</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 查看远程仓库</span>\n<span class="token function">git</span> remote -v\n<span class="token comment"># 以 `ant-design-vue` 示例</span>\n<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/vueComponent/ant-design-vue.git\n<span class="token function">git</span> remote -v <span class="token comment"># 验证</span>\n</code></pre></div><h2 id="同步-upstream" tabindex="-1"><a class="header-anchor" href="#同步-upstream" aria-hidden="true">#</a> 同步 upstream</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream <span class="token comment"># fetch</span>\n<span class="token function">git</span> merge upstream/master <span class="token comment"># merge</span>\n</code></pre></div><h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> push\n</code></pre></div><p>最后前往 github 验证即可。</p>',7);var t=s(e,[["render",function(a,s){return n}]]);export{t as default};
