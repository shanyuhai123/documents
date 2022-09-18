import{r as o,c as p,a as n,b as e,F as c,d as s,e as t,o as l}from"./app.aeebbc6c.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},u=n("h1",{id:"arch-\u7CFB\u7EDF\u8FC1\u79FB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arch-\u7CFB\u7EDF\u8FC1\u79FB","aria-hidden":"true"},"#"),s(" Arch \u7CFB\u7EDF\u8FC1\u79FB")],-1),d=n("blockquote",null,[n("p",null,"\u4E70\u4E86\u65B0\u786C\u76D8\uFF0C\u600E\u4E48\u53EF\u4EE5\u5403\u7070\u5462\uFF1F")],-1),k=n("h2",{id:"\u5236\u4F5C-arch-live",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5236\u4F5C-arch-live","aria-hidden":"true"},"#"),s(" \u5236\u4F5C Arch Live")],-1),h=s("\u9996\u5148\u4E0B\u8F7D\u65B0"),m={href:"https://archlinux.org/download/",target:"_blank",rel:"noopener noreferrer"},b=s("\u955C\u50CF"),g=s("\u3002"),f=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7528U\u76D8\u66FF\u6362 /dev/sdx\uFF0C\u5982 /dev/sdb\u3002\uFF08\u4E0D\u8981\u52A0\u4E0A\u6570\u5B57\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u8981\u952E\u5165 /dev/sdb1 \u4E4B\u7C7B\u7684\u4E1C\u897F)</span>
<span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span>4M <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/to/archlinux.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">status</span><span class="token operator">=</span>progress <span class="token operator">&amp;&amp;</span> <span class="token function">sync</span>
</code></pre></div><h2 id="\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#\u5206\u533A" aria-hidden="true">#</a> \u5206\u533A</h2><h3 id="_1-\u67E5\u770B\u5206\u533A\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u5206\u533A\u4FE1\u606F" aria-hidden="true">#</a> 1. \u67E5\u770B\u5206\u533A\u4FE1\u606F</h3><p>\u9996\u5148\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u7684\u5206\u533A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">fdisk</span> -l
</code></pre></div><p>\u5F97\u5230\u78C1\u76D8\u4FE1\u606F\uFF1A</p><div class="language-txt ext-txt"><pre class="language-txt"><code># \u5F53\u524D\u78C1\u76D8
Disk /dev/nvme0n1\uFF1A476.94 GiB
\u8BBE\u5907               \u8D77\u70B9       \u672B\u5C3E      \u6247\u533A   \u5927\u5C0F \u7C7B\u578B
/dev/nvme0n1p1     2048    2099199   2097152     1G EFI \u7CFB\u7EDF
/dev/nvme0n1p2  2099200   35653631  33554432    16G Linux swap
/dev/nvme0n1p3 35653632 1000215182 964561551 459.9G Linux \u6587\u4EF6\u7CFB\u7EDF
# \u65B0\u78C1\u76D8
Disk /dev/nvme1n1\uFF1A476.94 GiB
</code></pre></div><h3 id="_2-\u65B0\u78C1\u76D8\u4FEE\u6539\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_2-\u65B0\u78C1\u76D8\u4FEE\u6539\u5206\u533A" aria-hidden="true">#</a> 2. \u65B0\u78C1\u76D8\u4FEE\u6539\u5206\u533A</h3><p>\u9996\u5148\u8FDB\u5165\u65B0\u78C1\u76D8\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">fdisk</span> /dev/nvme1n1
</code></pre></div><p>\u6839\u636E\u63D0\u793A\uFF0C\u4F9D\u6B21\u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1An
\u5206\u533A\u53F7 <span class="token punctuation">(</span><span class="token number">1</span>-128, \u9ED8\u8BA4  <span class="token number">1</span><span class="token punctuation">)</span>:
\u7B2C\u4E00\u4E2A\u6247\u533A <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, \u9ED8\u8BA4 <span class="token number">2048</span><span class="token punctuation">)</span>:
\u6700\u540E\u4E00\u4E2A\u6247\u533A\uFF0C+/-sectors \u6216 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2048</span>-1000215182, \u9ED8\u8BA4 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +1G

\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u5206\u533A <span class="token number">1</span>\uFF0C\u7C7B\u578B\u4E3A\u201CLinux filesystem\u201D\uFF0C\u5927\u5C0F\u4E3A <span class="token number">1</span> GiB\u3002
\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1An
\u5206\u533A\u53F7 <span class="token punctuation">(</span><span class="token number">2</span>-128, \u9ED8\u8BA4  <span class="token number">2</span><span class="token punctuation">)</span>:
\u7B2C\u4E00\u4E2A\u6247\u533A <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, \u9ED8\u8BA4 <span class="token number">2099200</span><span class="token punctuation">)</span>:
\u6700\u540E\u4E00\u4E2A\u6247\u533A\uFF0C+/-sectors \u6216 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2099200</span>-1000215182, \u9ED8\u8BA4 <span class="token number">1000214527</span><span class="token punctuation">)</span>: +16G

