import{_ as s,c as a,a as e,o as t}from"./app-CQrWi6O2.js";const p={};function l(c,n){return t(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="ubuntu-计算机配置" tabindex="-1"><a class="header-anchor" href="#ubuntu-计算机配置"><span>Ubuntu 计算机配置</span></a></h1><h2 id="笔记本合盖不休眠" tabindex="-1"><a class="header-anchor" href="#笔记本合盖不休眠"><span>笔记本合盖不休眠</span></a></h2><p>修改配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/logind.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment">#HandlePowerKey 按下电源键后的行为，默认power off</span></span>
<span class="line"><span class="token comment">#HandleSleepKey 按下挂起键后的行为，默认suspend</span></span>
<span class="line"><span class="token comment">#HandleHibernateKey 按下休眠键后的行为，默认hibernate</span></span>
<span class="line"><span class="token comment">#HandleLidSwitch 合上笔记本盖后的行为，默认suspend</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改 HandleLidSwitch 为 ignore</span></span>
<span class="line"></span></code></pre></div><p>重启服务：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl restart systemd-logind</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者直接重启电脑</span></span>
<span class="line"><span class="token function">reboot</span></span>
<span class="line"></span></code></pre></div>`,6)])])}const o=s(p,[["render",l]]),u=JSON.parse('{"path":"/os/ubuntu/ubuntu-computer-config.html","title":"Ubuntu 计算机配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"笔记本合盖不休眠","slug":"笔记本合盖不休眠","link":"#笔记本合盖不休眠","children":[]}],"git":{"updatedTime":1637399796000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/ubuntu/ubuntu-computer-config.md"}');export{o as comp,u as data};
