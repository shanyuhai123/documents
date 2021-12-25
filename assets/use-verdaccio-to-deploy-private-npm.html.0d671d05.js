import{r as o,c,a as n,b as e,F as p,d as s,e as t,o as l}from"./app.fdddc89c.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},u=n("h1",{id:"\u4F7F\u7528-verdaccio-\u642D\u5EFA\u79C1\u6709-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-verdaccio-\u642D\u5EFA\u79C1\u6709-npm","aria-hidden":"true"},"#"),s(" \u4F7F\u7528 verdaccio \u642D\u5EFA\u79C1\u6709 npm")],-1),m=s("\u642D\u5EFA\u79C1\u6709 NPM \u7684\u65B9\u6848\u6709\u51E0\u4E2A\uFF0C\u6B64\u5904\u9009\u53D6 "),k={href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},d=s("Verdaccio"),h=s("\u3002"),_=t(`<h2 id="\u5C1D\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5C1D\u8BD5" aria-hidden="true">#</a> \u5C1D\u8BD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> i verdaccio -g

<span class="token comment"># \u542F\u7528</span>
verdaccio
</code></pre></div><p>\u63A5\u7740\u5728 <code>4873</code> \u7AEF\u53E3\u5C31\u53EF\u4EE5\u770B\u5230\u5B83\u7684\u9875\u9762\u3002</p><h2 id="\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316" aria-hidden="true">#</a> \u6301\u4E45\u5316</h2>`,4),g=s("\u53EF\u5229\u7528 "),y={href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"},f=s("pm2"),v=s(" \u4F7F "),b=n("code",null,"verdaccio",-1),w=s(" \u7EF4\u6301\u5728\u540E\u53F0\u4E14\u5F00\u673A\u542F\u52A8\u670D\u52A1\u3002"),x=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9996\u5148\u5168\u5C40\u5B89\u88C5 pm2</span>
<span class="token function">npm</span> i pm2 -g

<span class="token comment"># pm2 \u542F\u52A8 verdaccio</span>
pm2 start verdaccio

<span class="token comment"># \u4FDD\u5B58\u73B0\u6709 pm2 \u6570\u636E</span>
pm2 save

<span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</span>
pm2 startup
<span class="token comment"># \u5728 ubuntu \u4E0B\u4F1A\u751F\u6210\u4E00\u6BB5\u63D0\u793A</span>
<span class="token comment"># \u6839\u636E\u63D0\u793A\u6267\u884C\u6307\u4EE4\u5373\u53EF</span>

<span class="token comment"># \u91CD\u542F\u670D\u52A1\u5668\u9A8C\u8BC1</span>
pm2 <span class="token function">ls</span>
<span class="token comment"># \u8FD8\u53EF\u4EE5\u5728 systemd \u4E2D\u67E5\u770B\u72B6\u6001</span>
systemctl status pm2-shanyuhai.service
</code></pre></div><p>\u5F53\u7136\u53EF\u80FD\u66F4\u597D\u7684\u9009\u62E9\u662F\u4F7F\u7528 <code>docker</code>\uFF0C<code>verdaccio</code> \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5176\u4F7F\u7528\u65B9\u5F0F\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5176\u4F7F\u7528\u5982 <code>npm</code> \u4E00\u822C\uFF0C\u5229\u7528 <code>npm adduser --registry http://localhost:4873</code> \u5373\u53EF\u4EE5\u6CE8\u518C\u7528\u6237\u4E86\u3002</p>`,4),$={class:"custom-container tip"},j=n("p",{class:"custom-container-title"},"TIP",-1),N={href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},q=s("\u5B98\u7F51"),T=s(" \u4E0A\u6709\u66F4\u591A\u7684\u7EC6\u8282\u53EF\u4EE5\u67E5\u770B\u3002"),V=n("h3",{id:"_1-\u5E10\u53F7\u9650\u5236",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5E10\u53F7\u9650\u5236","aria-hidden":"true"},"#"),s(" 1. \u5E10\u53F7\u9650\u5236")],-1),O=n("p",null,"\u4F5C\u4E3A\u79C1\u6709 npm \u670D\u52A1\uFF0C\u4E00\u822C\u62D2\u7EDD\u81EA\u884C\u6DFB\u52A0\u7528\u6237\uFF0C\u4E00\u822C\u7531\u7BA1\u7406\u5458\u5206\u914D\u5E10\u53F7\u3002",-1),P=s("\u53EF\u8BBE\u7F6E "),S=n("code",null,"config.yaml",-1),U=s(" \u4E2D\u7684 "),A=n("code",null,"max_users: -1",-1),B=s(" \u6765\u7981\u7528 "),C=n("code",null,"npm adduser",-1),I=s(" \u6307\u4EE4\uFF0C\u5E76\u4F7F\u7528 "),L={href:"https://www.npmjs.com/package/verdaccio-htpasswd",target:"_blank",rel:"noopener noreferrer"},M=s("verdaccio-htpasswd"),z=s(" \u6765\u66FF\u4EE3\u3002"),D=t(`<h3 id="_2-config-\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-config-\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> 2. config \u6587\u4EF6\u8BF4\u660E</h3><p><code>verdaccio</code> \u914D\u7F6E\u6587\u4EF6\u5728 <code>~/.config/verdaccio</code> \u76EE\u5F55\u4E0B\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment">#</span>
<span class="token comment"># This is the default config file. It allows all users to do anything,</span>
<span class="token comment"># so don&#39;t use it on production systems.</span>
<span class="token comment">#</span>
<span class="token comment"># Look here for more config file examples:</span>
<span class="token comment"># https://github.com/verdaccio/verdaccio/tree/master/conf</span>
<span class="token comment">#</span>

