import{_ as s,c as n,a as e,o as t}from"./app-DNXRdI82.js";const p={};function l(o,a){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="防火墙-firewalld" tabindex="-1"><a class="header-anchor" href="#防火墙-firewalld"><span>防火墙 firewalld</span></a></h1><p>firewalld 是 CentOS 7 新增的特性，其支持动态更新，且添加了防火墙 &quot;zones&quot; 的概念。</p><p>firewalld 与 iptables 自身并不具备防火墙的功能，都需要通过内核的 netfilter 来实现，它们的作用都是维护过滤的规则。</p><p>firewalld 的配置文件存放在 <code>/usr/lib/firewalld/</code> 和 <code>/etc/firewalld/</code> 里的 XML 文件中。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line">yum <span class="token function">install</span> firewalld firewall-config</span>
<span class="line"></span></code></pre></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><blockquote><p>可能需要先使用 systemctl 套件启用服务。</p><p>除了使用命令格式外，还可以使用 GUI，不过需要注意的是在登录时需要 <code>ssh -Y user@ip</code> 。</p></blockquote><div class="hint-container caution"><p class="hint-container-title">警告</p><p>firewall-cmd [Options ... ]</p></div><h3 id="_1-状态选项" tabindex="-1"><a class="header-anchor" href="#_1-状态选项"><span>1. 状态选项</span></a></h3><table><thead><tr><th>option</th><th>effect</th></tr></thead><tbody><tr><td>--state</td><td>firewalld 的状态。</td></tr><tr><td>--reload</td><td>不中断服务的重新加载。</td></tr><tr><td>--complete-reload</td><td>中断所有连接的重新加载。</td></tr><tr><td>--runtime-to-permanent</td><td>将当前防火墙的规则永久保存。</td></tr><tr><td>--check-config</td><td>检查配置正确性。</td></tr></tbody></table><h3 id="_2-日志选项" tabindex="-1"><a class="header-anchor" href="#_2-日志选项"><span>2. 日志选项</span></a></h3><table><thead><tr><th>option</th><th>effect</th></tr></thead><tbody><tr><td>--get-log-denied</td><td>获取记录被拒绝的日志。</td></tr><tr><td>--set-log-denied=value</td><td>设置记录被拒绝的日志，只能为 &#39;all&#39;,&#39;unicast&#39;,&#39;broadcast&#39;,&#39;multicast&#39;,&#39;off&#39; 其中的一个。</td></tr></tbody></table><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>在开始操作前需要对 zone 有一定的了解。</p><table><thead><tr><th>zone</th><th>zh</th><th>effect</th></tr></thead><tbody><tr><td>drop</td><td>丢弃</td><td>任何接收的网络数据包都被丢弃，没有任何回复。仅能有发送出去的网络连接。</td></tr><tr><td>block</td><td>限制</td><td>任何接收的网络连接都被 <code>IPv4</code> 的 icmp-host-prohibited 信息和 <code>IPv6</code> 的 icmp6-adm-prohibited 信息所拒绝。</td></tr><tr><td>public</td><td>公共</td><td>在公共区域内使用，不能相信网络内的其他计算机不会对您的计算机造成危害，只能接收经过选取的连接。</td></tr><tr><td>external</td><td>外部</td><td>特别是为路由器启用了伪装功能的外部网。您不能信任来自网络的其他计算，不能相信它们不会对您的计算机造成危害，只能接收经过选择的连接。</td></tr><tr><td>dmz</td><td>非军事区</td><td>用于您的非军事区内的电脑，此区域内可公开访问，可以有限地进入您的内部网络，仅仅接收经过选择的连接。</td></tr><tr><td>work</td><td>工作</td><td>用于工作区。您可以基本相信网络内的其他电脑不会危害您的电脑。仅仅接收经过选择的连接。</td></tr><tr><td>home</td><td>家庭</td><td>用于家庭网络。您可以基本信任网络内的其他计算机不会危害您的计算机。仅仅接收经过选择的连接。</td></tr><tr><td>internal</td><td>内部</td><td>用于内部网络。您可以基本上信任网络内的其他计算机不会威胁您的计算机。仅仅接受经过选择的连接。</td></tr><tr><td>trusted</td><td>信任</td><td>可接受所有的网络连接。</td></tr></tbody></table><p><code>firewalld</code> 里的默认区域被设定为公共区域。</p><h3 id="_1-service" tabindex="-1"><a class="header-anchor" href="#_1-service"><span>1. service</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示支持的 zone 列表：</span></span>
<span class="line">firewall-cmd --get-zones</span>
<span class="line"><span class="token comment"># 查看所有 zone 详情：</span></span>
<span class="line">firewall-cmd --list-all-zones</span>
<span class="line"><span class="token comment"># 查看某一 zone 详情：</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-all</span>
<span class="line"><span class="token comment"># 查看默认 zone：</span></span>
<span class="line">firewall-cmd --get-default-zone</span>
<span class="line"><span class="token comment"># 显示所有 services：</span></span>
<span class="line">firewall-cmd --get-services</span>
<span class="line"><span class="token comment"># 查看某一服务（返回 yes/no）：</span></span>
<span class="line">firewall-cmd --query-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span></span>
<span class="line">firewall-cmd --query-service<span class="token operator">=</span>http <span class="token comment"># no / 80</span></span>
<span class="line"><span class="token comment"># 显示当前 service：</span></span>
<span class="line">firewall-cmd --list-services</span>
<span class="line"><span class="token comment"># 添加服务：</span></span>
<span class="line">firewall-cmd --add-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 删除服务：</span></span>
<span class="line">firewall-cmd --remove-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 允许SSH服务通过：</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--enable</span> <span class="token assign-left variable">service</span><span class="token operator">=</span>ssh</span>
<span class="line"><span class="token comment"># 禁止SSH服务通过：</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--disable</span> <span class="token assign-left variable">service</span><span class="token operator">=</span>ssh</span>
<span class="line"><span class="token comment"># 添加服务至 zone：</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-service<span class="token operator">=</span><span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span> <span class="token parameter variable">--permanent</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-port" tabindex="-1"><a class="header-anchor" href="#_2-port"><span>2. port</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看所有端口：</span></span>
<span class="line">firewall-cmd --list-port</span>
<span class="line"><span class="token comment"># 查看某个端口：</span></span>
<span class="line">firewall-cmd --query-port<span class="token operator">=</span><span class="token number">22</span>/tcp</span>
<span class="line"><span class="token comment"># 添加某个端口：</span></span>
<span class="line">firewall-cmd --add-port<span class="token operator">=</span><span class="token number">22</span>/tcp <span class="token parameter variable">--permanent</span>  </span>
<span class="line"><span class="token comment"># 删除某个端口：</span></span>
<span class="line">firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">22</span>/tcp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将 80 端口的流量转发至 8080：</span></span>
<span class="line">firewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toport<span class="token operator">=</span><span class="token number">8080</span>   </span>
<span class="line"></span></code></pre></div><h3 id="_3-ip" tabindex="-1"><a class="header-anchor" href="#_3-ip"><span>3. IP</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查是否允许伪装 IP：</span></span>
<span class="line">firewall-cmd --query-masquerade</span>
<span class="line"><span class="token comment"># 允许防火墙伪装 IP：</span></span>
<span class="line">firewall-cmd --add-masquerade</span>
<span class="line"><span class="token comment"># 禁止防火墙伪装 IP：</span></span>
<span class="line">firewall-cmd --remove-masquerade</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 封禁某个 IP：</span></span>
<span class="line">firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=&quot;ip&quot; drop&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-rich-rule" tabindex="-1"><a class="header-anchor" href="#_4-rich-rule"><span>4. rich-rule</span></a></h3><p>多规则命令的格式或结构如下（及<a href="https://access.redhat.com/documentation/zh_cn/red_hat_enterprise_linux/7/html/security_guide/sec-using_firewalls#Configuring_Complex_Firewall_Rules_with_the_Rich-Language_Syntax" target="_blank" rel="noopener noreferrer">解释</a>）：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">rule <span class="token punctuation">[</span>family<span class="token operator">=</span><span class="token string">&quot;&lt;rule family&gt;&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> <span class="token builtin class-name">source</span> <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">&quot;&lt;address&gt;&quot;</span> <span class="token punctuation">[</span>invert<span class="token operator">=</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> destination <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">&quot;&lt;address&gt;&quot;</span> <span class="token punctuation">[</span>invert<span class="token operator">=</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> <span class="token operator">&lt;</span>element<span class="token operator">&gt;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> log <span class="token punctuation">[</span>prefix<span class="token operator">=</span><span class="token string">&quot;&lt;prefix text&gt;&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>level<span class="token operator">=</span><span class="token string">&quot;&lt;log level&gt;&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>limit <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">&quot;rate/duration&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> audit <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">[</span> accept<span class="token operator">|</span>reject<span class="token operator">|</span>drop <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div>`,25)]))}const c=s(p,[["render",l],["__file","firewalld.html.vue"]]),i=JSON.parse('{"path":"/os/linux/firewalld.html","title":"防火墙 firewalld","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[{"level":3,"title":"1. 状态选项","slug":"_1-状态选项","link":"#_1-状态选项","children":[]},{"level":3,"title":"2. 日志选项","slug":"_2-日志选项","link":"#_2-日志选项","children":[]}]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"1. service","slug":"_1-service","link":"#_1-service","children":[]},{"level":3,"title":"2. port","slug":"_2-port","link":"#_2-port","children":[]},{"level":3,"title":"3. IP","slug":"_3-ip","link":"#_3-ip","children":[]},{"level":3,"title":"4. rich-rule","slug":"_4-rich-rule","link":"#_4-rich-rule","children":[]}]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":4,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/firewalld.md"}');export{c as comp,i as data};
