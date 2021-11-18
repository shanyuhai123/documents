import{r as e,c as t,a as p,b as c,w as o,F as l,e as a,d as n,o as r}from"./app.bd2c6a6e.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const u={},d=a('<h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2><table><thead><tr><th>name</th><th>ip</th><th>role</th></tr></thead><tbody><tr><td>web01</td><td>10.0.0.133</td><td>MASTER</td></tr><tr><td>web02</td><td>10.0.0.134</td><td>BACKUP</td></tr></tbody></table>',2),k=n("\u4E3A\u865A\u62DF\u673A"),m=n("\u5B89\u88C5"),h=n("\u597D Nginx \u548C keepalived\u3002"),f=a(`<p>\u4FEE\u6539 Nginx \u7684\u4E3B\u9875\u4FBF\u4E8E\u4E4B\u540E\u8BC6\u522B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/html/index.html

<span class="token comment"># \u5206\u522B\u4E3A</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span>
</code></pre></div><p>\u5F00\u653E\u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
</code></pre></div><p>\u9A8C\u8BC1\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -i <span class="token number">10.0</span>.0.133
<span class="token function">curl</span> -i <span class="token number">10.0</span>.0.134
</code></pre></div><h2 id="\u914D\u7F6E\u4E3B\u4ECE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E3B\u4ECE" aria-hidden="true">#</a> \u914D\u7F6E\u4E3B\u4ECE</h2><h3 id="_1-master-web01" tabindex="-1"><a class="header-anchor" href="#_1-master-web01" aria-hidden="true">#</a> 1. MASTER(web01)</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E keepalived</span>
<span class="token function">vim</span> /etc/keepalived/keepalived.conf

<span class="token comment"># \u4FEE\u6539\u5185\u5BB9\u5982\u4E0B</span>
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
</code></pre></div><h3 id="_2-backup-web02" tabindex="-1"><a class="header-anchor" href="#_2-backup-web02" aria-hidden="true">#</a> 2. BACKUP(web02)</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E keepalived</span>
<span class="token function">vim</span> /etc/keepalived/keepalived.conf

<span class="token comment"># \u4FEE\u6539\u5185\u5BB9\u5982\u4E0B</span>
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
</code></pre></div><h3 id="_3-check" tabindex="-1"><a class="header-anchor" href="#_3-check" aria-hidden="true">#</a> 3. check</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E check</span>
<span class="token function">vim</span> /etc/keepalived/nginx_check.sh

<span class="token comment"># \u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -C nginx \u2013no-header <span class="token operator">|</span><span class="token function">wc</span> -l<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        /usr/local/nginx/sbin/nginx
        <span class="token function">sleep</span> <span class="token number">2</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -C nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> -l<span class="token variable">\`</span></span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
                <span class="token function">killall</span> keepalived
        <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># \u6DFB\u52A0\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> +x /etc/keepalived/nginx_check.sh 
ll /etc/keepalived <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><h3 id="_1-\u542F\u7528\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-\u542F\u7528\u670D\u52A1" aria-hidden="true">#</a> 1. \u542F\u7528\u670D\u52A1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl start keepalived.service

<span class="token function">ip</span> addr <span class="token comment"># \u9A8C\u8BC1 web01 \u548C web02</span>

<span class="token comment"># web01</span>
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:ea:d2:fc brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.0.133/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0
       valid_lft 1305sec preferred_lft 1305sec
    inet <span class="token number">10.0</span>.0.100/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> noprefixroute 
       valid_lft forever preferred_lft forever

<span class="token comment"># web02\uFF08\u865A\u62DF ip \u672A\u542F\u7528\uFF09</span>
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:82:f0:17 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.0.134/24 brd <span class="token number">10.0</span>.0.255 scope global noprefixroute dynamic eth0
       valid_lft 869sec preferred_lft 869sec
    inet6 fe80::5883:fca9:d7da:bd43/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed 
       valid_lft forever preferred_lft forever
</code></pre></div><h3 id="_2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4B\u8BD5" aria-hidden="true">#</a> 2. \u6D4B\u8BD5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -i <span class="token number">10.0</span>.0.100 <span class="token comment"># \u865A\u62DF ip</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx1!&lt;/h1&gt;</span>

<span class="token comment"># web01</span>
systemctl stop nginx-compile.service
systemctl stop keepalived.service
<span class="token function">netstat</span> -lntup <span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">ip</span> addr <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># web02</span>
<span class="token function">ip</span> addr <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># \u518D\u6B21\u6D4B\u8BD5</span>
<span class="token function">curl</span> -i <span class="token number">10.0</span>.0.100 <span class="token comment"># \u865A\u62DF ip</span>
<span class="token comment"># &lt;h1&gt;Welcome to nginx2!&lt;/h1&gt;</span>
</code></pre></div>`,18);function b(_,v){const s=e("RouterLink");return r(),t(l,null,[d,p("p",null,[k,c(s,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:o(()=>[m]),_:1}),h]),f],64)}var w=i(u,[["render",b]]);export{w as default};
