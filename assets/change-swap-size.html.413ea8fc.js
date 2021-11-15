import{e as s}from"./app.7bb28453.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=s(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u6709\u65F6\u7CFB\u7EDF\uFF08<code>ubuntu20.04</code>\uFF09\u90E8\u5206\u5E94\u7528\u63D0\u793A 502\u3002</p><h2 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4</h2><h3 id="_1-\u521D\u59CB\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u72B6\u6001" aria-hidden="true">#</a> 1. \u521D\u59CB\u72B6\u6001</h3><p>\u67E5\u770B\u5927\u5C0F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">free</span> -h

              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:           15Gi       <span class="token number">3</span>.5Gi       <span class="token number">9</span>.7Gi        14Mi       <span class="token number">2</span>.2Gi        11Gi
Swap:         <span class="token number">4</span>.0Gi          0B       <span class="token number">4</span>.0Gi
</code></pre></div><p>\u67E5\u770B\u4F4D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">swapon</span> -s

Filename                                Type            Size    Used    Priority
/swap.img                               <span class="token function">file</span>            <span class="token number">4194300</span> <span class="token number">0</span>       -2
</code></pre></div><h3 id="_2-\u65B0\u589E-swap" tabindex="-1"><a class="header-anchor" href="#_2-\u65B0\u589E-swap" aria-hidden="true">#</a> 2. \u65B0\u589E swap</h3><p>\u4E00\u822C swap \u4E3A\u5185\u5B58\u7684 1-1.5 \u500D\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swapfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1G <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">16</span>

<span class="token comment"># \u9A8C\u8BC1</span>
ll /sw*

<span class="token comment"># \u4FEE\u6539\u6587\u4EF6\u6743\u9650</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> 0600 /swapfile
<span class="token comment"># \u751F\u6210 swap</span>
<span class="token function">sudo</span> <span class="token function">mkswap</span> -f /swapfile

<span class="token comment"># \u9A8C\u8BC1</span>
ll /sw*
</code></pre></div><h3 id="_3-\u66FF\u6362-swap" tabindex="-1"><a class="header-anchor" href="#_3-\u66FF\u6362-swap" aria-hidden="true">#</a> 3. \u66FF\u6362 swap</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED\u65E7\u7684</span>
swapoff /swap.img
<span class="token comment"># \u542F\u7528\u65B0\u7684</span>
<span class="token function">sudo</span> <span class="token function">swapon</span> /swapfile

<span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">free</span> -h
</code></pre></div><h3 id="_4-\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 4. \u5F00\u673A\u542F\u52A8</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5907\u4EFD</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/fstab /etc/fstab.bak

<span class="token comment"># \u5C06\u5BF9\u5E94\u7684 /swap.img \u4FEE\u6539\u4E3A /swapfile</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab

<span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">sudo</span> <span class="token function">reboot</span>
<span class="token function">sudo</span> <span class="token function">rm</span> -f /swap.img <span class="token comment"># \u786E\u8BA4\u540E\u5220\u9664\u65E7 swap</span>
</code></pre></div>`,15);function p(o,c){return e}var i=a(n,[["render",p]]);export{i as default};
