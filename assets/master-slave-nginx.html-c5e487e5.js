import{_ as e,M as t,p,q as c,Q as o,t as n,N as l,V as r,a1 as a}from"./framework-49860b1b.js";const i={},k=a('<h1 id="主从-nginx" tabindex="-1"><a class="header-anchor" href="#主从-nginx" aria-hidden="true">#</a> 主从 Nginx</h1><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><table><thead><tr><th>name</th><th>ip</th><th>role</th></tr></thead><tbody><tr><td>web01</td><td>10.0.0.133</td><td>MASTER</td></tr><tr><td>web02</td><td>10.0.0.134</td><td>BACKUP</td></tr></tbody></table>',3),d=a(`<p>修改 Nginx 的主页便于之后识别：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/html/index.html

<span class="token comment"># 分别为</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span>
</code></pre></div><p>开放端口：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
</code></pre></div><p>验证结果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.133
<span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.134
</code></pre></div><h2 id="配置主从" tabindex="-1"><a class="header-anchor" href="#配置主从" aria-hidden="true">#</a> 配置主从</h2><h3 id="_1-master-web01" tabindex="-1"><a class="header-anchor" href="#_1-master-web01" aria-hidden="true">#</a> 1. MASTER(web01)</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 keepalived</span>
<span class="token function">vim</span> /etc/keepalived/keepalived.conf

<span class="token comment"># 修改内容如下</span>
global_defs <span class="token punctuation">{</span>
   notification_email <span class="token punctuation">{</span>
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   <span class="token punctuation">}</span>
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server <span class="token number">192.168</span>.200.1
   smtp_connect_timeout <span class="token number">30</span>
   router_id LVS_DEVEL
   vrrp_skip_check_adv_addr
   vrrp_strict
   vrrp_garp_interval <span class="token number">0</span>
   vrrp_gna_interval <span class="token number">0</span>
<span class="token punctuation">}</span>

vrrp_script chk_nginx <span class="token punctuation">{</span>
    script <span class="token string">&quot;/etc/keepalived/nginx_check.sh&quot;</span>
    interval <span class="token number">2</span>
    weight <span class="token number">20</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state MASTER
    interface eth0
    virtual_router_id <span class="token number">51</span>
    mcast_src_ip <span class="token number">10.0</span>.0.133
    priority <span class="token number">100</span>
    advert_int <span class="token number">1</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass <span class="token number">1111</span>
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.0</span>.0.100
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-backup-web02" tabindex="-1"><a class="header-anchor" href="#_2-backup-web02" aria-hidden="true">#</a> 2. BACKUP(web02)</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 keepalived</span>
<span class="token function">vim</span> /etc/keepalived/keepalived.conf

<span class="token comment"># 修改内容如下</span>
global_defs <span class="token punctuation">{</span>
   notification_email <span class="token punctuation">{</span>
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   <span class="token punctuation">}</span>
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server <span class="token number">192.168</span>.200.1
   smtp_connect_timeout <span class="token number">30</span>
   router_id LVS_DEVEL
<span class="token punctuation">}</span>

vrrp_script chk_nginx <span class="token punctuation">{</span>
    script <span class="token string">&quot;/etc/keepalived/nginx_check.sh&quot;</span>
    interval <span class="token number">2</span>
    weight <span class="token number">20</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    mcast_src_ip <span class="token number">10.0</span>.0.134
    priority <span class="token number">80</span>
    advert_int <span class="token number">1</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass <span class="token number">1111</span>
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.0</span>.0.100
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-check" tabindex="-1"><a class="header-anchor" href="#_3-check" aria-hidden="true">#</a> 3. check</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 check</span>
<span class="token function">vim</span> /etc/keepalived/nginx_check.sh

<span class="token comment"># 添加内容如下</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx –no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        /usr/local/nginx/sbin/nginx
        <span class="token function">sleep</span> <span class="token number">2</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
                <span class="token function">killall</span> keepalived
        <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># 添加执行权限</span>
<span class="token function">chmod</span> +x /etc/keepalived/nginx_check.sh 
ll /etc/keepalived <span class="token comment"># 验证</span>
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="_1-启用服务" tabindex="-1"><a class="header-anchor" href="#_1-启用服务" aria-hidden="true">#</a> 1. 启用服务</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl start keepalived.service

<span class="token function">ip</span> addr <span class="token comment"># 验证 web01 和 web02</span>

<span class="token comment"># web01</span>
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:ea:d2:fc brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.0.133/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0
       valid_lft 1305sec preferred_lft 1305sec
    inet <span class="token number">10.0</span>.0.100/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> noprefixroute 
       valid_lft forever preferred_lft forever

<span class="token comment"># web02（虚拟 ip 未启用）</span>
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:82:f0:17 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.0.134/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0
       valid_lft 869sec preferred_lft 869sec
    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed 
       valid_lft forever preferred_lft forever
</code></pre></div><h3 id="_2-测试" tabindex="-1"><a class="header-anchor" href="#_2-测试" aria-hidden="true">#</a> 2. 测试</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.100 <span class="token comment"># 虚拟 ip</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span>

<span class="token comment"># web01</span>
systemctl stop nginx-compile.service
systemctl stop keepalived.service
<span class="token function">netstat</span> <span class="token parameter variable">-lntup</span> <span class="token comment"># 验证</span>
<span class="token function">ip</span> addr <span class="token comment"># 验证</span>

<span class="token comment"># web02</span>
<span class="token function">ip</span> addr <span class="token comment"># 验证</span>

<span class="token comment"># 再次测试</span>
<span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.100 <span class="token comment"># 虚拟 ip</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span>
</code></pre></div>`,18);function u(m,h){const s=t("RouterLink");return p(),c("div",null,[k,o("p",null,[n("为虚拟机"),l(s,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:r(()=>[n("安装")]),_:1}),n("好 Nginx 和 keepalived。")]),d])}const b=e(i,[["render",u],["__file","master-slave-nginx.html.vue"]]);export{b as default};
