import{e as n}from"./app.76078c72.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const e={},a=n('<h2 id="笔记本合盖不休眠" tabindex="-1"><a class="header-anchor" href="#笔记本合盖不休眠" aria-hidden="true">#</a> 笔记本合盖不休眠</h2><p>修改配置：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/logind.conf\n\n<span class="token comment">#HandlePowerKey 按下电源键后的行为，默认power off</span>\n<span class="token comment">#HandleSleepKey 按下挂起键后的行为，默认suspend</span>\n<span class="token comment">#HandleHibernateKey 按下休眠键后的行为，默认hibernate</span>\n<span class="token comment">#HandleLidSwitch 合上笔记本盖后的行为，默认suspend</span>\n\n<span class="token comment"># 修改 HandleLidSwitch 为 ignore</span>\n</code></pre></div><p>重启服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart systemd-logind\n\n<span class="token comment"># 或者直接重启电脑</span>\n<span class="token function">reboot</span>\n</code></pre></div>',5);var o=s(e,[["render",function(n,s){return a}]]);export{o as default};
