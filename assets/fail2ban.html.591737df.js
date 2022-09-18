import{r as e,c as t,a,b as o,F as p,d as s,e as l,o as c}from"./app.aeebbc6c.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=a("h1",{id:"fail2ban",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#fail2ban","aria-hidden":"true"},"#"),s(" fail2ban")],-1),b=s("\u670D\u52A1\u5668\u5B89\u5168\u4E00\u76F4\u662F\u4E00\u4E2A\u95EE\u9898\uFF0C\u5E38\u4F7F\u7528 "),h={href:"https://github.com/fail2ban/fail2ban",target:"_blank",rel:"noopener noreferrer"},k=s("fail2ban"),u=s(" \u6765\u9632\u6B62 SSH \u66B4\u529B\u7834\u89E3\u3002"),f=l(`<p>\u5728\u542F\u7528 Web \u670D\u52A1\u540E\uFF0C\u5E38\u5E38\u4F1A\u6709\u4E00\u4E9B\u811A\u672C\u524D\u6765\u626B\u63CF\u662F\u5426\u5B58\u5728\u6F0F\u6D1E\uFF0C\u53EF\u4EE5\u5229\u7528 <code>fail2ban</code> \u7981\u7528\u8BBF\u95EE\u7684 IP\u3002\u8FD8\u53EF\u4EE5\u540E\u7AEF\u653E\u51FA\u4E00\u4E9B\u9677\u9631\u6570\u636E\uFF0C\u6B63\u5E38\u7528\u6237\u754C\u9762\u4E0D\u4F1A\u5C55\u793A\uFF0C\u800C\u4E00\u65E6\u6709\u722C\u866B\u8BBF\u95EE\u4E86\u8BE5\u6570\u636E\uFF0C\u5219\u7981\u7528\u5BF9\u5E94\u7684 IP\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
yum <span class="token function">install</span> fail2ban

<span class="token comment"># \u67E5\u770B\u65E5\u5FD7</span>
<span class="token function">tail</span> -f /var/log/fail2ban.log
</code></pre></div><p>\u5728 <code>/etc/fail2ban/jail.conf</code> \u660E\u786E\u6307\u51FA\u4E0D\u5E94\u8BE5\u4FEE\u6539\u8BE5\u6587\u4EF6\uFF0C\u5E94\u5F53\u4F7F\u7528 <code>jail.local</code> \u6216 <code>jail.d/customisation.local</code>\uFF0C\u4E2A\u4EBA\u66F4\u503E\u5411\u4E8E\u5206\u6A21\u5757\u5904\u7406\u3002</p><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh" aria-hidden="true">#</a> 1. SSH</h3><p>\u6DFB\u52A0\u5BF9 SSH \u7684\u9650\u5236\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">tee</span> /etc/fail2ban/jail.d/sshd.local <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;
[sshd]
enabled = true
port = ssh
filter = sshd
# \u7981\u7528\u65F6\u957F
bantime = 120
# \u5141\u8BB8\u5931\u8D25\u6B21\u6570
maxretry = 3
# \u67E5\u627E\u5931\u8D25\u6B21\u6570\u7684\u65F6\u957F
findtime = 600
action = iptables[name=SSH, port=ssh, protocol=tcp]
EOF</span>
</code></pre></div><p>\u67E5\u770B\u8BE5\u9650\u5236\u7684\u60C5\u51B5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709 jail</span>
fail2ban-client status
<span class="token comment"># \u67E5\u770B\u6307\u5B9A jail</span>
fail2ban-client status sshd

<span class="token comment"># \u8F93\u51FA</span>
Status <span class="token keyword">for</span> the jail: sshd
<span class="token operator">|</span>- Filter
<span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">0</span>
<span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">0</span>
<span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd
<span class="token variable">\`</span></span>- Actions
   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span>
   <span class="token operator">|</span>- Total banned:     <span class="token number">0</span>
   \`- Banned IP list:
</code></pre></div><p>\u7528\u9519\u8BEF\u7684\u5BC6\u7801\u5C1D\u8BD5\u56DB\u6B21\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>fail2ban-client status sshd

<span class="token comment"># \u8F93\u51FA</span>
Status <span class="token keyword">for</span> the jail: sshd
<span class="token operator">|</span>- Filter
<span class="token operator">|</span>  <span class="token operator">|</span>- Currently failed: <span class="token number">1</span>
<span class="token operator">|</span>  <span class="token operator">|</span>- Total failed:     <span class="token number">4</span>
<span class="token operator">|</span>  <span class="token variable"><span class="token variable">\`</span>- Journal matches:  <span class="token assign-left variable">_SYSTEMD_UNIT</span><span class="token operator">=</span>sshd.service + <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd
<span class="token variable">\`</span></span>- Actions
   <span class="token operator">|</span>- Currently banned: <span class="token number">0</span>
   <span class="token operator">|</span>- Total banned:     <span class="token number">1</span>
   \`- Banned IP list: <span class="token number">10.0</span>.0.1
</code></pre></div><p>\u518D\u4EE5\u6B63\u786E\u7684\u5BC6\u7801\u8BBF\u95EE\u4E5F\u4F1A\u88AB\u62D2\u7EDD\uFF0C\u53EF\u4EE5\u7B49\u5F85\u7981\u7528\u65F6\u957F\u8FC7\u53BB\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u653E\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>fail2ban-client <span class="token builtin class-name">set</span> sshd unbanip <span class="token number">10.0</span>.0.1
</code></pre></div>`,13);function m(_,g){const n=e("OutboundLink");return c(),t(p,null,[d,a("p",null,[b,a("a",h,[k,o(n)]),u]),f],64)}var x=r(i,[["render",m]]);export{x as default};
