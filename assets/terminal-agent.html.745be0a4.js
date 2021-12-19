import{r as o,c,a as s,b as t,F as p,e as n,d as a,o as r}from"./app.bf0b2e7a.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const l={},h=n(`<h1 id="\u7EC8\u7AEF\u4EE3\u7406-proxychains" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u7AEF\u4EE3\u7406-proxychains" aria-hidden="true">#</a> \u7EC8\u7AEF\u4EE3\u7406 proxychains</h1><h2 id="proxychains-ng" tabindex="-1"><a class="header-anchor" href="#proxychains-ng" aria-hidden="true">#</a> proxychains-ng</h2><p>\u6D4F\u89C8\u5668\u4EE3\u7406\u53CA\u5E94\u7528\u4EE3\u7406\u5747\u4E0D\u5B58\u5728\u95EE\u9898\uFF0C\u800C\u7EC8\u7AEF\u4EE3\u7406\u603B\u662F\u51FA\u73B0\u5404\u79CD\u5947\u602A\u7684\u95EE\u9898\u3002</p><p>\u66FE\u7ECF\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\uFF0C\u7136\u540E\u4E0D\u77E5\u9053\u88AB\u81EA\u5DF1\u66F4\u65B0\u4E86\u4EC0\u4E48\u5C31\u90FD\u5931\u6548\u4E86\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># ALL_PROXY</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://127.0.0.1:1080

<span class="token comment"># git</span>
<span class="token function">git</span> config --global http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
</code></pre></div>`,5),d=a("\u6700\u540E\u63A5\u89E6\u4E86 "),g={href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"},u=a("proxychains-ng"),x=a("\uFF0C\u611F\u89C9\u5176\u66F4\u52A0\u5F3A\u5927\u4E0E\u7B80\u5355\u3002"),m=n(`<p>\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S proxychains-ng
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/proxychains.conf

<span class="token comment"># \u6CE8\u91CA\u6389 proxy_dns</span>
<span class="token comment"># proxy_dns</span>
<span class="token comment"># \u6700\u540E\u4E00\u884C\u6539\u4E3A\u5BF9\u5E94\u7684\u4EE3\u7406</span>
socks5 <span class="token number">127.0</span>.0.1 <span class="token number">1080</span>
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ol><li><p>curl</p><div class="language-bash ext-sh"><pre class="language-bash"><code>proxychains <span class="token function">curl</span> www.google.com
</code></pre></div></li><li><p>git</p><div class="language-bash ext-sh"><pre class="language-bash"><code>proxychains <span class="token function">git</span> clone git@github.com:rofl0r/proxychains-ng.git
</code></pre></div></li><li><p>yay</p><div class="language-bash ext-sh"><pre class="language-bash"><code>proxychains yay -S microsoft-edge
</code></pre></div></li></ol>`,6);function _(b,f){const e=o("OutboundLink");return r(),c(p,null,[h,s("p",null,[d,s("a",g,[u,t(e)]),x]),m],64)}var v=i(l,[["render",_]]);export{v as default};
