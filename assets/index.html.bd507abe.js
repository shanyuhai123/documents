import{r as e,c as o,a as n,b as t,F as c,d as s,o as l}from"./app.9b67e5d2.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";var r="/assets/traefik-architecture-overview.2ef4ae24.png";const i={},u=n("h1",{id:"\u4ECE-nginx-\u5207\u6362\u5230-traefik",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE-nginx-\u5207\u6362\u5230-traefik","aria-hidden":"true"},"#"),s(" \u4ECE Nginx \u5207\u6362\u5230 Traefik")],-1),k=n("h2",{id:"\u4E3A\u4EC0\u4E48\u9009\u62E9-traefik",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48\u9009\u62E9-traefik","aria-hidden":"true"},"#"),s(" \u4E3A\u4EC0\u4E48\u9009\u62E9 Traefik")],-1),d=n("p",null,"\u5982\u679C\u8FFD\u6C42\u6781\u81F4\u7684\u6027\u80FD\u90A3\u81EA\u7136\u9009\u62E9 Nginx\uFF0C\u4F46\u5BF9\u4E8E\u4E2A\u4EBA\u800C\u8A00 Traefik \u4E5F\u662F\u4E00\u4E2A\u826F\u597D\u7684\u9009\u62E9\uFF0C\u5C24\u5176\u662F\u5176\u670D\u52A1\u53D1\u73B0\u7684\u80FD\u529B\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u524D\u7AEF\u3001\u540E\u7AEF\u5E94\u7528\u589E\u52A0\u3001\u51CF\u5C11\u65F6\u9700\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u7684\u95EE\u9898\u3002",-1),m=n("h2",{id:"traefik-\u7684\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#traefik-\u7684\u67B6\u6784","aria-hidden":"true"},"#"),s(" Traefik \u7684\u67B6\u6784")],-1),h=n("p",null,[n("img",{src:r,alt:"traefik architecture overview"})],-1),f=n("p",null,[s("\u7531\u56FE\u6240\u793A\uFF0CTraefik \u4F1A\u76D1\u542C\u5165\u53E3\u70B9\uFF08"),n("code",null,"EntryPoints"),s("\uFF09\uFF0C\u8DEF\u7531\u5668\uFF08"),n("code",null,"Routers"),s("\uFF09\u8FDE\u63A5\u5230\u8FD9\u4E9B\u5165\u53E3\u70B9\uFF0C\u5206\u6790\u4F20\u5165\u7684\u8BF7\u6C42\uFF0C\u4EE5\u67E5\u770B\u5B83\u4EEC\u662F\u5426\u4E0E\u4E00\u7EC4\u89C4\u5219\uFF08"),n("code",null,"Rule"),s("\uFF09\u5339\u914D\u3002\u5982\u679C\u5339\u914D\uFF0C\u5219\u6709\u4E2D\u95F4\u4EF6\u5148\u7ECF\u8FC7\u4E2D\u95F4\u4EF6\uFF08"),n("code",null,"Middlewares"),s("\uFF09\uFF0C\u518D\u8F6C\u53D1\u7ED9\u5BF9\u5E94\u7684\u670D\u52A1\uFF08"),n("code",null,"Services"),s("\uFF09\u3002")],-1),g=n("p",null,[s("\u5176\u4E2D\u914D\u7F6E\u4E0E "),n("code",null,"Nginx"),s(" \u76F8\u4F3C\uFF0C\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A")],-1),y=n("ul",null,[n("li",null,[s("\u9759\u6001\u914D\u7F6E\uFF1A"),n("code",null,"traefik.toml"),s("\uFF0C\u4E0E "),n("code",null,"nginx.conf"),s(" \u7C7B\u4F3C")]),n("li",null,[s("\u52A8\u6001\u914D\u7F6E\uFF1A"),n("code",null,"config/*.toml"),s("\uFF0C\u4E0E "),n("code",null,"conf.d/*.conf"),s(" \u7C7B\u4F3C")])],-1),_=n("h2",{id:"\u4EE5-whoami-\u4E3A\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EE5-whoami-\u4E3A\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u4EE5 whoami \u4E3A\u793A\u4F8B")],-1),b=n("p",null,[s("\u5148\u521B\u5EFA "),n("code",null,"docker-compose.yml"),s(" \u6587\u4EF6\uFF0C\u9759\u6001\u914D\u7F6E\uFF08"),n("code",null,"traefik.toml"),s("\uFF09\u76F4\u63A5\u8BB0\u5F55\u5728\u5BB9\u5668\u542F\u52A8\u914D\u7F6E\u4E2D\u53EF\u4EE5\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\uFF1A")],-1),w=n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` traefik
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" traefik"),n("span",{class:"token punctuation"},":"),s(`v2.4.8
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token datetime number"},"80:80"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" 443"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"443"),s(`
    `),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(` traefik
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# \u5168\u5C40\u914D\u7F6E"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--global.checkNewVersion=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--global.sendAnonymousUsage=false"'),s(`
      `),n("span",{class:"token comment"},"# ping"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--ping=true"'),s(`
      `),n("span",{class:"token comment"},"# \u65E5\u5FD7"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--log.level=warn"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--log.format=common"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--accesslog=false"'),s(`
      `),n("span",{class:"token comment"},"# api/dashboard"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--api=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--api.insecure=true"'),s(`
      `),n("span",{class:"token comment"},"# \u5165\u53E3\u70B9"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entryPoints.web.address=:80"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entryPoints.websecure.address=:443"'),s(`
      `),n("span",{class:"token comment"},"# \u670D\u52A1\u53D1\u73B0"),s(`
      `),n("span",{class:"token comment"},"# docker \u5F62\u5F0F\u670D\u52A1\u53D1\u73B0\uFF0C\u63A5\u5165 traefik network"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.watch=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.exposedbydefault=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.endpoint=unix:///var/run/docker.sock"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.swarmMode=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.useBindPortIP=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.network=traefik"'),s(`
      `),n("span",{class:"token comment"},"# file \u5F62\u5F0F\u670D\u52A1\u53D1\u73B0"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.watch=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.directory=/etc/traefik/config"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.debugloggeneratedtemplate=true"'),s(`
    `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" /etc/localtime"),n("span",{class:"token punctuation"},":"),s("/etc/localtime"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" /etc/timezone"),n("span",{class:"token punctuation"},":"),s("/etc/timezone"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" /var/run/docker.sock"),n("span",{class:"token punctuation"},":"),s("/var/run/docker.sock"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" ./config/"),n("span",{class:"token punctuation"},":"),s("/etc/traefik/config/"),n("span",{class:"token punctuation"},":"),s(`ro
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.enable=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.docker.network=traefik"'),s(`
      `),n("span",{class:"token comment"},"# dashboard http"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.entrypoints=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.service=dashboard@internal"'),s(`
      `),n("span",{class:"token comment"},"# dashboard api"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.entrypoints=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) && PathPrefix(`/api`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.service=api@internal"'),s(`
    `),n("span",{class:"token key atrule"},"healthcheck"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"test"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"CMD-SHELL"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"wget -q --spider --proxy off localhost:8080/ping || exit 1"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token key atrule"},"interval"),n("span",{class:"token punctuation"},":"),s(` 3s
      `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 5s
    `),n("span",{class:"token key atrule"},"logging"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"json-file"'),s(`
      `),n("span",{class:"token key atrule"},"options"),n("span",{class:"token punctuation"},":"),s(` 
        `),n("span",{class:"token key atrule"},"max-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"1m"'),s(`

  `),n("span",{class:"token key atrule"},"whoami"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` whoami
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(` traefik/whoami
    `),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(` traefik
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.enable=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.docker.network=traefik"'),s(`
      `),n("span",{class:"token comment"},"# http entrypoints"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.entrypoints=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.rule=Host(`whoami.example.com`)"'),s(`

`),n("span",{class:"token comment"},"# \u5148\u521B\u5EFA\u5916\u90E8\u7F51\u5361"),s(`
`),n("span",{class:"token comment"},"# docker network create traefik"),s(`
`),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"external"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])])],-1),v=n("p",null,[s("\u53EF\u4E3A\u52A8\u6001\u914D\u7F6E\u62BD\u8C61\u4E00\u4E9B\u4F1A\u516C\u5171\u4F7F\u7528\u7684\uFF0C\u589E\u52A0 "),n("code",null,"config.default.toml"),s(" \u6587\u4EF6\u3002")],-1),x=n("h3",{id:"_1-\u57FA\u7840\u8BA4\u8BC1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u57FA\u7840\u8BA4\u8BC1","aria-hidden":"true"},"#"),s(" 1. \u57FA\u7840\u8BA4\u8BC1")],-1),H=s("\u57FA\u7840\u8BA4\u8BC1\u91C7\u53D6\u7B80\u5355\u7684 "),S={href:"https://doc.traefik.io/traefik/middlewares/basicauth/",target:"_blank",rel:"noopener noreferrer"},T=s("BasicAuth"),E=s("\u3002"),C=s("\u5229\u7528 "),A={href:"http://httpd.apache.org/docs/1.3/programs/htpasswd.html",target:"_blank",rel:"noopener noreferrer"},P=s("htpasswd"),L=s(" \u5DE5\u5177\u751F\u6210\u5BC6\u7801\uFF1A"),j=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`htpasswd -nb yourname yourpassword

`),n("span",{class:"token comment"},"# \u5F97\u5230"),s(`
`),n("span",{class:"token comment"},"# yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g."),s(`
`)])])],-1),z=n("p",null,[s("\u4E3A "),n("code",null,"config/default.toml"),s(" \u589E\u52A0\u4E00\u9879\u9ED8\u8BA4\u8BA4\u8BC1\uFF0C\u52A8\u6001\u4FEE\u6539\u751F\u6548\uFF0C\u540E\u7EED\u65E0\u9700\u91CD\u542F\uFF1A")],-1),V=n("div",{class:"language-toml ext-toml"},[n("pre",{class:"language-toml"},[n("code",null,[n("span",{class:"token comment"},"# \u4E2D\u95F4\u4EF6\u5728 docker cli \u4E2D\u4F7F\u7528\u65F6\u53EF\u7528 `,` \u5206\u9694\uFF1Amiddlewares=m1@file,m2@file"),s(`

`),n("span",{class:"token comment"},"# gzip"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"http.middlewares.gzip.compress"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token comment"},"# basic \u8BA4\u8BC1"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"http.middlewares.default-auth-user.basicAuth"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token key property"},"removeHeader"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token key property"},"users"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token string"},'"yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g."'),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),D=n("p",null,[s("\u5728 "),n("code",null,"traefik"),s(" \u548C "),n("code",null,"whoami"),s(" \u7684 "),n("code",null,"labels"),s(" \u4E2D\u589E\u52A0\uFF1A")],-1),I=n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# \u7701\u7565\u5176\u4ED6"),s(`
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.middlewares=default-auth-user@file"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file"'),s(`
  `),n("span",{class:"token key atrule"},"whoami"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# \u7701\u7565\u5176\u4ED6"),s(`
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.middlewares=default-auth-user@file"'),s(`
`)])])],-1),N=n("h3",{id:"_2-\u5347\u7EA7\u4E3A-https",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u5347\u7EA7\u4E3A-https","aria-hidden":"true"},"#"),s(" 2. \u5347\u7EA7\u4E3A HTTPS")],-1),M=n("ol",null,[n("li",null,[n("p",null,"\u5148\u624B\u52A8\u6DFB\u52A0\u8BC1\u4E66"),n("p",null,"\u521B\u5EFA\u8BC1\u4E66\u76EE\u5F55\u5E76\u79FB\u5165\u8BC1\u4E66\uFF1A"),n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"mkdir"),s(` ssl
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"mv"),s(` /path/to/ssl/whoami.example.com.* ./ssl
`)])])]),n("p",null,"\u4FEE\u6539\u9759\u6001\u914D\u7F6E\uFF1A"),n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(`
 `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
   `),n("span",{class:"token comment"},"# \u5FFD\u7565\u5176\u4ED6"),s(`
   `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
     `),n("span",{class:"token punctuation"},"-"),s(" ./ssl/"),n("span",{class:"token punctuation"},":"),s("/data/ssl/"),n("span",{class:"token punctuation"},":"),s(`ro
 `),n("span",{class:"token key atrule"},"whoami"),n("span",{class:"token punctuation"},":"),s(`
   `),n("span",{class:"token comment"},"# \u5FFD\u7565\u5176\u4ED6"),s(`
   `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
     `),n("span",{class:"token comment"},"# https entrypoints"),s(`
     `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.entrypoints=websecure"'),s(`
     `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)"'),s(`
     `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.tls=true"'),s(`
`)])])]),n("p",null,"\u4FEE\u6539\u52A8\u6001\u914D\u7F6E\uFF1A"),n("div",{class:"language-toml ext-toml"},[n("pre",{class:"language-toml"},[n("code",null,[n("span",{class:"token comment"},"# config/tls.toml"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"tls"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"tls.options.default"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token key property"},"minVersion"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"VersionTLS12"'),s(`
`),n("span",{class:"token key property"},"maxVersion"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"VersionTLS12"'),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"tls.options.test-tls13"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token key property"},"minVersion"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"VersionTLS13"'),s(`
`),n("span",{class:"token key property"},"cipherSuites"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"tls.certificates"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token key property"},"certFile"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"/data/ssl/whoami.example.com.crt"'),s(`
`),n("span",{class:"token key property"},"keyFile"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"/data/ssl/whoami.example.com.key"'),s(`
`)])])])]),n("li",null,[n("p",null,"\u81EA\u52A8\u83B7\u53D6\u8BC1\u4E66"),n("p",null,"\u521B\u5EFA\u6587\u4EF6\u5E76\u8D4B\u6743\uFF1A"),n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"touch"),s(` acme.json
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"chmod"),s(),n("span",{class:"token number"},"600"),s(` acme.json
`)])])]),n("p",null,"\u4FEE\u6539\u9759\u6001\u914D\u7F6E\u6587\u4EF6\uFF1A"),n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# tls"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.email=acme@example.com"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.storage=acme.json"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.keyType=EC384"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entrypoints.websecure.http.tls.certResolver=letsencrypt"'),s(`
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# dashboard https"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.entrypoints=websecure"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.service=dashboard@internal"'),s(`
      `),n("span",{class:"token comment"},"# dashboard api"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.entrypoints=websecure"'),s(`
