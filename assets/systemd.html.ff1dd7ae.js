import{r as c,c as o,a as s,b as a,F as l,e as t,d as n,o as p}from"./app.e62aeb11.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const d={},r=t(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>Systemd \u8BBE\u8BA1\u7684\u76EE\u6807\u662F\uFF0C\u4E3A\u7CFB\u7EDF\u7684\u542F\u52A8\u548C\u7BA1\u7406\u63D0\u4F9B\u4E00\u6574\u5957\u7684\u5B8C\u6574\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u6839\u636E Linux \u60EF\u4F8B\uFF0C\u5B57\u6BCD <code>d</code> \u662F\u5B88\u62A4\u8FDB\u7A0B\uFF08daemon\uFF09\u7684\u7F29\u5199\u3002Systemd \u8FD9\u4E2A\u540D\u5B57\u7684\u542B\u4E49\uFF0C\u5C31\u662F\u5B83\u8981\u5B88\u62A4\u6574\u4E2A\u7CFB\u7EDF\u3002</p><p>Systemd \u7684\u4F18\u70B9\u662F\u529F\u80FD\u5F3A\u5927\uFF0C\u4F7F\u7528\u65B9\u4FBF\uFF0C\u7F3A\u70B9\u662F\u4F53\u7CFB\u5E9E\u5927\uFF0C\u975E\u5E38\u590D\u6742\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u73B0\u5728\u8FD8\u6709\u5F88\u591A\u4EBA\u53CD\u5BF9\u4F7F\u7528 Systemd\uFF0C\u7406\u7531\u5C31\u662F\u5B83\u8FC7\u4E8E\u590D\u6742\uFF0C\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5176\u4ED6\u90E8\u5206\u5F3A\u8026\u5408\uFF0C\u8FDD\u53CD \u201Dkeep simple\uFF0Ckeep stupid\u201C \u7684 Unix \u54F2\u5B66\u3002</p><blockquote><p>\u539F\u6587\u5B9E\u5728\u662F\u592A\u8BE6\u7EC6\u4E86\uFF0C\u5B9E\u5728\u6CA1\u5FC5\u8981\u91CD\u590D\u6574\u7406\u3002</p></blockquote><h2 id="\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218" aria-hidden="true">#</a> \u5B9E\u6218</h2><p>\u6A21\u62DF\u4E00\u4E2A\u64CD\u4F5C\u57FA\u672C\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6709\u4E9B\u8F6F\u4EF6\u652F\u6301 Systemd\uFF0C\u5B89\u88C5\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5728 \`/usr/lib/systemd/system\` \u76EE\u5F55\u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment"># \u7136\u540E\u5C31\u53EF\u4EE5\u8BA9\u5176\u5F00\u673A\u81EA\u542F\u4E86</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> httpd
<span class="token comment"># \u4E0A\u9762\u7684\u547D\u4EE4\u76F8\u5F53\u4E8E\u5728 \`/etc/systemd/system\` \u76EE\u5F55\u6DFB\u52A0\u4E00\u4E2A\u7B26\u53F7\u94FE\u63A5\uFF0C\u6307\u5411 \`/usr/lib/systemd/system\` \u91CC\u9762\u7684 \`httpd.service\` \u6587\u4EF6\u3002</span>
<span class="token comment"># \u8FD9\u662F\u56E0\u4E3A\u5F00\u673A\u65F6\uFF0CSystemd \u53EA\u6267\u884C \`/etc/systemd/system\` \u76EE\u5F55\u91CC\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C\u5982\u679C\u628A\u4FEE\u6539\u540E\u7684\u914D\u7F6E\u6587\u4EF6\u653E\u5728\u8BE5\u76EE\u5F55\uFF0C\u5C31\u53EF\u4EE5\u8FBE\u5230\u8986\u76D6\u539F\u59CB\u914D\u7F6E\u7684\u6548\u679C\u3002</span>

