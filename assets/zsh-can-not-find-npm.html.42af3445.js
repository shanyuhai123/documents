import{e as n}from"./app.3454b514.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="zsh-\u65E0\u6CD5\u627E\u5230-npm" tabindex="-1"><a class="header-anchor" href="#zsh-\u65E0\u6CD5\u627E\u5230-npm" aria-hidden="true">#</a> zsh \u65E0\u6CD5\u627E\u5230 npm</h1><p>\u4E00\u76F4\u4EE5\u6765\u90FD\u662F\u5F00\u673A\u4F7F\u7528 <code>bash</code>\uFF0C\u5728\u4E4B\u540E\u518D\u5207\u6362\u5230 <code>zsh</code>\u3002\u6700\u8FD1\u8BBE\u7F6E\u4E3A\u5F00\u673A\u5207\u6362\u5230 <code>zsh</code>\uFF0C\u5C31\u5BFC\u81F4\u4F7F\u7528 <code>npm</code> \u547D\u4EE4\u65F6\u63D0\u793A <code>zsh: command not found</code>\u3002</p><h2 id="\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3</h2><p>\u9996\u5148\u9700\u8981\u786E\u8BA4\u662F\u5426\u662F <code>PATH</code> \u51FA\u73B0\u4E86\u95EE\u9898\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> -v <span class="token comment"># zsh: command not found</span>
node -v <span class="token comment"># v12.4.0</span>
<span class="token comment"># \u53EF\u4EE5\u53D1\u73B0\u73AF\u5883\u4E0D\u5B58\u5728\u95EE\u9898</span>
<span class="token comment"># \u63A5\u7740\u67E5\u770B .bashrc \u914D\u7F6E\u662F\u5426\u6709\u8BF4\u660E</span>
<span class="token function">less</span> ~/.bashrc
<span class="token comment"># \u6CE8\u610F\u5230\u5B58\u5728\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment"># export NVM_DIR=&quot;$HOME/.nvm&quot;</span>
<span class="token comment"># [ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm</span>
<span class="token comment"># [ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion</span>
</code></pre></div><p>\u4E8E\u662F\u5C31\u60F3\u8D77\u81EA\u5DF1\u4F9D\u8D56 <code>nvm</code> \u7BA1\u7406 <code>node</code>\uFF0C\u5C06\u8BE5\u5185\u5BB9\u8FFD\u52A0\u5230 <code>.zshrc</code> \u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc
<span class="token function">npm</span> -v <span class="token comment"># 6.12.0</span>
</code></pre></div>`,7);function o(c,t){return e}var m=s(a,[["render",o]]);export{m as default};