`)])])]),n("p",null,[s("\u91CD\u542F\u670D\u52A1\u540E\u67E5\u770B\u7F51\u9875\u53D1\u73B0 "),n("code",null,"https"),s(" \u5DF2\u751F\u6548\uFF0C\u4E14 "),n("code",null,"acme.json"),s(" \u5DF2\u88AB\u5199\u5165\u914D\u7F6E\u3002")])]),n("li",null,[n("p",null,"\u9488\u5BF9\u5355\u4E2A\u670D\u52A1"),n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# \u7701\u7565\u5176\u4ED6"),s(`
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# \u79FB\u9664"),s(`
     `),n("span",{class:"token comment"},'# - "--entrypoints.websecure.http.tls.certResolver=letsencrypt"'),s(`
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# \u589E\u52A0"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.tls=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.tls.certresolver=letsencrypt"'),s(`
`)])])])])],-1),R=n("h3",{id:"_3-\u91CD\u5B9A\u5411",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-\u91CD\u5B9A\u5411","aria-hidden":"true"},"#"),s(" 3. \u91CD\u5B9A\u5411")],-1),B=n("p",null,"\u6DFB\u52A0\u4E2D\u95F4\u4EF6\uFF1A",-1),O=n("div",{class:"language-toml ext-toml"},[n("pre",{class:"language-toml"},[n("code",null,[n("span",{class:"token comment"},"# config/default.toml"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token table class-name"},"http.middlewares.https-redirect.redirectScheme"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token key property"},"scheme"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token string"},'"https"'),s(`
`),n("span",{class:"token key property"},"permanent"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
`)])])],-1),W=n("p",null,"\u4F7F\u7528\uFF1A",-1),$=n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# \u7701\u7565\u5176\u4ED6"),s(`
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# \u589E\u52A0"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dash-default.middlewares=https-redirect@file"'),s(`
`)])])],-1),F=n("h3",{id:"_4-\u6700\u7EC8\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-\u6700\u7EC8\u914D\u7F6E","aria-hidden":"true"},"#"),s(" 4. \u6700\u7EC8\u914D\u7F6E")],-1),G=n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.7'"),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` traefik
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" traefik"),n("span",{class:"token punctuation"},":"),s(`v2.4.8
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token datetime number"},"80:80"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" 443"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"443"),s(`
    `),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(` traefik
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--global.checkNewVersion=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--global.sendAnonymousUsage=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--ping=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--log.level=warn"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--log.format=common"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--accesslog=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--api=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--api.insecure=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.email=acme@example.com"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.storage=acme.json"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.keyType=EC384"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entryPoints.web.address=:80"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entryPoints.websecure.address=:443"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entrypoints.websecure.http.tls.certResolver=letsencrypt"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--entrypoints.websecure.http.middlewares=gzip@file"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.watch=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.exposedbydefault=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.endpoint=unix:///var/run/docker.sock"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.swarmMode=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.useBindPortIP=false"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.docker.network=traefik"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.watch=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.directory=/etc/traefik/config"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"--providers.file.debugloggeneratedtemplate=true"'),s(`
    `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" /etc/localtime"),n("span",{class:"token punctuation"},":"),s("/etc/localtime"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" /etc/timezone"),n("span",{class:"token punctuation"},":"),s("/etc/timezone"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" /var/run/docker.sock"),n("span",{class:"token punctuation"},":"),s("/var/run/docker.sock"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" ./config/"),n("span",{class:"token punctuation"},":"),s("/etc/traefik/config/"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" ./ssl/"),n("span",{class:"token punctuation"},":"),s("/data/ssl/"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token punctuation"},"-"),s(" ./acme.json/"),n("span",{class:"token punctuation"},":"),s("/acme.json"),n("span",{class:"token punctuation"},":"),s(`rw
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.enable=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.docker.network=traefik"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.middlewares=https-redirect@file"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.entrypoints=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.entrypoints=websecure"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.rule=Host(`traefik.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.service=dashboard@internal"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-secure.middlewares=default-auth-user@file"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.entrypoints=websecure"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) && PathPrefix(`/api`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.service=api@internal"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file"'),s(`
    `),n("span",{class:"token key atrule"},"healthcheck"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"test"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"CMD-SHELL"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"wget -q --spider --proxy off localhost:8080/ping || exit 1"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token key atrule"},"interval"),n("span",{class:"token punctuation"},":"),s(` 3s
      `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 5s
    `),n("span",{class:"token key atrule"},"logging"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"json-file"'),s(`
      `),n("span",{class:"token key atrule"},"options"),n("span",{class:"token punctuation"},":"),s(` 
        `),n("span",{class:"token key atrule"},"max-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"1m"'),s(`

  `),n("span",{class:"token key atrule"},"whoami"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` whoami
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(` traefik/whoami
    `),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
      `),n("span",{class:"token punctuation"},"-"),s(` traefik
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.enable=true"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.docker.network=traefik"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.middlewares=https-redirect@file"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.entrypoints=web"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami.rule=Host(`whoami.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.entrypoints=websecure"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)"'),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"traefik.http.routers.whoami-secure.middlewares=default-auth-user@file"'),s(`

`),n("span",{class:"token comment"},"# docker network create traefik"),s(`
`),n("span",{class:"token key atrule"},"networks"),n("span",{class:"token punctuation"},":"),s(` 
  `),n("span",{class:"token key atrule"},"traefik"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"external"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])])],-1),U=n("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599")],-1),q={href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"},Y=s("Traefik"),J={href:"https://doc.traefik.io/traefik/reference/static-configuration/overview/",target:"_blank",rel:"noopener noreferrer"},K=s("Traefik \u914D\u7F6E"),Q={href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"},X=s("toml"),Z={href:"https://soulteary.com/tags/traefik.html",target:"_blank",rel:"noopener noreferrer"},nn=s("\u82CF\u6D0B Tag#Traefik");function sn(an,tn){const a=e("OutboundLink");return l(),o(c,null,[u,k,d,m,h,f,g,y,_,b,w,v,x,n("p",null,[H,n("a",S,[T,t(a)]),E]),n("p",null,[C,n("a",A,[P,t(a)]),L]),j,z,V,D,I,N,M,R,B,O,W,$,F,G,U,n("ol",null,[n("li",null,[n("a",q,[Y,t(a)])]),n("li",null,[n("a",J,[K,t(a)])]),n("li",null,[n("a",Q,[X,t(a)])]),n("li",null,[n("a",Z,[nn,t(a)])])])],64)}var cn=p(i,[["render",sn]]);export{cn as default};
