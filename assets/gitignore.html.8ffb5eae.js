import{e as a}from"./app.c8397b64.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=a(`<h1 id="git-\u5FFD\u7565\u8DDF\u8E2A\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#git-\u5FFD\u7565\u8DDF\u8E2A\u7684\u6587\u4EF6" aria-hidden="true">#</a> Git \u5FFD\u7565\u8DDF\u8E2A\u7684\u6587\u4EF6</h1><h2 id="\u5FFD\u7565\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u89C4\u5219" aria-hidden="true">#</a> \u5FFD\u7565\u89C4\u5219</h2><blockquote><p>\u9996\u5148\u4F60\u9700\u8981\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A <code>.gitignore</code> \u6587\u4EF6</p></blockquote><ul><li>\u7A7A\u683C\u4E0D\u5339\u914D\u4EFB\u4F55\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5206\u9694\u7B26\u53F7</li><li>\u4EE5 <code>#</code> \u5F00\u59CB\u7684\u4E3A\u6CE8\u91CA</li><li><code>\\</code> \u8868\u793A\u8F6C\u4E49\u7B26</li><li><code>!</code> \u5F00\u59CB\u7684\u8868\u793A\u5426\u5B9A\uFF0C\u4E5F\u5C31\u662F\u5F00\u542F\u8DDF\u8E2A</li><li><code>/</code> \u5F00\u59CB\u7684\u8868\u793A\u9879\u76EE\u6839\u76EE\u5F55</li><li><code>/</code> \u7ED3\u5C3E\u7684\u8868\u793A\u67D0\u4E2A\u6587\u4EF6\u5939\uFF0C\u4F46\u662F\u4E0D\u5339\u914D\u8BE5\u6587\u4EF6</li><li><code>**</code> \u8868\u793A\u591A\u7EA7\uFF0C\u5176\u4F4D\u7F6E\u53EF\u5728\u5F00\u59CB\uFF0C\u4E2D\u95F4\uFF0C\u7ED3\u675F</li><li><code>?</code> \u8868\u793A\u5355\u4E2A\u5B57\u7B26</li><li><code>[]</code> \u8868\u793A\u5355\u4E2A\u5B57\u7B26\u5217\u8868</li></ul><h2 id="\u5FFD\u7565\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u793A\u4F8B" aria-hidden="true">#</a> \u5FFD\u7565\u793A\u4F8B</h2><h3 id="_1-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u4EF6" aria-hidden="true">#</a> 1. \u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5FFD\u7565 \u6240\u6709 a.txt \u6587\u4EF6</span>
a.txt
<span class="token comment"># \u4EC5\u5FFD\u7565\u6839\u76EE\u5F55\u4E0B\u7684 a.txt \u6587\u4EF6</span>
/a.txt
<span class="token comment"># \u5FFD\u7565 config \u76EE\u5F55\u4E0B\u7684 secret.json</span>
config/secret.json
<span class="token comment"># \u5FFD\u7565 \u6240\u6709\u7684 .env \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
*.env
</code></pre></div><h3 id="_2-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u76EE\u5F55" aria-hidden="true">#</a> 2. \u76EE\u5F55</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5FFD\u7565 node_modules \u76EE\u5F55</span>
node_modules/
</code></pre></div><h3 id="_3-\u53D6\u53CD" tabindex="-1"><a class="header-anchor" href="#_3-\u53D6\u53CD" aria-hidden="true">#</a> 3. \u53D6\u53CD</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8DDF\u8E2A public \u76EE\u5F55\u4E0B\u7684 .env \u6587\u4EF6</span>
<span class="token operator">!</span>public/.env
</code></pre></div><h3 id="_4-\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#_4-\u7EC4\u5408" aria-hidden="true">#</a> 4. \u7EC4\u5408</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5FFD\u7565 docs \u4E0B\u7684\u6240\u6709 .md \u6587\u4EF6</span>
docs/*.md <span class="token comment"># \u8FD9\u662F\u9519\u8BEF\u7684\uFF0C\u56E0\u4E3A\u4E0D\u80FD\u5FFD\u7565 \`docs/git/\` \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</span>
docs/**/*.md <span class="token comment"># \u6B63\u786E\u7ED3\u679C</span>

<span class="token comment"># \u5FFD\u7565\u4EE5 .a \u3001.b \u6216 .c \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
*.<span class="token punctuation">[</span>abc<span class="token punctuation">]</span> <span class="token comment"># \u6B63\u786E</span>
*.<span class="token punctuation">[</span>a-c<span class="token punctuation">]</span> <span class="token comment"># \u4E5F\u6B63\u786E</span>

<span class="token comment"># \u5FFD\u7565 docs \u4E0B\u7684\u9664 secret \u547D\u540D\u7684\u6240\u6709\u6587\u4EF6</span>
docs/
<span class="token operator">!</span>docs/secret.*

<span class="token comment">## \u5FFD\u7565 src \u4E0B\u7684\u6240\u6709 index.js \u6587\u4EF6</span>
src/**/index.js
</code></pre></div><h2 id="\u89C4\u5219\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u4E0D\u751F\u6548" aria-hidden="true">#</a> \u89C4\u5219\u4E0D\u751F\u6548</h2><p><code>.gitignore</code> \u6307\u5B9A\u7684\u662F\u672A\u8DDF\u8E2A\u6587\u4EF6\uFF0C\u5DF2\u7ECF\u8DDF\u8E2A\u7684\uFF08tracked\uFF09\u4E0D\u53D7\u5F71\u54CD\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u6E05\u9664\u672C\u5730\u7F13\u5B58\u518D\u63D0\u4EA4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> --cached

<span class="token comment"># \u793A\u4F8B -- \u53D6\u6D88\u67D0\u4E2A\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached a.txt
<span class="token comment"># \u793A\u4F8B -- \u53D6\u6D88\u67D0\u4E2A\u6587\u4EF6\u5939</span>
<span class="token function">git</span> <span class="token function">rm</span> -r --cached a/
<span class="token comment"># \u793A\u4F8B -- \u53D6\u6D88\u6240\u6709\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> -r --cached <span class="token builtin class-name">.</span>
</code></pre></div>`,17);function c(o,t){return e}var p=n(s,[["render",c]]);export{p as default};
