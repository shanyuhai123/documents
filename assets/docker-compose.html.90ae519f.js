import{r as p,c as o,a,b as t,F as c,e as s,d as n,o as l}from"./app.bf0b2e7a.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const r={},i=s('<h1 id="docker-compose-\u7BA1\u7406\u591A\u4E2A\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u7BA1\u7406\u591A\u4E2A\u670D\u52A1" aria-hidden="true">#</a> Docker Compose \u7BA1\u7406\u591A\u4E2A\u670D\u52A1</h1><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981-docker-compose" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981-docker-compose" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981 Docker Compose</h2><p>\u5148\u7B80\u5355\u7406\u89E3 Docker \u7684\u4F7F\u7528\u8FC7\u7A0B\uFF1A</p><ol><li>\u955C\u50CF\u6784\u5EFA\uFF1A\u5373\u521B\u5EFA\u4E00\u4E2A\u955C\u50CF\uFF0C\u8FD9\u4E2A\u521B\u5EFA\u7684\u8FC7\u7A0B\u5C31\u662F\u7528 <code>Dockerfile</code> \u6765\u5B8C\u6210\u7684\u3002</li><li>\u5BB9\u5668\u542F\u52A8\uFF1A\u9488\u5BF9\u5355\u4E2A\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528 <code>docker run</code> \u6765\u542F\u52A8\uFF0C\u90A3\u591A\u4E2A\u5462\uFF1F\u4E8E\u662F\u5C31\u51FA\u73B0\u4E86 Docker Compose\u3002</li></ol><h3 id="_1-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u660E" aria-hidden="true">#</a> 1. \u8BF4\u660E</h3><p>Docker Compose \u4E2D\u5B9A\u4E49\u7684\u6BCF\u4E2A\u670D\u52A1\u90FD\u5FC5\u987B\u901A\u8FC7 <code>image</code> \u6216 <code>build</code> \u6307\u4EE4\u6765\u6784\u5EFA\uFF0C<code>build</code> \u65F6\u4F1A\u5E94\u7528 <code>Dockerfile</code> \u4E2D\u7684\u914D\u7F6E\uFF0C\u65E0\u9700\u91CD\u590D\u8BBE\u7F6E\u3002</p><h3 id="_2-\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#_2-\u9ED8\u8BA4" aria-hidden="true">#</a> 2. \u9ED8\u8BA4</h3><p>\u9ED8\u8BA4\u6A21\u677F\u6587\u4EF6\u4E3A <code>docker-compose.yml</code>\uFF0C\u9ED8\u8BA4\u7684\u9879\u76EE\u540D\u79F0\u4E3A\u6240\u5728\u76EE\u5F55\u540D\u3002</p><h2 id="\u5B89\u88C5\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5378\u8F7D" aria-hidden="true">#</a> \u5B89\u88C5\u5378\u8F7D</h2>',9),k=n("\u9009\u62E9\u4E8C\u8FDB\u5236\u5B89\u88C5\u7684\u5F62\u5F0F\uFF0C\u66F4\u591A\u7248\u672C\u53EF\u89C1 "),d={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"},h=n("github release"),m=n("\u3002"),y=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D</span>
<span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose

<span class="token comment"># \u5141\u8BB8\u8FD0\u884C</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose

<span class="token comment"># bash \u547D\u4EE4\u8865\u5168</span>
<span class="token function">curl</span> -L https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose

