import{_ as s,p as n,q as e,a1 as p}from"./framework-e3e34937.js";const t={};function o(c,a){return n(),e("div",null,a[0]||(a[0]=[p(`<h1 id="修改-swap-分区大小" tabindex="-1"><a class="header-anchor" href="#修改-swap-分区大小" aria-hidden="true">#</a> 修改 swap 分区大小</h1><p>有时系统（<code>ubuntu20.04</code>）部分应用提示 502。</p><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><h3 id="_1-初始状态" tabindex="-1"><a class="header-anchor" href="#_1-初始状态" aria-hidden="true">#</a> 1. 初始状态</h3><p>查看大小：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-h</span>

              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:           15Gi       <span class="token number">3</span>.5Gi       <span class="token number">9</span>.7Gi        14Mi       <span class="token number">2</span>.2Gi        11Gi
Swap:         <span class="token number">4</span>.0Gi          0B       <span class="token number">4</span>.0Gi
</code></pre></div><p>查看位置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">swapon</span> <span class="token parameter variable">-s</span>

Filename                                Type            Size    Used    Priority
/swap.img                               <span class="token function">file</span>            <span class="token number">4194300</span> <span class="token number">0</span>       <span class="token parameter variable">-2</span>
</code></pre></div><h3 id="_2-新增-swap" tabindex="-1"><a class="header-anchor" href="#_2-新增-swap" aria-hidden="true">#</a> 2. 新增 swap</h3><p>一般 swap 为内存的 1-1.5 倍。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swapfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1G <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">16</span>

<span class="token comment"># 验证</span>
ll /sw*

<span class="token comment"># 修改文件权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> 0600 /swapfile
<span class="token comment"># 生成 swap</span>
<span class="token function">sudo</span> <span class="token function">mkswap</span> <span class="token parameter variable">-f</span> /swapfile

<span class="token comment"># 验证</span>
ll /sw*
</code></pre></div><h3 id="_3-替换-swap" tabindex="-1"><a class="header-anchor" href="#_3-替换-swap" aria-hidden="true">#</a> 3. 替换 swap</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭旧的</span>
swapoff /swap.img
<span class="token comment"># 启用新的</span>
<span class="token function">sudo</span> <span class="token function">swapon</span> /swapfile

<span class="token comment"># 验证</span>
<span class="token function">free</span> <span class="token parameter variable">-h</span>
</code></pre></div><h3 id="_4-开机启动" tabindex="-1"><a class="header-anchor" href="#_4-开机启动" aria-hidden="true">#</a> 4. 开机启动</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/fstab /etc/fstab.bak

<span class="token comment"># 将对应的 /swap.img 修改为 /swapfile</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab

<span class="token comment"># 验证</span>
<span class="token function">sudo</span> <span class="token function">reboot</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> /swap.img <span class="token comment"># 确认后删除旧 swap</span>
</code></pre></div>`,15)]))}const i=s(t,[["render",o],["__file","change-swap-size.html.vue"]]);export{i as default};
