import{_ as o,M as p,p as c,q as l,a1 as n,R as e,t as s,N as r}from"./framework-e3e34937.js";const i={},d={href:"https://github.com/Dreamacro/clash/releases",target:"_blank",rel:"noopener noreferrer"};function u(h,a){const t=p("ExternalLinkIcon");return c(),l("div",null,[a[3]||(a[3]=n(`<h1 id="代理工具" tabindex="-1"><a class="header-anchor" href="#代理工具" aria-hidden="true">#</a> 代理工具</h1><h2 id="shadowsocks" tabindex="-1"><a class="header-anchor" href="#shadowsocks" aria-hidden="true">#</a> Shadowsocks</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><p>通过任意形式安装即可。</p><h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h3><p>配置文件在 <code>/etc/shadowsocks/config.json</code>：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.xxx.xxx.xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> port<span class="token punctuation">,</span>
  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yourpassword&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefer_ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>文件名可以自定，且可以设置多个文件方便快速切换。</p><h3 id="_3-指定配置" tabindex="-1"><a class="header-anchor" href="#_3-指定配置" aria-hidden="true">#</a> 3. 指定配置</h3><p>指定一个配置文件，如之前的 <code>config.json</code> 文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sslocal <span class="token parameter variable">-c</span> /etc/shadowsocks/config.json
</code></pre></div><h3 id="_4-启动" tabindex="-1"><a class="header-anchor" href="#_4-启动" aria-hidden="true">#</a> 4. 启动</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过 \`@\` 指定配置 </span>
systemctl start shadowsocks@config
systemctl <span class="token builtin class-name">enable</span> shadowsocks@config
</code></pre></div><h2 id="qv2ray" tabindex="-1"><a class="header-anchor" href="#qv2ray" aria-hidden="true">#</a> Qv2ray</h2><blockquote><p>Qv2ray 在 manjaro 下经常一更新系统就崩，伤透了心</p></blockquote><h2 id="clash" tabindex="-1"><a class="header-anchor" href="#clash" aria-hidden="true">#</a> Clash</h2><h3 id="_1-安装-1" tabindex="-1"><a class="header-anchor" href="#_1-安装-1" aria-hidden="true">#</a> 1. 安装</h3>`,17)),e("p",null,[a[1]||(a[1]=s("在 ")),e("a",d,[a[0]||(a[0]=s("release")),r(t)]),a[2]||(a[2]=s(" 中选择一个适合你的，并解压。"))]),a[4]||(a[4]=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/clash /usr/local/bin
</code></pre></div><h3 id="_2-初试" tabindex="-1"><a class="header-anchor" href="#_2-初试" aria-hidden="true">#</a> 2. 初试</h3><p>直接运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/bin

<span class="token comment"># 输出</span>
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> Can<span class="token string">&#39;t find config, create a initial config file
INFO[0000] Can&#39;</span>t <span class="token function">find</span> MMDB, start download
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> Mixed<span class="token punctuation">(</span>http+socks5<span class="token punctuation">)</span> proxy listening at: <span class="token number">127.0</span>.0.1:7890
</code></pre></div><p>然后呢？</p><h3 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h3><p>在一些教程中能够直接解析服务商提供的 base64，但我失败了，于是采取了取巧的方案，从已有的导出 <code>config.yaml</code> 配置即可。</p><h3 id="_4-守护进程" tabindex="-1"><a class="header-anchor" href="#_4-守护进程" aria-hidden="true">#</a> 4. 守护进程</h3><p>移入配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/config.yaml /etc/clash
<span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/Country.mmdb /etc/clash
</code></pre></div><p>新增 <code>systemd</code> 配置 <code>/etc/systemd/system/clash.service</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Clash daemon, A rule-based proxy <span class="token keyword">in</span> Go.
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/clash <span class="token parameter variable">-d</span> /etc/clash

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>启动：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 其他一致</span>
<span class="token function">sudo</span> systemctl start clash.service
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clash.service
</code></pre></div><h3 id="_5-premium-版" tabindex="-1"><a class="header-anchor" href="#_5-premium-版" aria-hidden="true">#</a> 5. premium 版</h3><p>越来越多的服务提供了 <code>proxy-groups</code> 及 <code>tun</code> 功能，这会导致普通版本的 <code>clash</code> 解析配置失败。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移除原有服务</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-R</span> clash
<span class="token function">sudo</span> systemctl stop clash.service
<span class="token function">sudo</span> systemctl disable clash.service

<span class="token comment"># 安装 premium 版</span>
yay <span class="token parameter variable">-S</span> clash-premium-bin
<span class="token function">sudo</span> systemctl start clash.service
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clash.service
</code></pre></div>`,17))])}const b=o(i,[["render",u],["__file","proxy-tools.html.vue"]]);export{b as default};