<span class="token comment"># \u7531\u4E8E\u662F\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u90A3\u4E48\u5378\u8F7D\u5C31\u662F\u5220\u9664\u8BE5\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre></div><h2 id="\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u547D\u4EE4\u884C</h2><p>\u5728\u914D\u7F6E\u5B8C\u6210\u540E\u53EF\u4EE5\u6267\u884C <code>docker-compose config</code> \u6765\u6821\u9A8C\u5E76\u67E5\u770B\u5B9E\u9645\u8FD0\u884C\u7684\u914D\u7F6E\u3002</p><h2 id="\u6838\u5FC3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u914D\u7F6E" aria-hidden="true">#</a> \u6838\u5FC3\u914D\u7F6E</h2><p>\u4E00\u4EFD\u6807\u51C6\u914D\u7F6E\u6587\u4EF6\u5E94\u8BE5\u5305\u542B <code>version</code>\u3001<code>services</code>\u3001<code>networks</code> \u4E09\u5927\u90E8\u5206\uFF0C\u5176\u4E2D\u6700\u5173\u952E\u7684\u5C31\u662F <code>services</code> \u548C <code>networks</code> \u90E8\u5206\u3002</p><h3 id="_1-version" tabindex="-1"><a class="header-anchor" href="#_1-version" aria-hidden="true">#</a> 1. version</h3>`,6),g=a("code",null,"version",-1),_=n(" \u4E0E Docker Engine \u662F\u5F3A\u5173\u8054\u7684\uFF0C"),v={href:"https://docs.docker.com/compose/compose-file/compose-versioning/",target:"_blank",rel:"noopener noreferrer"},b=n("Reference"),f=n(" \u4E2D\u6709\u8BE6\u7EC6\u5BF9\u7167\u5173\u7CFB\u3002"),q=s(`<h3 id="_2-services" tabindex="-1"><a class="header-anchor" href="#_2-services" aria-hidden="true">#</a> 2. services</h3><p>services \u662F\u8981\u5B9A\u4E49\u7684\u670D\u52A1\uFF0C\u81F3\u4E8E\u670D\u52A1\u540D\u53EF\u4EE5\u81EA\u53D6\uFF0C\u6211\u4EEC\u5927\u90E8\u5206\u65F6\u5019\u90FD\u662F\u5728\u4E3A service \u8FDB\u884C\u7F16\u5199\u3002</p><h3 id="_3-networks" tabindex="-1"><a class="header-anchor" href="#_3-networks" aria-hidden="true">#</a> 3. networks</h3><p>\u914D\u7F6E\u5BB9\u5668\u8FDE\u63A5\u7684\u7F51\u7EDC\uFF0C\u5982\u679C\u672A\u663E\u793A\u58F0\u660E\u5219\u4F1A\u88AB\u52A0\u5165\u6240\u5728\u76EE\u5F55\u53CA <code>_default</code> \u7684\u7F51\u7EDC\u4E2D\uFF0C\u4F8B\u5982\u5F53\u524D\u76EE\u5F55\u4E3A <code>app</code>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u52A0\u5165 <code>app_default</code> \u7684\u9ED8\u8BA4\u7F51\u7EDC\u3002\u4F60\u4F1A\u53D1\u73B0\u8FD9\u5176\u5B9E\u4E0E service \u662F\u4E00\u81F4\u7684\u3002</p><h2 id="services-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#services-\u914D\u7F6E" aria-hidden="true">#</a> services \u914D\u7F6E</h2><h3 id="_1-image" tabindex="-1"><a class="header-anchor" href="#_1-image" aria-hidden="true">#</a> 1. image</h3><p>\u955C\u50CF\u540D\u79F0\u6216 ID\uFF0C\u672C\u5730\u4E0D\u5728\u5219\u4ECE hub \u62C9\u53D6\u3002</p><h3 id="_2-build" tabindex="-1"><a class="header-anchor" href="#_2-build" aria-hidden="true">#</a> 2. build</h3><p>\u670D\u52A1\u9664\u4E86\u53EF\u4EE5\u6307\u5B9A\u955C\u50CF\uFF0C\u8FD8\u53EF\u4EE5\u57FA\u4E8E\u4E00\u4EFD Dockerfile\uFF0C\u5176\u53EF\u4EE5\u4E3A\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5373\u5BF9\u5E94\u7684 <code>context</code> \u53CA <code>dockerfile</code>\u3002</p><p>\u5B58\u5728\u6784\u5EFA\u6D41\u7A0B\u90A3\u4E48\u81EA\u7136\u53EF\u4EE5\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u6CE8\u610F\u5E03\u5C14\u503C\u9700\u8981\u4F7F\u7528\u5F15\u53F7\u5305\u88F9\uFF0C\u5426\u5219\u4F1A\u88AB\u8BC6\u522B\u4E3A\u5B57\u7B26\u4E32\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
   <span class="token key atrule">context</span><span class="token punctuation">:</span> ./app
   <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile<span class="token punctuation">-</span>app
   <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">arg1</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
