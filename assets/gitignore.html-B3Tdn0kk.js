import{_ as a,c as n,a as e,o as l}from"./app-BoSqM2g3.js";const p={};function c(t,s){return l(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="git-忽略跟踪的文件" tabindex="-1"><a class="header-anchor" href="#git-忽略跟踪的文件"><span>Git 忽略跟踪的文件</span></a></h1><h2 id="忽略规则" tabindex="-1"><a class="header-anchor" href="#忽略规则"><span>忽略规则</span></a></h2><blockquote><p>首先你需要在项目根目录下新建一个 <code>.gitignore</code> 文件</p></blockquote><ul><li>空格不匹配任何文件，可以作为分隔符号</li><li>以 <code>#</code> 开始的为注释</li><li><code>\\</code> 表示转义符</li><li><code>!</code> 开始的表示否定，也就是开启跟踪</li><li><code>/</code> 开始的表示项目根目录</li><li><code>/</code> 结尾的表示某个文件夹，但是不匹配该文件</li><li><code>**</code> 表示多级，其位置可在开始，中间，结束</li><li><code>?</code> 表示单个字符</li><li><code>[]</code> 表示单个字符列表</li></ul><h2 id="忽略示例" tabindex="-1"><a class="header-anchor" href="#忽略示例"><span>忽略示例</span></a></h2><h3 id="_1-文件" tabindex="-1"><a class="header-anchor" href="#_1-文件"><span>1. 文件</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 忽略 所有 a.txt 文件</span></span>
<span class="line">a.txt</span>
<span class="line"><span class="token comment"># 仅忽略根目录下的 a.txt 文件</span></span>
<span class="line">/a.txt</span>
<span class="line"><span class="token comment"># 忽略 config 目录下的 secret.json</span></span>
<span class="line">config/secret.json</span>
<span class="line"><span class="token comment"># 忽略 所有的 .env 结尾的文件</span></span>
<span class="line">*.env</span>
<span class="line"></span></code></pre></div><h3 id="_2-目录" tabindex="-1"><a class="header-anchor" href="#_2-目录"><span>2. 目录</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 忽略 node_modules 目录</span></span>
<span class="line">node_modules/</span>
<span class="line"></span></code></pre></div><h3 id="_3-取反" tabindex="-1"><a class="header-anchor" href="#_3-取反"><span>3. 取反</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 跟踪 public 目录下的 .env 文件</span></span>
<span class="line"><span class="token operator">!</span>public/.env</span>
<span class="line"></span></code></pre></div><h3 id="_4-组合" tabindex="-1"><a class="header-anchor" href="#_4-组合"><span>4. 组合</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 忽略 docs 下的所有 .md 文件</span></span>
<span class="line">docs/*.md <span class="token comment"># 这是错误的，因为不能忽略 \`docs/git/\` 目录下的文件</span></span>
<span class="line">docs/**/*.md <span class="token comment"># 正确结果</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 忽略以 .a 、.b 或 .c 结尾的文件</span></span>
<span class="line">*.<span class="token punctuation">[</span>abc<span class="token punctuation">]</span> <span class="token comment"># 正确</span></span>
<span class="line">*.<span class="token punctuation">[</span>a-c<span class="token punctuation">]</span> <span class="token comment"># 也正确</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 忽略 docs 下的除 secret 命名的所有文件</span></span>
<span class="line">docs/</span>
<span class="line"><span class="token operator">!</span>docs/secret.*</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 忽略 src 下的所有 index.js 文件</span></span>
<span class="line">src/**/index.js</span>
<span class="line"></span></code></pre></div><h2 id="规则不生效" tabindex="-1"><a class="header-anchor" href="#规则不生效"><span>规则不生效</span></a></h2><p><code>.gitignore</code> 指定的是未跟踪文件，已经跟踪的（tracked）不受影响。</p><p>解决方法就是清除本地缓存再提交：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 示例 -- 取消某个文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> a.txt</span>
<span class="line"><span class="token comment"># 示例 -- 取消某个文件夹</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> a/</span>
<span class="line"><span class="token comment"># 示例 -- 取消所有文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre></div>`,17)])])}const o=a(p,[["render",c]]),d=JSON.parse('{"path":"/tools/git/gitignore.html","title":"Git 忽略跟踪的文件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"忽略规则","slug":"忽略规则","link":"#忽略规则","children":[]},{"level":2,"title":"忽略示例","slug":"忽略示例","link":"#忽略示例","children":[{"level":3,"title":"1. 文件","slug":"_1-文件","link":"#_1-文件","children":[]},{"level":3,"title":"2. 目录","slug":"_2-目录","link":"#_2-目录","children":[]},{"level":3,"title":"3. 取反","slug":"_3-取反","link":"#_3-取反","children":[]},{"level":3,"title":"4. 组合","slug":"_4-组合","link":"#_4-组合","children":[]}]},{"level":2,"title":"规则不生效","slug":"规则不生效","link":"#规则不生效","children":[]}],"git":{"updatedTime":1637399111000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/git/gitignore.md"}');export{o as comp,d as data};
