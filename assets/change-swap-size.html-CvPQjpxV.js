import{_ as a,c as n,a as e,o as p}from"./app-BCSwjUcF.js";const l={};function t(c,s){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="修改-swap-分区大小" tabindex="-1"><a class="header-anchor" href="#修改-swap-分区大小"><span>修改 swap 分区大小</span></a></h1><p>有时系统（<code>ubuntu20.04</code>）部分应用提示 502。</p><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h2><h3 id="_1-初始状态" tabindex="-1"><a class="header-anchor" href="#_1-初始状态"><span>1. 初始状态</span></a></h3><p>查看大小：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">free</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span>
<span class="line">              total        used        <span class="token function">free</span>      shared  buff/cache   available</span>
<span class="line">Mem:           15Gi       <span class="token number">3</span>.5Gi       <span class="token number">9</span>.7Gi        14Mi       <span class="token number">2</span>.2Gi        11Gi</span>
<span class="line">Swap:         <span class="token number">4</span>.0Gi          0B       <span class="token number">4</span>.0Gi</span>
<span class="line"></span></code></pre></div><p>查看位置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">swapon</span> <span class="token parameter variable">-s</span></span>
<span class="line"></span>
<span class="line">Filename                                Type            Size    Used    Priority</span>
<span class="line">/swap.img                               <span class="token function">file</span>            <span class="token number">4194300</span> <span class="token number">0</span>       <span class="token parameter variable">-2</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-新增-swap" tabindex="-1"><a class="header-anchor" href="#_2-新增-swap"><span>2. 新增 swap</span></a></h3><p>一般 swap 为内存的 1-1.5 倍。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swapfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1G <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">16</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">ll /sw*</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改文件权限</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> 0600 /swapfile</span>
<span class="line"><span class="token comment"># 生成 swap</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkswap</span> <span class="token parameter variable">-f</span> /swapfile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">ll /sw*</span>
<span class="line"></span></code></pre></div><h3 id="_3-替换-swap" tabindex="-1"><a class="header-anchor" href="#_3-替换-swap"><span>3. 替换 swap</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 关闭旧的</span></span>
<span class="line">swapoff /swap.img</span>
<span class="line"><span class="token comment"># 启用新的</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">swapon</span> /swapfile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">free</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-开机启动" tabindex="-1"><a class="header-anchor" href="#_4-开机启动"><span>4. 开机启动</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 备份</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> /etc/fstab /etc/fstab.bak</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将对应的 /swap.img 修改为 /swapfile</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">reboot</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> /swap.img <span class="token comment"># 确认后删除旧 swap</span></span>
<span class="line"></span></code></pre></div>`,15)]))}const o=a(l,[["render",t]]),r=JSON.parse('{"path":"/os/ubuntu/change-swap-size.html","title":"修改 swap 分区大小","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"1. 初始状态","slug":"_1-初始状态","link":"#_1-初始状态","children":[]},{"level":3,"title":"2. 新增 swap","slug":"_2-新增-swap","link":"#_2-新增-swap","children":[]},{"level":3,"title":"3. 替换 swap","slug":"_3-替换-swap","link":"#_3-替换-swap","children":[]},{"level":3,"title":"4. 开机启动","slug":"_4-开机启动","link":"#_4-开机启动","children":[]}]}],"git":{"updatedTime":1637399796000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/ubuntu/change-swap-size.md"}');export{o as comp,r as data};
