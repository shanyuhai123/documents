import{_ as e,M as t,p as o,q as l,Q as s,t as a,N as p,a1 as c}from"./framework-49860b1b.js";const r={},i=s("h1",{id:"fail2ban",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fail2ban","aria-hidden":"true"},"#"),a(" fail2ban")],-1),d={href:"https://github.com/fail2ban/fail2ban",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>在启用 Web 服务后，常常会有一些脚本前来扫描是否存在漏洞，可以利用 <code>fail2ban</code> 禁用访问的 IP。还可以后端放出一些陷阱数据，正常用户界面不会展示，而一旦有爬虫访问了该数据，则禁用对应的 IP。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
yum <span class="token function">install</span> fail2ban

<span class="token comment"># 查看日志</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/fail2ban.log
</code></pre></div><p>在 <code>/etc/fail2ban/jail.conf</code> 明确指出不应该修改该文件，应当使用 <code>jail.local</code> 或 <code>jail.d/customisation.local</code>，个人更倾向于分模块处理。</p><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh" aria-hidden="true">#</a> 1. SSH</h3><p>添加对 SSH 的限制：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tee</span> /etc/fail2ban/jail.d/sshd.local <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;
[sshd]
enabled = true
port = ssh
filter = sshd
# 禁用时长
bantime = 120
# 允许失败次数
maxretry = 3
# 查找失败次数的时长
findtime = 600
action = iptables[name=SSH, port=ssh, protocol=tcp]
EOF</span>
</code></pre></div><p>查看该限制的情况：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有 jail</span>
fail2ban-client status
<span class="token comment"># 查看指定 jail</span>
fail2ban-client status sshd

<span class="token comment"># 输出</span>
Status <span class="token keyword">for</span> the jail: sshd
<span class="token operator">|</span>- Filter
<span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">0</span>
<span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">0</span>
<span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd
<span class="token variable">\`</span></span>- Actions
   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span>
   <span class="token operator">|</span>- Total banned:     <span class="token number">0</span>
   \`- Banned IP list:
</code></pre></div><p>用错误的密码尝试四次：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>fail2ban-client status sshd

<span class="token comment"># 输出</span>
Status <span class="token keyword">for</span> the jail: sshd
<span class="token operator">|</span>- Filter
<span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">1</span>
<span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">4</span>
<span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd
<span class="token variable">\`</span></span>- Actions
   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span>
   <span class="token operator">|</span>- Total banned:     <span class="token number">1</span>
   \`- Banned IP list: <span class="token number">10.0</span>.0.1
</code></pre></div><p>再以正确的密码访问也会被拒绝，可以等待禁用时长过去，也可以手动放行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>fail2ban-client <span class="token builtin class-name">set</span> sshd unbanip <span class="token number">10.0</span>.0.1
</code></pre></div>`,13);function k(h,u){const n=t("ExternalLinkIcon");return o(),l("div",null,[i,s("p",null,[a("服务器安全一直是一个问题，常使用 "),s("a",d,[a("fail2ban"),p(n)]),a(" 来防止 SSH 暴力破解。")]),b])}const m=e(r,[["render",k],["__file","fail2ban.html.vue"]]);export{m as default};
