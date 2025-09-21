import{_ as n,c as a,a as e,o as t}from"./app-BoSqM2g3.js";const p={};function c(l,s){return t(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="centos-修改网卡名为-eth" tabindex="-1"><a class="header-anchor" href="#centos-修改网卡名为-eth"><span>CentOS 修改网卡名为 eth</span></a></h1><h2 id="修改网卡配置" tabindex="-1"><a class="header-anchor" href="#修改网卡配置"><span>修改网卡配置</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看网卡</span></span>
<span class="line"><span class="token function">ip</span> addr </span>
<span class="line"><span class="token comment"># ens33</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改配置文件</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts</span>
<span class="line"><span class="token function">cp</span> ifcfg-ens33<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span> <span class="token comment"># 备份</span></span>
<span class="line"><span class="token function">mv</span> ifcfg-ens33 ifcfg-eth0</span>
<span class="line"><span class="token function">vim</span> ifcfg-eth0</span>
<span class="line"><span class="token comment"># 修改</span></span>
<span class="line"><span class="token comment"># NAME=eth0</span></span>
<span class="line"><span class="token comment"># DEVICE=eth0</span></span>
<span class="line"><span class="token function">cat</span> ifcfg-eth0 <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h2 id="修改-grub-配置" tabindex="-1"><a class="header-anchor" href="#修改-grub-配置"><span>修改 grub 配置</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改 grub 配置</span></span>
<span class="line"><span class="token function">vim</span> /etc/sysconfig/grub</span>
<span class="line"><span class="token comment"># 修改，在其后追加</span></span>
<span class="line"><span class="token comment"># GRUB_CMDLINE_LINUX=&quot;crashkernel=auto rd.lvm.lv=centos/root net.ifnames=0 biosdevname=0 rd.lvm.lv=centos/swap rhgb quiet net.ifnames=0 biosdevname=0&quot;</span></span>
<span class="line"><span class="token function">cat</span> /etc/sysconfig/grub <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新配置</span></span>
<span class="line">grub2-mkconfig <span class="token parameter variable">-o</span> /boot/grub2/grub.cfg</span>
<span class="line"></span></code></pre></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment"># 重启</span></span>
<span class="line"><span class="token function">ip</span> addr</span>
<span class="line"><span class="token comment"># eth0</span></span>
<span class="line"></span></code></pre></div>`,7)])])}const o=n(p,[["render",c]]),r=JSON.parse('{"path":"/os/centos/modify-the-network-named-eth.html","title":"CentOS 修改网卡名为 eth","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"修改网卡配置","slug":"修改网卡配置","link":"#修改网卡配置","children":[]},{"level":2,"title":"修改 grub 配置","slug":"修改-grub-配置","link":"#修改-grub-配置","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]}],"git":{"updatedTime":1637395909000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/centos/modify-the-network-named-eth.md"}');export{o as comp,r as data};