<span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\u4EE5\u540E\uFF0C\u8F6F\u4EF6\u5E76\u4E0D\u4F1A\u7ACB\u5373\u542F\u52A8\uFF0C\u5FC5\u987B\u7B49\u5230\u4E0B\u4E00\u6B21\u5F00\u673A\u3002\u5982\u679C\u60F3\u73B0\u5728\u5C31\u8FD0\u884C\u8BE5\u8F6F\u4EF6\uFF0C\u90A3\u4E48\u8981\u6267\u884C \`systemctl start\` \u547D\u4EE4\u3002</span>
<span class="token function">sudo</span> systemctl start httpd
<span class="token comment"># \u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u4EE5\u540E\uFF0C\u6709\u53EF\u80FD\u542F\u52A8\u5931\u8D25\uFF0C\u56E0\u6B64\u8981\u7528systemctl status\u547D\u4EE4\u67E5\u770B\u4E00\u4E0B\u8BE5\u670D\u52A1\u7684\u72B6\u6001\u3002</span>

<span class="token comment"># \u7EC8\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\uFF0C\u9700\u8981\u6267\u884C \`systemctl stop\` \u547D\u4EE4\u3002</span>
<span class="token function">sudo</span> systemctl stop httpd.service
<span class="token comment"># \u6709\u65F6\u5019\uFF0C\u8BE5\u547D\u4EE4\u53EF\u80FD\u6CA1\u6709\u54CD\u5E94\uFF0C\u670D\u52A1\u505C\u4E0D\u4E0B\u6765\u3002\u8FD9\u65F6\u5019\u5C31\u4E0D\u5F97\u4E0D&quot;\u6740\u8FDB\u7A0B&quot;\u4E86\uFF0C\u5411\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u53D1\u51FAkill\u4FE1\u53F7\u3002</span>
<span class="token function">sudo</span> systemctl <span class="token function">kill</span> httpd.service
<span class="token comment"># \u6B64\u5916\uFF0C\u91CD\u542F\u670D\u52A1\u8981\u6267\u884Csystemctl restart\u547D\u4EE4\u3002</span>
<span class="token function">sudo</span> systemctl restart httpd.service

<span class="token comment"># \u4E00\u4E2A\u670D\u52A1\u600E\u4E48\u542F\u52A8\uFF0C\u5B8C\u5168\u7531\u5B83\u7684\u914D\u7F6E\u6587\u4EF6\u51B3\u5B9A\u3002</span>
systemctl <span class="token function">cat</span> sshd.service

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4EE5\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\u76F8\u5173\u670D\u52A1\u3002</span>
<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># \u91CD\u542F\u76F8\u5173\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl restart foobar
</code></pre></div><h2 id="\u7CFB\u7EDF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u7BA1\u7406" aria-hidden="true">#</a> \u7CFB\u7EDF\u7BA1\u7406</h2><p>Systemd \u5E76\u4E0D\u662F\u4E00\u4E2A\u547D\u4EE4\uFF0C\u800C\u662F\u4E00\u7EC4\u547D\u4EE4\uFF0C\u6D89\u53CA\u7CFB\u7EDF\u7BA1\u7406\u7684\u65B9\u65B9\u9762\u9762\u3002</p><h3 id="_1-systemctl" tabindex="-1"><a class="header-anchor" href="#_1-systemctl" aria-hidden="true">#</a> 1. systemctl</h3><p><code>systemctl</code> \u662F Systemd \u7684\u4E3B\u547D\u4EE4\uFF0C\u7528\u4E8E\u7BA1\u7406\u7CFB\u7EDF\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u91CD\u542F\u7CFB\u7EDF</span>
<span class="token function">sudo</span> systemctl <span class="token function">reboot</span>

<span class="token comment"># \u5173\u95ED\u7CFB\u7EDF\uFF0C\u5207\u65AD\u7535\u6E90</span>
<span class="token function">sudo</span> systemctl poweroff

<span class="token comment"># CPU\u505C\u6B62\u5DE5\u4F5C</span>
<span class="token function">sudo</span> systemctl <span class="token function">halt</span>

<span class="token comment"># \u6682\u505C\u7CFB\u7EDF</span>
<span class="token function">sudo</span> systemctl <span class="token function">suspend</span>

<span class="token comment"># \u8BA9\u7CFB\u7EDF\u8FDB\u5165\u51AC\u7720\u72B6\u6001</span>
<span class="token function">sudo</span> systemctl hibernate

<span class="token comment"># \u8BA9\u897F\u8363\u8FDB\u5165\u4EA4\u4E92\u5F0F\u4F11\u7720\u72B6\u6001</span>
<span class="token function">sudo</span> systemctl hybrid-sleep

<span class="token comment"># \u542F\u52A8\u8FDB\u5165\u6551\u63F4\u72B6\u6001</span>
<span class="token function">sudo</span> systemctl rescue
</code></pre></div><h3 id="_2-systemd-analyze" tabindex="-1"><a class="header-anchor" href="#_2-systemd-analyze" aria-hidden="true">#</a> 2. systemd-analyze</h3><p><code>systemd-analyze</code> \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u542F\u52A8\u8017\u65F6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u542F\u52A8\u8017\u65F6</span>
systemd-analyze                                                                                       

<span class="token comment"># \u67E5\u770B\u6BCF\u4E2A\u670D\u52A1\u7684\u542F\u52A8\u8017\u65F6</span>
systemd-analyze blame

<span class="token comment"># \u663E\u793A\u7011\u5E03\u72B6\u7684\u542F\u52A8\u8FC7\u7A0B\u6D41</span>
systemd-analyze critical-chain

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u670D\u52A1\u7684\u542F\u52A8\u6D41</span>
systemd-analyze critical-chain atd.service
</code></pre></div><h3 id="_3-hostnamectl" tabindex="-1"><a class="header-anchor" href="#_3-hostnamectl" aria-hidden="true">#</a> 3. hostnamectl</h3><p><code>hostnamectl</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u5F53\u524D\u4E3B\u673A\u7684\u4FE1\u606F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u4E3B\u673A\u7684\u4FE1\u606F</span>
hostnamectl

<span class="token comment"># \u8BBE\u7F6E\u4E3B\u673A\u540D\u3002</span>
<span class="token function">sudo</span> hostnamectl set-hostname rhel7
</code></pre></div><h3 id="_4-localectl" tabindex="-1"><a class="header-anchor" href="#_4-localectl" aria-hidden="true">#</a> 4. localectl</h3><p><code>localectl</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u672C\u5730\u5316\u8BBE\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u672C\u5730\u5316\u8BBE\u7F6E</span>
localectl

<span class="token comment"># \u8BBE\u7F6E\u672C\u5730\u5316\u53C2\u6570\u3002</span>
<span class="token function">sudo</span> localectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_GB.utf8
<span class="token function">sudo</span> localectl set-keymap en_GB
</code></pre></div><h3 id="_5-timedatectl" tabindex="-1"><a class="header-anchor" href="#_5-timedatectl" aria-hidden="true">#</a> 5. timedatectl</h3><p><code>timedatectl</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u5F53\u524D\u65F6\u533A\u8BBE\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u65F6\u533A\u8BBE\u7F6E</span>
timedatectl

<span class="token comment"># \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u65F6\u533A</span>
timedatectl list-timezones                                                                                   
<span class="token comment"># \u8BBE\u7F6E\u5F53\u524D\u65F6\u533A</span>
<span class="token function">sudo</span> timedatectl set-timezone America/New_York
<span class="token function">sudo</span> timedatectl set-time YYYY-MM-DD
<span class="token function">sudo</span> timedatectl set-time HH:MM:SS
</code></pre></div><h3 id="_6-loginctl" tabindex="-1"><a class="header-anchor" href="#_6-loginctl" aria-hidden="true">#</a> 6. loginctl</h3><p><code>loginctl</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5F53\u524Dsession</span>
loginctl list-sessions

<span class="token comment"># \u5217\u51FA\u5F53\u524D\u767B\u5F55\u7528\u6237</span>
loginctl list-users

<span class="token comment"># \u5217\u51FA\u663E\u793A\u6307\u5B9A\u7528\u6237\u7684\u4FE1\u606F</span>
loginctl show-user ruanyf
</code></pre></div><h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> Unit</h2><p>Systemd \u53EF\u4EE5\u7BA1\u7406\u6240\u6709\u7CFB\u7EDF\u8D44\u6E90\u3002\u4E0D\u540C\u7684\u8D44\u6E90\u7EDF\u79F0\u4E3A Unit\uFF08\u5355\u4F4D\uFF09\u3002</p><p>Unit \u4E00\u5171\u5206\u621012\u79CD\u3002</p><blockquote><ul><li>Service unit\uFF1A\u7CFB\u7EDF\u670D\u52A1</li><li>Target unit\uFF1A\u591A\u4E2A Unit \u6784\u6210\u7684\u4E00\u4E2A\u7EC4</li><li>Device Unit\uFF1A\u786C\u4EF6\u8BBE\u5907</li><li>Mount Unit\uFF1A\u6587\u4EF6\u7CFB\u7EDF\u7684\u6302\u8F7D\u70B9</li><li>Automount Unit\uFF1A\u81EA\u52A8\u6302\u8F7D\u70B9</li><li>Path Unit\uFF1A\u6587\u4EF6\u6216\u8DEF\u5F84</li><li>Scope Unit\uFF1A\u4E0D\u662F\u7531 Systemd \u542F\u52A8\u7684\u5916\u90E8\u8FDB\u7A0B</li><li>Slice Unit\uFF1A\u8FDB\u7A0B\u7EC4</li><li>Snapshot Unit\uFF1ASystemd \u5FEB\u7167\uFF0C\u53EF\u4EE5\u5207\u56DE\u67D0\u4E2A\u5FEB\u7167</li><li>Socket Unit\uFF1A\u8FDB\u7A0B\u95F4\u901A\u4FE1\u7684 socket</li><li>Swap Unit\uFF1Aswap \u6587\u4EF6</li><li>Timer Unit\uFF1A\u5B9A\u65F6\u5668</li></ul></blockquote><p><code>systemctl list-units</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u7684\u6240\u6709 Unit \u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684 Unit</span>
systemctl list-units

<span class="token comment"># \u5217\u51FA\u6240\u6709Unit\uFF0C\u5305\u62EC\u6CA1\u6709\u627E\u5230\u914D\u7F6E\u6587\u4EF6\u7684\u6216\u8005\u542F\u52A8\u5931\u8D25\u7684</span>
systemctl list-units --all

<span class="token comment"># \u5217\u51FA\u6240\u6709\u6CA1\u6709\u8FD0\u884C\u7684 Unit</span>
systemctl list-units --all --state<span class="token operator">=</span>inactive

<span class="token comment"># \u5217\u51FA\u6240\u6709\u52A0\u8F7D\u5931\u8D25\u7684 Unit</span>
systemctl list-units --failed

<span class="token comment"># \u5217\u51FA\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u3001\u7C7B\u578B\u4E3A service \u7684 Unit</span>
systemctl list-units --type<span class="token operator">=</span>service
</code></pre></div><h3 id="_1-unit-\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-unit-\u7684\u72B6\u6001" aria-hidden="true">#</a> 1. Unit \u7684\u72B6\u6001</h3><p><code>systemctl status</code> \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u7CFB\u7EDF\u72B6\u6001\u548C\u5355\u4E2A Unit \u7684\u72B6\u6001\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u7CFB\u7EDF\u72B6\u6001</span>
systemctl status

<span class="token comment"># \u663E\u793A\u5355\u4E2A Unit \u7684\u72B6\u6001</span>
sysystemctl status bluetooth.service

<span class="token comment"># \u663E\u793A\u8FDC\u7A0B\u4E3B\u673A\u7684\u67D0\u4E2A Unit \u7684\u72B6\u6001</span>
systemctl -H root@rhel7.example.com status httpd.service
</code></pre></div><p>\u9664\u4E86 <code>status</code> \u547D\u4EE4\uFF0C<code>systemctl</code> \u8FD8\u63D0\u4F9B\u4E86\u4E09\u4E2A\u67E5\u8BE2\u72B6\u6001\u7684\u7B80\u5355\u65B9\u6CD5\uFF0C\u4E3B\u8981\u4F9B\u811A\u672C\u5185\u90E8\u7684\u5224\u65AD\u8BED\u53E5\u4F7F\u7528\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u662F\u5426\u6B63\u5728\u8FD0\u884C</span>
systemctl is-active application.service

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u662F\u5426\u5904\u4E8E\u542F\u52A8\u5931\u8D25\u72B6\u6001</span>
systemctl is-failed application.service

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u670D\u52A1\u662F\u5426\u5EFA\u7ACB\u4E86\u542F\u52A8\u94FE\u63A5</span>
systemctl is-enabled application.service
</code></pre></div><h3 id="_2-unit-\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-unit-\u7BA1\u7406" aria-hidden="true">#</a> 2. Unit \u7BA1\u7406</h3><p><strong>\u5BF9\u4E8E\u7528\u6237\u6765\u8BF4\uFF0C\u6700\u5E38\u7528\u7684\u662F\u4E0B\u9762\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u7528\u4E8E\u542F\u52A8\u548C\u505C\u6B62 Unit\uFF08\u4E3B\u8981\u662F service\uFF09\u3002</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7ACB\u5373\u542F\u52A8\u4E00\u4E2A\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl start apache.service

<span class="token comment"># \u7ACB\u5373\u505C\u6B62\u4E00\u4E2A\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl stop apache.service

<span class="token comment"># \u91CD\u542F\u4E00\u4E2A\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl restart apache.service

<span class="token comment"># \u6740\u6B7B\u4E00\u4E2A\u670D\u52A1\u7684\u6240\u6709\u5B50\u8FDB\u7A0B</span>
<span class="token function">sudo</span> systemctl <span class="token function">kill</span> apache.service

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u4E00\u4E2A\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> systemctl reload apache.service

<span class="token comment"># \u91CD\u8F7D\u6240\u6709\u4FEE\u6539\u8FC7\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u7684\u6240\u6709\u5E95\u5C42\u53C2\u6570</span>
systemctl show httpd.service

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027\u7684\u503C</span>
systemctl show -p CPUShares httpd.service

<span class="token comment"># \u8BBE\u7F6E\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027</span>
<span class="token function">sudo</span> systemctl set-property httpd.service <span class="token assign-left variable">CPUShares</span><span class="token operator">=</span><span class="token number">500</span>
</code></pre></div><h3 id="_3-\u4F9D\u8D56\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_3-\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a> 3. \u4F9D\u8D56\u5173\u7CFB</h3><p>Unit \u4E4B\u95F4\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\uFF1AA \u4F9D\u8D56\u4E8E B\uFF0C\u5C31\u610F\u5473\u7740 Systemd \u5728\u542F\u52A8 A \u7684\u65F6\u5019\uFF0C\u540C\u65F6\u4F1A\u53BB\u542F\u52A8 B\u3002</p><p><code>systemctl list-dependencies</code> \u547D\u4EE4\u5217\u51FA\u4E00\u4E2A Unit \u7684\u6240\u6709\u4F9D\u8D56\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl list-dependencies nginx.service
</code></pre></div><p>\u4E0A\u9762\u547D\u4EE4\u7684\u8F93\u51FA\u7ED3\u679C\u4E4B\u4E2D\uFF0C\u6709\u4E9B\u4F9D\u8D56\u662F Target \u7C7B\u578B\uFF08\u8BE6\u89C1\u4E0B\u6587\uFF09\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u5C55\u5F00\u663E\u793A\u3002\u5982\u679C\u8981\u5C55\u5F00 Target\uFF0C\u5C31\u9700\u8981\u4F7F\u7528 <code>--all</code> \u53C2\u6570\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl list-dependencies --all nginx.service
</code></pre></div><h2 id="unit-\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#unit-\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Unit \u7684\u914D\u7F6E\u6587\u4EF6</h2><p>\u6BCF\u4E00\u4E2A Unit \u90FD\u6709\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u544A\u8BC9 Systemd \u600E\u4E48\u542F\u52A8\u8FD9\u4E2A Unit \u3002</p><p>Systemd \u9ED8\u8BA4\u4ECE\u76EE\u5F55 <code>/etc/systemd/system/</code> \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u3002\u4F46\u662F\uFF0C\u91CC\u9762\u5B58\u653E\u7684\u5927\u90E8\u5206\u6587\u4EF6\u90FD\u662F\u7B26\u53F7\u94FE\u63A5\uFF0C\u6307\u5411\u76EE\u5F55 <code>/usr/lib/systemd/system/</code>\uFF0C\u771F\u6B63\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u5728\u90A3\u4E2A\u76EE\u5F55\u3002</p><p><code>systemctl enable</code> \u547D\u4EE4\u7528\u4E8E\u5728\u4E0A\u9762\u4E24\u4E2A\u76EE\u5F55\u4E4B\u95F4\uFF0C\u5EFA\u7ACB\u7B26\u53F7\u94FE\u63A5\u5173\u7CFB\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clamd@scan.service
<span class="token comment"># \u7B49\u540C\u4E8E</span>
<span class="token function">sudo</span> <span class="token function">ln</span> -s <span class="token string">&#39;/usr/lib/systemd/system/clamd@scan.service&#39;</span> <span class="token string">&#39;/etc/systemd/system/multi-user.target.wants/clamd@scan.service&#39;</span>
</code></pre></div><p>\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u91CC\u9762\u8BBE\u7F6E\u4E86\u5F00\u673A\u542F\u52A8\uFF0C<code>systemctl enable</code> \u547D\u4EE4\u76F8\u5F53\u4E8E\u6FC0\u6D3B\u5F00\u673A\u542F\u52A8\u3002</p><p>\u4E0E\u4E4B\u5BF9\u5E94\u7684\uFF0C<code>systemctl disable</code> \u547D\u4EE4\u7528\u4E8E\u5728\u4E24\u4E2A\u76EE\u5F55\u4E4B\u95F4\uFF0C\u64A4\u9500\u7B26\u53F7\u94FE\u63A5\u5173\u7CFB\uFF0C\u76F8\u5F53\u4E8E\u64A4\u9500\u5F00\u673A\u542F\u52A8\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl disable clamd@scan.service
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u7684\u540E\u7F00\u540D\uFF0C\u5C31\u662F\u8BE5 Unit \u7684\u79CD\u7C7B\uFF0C\u6BD4\u5982 <code>sshd.socket</code> \u3002\u5982\u679C\u7701\u7565\uFF0CSystemd \u9ED8\u8BA4\u540E\u7F00\u540D\u4E3A <code>.service</code>\uFF0C\u6240\u4EE5 <code>sshd</code> \u4F1A\u88AB\u7406\u89E3\u6210 <code>sshd.service</code> \u3002</p><h3 id="_1-\u914D\u7F6E\u6587\u4EF6\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E\u6587\u4EF6\u7684\u72B6\u6001" aria-hidden="true">#</a> 1. \u914D\u7F6E\u6587\u4EF6\u7684\u72B6\u6001</h3><p><code>systemctl list-unit-files</code> \u547D\u4EE4\u7528\u4E8E\u5217\u51FA\u6240\u6709\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u914D\u7F6E\u6587\u4EF6</span>
systemctl list-unit-files

<span class="token comment"># \u5217\u51FA\u6307\u5B9A\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6</span>
systemctl list-unit-files --type<span class="token operator">=</span>service
</code></pre></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u8F93\u51FA\u4E00\u4E2A\u5217\u8868\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl list-unit-files

UNIT FILE              STATE
chronyd.service        enabled
clamd@.service         static
clamd@scan.service     disabled
</code></pre></div><p>\u8FD9\u4E2A\u5217\u8868\u663E\u793A\u6BCF\u4E2A\u914D\u7F6E\u6587\u4EF6\u7684\u72B6\u6001\uFF0C\u4E00\u5171\u6709\u56DB\u79CD\u3002</p><ul><li>enabled\uFF1A\u5DF2\u5EFA\u7ACB\u542F\u52A8\u94FE\u63A5</li><li>disabled\uFF1A\u6CA1\u5EFA\u7ACB\u542F\u52A8\u94FE\u63A5</li><li>static\uFF1A\u8BE5\u914D\u7F6E\u6587\u4EF6\u6CA1\u6709 <code>[Install]</code> \u90E8\u5206\uFF08\u65E0\u6CD5\u6267\u884C\uFF09\uFF0C\u53EA\u80FD\u4F5C\u4E3A\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\u7684\u4F9D\u8D56</li><li>masked\uFF1A\u8BE5\u914D\u7F6E\u6587\u4EF6\u88AB\u7981\u6B62\u5EFA\u7ACB\u542F\u52A8\u94FE\u63A5</li></ul><p>\u6CE8\u610F\uFF0C\u4ECE\u914D\u7F6E\u6587\u4EF6\u7684\u72B6\u6001\u65E0\u6CD5\u770B\u51FA\uFF0C\u8BE5 Unit \u662F\u5426\u6B63\u5728\u8FD0\u884C\u3002\u8FD9\u5FC5\u987B\u6267\u884C\u524D\u9762\u63D0\u5230\u7684 <code>systemctl status</code> \u547D\u4EE4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl status bluetooth.service
</code></pre></div><p>\u4E00\u65E6\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C31\u8981\u8BA9 SystemD \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\uFF0C\u5426\u5219\u4FEE\u6539\u4E0D\u4F1A\u751F\u6548\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart httpd.service
</code></pre></div><h3 id="_2-\u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F" aria-hidden="true">#</a> 2. \u914D\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F</h3><p>\u914D\u7F6E\u6587\u4EF6\u5C31\u662F\u666E\u901A\u7684\u6587\u672C\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u3002</p><p><code>systemctl cat</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token function">cat</span> atd.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>ATD daemon

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/atd

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u8F93\u51FA\u53EF\u4EE5\u770B\u5230\uFF0C\u914D\u7F6E\u6587\u4EF6\u5206\u6210\u51E0\u4E2A\u533A\u5757\u3002\u6BCF\u4E2A\u533A\u5757\u7684\u7B2C\u4E00\u884C\uFF0C\u662F\u7528\u65B9\u62EC\u53F7\u8868\u793A\u7684\u533A\u522B\u540D\uFF0C\u6BD4\u5982 <code>[Unit]</code> \u3002\u6CE8\u610F\uFF0C\u914D\u7F6E\u6587\u4EF6\u7684\u533A\u5757\u540D\u548C\u5B57\u6BB5\u540D\uFF0C\u90FD\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002</p><p>\u6BCF\u4E2A\u533A\u5757\u5185\u90E8\u662F\u4E00\u4E9B\u7B49\u53F7\u8FDE\u63A5\u7684\u952E\u503C\u5BF9\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Section<span class="token punctuation">]</span>
<span class="token assign-left variable">Directive1</span><span class="token operator">=</span>value
<span class="token assign-left variable">Directive2</span><span class="token operator">=</span>value
</code></pre></div><p>\u6CE8\u610F\uFF0C\u952E\u503C\u5BF9\u7684\u7B49\u53F7\u4E24\u4FA7\u4E0D\u80FD\u6709\u7A7A\u683C\u3002</p><h3 id="_3-\u914D\u7F6E\u6587\u4EF6\u7684\u533A\u5757" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u6587\u4EF6\u7684\u533A\u5757" aria-hidden="true">#</a> 3. \u914D\u7F6E\u6587\u4EF6\u7684\u533A\u5757</h3><p><code>[Unit]</code> \u533A\u5757\u901A\u5E38\u662F\u914D\u7F6E\u6587\u4EF6\u7684\u7B2C\u4E00\u4E2A\u533A\u5757\uFF0C\u7528\u6765\u5B9A\u4E49 Unit \u7684\u5143\u6570\u636E\uFF0C\u4EE5\u53CA\u914D\u7F6E\u4E0E\u5176\u4ED6 Unit \u7684\u5173\u7CFB\u3002\u5B83\u7684\u4E3B\u8981\u5B57\u6BB5\u5982\u4E0B\uFF1A</p><ul><li><code>Description</code>\uFF1A\u7B80\u77ED\u63CF\u8FF0</li><li><code>Documentation</code>\uFF1A\u6587\u6863\u5730\u5740</li><li><code>Requires</code>\uFF1A\u5F53\u524D Unit \u4F9D\u8D56\u7684\u5176\u4ED6 Unit\uFF0C\u5982\u679C\u5B83\u4EEC\u6CA1\u6709\u8FD0\u884C\uFF0C\u5F53\u524D Unit \u4F1A\u542F\u52A8\u5931\u8D25</li><li><code>Wants</code>\uFF1A\u4E0E\u5F53\u524D Unit \u914D\u5408\u7684\u5176\u4ED6 Unit\uFF0C\u5982\u679C\u5B83\u4EEC\u6CA1\u6709\u8FD0\u884C\uFF0C\u5F53\u524D Unit \u4E0D\u4F1A\u542F\u52A8\u5931\u8D25</li><li><code>BindsTo</code>\uFF1A\u4E0E<code>Requires</code>\u7C7B\u4F3C\uFF0C\u5B83\u6307\u5B9A\u7684 Unit \u5982\u679C\u9000\u51FA\uFF0C\u4F1A\u5BFC\u81F4\u5F53\u524D Unit \u505C\u6B62\u8FD0\u884C</li><li><code>Before</code>\uFF1A\u5982\u679C\u8BE5\u5B57\u6BB5\u6307\u5B9A\u7684 Unit \u4E5F\u8981\u542F\u52A8\uFF0C\u90A3\u4E48\u5FC5\u987B\u5728\u5F53\u524D Unit \u4E4B\u540E\u542F\u52A8</li><li><code>After</code>\uFF1A\u5982\u679C\u8BE5\u5B57\u6BB5\u6307\u5B9A\u7684 Unit \u4E5F\u8981\u542F\u52A8\uFF0C\u90A3\u4E48\u5FC5\u987B\u5728\u5F53\u524D Unit \u4E4B\u524D\u542F\u52A8</li><li><code>Conflicts</code>\uFF1A\u8FD9\u91CC\u6307\u5B9A\u7684 Unit \u4E0D\u80FD\u4E0E\u5F53\u524D Unit \u540C\u65F6\u8FD0\u884C</li><li><code>Condition...</code>\uFF1A\u5F53\u524D Unit \u8FD0\u884C\u5FC5\u987B\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF0C\u5426\u5219\u4E0D\u4F1A\u8FD0\u884C</li><li><code>Assert...</code>\uFF1A\u5F53\u524D Unit \u8FD0\u884C\u5FC5\u987B\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF0C\u5426\u5219\u4F1A\u62A5\u542F\u52A8\u5931\u8D25</li></ul><p><code>[Install]</code> \u901A\u5E38\u662F\u914D\u7F6E\u6587\u4EF6\u7684\u6700\u540E\u4E00\u4E2A\u533A\u5757\uFF0C\u7528\u6765\u5B9A\u4E49\u5982\u4F55\u542F\u52A8\uFF0C\u4EE5\u53CA\u662F\u5426\u5F00\u673A\u542F\u52A8\u3002\u5B83\u7684\u4E3B\u8981\u5B57\u6BB5\u5982\u4E0B\uFF1A</p><ul><li><code>WantedBy</code>\uFF1A\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u6216\u591A\u4E2A Target\uFF0C\u5F53\u524D Unit \u6FC0\u6D3B\u65F6\uFF08enable\uFF09\u7B26\u53F7\u94FE\u63A5\u4F1A\u653E\u5165<code>/etc/systemd/system</code>\u76EE\u5F55\u4E0B\u9762\u4EE5 Target \u540D + <code>.wants</code>\u540E\u7F00\u6784\u6210\u7684\u5B50\u76EE\u5F55\u4E2D</li><li><code>RequiredBy</code>\uFF1A\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u6216\u591A\u4E2A Target\uFF0C\u5F53\u524D Unit \u6FC0\u6D3B\u65F6\uFF0C\u7B26\u53F7\u94FE\u63A5\u4F1A\u653E\u5165<code>/etc/systemd/system</code>\u76EE\u5F55\u4E0B\u9762\u4EE5 Target \u540D + <code>.required</code>\u540E\u7F00\u6784\u6210\u7684\u5B50\u76EE\u5F55\u4E2D</li><li><code>Alias</code>\uFF1A\u5F53\u524D Unit \u53EF\u7528\u4E8E\u542F\u52A8\u7684\u522B\u540D</li><li><code>Also</code>\uFF1A\u5F53\u524D Unit \u6FC0\u6D3B\uFF08enable\uFF09\u65F6\uFF0C\u4F1A\u88AB\u540C\u65F6\u6FC0\u6D3B\u7684\u5176\u4ED6 Unit</li></ul><p><code>[Service]</code> \u533A\u5757\u7528\u6765 Service \u7684\u914D\u7F6E\uFF0C\u53EA\u6709 Service \u7C7B\u578B\u7684 Unit \u624D\u6709\u8FD9\u4E2A\u533A\u5757\u3002\u5B83\u7684\u4E3B\u8981\u5B57\u6BB5\u5982\u4E0B\uFF1A</p><ul><li><code>Type</code>\uFF1A\u5B9A\u4E49\u542F\u52A8\u65F6\u7684\u8FDB\u7A0B\u884C\u4E3A\u3002\u5B83\u6709\u4EE5\u4E0B\u51E0\u79CD\u503C\u3002</li><li><code>Type=simple</code>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u6267\u884C<code>ExecStart</code>\u6307\u5B9A\u7684\u547D\u4EE4\uFF0C\u542F\u52A8\u4E3B\u8FDB\u7A0B</li><li><code>Type=forking</code>\uFF1A\u4EE5 fork \u65B9\u5F0F\u4ECE\u7236\u8FDB\u7A0B\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF0C\u521B\u5EFA\u540E\u7236\u8FDB\u7A0B\u4F1A\u7ACB\u5373\u9000\u51FA</li><li><code>Type=oneshot</code>\uFF1A\u4E00\u6B21\u6027\u8FDB\u7A0B\uFF0CSystemd \u4F1A\u7B49\u5F53\u524D\u670D\u52A1\u9000\u51FA\uFF0C\u518D\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C</li><li><code>Type=dbus</code>\uFF1A\u5F53\u524D\u670D\u52A1\u901A\u8FC7D-Bus\u542F\u52A8</li><li><code>Type=notify</code>\uFF1A\u5F53\u524D\u670D\u52A1\u542F\u52A8\u5B8C\u6BD5\uFF0C\u4F1A\u901A\u77E5<code>Systemd</code>\uFF0C\u518D\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C</li><li><code>Type=idle</code>\uFF1A\u82E5\u6709\u5176\u4ED6\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u5F53\u524D\u670D\u52A1\u624D\u4F1A\u8FD0\u884C</li><li><code>ExecStart</code>\uFF1A\u542F\u52A8\u5F53\u524D\u670D\u52A1\u7684\u547D\u4EE4</li><li><code>ExecStartPre</code>\uFF1A\u542F\u52A8\u5F53\u524D\u670D\u52A1\u4E4B\u524D\u6267\u884C\u7684\u547D\u4EE4</li><li><code>ExecStartPost</code>\uFF1A\u542F\u52A8\u5F53\u524D\u670D\u52A1\u4E4B\u540E\u6267\u884C\u7684\u547D\u4EE4</li><li><code>ExecReload</code>\uFF1A\u91CD\u542F\u5F53\u524D\u670D\u52A1\u65F6\u6267\u884C\u7684\u547D\u4EE4</li><li><code>ExecStop</code>\uFF1A\u505C\u6B62\u5F53\u524D\u670D\u52A1\u65F6\u6267\u884C\u7684\u547D\u4EE4</li><li><code>ExecStopPost</code>\uFF1A\u505C\u6B62\u5F53\u5176\u670D\u52A1\u4E4B\u540E\u6267\u884C\u7684\u547D\u4EE4</li><li><code>RestartSec</code>\uFF1A\u81EA\u52A8\u91CD\u542F\u5F53\u524D\u670D\u52A1\u95F4\u9694\u7684\u79D2\u6570</li><li><code>Restart</code>\uFF1A\u5B9A\u4E49\u4F55\u79CD\u60C5\u51B5 Systemd \u4F1A\u81EA\u52A8\u91CD\u542F\u5F53\u524D\u670D\u52A1\uFF0C\u53EF\u80FD\u7684\u503C\u5305\u62EC<code>always</code>\uFF08\u603B\u662F\u91CD\u542F\uFF09\u3001<code>on-success</code>\u3001<code>on-failure</code>\u3001<code>on-abnormal</code>\u3001<code>on-abort</code>\u3001<code>on-watchdog</code></li><li><code>TimeoutSec</code>\uFF1A\u5B9A\u4E49 Systemd \u505C\u6B62\u5F53\u524D\u670D\u52A1\u4E4B\u524D\u7B49\u5F85\u7684\u79D2\u6570</li><li><code>Environment</code>\uFF1A\u6307\u5B9A\u73AF\u5883\u53D8\u91CF</li></ul>`,83),u=n("Unit \u914D\u7F6E\u6587\u4EF6\u7684\u5B8C\u6574\u5B57\u6BB5\u6E05\u5355\uFF0C\u8BF7\u53C2\u8003"),m={href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html",target:"_blank",rel:"noopener noreferrer"},k=n("\u5B98\u65B9\u6587\u6863"),h=n("\u3002"),g=t(`<h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h2><p>\u542F\u52A8\u8BA1\u7B97\u673A\u7684\u65F6\u5019\uFF0C\u9700\u8981\u542F\u52A8\u5927\u91CF\u7684 Unit\u3002\u5982\u679C\u6BCF\u4E00\u6B21\u542F\u52A8\uFF0C\u90FD\u8981\u4E00\u4E00\u5199\u660E\u672C\u6B21\u542F\u52A8\u9700\u8981\u54EA\u4E9B Unit\uFF0C\u663E\u7136\u975E\u5E38\u4E0D\u65B9\u4FBF\u3002Systemd \u7684\u89E3\u51B3\u65B9\u6848\u5C31\u662F Target\u3002</p><p>\u7B80\u5355\u8BF4\uFF0CTarget \u5C31\u662F\u4E00\u4E2A Unit \u7EC4\uFF0C\u5305\u542B\u8BB8\u591A\u76F8\u5173\u7684 Unit \u3002\u542F\u52A8\u67D0\u4E2A Target \u7684\u65F6\u5019\uFF0CSystemd \u5C31\u4F1A\u542F\u52A8\u91CC\u9762\u6240\u6709\u7684 Unit\u3002\u4ECE\u8FD9\u4E2A\u610F\u4E49\u4E0A\u8BF4\uFF0CTarget \u8FD9\u4E2A\u6982\u5FF5\u7C7B\u4F3C\u4E8E&quot;\u72B6\u6001\u70B9&quot;\uFF0C\u542F\u52A8\u67D0\u4E2A Target \u5C31\u597D\u6BD4\u542F\u52A8\u5230\u67D0\u79CD\u72B6\u6001\u3002</p><p>\u4F20\u7EDF\u7684 <code>init</code> \u542F\u52A8\u6A21\u5F0F\u91CC\u9762\uFF0C\u6709 RunLevel \u7684\u6982\u5FF5\uFF0C\u8DDF Target \u7684\u4F5C\u7528\u5F88\u7C7B\u4F3C\u3002\u4E0D\u540C\u7684\u662F\uFF0CRunLevel \u662F\u4E92\u65A5\u7684\uFF0C\u4E0D\u53EF\u80FD\u591A\u4E2A RunLevel \u540C\u65F6\u542F\u52A8\uFF0C\u4F46\u662F\u591A\u4E2A Target \u53EF\u4EE5\u540C\u65F6\u542F\u52A8\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u7684\u6240\u6709 Target</span>
systemctl list-unit-files --type<span class="token operator">=</span>target

<span class="token comment"># \u67E5\u770B\u4E00\u4E2A Target \u5305\u542B\u7684\u6240\u6709 Unit</span>
systemctl list-dependencies multi-user.target

<span class="token comment"># \u67E5\u770B\u542F\u52A8\u65F6\u7684\u9ED8\u8BA4 Target</span>
systemctl get-default

<span class="token comment"># \u8BBE\u7F6E\u542F\u52A8\u65F6\u7684\u9ED8\u8BA4 Target</span>
<span class="token function">sudo</span> systemctl set-default multi-user.target

<span class="token comment"># \u5207\u6362 Target \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u5173\u95ED\u524D\u4E00\u4E2A Target \u542F\u52A8\u7684\u8FDB\u7A0B\uFF0C</span>
<span class="token comment"># systemctl isolate \u547D\u4EE4\u6539\u53D8\u8FD9\u79CD\u884C\u4E3A\uFF0C</span>
<span class="token comment"># \u5173\u95ED\u524D\u4E00\u4E2A Target \u91CC\u9762\u6240\u6709\u4E0D\u5C5E\u4E8E\u540E\u4E00\u4E2A Target \u7684\u8FDB\u7A0B</span>
<span class="token function">sudo</span> systemctl isolate multi-user.target
</code></pre></div><p>Target \u4E0E \u4F20\u7EDF RunLevel \u7684\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Traditional runlevel      New target name     Symbolically linked to<span class="token punctuation">..</span>.

Runlevel <span class="token number">0</span>           <span class="token operator">|</span>    runlevel0.target -<span class="token operator">&gt;</span> poweroff.target
Runlevel <span class="token number">1</span>           <span class="token operator">|</span>    runlevel1.target -<span class="token operator">&gt;</span> rescue.target
Runlevel <span class="token number">2</span>           <span class="token operator">|</span>    runlevel2.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">3</span>           <span class="token operator">|</span>    runlevel3.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">4</span>           <span class="token operator">|</span>    runlevel4.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">5</span>           <span class="token operator">|</span>    runlevel5.target -<span class="token operator">&gt;</span> graphical.target
Runlevel <span class="token number">6</span>           <span class="token operator">|</span>    runlevel6.target -<span class="token operator">&gt;</span> reboot.target
</code></pre></div><p>\u5B83\u4E0E <code>init</code> \u8FDB\u7A0B\u7684\u4E3B\u8981\u5DEE\u522B\u5982\u4E0B\u3002</p><p><strong>\uFF081\uFF09\u9ED8\u8BA4\u7684 RunLevel</strong>\uFF08\u5728<code>/etc/inittab</code>\u6587\u4EF6\u8BBE\u7F6E\uFF09\u73B0\u5728\u88AB\u9ED8\u8BA4\u7684 Target \u53D6\u4EE3\uFF0C\u4F4D\u7F6E\u662F<code>/etc/systemd/system/default.target</code>\uFF0C\u901A\u5E38\u7B26\u53F7\u94FE\u63A5\u5230<code>graphical.target</code>\uFF08\u56FE\u5F62\u754C\u9762\uFF09\u6216\u8005<code>multi-user.target</code>\uFF08\u591A\u7528\u6237\u547D\u4EE4\u884C\uFF09\u3002</p><p><strong>\uFF082\uFF09\u542F\u52A8\u811A\u672C\u7684\u4F4D\u7F6E</strong>\uFF0C\u4EE5\u524D\u662F<code>/etc/init.d</code>\u76EE\u5F55\uFF0C\u7B26\u53F7\u94FE\u63A5\u5230\u4E0D\u540C\u7684 RunLevel \u76EE\u5F55 \uFF08\u6BD4\u5982<code>/etc/rc3.d</code>\u3001<code>/etc/rc5.d</code>\u7B49\uFF09\uFF0C\u73B0\u5728\u5219\u5B58\u653E\u5728<code>/lib/systemd/system</code>\u548C<code>/etc/systemd/system</code>\u76EE\u5F55\u3002</p><p><strong>\uFF083\uFF09\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E</strong>\uFF0C\u4EE5\u524D<code>init</code>\u8FDB\u7A0B\u7684\u914D\u7F6E\u6587\u4EF6\u662F<code>/etc/inittab</code>\uFF0C\u5404\u79CD\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u5728<code>/etc/sysconfig</code>\u76EE\u5F55\u3002\u73B0\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u5B58\u653E\u5728<code>/lib/systemd</code>\u76EE\u5F55\uFF0C\u5728<code>/etc/systemd</code>\u76EE\u5F55\u91CC\u9762\u7684\u4FEE\u6539\u53EF\u4EE5\u8986\u76D6\u539F\u59CB\u8BBE\u7F6E\u3002</p><h2 id="\u65E5\u5FD7\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u7BA1\u7406" aria-hidden="true">#</a> \u65E5\u5FD7\u7BA1\u7406</h2><p>Systemd \u7EDF\u4E00\u7BA1\u7406\u6240\u6709 Unit \u7684\u542F\u52A8\u65E5\u5FD7\u3002\u5E26\u6765\u7684\u597D\u5904\u5C31\u662F\uFF0C\u53EF\u4EE5\u53EA\u7528<code>journalctl</code> \u4E00\u4E2A\u547D\u4EE4\uFF0C\u67E5\u770B\u6240\u6709\u65E5\u5FD7\uFF08\u5185\u6838\u65E5\u5FD7\u548C\u5E94\u7528\u65E5\u5FD7\uFF09\u3002\u65E5\u5FD7\u7684\u914D\u7F6E\u6587\u4EF6\u662F <code>/etc/systemd/journald.conf</code> \u3002</p><p><code>journalctl</code> \u529F\u80FD\u5F3A\u5927\uFF0C\u7528\u6CD5\u975E\u5E38\u591A\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u65E5\u5FD7\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B \uFF0C\u53EA\u4FDD\u5B58\u672C\u6B21\u542F\u52A8\u7684\u65E5\u5FD7\uFF09</span>
<span class="token function">sudo</span> journalctl

<span class="token comment"># \u67E5\u770B\u5185\u6838\u65E5\u5FD7\uFF08\u4E0D\u663E\u793A\u5E94\u7528\u65E5\u5FD7\uFF09</span>
<span class="token function">sudo</span> journalctl -k

<span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u672C\u6B21\u542F\u52A8\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -b
<span class="token function">sudo</span> journalctl -b -0

<span class="token comment"># \u67E5\u770B\u4E0A\u4E00\u6B21\u542F\u52A8\u7684\u65E5\u5FD7\uFF08\u9700\u66F4\u6539\u8BBE\u7F6E\uFF09</span>
<span class="token function">sudo</span> journalctl -b -1

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u65F6\u95F4\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl --since<span class="token operator">=</span><span class="token string">&quot;2012-10-30 18:17:16&quot;</span>
<span class="token function">sudo</span> journalctl --since <span class="token string">&quot;20 min ago&quot;</span>
<span class="token function">sudo</span> journalctl --since yesterday
<span class="token function">sudo</span> journalctl --since <span class="token string">&quot;2015-01-10&quot;</span> --until <span class="token string">&quot;2015-01-11 03:00&quot;</span>
<span class="token function">sudo</span> journalctl --since 09:00 --until <span class="token string">&quot;1 hour ago&quot;</span>

<span class="token comment"># \u663E\u793A\u5C3E\u90E8\u7684\u6700\u65B010\u884C\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -n

<span class="token comment"># \u663E\u793A\u5C3E\u90E8\u6307\u5B9A\u884C\u6570\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -n <span class="token number">20</span>

<span class="token comment"># \u5B9E\u65F6\u6EDA\u52A8\u663E\u793A\u6700\u65B0\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -f

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u670D\u52A1\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl /usr/lib/systemd/systemd

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u8FDB\u7A0B\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># \u67E5\u770B\u67D0\u4E2A\u8DEF\u5F84\u7684\u811A\u672C\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl /usr/bin/bash

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u7528\u6237\u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl <span class="token assign-left variable">_UID</span><span class="token operator">=</span><span class="token number">33</span> --since today

<span class="token comment"># \u67E5\u770B\u67D0\u4E2A Unit \u7684\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -u nginx.service
<span class="token function">sudo</span> journalctl -u nginx.service --since today

<span class="token comment"># \u5B9E\u65F6\u6EDA\u52A8\u663E\u793A\u67D0\u4E2A Unit \u7684\u6700\u65B0\u65E5\u5FD7</span>
<span class="token function">sudo</span> journalctl -u nginx.service -f

<span class="token comment"># \u5408\u5E76\u663E\u793A\u591A\u4E2A Unit \u7684\u65E5\u5FD7</span>
journalctl -u nginx.service -u php-fpm.service --since today

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u4F18\u5148\u7EA7\uFF08\u53CA\u5176\u4EE5\u4E0A\u7EA7\u522B\uFF09\u7684\u65E5\u5FD7\uFF0C\u5171\u67098\u7EA7</span>
<span class="token comment"># 0: emerg</span>
<span class="token comment"># 1: alert</span>
<span class="token comment"># 2: crit</span>
<span class="token comment"># 3: err</span>
<span class="token comment"># 4: warning</span>
<span class="token comment"># 5: notice</span>
<span class="token comment"># 6: info</span>
<span class="token comment"># 7: debug</span>
<span class="token function">sudo</span> journalctl -p err -b

<span class="token comment"># \u65E5\u5FD7\u9ED8\u8BA4\u5206\u9875\u8F93\u51FA\uFF0C--no-pager \u6539\u4E3A\u6B63\u5E38\u7684\u6807\u51C6\u8F93\u51FA</span>
<span class="token function">sudo</span> journalctl --no-pager

<span class="token comment"># \u4EE5 JSON \u683C\u5F0F\uFF08\u5355\u884C\uFF09\u8F93\u51FA</span>
<span class="token function">sudo</span> journalctl -b -u nginx.service -o json

<span class="token comment"># \u4EE5 JSON \u683C\u5F0F\uFF08\u591A\u884C\uFF09\u8F93\u51FA\uFF0C\u53EF\u8BFB\u6027\u66F4\u597D</span>
<span class="token function">sudo</span> journalctl -b -u nginx.serviceqq
 -o json-pretty

<span class="token comment"># \u663E\u793A\u65E5\u5FD7\u5360\u636E\u7684\u786C\u76D8\u7A7A\u95F4</span>
<span class="token function">sudo</span> journalctl --disk-usage

<span class="token comment"># \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u5360\u636E\u7684\u6700\u5927\u7A7A\u95F4</span>
<span class="token function">sudo</span> journalctl --vacuum-size<span class="token operator">=</span>1G

<span class="token comment"># \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u4FDD\u5B58\u591A\u4E45</span>
<span class="token function">sudo</span> journalctl --vacuum-time<span class="token operator">=</span>1years
</code></pre></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,16),y={href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"},b=n("\u539F\u6587\uFF1ASystemd \u5165\u95E8\u6559\u7A0B");function f(v,U){const e=c("OutboundLink");return p(),o(l,null,[r,s("p",null,[u,s("a",m,[k,a(e)]),h]),g,s("p",null,[s("a",y,[b,a(e)])])],64)}var S=i(d,[["render",f]]);export{S as default};
