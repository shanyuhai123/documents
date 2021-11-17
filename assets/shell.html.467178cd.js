import{e}from"./app.cc89d5d0.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},n=e(`<h1 id="shell-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#shell-\u811A\u672C" aria-hidden="true">#</a> Shell \u811A\u672C</h1><p>\u4E00\u70B9\u70B9\u8FFD\u52A0\u3002</p><h2 id="bash-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#bash-\u53D8\u91CF" aria-hidden="true">#</a> Bash \u53D8\u91CF</h2><p>Bash \u53D8\u91CF\u5206\u4E3A\uFF1A\u73AF\u5883\u53D8\u91CF\u548C\u81EA\u5B9A\u4E49\u53D8\u91CF\u3002</p><h3 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h3><p>\u73AF\u5883\u53D8\u91CF\u662F Bash \u73AF\u5883\u81EA\u5E26\u7684\u53D8\u91CF\uFF0C\u8FDB\u5165 Shell \u65F6\u5DF2\u7ECF\u5B9A\u4E49\u597D\u4E86\uFF0C\u5B83\u4EEC\u901A\u5E38\u65F6\u7CFB\u7EDF\u5B9A\u4E49\u597D\u7684\uFF0C\u4E5F\u53EF\u4EE5\u7531\u7528\u6237\u4ECE\u7236 Shell \u4F20\u5165\u5B50 Shell\u3002</p><h3 id="\u81EA\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u53D8\u91CF</h3><p>\u81EA\u5B9A\u4E49\u53D8\u91CF\u662F\u7528\u6237\u5728\u5F53\u524D Shell \u91CC\u81EA\u5DF1\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u4EC5\u5728\u5F53\u524D Shell \u53EF\u7528\u3002\u4E00\u65E6\u9000\u51FA Shell\uFF0C\u8BE5\u53D8\u91CF\u5C31\u4E0D\u5B58\u5728\u4E86\u3002</p><h3 id="\u7279\u6B8A\u53D8\u91CF-\u811A\u672C\u5185" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u53D8\u91CF-\u811A\u672C\u5185" aria-hidden="true">#</a> \u7279\u6B8A\u53D8\u91CF - \u811A\u672C\u5185</h3><p>\u811A\u672C\u6587\u4EF6\u5185\u90E8\u53EF\u4EE5\u4F7F\u7528\u7279\u6B8A\u53D8\u91CF\uFF1A</p><ul><li><code>$0</code>\uFF1A\u811A\u672C\u6587\u4EF6\u540D\uFF0C\u5373 <code>script.sh</code></li><li><code>$1~$9</code>\uFF1A\u5BF9\u5E94\u811A\u672C\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5230\u7B2C\u4E5D\u4E2A\u53C2\u6570</li><li><code>$#</code>\uFF1A\u53C2\u6570\u7684\u603B\u6570</li><li><code>$@</code>\uFF1A\u5168\u90E8\u7684\u53C2\u6570\uFF0C\u53C2\u6570\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u5206\u9694</li></ul><p>\u89E3\u6790\u4E00\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span> <span class="token comment"># \u6CE8\u610F\u7B49\u53F7\u4E24\u8FB9\u4E0D\u8981\u6709\u7A7A\u683C</span>
<span class="token comment"># $0 =&gt; \u5373\u811A\u672C\u6587\u4EF6\u540D\uFF08\u5305\u542B\u4F60\u8FDB\u5165\u7684\u76EE\u5F55\uFF09./shells/echo.sh</span>
<span class="token comment"># $(dirname $0) =&gt; \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55\uFF0C\u5305\u88F9\u4F4F\u4F7F\u5F97\u4E0D\u4F1A\u88AB \`echo\` \u89E3\u6790\u6210\u4E24\u90E8\u5206 ./shells</span>
<span class="token comment"># \u5B8C\u6210\u7684 =&gt; \u8FDB\u5165\u76EE\u5F55\uFF0C\u5E76\u83B7\u53D6\u5176\u5B8C\u6574\u8DEF\u5F84 /home/shanyuhai/code/shells</span>
</code></pre></div><h2 id="\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> expression <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   Statement<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to be executed <span class="token keyword">if</span> expression is <span class="token boolean">true</span>
<span class="token keyword">fi</span>

<span class="token comment"># if expr1 ?then? body1 elseif expr2 ?then? body2 elseif ... ?else? ?bodyN?</span>
</code></pre></div><p><code>then</code> \u8BED\u53E5\u4E2D\u4E3A\u5E38\u89C4\u6267\u884C\u8BED\u53E5\uFF0C\u800C <code>expression</code> \u5224\u65AD\u8868\u8FBE\u5F0F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5FEB\u6377\u5224\u65AD\u3002</p><h4 id="_1-\u6587\u4EF6\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u4EF6\u5224\u65AD" aria-hidden="true">#</a> 1. \u6587\u4EF6\u5224\u65AD</h4><ul><li><code>[ -a file ]</code>\uFF1A\u5982\u679C <code>file</code> \u5B58\u5728\uFF0C\u5219\u4E3A true</li><li><code>[ -d file ]</code>\uFF1A\u5982\u679C <code>file</code> \u5B58\u5728\u4E14\u662F\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5219\u4E3A true</li><li><code>[ -f file ]</code>\uFF1A\u5982\u679C <code>file</code> \u5B58\u5728\u4E14\u662F\u4E00\u4E2A\u666E\u901A\u6587\u4EF6\uFF0C\u5219\u4E3A true</li></ul><h4 id="_2-\u5B57\u7B26\u4E32\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_2-\u5B57\u7B26\u4E32\u5224\u65AD" aria-hidden="true">#</a> 2. \u5B57\u7B26\u4E32\u5224\u65AD</h4><ul><li><code>[ -n string ]</code>\uFF1A\u5982\u679C\u5B57\u7B26\u4E32 <code>string</code> \u957F\u5EA6\u5927\u4E8E 0\uFF0C\u5219\u4E3A true</li><li><code>[ -z string ]</code>\uFF1A\u5982\u679C\u5B57\u7B26\u4E32 <code>string</code> \u957F\u5EA6\u4E3A 0\uFF0C\u5219\u4E3A true</li></ul>`,21);function c(o,l){return n}var t=a(s,[["render",c]]);export{t as default};
