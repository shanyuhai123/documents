import{_ as n,c as s,a as o,o as t}from"./app-DNXRdI82.js";const p={};function e(c,a){return t(),s("div",null,a[0]||(a[0]=[o(`<h1 id="copilot-tab-补全在-markdown-中不生效" tabindex="-1"><a class="header-anchor" href="#copilot-tab-补全在-markdown-中不生效"><span>Copilot tab 补全在 markdown 中不生效</span></a></h1><p>似乎是由 <a href="https://github.com/yzhang-gh/vscode-markdown/issues/1011" target="_blank" rel="noopener noreferrer">Markdown all in one</a> 插件引起的问题。</p><h2 id="修复" tabindex="-1"><a class="header-anchor" href="#修复"><span>修复</span></a></h2><p>按下 <code>Ctrl + Shift + P</code> 并搜索 <code>Preferences: Open Keyboard Shortcuts</code>，进入该界面后切换至 <code>JSON</code> 格式，并追加 <code>tab</code> 配置：</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;markdown.extension.onTabKey&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !inlineSuggestionVisible &amp;&amp; !editorReadonly &amp;&amp; !editorTabMovesFocus &amp;&amp; !hasOtherSuggestions &amp;&amp; !hasSnippetCompletions &amp;&amp; !inSnippetMode &amp;&amp; !suggestWidgetVisible &amp;&amp; editorLangId == &#39;markdown&#39;&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-markdown.extension.onTabKey&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !editorReadonly &amp;&amp; !editorTabMovesFocus &amp;&amp; !hasOtherSuggestions &amp;&amp; !hasSnippetCompletions &amp;&amp; !inSnippetMode &amp;&amp; !suggestWidgetVisible &amp;&amp; editorLangId == &#39;markdown&#39;&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div>`,5)]))}const i=n(p,[["render",e],["__file","vscode-markdown-copilot-tab-do-not-work.html.vue"]]),r=JSON.parse('{"path":"/tools/vscode/vscode-markdown-copilot-tab-do-not-work.html","title":"Copilot tab 补全在 markdown 中不生效","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"修复","slug":"修复","link":"#修复","children":[]}],"git":{"updatedTime":1638278496000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/vscode/vscode-markdown-copilot-tab-do-not-work.md"}');export{i as comp,r as data};
