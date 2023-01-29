import{_ as o,M as c,p as t,q as p,Q as s,t as a,N as r,a1 as n}from"./framework-49860b1b.js";const l={},i=n(`<h1 id="终端代理-proxychains" tabindex="-1"><a class="header-anchor" href="#终端代理-proxychains" aria-hidden="true">#</a> 终端代理 proxychains</h1><h2 id="proxychains-ng" tabindex="-1"><a class="header-anchor" href="#proxychains-ng" aria-hidden="true">#</a> proxychains-ng</h2><p>浏览器代理及应用代理均不存在问题，而终端代理总是出现各种奇怪的问题。</p><p>曾经使用以下方式，然后不知道被自己更新了什么就都失效了。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ALL_PROXY</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://127.0.0.1:1080

<span class="token comment"># git</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
</code></pre></div>`,5),d={href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"},h=n(`<p>安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> proxychains-ng
</code></pre></div><p>修改配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/proxychains.conf

<span class="token comment"># 注释掉 proxy_dns</span>
<span class="token comment"># proxy_dns</span>
<span class="token comment"># 最后一行改为对应的代理</span>
socks5 <span class="token number">127.0</span>.0.1 <span class="token number">1080</span>
</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li><p>curl</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>proxychains <span class="token function">curl</span> www.google.com
</code></pre></div></li><li><p>git</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>proxychains <span class="token function">git</span> clone git@github.com:rofl0r/proxychains-ng.git
</code></pre></div></li><li><p>yay</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>proxychains yay <span class="token parameter variable">-S</span> microsoft-edge
</code></pre></div></li></ol>`,6);function g(u,x){const e=c("ExternalLinkIcon");return t(),p("div",null,[i,s("p",null,[a("最后接触了 "),s("a",d,[a("proxychains-ng"),r(e)]),a("，感觉其更加强大与简单。")]),h])}const k=o(l,[["render",g],["__file","terminal-agent.html.vue"]]);export{k as default};
