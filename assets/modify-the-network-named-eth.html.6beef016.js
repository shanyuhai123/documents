import{e as n}from"./app.f206bdb0.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="centos-\u4FEE\u6539\u7F51\u5361\u540D\u4E3A-eth" tabindex="-1"><a class="header-anchor" href="#centos-\u4FEE\u6539\u7F51\u5361\u540D\u4E3A-eth" aria-hidden="true">#</a> CentOS \u4FEE\u6539\u7F51\u5361\u540D\u4E3A eth</h1><h2 id="\u4FEE\u6539\u7F51\u5361\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7F51\u5361\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u7F51\u5361\u914D\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u7F51\u5361</span>
<span class="token function">ip</span> addr 
<span class="token comment"># ens33</span>

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts
<span class="token function">cp</span> ifcfg-ens33<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span> <span class="token comment"># \u5907\u4EFD</span>
<span class="token function">mv</span> ifcfg-ens33 ifcfg-eth0
<span class="token function">vim</span> ifcfg-eth0
<span class="token comment"># \u4FEE\u6539</span>
<span class="token comment"># NAME=eth0</span>
<span class="token comment"># DEVICE=eth0</span>
<span class="token function">cat</span> ifcfg-eth0 <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h2 id="\u4FEE\u6539-grub-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-grub-\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539 grub \u914D\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539 grub \u914D\u7F6E</span>
<span class="token function">vim</span> /etc/sysconfig/grub
<span class="token comment"># \u4FEE\u6539\uFF0C\u5728\u5176\u540E\u8FFD\u52A0</span>
<span class="token comment"># GRUB_CMDLINE_LINUX=&quot;crashkernel=auto rd.lvm.lv=centos/root net.ifnames=0 biosdevname=0 rd.lvm.lv=centos/swap rhgb quiet net.ifnames=0 biosdevname=0&quot;</span>
<span class="token function">cat</span> /etc/sysconfig/grub <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># \u66F4\u65B0\u914D\u7F6E</span>
grub2-mkconfig -o /boot/grub2/grub.cfg
</code></pre></div><h2 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">shutdown</span> -r now <span class="token comment"># \u91CD\u542F</span>
<span class="token function">ip</span> addr
<span class="token comment"># eth0</span>
</code></pre></div>`,7);function t(c,o){return e}var i=s(a,[["render",t]]);export{i as default};