<span class="token comment"># path to a directory with all packages</span>
<span class="token comment"># \u53D1\u5E03\u7684 npm \u5305\u7684\u5B58\u653E\u8DEF\u5F84</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span> ./storage
<span class="token comment"># path to a directory with plugins to include</span>
<span class="token comment"># \u542F\u7528\u7684\u63D2\u4EF6\u8DEF\u5F84</span>
<span class="token key atrule">plugins</span><span class="token punctuation">:</span> ./plugins

<span class="token comment"># \u914D\u7F6E web \u754C\u9762</span>
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

<span class="token comment"># \u7528\u6237\u9A8C\u8BC1</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd
    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span>
    <span class="token comment"># You can set this to -1 to disable registration.</span>
    <span class="token comment"># max_users: 1000</span>

<span class="token comment"># a list of other known repositories we can talk to</span>
<span class="token comment"># \u672A\u627E\u5230 npm \u5305\u65F6\u5BFB\u627E\u7684\u5730\u5740</span>
<span class="token key atrule">uplinks</span><span class="token punctuation">:</span>
  <span class="token key atrule">npmjs</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npmjs.org/

<span class="token comment"># \u914D\u7F6E npm \u5305\u6743\u9650</span>
<span class="token key atrule">packages</span><span class="token punctuation">:</span>
  <span class="token key atrule">&#39;@*/*&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># scoped packages</span>
    <span class="token comment"># \u53EF\u8BBF\u95EE\u6743\u9650</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $all <span class="token comment"># $all \u8868\u793A\u6240\u6709\u4EBA</span>
    <span class="token comment"># \u53EF\u53D1\u5E03\u6743\u9650</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated <span class="token comment"># $authenticated \u8868\u793A\u53EA\u6709\u901A\u8FC7\u9A8C\u8BC1\u7684\u4EBA</span>
    <span class="token comment"># \u53EF\u53D6\u6D88\u53D1\u5E03\u6743\u9650</span>
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># \u5305\u4E0D\u5B58\u5728\u65F6\u7684\u4EE3\u7406</span>
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
</code></pre></div><p>\u66F4\u65B0\u914D\u7F6E\u540E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>verdaccio -c config.yaml
</code></pre></div>`,5);function F(R,Y){const a=o("OutboundLink");return l(),c(p,null,[u,n("p",null,[m,n("a",k,[d,e(a)]),h]),_,n("p",null,[g,n("a",y,[f,e(a)]),v,b,w]),x,n("div",$,[j,n("p",null,[n("a",N,[q,e(a)]),T])]),V,O,n("p",null,[P,S,U,A,B,C,I,n("a",L,[M,e(a)]),z]),D],64)}var K=i(r,[["render",F]]);export{K as default};
