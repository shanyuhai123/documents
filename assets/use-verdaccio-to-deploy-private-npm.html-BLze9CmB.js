import{_ as n,c as a,a as e,o as p}from"./app-DLCc4AGN.js";const t={};function l(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="使用-verdaccio-搭建私有-npm" tabindex="-1"><a class="header-anchor" href="#使用-verdaccio-搭建私有-npm"><span>使用 verdaccio 搭建私有 npm</span></a></h1><p>搭建私有 NPM 的方案有几个，此处选取 <a href="https://verdaccio.org/zh-CN/" target="_blank" rel="noopener noreferrer">Verdaccio</a>。</p><h2 id="尝试" tabindex="-1"><a class="header-anchor" href="#尝试"><span>尝试</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 全局安装</span></span>
<span class="line"><span class="token function">npm</span> i verdaccio <span class="token parameter variable">-g</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用</span></span>
<span class="line">verdaccio</span>
<span class="line"></span></code></pre></div><p>接着在 <code>4873</code> 端口就可以看到它的页面。</p><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化"><span>持久化</span></a></h2><p>可利用 <a href="https://www.npmjs.com/package/pm2" target="_blank" rel="noopener noreferrer">pm2</a> 使 <code>verdaccio</code> 维持在后台且开机启动服务。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 首先全局安装 pm2</span></span>
<span class="line"><span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pm2 启动 verdaccio</span></span>
<span class="line">pm2 start verdaccio</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保存现有 pm2 数据</span></span>
<span class="line">pm2 save</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置开机启动</span></span>
<span class="line">pm2 startup</span>
<span class="line"><span class="token comment"># 在 ubuntu 下会生成一段提示</span></span>
<span class="line"><span class="token comment"># 根据提示执行指令即可</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启服务器验证</span></span>
<span class="line">pm2 <span class="token function">ls</span></span>
<span class="line"><span class="token comment"># 还可以在 systemd 中查看状态</span></span>
<span class="line">systemctl status pm2-shanyuhai.service</span>
<span class="line"></span></code></pre></div><p>当然可能更好的选择是使用 <code>docker</code>，<code>verdaccio</code> 为我们提供了其使用方式。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>其使用如 <code>npm</code> 一般，利用 <code>npm adduser --registry http://localhost:4873</code> 即可以注册用户了。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><a href="https://verdaccio.org/zh-CN/" target="_blank" rel="noopener noreferrer">官网</a> 上有更多的细节可以查看。</p></div><h3 id="_1-帐号限制" tabindex="-1"><a class="header-anchor" href="#_1-帐号限制"><span>1. 帐号限制</span></a></h3><p>作为私有 npm 服务，一般拒绝自行添加用户，一般由管理员分配帐号。</p><p>可设置 <code>config.yaml</code> 中的 <code>max_users: -1</code> 来禁用 <code>npm adduser</code> 指令，并使用 <a href="https://www.npmjs.com/package/verdaccio-htpasswd" target="_blank" rel="noopener noreferrer">verdaccio-htpasswd</a> 来替代。</p><h3 id="_2-config-文件说明" tabindex="-1"><a class="header-anchor" href="#_2-config-文件说明"><span>2. config 文件说明</span></a></h3><p><code>verdaccio</code> 配置文件在 <code>~/.config/verdaccio</code> 目录下。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># This is the default config file. It allows all users to do anything,</span></span>
<span class="line"><span class="token comment"># so don&#39;t use it on production systems.</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Look here for more config file examples:</span></span>
<span class="line"><span class="token comment"># https://github.com/verdaccio/verdaccio/tree/master/conf</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># path to a directory with all packages</span></span>
<span class="line"><span class="token comment"># 发布的 npm 包的存放路径</span></span>
<span class="line"><span class="token key atrule">storage</span><span class="token punctuation">:</span> ./storage</span>
<span class="line"><span class="token comment"># path to a directory with plugins to include</span></span>
<span class="line"><span class="token comment"># 启用的插件路径</span></span>
<span class="line"><span class="token key atrule">plugins</span><span class="token punctuation">:</span> ./plugins</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 web 界面</span></span>
<span class="line"><span class="token key atrule">web</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">title</span><span class="token punctuation">:</span> Verdaccio</span>
<span class="line">  <span class="token comment"># comment out to disable gravatar support</span></span>
<span class="line">  <span class="token comment"># gravatar: false</span></span>
<span class="line">  <span class="token comment"># by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line">  <span class="token comment"># sort_packages: asc</span></span>
<span class="line">  <span class="token comment"># convert your UI to the dark side</span></span>
<span class="line">  <span class="token comment"># darkMode: true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># translate your registry, api i18n not available yet</span></span>
<span class="line"><span class="token comment"># i18n:</span></span>
<span class="line"><span class="token comment"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span></span>
<span class="line"><span class="token comment">#   web: en-US</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 用户验证</span></span>
<span class="line"><span class="token key atrule">auth</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd</span>
<span class="line">    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span></span>
<span class="line">    <span class="token comment"># You can set this to -1 to disable registration.</span></span>
<span class="line">    <span class="token comment"># max_users: 1000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># a list of other known repositories we can talk to</span></span>
<span class="line"><span class="token comment"># 未找到 npm 包时寻找的地址</span></span>
<span class="line"><span class="token key atrule">uplinks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">npmjs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npmjs.org/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 npm 包权限</span></span>
<span class="line"><span class="token key atrule">packages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">&#39;@*/*&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># scoped packages</span></span>
<span class="line">    <span class="token comment"># 可访问权限</span></span>
<span class="line">    <span class="token key atrule">access</span><span class="token punctuation">:</span> $all <span class="token comment"># $all 表示所有人</span></span>
<span class="line">    <span class="token comment"># 可发布权限</span></span>
<span class="line">    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated <span class="token comment"># $authenticated 表示只有通过验证的人</span></span>
<span class="line">    <span class="token comment"># 可取消发布权限</span></span>
<span class="line">    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated</span>
<span class="line">    <span class="token comment"># 包不存在时的代理</span></span>
<span class="line">    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">&#39;**&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># allow all users (including non-authenticated users) to read and</span></span>
<span class="line">    <span class="token comment"># publish all packages</span></span>
<span class="line">    <span class="token comment">#</span></span>
<span class="line">    <span class="token comment"># you can specify usernames/groupnames (depending on your auth plugin)</span></span>
<span class="line">    <span class="token comment"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line">    <span class="token key atrule">access</span><span class="token punctuation">:</span> $all</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># allow all known users to publish/publish packages</span></span>
<span class="line">    <span class="token comment"># (anyone can register by default, remember?)</span></span>
<span class="line">    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated</span>
<span class="line">    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line">    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span></span>
<span class="line"><span class="token comment"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span></span>
<span class="line"><span class="token comment"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span></span>
<span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">keepAliveTimeout</span><span class="token punctuation">:</span> <span class="token number">60</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">middlewares</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">audit</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># log settings</span></span>
<span class="line"><span class="token key atrule">logs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> stdout<span class="token punctuation">,</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> pretty<span class="token punctuation">,</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">#- {type: file, path: verdaccio.log, level: info}</span></span>
<span class="line"><span class="token comment">#experiments:</span></span>
<span class="line"><span class="token comment">#  # support for npm token command</span></span>
<span class="line"><span class="token comment">#  token: false</span></span>
<span class="line"><span class="token comment">#  # support for the new v1 search endpoint, functional by incomplete read more on ticket 1732</span></span>
<span class="line"><span class="token comment">#  search: false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># This affect the web and api (not developed yet)</span></span>
<span class="line"><span class="token comment">#i18n:</span></span>
<span class="line"><span class="token comment">#web: en-US</span></span>
<span class="line"></span></code></pre></div><p>更新配置后：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">verdaccio <span class="token parameter variable">-c</span> config.yaml</span>
<span class="line"></span></code></pre></div>`,20)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/backend/nodejs/use-verdaccio-to-deploy-private-npm.html","title":"使用 verdaccio 搭建私有 npm","lang":"zh-CN","frontmatter":{"description":"使用 verdaccio 搭建私有 npm","tags":["verdaccio"]},"headers":[{"level":2,"title":"尝试","slug":"尝试","link":"#尝试","children":[]},{"level":2,"title":"持久化","slug":"持久化","link":"#持久化","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"1. 帐号限制","slug":"_1-帐号限制","link":"#_1-帐号限制","children":[]},{"level":3,"title":"2. config 文件说明","slug":"_2-config-文件说明","link":"#_2-config-文件说明","children":[]}]}],"git":{"updatedTime":1637394685000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":4,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nodejs/use-verdaccio-to-deploy-private-npm.md"}');export{i as comp,r as data};
