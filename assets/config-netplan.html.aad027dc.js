import{r as t,c as o,a as n,b as p,F as c,e as s,d as a,o as l}from"./app.ceb5dd2d.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=s(`<h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><p><code>Ubuntu20.04</code></p><h2 id="eth-netplan" tabindex="-1"><a class="header-anchor" href="#eth-netplan" aria-hidden="true">#</a> ETH netplan</h2><p>\u914D\u7F6E\u4E86 <code>/etc/network/interfaces</code> \u53D1\u73B0\u5E76\u672A\u751F\u6548\uFF0C\u5F97\u77E5\u9700\u8981\u4FEE\u6539 <code>/etc/netplan</code> \u7684\u914D\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml

<span class="token comment"># \u7B2C\u4E00\u79CD</span>
network:
  ethernets:
    enp5s0:
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.111/24<span class="token punctuation">]</span>
      dhcp4: no
      optional: <span class="token boolean">true</span>
      gateway4: <span class="token number">192.168</span>.0.1
      nameservers:
        addresses: <span class="token punctuation">[</span><span class="token number">223.5</span>.5.5,223.6.6.6<span class="token punctuation">]</span>
  version: <span class="token number">2</span>
  
<span class="token comment"># \u7B2C\u4E8C\u79CD\u5947\u602A\u7684\u914D\u7F6E\uFF0C\u4F46\u662F\u4E5F\u5F88\u597D\u7528</span>
network:
  ethernets:
    enp5s0:
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.111/24<span class="token punctuation">]</span>
      dhcp4: <span class="token function">yes</span>
  version: <span class="token number">2</span>
<span class="token comment"># \u7B2C\u4E8C\u79CD\u7684 ip addr \u7ED3\u679C</span>
inet <span class="token number">192.168</span>.0.111/24 brd <span class="token number">192.168</span>.0.255 scope global enp5s0
valid_lft forever preferred_lft forever
inet <span class="token number">192.168</span>.0.104/24 brd <span class="token number">192.168</span>.0.255 scope global secondary dynamic enp5s0
valid_lft 7199sec preferred_lft 7199sec
</code></pre></div><p>\u4F7F\u914D\u7F6E\u751F\u6548\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> netplan generate
<span class="token function">sudo</span> netplan apply
</code></pre></div><p>\u914D\u7F6E\u5B8C\u540E\u540C\u6BB5\u5185\u7684\u673A\u5668\u53EF\u4EE5 ping \u901A\uFF0C\u5E76\u901A\u8FC7 ssh \u8FDB\u4E00\u6B65\u6D4B\u8BD5\u3002</p><h2 id="\u5B89\u88C5\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u9A71\u52A8" aria-hidden="true">#</a> \u5B89\u88C5\u9A71\u52A8</h2><p>\u5982\u679C\u6709 WIFI \u7F51\u5361\uFF0C\u5219\u53EF\u8DF3\u8FC7\u5B89\u88C5\u9A71\u52A8\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ip</span> addr
</code></pre></div><blockquote><p>\u6298\u817E\u8BB8\u4E45\uFF0C\u624D\u53D1\u73B0\u662F Linux \u5185\u6838\u4E0D\u652F\u6301\u8001\u7F51\u5361\u3002</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>lshw -C network

<span class="token comment"># \u7ED3\u679C</span>
*-network UNCLAIMED <span class="token comment"># \u672A\u8BC6\u522B       </span>
       description: Network controller
       product: BCM43142 <span class="token number">802</span>.11b/g/n
       vendor: Broadcom Inc. and subsidiaries
       physical id: <span class="token number">0</span>
       bus info: pci@0000:04:00.0
       version: 01
       width: <span class="token number">64</span> bits
       clock: 33MHz
       capabilities: bus_master cap_list
       configuration: <span class="token assign-left variable">latency</span><span class="token operator">=</span><span class="token number">0</span>
       resources: memory:e3500000-e3507fff
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>sudo apt install firmware-b43-installer
</code></pre></div>`,14),u={href:"https://askubuntu.com/questions/765584/is-it-possible-to-use-broadcom-bcm43142-wifi-in-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"},k=a("\u89E3\u51B3\u65B9\u6848"),b=a("\uFF1A"),m=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> bcmwl-kernel-source

<span class="token comment"># \u4FEE\u6539\u9ED1\u540D\u5355</span>
<span class="token function">sudo</span> gedit /etc/modprobe.d/blacklist.conf
<span class="token comment"># \u8FFD\u52A0</span>
blacklist b43
blacklist bcma
blacklist ssb
</code></pre></div><p>\u5982\u679C\u8FD8\u6709\u95EE\u9898\uFF0C\u53EF\u80FD\u9700\u8981\u4FEE\u6539 BIOS \u7684 <code>secrety root</code> \u4E3A <code>disabled</code>\u3002</p><h2 id="wifi-netplan" tabindex="-1"><a class="header-anchor" href="#wifi-netplan" aria-hidden="true">#</a> WIFI netplan</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml

<span class="token comment"># \u914D\u7F6E wifi</span>
wifis:
    wlp4s0:
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.122/24<span class="token punctuation">]</span>
      dhcp4: <span class="token boolean">false</span>
      optional: <span class="token boolean">true</span>
      gateway4: <span class="token number">192.168</span>.0.1
      nameservers:
        addresses: <span class="token punctuation">[</span><span class="token number">223.5</span>.5.5,223.6.6.6<span class="token punctuation">]</span>
      access-points:
        <span class="token string">&quot;SSID&quot;</span><span class="token builtin class-name">:</span>
          password: <span class="token string">&quot;password&quot;</span>
</code></pre></div><p>\u63A5\u7740\u8FD8\u9700\u8981\u542F\u7528 WIFI\uFF1A</p><blockquote><p>\u83AB\u540D\u5947\u5999\u6D4B\u8BD5\u51FA\u6765\u7684\uFF08\u4E5F\u53EF\u80FD\u4E0D\u7528\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\uFF09\uFF0C\u5F85\u540E\u7EED\u6B63\u89C4\u5316\u5904\u7406</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status netplan-wpa-wlp4s0.service <span class="token comment"># \u6839\u636E\u4F60\u5BF9\u5E94\u7684 wifi \u540D\u79F0</span>
systemctl daemon-reload
</code></pre></div>`,7);function h(f,g){const e=t("OutboundLink");return l(),o(c,null,[d,n("p",null,[n("a",u,[k,p(e)]),b]),m],64)}var w=r(i,[["render",h]]);export{w as default};
