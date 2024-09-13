import{_ as e,p as a,q as s,a1 as t}from"./framework-e3e34937.js";const o={};function c(d,n){return a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="ubuntu-计算机配置" tabindex="-1"><a class="header-anchor" href="#ubuntu-计算机配置" aria-hidden="true">#</a> Ubuntu 计算机配置</h1><h2 id="笔记本合盖不休眠" tabindex="-1"><a class="header-anchor" href="#笔记本合盖不休眠" aria-hidden="true">#</a> 笔记本合盖不休眠</h2><p>修改配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/logind.conf

<span class="token comment">#HandlePowerKey 按下电源键后的行为，默认power off</span>
<span class="token comment">#HandleSleepKey 按下挂起键后的行为，默认suspend</span>
<span class="token comment">#HandleHibernateKey 按下休眠键后的行为，默认hibernate</span>
<span class="token comment">#HandleLidSwitch 合上笔记本盖后的行为，默认suspend</span>

<span class="token comment"># 修改 HandleLidSwitch 为 ignore</span>
</code></pre></div><p>重启服务：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart systemd-logind

<span class="token comment"># 或者直接重启电脑</span>
<span class="token function">reboot</span>
</code></pre></div>`,6)]))}const l=e(o,[["render",c],["__file","ubuntu-computer-config.html.vue"]]);export{l as default};
