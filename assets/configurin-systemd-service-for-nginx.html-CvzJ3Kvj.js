import{_ as i,c as o,b as a,a as p,d as n,e as l,f as t,r as c,o as r}from"./app-DNXRdI82.js";const k={};function g(d,s){const e=c("RouteLink");return r(),o("div",null,[s[6]||(s[6]=a("h1",{id:"为-nginx-配置-systemd-服务",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#为-nginx-配置-systemd-服务"},[a("span",null,"为 Nginx 配置 systemd 服务")])],-1)),a("p",null,[s[1]||(s[1]=n("当使用")),l(e,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:t(()=>s[0]||(s[0]=[n("编译安装 Nginx")])),_:1}),s[2]||(s[2]=n(" 后，同样希望将 Nginx 加入至 systemd 进行管理，如果可以的话希望进一步对该 Nginx 进行区分。"))]),s[7]||(s[7]=p(`<h2 id="阅读" tabindex="-1"><a class="header-anchor" href="#阅读"><span>阅读</span></a></h2><p>首先需要了解一下 yum 安装的 Nginx 配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">systemctl <span class="token function">cat</span> nginx.service</span>
<span class="line"></span>
<span class="line"><span class="token comment"># /lib/systemd/system/nginx.service</span></span>
<span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx - high performance web server</span>
<span class="line"><span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target remote-fs.target nss-lookup.target</span>
<span class="line"><span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/nginx.pid</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-c</span> /etc/nginx/nginx.conf</span>
<span class="line"><span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span></span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> <span class="token environment constant">TERM</span> <span class="token variable">$MAINPID</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre></div><p>接着可以阅读下官网的<a href="https://www.nginx.com/resources/wiki/start/topics/examples/systemd/" target="_blank" rel="noopener noreferrer">示例</a>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>The NGINX HTTP and reverse proxy server</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/nginx.pid</span>
<span class="line"><span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-t</span></span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx</span>
<span class="line"><span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span></span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载"><span>1. 下载</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/src <span class="token comment"># /usr/src 常用于存放内核源码</span></span>
<span class="line"></span></code></pre></div>`,8)),a("p",null,[s[4]||(s[4]=n("接着按照")),l(e,{to:"/backend/nginx/install-nginx.html#_2-%E4%B8%8B%E8%BD%BD"},{default:t(()=>s[3]||(s[3]=[n("之前")])),_:1}),s[5]||(s[5]=n("操作。"))]),s[8]||(s[8]=p(`<h3 id="_2-编译" tabindex="-1"><a class="header-anchor" href="#_2-编译"><span>2. 编译</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./configure <span class="token parameter variable">--help</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token comment"># 查看帮助</span></span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token comment"># 指定目录</span></span>
<span class="line"><span class="token function">make</span> <span class="token comment"># 编译</span></span>
<span class="line"><span class="token function">make</span> <span class="token function">install</span> <span class="token comment"># 安装</span></span>
<span class="line"></span>
<span class="line">/usr/local/nginx <span class="token parameter variable">-V</span> <span class="token comment"># 验证 </span></span>
<span class="line"></span></code></pre></div><h3 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置"><span>3. 配置</span></a></h3><p>nginx 配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启用 pid 路径</span></span>
<span class="line"><span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf</span>
<span class="line"></span></code></pre></div><p>systemd 配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /usr/lib/systemd/system/nginx-compile.service <span class="token comment"># 此处自定义命名为 nginx-compile</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加如下内容</span></span>
<span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx<span class="token punctuation">(</span>compile<span class="token punctuation">)</span> - high performance web server</span>
<span class="line"><span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid</span>
<span class="line"><span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span></span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf</span>
<span class="line"><span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop</span>
<span class="line"><span class="token comment"># 官网示例如下，但个人使用的为上面两种，尚分不清好坏</span></span>
<span class="line"><span class="token comment"># ExecReload=/bin/kill -s HUP $MAINPID</span></span>
<span class="line"><span class="token comment"># ExecStop=/bin/kill -s QUIT $MAINPID</span></span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre></div><h3 id="_4-验证" tabindex="-1"><a class="header-anchor" href="#_4-验证"><span>4. 验证</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">systemctl status nginx-compile.service <span class="token comment"># 显示正确后即可执行 systemctl 套件</span></span>
<span class="line">systemctl start nginx-compile.service</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> nginx-compile.service</span>
<span class="line">systemctl status nginx-compile.service <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div>`,9))])}const u=i(k,[["render",g],["__file","configurin-systemd-service-for-nginx.html.vue"]]),v=JSON.parse('{"path":"/backend/nginx/configurin-systemd-service-for-nginx.html","title":"为 Nginx 配置 systemd 服务","lang":"zh-CN","frontmatter":{"description":"为 Nginx 配置 systemd 服务"},"headers":[{"level":2,"title":"阅读","slug":"阅读","link":"#阅读","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"1. 下载","slug":"_1-下载","link":"#_1-下载","children":[]},{"level":3,"title":"2. 编译","slug":"_2-编译","link":"#_2-编译","children":[]},{"level":3,"title":"3. 配置","slug":"_3-配置","link":"#_3-配置","children":[]},{"level":3,"title":"4. 验证","slug":"_4-验证","link":"#_4-验证","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":5,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/configurin-systemd-service-for-nginx.md"}');export{u as comp,v as data};
