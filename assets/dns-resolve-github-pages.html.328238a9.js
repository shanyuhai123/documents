import{o as a,c as i,a as e,F as r,b as l,d}from"./app.8ebc0fbd.js";const n={},s=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),l(" 前言")],-1),t=e("p",null,"Github Pages 访问变得愈加困难了，所以不断有人私聊我笔记网站挂了。",-1),h=e("h2",{id:"dns-解析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dns-解析","aria-hidden":"true"},"#"),l(" DNS 解析")],-1),o=e("p",null,"在访问网站时，需要通过 DNS 解析网站的地址，显然可以在 DNS 解析处解决该问题，是国内 IP 访问的就解析到本地（也有选择 Gitee 和 Coding），是国外 IP 访问就解析到 Github Pages。",-1),p=d('<p>将域名的线路类型调整为 <strong>境外</strong>，再增加一条解析到国内的记录即可。</p><h2 id="https-失败" tabindex="-1"><a class="header-anchor" href="#https-失败" aria-hidden="true">#</a> HTTPS 失败</h2><p>操作完以上步骤后访问正常，但卡在了国内服务启用 HTTPS 失败，猜测是 HTTPS 服务商解析 DNS 优先走了 Github 的，于是：</p><ol><li>先停用该域名的所有解析</li><li>ping 域名确认失败</li><li>DNS 添加指向国内的解析</li><li>ping 域名确认指向国内</li><li>DNS 恢复指向 Github 的解析</li><li>测试结果成功</li></ol>',4);n.render=function(l,d){return a(),i(r,null,[s,t,h,o,e("img",{src:l.$withBase("/tools/github/dns-record-head.png"),alt:"DNS record head"},null,8,["src"]),p],64)};export default n;
