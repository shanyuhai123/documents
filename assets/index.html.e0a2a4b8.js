import{e as a}from"./app.63b573f6.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const s={},n=a(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u4E3B\u8981\u7528\u4E8E\u89E3\u51B3\u5728\u4F7F\u7528 MySQL \u65F6\u9047\u5230\u7684\u95EE\u9898\uFF0C\u4EE5\u53CA\u662F\u600E\u4E48\u89E3\u51B3\u7684\u3002</p><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p>\u5B66\u4E60\u73AF\u5883\u57FA\u4E8E Docker\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>
  -p <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span>
  --name some-mysql <span class="token punctuation">\\</span>
  mysql:8.0
</code></pre></div><p>\u8C03\u8BD5\u5DE5\u5177\u4E3A MySQL Workbench\uFF0C\u53EF\u5728 <code>Preferences</code> \u4E2D\u4E3A\u5176\u8BBE\u7F6E <code>Use UPPERCASE</code>\u3002</p><h3 id="\u547D\u4EE4\u884C\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u8C03\u8BD5" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u8C03\u8BD5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 mysql \u5BB9\u5668</span>
docker <span class="token builtin class-name">exec</span> -it some-mysql <span class="token function">bash</span>

<span class="token comment"># mysql \u547D\u4EE4\u884C</span>
mysql -u yourname -p
<span class="token comment"># \u6839\u636E\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u5373\u53EF</span>
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><ol><li>\u300AMySQL \u5FC5\u77E5\u5FC5\u4F1A\u300B</li><li>\u300A\u9AD8\u6027\u80FD MySQL\u300B</li></ol>`,11);function c(r,o){return n}var d=e(s,[["render",c]]);export{d as default};
