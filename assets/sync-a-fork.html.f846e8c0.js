import{e as a}from"./app.e62aeb11.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const s={},n=a(`<h2 id="\u914D\u7F6E-upstream" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-upstream" aria-hidden="true">#</a> \u914D\u7F6E upstream</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote -v
<span class="token comment"># \u4EE5 \`ant-design-vue\` \u793A\u4F8B</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/vueComponent/ant-design-vue.git
<span class="token function">git</span> remote -v <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h2 id="\u540C\u6B65-upstream" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65-upstream" aria-hidden="true">#</a> \u540C\u6B65 upstream</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream <span class="token comment"># fetch</span>
<span class="token function">git</span> merge upstream/master <span class="token comment"># merge</span>
</code></pre></div><h2 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre></div><p>\u6700\u540E\u524D\u5F80 github \u9A8C\u8BC1\u5373\u53EF\u3002</p>`,7);function t(c,p){return n}var i=e(s,[["render",t]]);export{i as default};
