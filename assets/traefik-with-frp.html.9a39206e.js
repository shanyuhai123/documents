import{r as p,c as o,a as n,b as t,F as c,e,d as s,o as u}from"./app.aeebbc6c.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const l={},i=e(`<h1 id="traefik-\u4EE3\u7406-frp-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#traefik-\u4EE3\u7406-frp-\u670D\u52A1" aria-hidden="true">#</a> Traefik \u4EE3\u7406 frp \u670D\u52A1</h1><p>\u671F\u671B\u4EE3\u7406\u57DF\u540D\u4E3A <code>*.frp.example.com</code>\u3002</p><h2 id="frp-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#frp-\u914D\u7F6E" aria-hidden="true">#</a> FRP \u914D\u7F6E</h2><blockquote><p>\u6B64\u5904\u4E0D\u63A2\u8BA8\u5982\u4F55\u914D\u7F6E frpc\uFF08\u5BA2\u6237\u7AEF\uFF09\u3002</p></blockquote><h3 id="frps-ini" tabindex="-1"><a class="header-anchor" href="#frps-ini" aria-hidden="true">#</a> frps.ini</h3><p>\u521B\u5EFA <code>frps.ini</code> \u6587\u4EF6\uFF1A</p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_PORT }}</span>
<span class="token key attr-name">token</span>     <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SERVER_TOKEN }}</span>

<span class="token comment"># subdomain</span>
<span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_VHOST_HTTP_PORT }}</span>
<span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">{{ .Envs.FRP_SUBDOMAIN_HOST }}</span>
</code></pre></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker compose</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>

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
      <span class="token comment"># \u6307\u5411 80 vhost</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.frp-secure.service=frp-proxy&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.frp-proxy.loadbalancer.server.port=80&quot;</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>

<span class="token comment"># \u5148\u521B\u5EFA\u5916\u90E8\u7F51\u5361</span>
<span class="token comment"># docker network create traefik</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h2 id="traefik-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#traefik-\u914D\u7F6E" aria-hidden="true">#</a> Traefik \u914D\u7F6E</h2><p>\u521B\u5EFA\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> acme-dns
</code></pre></div>`,12),k=s("\u5728 "),d={href:"https://docs.shanyuhai.top/backend/traefik/quick-start.html#%E6%9C%80%E7%BB%88%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},m=s("\u6700\u7EC8\u914D\u7F6E"),f=s(" \u4E0A\u589E\u52A0\uFF1A"),h=e(`<div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u7701\u7565\u5176\u4ED6</span>
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
</code></pre></div><p>\u7B2C\u4E00\u6B21\u6267\u884C <code>docker-compose up</code> \u540E\u53EF\u4EE5\u83B7\u53D6 <code>acme-dns</code> \u4FE1\u606F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;frp.example.com&quot;: {
        &quot;FullDomain&quot;: &quot;187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io&quot;,
        &quot;SubDomain&quot;: &quot;c9866200-2abb-45c6-82e6-396adcd1f625&quot;,
        &quot;Username&quot;: &quot;9b9fc433-c218-4c61-b37e-1da73551c538&quot;,
        &quot;Password&quot;: &quot;MPhWrfzZwgeZKyGK3cYPLIdgllNbmF5tFutacpFF&quot;
    }
}
</code></pre></div><p>\u767B\u5F55\u5230\u4F60\u7684 DNS \u5E10\u53F7\uFF0C\u521B\u5EFA\u4E00\u6761 CNAME \u8BB0\u5F55 <code>_acme-challenge.frp</code> \u6307\u5411 <code>187gf679-4961-4ave-a211-bc77ead16918.auth.acme-dns.io</code>\uFF0C\u518D\u6B21\u6267\u884C <code>docker-compose up</code>\u3002</p><p>\u7A0D\u540E\u53EF\u5728 <code>acme.json</code> \u6587\u4EF6\u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u8BB0\u5F55\uFF0C\u5373\u8BC1\u4E66\u7B7E\u53D1\u6210\u529F\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,6),_={href:"https://soulteary.com/2020/10/04/frp-in-docker.html",target:"_blank",rel:"noopener noreferrer"},q=s("\u5BB9\u5668\u5316 FRP \u4F7F\u7528\u65B9\u6848"),g={href:"https://hexo.aufomm.com/2020/04/06/Traefik-2-Request-Multiple-domain-and-Wildcard-SSL-certificates/",target:"_blank",rel:"noopener noreferrer"},v=s("Traefik 2 Request Multiple domain and Wildcard SSL certificates");function y(b,x){const a=p("OutboundLink");return u(),o(c,null,[i,n("p",null,[k,n("a",d,[m,t(a)]),f]),h,n("ul",null,[n("li",null,[n("a",_,[q,t(a)])]),n("li",null,[n("a",g,[v,t(a)])])])],64)}var T=r(l,[["render",y]]);export{T as default};
