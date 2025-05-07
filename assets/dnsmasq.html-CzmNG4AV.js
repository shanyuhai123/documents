import{_ as a,c as n,a as e,o as l}from"./app-BCSwjUcF.js";const p={};function t(c,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="dnsmasq" tabindex="-1"><a class="header-anchor" href="#dnsmasq"><span>Dnsmasq</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>一开始选择了 <a href="https://www.isc.org/bind/" target="_blank" rel="noopener noreferrer">bind</a>，试用后觉得配置麻烦就选择了更为轻量的 <a href="http://www.thekelleys.org.uk/dnsmasq/doc.html" target="_blank" rel="noopener noreferrer">dnsmasq</a>。</p><p>该笔记基本参考 <a href="https://www.cnblogs.com/pyyu/p/10318334.html" target="_blank" rel="noopener noreferrer">CentOS7 安装 dnsmaqs 局域网 DNS</a>。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="_1-基本环境" tabindex="-1"><a class="header-anchor" href="#_1-基本环境"><span>1. 基本环境</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum <span class="token function">install</span> bind-utils dnsmasq <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-备份" tabindex="-1"><a class="header-anchor" href="#_2-备份"><span>2. 备份</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> /etc/dnsmasq.conf /etc/dnsmasq.conf.bak</span>
<span class="line"></span></code></pre></div><h3 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置"><span>3. 配置</span></a></h3><p>在 <code>/etc/dnsmasq.conf</code> 中可以看到都是注释项，所以猜测清空所有再增加也可：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">53</span></span>
<span class="line"><span class="token comment"># 表示严格按照 resolv-file 文件中的顺序从上到下进行 DNS 解析, 直到第一个成功解析成功为止</span></span>
<span class="line">strict-order</span>
<span class="line"><span class="token comment"># 指定上游dns服务器</span></span>
<span class="line">resolv-file<span class="token operator">=</span>/etc/resolv.dnsmasq.conf</span>
<span class="line"><span class="token comment"># 自定义的dns记录文件</span></span>
<span class="line">addn-hosts<span class="token operator">=</span>/etc/dnsmasq.hosts</span>
<span class="line"><span class="token comment"># 设为当前服务器</span></span>
<span class="line">listen-address<span class="token operator">=</span><span class="token number">192.168</span>.0.42</span>
<span class="line"><span class="token comment"># 缓存大小</span></span>
<span class="line">cache-size<span class="token operator">=</span><span class="token number">150</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 注意该项是否正确（我在启用时网卡指向了另外一个）</span></span>
<span class="line"><span class="token assign-left variable">interface</span><span class="token operator">=</span>eth0</span>
<span class="line"></span></code></pre></div><p>填写上游 DNS 服务：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /etc/resolv.dnsmasq.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 写入</span></span>
<span class="line">nameserver <span class="token number">223.5</span>.5.5</span>
<span class="line">nameserver <span class="token number">223.6</span>.6.6</span>
<span class="line">nameserver <span class="token number">114.114</span>.114.114</span>
<span class="line"></span></code></pre></div><p>填写自建的 DNS 解析：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /etc/dnsmasq.hosts</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 写入</span></span>
<span class="line"><span class="token number">192.168</span>.0.144 test.com</span>
<span class="line"></span></code></pre></div><p>将当前主机的 DNS 服务指向 <code>dnsmasq</code>，若重启失效那么需要对 <code>NetworkManager</code> 进行配置。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /etc/resolv.conf</span>
<span class="line"></span>
<span class="line">nameserver <span class="token number">192.168</span>.0.42</span>
<span class="line"></span></code></pre></div><p>最后重启服务：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查配置正确</span></span>
<span class="line">dnsmasq <span class="token parameter variable">--test</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line">systemctl restart dnsmasq</span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>切换到其他主机下：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">dig</span> @192.168.0.42 test.com</span>
<span class="line"></span></code></pre></div><p>如果测试失败，可以考虑端口是否被防火墙拦截：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">telnet <span class="token number">192.168</span>.0.42 <span class="token number">53</span></span>
<span class="line"></span></code></pre></div>`,25)]))}const r=a(p,[["render",t]]),o=JSON.parse('{"path":"/os/linux/dnsmasq.html","title":"Dnsmasq","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"1. 基本环境","slug":"_1-基本环境","link":"#_1-基本环境","children":[]},{"level":3,"title":"2. 备份","slug":"_2-备份","link":"#_2-备份","children":[]},{"level":3,"title":"3. 配置","slug":"_3-配置","link":"#_3-配置","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/dnsmasq.md"}');export{r as comp,o as data};
