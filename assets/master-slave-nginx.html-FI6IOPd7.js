import{_ as p,c as l,a,b as t,d as s,e as c,w as i,r as o,o as r}from"./app-BoSqM2g3.js";const k={};function d(u,n){const e=o("RouteLink");return r(),l("div",null,[n[3]||(n[3]=a('<h1 id="主从-nginx" tabindex="-1"><a class="header-anchor" href="#主从-nginx"><span>主从 Nginx</span></a></h1><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2><table><thead><tr><th>name</th><th>ip</th><th>role</th></tr></thead><tbody><tr><td>web01</td><td>10.0.0.133</td><td>MASTER</td></tr><tr><td>web02</td><td>10.0.0.134</td><td>BACKUP</td></tr></tbody></table>',3)),t("p",null,[n[1]||(n[1]=s("为虚拟机",-1)),c(e,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:i(()=>[...n[0]||(n[0]=[s("安装",-1)])]),_:1}),n[2]||(n[2]=s("好 Nginx 和 keepalived。",-1))]),n[4]||(n[4]=a(`<p>修改 Nginx 的主页便于之后识别：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /usr/local/nginx/html/index.html</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 分别为</span></span>
<span class="line"><span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span></span>
<span class="line"><span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span></span>
<span class="line"></span></code></pre></div><p>开放端口：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp</span>
<span class="line"></span></code></pre></div><p>验证结果：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.133</span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.134</span>
<span class="line"></span></code></pre></div><h2 id="配置主从" tabindex="-1"><a class="header-anchor" href="#配置主从"><span>配置主从</span></a></h2><h3 id="_1-master-web01" tabindex="-1"><a class="header-anchor" href="#_1-master-web01"><span>1. MASTER(web01)</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 配置 keepalived</span></span>
<span class="line"><span class="token function">vim</span> /etc/keepalived/keepalived.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改内容如下</span></span>
<span class="line">global_defs <span class="token punctuation">{</span></span>
<span class="line">   notification_email <span class="token punctuation">{</span></span>
<span class="line">     acassen@firewall.loc</span>
<span class="line">     failover@firewall.loc</span>
<span class="line">     sysadmin@firewall.loc</span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   notification_email_from Alexandre.Cassen@firewall.loc</span>
<span class="line">   smtp_server <span class="token number">192.168</span>.200.1</span>
<span class="line">   smtp_connect_timeout <span class="token number">30</span></span>
<span class="line">   router_id LVS_DEVEL</span>
<span class="line">   vrrp_skip_check_adv_addr</span>
<span class="line">   vrrp_strict</span>
<span class="line">   vrrp_garp_interval <span class="token number">0</span></span>
<span class="line">   vrrp_gna_interval <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">vrrp_script chk_nginx <span class="token punctuation">{</span></span>
<span class="line">    script <span class="token string">&quot;/etc/keepalived/nginx_check.sh&quot;</span></span>
<span class="line">    interval <span class="token number">2</span></span>
<span class="line">    weight <span class="token number">20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">vrrp_instance VI_1 <span class="token punctuation">{</span></span>
<span class="line">    state MASTER</span>
<span class="line">    interface eth0</span>
<span class="line">    virtual_router_id <span class="token number">51</span></span>
<span class="line">    mcast_src_ip <span class="token number">10.0</span>.0.133</span>
<span class="line">    priority <span class="token number">100</span></span>
<span class="line">    advert_int <span class="token number">1</span></span>
<span class="line">    authentication <span class="token punctuation">{</span></span>
<span class="line">        auth_type PASS</span>
<span class="line">        auth_pass <span class="token number">1111</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    virtual_ipaddress <span class="token punctuation">{</span></span>
<span class="line">        <span class="token number">10.0</span>.0.100</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-backup-web02" tabindex="-1"><a class="header-anchor" href="#_2-backup-web02"><span>2. BACKUP(web02)</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 配置 keepalived</span></span>
<span class="line"><span class="token function">vim</span> /etc/keepalived/keepalived.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改内容如下</span></span>
<span class="line">global_defs <span class="token punctuation">{</span></span>
<span class="line">   notification_email <span class="token punctuation">{</span></span>
<span class="line">     acassen@firewall.loc</span>
<span class="line">     failover@firewall.loc</span>
<span class="line">     sysadmin@firewall.loc</span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   notification_email_from Alexandre.Cassen@firewall.loc</span>
<span class="line">   smtp_server <span class="token number">192.168</span>.200.1</span>
<span class="line">   smtp_connect_timeout <span class="token number">30</span></span>
<span class="line">   router_id LVS_DEVEL</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">vrrp_script chk_nginx <span class="token punctuation">{</span></span>
<span class="line">    script <span class="token string">&quot;/etc/keepalived/nginx_check.sh&quot;</span></span>
<span class="line">    interval <span class="token number">2</span></span>
<span class="line">    weight <span class="token number">20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">vrrp_instance VI_1 <span class="token punctuation">{</span></span>
<span class="line">    state BACKUP</span>
<span class="line">    interface eth0</span>
<span class="line">    virtual_router_id <span class="token number">51</span></span>
<span class="line">    mcast_src_ip <span class="token number">10.0</span>.0.134</span>
<span class="line">    priority <span class="token number">80</span></span>
<span class="line">    advert_int <span class="token number">1</span></span>
<span class="line">    authentication <span class="token punctuation">{</span></span>
<span class="line">        auth_type PASS</span>
<span class="line">        auth_pass <span class="token number">1111</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    virtual_ipaddress <span class="token punctuation">{</span></span>
<span class="line">        <span class="token number">10.0</span>.0.100</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-check" tabindex="-1"><a class="header-anchor" href="#_3-check"><span>3. check</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 配置 check</span></span>
<span class="line"><span class="token function">vim</span> /etc/keepalived/nginx_check.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加内容如下</span></span>
<span class="line"><span class="token comment">#!/bin/bash</span></span>
<span class="line"><span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx –no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span></span>
<span class="line">        /usr/local/nginx/sbin/nginx</span>
<span class="line">        <span class="token function">sleep</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span></span>
<span class="line">                <span class="token function">killall</span> keepalived</span>
<span class="line">        <span class="token keyword">fi</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加执行权限</span></span>
<span class="line"><span class="token function">chmod</span> +x /etc/keepalived/nginx_check.sh </span>
<span class="line">ll /etc/keepalived <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><h3 id="_1-启用服务" tabindex="-1"><a class="header-anchor" href="#_1-启用服务"><span>1. 启用服务</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">systemctl start keepalived.service</span>
<span class="line"></span>
<span class="line"><span class="token function">ip</span> addr <span class="token comment"># 验证 web01 和 web02</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># web01</span></span>
<span class="line"><span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span></span>
<span class="line">    link/ether 00:0c:29:ea:d2:fc brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet <span class="token number">10.0</span>.0.133/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0</span>
<span class="line">       valid_lft 1305sec preferred_lft 1305sec</span>
<span class="line">    inet <span class="token number">10.0</span>.0.100/32 scope global eth0</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> noprefixroute </span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line"></span>
<span class="line"><span class="token comment"># web02（虚拟 ip 未启用）</span></span>
<span class="line"><span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span></span>
<span class="line">    link/ether 00:0c:29:82:f0:17 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet <span class="token number">10.0</span>.0.134/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0</span>
<span class="line">       valid_lft 869sec preferred_lft 869sec</span>
<span class="line">    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed </span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line"></span></code></pre></div><h3 id="_2-测试" tabindex="-1"><a class="header-anchor" href="#_2-测试"><span>2. 测试</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.100 <span class="token comment"># 虚拟 ip</span></span>
<span class="line"><span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># web01</span></span>
<span class="line">systemctl stop nginx-compile.service</span>
<span class="line">systemctl stop keepalived.service</span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-lntup</span> <span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">ip</span> addr <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># web02</span></span>
<span class="line"><span class="token function">ip</span> addr <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再次测试</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.100 <span class="token comment"># 虚拟 ip</span></span>
<span class="line"><span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span></span>
<span class="line"></span></code></pre></div>`,18))])}const h=p(k,[["render",d]]),f=JSON.parse('{"path":"/backend/nginx/master-slave-nginx.html","title":"主从 Nginx","lang":"zh-CN","frontmatter":{"description":"主从 Nginx"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"配置主从","slug":"配置主从","link":"#配置主从","children":[{"level":3,"title":"1. MASTER(web01)","slug":"_1-master-web01","link":"#_1-master-web01","children":[]},{"level":3,"title":"2. BACKUP(web02)","slug":"_2-backup-web02","link":"#_2-backup-web02","children":[]},{"level":3,"title":"3. check","slug":"_3-check","link":"#_3-check","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":3,"title":"1. 启用服务","slug":"_1-启用服务","link":"#_1-启用服务","children":[]},{"level":3,"title":"2. 测试","slug":"_2-测试","link":"#_2-测试","children":[]}]}],"git":{"updatedTime":1637394521000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"backend/nginx/master-slave-nginx.md"}');export{h as comp,f as data};
