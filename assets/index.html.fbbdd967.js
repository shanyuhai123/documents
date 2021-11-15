import{r as p,c,a as n,b as t,F as u,d as s,e,o as l}from"./app.7bb28453.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},k=n("h2",{id:"\u4E3A\u4EC0\u4E48\u9009\u62E9-traefik",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48\u9009\u62E9-traefik","aria-hidden":"true"},"#"),s(" \u4E3A\u4EC0\u4E48\u9009\u62E9 Traefik")],-1),d=n("p",null,"\u5982\u679C\u8FFD\u6C42\u6781\u81F4\u7684\u6027\u80FD\u90A3\u81EA\u7136\u9009\u62E9 Nginx\uFF0C\u4F46\u5BF9\u4E8E\u4E2A\u4EBA\u800C\u8A00 Traefik \u4E5F\u662F\u4E00\u4E2A\u826F\u597D\u7684\u9009\u62E9\uFF0C\u5C24\u5176\u662F\u5176\u670D\u52A1\u53D1\u73B0\u7684\u80FD\u529B\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u524D\u7AEF\u3001\u540E\u7AEF\u5E94\u7528\u589E\u52A0\u3001\u51CF\u5C11\u65F6\u9700\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u7684\u95EE\u9898\u3002",-1),m=n("h2",{id:"traefik-\u7684\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#traefik-\u7684\u67B6\u6784","aria-hidden":"true"},"#"),s(" Traefik \u7684\u67B6\u6784")],-1),h=["src"],f=e(`<p>\u7531\u56FE\u6240\u793A\uFF0CTraefik \u4F1A\u76D1\u542C\u5165\u53E3\u70B9\uFF08<code>EntryPoints</code>\uFF09\uFF0C\u8DEF\u7531\u5668\uFF08<code>Routers</code>\uFF09\u8FDE\u63A5\u5230\u8FD9\u4E9B\u5165\u53E3\u70B9\uFF0C\u5206\u6790\u4F20\u5165\u7684\u8BF7\u6C42\uFF0C\u4EE5\u67E5\u770B\u5B83\u4EEC\u662F\u5426\u4E0E\u4E00\u7EC4\u89C4\u5219\uFF08<code>Rule</code>\uFF09\u5339\u914D\u3002\u5982\u679C\u5339\u914D\uFF0C\u5219\u6709\u4E2D\u95F4\u4EF6\u5148\u7ECF\u8FC7\u4E2D\u95F4\u4EF6\uFF08<code>Middlewares</code>\uFF09\uFF0C\u518D\u8F6C\u53D1\u7ED9\u5BF9\u5E94\u7684\u670D\u52A1\uFF08<code>Services</code>\uFF09\u3002</p><p>\u5176\u4E2D\u914D\u7F6E\u4E0E <code>Nginx</code> \u76F8\u4F3C\uFF0C\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p><ul><li>\u9759\u6001\u914D\u7F6E\uFF1A<code>traefik.toml</code>\uFF0C\u4E0E <code>nginx.conf</code> \u7C7B\u4F3C</li><li>\u52A8\u6001\u914D\u7F6E\uFF1A<code>config/*.toml</code>\uFF0C\u4E0E <code> conf.d/*.conf</code> \u7C7B\u4F3C</li></ul><h2 id="\u4EE5-whoami-\u4E3A\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE5-whoami-\u4E3A\u793A\u4F8B" aria-hidden="true">#</a> \u4EE5 whoami \u4E3A\u793A\u4F8B</h2><p>\u5148\u521B\u5EFA <code>docker-compose.yml</code> \u6587\u4EF6\uFF0C\u9759\u6001\u914D\u7F6E\uFF08<code>traefik.toml</code>\uFF09\u76F4\u63A5\u8BB0\u5F55\u5728\u5BB9\u5668\u542F\u52A8\u914D\u7F6E\u4E2D\u53EF\u4EE5\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

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
      <span class="token comment"># \u5168\u5C40\u914D\u7F6E</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.checkNewVersion=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--global.sendAnonymousUsage=false&quot;</span>
      <span class="token comment"># ping</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--ping=true&quot;</span>
      <span class="token comment"># \u65E5\u5FD7</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.level=warn&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--log.format=common&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--accesslog=false&quot;</span>
      <span class="token comment"># api/dashboard</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--api.insecure=true&quot;</span>
      <span class="token comment"># \u5165\u53E3\u70B9</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.address=:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.websecure.address=:443&quot;</span>
      <span class="token comment"># \u670D\u52A1\u53D1\u73B0</span>
      <span class="token comment"># docker \u5F62\u5F0F\u670D\u52A1\u53D1\u73B0\uFF0C\u63A5\u5165 traefik network</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.watch=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.exposedbydefault=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.endpoint=unix:///var/run/docker.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.swarmMode=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.useBindPortIP=false&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.network=traefik&quot;</span>
      <span class="token comment"># file \u5F62\u5F0F\u670D\u52A1\u53D1\u73B0</span>
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

<span class="token comment"># \u5148\u521B\u5EFA\u5916\u90E8\u7F51\u5361</span>
<span class="token comment"># docker network create traefik</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><p>\u53EF\u4E3A\u52A8\u6001\u914D\u7F6E\u62BD\u8C61\u4E00\u4E9B\u4F1A\u516C\u5171\u4F7F\u7528\u7684\uFF0C\u589E\u52A0 <code>config.default.toml</code> \u6587\u4EF6\u3002</p><h3 id="_1-\u57FA\u7840\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u8BA4\u8BC1" aria-hidden="true">#</a> 1. \u57FA\u7840\u8BA4\u8BC1</h3>`,8),g=s("\u57FA\u7840\u8BA4\u8BC1\u91C7\u53D6\u7B80\u5355\u7684 "),q={href:"https://doc.traefik.io/traefik/middlewares/basicauth/",target:"_blank",rel:"noopener noreferrer"},y=s("BasicAuth"),b=s("\u3002"),_=s("\u5229\u7528 "),w={href:"http://httpd.apache.org/docs/1.3/programs/htpasswd.html",target:"_blank",rel:"noopener noreferrer"},v=s("htpasswd"),x=s(" \u5DE5\u5177\u751F\u6210\u5BC6\u7801\uFF1A"),H=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code>htpasswd -nb yourname yourpassword