\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u5206\u533A <span class="token number">2</span>\uFF0C\u7C7B\u578B\u4E3A\u201CLinux filesystem\u201D\uFF0C\u5927\u5C0F\u4E3A <span class="token number">16</span> GiB\u3002
\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1An
\u5206\u533A\u53F7 <span class="token punctuation">(</span><span class="token number">3</span>-128, \u9ED8\u8BA4  <span class="token number">3</span><span class="token punctuation">)</span>:
\u7B2C\u4E00\u4E2A\u6247\u533A <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, \u9ED8\u8BA4 <span class="token number">35653632</span><span class="token punctuation">)</span>:
\u6700\u540E\u4E00\u4E2A\u6247\u533A\uFF0C+/-sectors \u6216 +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">35653632</span>-1000215182, \u9ED8\u8BA4 <span class="token number">1000214527</span><span class="token punctuation">)</span>:

\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u5206\u533A <span class="token number">3</span>\uFF0C\u7C7B\u578B\u4E3A\u201CLinux filesystem\u201D\uFF0C\u5927\u5C0F\u4E3A <span class="token number">459.9</span> GiB\u3002
\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1At
\u5206\u533A\u53F7 <span class="token punctuation">(</span><span class="token number">1</span>-3, \u9ED8\u8BA4  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">1</span>
\u5206\u533A\u7C7B\u578B\u6216\u522B\u540D\uFF08\u8F93\u5165 L \u5217\u51FA\u6240\u6709\u7C7B\u578B\uFF09\uFF1AL
\u5206\u533A\u7C7B\u578B\u6216\u522B\u540D\uFF08\u8F93\u5165 L \u5217\u51FA\u6240\u6709\u7C7B\u578B\uFF09\uFF1A1

\u5DF2\u5C06\u5206\u533A\u201CLinux filesystem\u201D\u7684\u7C7B\u578B\u66F4\u6539\u4E3A\u201CEFI System\u201D\u3002
\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1At
\u5206\u533A\u53F7 <span class="token punctuation">(</span><span class="token number">1</span>-3, \u9ED8\u8BA4  <span class="token number">3</span><span class="token punctuation">)</span>: <span class="token number">2</span>
\u5206\u533A\u7C7B\u578B\u6216\u522B\u540D\uFF08\u8F93\u5165 L \u5217\u51FA\u6240\u6709\u7C7B\u578B\uFF09\uFF1A19

\u5DF2\u5C06\u5206\u533A\u201CLinux filesystem\u201D\u7684\u7C7B\u578B\u66F4\u6539\u4E3A\u201CLinux swap\u201D\u3002
\u547D\u4EE4<span class="token punctuation">(</span>\u8F93\u5165 m \u83B7\u53D6\u5E2E\u52A9<span class="token punctuation">)</span>\uFF1Aw
\u5206\u533A\u8868\u5DF2\u8C03\u6574\u3002\u5C06\u8C03\u7528 ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> \u6765\u91CD\u65B0\u8BFB\u5206\u533A\u8868\u3002\u6B63\u5728\u540C\u6B65\u78C1\u76D8\u3002
</code></pre></div><p>\u6CE8\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>n: \u65B0\u5EFA\u5206\u533A
+16G: \u65B0\u5EFA\u5206\u533A\u7684\u5927\u5C0F\u4E3A 16G
t\uFF1A\u4FEE\u6539\u5206\u533A\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u90FD\u4E3A
L\uFF1A\u67E5\u770B\u6240\u6709\u7684\u5206\u533A\u7C7B\u578B\uFF0C\u627E\u5230\u4F60\u9700\u8981\u7684
</code></pre></div><p>\u64CD\u4F5C\u5B8C\u6210\u540E\u53EF\u81EA\u884C\u67E5\u770B\u7ED3\u679C <code>fdsik -l</code>\u3002</p><h3 id="_3-\u5206\u533A\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u533A\u683C\u5F0F\u5316" aria-hidden="true">#</a> 3. \u5206\u533A\u683C\u5F0F\u5316</h3><p>\u6BCF\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u5206\u533A\u9700\u8981\u4E0D\u540C\u64CD\u4F5C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F\u5316 boot</span>
mkfs.fat -F32 /dev/nvme1n1p1
<span class="token comment"># \u683C\u5F0F\u5316 swap</span>
<span class="token function">mkswap</span> /dev/nvme1n1p2
<span class="token comment"># \u683C\u5F0F\u5316 \u6839\u5206\u533A</span>
mkfs.ext4 /dev/nvme1n1p3
</code></pre></div><h2 id="\u7CFB\u7EDF\u6587\u4EF6\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u6587\u4EF6\u8FC1\u79FB" aria-hidden="true">#</a> \u7CFB\u7EDF\u6587\u4EF6\u8FC1\u79FB</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6302\u8F7D\u6839\u5206\u533A</span>
<span class="token function">mount</span> /dev/nvme1n1p3 /mnt
<span class="token comment"># \u540C\u6B65\u6570\u636E\uFF0C\u6B64\u5904\u672A\u540C\u6B65 boot</span>
<span class="token function">rsync</span> -aAXv /* /mnt --exclude<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/dev/*&quot;</span>,<span class="token string">&quot;/proc/*&quot;</span>,<span class="token string">&quot;/sys/*&quot;</span>,<span class="token string">&quot;/tmp/*&quot;</span>,<span class="token string">&quot;/run/*&quot;</span>,<span class="token string">&quot;/mnt/*&quot;</span>,<span class="token string">&quot;/media/*&quot;</span>,<span class="token string">&quot;/lost+found&quot;</span>,<span class="token string">&quot;/boot&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u7531\u4E8E\u7ECF\u5E38\u641E\u5D29\u7535\u8111\uFF0C\u8FD8\u662F\u7EC3\u4E60\u4E0B\u62C6\u5F00\u6B65\u9AA4\u7684\u5F62\u5F0F\u3002</p><h2 id="\u91CD\u5EFA-boot" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5EFA-boot" aria-hidden="true">#</a> \u91CD\u5EFA boot</h2><p>\u79FB\u9664\u65E7\u78C1\u76D8\uFF0C\u518D\u8FDB\u5165\u51C6\u5907\u597D\u7684 <code>Arch Live</code> \u73AF\u5883\u3002</p><h3 id="_1-\u6302\u8F7D\u5206\u533A\u5E76\u751F\u6210-fstab" tabindex="-1"><a class="header-anchor" href="#_1-\u6302\u8F7D\u5206\u533A\u5E76\u751F\u6210-fstab" aria-hidden="true">#</a> 1. \u6302\u8F7D\u5206\u533A\u5E76\u751F\u6210 fstab</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5206\u533A\u4FE1\u606F</span>
<span class="token function">fdisk</span> -l
<span class="token comment"># \u6302\u8F7D\u6839\u8282\u70B9</span>
<span class="token function">mount</span> /dev/nvme0n1p3 /mnt
<span class="token comment"># \u6302\u8F7D boot</span>
<span class="token function">mount</span> /dev/nvme0n1p1 /mnt/boot
<span class="token comment"># \u751F\u6210 fstab</span>
genfstab -L /mnt <span class="token operator">&gt;</span> /mnt/etc/fstab
</code></pre></div>`,25),v=s("\u82E5\u540E\u7EED\u542F\u7528 "),_={href:"https://wiki.archlinux.org/title/Swap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},x=s("swap"),q=s("\uFF0C\u5219\u518D\u6267\u884C "),L=n("code",null,"genfstab",-1),y=s(" \u5373\u53EF\u3002"),G=t(`<h3 id="_2-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> 2. \u5B89\u88C5\u4F9D\u8D56</h3><p>\u8FDB\u5165\u7CFB\u7EDF\u5E76\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>arch-chroot /mnt
pacman -S linux mkinitcpio efibootmgr
<span class="token comment"># \u6709\u9700\u8981\u4E5F\u53EF\u91CD\u88C5 grub</span>
pacman -S grub
</code></pre></div><h3 id="_3-\u751F\u6210-grub" tabindex="-1"><a class="header-anchor" href="#_3-\u751F\u6210-grub" aria-hidden="true">#</a> 3. \u751F\u6210 grub</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C grub-install</span>
grub-install --efi-directory<span class="token operator">=</span>/boot
<span class="token comment"># \u751F\u6210 grub.cfg\uFF08\u82E5\u62A5\u9519\uFF0C\u53EF\u589E\u52A0 LANG=C\uFF09</span>
<span class="token function">grub-mkconfig</span> -o /boot/grub/grub.cfg
<span class="token comment"># LANG=C grub-mkconfig -o /boot/grub/grub.cfg</span>
</code></pre></div><h2 id="\u5176\u4ED6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u5F0F" aria-hidden="true">#</a> \u5176\u4ED6\u65B9\u5F0F</h2><blockquote><p>\u672A\u66FE\u5C1D\u8BD5</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># disk</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy <span class="token assign-left variable">conv</span><span class="token operator">=</span>noerror,sync
<span class="token comment"># image</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">of</span><span class="token operator">=</span>/run/media/shanyuhai/xxx/sys.img
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sys.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdy
</code></pre></div>`,8);function B(w,A){const a=o("OutboundLink");return l(),p(c,null,[u,d,k,n("p",null,[h,n("a",m,[b,e(a)]),g]),f,n("p",null,[v,n("a",_,[x,e(a)]),q,L,y]),G],64)}var S=i(r,[["render",B]]);export{S as default};
