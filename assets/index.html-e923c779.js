import{_ as p,M as c,p as u,q as l,a1 as o,R as s,t as a,N as e}from"./framework-e3e34937.js";const r="/assets/traefik-architecture-overview-2ef4ae24.png",i={},k={href:"https://doc.traefik.io/traefik/middlewares/basicauth/",target:"_blank",rel:"noopener noreferrer"},d={href:"http://httpd.apache.org/docs/1.3/programs/htpasswd.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://doc.traefik.io/traefik/reference/static-configuration/overview/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"},q={href:"https://soulteary.com/tags/traefik.html",target:"_blank",rel:"noopener noreferrer"};function h(y,n){const t=c("ExternalLinkIcon");return u(),l("div",null,[n[10]||(n[10]=o('<h1 id="从-nginx-切换到-traefik" tabindex="-1"><a class="header-anchor" href="#从-nginx-切换到-traefik" aria-hidden="true">#</a> 从 Nginx 切换到 Traefik</h1><h2 id="为什么选择-traefik" tabindex="-1"><a class="header-anchor" href="#为什么选择-traefik" aria-hidden="true">#</a> 为什么选择 Traefik</h2><p>如果追求极致的性能那自然选择 Nginx，但对于个人而言 Traefik 也是一个良好的选择，尤其是其服务发现的能力很好的解决了前端、后端应用增加、减少时需修改配置文件的问题。</p><h2 id="traefik-的架构" tabindex="-1"><a class="header-anchor" href="#traefik-的架构" aria-hidden="true">#</a> Traefik 的架构</h2><p><img src="'+r+`" alt="traefik architecture overview"></p><p>由图所示，Traefik 会监听入口点（<code>EntryPoints</code>），路由器（<code>Routers</code>）连接到这些入口点，分析传入的请求，以查看它们是否与一组规则（<code>Rule</code>）匹配。如果匹配，则有中间件先经过中间件（<code>Middlewares</code>），再转发给对应的服务（<code>Services</code>）。</p><p>其中配置与 <code>Nginx</code> 相似，分为两部分：</p><ul><li>静态配置：<code>traefik.toml</code>，与 <code>nginx.conf</code> 类似</li><li>动态配置：<code>config/*.toml</code>，与 <code>conf.d/*.conf</code> 类似</li></ul><h2 id="以-whoami-为示例" tabindex="-1"><a class="header-anchor" href="#以-whoami-为示例" aria-hidden="true">#</a> 以 whoami 为示例</h2><p>先创建 <code>docker-compose.yml</code> 文件，静态配置（<code>traefik.toml</code>）直接记录在容器启动配置中可以带来更好的体验：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> traefik
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.4.8
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> traefik
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token comment"># 全局配置</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.checkNewVersion=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.sendAnonymousUsage=false&quot;</span>
      <span class="token comment"># ping</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--ping=true&quot;</span>
      <span class="token comment"># 日志</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.level=warn&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.format=common&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--accesslog=false&quot;</span>
      <span class="token comment"># api/dashboard</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api.insecure=true&quot;</span>
      <span class="token comment"># 入口点</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.address=:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.websecure.address=:443&quot;</span>
      <span class="token comment"># 服务发现</span>
      <span class="token comment"># docker 形式服务发现，接入 traefik network</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.watch=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.exposedbydefault=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.endpoint=unix:///var/run/docker.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.swarmMode=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.useBindPortIP=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.network=traefik&quot;</span>
      <span class="token comment"># file 形式服务发现</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.watch=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.directory=/etc/traefik/config&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.debugloggeneratedtemplate=true&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./config/<span class="token punctuation">:</span>/etc/traefik/config/<span class="token punctuation">:</span>ro
    <span class="token key atrule">labels</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>
      <span class="token comment"># dashboard http</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(\`traefik.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.service=dashboard@internal&quot;</span>
      <span class="token comment"># dashboard api</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.rule=Host(\`traefik.example.com\`) &amp;&amp; PathPrefix(\`/api\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.service=api@internal&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wget -q --spider --proxy off localhost:8080/ping || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 3s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
    <span class="token key atrule">logging</span><span class="token punctuation">:</span> 
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span> 
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>

  <span class="token key atrule">whoami</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> whoami
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik/whoami
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> traefik
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>
      <span class="token comment"># http entrypoints</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.rule=Host(\`whoami.example.com\`)&quot;</span>

<span class="token comment"># 先创建外部网卡</span>
<span class="token comment"># docker network create traefik</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><p>可为动态配置抽象一些会公共使用的，增加 <code>config.default.toml</code> 文件。</p><h3 id="_1-基础认证" tabindex="-1"><a class="header-anchor" href="#_1-基础认证" aria-hidden="true">#</a> 1. 基础认证</h3>`,13)),s("p",null,[n[1]||(n[1]=a("基础认证采取简单的 ")),s("a",k,[n[0]||(n[0]=a("BasicAuth")),e(t)]),n[2]||(n[2]=a("。"))]),s("p",null,[n[4]||(n[4]=a("利用 ")),s("a",d,[n[3]||(n[3]=a("htpasswd")),e(t)]),n[5]||(n[5]=a(" 工具生成密码："))]),n[11]||(n[11]=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>htpasswd <span class="token parameter variable">-nb</span> yourname yourpassword

<span class="token comment"># 得到</span>
<span class="token comment"># yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.</span>
</code></pre></div><p>为 <code>config/default.toml</code> 增加一项默认认证，动态修改生效，后续无需重启：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code><span class="token comment"># 中间件在 docker cli 中使用时可用 \`,\` 分隔：middlewares=m1@file,m2@file</span>

<span class="token comment"># gzip</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.gzip.compress</span><span class="token punctuation">]</span>

<span class="token comment"># basic 认证</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.default-auth-user.basicAuth</span><span class="token punctuation">]</span>
<span class="token key property">removeHeader</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">users</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.&quot;</span>
<span class="token punctuation">]</span>
</code></pre></div><p>在 <code>traefik</code> 和 <code>whoami</code> 的 <code>labels</code> 中增加：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token comment"># 省略其他</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.middlewares=default-auth-user@file&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file&quot;</span>
  <span class="token key atrule">whoami</span><span class="token punctuation">:</span>
    <span class="token comment"># 省略其他</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.middlewares=default-auth-user@file&quot;</span>
</code></pre></div><h3 id="_2-升级为-https" tabindex="-1"><a class="header-anchor" href="#_2-升级为-https" aria-hidden="true">#</a> 2. 升级为 HTTPS</h3><ol><li><p>先手动添加证书</p><p>创建证书目录并移入证书：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> ssl
<span class="token function">sudo</span> <span class="token function">mv</span> /path/to/ssl/whoami.example.com.* ./ssl
</code></pre></div><p>修改静态配置：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
   <span class="token comment"># 忽略其他</span>
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> ./ssl/<span class="token punctuation">:</span>/data/ssl/<span class="token punctuation">:</span>ro
 <span class="token key atrule">whoami</span><span class="token punctuation">:</span>
   <span class="token comment"># 忽略其他</span>
   <span class="token key atrule">labels</span><span class="token punctuation">:</span>
     <span class="token comment"># https entrypoints</span>
     <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.entrypoints=websecure&quot;</span>
     <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.rule=Host(\`whoami.example.com\`)&quot;</span>
     <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.tls=true&quot;</span>
</code></pre></div><p>修改动态配置：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code><span class="token comment"># config/tls.toml</span>
<span class="token punctuation">[</span><span class="token table class-name">tls</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token table class-name">tls.options.default</span><span class="token punctuation">]</span>
<span class="token key property">minVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS12&quot;</span>
<span class="token key property">maxVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS12&quot;</span>
<span class="token punctuation">[</span><span class="token table class-name">tls.options.test-tls13</span><span class="token punctuation">]</span>
<span class="token key property">minVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS13&quot;</span>
<span class="token key property">cipherSuites</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">tls.certificates</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token key property">certFile</span> <span class="token punctuation">=</span> <span class="token string">&quot;/data/ssl/whoami.example.com.crt&quot;</span>
<span class="token key property">keyFile</span> <span class="token punctuation">=</span> <span class="token string">&quot;/data/ssl/whoami.example.com.key&quot;</span>
</code></pre></div></li><li><p>自动获取证书</p><p>创建文件并赋权：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> acme.json
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> acme.json
</code></pre></div><p>修改静态配置文件：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token comment"># tls</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.email=acme@example.com&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.storage=acme.json&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.keyType=EC384&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token comment"># dashboard https</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(\`traefik.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.service=dashboard@internal&quot;</span>
      <span class="token comment"># dashboard api</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=websecure&quot;</span>
</code></pre></div><p>重启服务后查看网页发现 <code>https</code> 已生效，且 <code>acme.json</code> 已被写入配置。</p></li><li><p>针对单个服务</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token comment"># 省略其他</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token comment"># 移除</span>
     <span class="token comment"># - &quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token comment"># 增加</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls.certresolver=letsencrypt&quot;</span>
</code></pre></div></li></ol><h3 id="_3-重定向" tabindex="-1"><a class="header-anchor" href="#_3-重定向" aria-hidden="true">#</a> 3. 重定向</h3><p>添加中间件：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code><span class="token comment"># config/default.toml</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.https-redirect.redirectScheme</span><span class="token punctuation">]</span>
<span class="token key property">scheme</span> <span class="token punctuation">=</span> <span class="token string">&quot;https&quot;</span>
<span class="token key property">permanent</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre></div><p>使用：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token comment"># 省略其他</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token comment"># 增加</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dash-default.middlewares=https-redirect@file&quot;</span>
</code></pre></div><h3 id="_4-最终配置" tabindex="-1"><a class="header-anchor" href="#_4-最终配置" aria-hidden="true">#</a> 4. 最终配置</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> traefik
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.4.8
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> traefik
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.checkNewVersion=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.sendAnonymousUsage=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--ping=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.level=warn&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.format=common&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--accesslog=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api.insecure=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.email=acme@example.com&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.storage=acme.json&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.keyType=EC384&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.address=:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.websecure.address=:443&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.middlewares=gzip@file&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.watch=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.exposedbydefault=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.endpoint=unix:///var/run/docker.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.swarmMode=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.useBindPortIP=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.network=traefik&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.watch=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.directory=/etc/traefik/config&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.debugloggeneratedtemplate=true&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./config/<span class="token punctuation">:</span>/etc/traefik/config/<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./ssl/<span class="token punctuation">:</span>/data/ssl/<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./acme.json/<span class="token punctuation">:</span>/acme.json<span class="token punctuation">:</span>rw
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.middlewares=https-redirect@file&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(\`traefik.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.rule=Host(\`traefik.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.service=dashboard@internal&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.middlewares=default-auth-user@file&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.rule=Host(\`traefik.example.com\`) &amp;&amp; PathPrefix(\`/api\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.service=api@internal&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wget -q --spider --proxy off localhost:8080/ping || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 3s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
    <span class="token key atrule">logging</span><span class="token punctuation">:</span> 
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span> 
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>

  <span class="token key atrule">whoami</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> whoami
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik/whoami
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> traefik
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.middlewares=https-redirect@file&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.rule=Host(\`whoami.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.rule=Host(\`whoami.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.middlewares=default-auth-user@file&quot;</span>

<span class="token comment"># docker network create traefik</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,15)),s("ol",null,[s("li",null,[s("a",m,[n[6]||(n[6]=a("Traefik")),e(t)])]),s("li",null,[s("a",f,[n[7]||(n[7]=a("Traefik 配置")),e(t)])]),s("li",null,[s("a",g,[n[8]||(n[8]=a("toml")),e(t)])]),s("li",null,[s("a",q,[n[9]||(n[9]=a("苏洋 Tag#Traefik")),e(t)])])])])}const v=p(i,[["render",h],["__file","index.html.vue"]]);export{v as default};