<span class="token comment"># \u5F97\u5230</span>
<span class="token comment"># yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.</span>
</code></pre></div><p>\u4E3A <code>config/default.toml</code> \u589E\u52A0\u4E00\u9879\u9ED8\u8BA4\u8BA4\u8BC1\uFF0C\u52A8\u6001\u4FEE\u6539\u751F\u6548\uFF0C\u540E\u7EED\u65E0\u9700\u91CD\u542F\uFF1A</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># \u4E2D\u95F4\u4EF6\u5728 docker cli \u4E2D\u4F7F\u7528\u65F6\u53EF\u7528 \`,\` \u5206\u9694\uFF1Amiddlewares=m1@file,m2@file</span>

<span class="token comment"># gzip</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.gzip.compress</span><span class="token punctuation">]</span>

<span class="token comment"># basic \u8BA4\u8BC1</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.default-auth-user.basicAuth</span><span class="token punctuation">]</span>
<span class="token key property">removeHeader</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">users</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
	<span class="token string">&quot;yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.&quot;</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u5728 <code>traefik</code> \u548C <code>whoami</code> \u7684 <code>labels</code> \u4E2D\u589E\u52A0\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
	<span class="token key atrule">traefik</span><span class="token punctuation">:</span>
		<span class="token comment"># \u7701\u7565\u5176\u4ED6</span>
		<span class="token key atrule">labels</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.middlewares=default-auth-user@file&quot;</span>
			<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file&quot;</span>
	<span class="token key atrule">whoami</span><span class="token punctuation">:</span>
	  <span class="token comment"># \u7701\u7565\u5176\u4ED6</span>
		<span class="token key atrule">labels</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.middlewares=default-auth-user@file&quot;</span>
