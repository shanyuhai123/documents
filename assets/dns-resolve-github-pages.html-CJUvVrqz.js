import{_ as e,c as t,a,o as i}from"./app-DNXRdI82.js";const n="/assets/dns-record-Dpyx9OaP.png",l="/assets/website-routes-test-BUPD26Hi.png",h={};function r(p,s){return i(),t("div",null,s[0]||(s[0]=[a('<h1 id="dns-解析-github-pages" tabindex="-1"><a class="header-anchor" href="#dns-解析-github-pages"><span>DNS 解析 Github Pages</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>Github Pages 访问变得愈加困难了，所以不断有人私聊我笔记网站挂了。</p><h2 id="dns-解析" tabindex="-1"><a class="header-anchor" href="#dns-解析"><span>DNS 解析</span></a></h2><p>在访问网站时，需要通过 DNS 解析网站的地址，显然可以在 DNS 解析处解决该问题，是国内 IP 访问的就解析到本地（也有选择 Gitee 和 Coding），是国外 IP 访问就解析到 Github Pages。</p><p><img src="'+n+'" alt="dns record"></p><p>将域名的线路类型调整为 <strong>境外</strong>，再增加一条解析到国内的记录即可。</p><p>使用站长工具进行测试：</p><p><img src="'+l+'" alt="website routes test"></p><h2 id="https-失败" tabindex="-1"><a class="header-anchor" href="#https-失败"><span>HTTPS 失败</span></a></h2><p>操作完以上步骤后访问正常，但卡在了国内服务启用 HTTPS 失败，猜测是 HTTPS 服务商解析 DNS 优先走了 Github 的，于是：</p><ol><li>先停用该域名的所有解析</li><li>ping 域名确认失败</li><li>DNS 添加指向国内的解析</li><li>ping 域名确认指向国内</li><li>DNS 恢复指向 Github 的解析</li><li>测试结果成功</li></ol>',12)]))}const d=e(h,[["render",r],["__file","dns-resolve-github-pages.html.vue"]]),c=JSON.parse('{"path":"/tools/github/dns-resolve-github-pages.html","title":"DNS 解析 Github Pages","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"DNS 解析","slug":"dns-解析","link":"#dns-解析","children":[]},{"level":2,"title":"HTTPS 失败","slug":"https-失败","link":"#https-失败","children":[]}],"git":{"updatedTime":1636879761000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"tools/github/dns-resolve-github-pages.md"}');export{d as comp,c as data};
