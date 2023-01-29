import{_ as n,p as a,q as s,a1 as e}from"./framework-49860b1b.js";const t={},c=e(`<h1 id="centos-修改网卡名为-eth" tabindex="-1"><a class="header-anchor" href="#centos-修改网卡名为-eth" aria-hidden="true">#</a> CentOS 修改网卡名为 eth</h1><h2 id="修改网卡配置" tabindex="-1"><a class="header-anchor" href="#修改网卡配置" aria-hidden="true">#</a> 修改网卡配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看网卡</span>
<span class="token function">ip</span> addr 
<span class="token comment"># ens33</span>

<span class="token comment"># 修改配置文件</span>
<span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts
<span class="token function">cp</span> ifcfg-ens33<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span> <span class="token comment"># 备份</span>
<span class="token function">mv</span> ifcfg-ens33 ifcfg-eth0
<span class="token function">vim</span> ifcfg-eth0
<span class="token comment"># 修改</span>
<span class="token comment"># NAME=eth0</span>
<span class="token comment"># DEVICE=eth0</span>
<span class="token function">cat</span> ifcfg-eth0 <span class="token comment"># 验证</span>
</code></pre></div><h2 id="修改-grub-配置" tabindex="-1"><a class="header-anchor" href="#修改-grub-配置" aria-hidden="true">#</a> 修改 grub 配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改 grub 配置</span>
<span class="token function">vim</span> /etc/sysconfig/grub
<span class="token comment"># 修改，在其后追加</span>
<span class="token comment"># GRUB_CMDLINE_LINUX=&quot;crashkernel=auto rd.lvm.lv=centos/root net.ifnames=0 biosdevname=0 rd.lvm.lv=centos/swap rhgb quiet net.ifnames=0 biosdevname=0&quot;</span>
<span class="token function">cat</span> /etc/sysconfig/grub <span class="token comment"># 验证</span>

<span class="token comment"># 更新配置</span>
grub2-mkconfig <span class="token parameter variable">-o</span> /boot/grub2/grub.cfg
</code></pre></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment"># 重启</span>
<span class="token function">ip</span> addr
<span class="token comment"># eth0</span>
</code></pre></div>`,7),o=[c];function p(i,r){return a(),s("div",null,o)}const d=n(t,[["render",p],["__file","modify-the-network-named-eth.html.vue"]]);export{d as default};
