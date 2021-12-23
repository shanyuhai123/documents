import{e as t}from"./app.63dea666.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const a={},n=t(`<h1 id="\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u7BA1\u7406</h1><p>Linux \u662F\u591A\u7528\u6237\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0CLinux \u7CFB\u7EDF\u652F\u6301\u591A\u4E2A\u591A\u7528\u6237\u5728\u540C\u4E00\u65F6\u95F4\u5185\u767B\u5F55\uFF0C\u5E76\u5207\u6BCF\u4E2A\u7528\u6237\u53EF\u4EE5\u6267\u884C\u4E0D\u540C\u7684\u4EFB\u52A1\u3002</p><p>\u5728\u767B\u5F55 Linux \u7CFB\u7EDF\u65F6\u867D\u7136\u8F93\u5165\u7684\u662F\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u4F46\u5176\u5B9E Linux \u5E76\u4E0D\u8BA4\u8BC6\u7528\u6237\u540D\u79F0\uFF0C\u5B83\u53EA\u8BA4\u8BC6\u7528\u6237\u540D\u5BF9\u5E94\u7684 ID\u3002Linux \u5C06\u7528\u6237\u540D\u4E0E ID \u7684\u5BF9\u5E94\u5173\u7CFB\u5B58\u653E\u5728 <code>/etc/passwd</code> \u6587\u4EF6\u4E2D\uFF1B\u5C06\u7528\u6237\u7EC4\u540D\u4E0E GID \u7684\u5BF9\u5E94\u5173\u7CFB\u5B58\u653E\u5728 <code>/etc/group</code> \u6587\u4EF6\u4E2D\u3002</p><h2 id="passwd-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#passwd-\u683C\u5F0F" aria-hidden="true">#</a> passwd \u683C\u5F0F</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p><code>shanyuhai:x:1000:1000:shanyuhai:/home/shanyuhai:/bin/bash</code></p><p>\u5BF9\u5E94\u4E3A \u27A1\uFE0F \u7528\u6237\u540D:\u5BC6\u7801:UID:GID:\u63CF\u8FF0\u4FE1\u606F:\u4E3B\u76EE\u5F55:\u9ED8\u8BA4Shell</p></div><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:left;">\u89E3\u91CA</th></tr></thead><tbody><tr><td style="text-align:center;">\u7528\u6237\u540D</td><td style="text-align:left;">\u65B9\u4FBF\u7528\u6237\u8BB0\u5FC6\u7684\u5B57\u7B26\u4E32\u3002</td></tr><tr><td style="text-align:center;">\u5BC6\u7801</td><td style="text-align:left;">x \uFF08x \u867D\u7136\u4E0D\u662F\u771F\u6B63\u7684\u5BC6\u7801\uFF0C\u88AB\u5220\u9664\u5219\u4F1A\u88AB\u8BA4\u4E3A\u6CA1\u6709\u5BC6\u7801\uFF09\u8868\u793A\u8BE5\u7528\u6237\u8BBE\u7F6E\u4E86\u5BC6\u7801\uFF0C\u4F46\u4E0D\u662F\u771F\u6B63\u7684\u5BC6\u7801\uFF0C\u771F\u6B63\u7684\u5BC6\u7801\u4FDD\u5B58\u5728 <code>/etc/shadow</code> \u6587\u4EF6\u4E2D\u3002\u65E9\u671F UNIX \u4E2D\uFF0C\u4FDD\u5B58\u7684\u662F\u771F\u6B63\u7684\u52A0\u5BC6\u5BC6\u7801\u4E32\uFF0C\u540E\u679C\u5C31\u662F\u88AB\u66B4\u529B\u7834\u89E3\u3002</td></tr><tr><td style="text-align:center;">UID</td><td style="text-align:left;">\u7528\u6765\u8BC6\u522B\u7528\u6237\u7684 ID\u30020 \u4E3A\u8D85\u7EA7\u7528\u6237\uFF1B1 \uFF5E 1000 \u4E3A\u4F2A\u7528\u6237\uFF1B1000 \uFF5E 65535 \u4E3A\u666E\u901A\u7528\u6237\u3002</td></tr><tr><td style="text-align:center;">GID</td><td style="text-align:left;">\u8868\u793A\u7528\u6237\u521D\u59CB\u7EC4\u7684\u7EC4 ID\uFF0C\u521B\u5EFA\u7528\u6237\u65F6\u81EA\u52A8\u521B\u5EFA\uFF0C\u7528\u6237\u53EF\u4EE5\u52A0\u5165\u5176\u4ED6\u7684\u7528\u6237\u7EC4\uFF08\u9644\u52A0\u7EC4\uFF09\u3002</td></tr><tr><td style="text-align:center;">\u63CF\u8FF0\u4FE1\u606F</td><td style="text-align:left;">\u5373\u63CF\u8FF0\u4FE1\u606F\u3002</td></tr><tr><td style="text-align:center;">\u4E3B\u76EE\u5F55</td><td style="text-align:left;">\u4E3B\u76EE\u5F55\u53C8\u79F0\u5BB6\u76EE\u5F55\u3002</td></tr><tr><td style="text-align:center;">\u9ED8\u8BA4 Shell</td><td style="text-align:left;">Shell \u5C31\u662F Linux \u7684\u547D\u4EE4\u89E3\u91CA\u5668\u3002</td></tr></tbody></table><h2 id="\u7528\u6237\u76F8\u5173\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u76F8\u5173\u64CD\u4F5C" aria-hidden="true">#</a> \u7528\u6237\u76F8\u5173\u64CD\u4F5C</h2><table><thead><tr><th style="text-align:center;">\u547D\u4EE4</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">useradd</td><td>\u65B0\u589E\u7528\u6237\u3002</td></tr><tr><td style="text-align:center;">passwd</td><td>\u4FEE\u6539\u5BC6\u7801\u3002</td></tr><tr><td style="text-align:center;">usermod</td><td>\u4FEE\u6539\u7528\u6237\uFF08visudo \u66F4\u5F3A\uFF09\u3002</td></tr><tr><td style="text-align:center;">chage</td><td>\u4FEE\u6539\u5BC6\u7801\u4FE1\u606F\uFF0C\u53EF\u7528\u4E8E\u8BA9\u7528\u6237\u767B\u5F55\u540E\u7ACB\u5373\u4FEE\u6539\u5BC6\u7801 <code>chage -d 0 username</code> \u3002</td></tr><tr><td style="text-align:center;">userdel</td><td>\u5220\u9664\u7528\u6237\u3002</td></tr><tr><td style="text-align:center;">groupadd</td><td>\u65B0\u589E\u7528\u6237\u7EC4\u3002</td></tr><tr><td style="text-align:center;">groupmod</td><td>\u4FEE\u6539\u7528\u6237\u7EC4\u3002</td></tr><tr><td style="text-align:center;">groupdel</td><td>\u5220\u9664\u7528\u6237\u7EC4\uFF0C\u4EC5\u9002\u7528\u4E8E\u4E0D\u662F\u4EFB\u4F55\u7528\u6237\u521D\u59CB\u7EC4\u7684\u7FA4\u7EC4\uFF0C\u5426\u5219\u5220\u9664\u5931\u8D25\u3002</td></tr><tr><td style="text-align:center;">gpasswd</td><td>\u7BA1\u7406\u7528\u6237\u7EC4\u3002</td></tr><tr><td style="text-align:center;">newgrep</td><td>\u8BBE\u7F6E\u521D\u59CB\u7EC4\u3002</td></tr></tbody></table><p>\u4E5F\u53EF\u4EE5\u9009\u62E9\u66F4\u4E3A\u7B80\u5355\u7684 <code>adduser</code>\u3001<code>deluser</code> \u8FDB\u884C\u4EA4\u4E92\u5F0F\u64CD\u4F5C\uFF0C\u53EF\u6DFB\u52A0 <code>-h</code> \u6765\u67E5\u770B\u5E2E\u52A9\u3002</p><h2 id="useradd-\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#useradd-\u89E3\u6790" aria-hidden="true">#</a> useradd \u89E3\u6790</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>useradd shanyuhai</p></div><p>\u8BE5\u547D\u4EE4\u4F1A\u5B8C\u6210\u4EE5\u4E0B\u51E0\u9879\u64CD\u4F5C\uFF1A</p><ol><li>\u5728 <code>/etc/passwd</code> \u6587\u4EF6\u4E2D\u65B0\u589E\u4E86\u4E00\u884C\u4E0E <code>shanyuhai</code> \u7528\u6237\u76F8\u5173\u7684\u6570\u636E\uFF1B</li><li>\u5728 <code>/etc/shadow</code> \u6587\u4EF6\u4E2D\u65B0\u589E\u4E86\u4E00\u884C\u4E0E <code>shanyuhai</code> \u7528\u6237\u5BC6\u7801\u76F8\u5173\u7684\u6570\u636E\uFF1B</li><li>\u5728 <code>/etc/group</code> \u6587\u4EF6\u4E2D\u65B0\u589E\u4E86\u4E00\u884C\u4E0E <code>shanyuhai</code> \u7684\u7FA4\u7EC4\uFF1B</li><li>\u5728 <code>/etc/gshadow</code> \u6587\u4EF6\u4E2D\u65B0\u589E\u4E00\u884C\u4E0E <code>shanyuhai</code> \u7FA4\u7EC4\u5BC6\u7801\u76F8\u5173\u7684\u6570\u636E\uFF1B</li><li>\u9ED8\u8BA4\u521B\u5EFA\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u548C\u90AE\u7BB1\uFF1B</li><li>\u5C06 <code>/etc/skel</code> \u76EE\u5F55\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u590D\u5236\u5230\u65B0\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u4E2D\u3002</li></ol><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>\u5229\u7528 <code>useradd -h</code> \u53EF\u770B\u5230\u8FDB\u4E00\u6B65\u7684\u8BF4\u660E\uFF1A</p><ul><li><code>-m</code>\uFF1A\u521B\u5EFA\u7528\u6237\u7684\u76EE\u5F55</li><li><code>-M</code>\uFF1A\u4E0D\u521B\u5EFA\u7528\u6237\u7684\u76EE\u5F55</li><li><code>-s</code>\uFF1A\u6307\u5B9A\u7528\u6237\u7684 Shell\uFF0C\u82E5\u6307\u5B9A <code>-s /usr/sbin/nologin</code> \u4F1A\u7981\u6B62\u7528\u6237\u767B\u5F55\u5E76\u7ED9\u51FA\u63D0\u793A\uFF0C\u800C <code>-s /bin/false</code> \u5219\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u72B6\u6001\uFF0C\u4E0D\u4F1A\u7ED9\u51FA\u63D0\u793A</li></ul><h2 id="userdel-\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#userdel-\u89E3\u6790" aria-hidden="true">#</a> userdel \u89E3\u6790</h2><p>\u5728\u6267\u884C userdel \u5220\u9664\u7528\u6237\u524D\u9700\u8981\u5148\u627E\u5230\u7528\u6237\u76F8\u5173\u7684\u6570\u636E\u5E76\u5220\u9664\u4E4B\u3002</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>find -user shanyuhai # \u627E\u51FA\u6240\u6709\u5E76\u5220\u9664</p><p>userdel shanyuhai</p></div><p>\u8BE5\u547D\u4EE4\u4F1A\u5B8C\u6210\u4EE5\u4E0B\u51E0\u9879\u64CD\u4F5C\uFF1A</p><ol><li>\u5220\u9664 <code>/etc/passed</code> \u8BB0\u5F55\uFF1B</li><li>\u5220\u9664 <code>/etc/shadow</code> \u8BB0\u5F55\uFF1B</li><li>\u5220\u9664 <code>/etc/group</code> \u8BB0\u5F55\uFF1B</li><li>\u5220\u9664 <code>/etc/gshadow</code> \u8BB0\u5F55\uFF1B</li><li>\u5220\u9664\u90AE\u7BB1\uFF1A<code>rm -rf /var/spod/mail/username</code>\uFF1B</li><li>\u5220\u9664\u5BB6\u76EE\u5F55\uFF1A<code>rm -rf /home/username</code>\uFF1B</li><li>\u6D4B\u8BD5 <code>useradd username</code>\uFF0C\u82E5\u6CA1\u6709\u62A5\u9519\u5219\u6210\u529F\u3002</li></ol><h2 id="\u7528\u6237\u8D4B\u6743" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u8D4B\u6743" aria-hidden="true">#</a> \u7528\u6237\u8D4B\u6743</h2><h3 id="_1-chown" tabindex="-1"><a class="header-anchor" href="#_1-chown" aria-hidden="true">#</a> 1. chown</h3><p>chown \u53EF\u4EE5\u6539\u53D8\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\u548C\u6240\u5C5E\u7EC4\uFF0C\u5F53\u662F\u76EE\u5F55\u65F6\u8BB0\u5F97\u52A0 <code>-R</code> \u9012\u5F52\u5904\u7406\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chown</span> shanyuhai:shanyuhai /home/shanyuhai
<span class="token comment"># \u6216\u6307\u5B9A\u4E3A\u5F53\u524D\u7528\u6237</span>
<span class="token function">chown</span> <span class="token environment constant">$USER</span> ~/.ssh/config
</code></pre></div><h3 id="_2-chmod" tabindex="-1"><a class="header-anchor" href="#_2-chmod" aria-hidden="true">#</a> 2. chmod</h3><table><thead><tr><th style="text-align:center;">\u89D2\u8272</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">u</td><td>User\uFF0C\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\u3002</td></tr><tr><td style="text-align:center;">g</td><td>Group\uFF0C\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u5C5E\u7EC4\u3002</td></tr><tr><td style="text-align:center;">o</td><td>Other\uFF0C\u5176\u4F59\u7528\u6237\u3002</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">\u6743\u9650</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td>\u8BFB\u53D6\u6743\u9650\uFF0C\u6570\u5B57\u4E3A 4\u3002</td></tr><tr><td style="text-align:center;">w</td><td>\u5199\u5165\u6743\u9650\uFF0C\u6570\u5B57\u4E3A 2\u3002</td></tr><tr><td style="text-align:center;">x</td><td>\u6267\u884C\uFF08\u76EE\u5F55\u5207\u6362\uFF09\uFF0C\u6570\u5B57\u4E3A 1\u3002</td></tr></tbody></table><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rw,o<span class="token operator">=</span>r /tmp/hello.txt
<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
<span class="token function">chmod</span> <span class="token number">764</span> /tmp/hello.txt

