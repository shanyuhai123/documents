import{_ as o,M as p,p as c,q as l,Q as n,t as s,N as e,a1 as t}from"./framework-49860b1b.js";const r={},i=n("h1",{id:"使用-verdaccio-搭建私有-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-verdaccio-搭建私有-npm","aria-hidden":"true"},"#"),s(" 使用 verdaccio 搭建私有 npm")],-1),u={href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="尝试" tabindex="-1"><a class="header-anchor" href="#尝试" aria-hidden="true">#</a> 尝试</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装</span>
<span class="token function">npm</span> i verdaccio <span class="token parameter variable">-g</span>

<span class="token comment"># 启用</span>
verdaccio
</code></pre></div><p>接着在 <code>4873</code> 端口就可以看到它的页面。</p><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2>`,4),k={href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"verdaccio",-1),h=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先全局安装 pm2</span>
<span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span>

<span class="token comment"># pm2 启动 verdaccio</span>
pm2 start verdaccio

<span class="token comment"># 保存现有 pm2 数据</span>
pm2 save

<span class="token comment"># 设置开机启动</span>
pm2 startup
<span class="token comment"># 在 ubuntu 下会生成一段提示</span>
<span class="token comment"># 根据提示执行指令即可</span>

<span class="token comment"># 重启服务器验证</span>
pm2 <span class="token function">ls</span>
<span class="token comment"># 还可以在 systemd 中查看状态</span>
systemctl status pm2-shanyuhai.service
</code></pre></div><p>当然可能更好的选择是使用 <code>docker</code>，<code>verdaccio</code> 为我们提供了其使用方式。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>其使用如 <code>npm</code> 一般，利用 <code>npm adduser --registry http://localhost:4873</code> 即可以注册用户了。</p>`,4),g={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"TIP",-1),f={href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"_1-帐号限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-帐号限制","aria-hidden":"true"},"#"),s(" 1. 帐号限制")],-1),_=n("p",null,"作为私有 npm 服务，一般拒绝自行添加用户，一般由管理员分配帐号。",-1),b=n("code",null,"config.yaml",-1),w=n("code",null,"max_users: -1",-1),x=n("code",null,"npm adduser",-1),N={href:"https://www.npmjs.com/package/verdaccio-htpasswd",target:"_blank",rel:"noopener noreferrer"},$=t(`<h3 id="_2-config-文件说明" tabindex="-1"><a class="header-anchor" href="#_2-config-文件说明" aria-hidden="true">#</a> 2. config 文件说明</h3><p><code>verdaccio</code> 配置文件在 <code>~/.config/verdaccio</code> 目录下。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#</span>
<span class="token comment"># This is the default config file. It allows all users to do anything,</span>
<span class="token comment"># so don&#39;t use it on production systems.</span>
<span class="token comment">#</span>
<span class="token comment"># Look here for more config file examples:</span>
<span class="token comment"># https://github.com/verdaccio/verdaccio/tree/master/conf</span>
<span class="token comment">#</span>

<span class="token comment"># path to a directory with all packages</span>
<span class="token comment"># 发布的 npm 包的存放路径</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span> ./storage
<span class="token comment"># path to a directory with plugins to include</span>
<span class="token comment"># 启用的插件路径</span>
<span class="token key atrule">plugins</span><span class="token punctuation">:</span> ./plugins

<span class="token comment"># 配置 web 界面</span>
<span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> Verdaccio
  <span class="token comment"># comment out to disable gravatar support</span>
  <span class="token comment"># gravatar: false</span>
  <span class="token comment"># by default packages are ordercer ascendant (asc|desc)</span>
  <span class="token comment"># sort_packages: asc</span>
  <span class="token comment"># convert your UI to the dark side</span>
  <span class="token comment"># darkMode: true</span>

<span class="token comment"># translate your registry, api i18n not available yet</span>
<span class="token comment"># i18n:</span>
<span class="token comment"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span>
<span class="token comment">#   web: en-US</span>

<span class="token comment"># 用户验证</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd
    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span>
    <span class="token comment"># You can set this to -1 to disable registration.</span>
    <span class="token comment"># max_users: 1000</span>

<span class="token comment"># a list of other known repositories we can talk to</span>
<span class="token comment"># 未找到 npm 包时寻找的地址</span>
<span class="token key atrule">uplinks</span><span class="token punctuation">:</span>
  <span class="token key atrule">npmjs</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npmjs.org/

<span class="token comment"># 配置 npm 包权限</span>
<span class="token key atrule">packages</span><span class="token punctuation">:</span>
  <span class="token key atrule">&#39;@*/*&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># scoped packages</span>
    <span class="token comment"># 可访问权限</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $all <span class="token comment"># $all 表示所有人</span>
    <span class="token comment"># 可发布权限</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated <span class="token comment"># $authenticated 表示只有通过验证的人</span>
    <span class="token comment"># 可取消发布权限</span>
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># 包不存在时的代理</span>
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs

  <span class="token key atrule">&#39;**&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># allow all users (including non-authenticated users) to read and</span>
    <span class="token comment"># publish all packages</span>
    <span class="token comment">#</span>
    <span class="token comment"># you can specify usernames/groupnames (depending on your auth plugin)</span>
    <span class="token comment"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $all

    <span class="token comment"># allow all known users to publish/publish packages</span>
    <span class="token comment"># (anyone can register by default, remember?)</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated

    <span class="token comment"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span>
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs

<span class="token comment"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span>
<span class="token comment"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span>
<span class="token comment"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">keepAliveTimeout</span><span class="token punctuation">:</span> <span class="token number">60</span>

<span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
  <span class="token key atrule">audit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># log settings</span>
<span class="token key atrule">logs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> stdout<span class="token punctuation">,</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> pretty<span class="token punctuation">,</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span>
  <span class="token comment">#- {type: file, path: verdaccio.log, level: info}</span>
<span class="token comment">#experiments:</span>
<span class="token comment">#  # support for npm token command</span>
<span class="token comment">#  token: false</span>
<span class="token comment">#  # support for the new v1 search endpoint, functional by incomplete read more on ticket 1732</span>
<span class="token comment">#  search: false</span>

<span class="token comment"># This affect the web and api (not developed yet)</span>
<span class="token comment">#i18n:</span>
<span class="token comment">#web: en-US</span>
</code></pre></div><p>更新配置后：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>verdaccio <span class="token parameter variable">-c</span> config.yaml
</code></pre></div>`,5);function q(T,j){const a=p("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[s("搭建私有 NPM 的方案有几个，此处选取 "),n("a",u,[s("Verdaccio"),e(a)]),s("。")]),m,n("p",null,[s("可利用 "),n("a",k,[s("pm2"),e(a)]),s(" 使 "),d,s(" 维持在后台且开机启动服务。")]),h,n("div",g,[y,n("p",null,[n("a",f,[s("官网"),e(a)]),s(" 上有更多的细节可以查看。")])]),v,_,n("p",null,[s("可设置 "),b,s(" 中的 "),w,s(" 来禁用 "),x,s(" 指令，并使用 "),n("a",N,[s("verdaccio-htpasswd"),e(a)]),s(" 来替代。")]),$])}const I=o(r,[["render",q],["__file","use-verdaccio-to-deploy-private-npm.html.vue"]]);export{I as default};