</code></pre></div><h3 id="_3-command" tabindex="-1"><a class="header-anchor" href="#_3-command" aria-hidden="true">#</a> 3. command</h3><p>\u4F7F\u7528 command \u53EF\u4EE5\u8986\u76D6\u5BB9\u5668\u542F\u52A8\u540E\u9ED8\u8BA4\u6267\u884C\u7684\u547D\u4EE4\u3002\u6CE8\u610F\u662F\u8986\u76D6\u9ED8\u8BA4\u547D\u4EE4\u3002</p><h3 id="_4-container-name" tabindex="-1"><a class="header-anchor" href="#_4-container-name" aria-hidden="true">#</a> 4. container_name</h3><p>compose \u7684\u5BB9\u5668\u540D\u79F0\u683C\u5F0F\u662F\uFF1A&lt;\u9879\u76EE\u540D\u79F0&gt;&lt;\u670D\u52A1\u540D\u79F0&gt;&lt;\u5E8F\u53F7&gt;\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002</p><h3 id="_5-depends-on" tabindex="-1"><a class="header-anchor" href="#_5-depends-on" aria-hidden="true">#</a> 5. depends_on</h3><p>\u5728\u7EC4\u5408\u4E00\u7CFB\u5217\u670D\u52A1\u65F6\uFF0C\u5F88\u591A\u65F6\u5019\u662F\u6709\u8C03\u7528\u987A\u5E8F\u7684\uFF0C\u4F8B\u5982\u5F80\u5F80\u6709\u9700\u8981\u5148\u542F\u7528\u6570\u636E\u5E93\u670D\u52A1\uFF0C\u8FD9\u65F6\u5019\u5C31\u5F88\u6709\u7528\u4E86\u3002</p><p>\u751A\u81F3\u5728\u4F60\u5355\u72EC <code>compose up</code> \u4E2D\u67D0\u4E2A\u670D\u52A1\u65F6\u4E5F\u4F1A\u751F\u6548\u3002</p><h3 id="_6-env-file-environment" tabindex="-1"><a class="header-anchor" href="#_6-env-file-environment" aria-hidden="true">#</a> 6. env_file/environment</h3><p>env_file \u5982\u679C\u6709\u73AF\u5883\u53D8\u91CF\u4E0E environment \u6307\u4EE4\u51B2\u7A81\uFF0C\u5219\u4EE5 environment \u4E3A\u51C6\u3002\u9700\u6CE8\u610F\u8FD9\u91CC\u6240\u8BF4\u7684\u73AF\u5883\u53D8\u91CF\u662F\u5BF9 compose \u800C\u8A00\u7684\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u5E76\u4E0D\u4F1A\u8FDB\u5165\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u3002</p><p>\u5982\u679C\u53EA\u7ED9\u5B9A\u540D\u79F0\u5219\u4F1A\u81EA\u52A8\u83B7\u53D6\u4E3B\u673A\u4E0A\u5BF9\u5E94\u53D8\u91CF\u7684\u503C\uFF0C\u53EF\u7528\u6765\u9632\u6B62\u6CC4\u6F0F\u6570\u636E\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">NODE_ENV</span><span class="token punctuation">:</span> development
  <span class="token key atrule">APP_URL</span><span class="token punctuation">:</span>

<span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> NODE_ENV=development
  <span class="token punctuation">-</span> APP_URL
