import{_ as n,c as a,a as e,o as p}from"./app-CQrWi6O2.js";const t={};function l(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="traefik-代理-frp-服务" tabindex="-1"><a class="header-anchor" href="#traefik-代理-frp-服务"><span>Traefik 代理 frp 服务</span></a></h1><p>期望代理域名为 <code>*.frp.example.com</code>。</p><h2 id="frp-配置" tabindex="-1"><a class="header-anchor" href="#frp-配置"><span>FRP 配置</span></a></h2><blockquote><p>此处不探讨如何配置 frpc（客户端）。</p></blockquote><h3 id="frps-ini" tabindex="-1"><a class="header-anchor" href="#frps-ini"><span>frps.ini</span></a></h3><p>创建 <code>frps.ini</code> 文件：</p><div class="language-ini" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_PORT }}</span></span>
<span class="line"><span class="token key attr-name">token</span>     <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_TOKEN }}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># subdomain</span></span>
<span class="line"><span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_VHOST_HTTP_PORT }}</span></span>
<span class="line"><span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SUBDOMAIN_HOST }}</span></span>
<span class="line"></span></code></pre></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>docker compose</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">frps</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> frps</span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> fatedier/frps<span class="token punctuation">:</span>v0.36.2</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> frps <span class="token punctuation">-</span>c /app/frps.ini</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> traefik</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># frps server</span></span>
<span class="line">      <span class="token punctuation">-</span> 7000<span class="token punctuation">:</span><span class="token number">7000</span></span>
<span class="line">      <span class="token comment"># vhost</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./frps.ini<span class="token punctuation">:</span>/app/frps.ini<span class="token punctuation">:</span>ro</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> FRP_SERVER_PORT=24622</span>
<span class="line">      <span class="token punctuation">-</span> FRP_SERVER_TOKEN=tencentcloud_frp_token</span>
<span class="line">      <span class="token punctuation">-</span> FRP_VHOST_HTTP_PORT=80</span>
<span class="line">      <span class="token punctuation">-</span> FRP_SUBDOMAIN_HOST=frp.example.com</span>
<span class="line">    <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span></span>
<span class="line">      <span class="token comment"># http entrypoints</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.entrypoints=web&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.rule=HostRegexp(\`{subdomain:[a-z]+}.frp.example.com\`)&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.middlewares=https-redirect@file&quot;</span></span>
<span class="line">      <span class="token comment"># https entrypoints</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.entrypoints=websecure&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.rule=HostRegexp(\`{subdomain:[a-z]+}.frp.example.com\`)&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls=true&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.certresolver=le-dns&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.domains[0].main=frp.example.com&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.domains[0].sans=*.frp.example.com&quot;</span></span>
<span class="line">      <span class="token comment"># 指向 80 vhost</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.service=frp-proxy&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.frp-proxy.loadbalancer.server.port=80&quot;</span></span>
<span class="line">    <span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span></span>
<span class="line">      <span class="token key atrule">options</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 先创建外部网卡</span></span>
<span class="line"><span class="token comment"># docker network create traefik</span></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">traefik</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre></div><h2 id="traefik-配置" tabindex="-1"><a class="header-anchor" href="#traefik-配置"><span>Traefik 配置</span></a></h2><p>创建文件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">touch</span> acme-dns</span>
<span class="line"></span></code></pre></div><p>在 <a href="https://docs.shanyuhai.top/backend/traefik/quick-start.html#%E6%9C%80%E7%BB%88%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">最终配置</a> 上增加：</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 省略其他</span></span>
<span class="line">  <span class="token key atrule">traefik</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ACME_DNS_API_BASE=https<span class="token punctuation">:</span>//auth.acme<span class="token punctuation">-</span>dns.io</span>
<span class="line">      <span class="token punctuation">-</span> ACME_DNS_STORAGE_PATH=/acme<span class="token punctuation">-</span>dns</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># tls dns</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.email=acme@example.com&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.storage=acme.json&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.keyType=EC384&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.dnsChallenge.provider=acme-dns&quot;</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./acme<span class="token punctuation">-</span>dns<span class="token punctuation">:</span>/acme<span class="token punctuation">-</span>dns<span class="token punctuation">:</span>rw</span>
<span class="line"></span></code></pre></div><p>第一次执行 <code>docker-compose up</code> 后可以获取 <code>acme-dns</code> 信息：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;frp.example.com&quot;: {</span>
<span class="line">        &quot;FullDomain&quot;: &quot;187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io&quot;,</span>
<span class="line">        &quot;SubDomain&quot;: &quot;c9866200-2abb-45c6-82e6-396adcd1f625&quot;,</span>
<span class="line">        &quot;Username&quot;: &quot;9b9fc433-c218-4c61-b37e-1da73551c538&quot;,</span>
<span class="line">        &quot;Password&quot;: &quot;MPhWrfzZwgeZKyGK3cYPLIdgllNbmF5tFutacpFF&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><p>登录到你的 DNS 帐号，创建一条 CNAME 记录 <code>_acme-challenge.frp</code> 指向 <code>187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io</code>，再次执行 <code>docker-compose up</code>。</p><p>稍后可在 <code>acme.json</code> 文件中找到对应的记录，即证书签发成功。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://soulteary.com/2020/10/04/frp-in-docker.html" target="_blank" rel="noopener noreferrer">容器化 FRP 使用方案</a></li><li><a href="https://hexo.aufomm.com/2020/04/06/Traefik-2-Request-Multiple-domain-and-Wildcard-SSL-certificates/" target="_blank" rel="noopener noreferrer">Traefik 2 Request Multiple domain and Wildcard SSL certificates</a></li></ul>`,20)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/backend/traefik/traefik-with-frp.html","title":"Traefik 代理 frp 服务","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"FRP 配置","slug":"frp-配置","link":"#frp-配置","children":[{"level":3,"title":"frps.ini","slug":"frps-ini","link":"#frps-ini","children":[]},{"level":3,"title":"docker compose","slug":"docker-compose","link":"#docker-compose","children":[]}]},{"level":2,"title":"Traefik 配置","slug":"traefik-配置","link":"#traefik-配置","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1637395098000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/traefik/traefik-with-frp.md"}');export{i as comp,r as data};
