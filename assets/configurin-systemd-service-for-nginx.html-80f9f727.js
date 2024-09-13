import{_ as i,M as o,p as c,q as k,R as s,t as a,N as e,V as l,a1 as t}from"./framework-e3e34937.js";const g={},u={href:"https://www.nginx.com/resources/wiki/start/topics/examples/systemd/",target:"_blank",rel:"noopener noreferrer"};function d(m,n){const p=o("RouterLink"),r=o("ExternalLinkIcon");return c(),k("div",null,[n[9]||(n[9]=s("h1",{id:"为-nginx-配置-systemd-服务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#为-nginx-配置-systemd-服务","aria-hidden":"true"},"#"),a(" 为 Nginx 配置 systemd 服务")],-1)),s("p",null,[n[1]||(n[1]=a("当使用")),e(p,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:l(()=>n[0]||(n[0]=[a("编译安装 Nginx")])),_:1}),n[2]||(n[2]=a(" 后，同样希望将 Nginx 加入至 systemd 进行管理，如果可以的话希望进一步对该 Nginx 进行区分。"))]),n[10]||(n[10]=t(`<h2 id="阅读" tabindex="-1"><a class="header-anchor" href="#阅读" aria-hidden="true">#</a> 阅读</h2><p>首先需要了解一下 yum 安装的 Nginx 配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token function">cat</span> nginx.service

<span class="token comment"># /lib/systemd/system/nginx.service</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx - high performance web server
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target remote-fs.target nss-lookup.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/nginx.pid
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-c</span> /etc/nginx/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> <span class="token environment constant">TERM</span> <span class="token variable">$MAINPID</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div>`,3)),s("p",null,[n[4]||(n[4]=a("接着可以阅读下官网的")),s("a",u,[n[3]||(n[3]=a("示例")),e(r)]),n[5]||(n[5]=a("："))]),n[11]||(n[11]=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>The NGINX HTTP and reverse proxy server
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1. 下载</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src <span class="token comment"># /usr/src 常用于存放内核源码</span>
</code></pre></div>`,4)),s("p",null,[n[7]||(n[7]=a("接着按照")),e(p,{to:"/backend/nginx/install-nginx.html#_2-%E4%B8%8B%E8%BD%BD"},{default:l(()=>n[6]||(n[6]=[a("之前")])),_:1}),n[8]||(n[8]=a("操作。"))]),n[12]||(n[12]=t(`<h3 id="_2-编译" tabindex="-1"><a class="header-anchor" href="#_2-编译" aria-hidden="true">#</a> 2. 编译</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--help</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token comment"># 查看帮助</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token comment"># 指定目录</span>
<span class="token function">make</span> <span class="token comment"># 编译</span>
<span class="token function">make</span> <span class="token function">install</span> <span class="token comment"># 安装</span>

/usr/local/nginx <span class="token parameter variable">-V</span> <span class="token comment"># 验证 </span>
</code></pre></div><h3 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h3><p>nginx 配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启用 pid 路径</span>
<span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf
</code></pre></div><p>systemd 配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/nginx-compile.service <span class="token comment"># 此处自定义命名为 nginx-compile</span>

<span class="token comment"># 添加如下内容</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx<span class="token punctuation">(</span>compile<span class="token punctuation">)</span> - high performance web server
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 官网示例如下，但个人使用的为上面两种，尚分不清好坏</span>
<span class="token comment"># ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="token comment"># ExecStop=/bin/kill -s QUIT $MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><h3 id="_4-验证" tabindex="-1"><a class="header-anchor" href="#_4-验证" aria-hidden="true">#</a> 4. 验证</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl status nginx-compile.service <span class="token comment"># 显示正确后即可执行 systemctl 套件</span>
systemctl start nginx-compile.service
systemctl <span class="token builtin class-name">enable</span> nginx-compile.service
systemctl status nginx-compile.service <span class="token comment"># 验证</span>
</code></pre></div>`,9))])}const x=i(g,[["render",d],["__file","configurin-systemd-service-for-nginx.html.vue"]]);export{x as default};
