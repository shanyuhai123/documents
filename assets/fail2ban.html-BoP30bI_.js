import{_ as a,c as n,a as e,o as l}from"./app-BCSwjUcF.js";const p={};function t(i,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="fail2ban" tabindex="-1"><a class="header-anchor" href="#fail2ban"><span>fail2ban</span></a></h1><div class="hint-container caution"><p class="hint-container-title">重要</p><p>使得 fail2ban 生效，需要启用 firewalld 服务。</p></div><p>服务器安全一直是一个问题，常使用 <a href="https://github.com/fail2ban/fail2ban" target="_blank" rel="noopener noreferrer">fail2ban</a> 来防止 SSH 暴力破解。</p><p>在启用 Web 服务后，常常会有一些脚本前来扫描是否存在漏洞，可以利用 <code>fail2ban</code> 禁用访问的 IP。还可以后端放出一些陷阱数据，正常用户界面不会展示，而一旦有爬虫访问了该数据，则禁用对应的 IP。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line">yum <span class="token function">install</span> fail2ban</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看日志</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/fail2ban.log</span>
<span class="line"></span></code></pre></div><p>在 <code>/etc/fail2ban/jail.conf</code> 明确指出不应该修改该文件，应当使用 <code>jail.local</code> 或 <code>jail.d/customisation.local</code>，个人更倾向于分模块处理。</p><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh"><span>1. SSH</span></a></h3><p>添加对 SSH 的限制：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">tee</span> /etc/fail2ban/jail.d/sshd.local <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;</span>
<span class="line">[sshd]</span>
<span class="line">enabled = true</span>
<span class="line">port = ssh</span>
<span class="line">filter = sshd</span>
<span class="line"># 禁用时长</span>
<span class="line">bantime = 120</span>
<span class="line"># 允许失败次数</span>
<span class="line">maxretry = 3</span>
<span class="line"># 查找失败次数的时长</span>
<span class="line">findtime = 600</span>
<span class="line">action = iptables[name=SSH, port=ssh, protocol=tcp]</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre></div><p>查看该限制的情况：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看所有 jail</span></span>
<span class="line">fail2ban-client status</span>
<span class="line"><span class="token comment"># 查看指定 jail</span></span>
<span class="line">fail2ban-client status sshd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出</span></span>
<span class="line">Status <span class="token keyword">for</span> the jail: sshd</span>
<span class="line"><span class="token operator">|</span>- Filter</span>
<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">0</span></span>
<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">0</span></span>
<span class="line"><span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd</span>
<span class="line"><span class="token variable">\`</span></span>- Actions</span>
<span class="line">   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span></span>
<span class="line">   <span class="token operator">|</span>- Total banned:     <span class="token number">0</span></span>
<span class="line">   \`- Banned IP list:</span>
<span class="line"></span></code></pre></div><p>用错误的密码尝试四次：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">fail2ban-client status sshd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出</span></span>
<span class="line">Status <span class="token keyword">for</span> the jail: sshd</span>
<span class="line"><span class="token operator">|</span>- Filter</span>
<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">1</span></span>
<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">4</span></span>
<span class="line"><span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd</span>
<span class="line"><span class="token variable">\`</span></span>- Actions</span>
<span class="line">   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span></span>
<span class="line">   <span class="token operator">|</span>- Total banned:     <span class="token number">1</span></span>
<span class="line">   \`- Banned IP list: <span class="token number">10.0</span>.0.1</span>
<span class="line"></span></code></pre></div><p>再以正确的密码访问也会被拒绝，可以等待禁用时长过去，也可以手动放行：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">fail2ban-client <span class="token builtin class-name">set</span> sshd unbanip <span class="token number">10.0</span>.0.1</span>
<span class="line"></span></code></pre></div>`,16)]))}const o=a(p,[["render",t]]),r=JSON.parse('{"path":"/os/linux/fail2ban.html","title":"fail2ban","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"1. SSH","slug":"_1-ssh","link":"#_1-ssh","children":[]}]}],"git":{"updatedTime":1718474828000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/fail2ban.md"}');export{o as comp,r as data};
