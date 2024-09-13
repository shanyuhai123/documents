import{_ as o,M as p,p as c,q as l,a1 as s,R as a,t as e,N as r}from"./framework-e3e34937.js";const i={},d={href:"https://askubuntu.com/questions/765584/is-it-possible-to-use-broadcom-bcm43142-wifi-in-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"};function u(k,n){const t=p("ExternalLinkIcon");return c(),l("div",null,[n[2]||(n[2]=s(`<h1 id="配置网络-netplan" tabindex="-1"><a class="header-anchor" href="#配置网络-netplan" aria-hidden="true">#</a> 配置网络 netplan</h1><p>环境为：<code>Ubuntu20.04</code></p><h2 id="eth-netplan" tabindex="-1"><a class="header-anchor" href="#eth-netplan" aria-hidden="true">#</a> ETH netplan</h2><p>配置了 <code>/etc/network/interfaces</code> 发现并未生效，得知需要修改 <code>/etc/netplan</code> 的配置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml

<span class="token comment"># 第一种</span>
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
  
<span class="token comment"># 第二种奇怪的配置，但是也很好用</span>
network:
  ethernets:
    enp5s0:
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.111/24<span class="token punctuation">]</span>
      dhcp4: <span class="token function">yes</span>
  version: <span class="token number">2</span>
<span class="token comment"># 第二种的 ip addr 结果</span>
inet <span class="token number">192.168</span>.0.111/24 brd <span class="token number">192.168</span>.0.255 scope global enp5s0
valid_lft forever preferred_lft forever
inet <span class="token number">192.168</span>.0.104/24 brd <span class="token number">192.168</span>.0.255 scope global secondary dynamic enp5s0
valid_lft 7199sec preferred_lft 7199sec
</code></pre></div><p>使配置生效：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> netplan generate
<span class="token function">sudo</span> netplan apply
</code></pre></div><p>配置完后同段内的机器可以 ping 通，并通过 ssh 进一步测试。</p><h2 id="安装驱动" tabindex="-1"><a class="header-anchor" href="#安装驱动" aria-hidden="true">#</a> 安装驱动</h2><p>如果有 WIFI 网卡，则可跳过安装驱动。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> addr
</code></pre></div><blockquote><p>折腾许久，才发现是 Linux 内核不支持老网卡。</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lshw <span class="token parameter variable">-C</span> network

<span class="token comment"># 结果</span>
*-network UNCLAIMED <span class="token comment"># 未识别       </span>
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
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> firmware-b43-installer
</code></pre></div>`,14)),a("p",null,[a("a",d,[n[0]||(n[0]=e("解决方案")),r(t)]),n[1]||(n[1]=e("："))]),n[3]||(n[3]=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> bcmwl-kernel-source

<span class="token comment"># 修改黑名单</span>
<span class="token function">sudo</span> gedit /etc/modprobe.d/blacklist.conf
<span class="token comment"># 追加</span>
blacklist b43
blacklist bcma
blacklist ssb
</code></pre></div><p>如果还有问题，可能需要修改 BIOS 的 <code>secrety root</code> 为 <code>disabled</code>。</p><h2 id="wifi-netplan" tabindex="-1"><a class="header-anchor" href="#wifi-netplan" aria-hidden="true">#</a> WIFI netplan</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml

<span class="token comment"># 配置 wifi</span>
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
</code></pre></div><p>接着还需要启用 WIFI：</p><blockquote><p>莫名奇妙测试出来的（也可能不用执行以下步骤），待后续正规化处理</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status netplan-wpa-wlp4s0.service <span class="token comment"># 根据你对应的 wifi 名称</span>
systemctl daemon-reload
</code></pre></div>`,7))])}const m=o(i,[["render",u],["__file","config-netplan.html.vue"]]);export{m as default};
