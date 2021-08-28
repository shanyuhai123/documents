import{r as a,o as s,c as n,a as t,b as e,F as o,e as p,d as r}from"./app.984671f0.js";const c={},l=p('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>firewalld 是 CentOS 7 新增的特性，其支持动态更新，且添加了防火墙 &quot;zones&quot; 的概念。</p><p>firewalld 与 iptables 自身并不具备防火墙的功能，都需要通过内核的 netfilter 来实现，它们的作用都是维护过滤的规则。</p><p>firewalld 的配置文件存放在 <code>/usr/lib/firewalld/</code> 和 <code>/etc/firewalld/</code> 里的 XML 文件中。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>\nyum <span class="token function">install</span> firewalld firewall-config\n</code></pre></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><blockquote><p>可能需要先使用 systemctl 套件启用服务。</p><p>除了使用命令格式外，还可以使用 GUI，不过需要注意的是在登录时需要 <code>ssh -Y user@ip</code> 。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>firewall-cmd [Options ... ]</p></div><h3 id="_1-状态选项" tabindex="-1"><a class="header-anchor" href="#_1-状态选项" aria-hidden="true">#</a> 1. 状态选项</h3><table><thead><tr><th>option</th><th>effect</th></tr></thead><tbody><tr><td>--state</td><td>firewalld 的状态。</td></tr><tr><td>--reload</td><td>不中断服务的重新加载。</td></tr><tr><td>--complete-reload</td><td>中断所有连接的重新加载。</td></tr><tr><td>--runtime-to-permanent</td><td>将当前防火墙的规则永久保存。</td></tr><tr><td>--check-config</td><td>检查配置正确性。</td></tr></tbody></table><h3 id="_2-日志选项" tabindex="-1"><a class="header-anchor" href="#_2-日志选项" aria-hidden="true">#</a> 2. 日志选项</h3><table><thead><tr><th>option</th><th>effect</th></tr></thead><tbody><tr><td>--get-log-denied</td><td>获取记录被拒绝的日志。</td></tr><tr><td>--set-log-denied=value</td><td>设置记录被拒绝的日志，只能为 &#39;all&#39;,&#39;unicast&#39;,&#39;broadcast&#39;,&#39;multicast&#39;,&#39;off&#39; 其中的一个。</td></tr></tbody></table><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><p>在开始操作前需要对 zone 有一定的了解。</p><table><thead><tr><th>zone</th><th>zh</th><th>effect</th></tr></thead><tbody><tr><td>drop</td><td>丢弃</td><td>任何接收的网络数据包都被丢弃，没有任何回复。仅能有发送出去的网络连接。</td></tr><tr><td>block</td><td>限制</td><td>任何接收的网络连接都被 <code>IPv4</code> 的 icmp-host-prohibited 信息和 <code>IPv6</code> 的 icmp6-adm-prohibited 信息所拒绝。</td></tr><tr><td>public</td><td>公共</td><td>在公共区域内使用，不能相信网络内的其他计算机不会对您的计算机造成危害，只能接收经过选取的连接。</td></tr><tr><td>external</td><td>外部</td><td>特别是为路由器启用了伪装功能的外部网。您不能信任来自网络的其他计算，不能相信它们不会对您的计算机造成危害，只能接收经过选择的连接。</td></tr><tr><td>dmz</td><td>非军事区</td><td>用于您的非军事区内的电脑，此区域内可公开访问，可以有限地进入您的内部网络，仅仅接收经过选择的连接。</td></tr><tr><td>work</td><td>工作</td><td>用于工作区。您可以基本相信网络内的其他电脑不会危害您的电脑。仅仅接收经过选择的连接。</td></tr><tr><td>home</td><td>家庭</td><td>用于家庭网络。您可以基本信任网络内的其他计算机不会危害您的计算机。仅仅接收经过选择的连接。</td></tr><tr><td>internal</td><td>内部</td><td>用于内部网络。您可以基本上信任网络内的其他计算机不会威胁您的计算机。仅仅接受经过选择的连接。</td></tr><tr><td>trusted</td><td>信任</td><td>可接受所有的网络连接。</td></tr></tbody></table><p><code>firewalld</code> 里的默认区域被设定为公共区域。</p><h3 id="_1-service" tabindex="-1"><a class="header-anchor" href="#_1-service" aria-hidden="true">#</a> 1. service</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 显示支持的 zone 列表：</span>\nfirewall-cmd --get-zones\n<span class="token comment"># 查看所有 zone 详情：</span>\nfirewall-cmd --list-all-zones\n<span class="token comment"># 查看某一 zone 详情：</span>\nfirewall-cmd --zone<span class="token operator">=</span>public --list-all\n<span class="token comment"># 查看默认 zone：</span>\nfirewall-cmd --get-default-zone\n<span class="token comment"># 显示所有 services：</span>\nfirewall-cmd --get-services\n<span class="token comment"># 查看某一服务（返回 yes/no）：</span>\nfirewall-cmd --query-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span>\nfirewall-cmd --query-service<span class="token operator">=</span>http <span class="token comment"># no / 80</span>\n<span class="token comment"># 显示当前 service：</span>\nfirewall-cmd --list-services\n<span class="token comment"># 添加服务：</span>\nfirewall-cmd --add-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span>\n<span class="token comment"># 删除服务：</span>\nfirewall-cmd --remove-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span>\n<span class="token comment"># 允许SSH服务通过：</span>\nfirewall-cmd --enable <span class="token assign-left variable">service</span><span class="token operator">=</span>ssh\n<span class="token comment"># 禁止SSH服务通过：</span>\nfirewall-cmd --disable <span class="token assign-left variable">service</span><span class="token operator">=</span>ssh\n<span class="token comment"># 添加服务至 zone：</span>\nfirewall-cmd --zone<span class="token operator">=</span>public --add-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span> --permanent\n</code></pre></div><h3 id="_2-port" tabindex="-1"><a class="header-anchor" href="#_2-port" aria-hidden="true">#</a> 2. port</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 查看所有端口：</span>\nfirewall-cmd --list-port\n<span class="token comment"># 查看某个端口：</span>\nfirewall-cmd --query-port<span class="token operator">=</span><span class="token number">22</span>/tcp\n<span class="token comment"># 添加某个端口：</span>\nfirewall-cmd --add-port<span class="token operator">=</span><span class="token number">22</span>/tcp --permanent  \n<span class="token comment"># 删除某个端口：</span>\nfirewall-cmd --remove-port<span class="token operator">=</span><span class="token number">22</span>/tcp\n\n<span class="token comment"># 将 80 端口的流量转发至 8080：</span>\nfirewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toport<span class="token operator">=</span><span class="token number">8080</span>   \n</code></pre></div><h3 id="_3-ip" tabindex="-1"><a class="header-anchor" href="#_3-ip" aria-hidden="true">#</a> 3. IP</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 检查是否允许伪装 IP：</span>\nfirewall-cmd --query-masquerade\n<span class="token comment"># 允许防火墙伪装 IP：</span>\nfirewall-cmd --add-masquerade\n<span class="token comment"># 禁止防火墙伪装 IP：</span>\nfirewall-cmd --remove-masquerade\n\n<span class="token comment"># 封禁某个 IP：</span>\nfirewall-cmd --permanent --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=&quot;ip&quot; drop&#39;</span>\n</code></pre></div><h3 id="_4-rich-rule" tabindex="-1"><a class="header-anchor" href="#_4-rich-rule" aria-hidden="true">#</a> 4. rich-rule</h3>',23),d=r("多规则命令的格式或结构如下（及"),i={href:"https://access.redhat.com/documentation/zh_cn/red_hat_enterprise_linux/7/html/security_guide/sec-using_firewalls#Configuring_Complex_Firewall_Rules_with_the_Rich-Language_Syntax",target:"_blank",rel:"noopener noreferrer"},u=r("解释"),h=r("）："),k=p('<div class="language-bash ext-sh"><pre class="language-bash"><code>rule <span class="token punctuation">[</span>family<span class="token operator">=</span><span class="token string">&quot;&lt;rule family&gt;&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> <span class="token builtin class-name">source</span> <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">&quot;&lt;address&gt;&quot;</span> <span class="token punctuation">[</span>invert<span class="token operator">=</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> destination <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">&quot;&lt;address&gt;&quot;</span> <span class="token punctuation">[</span>invert<span class="token operator">=</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> <span class="token operator">&lt;</span>element<span class="token operator">&gt;</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> log <span class="token punctuation">[</span>prefix<span class="token operator">=</span><span class="token string">&quot;&lt;prefix text&gt;&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>level<span class="token operator">=</span><span class="token string">&quot;&lt;log level&gt;&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>limit <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">&quot;rate/duration&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> audit <span class="token punctuation">]</span>\n    <span class="token punctuation">[</span> accept<span class="token operator">|</span>reject<span class="token operator">|</span>drop <span class="token punctuation">]</span>\n</code></pre></div>',1);c.render=function(p,r){const c=a("OutboundLink");return s(),n(o,null,[l,t("p",null,[d,t("a",i,[u,e(c)]),h]),k],64)};export{c as default};
