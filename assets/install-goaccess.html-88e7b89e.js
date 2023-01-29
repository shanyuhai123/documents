import{_ as t,M as o,p as c,q as l,Q as s,t as a,N as e,a1 as p}from"./framework-49860b1b.js";const r={},i=s("h1",{id:"使用-goaccess-可视化查看日志",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-goaccess-可视化查看日志","aria-hidden":"true"},"#"),a(" 使用 goaccess 可视化查看日志")],-1),d={href:"https://github.com/allinurl/goaccess",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),h={href:"https://github.com/allinurl/goaccess#official-goaccess-debian--ubuntu-repository",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://deb.goaccess.io/ <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/sources.list.d/goaccess.list
<span class="token function">wget</span> <span class="token parameter variable">-O</span> - https://deb.goaccess.io/gnugpg.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> goaccess

goaccess <span class="token parameter variable">--version</span> <span class="token comment"># 验证 GoAccess - 1.3.</span>
</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-最简单的静态使用" tabindex="-1"><a class="header-anchor" href="#_1-最简单的静态使用" aria-hidden="true">#</a> 1. 最简单的静态使用</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /var/log/nginx/access.log -o report.html --log-format=COMBINED</p></div><ul><li><code>-f</code>：指定日志文件</li><li><code>-o</code>：指定报表路径</li><li><code>--log-format</code>：日志格式，不加则会报错</li></ul><p>这样就会生成一份 html 文件，可以利用 scp（推荐）、sz、rsync 下载该文件到本地后查看。</p><h3 id="_2-配合-nginx-实时更新" tabindex="-1"><a class="header-anchor" href="#_2-配合-nginx-实时更新" aria-hidden="true">#</a> 2. 配合 Nginx 实时更新</h3><p>首先需要创建一个 Nginx 配置文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> default.conf access-log.conf
<span class="token function">sudo</span> <span class="token function">mkdir</span> /var/www/html/report

<span class="token function">vim</span> access-log.conf
<span class="token comment"># 修改以下内容，自定义 xxx</span>
server_name  xxx.shanyuhai.top<span class="token punctuation">;</span>
location /report.html <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span> /var/www/html/report/report.html<span class="token punctuation">;</span>
    <span class="token comment"># 代理，限制访问</span>
    allow xxx.xxx.xxx.xxx<span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 接着前往域名提供商添加 DNS 解析</span>
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /var/log/nginx/access.log -o /var/www/html/report/report.html --log-format=COMBINED --real-time-html</p></div><p>启动服务后会提示开启了一个 websocket，验证</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ll /var/www/html/report
</code></pre></div><p>接着就可以在浏览器访问对应的地址了。</p>`,13);function k(m,f){const n=o("ExternalLinkIcon");return c(),l("div",null,[i,s("p",null,[a("虽然 Nginx 已经提供 access 日志来查阅，但是不得不说很难看清，常规的正则过滤又显得较为麻烦。于是就找到了这么一款实时网络日志分析器 "),s("a",d,[a("GoAccess"),e(n)]),a("。")]),u,s("p",null,[a("此处以 Ubuntu Server 18.04 为示例，官网说明了，如果直接安装可能安装到较为老的版本，需要"),s("a",h,[a("更新"),e(n)]),a("。")]),g])}const b=t(r,[["render",k],["__file","install-goaccess.html.vue"]]);export{b as default};