</code></pre></div><h3 id="_7-extra-hosts" tabindex="-1"><a class="header-anchor" href="#_7-extra-hosts" aria-hidden="true">#</a> 7. extra_hosts</h3><p>\u589E\u52A0 host \u6620\u5C04\u89C4\u5219\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;somehost:162.242.195.82&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;otherhost:50.31.209.229&quot;</span>
</code></pre></div><p>\u5BF9\u5E94\u7684 <code>/etc/hosts</code> \u5219\u4F1A\u8FFD\u52A0\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>162.242.195.82  somehost
50.31.209.229   otherhost
</code></pre></div><h3 id="_8-healthcheck" tabindex="-1"><a class="header-anchor" href="#_8-healthcheck" aria-hidden="true">#</a> 8. healthcheck</h3><p>\u5065\u5EB7\u68C0\u67E5\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1m30s
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 40s
</code></pre></div><h3 id="_9-links" tabindex="-1"><a class="header-anchor" href="#_9-links" aria-hidden="true">#</a> 9. links</h3><p>\u5B98\u7F51\u5927\u5927\u7684\u6807\u51FA\u4E86\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u5C06\u6765\u4F1A\u5E9F\u5F03\u3002</p><h3 id="_10-networks" tabindex="-1"><a class="header-anchor" href="#_10-networks" aria-hidden="true">#</a> 10. networks</h3><p>\u914D\u7F6E\u5BB9\u5668\u8FDE\u63A5\u7684\u7F51\u7EDC\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx:alpine&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> new

  <span class="token key atrule">worker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;my-worker-image:latest&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> legacy

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">new</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> database
      <span class="token key atrule">legacy</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> mysql

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">new</span><span class="token punctuation">:</span>
  <span class="token key atrule">legacy</span><span class="token punctuation">:</span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.10
        <span class="token key atrule">ipv6_address</span><span class="token punctuation">:</span> 2001<span class="token punctuation">:</span>3984<span class="token punctuation">:</span>3989<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">10</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;172.16.238.0/24&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;2001:3984:3989::/64&quot;</span>
</code></pre></div><h3 id="_11-ports" tabindex="-1"><a class="header-anchor" href="#_11-ports" aria-hidden="true">#</a> 11. ports</h3><p>\u66B4\u9732\u7AEF\u53E3\u4FE1\u606F\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;3000-3005&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;9090-9091:8080-8081&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;49100:22&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8001:8001&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:5000-5010:5000-5010&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;6060:6060/udp&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;12400-12500:1240&quot;</span>
</code></pre></div><h3 id="_12-secrets" tabindex="-1"><a class="header-anchor" href="#_12-secrets" aria-hidden="true">#</a> 12. secrets</h3><p>\u5B58\u50A8\u654F\u611F\u4FE1\u606F\u3002</p><p>\u4E0D\u662F\u53EF\u4EE5\u5229\u7528 <code>env</code> \u4E48\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981\u8FD9\u4E2A\u5462\uFF0C\u6709\u5F85\u63A2\u7A76\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my_secret
      <span class="token punctuation">-</span> my_other_secret
<span class="token key atrule">secrets</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_secret</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./my_secret.txt
  <span class="token key atrule">my_other_secret</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h3 id="_13-volumes" tabindex="-1"><a class="header-anchor" href="#_13-volumes" aria-hidden="true">#</a> 13. volumes</h3><p>\u6570\u636E\u5377\u6302\u8F7D\u8DEF\u5F84\uFF0C\u5982\u679C\u662F\u540D\u79F0\u5219\u9700\u8981\u914D\u7F6E\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> volume
        <span class="token key atrule">source</span><span class="token punctuation">:</span> mydata
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /data
        <span class="token key atrule">volume</span><span class="token punctuation">:</span>
          <span class="token key atrule">nocopy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./static
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/app/static

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;dbdata:/var/lib/postgresql/data&quot;</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">mydata</span><span class="token punctuation">:</span>
  <span class="token key atrule">dbdata</span><span class="token punctuation">:</span>
</code></pre></div>`,46);function x(w,D){const e=p("OutboundLink");return l(),o(c,null,[i,a("p",null,[k,a("a",d,[h,t(e)]),m]),y,a("p",null,[g,_,a("a",v,[b,t(e)]),f]),q],64)}var E=u(r,[["render",x]]);export{E as default};
