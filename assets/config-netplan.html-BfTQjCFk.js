import{_ as n,c as a,a as e,o as p}from"./app-CQrWi6O2.js";const l={};function t(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="配置网络-netplan" tabindex="-1"><a class="header-anchor" href="#配置网络-netplan"><span>配置网络 netplan</span></a></h1><p>环境为：<code>Ubuntu20.04</code></p><h2 id="eth-netplan" tabindex="-1"><a class="header-anchor" href="#eth-netplan"><span>ETH netplan</span></a></h2><p>配置了 <code>/etc/network/interfaces</code> 发现并未生效，得知需要修改 <code>/etc/netplan</code> 的配置。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 第一种</span></span>
<span class="line">network:</span>
<span class="line">  ethernets:</span>
<span class="line">    enp5s0:</span>
<span class="line">      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.111/24<span class="token punctuation">]</span></span>
<span class="line">      dhcp4: no</span>
<span class="line">      optional: <span class="token boolean">true</span></span>
<span class="line">      gateway4: <span class="token number">192.168</span>.0.1</span>
<span class="line">      nameservers:</span>
<span class="line">        addresses: <span class="token punctuation">[</span><span class="token number">223.5</span>.5.5,223.6.6.6<span class="token punctuation">]</span></span>
<span class="line">  version: <span class="token number">2</span></span>
<span class="line">  </span>
<span class="line"><span class="token comment"># 第二种奇怪的配置，但是也很好用</span></span>
<span class="line">network:</span>
<span class="line">  ethernets:</span>
<span class="line">    enp5s0:</span>
<span class="line">      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.111/24<span class="token punctuation">]</span></span>
<span class="line">      dhcp4: <span class="token function">yes</span></span>
<span class="line">  version: <span class="token number">2</span></span>
<span class="line"><span class="token comment"># 第二种的 ip addr 结果</span></span>
<span class="line">inet <span class="token number">192.168</span>.0.111/24 brd <span class="token number">192.168</span>.0.255 scope global enp5s0</span>
<span class="line">valid_lft forever preferred_lft forever</span>
<span class="line">inet <span class="token number">192.168</span>.0.104/24 brd <span class="token number">192.168</span>.0.255 scope global secondary dynamic enp5s0</span>
<span class="line">valid_lft 7199sec preferred_lft 7199sec</span>
<span class="line"></span></code></pre></div><p>使配置生效：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> netplan generate</span>
<span class="line"><span class="token function">sudo</span> netplan apply</span>
<span class="line"></span></code></pre></div><p>配置完后同段内的机器可以 ping 通，并通过 ssh 进一步测试。</p><h2 id="安装驱动" tabindex="-1"><a class="header-anchor" href="#安装驱动"><span>安装驱动</span></a></h2><p>如果有 WIFI 网卡，则可跳过安装驱动。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> addr</span>
<span class="line"></span></code></pre></div><blockquote><p>折腾许久，才发现是 Linux 内核不支持老网卡。</p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">lshw <span class="token parameter variable">-C</span> network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 结果</span></span>
<span class="line">*-network UNCLAIMED <span class="token comment"># 未识别       </span></span>
<span class="line">       description: Network controller</span>
<span class="line">       product: BCM43142 <span class="token number">802</span>.11b/g/n</span>
<span class="line">       vendor: Broadcom Inc. and subsidiaries</span>
<span class="line">       physical id: <span class="token number">0</span></span>
<span class="line">       bus info: pci@0000:04:00.0</span>
<span class="line">       version: 01</span>
<span class="line">       width: <span class="token number">64</span> bits</span>
<span class="line">       clock: 33MHz</span>
<span class="line">       capabilities: bus_master cap_list</span>
<span class="line">       configuration: <span class="token assign-left variable">latency</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">       resources: memory:e3500000-e3507fff</span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> firmware-b43-installer</span>
<span class="line"></span></code></pre></div><p><a href="https://askubuntu.com/questions/765584/is-it-possible-to-use-broadcom-bcm43142-wifi-in-ubuntu-16-04" target="_blank" rel="noopener noreferrer">解决方案</a>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> bcmwl-kernel-source</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改黑名单</span></span>
<span class="line"><span class="token function">sudo</span> gedit /etc/modprobe.d/blacklist.conf</span>
<span class="line"><span class="token comment"># 追加</span></span>
<span class="line">blacklist b43</span>
<span class="line">blacklist bcma</span>
<span class="line">blacklist ssb</span>
<span class="line"></span></code></pre></div><p>如果还有问题，可能需要修改 BIOS 的 <code>secrety root</code> 为 <code>disabled</code>。</p><h2 id="wifi-netplan" tabindex="-1"><a class="header-anchor" href="#wifi-netplan"><span>WIFI netplan</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/00-installer-config.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 wifi</span></span>
<span class="line">wifis:</span>
<span class="line">    wlp4s0:</span>
<span class="line">      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.122/24<span class="token punctuation">]</span></span>
<span class="line">      dhcp4: <span class="token boolean">false</span></span>
<span class="line">      optional: <span class="token boolean">true</span></span>
<span class="line">      gateway4: <span class="token number">192.168</span>.0.1</span>
<span class="line">      nameservers:</span>
<span class="line">        addresses: <span class="token punctuation">[</span><span class="token number">223.5</span>.5.5,223.6.6.6<span class="token punctuation">]</span></span>
<span class="line">      access-points:</span>
<span class="line">        <span class="token string">&quot;SSID&quot;</span><span class="token builtin class-name">:</span></span>
<span class="line">          password: <span class="token string">&quot;password&quot;</span></span>
<span class="line"></span></code></pre></div><p>接着还需要启用 WIFI：</p><blockquote><p>莫名奇妙测试出来的（也可能不用执行以下步骤），待后续正规化处理</p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl status netplan-wpa-wlp4s0.service <span class="token comment"># 根据你对应的 wifi 名称</span></span>
<span class="line">systemctl daemon-reload</span>
<span class="line"></span></code></pre></div>`,22)])])}const o=n(l,[["render",t]]),r=JSON.parse('{"path":"/os/ubuntu/config-netplan.html","title":"配置网络 netplan","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ETH netplan","slug":"eth-netplan","link":"#eth-netplan","children":[]},{"level":2,"title":"安装驱动","slug":"安装驱动","link":"#安装驱动","children":[]},{"level":2,"title":"WIFI netplan","slug":"wifi-netplan","link":"#wifi-netplan","children":[]}],"git":{"updatedTime":1637399796000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/ubuntu/config-netplan.md"}');export{o as comp,r as data};
