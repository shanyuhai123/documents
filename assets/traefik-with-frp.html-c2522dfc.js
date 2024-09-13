import{_ as o,M as c,p as u,q as r,a1 as p,R as s,t as a,N as e}from"./framework-e3e34937.js";const l={},i={href:"https://docs.shanyuhai.top/backend/traefik/quick-start.html#%E6%9C%80%E7%BB%88%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},k={href:"https://soulteary.com/2020/10/04/frp-in-docker.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://hexo.aufomm.com/2020/04/06/Traefik-2-Request-Multiple-domain-and-Wildcard-SSL-certificates/",target:"_blank",rel:"noopener noreferrer"};function m(f,n){const t=c("ExternalLinkIcon");return u(),r("div",null,[n[5]||(n[5]=p(`<h1 id="traefik-代理-frp-服务" tabindex="-1"><a class="header-anchor" href="#traefik-代理-frp-服务" aria-hidden="true">#</a> Traefik 代理 frp 服务</h1><p>期望代理域名为 <code>*.frp.example.com</code>。</p><h2 id="frp-配置" tabindex="-1"><a class="header-anchor" href="#frp-配置" aria-hidden="true">#</a> FRP 配置</h2><blockquote><p>此处不探讨如何配置 frpc（客户端）。</p></blockquote><h3 id="frps-ini" tabindex="-1"><a class="header-anchor" href="#frps-ini" aria-hidden="true">#</a> frps.ini</h3><p>创建 <code>frps.ini</code> 文件：</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_PORT }}</span>
<span class="token key attr-name">token</span>     <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_TOKEN }}</span>

<span class="token comment"># subdomain</span>
<span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_VHOST_HTTP_PORT }}</span>
<span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SUBDOMAIN_HOST }}</span>
</code></pre></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker compose</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">frps</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> frps
    <span class="token key atrule">image</span><span class="token punctuation">:</span> fatedier/frps<span class="token punctuation">:</span>v0.36.2
    <span class="token key atrule">command</span><span class="token punctuation">:</span> frps <span class="token punctuation">-</span>c /app/frps.ini
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> traefik
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># frps server</span>
      <span class="token punctuation">-</span> 7000<span class="token punctuation">:</span><span class="token number">7000</span>
      <span class="token comment"># vhost</span>
      <span class="token punctuation">-</span> <span class="token number">80</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./frps.ini<span class="token punctuation">:</span>/app/frps.ini<span class="token punctuation">:</span>ro
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> FRP_SERVER_PORT=24622
      <span class="token punctuation">-</span> FRP_SERVER_TOKEN=tencentcloud_frp_token
      <span class="token punctuation">-</span> FRP_VHOST_HTTP_PORT=80
      <span class="token punctuation">-</span> FRP_SUBDOMAIN_HOST=frp.example.com
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>
      <span class="token comment"># http entrypoints</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.entrypoints=web&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.rule=HostRegexp(\`{subdomain:[a-z]+}.frp.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp.middlewares=https-redirect@file&quot;</span>
      <span class="token comment"># https entrypoints</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.entrypoints=websecure&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.rule=HostRegexp(\`{subdomain:[a-z]+}.frp.example.com\`)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls=true&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.certresolver=le-dns&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.domains[0].main=frp.example.com&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.tls.domains[0].sans=*.frp.example.com&quot;</span>
      <span class="token comment"># 指向 80 vhost</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.service=frp-proxy&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.frp-proxy.loadbalancer.server.port=80&quot;</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>

<span class="token comment"># 先创建外部网卡</span>
<span class="token comment"># docker network create traefik</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h2 id="traefik-配置" tabindex="-1"><a class="header-anchor" href="#traefik-配置" aria-hidden="true">#</a> Traefik 配置</h2><p>创建文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> acme-dns
</code></pre></div>`,12)),s("p",null,[n[1]||(n[1]=a("在 ")),s("a",i,[n[0]||(n[0]=a("最终配置")),e(t)]),n[2]||(n[2]=a(" 上增加："))]),n[6]||(n[6]=p(`<div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># 省略其他</span>
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ACME_DNS_API_BASE=https<span class="token punctuation">:</span>//auth.acme<span class="token punctuation">-</span>dns.io
      <span class="token punctuation">-</span> ACME_DNS_STORAGE_PATH=/acme<span class="token punctuation">-</span>dns
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token comment"># tls dns</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.email=acme@example.com&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.storage=acme.json&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.keyType=EC384&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.le-dns.acme.dnsChallenge.provider=acme-dns&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./acme<span class="token punctuation">-</span>dns<span class="token punctuation">:</span>/acme<span class="token punctuation">-</span>dns<span class="token punctuation">:</span>rw
</code></pre></div><p>第一次执行 <code>docker-compose up</code> 后可以获取 <code>acme-dns</code> 信息：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>{
    &quot;frp.example.com&quot;: {
        &quot;FullDomain&quot;: &quot;187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io&quot;,
        &quot;SubDomain&quot;: &quot;c9866200-2abb-45c6-82e6-396adcd1f625&quot;,
        &quot;Username&quot;: &quot;9b9fc433-c218-4c61-b37e-1da73551c538&quot;,
        &quot;Password&quot;: &quot;MPhWrfzZwgeZKyGK3cYPLIdgllNbmF5tFutacpFF&quot;
    }
}
</code></pre></div><p>登录到你的 DNS 帐号，创建一条 CNAME 记录 <code>_acme-challenge.frp</code> 指向 <code>187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io</code>，再次执行 <code>docker-compose up</code>。</p><p>稍后可在 <code>acme.json</code> 文件中找到对应的记录，即证书签发成功。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,6)),s("ul",null,[s("li",null,[s("a",k,[n[3]||(n[3]=a("容器化 FRP 使用方案")),e(t)])]),s("li",null,[s("a",d,[n[4]||(n[4]=a("Traefik 2 Request Multiple domain and Wildcard SSL certificates")),e(t)])])])])}const q=o(l,[["render",m],["__file","traefik-with-frp.html.vue"]]);export{q as default};
