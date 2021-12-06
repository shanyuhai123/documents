import{r as t,c as o,a,b as e,F as c,d as s,e as r,o as d}from"./app.8173c635.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const l={},h=a("h1",{id:"dnsmasq",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dnsmasq","aria-hidden":"true"},"#"),s(" Dnsmasq")],-1),i=a("h2",{id:"\u524D\u8A00",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),s(" \u524D\u8A00")],-1),m=s("\u4E00\u5F00\u59CB\u9009\u62E9\u4E86 "),u={href:"https://www.isc.org/bind/",target:"_blank",rel:"noopener noreferrer"},_=s("bind"),b=s("\uFF0C\u8BD5\u7528\u540E\u89C9\u5F97\u914D\u7F6E\u9EBB\u70E6\u5C31\u9009\u62E9\u4E86\u66F4\u4E3A\u8F7B\u91CF\u7684 "),g={href:"http://www.thekelleys.org.uk/dnsmasq/doc.html",target:"_blank",rel:"noopener noreferrer"},k=s("dnsmasq"),f=s("\u3002"),v=s("\u8BE5\u7B14\u8BB0\u57FA\u672C\u53C2\u8003 "),x={href:"https://www.cnblogs.com/pyyu/p/10318334.html",target:"_blank",rel:"noopener noreferrer"},q=s("CentOS7 \u5B89\u88C5 dnsmaqs \u5C40\u57DF\u7F51 DNS"),w=s("\u3002"),N=r(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="_1-\u57FA\u672C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u73AF\u5883" aria-hidden="true">#</a> 1. \u57FA\u672C\u73AF\u5883</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> bind-utils dnsmasq -y
</code></pre></div><h3 id="_2-\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_2-\u5907\u4EFD" aria-hidden="true">#</a> 2. \u5907\u4EFD</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/dnsmasq.conf /etc/dnsmasq.conf.bak
</code></pre></div><h3 id="_3-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E" aria-hidden="true">#</a> 3. \u914D\u7F6E</h3><p>\u5728 <code>/etc/dnsmasq.conf</code> \u4E2D\u53EF\u4EE5\u770B\u5230\u90FD\u662F\u6CE8\u91CA\u9879\uFF0C\u6240\u4EE5\u731C\u6D4B\u6E05\u7A7A\u6240\u6709\u518D\u589E\u52A0\u4E5F\u53EF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">53</span>
<span class="token comment"># \u8868\u793A\u4E25\u683C\u6309\u7167 resolv-file \u6587\u4EF6\u4E2D\u7684\u987A\u5E8F\u4ECE\u4E0A\u5230\u4E0B\u8FDB\u884C DNS \u89E3\u6790, \u76F4\u5230\u7B2C\u4E00\u4E2A\u6210\u529F\u89E3\u6790\u6210\u529F\u4E3A\u6B62</span>
strict-order
<span class="token comment"># \u6307\u5B9A\u4E0A\u6E38dns\u670D\u52A1\u5668</span>
resolv-file<span class="token operator">=</span>/etc/resolv.dnsmasq.conf
<span class="token comment"># \u81EA\u5B9A\u4E49\u7684dns\u8BB0\u5F55\u6587\u4EF6</span>
addn-hosts<span class="token operator">=</span>/etc/dnsmasq.hosts
<span class="token comment"># \u8BBE\u4E3A\u5F53\u524D\u670D\u52A1\u5668</span>
listen-address<span class="token operator">=</span><span class="token number">192.168</span>.0.42
<span class="token comment"># \u7F13\u5B58\u5927\u5C0F</span>
cache-size<span class="token operator">=</span><span class="token number">150</span>


<span class="token comment"># \u6CE8\u610F\u8BE5\u9879\u662F\u5426\u6B63\u786E\uFF08\u6211\u5728\u542F\u7528\u65F6\u7F51\u5361\u6307\u5411\u4E86\u53E6\u5916\u4E00\u4E2A\uFF09</span>
<span class="token assign-left variable">interface</span><span class="token operator">=</span>eth0
</code></pre></div><p>\u586B\u5199\u4E0A\u6E38 DNS \u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/resolv.dnsmasq.conf

<span class="token comment"># \u5199\u5165</span>
nameserver <span class="token number">223.5</span>.5.5
nameserver <span class="token number">223.6</span>.6.6
nameserver <span class="token number">114.114</span>.114.114
</code></pre></div><p>\u586B\u5199\u81EA\u5EFA\u7684 DNS \u89E3\u6790\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/dnsmasq.hosts

<span class="token comment"># \u5199\u5165</span>
<span class="token number">192.168</span>.0.144 test.com
</code></pre></div><p>\u5C06\u5F53\u524D\u4E3B\u673A\u7684 DNS \u670D\u52A1\u6307\u5411 <code>dnsmasq</code>\uFF0C\u82E5\u91CD\u542F\u5931\u6548\u90A3\u4E48\u9700\u8981\u5BF9 <code>NetworkManager</code> \u8FDB\u884C\u914D\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/resolv.conf

nameserver <span class="token number">192.168</span>.0.42
</code></pre></div><p>\u6700\u540E\u91CD\u542F\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u6B63\u786E</span>
dnsmasq --test

<span class="token comment"># \u91CD\u542F</span>
systemctl restart dnsmasq
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u5207\u6362\u5230\u5176\u4ED6\u4E3B\u673A\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dig</span> @192.168.0.42 test.com
</code></pre></div><p>\u5982\u679C\u6D4B\u8BD5\u5931\u8D25\uFF0C\u53EF\u4EE5\u8003\u8651\u7AEF\u53E3\u662F\u5426\u88AB\u9632\u706B\u5899\u62E6\u622A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>telnet <span class="token number">192.168</span>.0.42 <span class="token number">53</span>
</code></pre></div>`,21);function S(y,D){const n=t("OutboundLink");return d(),o(c,null,[h,i,a("p",null,[m,a("a",u,[_,e(n)]),b,a("a",g,[k,e(n)]),f]),a("p",null,[v,a("a",x,[q,e(n)]),w]),N],64)}var O=p(l,[["render",S]]);export{O as default};
