import{_ as o,M as r,p,q as d,R as n,t as a,N as t,a1 as l}from"./framework-e3e34937.js";const c={},i={href:"https://www.isc.org/bind/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.thekelleys.org.uk/dnsmasq/doc.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/pyyu/p/10318334.html",target:"_blank",rel:"noopener noreferrer"};function u(b,s){const e=r("ExternalLinkIcon");return p(),d("div",null,[s[8]||(s[8]=n("h1",{id:"dnsmasq",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dnsmasq","aria-hidden":"true"},"#"),a(" Dnsmasq")],-1)),s[9]||(s[9]=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1)),n("p",null,[s[2]||(s[2]=a("一开始选择了 ")),n("a",i,[s[0]||(s[0]=a("bind")),t(e)]),s[3]||(s[3]=a("，试用后觉得配置麻烦就选择了更为轻量的 ")),n("a",m,[s[1]||(s[1]=a("dnsmasq")),t(e)]),s[4]||(s[4]=a("。"))]),n("p",null,[s[6]||(s[6]=a("该笔记基本参考 ")),n("a",h,[s[5]||(s[5]=a("CentOS7 安装 dnsmaqs 局域网 DNS")),t(e)]),s[7]||(s[7]=a("。"))]),s[10]||(s[10]=l(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="_1-基本环境" tabindex="-1"><a class="header-anchor" href="#_1-基本环境" aria-hidden="true">#</a> 1. 基本环境</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> bind-utils dnsmasq <span class="token parameter variable">-y</span>
</code></pre></div><h3 id="_2-备份" tabindex="-1"><a class="header-anchor" href="#_2-备份" aria-hidden="true">#</a> 2. 备份</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/dnsmasq.conf /etc/dnsmasq.conf.bak
</code></pre></div><h3 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h3><p>在 <code>/etc/dnsmasq.conf</code> 中可以看到都是注释项，所以猜测清空所有再增加也可：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">53</span>
<span class="token comment"># 表示严格按照 resolv-file 文件中的顺序从上到下进行 DNS 解析, 直到第一个成功解析成功为止</span>
strict-order
<span class="token comment"># 指定上游dns服务器</span>
resolv-file<span class="token operator">=</span>/etc/resolv.dnsmasq.conf
<span class="token comment"># 自定义的dns记录文件</span>
addn-hosts<span class="token operator">=</span>/etc/dnsmasq.hosts
<span class="token comment"># 设为当前服务器</span>
listen-address<span class="token operator">=</span><span class="token number">192.168</span>.0.42
<span class="token comment"># 缓存大小</span>
cache-size<span class="token operator">=</span><span class="token number">150</span>


<span class="token comment"># 注意该项是否正确（我在启用时网卡指向了另外一个）</span>
<span class="token assign-left variable">interface</span><span class="token operator">=</span>eth0
</code></pre></div><p>填写上游 DNS 服务：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/resolv.dnsmasq.conf

<span class="token comment"># 写入</span>
nameserver <span class="token number">223.5</span>.5.5
nameserver <span class="token number">223.6</span>.6.6
nameserver <span class="token number">114.114</span>.114.114
</code></pre></div><p>填写自建的 DNS 解析：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/dnsmasq.hosts

<span class="token comment"># 写入</span>
<span class="token number">192.168</span>.0.144 test.com
</code></pre></div><p>将当前主机的 DNS 服务指向 <code>dnsmasq</code>，若重启失效那么需要对 <code>NetworkManager</code> 进行配置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/resolv.conf

nameserver <span class="token number">192.168</span>.0.42
</code></pre></div><p>最后重启服务：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查配置正确</span>
dnsmasq <span class="token parameter variable">--test</span>

<span class="token comment"># 重启</span>
systemctl restart dnsmasq
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>切换到其他主机下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dig</span> @192.168.0.42 test.com
</code></pre></div><p>如果测试失败，可以考虑端口是否被防火墙拦截：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>telnet <span class="token number">192.168</span>.0.42 <span class="token number">53</span>
</code></pre></div>`,21))])}const g=o(c,[["render",u],["__file","dnsmasq.html.vue"]]);export{g as default};