</code></pre></div><h3 id="_2-\u5347\u7EA7\u4E3A-https" tabindex="-1"><a class="header-anchor" href="#_2-\u5347\u7EA7\u4E3A-https" aria-hidden="true">#</a> 2. \u5347\u7EA7\u4E3A HTTPS</h3><ol><li><p>\u5148\u624B\u52A8\u6DFB\u52A0\u8BC1\u4E66</p><p>\u521B\u5EFA\u8BC1\u4E66\u76EE\u5F55\u5E76\u79FB\u5165\u8BC1\u4E66\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> ssl
<span class="token function">sudo</span> <span class="token function">mv</span> /path/to/ssl/whoami.example.com.* ./ssl
</code></pre></div><p>\u4FEE\u6539\u9759\u6001\u914D\u7F6E\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
	<span class="token key atrule">traefik</span><span class="token punctuation">:</span>
	  <span class="token comment"># \u5FFD\u7565\u5176\u4ED6</span>
		<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> ./ssl/<span class="token punctuation">:</span>/data/ssl/<span class="token punctuation">:</span>ro
	<span class="token key atrule">whoami</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5FFD\u7565\u5176\u4ED6</span>
		<span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token comment"># https entrypoints</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.rule=Host(\`whoami.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.tls=true&quot;</span>
</code></pre></div><p>\u4FEE\u6539\u52A8\u6001\u914D\u7F6E\uFF1A</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># config/tls.toml</span>
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
</code></pre></div></li><li><p>\u81EA\u52A8\u83B7\u53D6\u8BC1\u4E66</p><p>\u521B\u5EFA\u6587\u4EF6\u5E76\u8D4B\u6743\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> acme.json
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> acme.json
</code></pre></div><p>\u4FEE\u6539\u9759\u6001\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

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
</code></pre></div><p>\u91CD\u542F\u670D\u52A1\u540E\u67E5\u770B\u7F51\u9875\u53D1\u73B0 <code>https</code> \u5DF2\u751F\u6548\uFF0C\u4E14 <code>acme.json</code> \u5DF2\u88AB\u5199\u5165\u914D\u7F6E\u3002</p></li><li><p>\u9488\u5BF9\u5355\u4E2A\u670D\u52A1</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
  	<span class="token comment"># \u7701\u7565\u5176\u4ED6</span>
  	<span class="token key atrule">command</span><span class="token punctuation">:</span>
  		<span class="token comment"># \u79FB\u9664</span>
     <span class="token comment"># - &quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    	<span class="token comment"># \u589E\u52A0</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls.certresolver=letsencrypt&quot;</span>
</code></pre></div></li></ol><h3 id="_3-\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u5B9A\u5411" aria-hidden="true">#</a> 3. \u91CD\u5B9A\u5411</h3><p>\u6DFB\u52A0\u4E2D\u95F4\u4EF6\uFF1A</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># config/default.toml</span>
<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.https-redirect.redirectScheme</span><span class="token punctuation">]</span>
<span class="token key property">scheme</span> <span class="token punctuation">=</span> <span class="token string">&quot;https&quot;</span>
<span class="token key property">permanent</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
  	<span class="token comment"># \u7701\u7565\u5176\u4ED6</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    	<span class="token comment"># \u589E\u52A0</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dash-default.middlewares=https-redirect@file&quot;</span>
</code></pre></div><h3 id="_4-\u6700\u7EC8\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-\u6700\u7EC8\u914D\u7F6E" aria-hidden="true">#</a> 4. \u6700\u7EC8\u914D\u7F6E</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

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
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,15),S={href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"},T=s("Traefik"),E={href:"https://doc.traefik.io/traefik/reference/static-configuration/overview/",target:"_blank",rel:"noopener noreferrer"},C=s("Traefik \u914D\u7F6E"),A={href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"},P=s("toml"),L={href:"https://soulteary.com/tags/traefik.html",target:"_blank",rel:"noopener noreferrer"},V=s("\u82CF\u6D0B Tag#Traefik");function j(o,z){const a=p("OutboundLink");return l(),c(u,null,[k,d,m,n("img",{src:o.$withBase("/backend/traefik-architecture-overview.png"),alt:"https://traefik.tech/assets/img/architecture-overview.png"},null,8,h),f,n("p",null,[g,n("a",q,[y,t(a)]),b]),n("p",null,[_,n("a",w,[v,t(a)]),x]),H,n("ol",null,[n("li",null,[n("a",S,[T,t(a)])]),n("li",null,[n("a",E,[C,t(a)])]),n("li",null,[n("a",A,[P,t(a)])]),n("li",null,[n("a",L,[V,t(a)])])])],64)}var N=r(i,[["render",j]]);export{N as default};
