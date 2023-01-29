import{_ as o,M as t,p as r,q as l,Q as a,t as e,N as c,a1 as n}from"./framework-49860b1b.js";const p="/assets/konsole-profile-command-4c719844.png",i={},d=n('<h1 id="konsole-无法启动" tabindex="-1"><a class="header-anchor" href="#konsole-无法启动" aria-hidden="true">#</a> Konsole 无法启动</h1><p>修改了 Konsole Profile 的 Command 后无法启动。</p><p><img src="'+p+`" alt="Konsole 无法启动"></p><h2 id="排查问题" tabindex="-1"><a class="header-anchor" href="#排查问题" aria-hidden="true">#</a> 排查问题</h2><h3 id="_1-默认操作" tabindex="-1"><a class="header-anchor" href="#_1-默认操作" aria-hidden="true">#</a> 1. 默认操作</h3><p>直接卸载重装 <code>Konsole</code>，失败。</p><h3 id="_2-删除配置文件" tabindex="-1"><a class="header-anchor" href="#_2-删除配置文件" aria-hidden="true">#</a> 2. 删除配置文件</h3><p>不要模仿，其余软件可能导致问题。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> konsole
<span class="token comment"># /usr/bin/konsole /usr/share/konsole</span>
<span class="token comment"># 删除以上文件夹内容，重装依旧失败</span>
</code></pre></div><h3 id="_3-找到-konsole-profile-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-找到-konsole-profile-配置文件" aria-hidden="true">#</a> 3. 找到 konsole profile 配置文件</h3><p>所以最后的问题就是找到 konsole profile 的配置文件。</p>`,11),h={href:"https://forum.manjaro.org/t/konsole-settings-are-not-persistent/2471/6",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"~/.local/share/konsole/xxx.profile",-1),m=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/konsole/Shell.profile

<span class="token comment"># 找到以下内容</span>
<span class="token punctuation">[</span>General<span class="token punctuation">]</span>
<span class="token assign-left variable">Command</span><span class="token operator">=</span>error <span class="token function">bash</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Shell
<span class="token assign-left variable">Parent</span><span class="token operator">=</span>FALLBACK/
<span class="token assign-left variable">StartInCurrentSessionDir</span><span class="token operator">=</span>true

<span class="token comment"># 将 Command 恢复</span>
</code></pre></div><p>重启启动 <code>Konsole</code>，启用成功。</p>`,2);function f(_,u){const s=t("ExternalLinkIcon");return r(),l("div",null,[d,a("p",null,[e("多番查找下找到了参考"),a("a",h,[e("内容"),c(s)]),e("，其中指出了配置文件所在位置为 "),k,e("。")]),m])}const b=o(i,[["render",f],["__file","konsole-profile-command.html.vue"]]);export{b as default};
