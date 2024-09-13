import{_ as r,M as p,p as l,q as d,R as s,t as a,N as t,a1 as o}from"./framework-e3e34937.js";const i={},m={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stackoverflow.com/questions/42244572/nvm-proxy-settings-configuration-file",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},k={href:"https://nodejs.org/dist/latest-v10.x/docs/api/",target:"_blank",rel:"noopener noreferrer"};function v(b,n){const e=p("ExternalLinkIcon");return l(),d("div",null,[n[21]||(n[21]=s("h1",{id:"快速尝鲜-nodejs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速尝鲜-nodejs","aria-hidden":"true"},"#"),a(" 快速尝鲜 NodeJS")],-1)),n[22]||(n[22]=s("h2",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1)),s("p",null,[n[2]||(n[2]=a("虽然可以直接从 ")),s("a",m,[n[0]||(n[0]=a("Node 官网")),t(e)]),n[3]||(n[3]=a(" 下载并安装它，但更推荐的使用方式是利用 ")),s("a",c,[n[1]||(n[1]=a("nvm")),t(e)]),n[4]||(n[4]=a(" 来处理它，因为 ")),n[5]||(n[5]=s("code",null,"nvm",-1)),n[6]||(n[6]=a(" 还提供了多版本的共存的解决方式，可以更快捷的切换、尝鲜。"))]),n[23]||(n[23]=o(`<h3 id="_1-安装-nvm" tabindex="-1"><a class="header-anchor" href="#_1-安装-nvm" aria-hidden="true">#</a> 1. 安装 nvm</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装脚本(具体版本可看官网)</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># 验证安装</span>
nvm <span class="token parameter variable">--version</span> <span class="token comment"># 若失败需执行 \`source ~/.bashrc\` 使环境变量生效</span>
<span class="token comment"># 0.34.0</span>
</code></pre></div><h3 id="_2-安装-node" tabindex="-1"><a class="header-anchor" href="#_2-安装-node" aria-hidden="true">#</a> 2. 安装 node</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前</span>
nvm <span class="token function">ls</span>

<span class="token comment"># 查看可用</span>
nvm ls-remote

<span class="token comment"># 安装指定版本</span>
nvm <span class="token function">install</span> v12.16.3

<span class="token comment"># 设置默认版本</span>
nvm <span class="token builtin class-name">alias</span> default v12.16.3

<span class="token comment"># 验证 node</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># v12.16.3</span>

<span class="token comment"># 切换版本</span>
nvm use v13.13.0
</code></pre></div><p>当下载速度不够理想时，你可以修改 <code>~/.curlrc</code> 配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># socks5</span>
socks5 <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:1080&quot;</span>
<span class="token comment"># 或 http</span>
proxy <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:9999&quot;</span>
</code></pre></div>`,6)),s("p",null,[n[8]||(n[8]=a("这是因为 ")),n[9]||(n[9]=s("code",null,"nvm",-1)),n[10]||(n[10]=a(" 通过 ")),s("a",h,[n[7]||(n[7]=a("curl")),t(e)]),n[11]||(n[11]=a(" 来安装 ")),n[12]||(n[12]=s("code",null,"node",-1)),n[13]||(n[13]=a("。"))]),n[24]||(n[24]=s("h3",{id:"_3-nvm-全局包迁移",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-nvm-全局包迁移","aria-hidden":"true"},"#"),a(" 3. nvm 全局包迁移")],-1)),s("p",null,[n[15]||(n[15]=a("在 windows 下使用时切换 node 版本全局包不会丢失，而在 manjaro 下使用时遇到了该情况，可利用 ")),s("a",u,[n[14]||(n[14]=a("--reinstall-packages-from")),t(e)]),n[16]||(n[16]=a(" 解决。"))]),n[25]||(n[25]=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> v12.16.3 --reinstall-packages-from<span class="token operator">=</span>v12.4.0
</code></pre></div><p>在利用 <code>npm install -g npm</code> 升级时同样会导致全局包丢失，所以在任何情况都应该通过 <code>nvm</code> 升级。</p><h2 id="切换源" tabindex="-1"><a class="header-anchor" href="#切换源" aria-hidden="true">#</a> 切换源</h2><p>在缺乏代理的情况下 npm 默认源的速度会比较慢，设置为淘宝源会有比较理想的速度；在私建 npm 服务的情况下，有时部分依赖包需要去私服下载，频繁切换也会麻烦。</p>`,4)),s("p",null,[n[18]||(n[18]=a("这时候就可以使用 ")),s("a",g,[n[17]||(n[17]=a("nrm")),t(e)]),n[19]||(n[19]=a(" 快速切换源来解决这些问题了。"))]),n[26]||(n[26]=o(`<p>当然，npm 也自带了设置源的服务，但毕竟使用起来较为麻烦：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre></div><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><p>nrm 也是 <code>Node.js</code> 模块。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> nrm
</code></pre></div><h3 id="_2-查看源" tabindex="-1"><a class="header-anchor" href="#_2-查看源" aria-hidden="true">#</a> 2. 查看源</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nrm <span class="token function">ls</span>

<span class="token comment"># * npm ---- https://registry.npmjs.org/</span>
<span class="token comment">#  cnpm --- http://r.cnpmjs.org/</span>
<span class="token comment">#  taobao - https://registry.npm.taobao.org/</span>
<span class="token comment">#  nj ----- https://registry.nodejitsu.com/</span>
<span class="token comment">#  npmMirror  https://skimdb.npmjs.com/registry/</span>
<span class="token comment">#  edunpm - http://registry.enpmjs.org/</span>
</code></pre></div><h3 id="_3-测速" tabindex="-1"><a class="header-anchor" href="#_3-测速" aria-hidden="true">#</a> 3. 测速</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nrm <span class="token builtin class-name">test</span>
<span class="token comment"># * npm ---- 1837ms</span>
<span class="token comment">#  cnpm --- 1050ms</span>
<span class="token comment">#  taobao - 125ms</span>
<span class="token comment">#  nj ----- Fetch Error</span>
<span class="token comment">#  npmMirror  3027ms</span>
<span class="token comment">#  edunpm - Fetch Error</span>
</code></pre></div><h3 id="_4-切换源" tabindex="-1"><a class="header-anchor" href="#_4-切换源" aria-hidden="true">#</a> 4. 切换源</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nrm use taobao
</code></pre></div><h2 id="一些命令" tabindex="-1"><a class="header-anchor" href="#一些命令" aria-hidden="true">#</a> 一些命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看安装在全局 npm 包</span>
<span class="token function">npm</span> list <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span> <span class="token number">0</span>

<span class="token comment"># npm install 失败时强制清理</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,14)),s("ol",null,[s("li",null,[s("a",k,[n[20]||(n[20]=a("Node.js")),t(e)])])])])}const x=r(i,[["render",v],["__file","index.html.vue"]]);export{x as default};