<span class="token comment"># \u8FFD\u52A0\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> u+x /tmp/hello.txt
</code></pre></div><h3 id="_3-setfacl" tabindex="-1"><a class="header-anchor" href="#_3-setfacl" aria-hidden="true">#</a> 3. setfacl</h3><p>\u4EC5\u4F7F\u7528\u4EE5\u4E0A\u4E24\u79CD\u65B9\u6848\u65E0\u6CD5\u89E3\u51B3\u66F4\u4E3A\u590D\u6742\u7684\u6743\u9650\u95EE\u9898\uFF0C\u8FD9\u65F6\u9700\u8981\u5F15\u5165 ACL\uFF08Access Control List\uFF09 \u6765\u89E3\u51B3\u95EE\u9898\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5F00\u59CB\u524D\u53EF\u4EE5\u5148\u770B\u5DF2\u77E5\u6743\u9650</span>
getfacl /tmp/hello.txt

<span class="token comment"># 1. \u57FA\u4E8E\u7528\u6237</span>
<span class="token function">useradd</span> acl01 <span class="token comment"># ACL</span>
ll hello.txt <span class="token comment"># \u67E5\u770B</span>
setfacl -m u:acl01:rx hello.txt
ll hello.txt <span class="token comment"># \u53EF\u4EE5\u6CE8\u610F\u5230\u6743\u9650\u4F4D\u540E\u9762\u591A\u4E86\u4E00\u4E2A \`+\`\uFF0C\u8868\u793A\u8BE5\u6587\u4EF6\u62E5\u6709 ACL \u6743\u9650</span>

getfacl /tmp/hello.txt <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># 2. \u57FA\u4E8E\u7528\u6237\u7EC4</span>
<span class="token function">groupadd</span> acl02 <span class="token comment"># ACL</span>
setfacl -m g:acl02:rx hello.txt

getfacl hello.txt <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u7ED9\u7236\u76EE\u5F55\u8BBE\u5B9A\u4E86\u9ED8\u8BA4 ACL \u6743\u9650\uFF0C\u90A3\u4E48\u7236\u76EE\u5F55\u4E4B\u540E\u65B0\u5EFA\u7684\u5B50\u6587\u4EF6\u90FD\u4F1A\u7EE7\u627F\u7236\u76EE\u5F55\u7684 ACL \u6743\u9650\uFF08\u672A\u8BBE\u7F6E\u5219\u4EC5\u5BF9\u76EE\u5F55\u751F\u6548\uFF09\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /tmp/hi
setfacl -m d:u:acl01:rx /tmp/hi
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u597D&quot;</span> <span class="token operator">&gt;</span> /tmp/hi/chinese.txt

getfacl /tmp/hi/chinese.txt <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div>`,34);function s(d,l){return n}var r=e(a,[["render",s]]);export{r as default};