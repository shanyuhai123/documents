import{_ as e,c as a,a as n,o as s}from"./app-DNXRdI82.js";const l={};function i(r,t){return s(),a("div",null,t[0]||(t[0]=[n(`<h1 id="查看文本内容" tabindex="-1"><a class="header-anchor" href="#查看文本内容"><span>查看文本内容</span></a></h1><h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat"><span>cat</span></a></h2><p>cat 命令常用于查看内容较少的文本，还可以用于拼接文件。</p><h3 id="_1-命令格式" tabindex="-1"><a class="header-anchor" href="#_1-命令格式"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>cat [选项] 文件名</p></div><h3 id="_2-常用选项" tabindex="-1"><a class="header-anchor" href="#_2-常用选项"><span>2. 常用选项</span></a></h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-n</td><td style="text-align:center;">对输出内容进行编号。</td></tr><tr><td style="text-align:center;">-b</td><td style="text-align:center;">只对非空进行编号。</td></tr><tr><td style="text-align:center;">-V</td><td style="text-align:center;">列出特殊字符。</td></tr></tbody></table><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例"><span>3. 示例</span></a></h3><ul><li><p>查看内容</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token parameter variable">-n</span> test.txt</span>
<span class="line"></span></code></pre></div></li><li><p>合并文件</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> test1.txt test2.txt <span class="token operator">&gt;</span> test3.txt </span>
<span class="line"><span class="token function">more</span> test3.txt <span class="token comment"># 验证 </span></span>
<span class="line"></span></code></pre></div></li><li><p>倒叙显示</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">tac</span> test.txt</span>
<span class="line"></span></code></pre></div></li><li><p>追加多行内容到文件</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;registry-mirrors&quot;: [</span>
<span class="line">    &quot;https://hub-mirror.c.163.com&quot;,</span>
<span class="line">    &quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more"><span>more</span></a></h2><p>如果要查看内容较多的文本，用 cat 就难以阅读了，这时候就可以使用 more 了。</p><h3 id="_1-命令格式-1" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-1"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>more [选项] 文件名</p></div><h3 id="_2-常用选项-1" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-1"><span>2. 常用选项</span></a></h3><p>一般不使用选项，而是要了解交互指令。</p><table><thead><tr><th style="text-align:center;">交互指令（部分）</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">h 或 ?</td><td style="text-align:center;">显示 more 命令的帮助提示。</td></tr><tr><td style="text-align:center;">q 或 Q</td><td style="text-align:center;">退出 more。</td></tr><tr><td style="text-align:center;">v</td><td style="text-align:center;">在当前行启动一个编辑器。</td></tr><tr><td style="text-align:center;">回车键</td><td style="text-align:center;">向下移动一行。</td></tr><tr><td style="text-align:center;">空格键</td><td style="text-align:center;">向下一动一页。</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">向下移动半页。</td></tr><tr><td style="text-align:center;">b</td><td style="text-align:center;">向上移动一页。</td></tr></tbody></table><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1"><span>3. 示例</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">more</span> long-test.txt</span>
<span class="line"></span></code></pre></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>less</span></a></h2><p>less 是作为 more 的加强版（看到一水的文章说 more 不可以向前翻看，但是 b 明明可以向上翻滚，不知道是我理解错了还是什么 🐱）：</p><ul><li>使用光标键可以在文本文件中前后左右滚屏；</li><li>用行号或百分比作为书签浏览文件；</li><li>提供更加友好的检索、高亮显示操作；</li><li>兼容常用的字处理程序（Vim、Emacs）的键盘操作……</li></ul><h3 id="_1-命令格式-2" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-2"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>less [选项] 文件名</p></div><h3 id="_2-常用选项-2" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-2"><span>2. 常用选项</span></a></h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-N</td><td style="text-align:center;">显示行号。</td></tr><tr><td style="text-align:center;">-m</td><td style="text-align:center;">显示百分比。</td></tr></tbody></table><p>与 more 一致，重要的是交互指令。</p><table><thead><tr><th style="text-align:center;">交互命令</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">h 或 H</td><td style="text-align:center;">查看帮助。</td></tr><tr><td style="text-align:center;">q 或 Q</td><td style="text-align:center;">退出 less。</td></tr><tr><td style="text-align:center;">zz</td><td style="text-align:center;">退出 less 命令。</td></tr><tr><td style="text-align:center;">回车键</td><td style="text-align:center;">向下移动一行。</td></tr><tr><td style="text-align:center;">空格键</td><td style="text-align:center;">向下移动一页。</td></tr><tr><td style="text-align:center;">g / G</td><td style="text-align:center;">移动至第一行/最后一行。</td></tr></tbody></table><h3 id="_3-示例-2" tabindex="-1"><a class="header-anchor" href="#_3-示例-2"><span>3. 示例</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">less</span> <span class="token parameter variable">-N</span> long-test.txt</span>
<span class="line"></span></code></pre></div><h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><p>head 命令常用于查看文本的前 n 行。</p><h3 id="_1-命令格式-3" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-3"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>head [选项] 文件名</p></div><h3 id="_2-常用选项-3" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-3"><span>2. 常用选项</span></a></h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-n</td><td style="text-align:center;">显示文件前 n 行内容，n 默认为 10。</td></tr></tbody></table><h3 id="_3-示例-3" tabindex="-1"><a class="header-anchor" href="#_3-示例-3"><span>3. 示例</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看文件前 20 行内容</span></span>
<span class="line"><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">20</span> package-lock.json</span>
<span class="line"><span class="token function">head</span> <span class="token parameter variable">-20</span> package-lock.json <span class="token comment"># 简写</span></span>
<span class="line"></span></code></pre></div><h2 id="tail" tabindex="-1"><a class="header-anchor" href="#tail"><span>tail</span></a></h2><p>tail 命令常用于查看纯文本文件的后 n 行，与 head 相反。</p><h3 id="_1-命令格式-4" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-4"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>tail [选项] 文件名</p></div><h3 id="_2-常用选项-4" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-4"><span>2. 常用选项</span></a></h3><p>与 head 基本一致。</p><h3 id="_3-示例-4" tabindex="-1"><a class="header-anchor" href="#_3-示例-4"><span>3. 示例</span></a></h3><p>与 head 基本一致。</p><h2 id="wc" tabindex="-1"><a class="header-anchor" href="#wc"><span>wc</span></a></h2><p>wc 命令常用于统计指定文本的行数、字数、字节数。</p><h3 id="_1-命令格式-5" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-5"><span>1. 命令格式</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>wc [选项] 文件名</p></div><h3 id="_2-常用选项-5" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-5"><span>2. 常用选项</span></a></h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-l</td><td style="text-align:center;">统计行数。</td></tr><tr><td style="text-align:center;">-w</td><td style="text-align:center;">统计单词。</td></tr><tr><td style="text-align:center;">-c</td><td style="text-align:center;">统计字节数。</td></tr></tbody></table><h3 id="_3-示例-5" tabindex="-1"><a class="header-anchor" href="#_3-示例-5"><span>3. 示例</span></a></h3><ul><li><p>默认显示三项数据</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wc</span> package-lock.json</span>
<span class="line"></span></code></pre></div></li><li><p>只统计行数</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wc</span> <span class="token parameter variable">-l</span> package-lock.json</span>
<span class="line"></span></code></pre></div></li></ul>`,53)]))}const d=e(l,[["render",i],["__file","view-text-context.html.vue"]]),h=JSON.parse('{"path":"/os/linux/view-text-context.html","title":"查看文本内容","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"cat","slug":"cat","link":"#cat","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式","link":"#_1-命令格式","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项","link":"#_2-常用选项","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例","link":"#_3-示例","children":[]}]},{"level":2,"title":"more","slug":"more","link":"#more","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式-1","link":"#_1-命令格式-1","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项-1","link":"#_2-常用选项-1","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例-1","link":"#_3-示例-1","children":[]}]},{"level":2,"title":"less","slug":"less","link":"#less","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式-2","link":"#_1-命令格式-2","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项-2","link":"#_2-常用选项-2","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例-2","link":"#_3-示例-2","children":[]}]},{"level":2,"title":"head","slug":"head","link":"#head","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式-3","link":"#_1-命令格式-3","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项-3","link":"#_2-常用选项-3","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例-3","link":"#_3-示例-3","children":[]}]},{"level":2,"title":"tail","slug":"tail","link":"#tail","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式-4","link":"#_1-命令格式-4","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项-4","link":"#_2-常用选项-4","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例-4","link":"#_3-示例-4","children":[]}]},{"level":2,"title":"wc","slug":"wc","link":"#wc","children":[{"level":3,"title":"1. 命令格式","slug":"_1-命令格式-5","link":"#_1-命令格式-5","children":[]},{"level":3,"title":"2. 常用选项","slug":"_2-常用选项-5","link":"#_2-常用选项-5","children":[]},{"level":3,"title":"3. 示例","slug":"_3-示例-5","link":"#_3-示例-5","children":[]}]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/view-text-context.md"}');export{d as comp,h as data};
