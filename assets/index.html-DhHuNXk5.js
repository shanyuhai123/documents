import{_ as n,c as a,a as e,o as p}from"./app-BoSqM2g3.js";const l={};function t(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="快速尝鲜-nodejs" tabindex="-1"><a class="header-anchor" href="#快速尝鲜-nodejs"><span>快速尝鲜 NodeJS</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>虽然可以直接从 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node 官网</a> 下载并安装它，但更推荐的使用方式是利用 <a href="https://github.com/creationix/nvm" target="_blank" rel="noopener noreferrer">nvm</a> 来处理它，因为 <code>nvm</code> 还提供了多版本的共存的解决方式，可以更快捷的切换、尝鲜。</p><h3 id="_1-安装-nvm" tabindex="-1"><a class="header-anchor" href="#_1-安装-nvm"><span>1. 安装 nvm</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装脚本(具体版本可看官网)</span></span>
<span class="line"><span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证安装</span></span>
<span class="line">nvm <span class="token parameter variable">--version</span> <span class="token comment"># 若失败需执行 \`source ~/.bashrc\` 使环境变量生效</span></span>
<span class="line"><span class="token comment"># 0.34.0</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-安装-node" tabindex="-1"><a class="header-anchor" href="#_2-安装-node"><span>2. 安装 node</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看当前</span></span>
<span class="line">nvm <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看可用</span></span>
<span class="line">nvm ls-remote</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装指定版本</span></span>
<span class="line">nvm <span class="token function">install</span> v12.16.3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置默认版本</span></span>
<span class="line">nvm <span class="token builtin class-name">alias</span> default v12.16.3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证 node</span></span>
<span class="line"><span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># v12.16.3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换版本</span></span>
<span class="line">nvm use v13.13.0</span>
<span class="line"></span></code></pre></div><p>当下载速度不够理想时，你可以修改 <code>~/.curlrc</code> 配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># socks5</span></span>
<span class="line">socks5 <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:1080&quot;</span></span>
<span class="line"><span class="token comment"># 或 http</span></span>
<span class="line">proxy <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:9999&quot;</span></span>
<span class="line"></span></code></pre></div><p>这是因为 <code>nvm</code> 通过 <a href="https://stackoverflow.com/questions/42244572/nvm-proxy-settings-configuration-file" target="_blank" rel="noopener noreferrer">curl</a> 来安装 <code>node</code>。</p><h3 id="_3-nvm-全局包迁移" tabindex="-1"><a class="header-anchor" href="#_3-nvm-全局包迁移"><span>3. nvm 全局包迁移</span></a></h3><p>在 windows 下使用时切换 node 版本全局包不会丢失，而在 manjaro 下使用时遇到了该情况，可利用 <a href="https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing" target="_blank" rel="noopener noreferrer">--reinstall-packages-from</a> 解决。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">nvm <span class="token function">install</span> v12.16.3 --reinstall-packages-from<span class="token operator">=</span>v12.4.0</span>
<span class="line"></span></code></pre></div><p>在利用 <code>npm install -g npm</code> 升级时同样会导致全局包丢失，所以在任何情况都应该通过 <code>nvm</code> 升级。</p><h2 id="切换源" tabindex="-1"><a class="header-anchor" href="#切换源"><span>切换源</span></a></h2><p>在缺乏代理的情况下 npm 默认源的速度会比较慢，设置为淘宝源会有比较理想的速度；在私建 npm 服务的情况下，有时部分依赖包需要去私服下载，频繁切换也会麻烦。</p><p>这时候就可以使用 <a href="https://github.com/Pana/nrm" target="_blank" rel="noopener noreferrer">nrm</a> 快速切换源来解决这些问题了。</p><p>当然，npm 也自带了设置源的服务，但毕竟使用起来较为麻烦：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/</span>
<span class="line"></span></code></pre></div><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h3><p>nrm 也是 <code>Node.js</code> 模块。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> nrm</span>
<span class="line"></span></code></pre></div><h3 id="_2-查看源" tabindex="-1"><a class="header-anchor" href="#_2-查看源"><span>2. 查看源</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">nrm <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># * npm ---- https://registry.npmjs.org/</span></span>
<span class="line"><span class="token comment">#  cnpm --- http://r.cnpmjs.org/</span></span>
<span class="line"><span class="token comment">#  taobao - https://registry.npm.taobao.org/</span></span>
<span class="line"><span class="token comment">#  nj ----- https://registry.nodejitsu.com/</span></span>
<span class="line"><span class="token comment">#  npmMirror  https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span class="token comment">#  edunpm - http://registry.enpmjs.org/</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-测速" tabindex="-1"><a class="header-anchor" href="#_3-测速"><span>3. 测速</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">nrm <span class="token builtin class-name">test</span></span>
<span class="line"><span class="token comment"># * npm ---- 1837ms</span></span>
<span class="line"><span class="token comment">#  cnpm --- 1050ms</span></span>
<span class="line"><span class="token comment">#  taobao - 125ms</span></span>
<span class="line"><span class="token comment">#  nj ----- Fetch Error</span></span>
<span class="line"><span class="token comment">#  npmMirror  3027ms</span></span>
<span class="line"><span class="token comment">#  edunpm - Fetch Error</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-切换源" tabindex="-1"><a class="header-anchor" href="#_4-切换源"><span>4. 切换源</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">nrm use taobao</span>
<span class="line"></span></code></pre></div><h2 id="一些命令" tabindex="-1"><a class="header-anchor" href="#一些命令"><span>一些命令</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看安装在全局 npm 包</span></span>
<span class="line"><span class="token function">npm</span> list <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># npm install 失败时强制清理</span></span>
<span class="line"><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span></span>
<span class="line"></span></code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ol><li><a href="https://nodejs.org/dist/latest-v10.x/docs/api/" target="_blank" rel="noopener noreferrer">Node.js</a></li></ol>`,32)])])}const o=n(l,[["render",t]]),r=JSON.parse('{"path":"/backend/nodejs/","title":"快速尝鲜 NodeJS","lang":"zh-CN","frontmatter":{"description":"快速尝鲜 NodeJS","tags":["nodejs","nvm","curl"],"sidebarDepth":2},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"1. 安装 nvm","slug":"_1-安装-nvm","link":"#_1-安装-nvm","children":[]},{"level":3,"title":"2. 安装 node","slug":"_2-安装-node","link":"#_2-安装-node","children":[]},{"level":3,"title":"3. nvm 全局包迁移","slug":"_3-nvm-全局包迁移","link":"#_3-nvm-全局包迁移","children":[]}]},{"level":2,"title":"切换源","slug":"切换源","link":"#切换源","children":[{"level":3,"title":"1. 安装","slug":"_1-安装","link":"#_1-安装","children":[]},{"level":3,"title":"2. 查看源","slug":"_2-查看源","link":"#_2-查看源","children":[]},{"level":3,"title":"3. 测速","slug":"_3-测速","link":"#_3-测速","children":[]},{"level":3,"title":"4. 切换源","slug":"_4-切换源","link":"#_4-切换源","children":[]}]},{"level":2,"title":"一些命令","slug":"一些命令","link":"#一些命令","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1661090040000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":10,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nodejs/README.md"}');export{o as comp,r as data};
