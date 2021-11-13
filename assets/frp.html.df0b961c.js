import{r as o,c as r,a as s,b as n,w as p,F as l,d as a,e as c,o as i}from"./app.e62aeb11.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const u={},h=s("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),a(" \u4ECB\u7ECD")],-1),k={class:"custom-container tip"},f=s("p",{class:"custom-container-title"},"TIP",-1),_=s("p",null,[a("FRP\uFF08Fast Reverse Proxy\uFF09is a fast reverse proxy to help you expose a local server behind a NAT or firewall to the Internet. As of now, it supports "),s("strong",null,"TCP"),a(" and "),s("strong",null,"UDP"),a(", as well as "),s("strong",null,"HTTP"),a(" and "),s("strong",null,"HTTPS"),a(" protocols, where requests can be forwarded to internal services by domain name.")],-1),m=a("\u6765\u81EA "),g={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},v=a("FRP"),b=s("p",null,"\u6B64\u5904\u4EC5\u4EE5\u914D\u7F6E SSH \u670D\u52A1\u4E3A\u793A\u4F8B\u3002",-1),x=s("h2",{id:"\u51C6\u5907",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u51C6\u5907","aria-hidden":"true"},"#"),a(" \u51C6\u5907")],-1),y=s("h3",{id:"_1-\u5B89\u5168\u8BBE\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-\u5B89\u5168\u8BBE\u7F6E","aria-hidden":"true"},"#"),a(" 1. \u5B89\u5168\u8BBE\u7F6E")],-1),S=a("\u8FD9\u662F\u4E00\u4EF6\u6709\u98CE\u9669\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u5F00\u59CB\u524D\u6700\u597D\u786E\u8BA4\u4F60\u7684\u516C\u7F51\u3001\u5185\u7F51\u670D\u52A1\u5668\u90FD\u5DF2\u7ECF\u505A\u597D\u9632\u62A4\u5DE5\u4F5C\uFF0C\u53EF\u53C2\u8003"),E=a("SSH \u8BA9\u4F60\u7684\u670D\u52A1\u5668\u66F4\u5B89\u5168"),w=a("\u3002"),A=s("h3",{id:"_2-\u8D44\u6E90\u4E0B\u8F7D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-\u8D44\u6E90\u4E0B\u8F7D","aria-hidden":"true"},"#"),a(" 2. \u8D44\u6E90\u4E0B\u8F7D")],-1),F=a("\u9700\u8981\u5728 github \u4E0A\u4E0B\u8F7D\u6700\u65B0\u7684 "),R={href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"},T=a("frp release"),B=a(" \u5230\u516C\u7F51\u3001\u5185\u7F51\u670D\u52A1\u5668\u4E0A\uFF0C\u6CE8\u610F\u9009\u62E9\u5BF9\u5E94\u7684\u7248\u672C\u3002"),P=c(`<h3 id="_3-\u7AEF\u53E3\u5F00\u653E" tabindex="-1"><a class="header-anchor" href="#_3-\u7AEF\u53E3\u5F00\u653E" aria-hidden="true">#</a> 3. \u7AEF\u53E3\u5F00\u653E</h3><p>\u5982\u679C\u662F\u963F\u91CC\u4E91\uFF0C\u9700\u8981\u5728\u4E91\u5B9E\u4F8B\u4E2D\u5F00\u653E\u4E0B\u65B9\u5C06\u8981\u4F7F\u7528\u7684\u7AEF\u53E3\u3002</p><ul><li><code>bind_port/server_port</code></li><li><code>remote_port</code></li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="_1-\u516C\u7F51\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u516C\u7F51\u670D\u52A1\u5668" aria-hidden="true">#</a> 1. \u516C\u7F51\u670D\u52A1\u5668</h3><p>\u516C\u7F51\u670D\u52A1\u5668\u4FEE\u6539 <code>frps.ini</code> \u6587\u4EF6\u3002</p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token comment"># frps.ini</span>
<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
</code></pre></div><p>\u914D\u7F6E\u89E3\u91CA\uFF1A</p><ul><li><code>bind_port</code> \u4E3A <code>frp</code> \u670D\u52A1\u5668\u7AEF\u63A5\u6536\u5BA2\u6237\u7AEF\u6D41\u91CF\u7684\u7AEF\u53E3</li></ul><p>\u542F\u52A8\u670D\u52A1\u7AEF <code>frp</code> \u7A0B\u5E8F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frps -c frps.ini <span class="token operator">&amp;</span>
</code></pre></div><h3 id="_2-\u5185\u7F51\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u5185\u7F51\u670D\u52A1\u5668" aria-hidden="true">#</a> 2. \u5185\u7F51\u670D\u52A1\u5668</h3><p>\u5185\u7F51\u670D\u52A1\u5668\u4FEE\u6539 <code>frpc.ini</code> \u6587\u4EF6\u3002</p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token comment"># frpc.ini</span>
<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">x.x.x.x</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">ssh</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
</code></pre></div><p>\u914D\u7F6E\u89E3\u91CA\uFF1A</p><ul><li><code>server_addr</code> \u4E3A <code>frp</code> \u670D\u52A1\u7AEF <code>ip</code> \u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F\u57DF\u540D</li><li><code>server_port</code> \u4E3A <code>frp</code> \u670D\u52A1\u7AEF\u7684 <code>bind_port</code></li><li><code>local_ip</code> \u4E3A <code>frp</code> \u5BA2\u6237\u7AEF\u7684 <code>ip</code> \u6216 <code>127.0.0.1</code></li><li><code>local_port</code> \u4E3A <code>frp</code> \u5BA2\u6237\u7AEF\u7684 ssh \u7AEF\u53E3\uFF0C\u5176\u9ED8\u8BA4\u4E3A 22\uFF0C\u5728\u5B89\u5168\u8BBE\u7F6E\u65F6\u53EF\u80FD\u4FEE\u6539\u4E3A\u5176\u4ED6</li><li><code>remote_port</code> \u4E3A <code>frp</code> \u5BA2\u6237\u7AEF\u6302\u8F7D\u5230 <code>frp</code> \u670D\u52A1\u7AEF\u7684\u7AEF\u53E3\u3002\u5728\u6B64\u793A\u4F8B\u4E2D\u8BBF\u95EE\u670D\u52A1\u7AEF <code>6000</code> \u7AEF\u53E3\u76F8\u5F53\u4E8E\u8BBF\u95EE\u5BA2\u6237\u7AEF <code>22</code> \u7AEF\u53E3</li></ul><p>\u542F\u52A8\u5BA2\u6237\u7AEF <code>frp</code> \u7A0B\u5E8F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./frpc -c frpc.ini <span class="token operator">&amp;</span>
</code></pre></div><h3 id="_3-\u505C\u6B62\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u505C\u6B62\u670D\u52A1" aria-hidden="true">#</a> 3. \u505C\u6B62\u670D\u52A1</h3><p>\u4EE5\u4E0A\u8FF0\u5F62\u5F0F\u542F\u52A8\u7684\u670D\u52A1\uFF0C\u9700\u8981\u5148\u627E\u5230\u8FDB\u7A0B\u53F7\u518D\u505C\u6B62\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>
<span class="token comment"># 72029</span>
<span class="token function">kill</span> -9 <span class="token number">72029</span>

<span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> frp <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="_1-\u516C\u7F51\u8DF3\u677F-\u4E0D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_1-\u516C\u7F51\u8DF3\u677F-\u4E0D\u63A8\u8350" aria-hidden="true">#</a> 1. \u516C\u7F51\u8DF3\u677F\uFF08\u4E0D\u63A8\u8350\uFF09</h3>`,23),C=a("\u5728\u4E4B\u524D\u5B89\u5168\u8BBE\u7F6E\u4E2D\u5DF2\u7ECF\u4F7F\u7528\u4E86\u5BC6\u94A5\u767B\u5F55\uFF0C\u4E3A\u4E86\u7B80\u5316\u64CD\u4F5C\u53EF\u4EE5\u914D\u7F6E "),N=a("ssh config"),U=a("\u3002"),D=c(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u516C\u7F51</span>
<span class="token function">ssh</span> aliyun

<span class="token comment"># \u518D\u4ECE\u516C\u7F51\u8FDB\u5165\u5185\u7F51</span>
<span class="token function">ssh</span> private
</code></pre></div><h3 id="_2-\u76F4\u63A5\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_2-\u76F4\u63A5\u8BBF\u95EE" aria-hidden="true">#</a> 2. \u76F4\u63A5\u8BBF\u95EE</h3><p>\u82E5\u516C\u7F51\u670D\u52A1\u7AEF\u88AB\u9ED1\u4E86\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u9ED1\u5BA2\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165\u4F60\u7684\u5185\u7F51\u3002\u5F53\u7136\u5982\u679C\u5E0C\u671B\u516C\u7F51\u53EA\u662F\u4E00\u4E2A\u8DF3\u677F\uFF0C\u65B9\u4FBF\u5176\u4F59\u673A\u5668\u8FDB\u5165\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0A\u4E00\u79CD\u65B9\u5F0F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u76F4\u63A5\u8BBF\u95EE\u5185\u7F51</span>
<span class="token comment"># \u914D\u7F6E\u8BE5 config \u65F6\u53EF\u4EE5\u8BA4\u8BC6\u5230 \`local_port\` \u4E0E \`remote_port\` \u4E4B\u95F4\u7684\u5173\u7CFB</span>
<span class="token function">ssh</span> aliyun2private
</code></pre></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>\u5728\u4E0B\u8F7D\u5BF9\u5E94\u7684 <code>frp</code> \u6587\u4EF6\u65F6\uFF0C\u89E3\u538B\u540E\u6CE8\u610F\u5230\u5B58\u5728 <code>systemd</code> \u6587\u4EF6\u5939\uFF0C\u67E5\u770B\u4F8B\u5982\u670D\u52A1\u7AEF\u914D\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># cat systemd/frps.service</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Server Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frps -c /etc/frp/frps.ini

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token comment"># cat systemd/frpc.service</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Client Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/frpc -c /etc/frp/frpc.ini
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/bin/frpc reload -c /etc/frp/frpc.ini

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>\u4EC5\u8BF4\u660E <code>frps.service</code> \u914D\u7F6E\u6587\u4EF6\uFF1A</p><ul><li><code>frps</code> \u542F\u52A8\u7A0B\u5E8F\u653E\u5165 <code>/usr/bin</code> \u76EE\u5F55\u4E2D</li><li><code>frps.ini</code> \u914D\u7F6E\u6587\u4EF6\u653E\u5165 <code>/etc/frp</code> \u76EE\u5F55\u4E2D</li><li><code>frps.service</code> \u670D\u52A1\u7A0B\u5E8F\u653E\u5165 <code>/lib/systemd/system</code> \u76EE\u5F55\u4E2D</li></ul><p>\u6700\u540E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u670D\u52A1\u6587\u4EF6\uFF0C\u8BB0\u5F97\u52A0\u4E0A sudo</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># \u5F00\u542F</span>
<span class="token function">sudo</span> systemctl start frps
</code></pre></div>`,11);function H(I,L){const e=o("OutboundLink"),t=o("RouterLink");return i(),r(l,null,[h,s("div",k,[f,_,s("p",null,[m,s("a",g,[v,n(e)])])]),b,x,y,s("p",null,[S,n(t,{to:"/os/linux/ssh-makes-your-server-more-secure.html"},{default:p(()=>[E]),_:1}),w]),A,s("p",null,[F,s("a",R,[T,n(e)]),B]),P,s("p",null,[C,n(t,{to:"/os/linux/login-with-rsa-key.html#%E5%BF%AB%E9%80%9F%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E5%99%A8"},{default:p(()=>[N]),_:1}),U]),D],64)}var O=d(u,[["render",H]]);export{O as default};
